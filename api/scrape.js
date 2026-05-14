/**
 * Vercel 서버리스 함수 - 38커뮤니케이션 공모주 스크래핑
 * GET /api/scrape
 */

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=600');

  try {
    const [upcoming, listed] = await Promise.all([
      scrapeIPOList('k'),  // 청약 예정/진행
      scrapeIPOList('r'),  // 최근 상장 완료
    ]);

    const items = [
      ...upcoming.map(d => ({ ...d, status: inferStatus(d) })),
      ...listed.map(d => ({ ...d, status: 'listed' })),
    ];

    return res.status(200).json({ items, total: items.length });

  } catch (err) {
    console.error('스크래핑 오류:', err.message);
    return res.status(502).json({ error: err.message });
  }
}

// ── 38.co.kr 스크래핑 (EUC-KR 디코딩) ───────────────
async function scrapeIPOList(type) {
  const url = `http://www.38.co.kr/html/fund/?o=${type}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
      'Accept-Charset': 'EUC-KR,utf-8;q=0.7,*;q=0.7',
      'Referer': 'http://www.38.co.kr/',
      'Connection': 'keep-alive',
    },
  });

  if (!res.ok) throw new Error(`38.co.kr 응답 오류: ${res.status}`);

  // EUC-KR → UTF-8 디코딩
  const buffer = await res.arrayBuffer();
  const decoder = new TextDecoder('euc-kr');
  const html = decoder.decode(buffer);

  return parseIPOTable(html, type);
}

// ── HTML 테이블 파싱 ──────────────────────────────────
function parseIPOTable(html, type) {
  const items = [];

  // tr 단위로 분리
  const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  const tdRegex = /<td[^>]*>([\s\S]*?)<\/td>/gi;
  const tagRegex = /<[^>]+>/g;
  const linkRegex = /href="([^"]+)"/i;

  let trMatch;
  while ((trMatch = trRegex.exec(html)) !== null) {
    const row = trMatch[1];
    const cells = [];
    let tdMatch;

    tdRegex.lastIndex = 0;
    while ((tdMatch = tdRegex.exec(row)) !== null) {
      const raw  = tdMatch[1];
      const text = raw.replace(tagRegex, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
      const href = (raw.match(linkRegex) || [])[1]?.replace(/&amp;/g, '&') || '';
      cells.push({ text, href });
    }

    if (cells.length < 5) continue;

    const name = cells[0]?.text;
    // 헤더 행, 빈 행, 숫자만인 행 제외
    if (!name || name.length < 2) continue;
    if (/^[\s\d]+$/.test(name)) continue;
    if (['종목', '기업', '청약일', '공모가', '구분'].some(h => name.includes(h))) continue;

    // 상세 URL
    const href = cells[0]?.href || '';
    const noMatch = href.match(/no=(\d+)/i);
    const no = noMatch ? noMatch[1] : '';
    const detailUrl = no
      ? `http://www.38.co.kr/html/fund/?o=v&no=${no}`
      : href.startsWith('http') ? href : `http://www.38.co.kr${href}`;

    if (type === 'k') {
      // 청약 일정 컬럼 (38.co.kr 실제 순서):
      // 0:종목명  1:청약일  2:납입/환불일  3:상장일  4:주간사  5:공모가  6:공모규모  7:경쟁률
      const subscribeDates = parseDateRange(cells[1]?.text || '');
      if (!subscribeDates.start) continue;

      const listingDate = parseDate(cells[3]?.text || '');
      const securities  = parseSecurities(cells[4]?.text || '');
      const priceData   = parsePrice(cells[5]?.text || '');
      const compRate    = parseCompRate(cells[7]?.text || '');

      items.push({
        id:              `38_${no || name}`,
        name,
        code:            '',
        subscribeStart:  subscribeDates.start,
        subscribeEnd:    subscribeDates.end,
        listingDate,
        securities,
        priceRange:      priceData.range,
        finalPrice:      priceData.final,
        minDeposit:      calcMinDeposit(priceData),
        totalShares:     null,
        sector:          '',
        competitionRate: compRate,
        lockup:          null,
        equalShares:     null,
        firstDayClose:   null,
        allTimeHigh:     null,
        allTimeHighDate: null,
        currentPrice:    null,
        source:          '38',
        detailUrl,
      });

    } else {
      // 최근 상장 컬럼:
      // 0:종목명  1:공모가  2:시초가  3:종가  4:수익률(%)  5:상장일  6:주간사
      const finalPrice    = parseNum(cells[1]?.text);
      const firstDayClose = parseNum(cells[3]?.text);
      const listingDate   = parseDate(cells[5]?.text || '');
      const securities    = parseSecurities(cells[6]?.text || '');

      items.push({
        id:              `38_${no || name}`,
        name,
        code:            '',
        subscribeStart:  null,
        subscribeEnd:    null,
        listingDate,
        securities,
        priceRange:      finalPrice ? [finalPrice, finalPrice] : [null, null],
        finalPrice:      finalPrice || null,
        minDeposit:      finalPrice * 10 * 0.5,
        totalShares:     null,
        sector:          '',
        competitionRate: null,
        lockup:          null,
        equalShares:     null,
        firstDayClose,
        allTimeHigh:     firstDayClose,
        allTimeHighDate: listingDate,
        currentPrice:    firstDayClose,
        source:          '38',
        detailUrl,
      });
    }
  }

  return items;
}

// ── 파싱 헬퍼 ────────────────────────────────────────

function parseDateRange(raw) {
  if (!raw) return {};
  const clean = raw.replace(/\s/g, '');
  // "2026.05.20~05.21"
  const m1 = clean.match(/(\d{4})\.(\d{2})\.(\d{2})[~\-](\d{2})\.(\d{2})/);
  if (m1) return { start: `${m1[1]}-${m1[2]}-${m1[3]}`, end: `${m1[1]}-${m1[4]}-${m1[5]}` };
  // "05.20~05.21"
  const m2 = clean.match(/(\d{2})\.(\d{2})[~\-](\d{2})\.(\d{2})/);
  if (m2) {
    const y = new Date().getFullYear();
    return { start: `${y}-${m2[1]}-${m2[2]}`, end: `${y}-${m2[3]}-${m2[4]}` };
  }
  // 단일 날짜
  const m3 = clean.match(/(\d{4})\.(\d{2})\.(\d{2})/);
  if (m3) { const d = `${m3[1]}-${m3[2]}-${m3[3]}`; return { start: d, end: d }; }
  return {};
}

function parseDate(raw) {
  if (!raw) return null;
  const clean = raw.replace(/\s/g, '');
  const m1 = clean.match(/(\d{4})\.(\d{2})\.(\d{2})/);
  if (m1) return `${m1[1]}-${m1[2]}-${m1[3]}`;
  const m2 = clean.match(/(\d{2})\.(\d{2})/);
  if (m2) return `${new Date().getFullYear()}-${m2[1]}-${m2[2]}`;
  return null;
}

function parsePrice(raw) {
  if (!raw) return {};
  const clean = raw.replace(/[,원\s]/g, '');
  if (clean.includes('~')) {
    const [a, b] = clean.split('~').map(Number);
    return { range: [a || null, b || null], final: null };
  }
  const n = Number(clean);
  if (n > 1000) return { range: [n, n], final: n };
  return {};
}

function calcMinDeposit(priceData) {
  const p = priceData.final || priceData.range?.[1];
  return p ? p * 10 * 0.5 : null;
}

// "1,234.56:1" → 1234.56, "NH투자증권" → null
function parseCompRate(raw) {
  if (!raw) return null;
  const m = raw.replace(/,/g, '').match(/([\d.]+)\s*:?\s*1/);
  return m ? parseFloat(m[1]) : null;
}

// "NH투자증권 외 2" → ["NH투자증권"]
function parseSecurities(raw) {
  if (!raw) return [];
  // 경쟁률처럼 보이면 제외
  if (/^\d[\d,.]*\s*:/.test(raw.trim())) return [];
  return raw.split(/[,\/]/)
    .map(s => s.replace(/외\s*\d+/g, '').replace(/<[^>]+>/g, '').trim())
    .filter(s => s.length > 1 && !/^\d/.test(s));
}

function parseNum(raw) {
  const n = Number((raw || '').replace(/[,\s원%]/g, ''));
  return isNaN(n) || n === 0 ? null : n;
}

function inferStatus(ipo) {
  if (!ipo.subscribeStart) return 'upcoming';
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const s = new Date(ipo.subscribeStart);
  const e = ipo.subscribeEnd ? new Date(ipo.subscribeEnd) : s;
  if (today < s)  return 'upcoming';
  if (today <= e) return 'subscribing';
  return 'upcoming';
}
