/**
 * Vercel 서버리스 함수 - 한국투자증권(KIS) API 기반 실시간 주가 및 일별 시세 연동
 * * [기능]
 * 1. GET /api/price?code=439960&since=2026-05-11
 * → 실시간 현재가 + 상장일 이후 일별 시세 자동 정산 및 최고가(Peak) 분석
 * 2. GET /api/price?codes=439960,487580
 * → 메인/히스토리 화면용 여러 종목 복수 실시간 현재가 일괄 조회
 */

const KIS_BASE_URL = 'https://openapi.koreainvestment.com:9443'; // 실전 투자 서버 (모의투자는 :9443 유지 혹은 주소 변경)

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store, max-age=0'); // 실시간 시세이므로 캐시 비활성화

  const APP_KEY = process.env.KIS_APPKEY;
  const APP_SECRET = process.env.KIS_APPSECRET;

  if (!APP_KEY || !APP_SECRET) {
    return res.status(500).json({ 
      error: 'KIS_APPKEY 또는 KIS_APPSECRET 환경변수가 설정되지 않았습니다. .env 파일을 확인해주세요.' 
    });
  }

  const { code, codes, since } = req.query;

  try {
    // 1. 토큰 발급 (실전 앱에서는 토큰 유효기간을 캐싱하는 것이 좋으나, 서버리스 환경의 단순화를 위해 실시간 요청 프로토콜 구성)
    const accessToken = await getKISAccessToken(APP_KEY, APP_SECRET);

    // 2. 여러 종목 실시간 현재가 일괄 조회 프로토콜
    if (codes) {
      const codeList = codes.split(',').filter(Boolean);
      const items = await Promise.all(
        codeList.map(async (c) => {
          const priceData = await fetchKISCurrentPrice(c, accessToken, APP_KEY, APP_SECRET);
          return priceData ? { code: c, currentPrice: priceData.currentPrice } : null;
        })
      );
      return res.status(200).json({ items: items.filter(Boolean) });
    }

    // 3. 단일 종목 상세 조회 및 히스토리 차트 분석 프로토콜 (&since=YYYY-MM-DD)
    if (code) {
      const currentPriceData = await fetchKISCurrentPrice(code, accessToken, APP_KEY, APP_SECRET);
      if (!currentPriceData) {
        return res.status(404).json({ error: '해당 종목의 실시간 시세를 찾을 수 없습니다.' });
      }

      // 차트용 일별 추이 조회 (기존 공공데이터 API 스펙과 100% 호환되도록 포맷 마이그레이션)
      let dailyHistory = [];
      if (since) {
        dailyHistory = await fetchKISDailyHistory(code, since, accessToken, APP_KEY, APP_SECRET);
      }

      // 최고가(Peak) 데이터 자동 연산 및 분석
      let peakPrice = currentPriceData.currentPrice;
      let peakDate = '장중 실시간';
      
      if (dailyHistory.length > 0) {
        const sortedByHigh = [...dailyHistory].sort((a, b) => b.high - a.high);
        if (sortedByHigh[0].high > peakPrice) {
          peakPrice = sortedByHigh[0].high;
          peakDate = sortedByHigh[0].date;
        }
      }

      return res.status(200).json({
        code: code,
        name: currentPriceData.name,
        current: {
          price: currentPriceData.currentPrice,
          date: '실시간 (장중)'
        },
        firstDay: {
          close: dailyHistory.length > 0 ? dailyHistory[dailyHistory.length - 1].close : currentPriceData.currentPrice,
          date: since || '상장일'
        },
        peak: {
          price: peakPrice,
          date: peakDate
        },
        daily: dailyHistory // 프론트엔드 Chart.js 연동용 배열
      });
    }

    return res.status(400).json({ error: 'code 또는 codes 파라미터가 필요합니다.' });

  } catch (err) {
    return res.status(502).json({ error: 'KIS API 연동 실패: ' + err.message });
  }
}

/**
 * 한국투자증권 OAuth2 토큰 발급 함수
 */
async function getKISAccessToken(appKey, appSecret) {
  const res = await fetch(`${KIS_BASE_URL}/oauth2/tokenP`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      appkey: appKey,
      appsecret: appSecret
    })
  });
  const data = await res.json();
  if (!data.access_token) throw new Error('토큰 발급 실패: ' + JSON.stringify(data));
  return data.access_token;
}

/**
 * 주식 현재가 시세 조회 (Tr_id: FHKST01010100)
 */
async function fetchKISCurrentPrice(code, token, appKey, appSecret) {
  try {
    const res = await fetch(`${KIS_BASE_URL}/uapi/domestic-stock/v1/quotations/inquire-price?FID_COND_MRKT_DIV_CODE=J&FID_INPUT_ISCD=${code}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'authorization': `Bearer ${token}`,
        'appkey': appKey,
        'appsecret': appSecret,
        'tr_id': 'FHKST01010100',
        'custtype': 'P'
      }
    });
    const data = await res.json();
    if (data.output) {
      return {
        name: data.output.rprs_mrkt_kor_name || '',
        currentPrice: Number(data.output.stck_prpr)
      };
    }
    return null;
  } catch (e) {
    return null;
  }
}

/**
 * 주식 현재가 일자별 시세 조회 (Tr_id: FHKST01010400)
 * 상장일(since) 이후의 모든 일별 종가 및 고가를 역순 연산하여 반환
 */
async function fetchKISDailyHistory(code, since, token, appKey, appSecret) {
  try {
    const res = await fetch(`${KIS_BASE_URL}/uapi/domestic-stock/v1/quotations/inquire-daily-price?FID_COND_MRKT_DIV_CODE=J&FID_INPUT_ISCD=${code}&FID_PERIOD_DIV_CODE=D&FID_ORG_ADJ_PRC=0`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'authorization': `Bearer ${token}`,
        'appkey': appKey,
        'appsecret': appSecret,
        'tr_id': 'FHKST01010400',
        'custtype': 'P'
      }
    });
    const data = await res.json();
    if (!data.output || !Array.isArray(data.output)) return [];

    const targetDate = since.replace(/[^0-9]/g, ''); // '2026-05-11' -> '20260511'

    // KIS 일별 데이터를 기존 공공데이터 구조(날짜 오름차순)로 가공 및 상장일 이후 데이터만 필터링
    return data.output
      .map(item => ({
        date: `${item.stck_bsop_date.slice(0,4)}-${item.stck_bsop_date.slice(4,6)}-${item.stck_bsop_date.slice(6,8)}`,
        rawDate: item.stck_bsop_date,
        close: Number(item.stck_clpr),
        high: Number(item.stck_hgpr)
      }))
      .filter(item => item.rawDate >= targetDate)
      .reverse(); // 차트 렌더링 방향에 맞춰 오름차순 정렬
  } catch (e) {
    return [];
  }
}
