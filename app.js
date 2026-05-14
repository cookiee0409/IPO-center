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
const VERCEL_URL = '';   // ← 배포 후 Vercel 주소 입력 (예: 'https://ipo-center.vercel.app')
const API_BASE = VERCEL_URL ? `${VERCEL_URL}/api/price` : '/api/price';
const DART_API_BASE = VERCEL_URL ? `${VERCEL_URL}/api/dart` : '/api/dart';
const ADMIN_PASSWORD = 'ipoAdmin2026';  // ← 배포 전 변경 권장

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
// 데이터 로딩
// 우선순위: localStorage 수동 수정 > DART 자동수집 > 내장 기본값
// ============================================
async function loadData() {
  // 1) 기본값으로 시작
  IPOS    = [...IPOS_DATA];
  BROKERS = [...BROKERS_DATA];

  // 2) localStorage에 저장된 관리자 수정 내역 덮어쓰기
  applyLocalOverrides();

  // 3) 화면 먼저 띄우기 (빠른 초기 렌더)
  init();

  // 4) DART API로 최신 공모주 백그라운드 수집 (API 연결된 경우만)
  if (isApiAvailable()) {
    fetchDartIPOs();
  }
}

// localStorage 저장값 반영
function applyLocalOverrides() {
  try {
    const savedBrokers = localStorage.getItem('ipo_brokers');
    if (savedBrokers) BROKERS = JSON.parse(savedBrokers);

    const savedIPOs = localStorage.getItem('ipo_manual');
    if (savedIPOs) {
      const manual = JSON.parse(savedIPOs);
      // 내장 데이터에 없는 수동 추가 종목만 병합
      manual.forEach(m => {
        const exists = IPOS.findIndex(i => i.id === m.id);
        if (exists >= 0) IPOS[exists] = m;   // 수정
        else IPOS.push(m);                   // 신규
      });
    }
  } catch (e) {
    console.warn('localStorage 로드 실패:', e.message);
  }
}

// DART에서 공모주 자동 수집 후 화면 갱신
async function fetchDartIPOs() {
  try {
    const res  = await fetch(`${DART_API_BASE}?days=60`);
    if (!res.ok) return;
    const data = await res.json();
    const dartItems = data.items || [];
    if (!dartItems.length) return;

    // DART 데이터 병합: 이미 있는 종목은 건너뜀, 새 종목만 추가
    let added = 0;
    dartItems.forEach(d => {
      const exists = IPOS.some(i => i.name === d.name);
      if (!exists) { IPOS.push(d); added++; }
    });

    if (added > 0) {
      // 새 종목이 있으면 화면 갱신
      renderDashboard();
      renderCalendar();
      showToast(`📡 DART에서 새 공모주 ${added}건을 자동으로 불러왔습니다.`);
    }
  } catch (e) {
    console.warn('DART 자동수집 실패 (내장 데이터로 동작):', e.message);
  }
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

// ============================================
// 토스트 알림
// ============================================
function showToast(msg, type = 'info') {
  const colors = { info: '#4A8AC9', success: '#2ECC71', error: '#E74C3C' };
  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed; bottom:24px; left:50%; transform:translateX(-50%);
    background:${colors[type]}; color:#fff; padding:12px 20px;
    border-radius:12px; font-size:13px; font-weight:600;
    box-shadow:0 4px 16px rgba(0,0,0,0.15); z-index:9999;
    animation: slideUp 0.3s ease;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// ============================================
// 관리자 패널
// ============================================
(function setupAdmin() {
  // 헤더에 관리자 버튼 추가
  const headerRight = document.querySelector('.header-right');
  const adminBtn = document.createElement('button');
  adminBtn.className = 'icon-btn';
  adminBtn.title = '관리자';
  adminBtn.textContent = '🔧';
  adminBtn.onclick = openAdminPanel;
  headerRight.insertBefore(adminBtn, headerRight.firstChild);

  // 모달 컨테이너 생성
  const modal = document.createElement('div');
  modal.id = 'admin-modal';
  modal.style.cssText = `
    display:none; position:fixed; inset:0; background:rgba(0,0,0,0.45);
    z-index:1000; align-items:center; justify-content:center;
  `;
  modal.innerHTML = `
    <div style="background:#fff; border-radius:20px; width:min(720px,95vw);
                max-height:85vh; overflow-y:auto; padding:32px; position:relative;">
      <button onclick="document.getElementById('admin-modal').style.display='none'"
              style="position:absolute;top:16px;right:20px;font-size:20px;
                     background:none;border:none;cursor:pointer;color:#666">✕</button>
      <h2 style="font-size:18px;font-weight:700;margin-bottom:6px">🔧 관리자 패널</h2>
      <p style="font-size:13px;color:#6B7280;margin-bottom:24px">
        코드 편집 없이 데이터를 관리하세요. 변경사항은 이 브라우저에 저장됩니다.
      </p>
      <div id="admin-content"></div>
    </div>
  `;
  document.body.appendChild(modal);
})();

function openAdminPanel() {
  const modal = document.getElementById('admin-modal');
  const pw = prompt('관리자 비밀번호를 입력하세요:');
  if (pw !== ADMIN_PASSWORD) {
    if (pw !== null) alert('비밀번호가 틀렸습니다.');
    return;
  }
  renderAdminContent();
  modal.style.display = 'flex';
}

function renderAdminContent() {
  document.getElementById('admin-content').innerHTML = `
    <!-- 탭 -->
    <div style="display:flex;gap:8px;margin-bottom:20px;border-bottom:1px solid #E5E7EB;padding-bottom:12px">
      <button class="admin-tab-btn active" onclick="showAdminTab('brokers',this)">증권사 이벤트</button>
      <button class="admin-tab-btn" onclick="showAdminTab('ipos',this)">공모주 추가/수정</button>
      <button class="admin-tab-btn" onclick="showAdminTab('reset',this)">초기화</button>
    </div>
    <div id="admin-tab-brokers">${renderBrokersAdmin()}</div>
    <div id="admin-tab-ipos"    style="display:none">${renderIPOsAdmin()}</div>
    <div id="admin-tab-reset"   style="display:none">${renderResetAdmin()}</div>
  `;
}

function showAdminTab(tab, btn) {
  document.querySelectorAll('[id^="admin-tab-"]').forEach(el => el.style.display = 'none');
  document.getElementById(`admin-tab-${tab}`).style.display = 'block';
  document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ── 증권사 이벤트 관리 ──
function renderBrokersAdmin() {
  const rows = BROKERS.map((b, i) => `
    <div style="background:#F8FAFC;border-radius:12px;padding:16px;margin-bottom:10px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
        <div><label style="font-size:11px;color:#6B7280">증권사명</label>
          <input class="admin-input" id="br_broker_${i}" value="${b.broker}"></div>
        <div><label style="font-size:11px;color:#6B7280">혜택 금액</label>
          <input class="admin-input" id="br_benefit_${i}" value="${b.benefit}"></div>
        <div><label style="font-size:11px;color:#6B7280">이벤트 설명</label>
          <input class="admin-input" id="br_event_${i}" value="${b.event}"></div>
        <div><label style="font-size:11px;color:#6B7280">마감일</label>
          <input class="admin-input" id="br_deadline_${i}" value="${b.deadline}"></div>
        <div><label style="font-size:11px;color:#6B7280">조건</label>
          <input class="admin-input" id="br_condition_${i}" value="${b.condition}"></div>
        <div><label style="font-size:11px;color:#6B7280">링크 URL</label>
          <input class="admin-input" id="br_link_${i}" value="${b.link}"></div>
      </div>
      <div style="display:flex;gap:8px">
        <button onclick="saveBroker(${i})" class="admin-save-btn">저장</button>
        <button onclick="deleteBroker(${i})" class="admin-del-btn">삭제</button>
      </div>
    </div>
  `).join('');

  return `
    ${rows}
    <button onclick="addBroker()" style="width:100%;padding:12px;border:2px dashed #CBD5E1;
      border-radius:12px;color:#64748B;font-size:13px;cursor:pointer;background:none;
      margin-top:4px">+ 증권사 추가</button>
  `;
}

function saveBroker(i) {
  BROKERS[i] = {
    ...BROKERS[i],
    broker:    document.getElementById(`br_broker_${i}`).value,
    benefit:   document.getElementById(`br_benefit_${i}`).value,
    event:     document.getElementById(`br_event_${i}`).value,
    deadline:  document.getElementById(`br_deadline_${i}`).value,
    condition: document.getElementById(`br_condition_${i}`).value,
    link:      document.getElementById(`br_link_${i}`).value,
    priority:  'medium',
  };
  localStorage.setItem('ipo_brokers', JSON.stringify(BROKERS));
  renderAccount();
  showToast('✅ 증권사 이벤트가 저장되었습니다.', 'success');
  renderAdminContent();
}

function deleteBroker(i) {
  if (!confirm(`"${BROKERS[i].broker}" 이벤트를 삭제할까요?`)) return;
  BROKERS.splice(i, 1);
  localStorage.setItem('ipo_brokers', JSON.stringify(BROKERS));
  renderAccount();
  renderAdminContent();
  showToast('삭제되었습니다.', 'info');
}

function addBroker() {
  BROKERS.push({
    broker: '새 증권사', shortName: '신규', event: '이벤트 내용을 입력하세요',
    deadline: '2026-12-31', benefit: '0원', condition: '조건 입력',
    priority: 'low', color: '#888888', link: 'https://'
  });
  localStorage.setItem('ipo_brokers', JSON.stringify(BROKERS));
  renderAdminContent();
  showAdminTab('brokers', document.querySelector('.admin-tab-btn'));
}

// ── 공모주 추가/수정 ──
function renderIPOsAdmin() {
  const active = IPOS
    .filter(i => i.status !== 'listed')
    .sort((a, b) => a.subscribeStart?.localeCompare(b.subscribeStart));

  const rows = active.map(ipo => `
    <div style="background:#F8FAFC;border-radius:12px;padding:16px;margin-bottom:10px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <strong style="font-size:14px">${ipo.name}</strong>
        <span style="font-size:12px;color:#6B7280">${ipo.source === 'dart' ? '📡 DART 자동' : '✍️ 수동'}</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:10px">
        <div><label style="font-size:11px;color:#6B7280">상태</label>
          <select class="admin-input" id="ip_status_${ipo.id}">
            <option value="upcoming"    ${ipo.status==='upcoming'    ?'selected':''}>예정</option>
            <option value="subscribing" ${ipo.status==='subscribing' ?'selected':''}>청약중</option>
            <option value="listed"      ${ipo.status==='listed'      ?'selected':''}>상장완료</option>
          </select></div>
        <div><label style="font-size:11px;color:#6B7280">확정 공모가</label>
          <input class="admin-input" type="number" id="ip_price_${ipo.id}"
                 value="${ipo.finalPrice || ''}" placeholder="미확정이면 빈칸"></div>
        <div><label style="font-size:11px;color:#6B7280">경쟁률</label>
          <input class="admin-input" type="number" id="ip_comp_${ipo.id}"
                 value="${ipo.competitionRate || ''}" placeholder="예: 1500"></div>
        <div><label style="font-size:11px;color:#6B7280">의무보유확약 (%)</label>
          <input class="admin-input" type="number" id="ip_lockup_${ipo.id}"
                 value="${ipo.lockup || ''}" placeholder="예: 25.5"></div>
        <div><label style="font-size:11px;color:#6B7280">균등배정 (주)</label>
          <input class="admin-input" type="number" id="ip_equal_${ipo.id}"
                 value="${ipo.equalShares || ''}" placeholder="예: 3"></div>
        <div><label style="font-size:11px;color:#6B7280">상장 첫날 종가</label>
          <input class="admin-input" type="number" id="ip_firstday_${ipo.id}"
                 value="${ipo.firstDayClose || ''}" placeholder="상장 후 입력"></div>
      </div>
      <button onclick="saveIPO('${ipo.id}')" class="admin-save-btn">저장</button>
    </div>
  `).join('');

  return `
    <p style="font-size:12px;color:#6B7280;margin-bottom:16px">
      DART에서 자동 수집된 종목의 경쟁률, 의무보유확약, 상장 후 데이터를 여기서 입력하세요.
    </p>
    ${rows || '<p style="color:#9CA3AF;text-align:center;padding:20px">현재 진행/예정 중인 공모주가 없습니다.</p>'}
    <hr style="margin:20px 0;border-color:#E5E7EB">
    <h4 style="font-size:14px;font-weight:600;margin-bottom:12px">새 공모주 수동 추가</h4>
    ${renderAddIPOForm()}
  `;
}

function renderAddIPOForm() {
  return `
    <div style="background:#EEF2FF;border-radius:12px;padding:16px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
        <div><label style="font-size:11px;color:#6B7280">종목명 *</label>
          <input class="admin-input" id="new_name" placeholder="예: 삼성바이오로직스"></div>
        <div><label style="font-size:11px;color:#6B7280">종목코드</label>
          <input class="admin-input" id="new_code" placeholder="예: 207940"></div>
        <div><label style="font-size:11px;color:#6B7280">청약 시작일 *</label>
          <input class="admin-input" type="date" id="new_substart"></div>
        <div><label style="font-size:11px;color:#6B7280">청약 종료일 *</label>
          <input class="admin-input" type="date" id="new_subend"></div>
        <div><label style="font-size:11px;color:#6B7280">상장 예정일</label>
          <input class="admin-input" type="date" id="new_listing"></div>
        <div><label style="font-size:11px;color:#6B7280">섹터</label>
          <input class="admin-input" id="new_sector" placeholder="예: 바이오"></div>
        <div><label style="font-size:11px;color:#6B7280">공모가 하단</label>
          <input class="admin-input" type="number" id="new_pmin" placeholder="예: 18000"></div>
        <div><label style="font-size:11px;color:#6B7280">공모가 상단</label>
          <input class="admin-input" type="number" id="new_pmax" placeholder="예: 22000"></div>
        <div><label style="font-size:11px;color:#6B7280">주관사</label>
          <input class="admin-input" id="new_sec" placeholder="예: NH투자증권, 한국투자증권"></div>
        <div><label style="font-size:11px;color:#6B7280">최소증거금</label>
          <input class="admin-input" type="number" id="new_deposit" placeholder="자동계산 가능"></div>
      </div>
      <button onclick="addIPO()" class="admin-save-btn">공모주 추가</button>
    </div>
  `;
}

function saveIPO(ipoId) {
  const ipo = IPOS.find(i => String(i.id) === String(ipoId));
  if (!ipo) return;

  ipo.status          = document.getElementById(`ip_status_${ipoId}`).value;
  ipo.finalPrice      = parseFloat(document.getElementById(`ip_price_${ipoId}`).value)    || null;
  ipo.competitionRate = parseFloat(document.getElementById(`ip_comp_${ipoId}`).value)     || null;
  ipo.lockup          = parseFloat(document.getElementById(`ip_lockup_${ipoId}`).value)   || null;
  ipo.equalShares     = parseInt(document.getElementById(`ip_equal_${ipoId}`).value)      || null;
  ipo.firstDayClose   = parseFloat(document.getElementById(`ip_firstday_${ipoId}`).value) || null;

  // 수동 수정 내역 localStorage 저장
  saveManualIPOs();
  renderDashboard(); renderCalendar(); renderHistory(); renderSector();
  showToast(`✅ ${ipo.name} 정보가 저장되었습니다.`, 'success');
  renderAdminContent();
  showAdminTab('ipos', document.querySelectorAll('.admin-tab-btn')[1]);
}

function addIPO() {
  const name     = document.getElementById('new_name').value.trim();
  const subStart = document.getElementById('new_substart').value;
  const subEnd   = document.getElementById('new_subend').value;
  if (!name || !subStart || !subEnd) {
    alert('종목명, 청약 시작일, 청약 종료일은 필수입니다.'); return;
  }
  const pmin    = parseInt(document.getElementById('new_pmin').value)    || null;
  const pmax    = parseInt(document.getElementById('new_pmax').value)    || null;
  const deposit = parseInt(document.getElementById('new_deposit').value) || (pmax ? pmax * 10 * 0.5 : null);
  const secs    = document.getElementById('new_sec').value
                    .split(',').map(s => s.trim()).filter(Boolean);

  const newIPO = {
    id: `manual_${Date.now()}`, name, source: 'manual',
    code:            document.getElementById('new_code').value.trim(),
    status:          'upcoming',
    subscribeStart:  subStart,
    subscribeEnd:    subEnd,
    listingDate:     document.getElementById('new_listing').value || null,
    priceRange:      pmin && pmax ? [pmin, pmax] : [null, null],
    finalPrice:      null,
    securities:      secs,
    minDeposit:      deposit,
    totalShares:     null,
    sector:          document.getElementById('new_sector').value.trim() || '기타',
    competitionRate: null, lockup: null, equalShares: null,
    firstDayClose:   null, allTimeHigh: null, allTimeHighDate: null, currentPrice: null,
  };

  IPOS.push(newIPO);
  saveManualIPOs();
  renderDashboard(); renderCalendar();
  showToast(`✅ ${name}이(가) 추가되었습니다.`, 'success');
  renderAdminContent();
  showAdminTab('ipos', document.querySelectorAll('.admin-tab-btn')[1]);
}

function saveManualIPOs() {
  // 내장 데이터가 아닌 것(수동 추가 or 수동 수정)만 저장
  const manualOrModified = IPOS.filter(i =>
    i.source === 'manual' || i.source === 'dart' ||
    !IPOS_DATA.some(d => d.id === i.id &&
      d.status === i.status && d.finalPrice === i.finalPrice)
  );
  localStorage.setItem('ipo_manual', JSON.stringify(manualOrModified));
}

// ── 초기화 ──
function renderResetAdmin() {
  return `
    <div style="padding:8px">
      <p style="font-size:13px;color:#6B7280;margin-bottom:20px">
        localStorage에 저장된 수동 수정 내역을 삭제하고 내장 기본 데이터로 되돌립니다.
      </p>
      <div style="display:flex;flex-direction:column;gap:10px">
        <button onclick="resetBrokers()" style="padding:12px 20px;background:#FFF7ED;color:#C2410C;
          border:1px solid #FED7AA;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer">
          증권사 이벤트만 초기화
        </button>
        <button onclick="resetIPOs()" style="padding:12px 20px;background:#FFF7ED;color:#C2410C;
          border:1px solid #FED7AA;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer">
          공모주 수동 수정만 초기화
        </button>
        <button onclick="resetAll()" style="padding:12px 20px;background:#FEF2F2;color:#DC2626;
          border:1px solid #FECACA;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer">
          전체 초기화 (모든 수정 내역 삭제)
        </button>
      </div>
    </div>
  `;
}

function resetBrokers() {
  if (!confirm('증권사 이벤트를 기본값으로 되돌릴까요?')) return;
  localStorage.removeItem('ipo_brokers');
  BROKERS = [...BROKERS_DATA];
  renderAccount();
  showToast('증권사 이벤트가 초기화되었습니다.', 'info');
  renderAdminContent();
}

function resetIPOs() {
  if (!confirm('공모주 수동 수정 내역을 삭제할까요?')) return;
  localStorage.removeItem('ipo_manual');
  IPOS = [...IPOS_DATA];
  renderDashboard(); renderCalendar(); renderHistory(); renderSector();
  showToast('공모주 데이터가 초기화되었습니다.', 'info');
  renderAdminContent();
}

function resetAll() {
  if (!confirm('모든 수정 내역을 삭제하고 기본값으로 되돌릴까요?')) return;
  localStorage.removeItem('ipo_brokers');
  localStorage.removeItem('ipo_manual');
  IPOS    = [...IPOS_DATA];
  BROKERS = [...BROKERS_DATA];
  init();
  document.getElementById('admin-modal').style.display = 'none';
  showToast('전체 초기화 완료.', 'info');
}

// 관리자 패널 스타일
const adminStyle = document.createElement('style');
adminStyle.textContent = `
  .admin-input {
    width:100%; padding:8px 10px; background:#fff;
    border:1px solid #E2E8F0; border-radius:6px;
    font-size:13px; margin-top:4px; font-family:inherit;
  }
  .admin-input:focus { outline:none; border-color:#4A8AC9; }
  .admin-tab-btn {
    padding:8px 14px; border-radius:8px; font-size:13px;
    font-weight:500; color:#6B7280; background:#F1F5F9;
    border:none; cursor:pointer; transition:all 0.2s;
  }
  .admin-tab-btn.active { background:#4A8AC9; color:#fff; }
  .admin-save-btn {
    padding:8px 16px; background:#4A8AC9; color:#fff;
    border:none; border-radius:8px; font-size:13px;
    font-weight:600; cursor:pointer;
  }
  .admin-save-btn:hover { background:#2C6BA8; }
  .admin-del-btn {
    padding:8px 16px; background:#FEE2E2; color:#DC2626;
    border:none; border-radius:8px; font-size:13px;
    font-weight:600; cursor:pointer;
  }
  @keyframes slideUp {
    from { opacity:0; transform:translateX(-50%) translateY(12px); }
    to   { opacity:1; transform:translateX(-50%) translateY(0); }
  }
`;
document.head.appendChild(adminStyle);
