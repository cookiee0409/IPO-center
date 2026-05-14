/**
 * Vercel 서버리스 함수 - 공공데이터포털 주식시세 + 최고가 분석
 *
 * GET /api/price?code=463480&since=2026-04-25
 *   → 상장일(since) 이후 일별 시세 + 최고가 분석 자동 계산
 *
 * GET /api/price?code=463480&days=60
 *   → 최근 60일 시세
 *
 * GET /api/price?code=463480
 *   → 현재가 (단일)
 */

const BASE_URL = 'https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=3600');

  const API_KEY = process.env.DATA_GO_KR_API_KEY;
  if (!API_KEY) return res.status(500).json({ error: 'DATA_GO_KR_API_KEY 미설정' });

  const { code, codes, days, since } = req.query;

  try {
    // 여러 종목 현재가
    if (codes) {
      const list = codes.split(',').filter(Boolean);
      const items = await Promise.all(list.map(c => fetchCurrent(c, API_KEY)));
      return res.status(200).json({ items: items.filter(Boolean) });
    }

    if (!code) return res.status(400).json({ error: 'code 파라미터 필요' });

    // since(상장일) 기반 최고가 분석
    if (since) {
      const analysis = await analyzeFromListing(code, since, API_KEY);
      return res.status(200).json(analysis);
    }

    // 일별 시세
    if (days) {
      const history = await fetchHistory(code, parseInt(days), API_KEY);
      return res.status(200).json({ code, items: history });
    }

    // 현재가
    const current = await fetchCurrent(code, API_KEY);
    return res.status(200).json(current);

  } catch (err) {
    console.error('주가 API 오류:', err);
    return res.status(502).json({ error: err.message });
  }
}

// ── 상장일 이후 전체 분석 (최고가 추적용 핵심) ───────
async function analyzeFromListing(code, listingDate, apiKey) {
  const startDate = listingDate.replace(/-/g, '');
  const endDate = ymd(0);

  // 상장일부터 오늘까지 일별 시세 전부 가져오기
  // 최대 1000개까지 한번에 (numOfRows)
  const params = new URLSearchParams({
    serviceKey: apiKey,
    resultType: 'json',
    numOfRows: '1000',
    pageNo: '1',
    likeSrtnCd: code,
    beginBasDt: startDate,
    endBasDt: endDate,
  });

  const data = await callApi(params);
  const items = data?.response?.body?.items?.item;
  if (!items) {
    return { code, listingDate, error: '시세 데이터 없음', daily: [] };
  }

  const list = (Array.isArray(items) ? items : [items])
    .map(i => ({
      date: `${i.basDt.slice(0,4)}-${i.basDt.slice(4,6)}-${i.basDt.slice(6,8)}`,
      close: Number(i.clpr) || 0,
      high: Number(i.hipr) || 0,
      low: Number(i.lopr) || 0,
      open: Number(i.mkp) || 0,
      volume: Number(i.trqu) || 0,
    }))
    .filter(d => d.close > 0)
    .sort((a, b) => a.date.localeCompare(b.date));  // 오름차순

  if (!list.length) {
    return { code, listingDate, error: '유효한 시세 없음', daily: [] };
  }

  // 첫날 데이터
  const firstDay = list[0];
  // 최고가 (당일 고가 기준)
  const peak = list.reduce((max, d) => d.high > max.high ? d : max, list[0]);
  // 현재가 (최신 종가)
  const latest = list[list.length - 1];

  // 상장일로부터 며칠째인지
  const listingDt = new Date(listingDate);
  const peakDt = new Date(peak.date);
  const daysToPeak = Math.round((peakDt - listingDt) / 86400000);
  const totalDays = Math.round((new Date() - listingDt) / 86400000);

  return {
    code,
    listingDate,
    name: data.response.body.items.item[0]?.itmsNm || '',
    daily: list,                          // 전체 일별 시세
    firstDay: {
      date: firstDay.date,
      close: firstDay.close,
      high: firstDay.high,
    },
    peak: {
      date: peak.date,
      price: peak.high,                   // 최고가
      daysAfterListing: daysToPeak,       // 상장 후 며칠째
    },
    current: {
      date: latest.date,
      price: latest.close,
    },
    totalDaysListed: totalDays,
  };
}

async function fetchCurrent(code, apiKey) {
  // 최근 7일 안에서 가장 최신 데이터 조회
  for (let off = 0; off <= 7; off++) {
    const params = new URLSearchParams({
      serviceKey: apiKey,
      resultType: 'json',
      numOfRows: '1',
      pageNo: '1',
      likeSrtnCd: code,
      beginBasDt: ymd(-off - 4),
      endBasDt: ymd(-off),
    });
    const data = await callApi(params);
    const item = data?.response?.body?.items?.item;
    if (item) {
      const latest = Array.isArray(item) ? item[0] : item;
      return {
        code: latest.srtnCd || code,
        name: latest.itmsNm || '',
        currentPrice: Number(latest.clpr) || 0,
        highPrice: Number(latest.hipr) || 0,
        changeRate: Number(latest.fltRt) || 0,
        baseDate: latest.basDt || '',
      };
    }
  }
  return null;
}

async function fetchHistory(code, days, apiKey) {
  const params = new URLSearchParams({
    serviceKey: apiKey,
    resultType: 'json',
    numOfRows: String(days),
    pageNo: '1',
    likeSrtnCd: code,
    beginBasDt: ymd(-days - 7),
    endBasDt: ymd(0),
  });
  const data = await callApi(params);
  const items = data?.response?.body?.items?.item;
  if (!items) return [];
  return (Array.isArray(items) ? items : [items])
    .map(i => ({
      date: `${i.basDt.slice(0,4)}-${i.basDt.slice(4,6)}-${i.basDt.slice(6,8)}`,
      close: Number(i.clpr) || 0,
      high: Number(i.hipr) || 0,
      low: Number(i.lopr) || 0,
    }))
    .reverse();
}

async function callApi(params) {
  const res = await fetch(`${BASE_URL}?${params}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

function ymd(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10).replace(/-/g, '');
}
