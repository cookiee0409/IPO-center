// ============================================
// 데이터 (새 공모주는 여기에 직접 추가하세요)
// status: "upcoming"(예정) | "subscribing"(청약중) | "listed"(상장완료)
// ============================================
const IPOS_DATA = [
  {
    "id": 1, "name": "에이치엔에스하이텍", "code": "345678", "status": "upcoming",
    "subscribeStart": "2026-05-20", "subscribeEnd": "2026-05-21", "listingDate": "2026-05-30",
    "priceRange": [18000, 22000], "finalPrice": null,
    "securities": ["NH투자증권", "한국투자증권"],
    "minDeposit": 110000, "totalShares": 2500000, "sector": "반도체",
    "competitionRate": null, "lockup": null, "equalShares": null,
    "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null
  },
  {
    "id": 2, "name": "바이오엔비", "code": "456789", "status": "subscribing",
    "subscribeStart": "2026-05-15", "subscribeEnd": "2026-05-16", "listingDate": "2026-05-26",
    "priceRange": [32000, 38000], "finalPrice": 38000,
    "securities": ["미래에셋증권", "KB증권"],
    "minDeposit": 190000, "totalShares": 1800000, "sector": "바이오",
    "competitionRate": 1843.5, "lockup": 28.5, "equalShares": null,
    "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null
  },
  {
    "id": 3, "name": "퓨처모빌리티", "code": "567890", "status": "upcoming",
    "subscribeStart": "2026-05-22", "subscribeEnd": "2026-05-23", "listingDate": "2026-06-02",
    "priceRange": [15000, 18000], "finalPrice": null,
    "securities": ["삼성증권"],
    "minDeposit": 90000, "totalShares": 3200000, "sector": "모빌리티",
    "competitionRate": null, "lockup": null, "equalShares": null,
    "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null
  },
  {
    "id": 4, "name": "클라우드웍스", "code": "678901", "status": "subscribing",
    "subscribeStart": "2026-05-18", "subscribeEnd": "2026-05-19", "listingDate": "2026-05-28",
    "priceRange": [25000, 30000], "finalPrice": 30000,
    "securities": ["NH투자증권", "키움증권"],
    "minDeposit": 150000, "totalShares": 1500000, "sector": "IT/SW",
    "competitionRate": 1245.8, "lockup": 15.2, "equalShares": null,
    "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null
  },
  {
    "id": 5, "name": "그린에너지솔루션", "code": "789012", "status": "upcoming",
    "subscribeStart": "2026-05-25", "subscribeEnd": "2026-05-26", "listingDate": "2026-06-05",
    "priceRange": [12000, 15000], "finalPrice": null,
    "securities": ["NH투자증권"],
    "minDeposit": 75000, "totalShares": 4000000, "sector": "친환경",
    "competitionRate": null, "lockup": null, "equalShares": null,
    "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null
  },
  {
    "id": 101, "name": "셀바이오메드", "code": "111111", "status": "listed",
    "subscribeStart": "2026-04-15", "subscribeEnd": "2026-04-16", "listingDate": "2026-04-25",
    "priceRange": [30000, 35000], "finalPrice": 35000,
    "securities": ["NH투자증권"],
    "minDeposit": 175000, "totalShares": 2000000, "sector": "바이오",
    "competitionRate": 2103.5, "lockup": 32.1, "equalShares": 3,
    "firstDayClose": 78000, "allTimeHigh": 91000, "allTimeHighDate": "2026-04-25", "currentPrice": 52000
  },
  {
    "id": 102, "name": "엔젤로보틱스", "code": "222222", "status": "listed",
    "subscribeStart": "2026-04-08", "subscribeEnd": "2026-04-09", "listingDate": "2026-04-18",
    "priceRange": [24000, 28000], "finalPrice": 28000,
    "securities": ["한국투자증권"],
    "minDeposit": 140000, "totalShares": 1700000, "sector": "로봇",
    "competitionRate": 1876.3, "lockup": 24.8, "equalShares": 5,
    "firstDayClose": 56000, "allTimeHigh": 72000, "allTimeHighDate": "2026-04-22", "currentPrice": 48000
  },
  {
    "id": 103, "name": "디앤디파마텍", "code": "333333", "status": "listed",
    "subscribeStart": "2026-04-01", "subscribeEnd": "2026-04-02", "listingDate": "2026-04-10",
    "priceRange": [28000, 32000], "finalPrice": 32000,
    "securities": ["미래에셋증권"],
    "minDeposit": 160000, "totalShares": 1600000, "sector": "바이오",
    "competitionRate": 845.2, "lockup": 8.5, "equalShares": 4,
    "firstDayClose": 28800, "allTimeHigh": 35000, "allTimeHighDate": "2026-04-10", "currentPrice": 25000
  },
  {
    "id": 104, "name": "아이엠비디엑스", "code": "444444", "status": "listed",
    "subscribeStart": "2026-03-18", "subscribeEnd": "2026-03-19", "listingDate": "2026-03-28",
    "priceRange": [16000, 19000], "finalPrice": 19000,
    "securities": ["키움증권"],
    "minDeposit": 95000, "totalShares": 2200000, "sector": "IT/SW",
    "competitionRate": 1654.7, "lockup": 19.3, "equalShares": 6,
    "firstDayClose": 42000, "allTimeHigh": 58000, "allTimeHighDate": "2026-04-05", "currentPrice": 31000
  },
  {
    "id": 105, "name": "에코프로AP", "code": "555555", "status": "listed",
    "subscribeStart": "2026-03-12", "subscribeEnd": "2026-03-13", "listingDate": "2026-03-22",
    "priceRange": [35000, 40000], "finalPrice": 40000,
    "securities": ["NH투자증권"],
    "minDeposit": 200000, "totalShares": 1400000, "sector": "2차전지",
    "competitionRate": 2456.8, "lockup": 41.2, "equalShares": 3,
    "firstDayClose": 92000, "allTimeHigh": 128000, "allTimeHighDate": "2026-04-12", "currentPrice": 76000
  },
  {
    "id": 106, "name": "리노공업", "code": "666666", "status": "listed",
    "subscribeStart": "2026-03-05", "subscribeEnd": "2026-03-06", "listingDate": "2026-03-15",
    "priceRange": [22000, 26000], "finalPrice": 26000,
    "securities": ["삼성증권"],
    "minDeposit": 130000, "totalShares": 1800000, "sector": "반도체",
    "competitionRate": 1987.4, "lockup": 35.7, "equalShares": 4,
    "firstDayClose": 58000, "allTimeHigh": 82000, "allTimeHighDate": "2026-03-28", "currentPrice": 64000
  },
  {
    "id": 107, "name": "퀀텀에이아이", "code": "777777", "status": "listed",
    "subscribeStart": "2026-02-26", "subscribeEnd": "2026-02-27", "listingDate": "2026-03-08",
    "priceRange": [40000, 45000], "finalPrice": 45000,
    "securities": ["미래에셋증권"],
    "minDeposit": 225000, "totalShares": 1200000, "sector": "IT/SW",
    "competitionRate": 2876.1, "lockup": 45.8, "equalShares": 2,
    "firstDayClose": 103500, "allTimeHigh": 138000, "allTimeHighDate": "2026-03-15", "currentPrice": 89000
  },
  {
    "id": 108, "name": "스마트팩토리", "code": "888888", "status": "listed",
    "subscribeStart": "2026-02-19", "subscribeEnd": "2026-02-20", "listingDate": "2026-03-01",
    "priceRange": [18000, 21000], "finalPrice": 21000,
    "securities": ["한국투자증권"],
    "minDeposit": 105000, "totalShares": 2000000, "sector": "산업기계",
    "competitionRate": 1234.5, "lockup": 12.3, "equalShares": 5,
    "firstDayClose": 31500, "allTimeHigh": 38000, "allTimeHighDate": "2026-03-05", "currentPrice": 24000
  }
];

const BROKERS_DATA = [
  {
    "broker": "NH투자증권", "shortName": "NH", "event": "신규계좌 개설 시 현금 3만원",
    "deadline": "2026-06-30", "benefit": "30,000원", "condition": "30일 이내 100만원 거래",
    "priority": "high", "color": "#4A90E2", "link": "https://www.nhqv.com"
  },
  {
    "broker": "한국투자증권", "shortName": "한투", "event": "비대면 계좌개설 + 공모주 청약시 5만원",
    "deadline": "2026-05-31", "benefit": "50,000원", "condition": "공모주 청약 1회 이상",
    "priority": "high", "color": "#E94B3C", "link": "https://www.truefriend.com"
  },
  {
    "broker": "미래에셋증권", "shortName": "미래", "event": "계좌 개설시 5,000원 + 수수료 우대",
    "deadline": "2026-06-15", "benefit": "5,000원", "condition": "첫 거래 10만원 이상",
    "priority": "medium", "color": "#F39C12", "link": "https://www.miraeassetdaewoo.com"
  },
  {
    "broker": "키움증권", "shortName": "키움", "event": "신규 고객 수수료 평생 무료",
    "deadline": "상시", "benefit": "수수료 무료", "condition": "신규 고객 한정",
    "priority": "medium", "color": "#27AE60", "link": "https://www.kiwoom.com"
  },
  {
    "broker": "삼성증권", "shortName": "삼성", "event": "계좌 개설시 5,000원 + 수수료 우대",
    "deadline": "2026-07-31", "benefit": "5,000원", "condition": "30일 이내 50만원 거래",
    "priority": "low", "color": "#3498DB", "link": "https://www.samsungpop.com"
  },
  {
    "broker": "KB증권", "shortName": "KB", "event": "신규 개설시 거래수수료 평생 무료",
    "deadline": "2026-08-31", "benefit": "수수료 무료", "condition": "신규 고객 한정",
    "priority": "low", "color": "#FFC107", "link": "https://www.kbsec.com"
  }
];

// ============================================
// 전역 상태
// ============================================
let IPOS = [];
let BROKERS = [];
let chartInstances = {};
let priceCache = {};  // 주가 캐시 (종목코드 → 데이터)

// ─────────────────────────────────────────────
// Vercel API URL 설정
// - 로컬 개발:  http://localhost:3000/api/price
// - 배포 후:    /api/price  (같은 도메인이면 상대경로 OK)
//
// ※ GitHub Pages + Vercel 분리 배포인 경우
//   아래 VERCEL_URL을 실제 Vercel 프로젝트 주소로 교체하세요.
//   예) const VERCEL_URL = 'https://ipo-center.vercel.app';
// ─────────────────────────────────────────────
const VERCEL_URL = 'https://ipo-center.vercel.app';   // ← 배포 후 Vercel 주소 입력 (예: 'https://ipo-center.vercel.app')
const API_BASE = VERCEL_URL ? `${VERCEL_URL}/api/price` : '/api/price';

// ============================================
// 유틸리티 함수
// ============================================
const fmt = {
  // 천 단위 콤마
  num: (n) => n == null ? '-' : Number(n).toLocaleString('ko-KR'),
  // 가격 (원)
  won: (n) => n == null ? '-' : Number(n).toLocaleString('ko-KR') + '원',
  // 날짜 (MM-DD)
  shortDate: (d) => d ? d.slice(5).replace('-', '/') : '-',
  // 날짜 (MM.DD)
  dotDate: (d) => d ? d.slice(5).replace('-', '.') : '-',
  // 수익률 (부호 포함)
  rate: (n) => {
    if (n == null) return '-';
    const v = Number(n).toFixed(1);
    return (n >= 0 ? '+' : '') + v + '%';
  },
  // 경쟁률
  comp: (n) => n == null ? '-' : Number(n).toLocaleString('ko-KR') + ':1'
};

// 수익률 계산
function calcReturn(buyPrice, sellPrice) {
  if (!buyPrice || !sellPrice) return null;
  return ((sellPrice - buyPrice) / buyPrice) * 100;
}

// 관심도 판정 (경쟁률 기반)
function getInterestBadge(ipo) {
  if (ipo.competitionRate == null) {
    return '<span class="badge badge-mild">😎 무난</span>';
  }
  if (ipo.competitionRate >= 1500) {
    return '<span class="badge badge-hot">🔥 고경쟁</span>';
  }
  return '<span class="badge badge-mild">😎 무난</span>';
}

// 환불일 계산 (청약 종료일 + 2영업일, 단순화: +2일)
function calcRefundDate(subscribeEnd) {
  if (!subscribeEnd) return '-';
  const d = new Date(subscribeEnd);
  d.setDate(d.getDate() + 2);
  return fmt.dotDate(d.toISOString().slice(0, 10));
}

// ============================================
// 데이터 로딩 (내장 데이터 사용 → 더블클릭으로 바로 열림)
// ============================================
function loadData() {
  IPOS = IPOS_DATA;
  BROKERS = BROKERS_DATA;
  init();
}

// ============================================
// 주가 API 호출 함수들
// ============================================

// 현재가 단일 조회 (캐시 5분)
async function fetchCurrentPrice(stockCode) {
  const cacheKey = `price_${stockCode}`;
  const cached = priceCache[cacheKey];
  if (cached && Date.now() - cached.ts < 5 * 60 * 1000) return cached.data;

  try {
    const res = await fetch(`${API_BASE}?code=${stockCode}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    priceCache[cacheKey] = { data, ts: Date.now() };
    return data;
  } catch (e) {
    console.warn(`주가 조회 실패 (${stockCode}):`, e.message);
    return null;
  }
}

// 여러 종목 현재가 일괄 조회
async function fetchMultipleCurrentPrices(stockCodes) {
  if (!stockCodes.length) return {};
  try {
    const res = await fetch(`${API_BASE}?codes=${stockCodes.join(',')}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const map = {};
    (data.items || []).forEach(item => { map[item.code] = item; });
    return map;
  } catch (e) {
    console.warn('일괄 주가 조회 실패:', e.message);
    return {};
  }
}

// 일별 시세 조회 (차트용)
async function fetchPriceHistory(stockCode, days = 30) {
  const cacheKey = `hist_${stockCode}_${days}`;
  const cached = priceCache[cacheKey];
  if (cached && Date.now() - cached.ts < 30 * 60 * 1000) return cached.data;  // 30분 캐시

  try {
    const res = await fetch(`${API_BASE}?code=${stockCode}&days=${days}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    priceCache[cacheKey] = { data: data.items, ts: Date.now() };
    return data.items || [];
  } catch (e) {
    console.warn(`시세 이력 조회 실패 (${stockCode}):`, e.message);
    return [];
  }
}

// API 연결 여부 확인 (VERCEL_URL 미설정 시 오프라인 모드)
function isApiAvailable() {
  return VERCEL_URL !== '' || window.location.hostname !== 'file:';
}

// ============================================
// 초기화 및 탭 전환
// ============================================
function init() {
  setupTabs();
  renderDashboard();
  renderCalendar();
  setupCalculator();
  renderTracker();
  renderHistory();
  renderSector();
  renderAccount();
}

function setupTabs() {
  const navItems = document.querySelectorAll('.nav-item');
  const tabPanels = document.querySelectorAll('.tab-panel');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const tab = item.dataset.tab;
      navItems.forEach(n => n.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      item.classList.add('active');
      document.getElementById('tab-' + tab).classList.add('active');
      // 차트 리사이즈
      Object.values(chartInstances).forEach(c => c && c.resize());
    });
  });
}

// ============================================
// 1. 대시보드
// ============================================
function renderDashboard() {
  // 청약 일정 테이블 (청약중 + 예정만)
  const activeIPOs = IPOS.filter(i => i.status === 'subscribing' || i.status === 'upcoming')
    .sort((a, b) => a.subscribeStart.localeCompare(b.subscribeStart));

  const tbody = document.querySelector('#dashboard-ipo-table tbody');
  tbody.innerHTML = activeIPOs.map(ipo => {
    const priceText = ipo.finalPrice
      ? fmt.won(ipo.finalPrice)
      : `${fmt.num(ipo.priceRange[0])}~${fmt.num(ipo.priceRange[1])}원`;
    return `
      <tr>
        <td class="ipo-name">${ipo.name}</td>
        <td>${fmt.dotDate(ipo.subscribeStart)}-${fmt.dotDate(ipo.subscribeEnd)}</td>
        <td>${priceText}</td>
        <td><span class="badge badge-sector">${ipo.sector}</span></td>
        <td>${calcRefundDate(ipo.subscribeEnd)}</td>
        <td>${fmt.dotDate(ipo.listingDate)}</td>
        <td>${getInterestBadge(ipo)}</td>
      </tr>
    `;
  }).join('');

  // 증권사 카드 (상위 4개)
  const brokersDiv = document.getElementById('dashboard-brokers');
  brokersDiv.innerHTML = BROKERS.slice(0, 4).map(b => `
    <div class="broker-card">
      <div class="broker-name" style="color: ${b.color}">${b.broker}</div>
      <div class="broker-benefit">계좌 개설시<br><strong>${b.benefit}</strong></div>
      <a href="${b.link}" target="_blank" class="broker-btn">개설하기 ›</a>
    </div>
  `).join('');

  // 최근 상장주 (상장된 종목 중 최고가 수익률 top)
  const listedIPOs = IPOS.filter(i => i.status === 'listed' && i.allTimeHigh)
    .map(i => ({
      ...i,
      peakReturn: calcReturn(i.finalPrice, i.allTimeHigh),
      currentReturn: calcReturn(i.finalPrice, i.currentPrice)
    }))
    .sort((a, b) => new Date(b.listingDate) - new Date(a.listingDate))
    .slice(0, 3);

  const recentDiv = document.getElementById('dashboard-recent');
  recentDiv.innerHTML = listedIPOs.map(i => {
    const ret = i.peakReturn;
    const cls = ret >= 0 ? 'positive' : 'negative';
    const sign = ret >= 0 ? '▲' : '▼';
    return `
      <div class="recent-item">
        <div class="recent-info">
          <span class="recent-name">${i.name}</span>
          <span class="recent-date">${i.allTimeHighDate}</span>
        </div>
        <span class="recent-return ${cls}">${sign} ${Math.abs(ret).toFixed(1)}%</span>
      </div>
    `;
  }).join('');
}

// ============================================
// 2. 캘린더 탭
// ============================================
let calendarFilter = 'all';

function renderCalendar() {
  // 요약 카드
  const subscribing = IPOS.filter(i => i.status === 'subscribing').length;
  const upcoming = IPOS.filter(i => i.status === 'upcoming').length;
  const thisMonth = new Date().toISOString().slice(0, 7);
  const listingThisMonth = IPOS.filter(i =>
    (i.status === 'subscribing' || i.status === 'upcoming') &&
    i.listingDate.startsWith(thisMonth.slice(0, 4)) // 단순화
  ).length;
  const avgComp = IPOS.filter(i => i.competitionRate != null)
    .reduce((sum, i, _, arr) => sum + i.competitionRate / arr.length, 0);

  document.getElementById('cal-subscribing').textContent = subscribing + '건';
  document.getElementById('cal-upcoming').textContent = upcoming + '건';
  document.getElementById('cal-listing').textContent = listingThisMonth + '건';
  document.getElementById('cal-avg-comp').textContent = avgComp > 0 ? Math.round(avgComp).toLocaleString() + ':1' : '-';

  // 필터 버튼
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      calendarFilter = btn.dataset.filter;
      renderCalendarCards();
    });
  });

  renderCalendarCards();
}

function renderCalendarCards() {
  let filtered = IPOS.filter(i => i.status === 'subscribing' || i.status === 'upcoming');
  if (calendarFilter !== 'all') {
    filtered = filtered.filter(i => i.status === calendarFilter);
  }
  filtered.sort((a, b) => a.subscribeStart.localeCompare(b.subscribeStart));

  const container = document.getElementById('calendar-cards');
  container.innerHTML = filtered.map(ipo => {
    const statusBadge = ipo.status === 'subscribing'
      ? '<span class="badge badge-status-sub">청약중</span>'
      : '<span class="badge badge-status-upcoming">예정</span>';

    const priceText = ipo.finalPrice
      ? fmt.won(ipo.finalPrice)
      : `${fmt.num(ipo.priceRange[0])}~${fmt.num(ipo.priceRange[1])}원`;

    const extraInfo = ipo.competitionRate != null ? `
      <div class="ipo-extra">
        <span>경쟁률<strong>${fmt.comp(ipo.competitionRate)}</strong></span>
        <span>의무보유확약<strong>${ipo.lockup}%</strong></span>
      </div>
    ` : '';

    return `
      <div class="ipo-card">
        <div class="ipo-card-header">
          <div class="ipo-card-title">
            <span class="ipo-card-name">${ipo.name}</span>
            ${statusBadge}
            <span class="badge badge-sector">${ipo.sector}</span>
          </div>
        </div>
        <div class="ipo-card-grid">
          <div class="ipo-info-item">
            <span class="ipo-info-label">청약일</span>
            <span class="ipo-info-value">${fmt.dotDate(ipo.subscribeStart)} ~ ${fmt.dotDate(ipo.subscribeEnd)}</span>
          </div>
          <div class="ipo-info-item">
            <span class="ipo-info-label">상장일</span>
            <span class="ipo-info-value highlight">${fmt.dotDate(ipo.listingDate)}</span>
          </div>
          <div class="ipo-info-item">
            <span class="ipo-info-label">공모가</span>
            <span class="ipo-info-value">${priceText}</span>
          </div>
          <div class="ipo-info-item">
            <span class="ipo-info-label">최소 증거금</span>
            <span class="ipo-info-value">${fmt.won(ipo.minDeposit)}</span>
          </div>
          <div class="ipo-info-item">
            <span class="ipo-info-label">주관사</span>
            <span class="ipo-info-value">${ipo.securities.join(', ')}</span>
          </div>
        </div>
        ${extraInfo}
      </div>
    `;
  }).join('');
}

// ============================================
// 3. 수익 계산기
// ============================================
function setupCalculator() {
  const inputs = ['calc-price', 'calc-shares', 'calc-sell', 'calc-comp', 'calc-target'];
  inputs.forEach(id => {
    document.getElementById(id).addEventListener('input', updateCalc);
  });
  updateCalc();
}

function updateCalc() {
  const price = Number(document.getElementById('calc-price').value) || 0;
  const shares = Number(document.getElementById('calc-shares').value) || 0;
  const sell = Number(document.getElementById('calc-sell').value) || 0;
  const comp = Number(document.getElementById('calc-comp').value) || 0;
  const target = Number(document.getElementById('calc-target').value) || 0;

  // 최소 증거금 (공모가 × 청약주식수 × 50%)
  const minDeposit = price * shares * 0.5;

  // 목표 배정 추정 증거금 (공모가 × 목표주수 × 경쟁률 × 50%)
  const targetDeposit = price * target * comp * 0.5;

  // 수익
  const profit = (sell - price) * shares;
  const tax = profit > 0 ? profit * 0.0023 : 0;
  const net = profit - tax;
  const rate = price > 0 ? ((sell - price) / price * 100) : 0;

  document.getElementById('calc-min-deposit').textContent = fmt.won(minDeposit);
  document.getElementById('calc-target-deposit').textContent = fmt.won(targetDeposit);
  document.getElementById('calc-profit').textContent = fmt.won(profit);
  document.getElementById('calc-tax').textContent = '-' + fmt.won(tax);

  const netEl = document.getElementById('calc-net');
  netEl.textContent = fmt.won(net);
  netEl.className = net >= 0 ? 'positive' : 'negative';

  const rateEl = document.getElementById('calc-rate');
  rateEl.textContent = fmt.rate(rate);
  rateEl.className = rate >= 0 ? 'positive' : 'negative';
}

// ============================================
// 4. 최고가 추적 (실시간 주가 연동)
// ============================================
let trackerSelected = null;

function renderTracker() {
  const listedIPOs = IPOS.filter(i => i.status === 'listed')
    .sort((a, b) => new Date(b.listingDate) - new Date(a.listingDate));
  if (!listedIPOs.length) return;

  trackerSelected = listedIPOs[0];

  const tabsDiv = document.getElementById('tracker-tabs');
  tabsDiv.innerHTML = listedIPOs.map(i =>
    `<button class="tracker-tab" data-id="${i.id}">${i.name}</button>`
  ).join('');

  tabsDiv.querySelectorAll('.tracker-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tabsDiv.querySelectorAll('.tracker-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      trackerSelected = IPOS.find(i => i.id == tab.dataset.id);
      updateTrackerView();
    });
  });

  tabsDiv.querySelector('.tracker-tab').classList.add('active');
  updateTrackerView();
}

async function updateTrackerView() {
  const t = trackerSelected;
  if (!t) return;

  // 로딩 상태 표시
  document.getElementById('tracker-stats').innerHTML = `
    <div class="stat-card" style="grid-column: span 4; text-align:center; color: var(--text-tertiary);">
      주가 데이터 불러오는 중...
    </div>`;

  // 실시간 주가 + 30일 이력 동시 조회
  const [livePrice, history] = await Promise.all([
    isApiAvailable() ? fetchCurrentPrice(t.code) : null,
    isApiAvailable() ? fetchPriceHistory(t.code, 30) : []
  ]);

  // 현재가: API 우선, 없으면 내장 데이터
  const currentPrice = livePrice?.currentPrice || t.currentPrice;

  // 역대 최고가: 내장값 vs API 이력 중 더 높은 값
  let allTimeHigh = t.allTimeHigh;
  let allTimeHighDate = t.allTimeHighDate;
  if (history.length) {
    const peak = history.reduce((max, d) => d.high > max.high ? d : max, history[0]);
    if (!allTimeHigh || peak.high > allTimeHigh) {
      allTimeHigh = peak.high;
      allTimeHighDate = `${peak.date.slice(0,4)}-${peak.date.slice(4,6)}-${peak.date.slice(6,8)}`;
    }
  }

  // 상장 첫날 종가: 이력 첫 항목 우선
  const firstDayClose = history[0]?.close || t.firstDayClose;

  const daysSinceList = Math.floor((Date.now() - new Date(t.listingDate)) / 86400000);

  // 통계 카드 렌더링
  document.getElementById('tracker-stats').innerHTML = `
    <div class="stat-card">
      <span class="stat-label">공모가</span>
      <span class="stat-value">${fmt.won(t.finalPrice)}</span>
    </div>
    <div class="stat-card peak">
      <span class="stat-label">역대 최고가 ${livePrice ? '🔴 실시간' : ''}</span>
      <span class="stat-value">${fmt.won(allTimeHigh)}</span>
      <span class="stat-sub">${allTimeHighDate || '-'}</span>
    </div>
    <div class="stat-card">
      <span class="stat-label">현재가 ${livePrice ? `<small style="color:var(--accent-success)">● 실시간</small>` : ''}</span>
      <span class="stat-value">${fmt.won(currentPrice)}</span>
      ${livePrice ? `<span class="stat-sub">등락률 ${fmt.rate(livePrice.changeRate)}</span>` : ''}
    </div>
    <div class="stat-card">
      <span class="stat-label">상장 후 경과</span>
      <span class="stat-value">${daysSinceList}일</span>
    </div>
  `;

  // 수익률 카드
  const firstDayRet  = calcReturn(t.finalPrice, firstDayClose);
  const peakRet      = calcReturn(t.finalPrice, allTimeHigh);
  const currentRet   = calcReturn(t.finalPrice, currentPrice);

  document.getElementById('tracker-returns').innerHTML = `
    <div class="return-card">
      <span class="return-label">상장 첫날 종가 기준</span>
      <span class="return-value ${firstDayRet >= 0 ? 'positive' : 'negative'}">${fmt.rate(firstDayRet)}</span>
      <span class="return-sub">${fmt.won(firstDayClose)}</span>
    </div>
    <div class="return-card highlight">
      <span class="return-label">최고점 기준 수익률</span>
      <span class="return-value">${fmt.rate(peakRet)}</span>
      <span class="return-sub">${allTimeHighDate || '-'}</span>
    </div>
    <div class="return-card">
      <span class="return-label">현재 시점 수익률</span>
      <span class="return-value ${currentRet >= 0 ? 'positive' : 'negative'}">${fmt.rate(currentRet)}</span>
      <span class="return-sub">${fmt.won(currentPrice)}</span>
    </div>
  `;

  document.getElementById('tracker-chart-title').textContent =
    `${t.name} 상장 후 주가 추이 ${history.length ? '(실제 시세)' : '(추정)'}`;

  drawTrackerChart(t, history, firstDayClose, allTimeHigh, currentPrice);
}

function drawTrackerChart(t, history, firstDayClose, allTimeHigh, currentPrice) {
  let labels, data;

  if (history && history.length >= 2) {
    // 실제 시세 데이터 사용
    labels = history.map((d, i) => `D+${i}`);
    data   = history.map(d => d.close);
  } else {
    // 시세 없을 때: 내장 데이터로 부드러운 추정 곡선
    const days = 30;
    labels = Array.from({ length: days }, (_, i) => `D+${i}`);
    data   = Array.from({ length: days }, (_, i) => {
      if (i === 0) return firstDayClose;
      const progress   = i / days;
      const volatility = ((allTimeHigh || firstDayClose) - (currentPrice || firstDayClose)) * 0.3;
      return Math.round(
        firstDayClose +
        Math.sin(i / 3) * volatility +
        ((currentPrice || firstDayClose) - firstDayClose) * progress
      );
    });
  }

  const ctx = document.getElementById('tracker-chart');
  if (chartInstances.tracker) chartInstances.tracker.destroy();
  chartInstances.tracker = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: '주가',
        data,
        borderColor: '#4A8AC9',
        backgroundColor: 'rgba(74,138,201,0.1)',
        borderWidth: 2,
        tension: 0.3,
        fill: true,
        pointRadius: 2,
        pointHoverRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: c => fmt.won(c.parsed.y) } }
      },
      scales: {
        y: { ticks: { callback: v => fmt.num(v) }, grid: { color: '#F1F4F8' } },
        x: { grid: { display: false } }
      }
    }
  });
}

// ============================================
// 5. 히스토리 (현재가 실시간 연동)
// ============================================
let historySortKey = 'listingDate';
let historySortDir = 'desc';

function renderHistory() {
  document.querySelectorAll('#history-table th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const key = th.dataset.sort;
      historySortDir = historySortKey === key
        ? (historySortDir === 'desc' ? 'asc' : 'desc')
        : 'desc';
      historySortKey = key;
      renderHistoryTable();
    });
  });
  renderHistoryTable();

  // 상장된 종목 현재가 백그라운드 조회 (API 연결 시)
  if (isApiAvailable()) loadHistoryLivePrices();
}

async function loadHistoryLivePrices() {
  const listed = IPOS.filter(i => i.status === 'listed' && i.code);
  if (!listed.length) return;

  const codes = listed.map(i => i.code);
  const priceMap = await fetchMultipleCurrentPrices(codes);

  // 내장 데이터에 실시간 현재가 반영
  listed.forEach(ipo => {
    const live = priceMap[ipo.code];
    if (live?.currentPrice) ipo.currentPrice = live.currentPrice;
  });

  renderHistoryTable();   // 현재가 반영 후 재렌더링
}

function renderHistoryTable() {
  const listed = IPOS.filter(i => i.status === 'listed');
  listed.sort((a, b) => {
    const av = a[historySortKey], bv = b[historySortKey];
    if (av == null) return 1;
    if (bv == null) return -1;
    return historySortDir === 'desc' ? (av > bv ? -1 : 1) : (av > bv ? 1 : -1);
  });

  const tbody = document.querySelector('#history-table tbody');
  tbody.innerHTML = listed.map(i => {
    const firstRet   = calcReturn(i.finalPrice, i.firstDayClose);
    const currentRet = calcReturn(i.finalPrice, i.currentPrice);
    const firstCls   = firstRet   >= 0 ? 'positive' : 'negative';
    const currentCls = currentRet != null ? (currentRet >= 0 ? 'positive' : 'negative') : '';
    return `
      <tr>
        <td><strong>${i.name}</strong></td>
        <td>${i.listingDate}</td>
        <td><span class="badge badge-sector">${i.sector}</span></td>
        <td>${i.securities.join(', ')}</td>
        <td class="text-right">${fmt.won(i.minDeposit)}</td>
        <td class="text-right"><strong>${i.equalShares != null ? i.equalShares + '주' : '-'}</strong></td>
        <td class="text-right">${fmt.won(i.finalPrice)}</td>
        <td class="text-right">${fmt.won(i.firstDayClose)}</td>
        <td class="text-right ${firstCls}"><strong>${fmt.rate(firstRet)}</strong></td>
        <td class="text-right">${fmt.won(i.currentPrice)}</td>
        <td class="text-right ${currentCls}"><strong>${fmt.rate(currentRet)}</strong></td>
      </tr>
    `;
  }).join('');
}

// ============================================
// 6. 섹터 분석
// ============================================
const SECTOR_COLORS = {
  '바이오': '#10b981',
  '반도체': '#3b82f6',
  'IT/SW': '#8b5cf6',
  '2차전지': '#f59e0b',
  '모빌리티': '#ef4444',
  '로봇': '#06b6d4',
  '친환경': '#22c55e',
  '산업기계': '#64748b'
};

function renderSector() {
  // 섹터별 집계
  const sectorMap = {};
  IPOS.filter(i => i.status === 'listed').forEach(i => {
    if (!sectorMap[i.sector]) {
      sectorMap[i.sector] = { count: 0, totalReturn: 0 };
    }
    sectorMap[i.sector].count++;
    const ret = calcReturn(i.finalPrice, i.firstDayClose);
    sectorMap[i.sector].totalReturn += ret || 0;
  });

  const sectors = Object.entries(sectorMap).map(([name, data]) => ({
    name,
    count: data.count,
    avgReturn: data.count > 0 ? data.totalReturn / data.count : 0,
    color: SECTOR_COLORS[name] || '#888'
  }));

  // 파이 차트
  const pieCtx = document.getElementById('sector-pie');
  if (chartInstances.pie) chartInstances.pie.destroy();
  chartInstances.pie = new Chart(pieCtx, {
    type: 'doughnut',
    data: {
      labels: sectors.map(s => s.name),
      datasets: [{
        data: sectors.map(s => s.count),
        backgroundColor: sectors.map(s => s.color),
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { font: { size: 11 }, padding: 12, boxWidth: 12 }
        }
      }
    }
  });

  // 바 차트
  const barCtx = document.getElementById('sector-bar');
  if (chartInstances.bar) chartInstances.bar.destroy();
  chartInstances.bar = new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: sectors.map(s => s.name),
      datasets: [{
        data: sectors.map(s => s.avgReturn),
        backgroundColor: sectors.map(s => s.color),
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => '평균 수익률: ' + ctx.parsed.y.toFixed(1) + '%'
          }
        }
      },
      scales: {
        y: {
          ticks: { callback: v => v + '%' },
          grid: { color: '#F1F4F8' }
        },
        x: {
          grid: { display: false }
        }
      }
    }
  });

  // 섹터 카드
  const cardsDiv = document.getElementById('sector-cards');
  cardsDiv.innerHTML = sectors.map(s => {
    const cls = s.avgReturn >= 0 ? 'positive' : 'negative';
    const widthPct = Math.min(Math.abs(s.avgReturn / 200 * 100), 100);
    return `
      <div class="sector-card">
        <div class="sector-card-header">
          <div class="sector-name">
            <span class="sector-dot" style="background: ${s.color}"></span>
            ${s.name}
          </div>
          <span class="sector-count">${s.count}건</span>
        </div>
        <div class="sector-return ${cls}">${fmt.rate(s.avgReturn)}</div>
        <div class="sector-bar">
          <div class="sector-bar-fill" style="background: ${s.color}; width: ${widthPct}%"></div>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================
// 7. 증권사 이벤트
// ============================================
function renderAccount() {
  const list = document.getElementById('account-list');
  list.innerHTML = BROKERS.map(b => {
    const hotBadge = b.priority === 'high'
      ? '<span class="badge badge-hot" style="font-size:10px;padding:2px 8px">HOT</span>'
      : '';
    return `
      <div class="account-card">
        <div class="account-info">
          <div class="account-icon" style="background: ${b.color}20; color: ${b.color}">💳</div>
          <div class="account-text">
            <h3>${b.broker} ${hotBadge}</h3>
            <p>${b.event}</p>
            <div class="account-meta">
              <span>⏱ 마감: ${b.deadline}</span>
              <span>조건: ${b.condition}</span>
            </div>
          </div>
        </div>
        <div class="account-action">
          <div class="account-benefit">${b.benefit}</div>
          <a href="${b.link}" target="_blank" class="account-btn">개설하러 가기</a>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================
// 시작
// ============================================
loadData();
