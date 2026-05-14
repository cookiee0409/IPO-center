/**
 * Vercel 서버리스 함수 - 38커뮤니케이션 공모주 스크래핑
 *
 * GET /api/scrape          → 청약 예정/진행 중 공모주
 * GET /api/scrape?type=all → 최근 완료 포함
 */

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 1시간 캐시 (공모주 일정은 자주 안 바뀜)
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=600');

  try {
    const upcoming = await scrapeIPOList('k');  // 청약 예정/진행
    const listed   = await scrapeIPOList('r');  // 최근 상장 완료

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

// ── 38.co.kr 공모주 목록 스크래핑 ────────────────────
// o=k : 청약일정, o=r : 최근상장
async function scrapeIPOList(type) {
  const url = `http://www.38.co.kr/html/fund/?o=${type}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'text/html,application/xhtml+xml',
      'Accept-Language': 'ko-KR,ko;q=0.9',
      'Referer': 'http://www.38.co.kr/',
    },
  });

  if (!res.ok) throw new Error(`38.co.kr 응답 오류: ${res.status}`);

  const html = await res.text();
  return parseIPOTable(html, type);
}

// ── HTML 테이블 파싱 ──────────────────────────────────
function parseIPOTable(html, type) {
  const items = [];

  // 38.co.kr는 <table> 기반 레이아웃
  // 공모주 행: <td>종목명</td><td>청약일</td><td>상장일</td>...
  // 정규식으로 tr 행 단위로 파싱
  const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  const tdRegex = /<td[^>]*>([\s\S]*?)<\/td>/gi;
  const tagRegex = /<[^>]+>/g;
  const linkRegex = /href="([^"]+)"/;

  let trMatch;
  while ((trMatch = trRegex.exec(html)) !== null) {
    const row = trMatch[1];
    const cells = [];
    let tdMatch;

    // td 초기화
    tdRegex.lastIndex = 0;
    while ((tdMatch = tdRegex.exec(row)) !== null) {
      const raw = tdMatch[1];
      const text = raw.replace(tagRegex, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
      const href = (raw.match(linkRegex) || [])[1] || '';
      cells.push({ text, href });
    }

    if (cells.length < 6) continue;

    // 청약일정(o=k) 컬럼 순서:
    // 0:종목명 1:청약일 2:환불일 3:상장일 4:주간사 5:공모가 6:규모(억) 7:경쟁률
    // 최근상장(o=r) 컬럼 순서:
    // 0:종목명 1:공모가 2:시초가 3:종가 4:수익률 5:상장일 6:주간사

    const name = cells[0]?.text;
    if (!name || name.length < 2 || name.includes('종목') || name.includes('기업')) continue;
    if (/^[0-9\s]+$/.test(name)) continue; // 숫자만 있는 행 제외

    // 상세 페이지 링크에서 종목 코드 추출
    const detailUrl = cells[0]?.href || '';
    const codeMatch = detailUrl.match(/[?&]no=(\d+)/i) || detailUrl.match(/(\d{4,})/);
    const code = codeMatch ? codeMatch[1] : '';

    if (type === 'k') {
      // 청약 일정
      const subscribeDates = parseDateRange(cells[1]?.text || '');
      const listingDate    = parseDate(cells[3]?.text || '');
      const securities     = parseSecurities(cells[4]?.text || '');
      const priceRange     = parsePrice(cells[5]?.text || '');

      if (!subscribeDates.start) continue;

      items.push({
        id:             `38_${code || name}`,
        name,
        code:           '',
        subscribeStart: subscribeDates.start,
        subscribeEnd:   subscribeDates.end,
        listingDate,
        securities,
        priceRange:     priceRange.range,
        finalPrice:     priceRange.final,
        minDeposit:     priceRange.final
                          ? priceRange.final * 10 * 0.5
                          : priceRange.range?.[1]
                            ? priceRange.range[1] * 10 * 0.5
                            : null,
        totalShares:    null,
        sector:         '',
        competitionRate: parseFloat(cells[7]?.text) || null,
        lockup:         null,
        equalShares:    null,
        firstDayClose:  null,
        allTimeHigh:    null,
        allTimeHighDate: null,
        currentPrice:   null,
        source:         '38',
        detailUrl:      detailUrl.startsWith('http')
                          ? detailUrl
                          : `http://www.38.co.kr${detailUrl}`,
      });

    } else {
      // 최근 상장 완료
      const finalPrice   = parseNum(cells[1]?.text);
      const firstDayOpen = parseNum(cells[2]?.text);
      const firstDayClose = parseNum(cells[3]?.text);
      const listingDate  = parseDate(cells[5]?.text || '');
      const securities   = parseSecurities(cells[6]?.text || '');

      if (!finalPrice) continue;

      items.push({
        id:             `38_${code || name}`,
        name,
        code:           '',
        subscribeStart: null,
        subscribeEnd:   null,
        listingDate,
        securities,
        priceRange:     [finalPrice, finalPrice],
        finalPrice,
        minDeposit:     finalPrice * 10 * 0.5,
        totalShares:    null,
        sector:         '',
        competitionRate: null,
        lockup:         null,
        equalShares:    null,
        firstDayClose,
        allTimeHigh:    firstDayClose,
        allTimeHighDate: listingDate,
        currentPrice:   firstDayClose,
        source:         '38',
        detailUrl:      detailUrl.startsWith('http')
                          ? detailUrl
                          : `http://www.38.co.kr${detailUrl}`,
      });
    }
  }

  return items;
}

// ── 파싱 헬퍼 ────────────────────────────────────────

// "2026.05.20~05.21" or "05.20~05.21" → { start, end }
function parseDateRange(raw) {
  if (!raw) return {};
  const clean = raw.replace(/\s/g, '');
  // 연도 포함: 2026.05.20~05.21
  const full = clean.match(/(\d{4})\.(\d{2})\.(\d{2})[~\-](\d{2})\.(\d{2})/);
  if (full) {
    return {
      start: `${full[1]}-${full[2]}-${full[3]}`,
      end:   `${full[1]}-${full[4]}-${full[5]}`,
    };
  }
  // 연도 없음: 05.20~05.21 → 현재 연도 사용
  const short = clean.match(/(\d{2})\.(\d{2})[~\-](\d{2})\.(\d{2})/);
  if (short) {
    const y = new Date().getFullYear();
    return {
      start: `${y}-${short[1]}-${short[2]}`,
      end:   `${y}-${short[3]}-${short[4]}`,
    };
  }
  // 단일 날짜
  const single = clean.match(/(\d{4})\.(\d{2})\.(\d{2})/);
  if (single) {
    const d = `${single[1]}-${single[2]}-${single[3]}`;
    return { start: d, end: d };
  }
  return {};
}

// "2026.05.30" or "05.30" → "2026-05-30"
function parseDate(raw) {
  if (!raw) return null;
  const clean = raw.replace(/\s/g, '');
  const full  = clean.match(/(\d{4})\.(\d{2})\.(\d{2})/);
  if (full) return `${full[1]}-${full[2]}-${full[3]}`;
  const short = clean.match(/(\d{2})\.(\d{2})/);
  if (short) return `${new Date().getFullYear()}-${short[1]}-${short[2]}`;
  return null;
}

// "18,000~22,000" or "20,000" → { range, final }
function parsePrice(raw) {
  if (!raw) return {};
  const clean = raw.replace(/[,원\s]/g, '');
  if (clean.includes('~')) {
    const [a, b] = clean.split('~').map(Number);
    return { range: [a || null, b || null], final: null };
  }
  const n = Number(clean);
  if (n > 0) return { range: [n, n], final: n };
  return {};
}

// "NH투자증권 외 2" → ["NH투자증권"]
function parseSecurities(raw) {
  if (!raw) return [];
  return raw.split(/[,\/]/)
    .map(s => s.replace(/외\s*\d+/g, '').replace(/<[^>]+>/g, '').trim())
    .filter(s => s.length > 1);
}

function parseNum(raw) {
  const n = Number((raw || '').replace(/[,\s원]/g, ''));
  return isNaN(n) || n === 0 ? null : n;
}

function inferStatus(ipo) {
  if (!ipo.subscribeStart) return 'upcoming';
  const today = new Date(); today.setHours(0,0,0,0);
  const s = new Date(ipo.subscribeStart);
  const e = ipo.subscribeEnd ? new Date(ipo.subscribeEnd) : s;
  if (today < s)  return 'upcoming';
  if (today <= e) return 'subscribing';
  return 'upcoming';
}
