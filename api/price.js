/**
 * Vercel 서버리스 함수
 * 공공데이터포털 주식시세 API를 안전하게 중계합니다.
 *
 * 호출 방법:
 *   GET /api/price?code=005930              → 현재가 조회
 *   GET /api/price?code=005930&days=30      → 최근 N일 일별 시세
 *   GET /api/price?codes=005930,035720      → 여러 종목 현재가 동시 조회
 */

const BASE_URL = 'http://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo';

export default async function handler(req, res) {
  // CORS 헤더 설정 (GitHub Pages에서 호출 허용)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const API_KEY = process.env.DATA_GO_KR_API_KEY;
  if (!API_KEY) {
    return res.status(500).json({ error: 'API 키가 설정되지 않았습니다.' });
  }

  const { code, codes, days } = req.query;

  try {
    // 여러 종목 동시 조회
    if (codes) {
      const codeList = codes.split(',').map(c => c.trim()).filter(Boolean);
      const results = await Promise.all(codeList.map(c => fetchCurrentPrice(c, API_KEY)));
      return res.status(200).json({ items: results.filter(Boolean) });
    }

    if (!code) {
      return res.status(400).json({ error: 'code 파라미터가 필요합니다.' });
    }

    // 일별 시세 (최근 N일)
    if (days) {
      const history = await fetchPriceHistory(code, parseInt(days), API_KEY);
      return res.status(200).json({ code, items: history });
    }

    // 현재가 단일 조회
    const price = await fetchCurrentPrice(code, API_KEY);
    return res.status(200).json(price);

  } catch (err) {
    console.error('API 오류:', err.message);
    return res.status(502).json({ error: '주가 데이터를 가져오지 못했습니다.' });
  }
}

// ────────────────────────────────────────────
// 현재가 조회
// ────────────────────────────────────────────
async function fetchCurrentPrice(code, apiKey) {
  const params = new URLSearchParams({
    serviceKey: apiKey,
    resultType:  'json',
    numOfRows:   '1',
    pageNo:      '1',
    likeSrtnCd:  code,
    beginBasDt:  getDateStr(0),   // 오늘
  });

  // 오늘 데이터가 없으면(장 마감 전 등) 최근 5일 중 최신 가져오기
  for (let offset = 0; offset <= 7; offset++) {
    params.set('beginBasDt', getDateStr(-offset - 4));
    params.set('endBasDt',   getDateStr(-offset));
    const data = await callApi(params);
    const item = data?.response?.body?.items?.item;
    if (item) {
      const latest = Array.isArray(item) ? item[0] : item;
      return {
        code:         latest.srtnCd  || code,
        name:         latest.itmsNm  || '',
        currentPrice: Number(latest.clpr)  || 0,   // 종가
        highPrice:    Number(latest.hipr)  || 0,   // 당일 고가
        lowPrice:     Number(latest.lopr)  || 0,   // 당일 저가
        openPrice:    Number(latest.mkp)   || 0,   // 시가
        volume:       Number(latest.trqu)  || 0,   // 거래량
        changeRate:   Number(latest.fltRt) || 0,   // 등락률
        baseDate:     latest.basDt || '',
      };
    }
  }
  return null;
}

// ────────────────────────────────────────────
// 일별 시세 (최근 N일)
// ────────────────────────────────────────────
async function fetchPriceHistory(code, days, apiKey) {
  const params = new URLSearchParams({
    serviceKey: apiKey,
    resultType:  'json',
    numOfRows:   String(days),
    pageNo:      '1',
    likeSrtnCd:  code,
    beginBasDt:  getDateStr(-days - 7),  // 여유 있게 조금 더 당겨서 조회
    endBasDt:    getDateStr(0),
  });

  const data = await callApi(params);
  const items = data?.response?.body?.items?.item;
  if (!items) return [];

  const list = Array.isArray(items) ? items : [items];
  return list
    .slice(0, days)
    .map(i => ({
      date:  i.basDt,
      close: Number(i.clpr) || 0,
      high:  Number(i.hipr) || 0,
      low:   Number(i.lopr) || 0,
      open:  Number(i.mkp)  || 0,
    }))
    .reverse(); // 날짜 오름차순 정렬
}

// ────────────────────────────────────────────
// 공통 API 호출
// ────────────────────────────────────────────
async function callApi(params) {
  const url = `${BASE_URL}?${params.toString()}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

// YYYYMMDD 형식 날짜 (offset: 오늘 기준 일수, 음수=과거)
function getDateStr(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10).replace(/-/g, '');
}
