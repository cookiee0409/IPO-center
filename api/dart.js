/**
 * Vercel 서버리스 함수 - DART 공모주 자동 수집
 *
 * 공식 API:
 *   1) DS001 공시목록 → 최근 증권신고서(지분증권) 목록
 *   2) DS006 지분증권(estkRs) → 청약일·공모가·주관사 정형 데이터
 *
 * 호출: GET /api/dart?days=60
 */

const DART = 'https://opendart.fss.or.kr/api';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=21600, stale-while-revalidate');

  const key = process.env.DART_API_KEY;
  if (!key) return res.status(500).json({ error: 'DART_API_KEY 환경변수가 없습니다.' });

  const days = Math.min(parseInt(req.query.days || '60'), 90);

  try {
    const disclosures = await fetchDisclosureList(key, days);
    if (!disclosures.length) return res.status(200).json({ items: [] });

    const results = await Promise.allSettled(
      disclosures.map(d => fetchEquityDetail(key, d))
    );

    const items = results
      .filter(r => r.status === 'fulfilled' && r.value)
      .map(r => r.value)
      .filter((item, idx, arr) =>
        arr.findIndex(x => x.corp_code === item.corp_code) === idx
      );

    return res.status(200).json({ items, total: items.length });
  } catch (err) {
    console.error('DART 오류:', err);
    return res.status(502).json({ error: err.message });
  }
}

async function fetchDisclosureList(key, days) {
  const params = new URLSearchParams({
    crtfc_key: key,
    pblntf_ty: 'C',
    pblntf_detail_ty: 'C001',
    bgn_de: dateStr(-days),
    end_de: dateStr(0),
    page_no: '1',
    page_count: '40',
  });
  const res = await fetch(`${DART}/list.json?${params}`);
  const data = await res.json();
  if (data.status !== '000') return [];
  return (data.list || []).filter(d => !d.report_nm?.includes('효력발생'));
}

async function fetchEquityDetail(key, disclosure) {
  const { corp_code, corp_name, rcept_no, rcept_dt } = disclosure;
  const params = new URLSearchParams({
    crtfc_key: key,
    corp_code,
    bgn_de: rcept_dt,
    end_de: dateStr(30),
  });
  const res = await fetch(`${DART}/estkRs.json?${params}`);
  const data = await res.json();
  if (data.status !== '000' || !data.group) return null;

  const groups = Array.isArray(data.group) ? data.group : [data.group];
  const general      = groups.find(g => g.title === '일반사항')?.list || [];
  const securities   = groups.find(g => g.title === '증권의종류')?.list || [];
  const underwriters = groups.find(g => g.title === '인수인정보')?.list || [];

  const generalItem = toFirst(general);
  const { subscribeStart, subscribeEnd } = parseDateRange(generalItem?.sbd || '');
  if (!subscribeStart) return null;

  const secItem = toFirst(securities.filter(s => s.stksen?.includes('보통주'))) || toFirst(securities);
  const sharesRaw = parseNum(secItem?.stkcnt);
  const { low: priceLow, high: priceHigh, final: finalPrice } = parsePriceField(secItem?.slprc);
  const minDeposit = priceHigh ? priceHigh * 10 * 0.5 : null;

  const leadUW = underwriters.filter(u => u.actsen?.includes('대표')).map(u => cleanName(u.actnmn));
  const allUW  = underwriters.map(u => cleanName(u.actnmn)).filter((v, i, a) => v && a.indexOf(v) === i);
  const secList = leadUW.length ? leadUW : allUW.slice(0, 3);

  const listingDate = estimateListingDate(generalItem?.pymd || '');
  const status = inferStatus(subscribeStart, subscribeEnd, listingDate);

  return {
    id: `dart_${rcept_no}`, corp_code, name: corp_name, code: '', status,
    subscribeStart, subscribeEnd, listingDate,
    priceRange: [priceLow, priceHigh], finalPrice,
    securities: secList, minDeposit, totalShares: sharesRaw,
    sector: '', competitionRate: null, lockup: null, equalShares: null,
    firstDayClose: null, allTimeHigh: null, allTimeHighDate: null, currentPrice: null,
    source: 'dart',
    dartUrl: `https://dart.fss.or.kr/dsaf001/main.do?rcpNo=${rcept_no}`,
  };
}

function parseDateRange(raw) {
  if (!raw) return {};
  const parts = raw.replace(/\s/g, '').split(/[~～]/);
  const toISO = s => s?.length === 8 ? `${s.slice(0,4)}-${s.slice(4,6)}-${s.slice(6,8)}` : null;
  return { subscribeStart: toISO(parts[0]), subscribeEnd: toISO(parts[1] || parts[0]) };
}

function parsePriceField(raw) {
  if (!raw) return {};
  const clean = raw.replace(/[,원\s]/g, '');
  if (clean.includes('~')) {
    const [a, b] = clean.split('~').map(Number);
    return { low: a, high: b, final: null };
  }
  const n = Number(clean);
  return n ? { low: n, high: n, final: n } : {};
}

function parseNum(v) {
  const n = Number(String(v || '').replace(/[,\s]/g, ''));
  return isNaN(n) || n === 0 ? null : n;
}

function toFirst(arr) { return Array.isArray(arr) ? arr[0] : arr; }

function cleanName(name) {
  return (name || '').replace(/(주식회사|\(주\)|㈜)/g, '').trim();
}

function estimateListingDate(pymd) {
  if (!pymd || pymd.length < 8) return null;
  const d = new Date(`${pymd.slice(0,4)}-${pymd.slice(4,6)}-${pymd.slice(6,8)}`);
  d.setDate(d.getDate() + 10);
  return d.toISOString().slice(0, 10);
}

function inferStatus(start, end, listing) {
  const today = new Date(); today.setHours(0,0,0,0);
  const s = new Date(start);
  const e = end ? new Date(end) : s;
  if (today < s)  return 'upcoming';
  if (today <= e) return 'subscribing';
  if (listing && today >= new Date(listing)) return 'listed';
  return 'upcoming';
}

function dateStr(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0,10).replace(/-/g,'');
}
