/**
 * Vercel 서버리스 함수 - 38커뮤니케이션 개별 종목 상세 페이지 스크래핑
 *
 * GET /api/detail38?no=2294
 * GET /api/detail38?nos=2294,2289,2291  (여러 개 동시)
 */

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=86400');  // 1일 캐시

  try {
    const { no, nos } = req.query;

    if (nos) {
      const list = nos.split(',').filter(Boolean);
      const results = await Promise.allSettled(list.map(n => fetchDetail(n)));
      const items = results
        .filter(r => r.status === 'fulfilled' && r.value)
        .map(r => r.value);
      return res.status(200).json({ items, total: items.length });
    }

    if (!no) return res.status(400).json({ error: 'no 파라미터 필요' });

    const detail = await fetchDetail(no);
    return res.status(200).json(detail);

  } catch (err) {
    return res.status(502).json({ error: err.message });
  }
}

async function fetchDetail(no) {
  const url = `http://www.38.co.kr/html/fund/?o=v&no=${no}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Referer': 'http://www.38.co.kr/',
    },
  });
  if (!res.ok) return null;

  const buffer = await res.arrayBuffer();
  const html = new TextDecoder('euc-kr').decode(buffer);

  return parseDetail(html, no);
}

function parseDetail(html, no) {
  // <td>레이블</td><td>값</td> 패턴으로 모든 셀 추출
  const result = { no };
  const cells = [];
  const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  const tdRegex = /<td[^>]*>([\s\S]*?)<\/td>/gi;
  const tagRegex = /<[^>]+>/g;

  let m;
  while ((m = trRegex.exec(html)) !== null) {
    const row = m[1];
    const rowCells = [];
    let tm;
    tdRegex.lastIndex = 0;
    while ((tm = tdRegex.exec(row)) !== null) {
      const txt = tm[1].replace(tagRegex, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
      rowCells.push(txt);
    }
    cells.push(rowCells);
  }

  // 키-값 매핑: 한 행에 [레이블, 값] 또는 [레이블, 값, 레이블, 값]
  const kv = {};
  for (const row of cells) {
    for (let i = 0; i + 1 < row.length; i += 2) {
      const key = row[i];
      const val = row[i + 1];
      if (key && val && key.length < 20 && key.length > 0) {
        kv[key] = val;
      }
    }
  }

  // 회사명 (페이지 상단 큰 글씨 또는 키-값에서)
  result.name = kv['기업명'] || kv['종목명'] || '';

  // 종목코드
  const codeMatch = html.match(/종목코드[^0-9]*(\d{6})/);
  result.code = codeMatch ? codeMatch[1] : '';

  // 업종/섹터
  result.sector = kv['업종'] || kv['업태'] || kv['주요사업'] || '';

  // 청약일
  const subRaw = kv['공모청약일'] || kv['청약일'] || kv['청약기간'] || '';
  const subDates = parseRange(subRaw);
  result.subscribeStart = subDates.start;
  result.subscribeEnd = subDates.end;

  // 상장일
  result.listingDate = parseDate(kv['상장일'] || kv['상장예정일'] || '');

  // 환불일
  result.refundDate = parseDate(kv['환불일'] || '');

  // 공모가
  const priceRaw = kv['확정공모가'] || kv['공모가'] || '';
  const priceData = parsePrice(priceRaw);
  result.finalPrice = priceData.final;

  // 희망공모가
  const hopeRaw = kv['희망공모가액'] || kv['희망공모가'] || kv['공모가밴드'] || '';
  const hopeData = parsePrice(hopeRaw);
  if (hopeData.range) result.priceRange = hopeData.range;
  else if (priceData.final) result.priceRange = [priceData.final, priceData.final];
  else result.priceRange = [null, null];

  // 주관사 (대표주관사 우선)
  const lead = kv['대표주관회사'] || kv['주관회사'] || kv['주관사'] || '';
  result.securities = parseSecurities(lead);

  // 인수회사가 별도로 있으면 추가
  const co = kv['인수회사'] || '';
  if (co) {
    const coList = parseSecurities(co);
    result.securities = [...new Set([...result.securities, ...coList])];
  }

  // 공모주식수
  result.totalShares = parseInt((kv['공모주식수'] || '').replace(/[^0-9]/g, '')) || null;

  // 경쟁률 (수요예측)
  const compRaw = kv['수요예측경쟁률'] || kv['기관경쟁률'] || kv['경쟁률'] || '';
  const compMatch = compRaw.replace(/,/g, '').match(/([\d.]+)\s*[:대]/);
  result.competitionRate = compMatch ? parseFloat(compMatch[1]) : null;

  // 의무보유확약
  const lockRaw = kv['의무보유확약'] || kv['확약'] || '';
  const lockMatch = lockRaw.match(/([\d.]+)\s*%/);
  result.lockup = lockMatch ? parseFloat(lockMatch[1]) : null;

  // 최소 증거금 (공모가 상단 × 10주 × 50%)
  const refPrice = priceData.final || (result.priceRange?.[1]);
  result.minDeposit = refPrice ? refPrice * 10 * 0.5 : null;

  return result;
}

function parseRange(raw) {
  if (!raw) return {};
  const clean = raw.replace(/\s/g, '');
  // 2026.05.20~05.21 or 2026.05.20~2026.05.21
  const m1 = clean.match(/(\d{4})\.(\d{2})\.(\d{2})[~\-](\d{2})\.(\d{2})/);
  if (m1) return { start: `${m1[1]}-${m1[2]}-${m1[3]}`, end: `${m1[1]}-${m1[4]}-${m1[5]}` };
  const m2 = clean.match(/(\d{4})\.(\d{2})\.(\d{2})[~\-](\d{4})\.(\d{2})\.(\d{2})/);
  if (m2) return { start: `${m2[1]}-${m2[2]}-${m2[3]}`, end: `${m2[4]}-${m2[5]}-${m2[6]}` };
  const m3 = clean.match(/(\d{4})\.(\d{2})\.(\d{2})/);
  if (m3) { const d = `${m3[1]}-${m3[2]}-${m3[3]}`; return { start: d, end: d }; }
  return {};
}

function parseDate(raw) {
  if (!raw) return null;
  const m = raw.match(/(\d{4})\.(\d{2})\.(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null;
}

function parsePrice(raw) {
  if (!raw) return {};
  const clean = raw.replace(/[,원\s]/g, '');
  if (clean.includes('~')) {
    const [a, b] = clean.split('~').map(s => Number(s));
    return { range: [a || null, b || null], final: null };
  }
  const n = Number(clean);
  return n > 100 ? { range: [n, n], final: n } : {};
}

function parseSecurities(raw) {
  if (!raw) return [];
  return raw
    .replace(/<[^>]+>/g, '')
    .split(/[,\/]/)
    .map(s => s.replace(/외\s*\d+/g, '').replace(/대표/g, '').replace(/\(.*?\)/g, '').trim())
    .filter(s => s.length > 1 && /증권|투자|금융|뱅크|에셋|캐피탈/.test(s));
}
