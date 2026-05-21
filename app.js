// ============================================
// 데이터 (새 공모주는 여기에 직접 추가하세요)
// status: "upcoming"(예정) | "subscribing"(청약중) | "listed"(상장완료)
// ============================================
const IPOS_DATA = [
  { "id": 1, "name": "빅웨이브로보틱스", "code": "0035S0", "status": "upcoming", "subscribeStart": "2026-06-18", "subscribeEnd": "2026-06-19", "listingDate": null, "refundDate": "2026-06-23", "priceRange": [22000, 27000], "finalPrice": null, "securities": ["미래에셋증권", "유진투자증권"], "minDeposit": 135000, "totalShares": null, "sector": "IT/SW", "competitionRate": null, "lockup": null, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 2, "name": "스트라드비젼", "code": "475040", "status": "upcoming", "subscribeStart": "2026-06-17", "subscribeEnd": "2026-06-18", "listingDate": null, "refundDate": "2026-06-22", "priceRange": [12400, 14800], "finalPrice": null, "securities": ["KB증권"], "minDeposit": 74000, "totalShares": null, "sector": "IT/SW", "competitionRate": null, "lockup": null, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 3, "name": "져스텍", "code": "153890", "status": "upcoming", "subscribeStart": "2026-06-11", "subscribeEnd": "2026-06-12", "listingDate": null, "refundDate": "2026-06-16", "priceRange": [10500, 12500], "finalPrice": null, "securities": ["삼성증권"], "minDeposit": 62500, "totalShares": null, "sector": "제조", "competitionRate": null, "lockup": null, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 4, "name": "레몬헬스케어", "code": "365660", "status": "upcoming", "subscribeStart": "2026-06-09", "subscribeEnd": "2026-06-10", "listingDate": null, "refundDate": "2026-06-12", "priceRange": [7500, 10000], "finalPrice": null, "securities": ["KB증권"], "minDeposit": 50000, "totalShares": null, "sector": "IT/SW", "competitionRate": null, "lockup": null, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 5, "name": "메리츠스팩2호", "code": "0165X0", "status": "upcoming", "subscribeStart": "2026-06-09", "subscribeEnd": "2026-06-10", "listingDate": null, "refundDate": "2026-06-12", "priceRange": [2000, 2000], "finalPrice": null, "securities": ["메리츠증권"], "minDeposit": 10000, "totalShares": null, "sector": "SPAC", "competitionRate": null, "lockup": null, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 6, "name": "매드업", "code": "0039P0", "status": "upcoming", "subscribeStart": "2026-06-01", "subscribeEnd": "2026-06-02", "listingDate": null, "refundDate": "2026-06-05", "priceRange": [7000, 8000], "finalPrice": null, "securities": ["미래에셋증권"], "minDeposit": 40000, "totalShares": null, "sector": "IT/SW", "competitionRate": null, "lockup": null, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 7, "name": "피스피스스튜디오", "code": "0117P0", "status": "upcoming", "subscribeStart": "2026-05-26", "subscribeEnd": "2026-05-27", "listingDate": null, "refundDate": "2026-05-29", "priceRange": [19000, 21500], "finalPrice": null, "securities": ["NH투자증권", "미래에셋증권"], "minDeposit": 107500, "totalShares": null, "sector": "소비재", "competitionRate": null, "lockup": null, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 8, "name": "대신밸런스스팩20호", "code": "0134X0", "status": "upcoming", "subscribeStart": "2026-05-22", "subscribeEnd": "2026-05-26", "listingDate": null, "refundDate": "2026-05-28", "priceRange": [2000, 2000], "finalPrice": null, "securities": ["대신증권"], "minDeposit": 10000, "totalShares": null, "sector": "SPAC", "competitionRate": null, "lockup": null, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 9, "name": "마키나락스", "code": "477850", "status": "listed", "subscribeStart": "2026-05-11", "subscribeEnd": "2026-05-12", "listingDate": "2026-05-20", "refundDate": "2026-05-14", "priceRange": [12500, 15000], "finalPrice": 15000, "securities": ["미래에셋증권", "현대차증권"], "minDeposit": 75000, "totalShares": null, "sector": "IT/SW", "competitionRate": 2807.8, "lockup": 78.2, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 10, "name": "폴레드", "code": "487580", "status": "listed", "subscribeStart": "2026-05-04", "subscribeEnd": "2026-05-06", "listingDate": "2026-05-14", "refundDate": "2026-05-08", "priceRange": [4100, 5000], "finalPrice": 5000, "securities": ["NH투자증권"], "minDeposit": 25000, "totalShares": 2600000, "sector": "소비재", "competitionRate": 1486.66, "lockup": null, "equalShares": 1, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 11, "name": "코스모로보틱스", "code": "439960", "status": "listed", "subscribeStart": "2026-04-27", "subscribeEnd": "2026-04-28", "listingDate": "2026-05-11", "refundDate": "2026-04-30", "priceRange": [5300, 6000], "finalPrice": 6000, "securities": ["유진투자증권", "NH투자증권", "유안타증권"], "minDeposit": 30000, "totalShares": 4170000, "sector": "바이오", "competitionRate": 2013.8, "lockup": 74.48, "equalShares": 2, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 12, "name": "채비", "code": "0011T0", "status": "listed", "subscribeStart": "2026-04-20", "subscribeEnd": "2026-04-21", "listingDate": "2026-04-29", "refundDate": "2026-04-23", "priceRange": [12300, 15300], "finalPrice": 12300, "securities": ["KB증권", "삼성증권", "대신증권", "하나증권"], "minDeposit": 61500, "totalShares": null, "sector": "에너지", "competitionRate": 302.0, "lockup": 6.49, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 13, "name": "신한스팩18호", "code": "0129K0", "status": "listed", "subscribeStart": "2026-04-20", "subscribeEnd": "2026-04-21", "listingDate": "2026-04-30", "refundDate": "2026-04-23", "priceRange": [2000, 2000], "finalPrice": 2000, "securities": ["신한투자증권"], "minDeposit": 10000, "totalShares": null, "sector": "SPAC", "competitionRate": null, "lockup": null, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 14, "name": "키움히어로스팩2호", "code": "0131D0", "status": "listed", "subscribeStart": "2026-04-14", "subscribeEnd": "2026-04-15", "listingDate": "2026-04-23", "refundDate": "2026-04-17", "priceRange": [2000, 2000], "finalPrice": 2000, "securities": ["키움증권"], "minDeposit": 10000, "totalShares": null, "sector": "SPAC", "competitionRate": null, "lockup": null, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 15, "name": "인벤테라", "code": "0007J0", "status": "listed", "subscribeStart": "2026-03-23", "subscribeEnd": "2026-03-24", "listingDate": "2026-04-02", "refundDate": "2026-03-26", "priceRange": [12100, 16600], "finalPrice": 16600, "securities": ["NH투자증권", "유진투자증권"], "minDeposit": 83000, "totalShares": null, "sector": "바이오", "competitionRate": 1913.44, "lockup": 50.0, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 16, "name": "교보스팩20호", "code": "0132G0", "status": "listed", "subscribeStart": "2026-03-23", "subscribeEnd": "2026-03-24", "listingDate": "2026-04-02", "refundDate": "2026-03-26", "priceRange": [2000, 2000], "finalPrice": 2000, "securities": ["교보증권"], "minDeposit": 10000, "totalShares": null, "sector": "SPAC", "competitionRate": null, "lockup": null, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 17, "name": "리센스메디컬", "code": "394420", "status": "listed", "subscribeStart": "2026-03-19", "subscribeEnd": "2026-03-20", "listingDate": "2026-03-31", "refundDate": "2026-03-24", "priceRange": [9000, 11000], "finalPrice": 11000, "securities": ["KB증권", "한국투자증권"], "minDeposit": 55000, "totalShares": null, "sector": "바이오", "competitionRate": 2097.68, "lockup": 63.9, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 18, "name": "신한스팩17호", "code": "0130D0", "status": "listed", "subscribeStart": "2026-03-19", "subscribeEnd": "2026-03-20", "listingDate": "2026-04-01", "refundDate": "2026-03-24", "priceRange": [2000, 2000], "finalPrice": 2000, "securities": ["신한투자증권"], "minDeposit": 10000, "totalShares": null, "sector": "SPAC", "competitionRate": null, "lockup": null, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 19, "name": "NH스팩33호", "code": "0130H0", "status": "listed", "subscribeStart": "2026-03-17", "subscribeEnd": "2026-03-18", "listingDate": "2026-03-27", "refundDate": "2026-03-20", "priceRange": [2000, 2000], "finalPrice": 2000, "securities": ["NH투자증권"], "minDeposit": 10000, "totalShares": null, "sector": "SPAC", "competitionRate": null, "lockup": null, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" }
];

const BROKERS_DATA = [];

const el = (id) => document.getElementById(id);

let IPOS = [];
let BROKERS = [];
let chartInstances = {};
let priceCache = {};  
let activeCalendarDate = "";

const VERCEL_URL = 'https://ipo-center.vercel.app';   
const _BASE = VERCEL_URL.replace(/\/$/, '');
const API_BASE = _BASE ? `${_BASE}/api/price` : '/api/price';

const fmt = {
  num: (n) => n == null ? '-' : Number(n).toLocaleString('ko-KR'),
  won: (n) => n == null ? '-' : Number(n).toLocaleString('ko-KR') + '원',
  shortDate: (d) => d ? d.slice(5).replace('-', '/') : '-',
  dotDate: (d) => d ? d.slice(5).replace('-', '.') : '-',
  rate: (n) => {
    if (n == null) return '-';
    const v = Number(n).toFixed(1);
    return (n >= 0 ? '+' : '') + v + '%';
  },
  comp: (n) => n == null ? '-' : Number(n).toLocaleString('ko-KR') + ':1'
};

function calcReturn(buyPrice, sellPrice) {
  if (!buyPrice || !sellPrice) return null;
  return ((sellPrice - buyPrice) / buyPrice) * 100;
}

function getOptimalExitStrategy(ipo) {
  if (!ipo.listingDate || !ipo.allTimeHighDate) return "데이터 분석중";
  if (ipo.listingDate === ipo.allTimeHighDate) return "⚡ 상장 당일 (D+0)";
  const lDate = new Date(ipo.listingDate);
  const pDate = new Date(ipo.allTimeHighDate);
  const diffDays = Math.round((pDate - lDate) / 86400000);
  
  if (diffDays <= 3) return `⏱️ 단기 보유 (D+${diffDays})`;
  return `📈 장기 보유 (D+${diffDays})`;
}

function calcRefundDate(subscribeEnd) {
  if (!subscribeEnd) return '-';
  const d = new Date(subscribeEnd);
  d.setDate(d.getDate() + 2);
  return fmt.dotDate(d.toISOString().slice(0, 10));
}

async function loadData() {
  IPOS = [...IPOS_DATA];
  BROKERS = [...BROKERS_DATA];
  init();
}

function isApiAvailable() { return VERCEL_URL !== ''; }

function init() {
  try { renderHome(); } catch(e) {}
  try { renderToday(); } catch(e) {}
  try { renderCalendar(); } catch(e) {}
  try { renderAccount(); } catch(e) {}

  const navItems = document.querySelectorAll('.nav-item');
  const tabPanels = document.querySelectorAll('.tab-panel');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(n => n.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      item.classList.add('active');
      const tabId = 'tab-' + item.dataset.tab;
      document.getElementById(tabId)?.classList.add('active');
      if (item.dataset.tab === 'performance') {
        try { renderPerformanceSummary(); } catch(e) {}
        try { renderTracker(); } catch(e) {}
        try { renderHistory(); } catch(e) {}
      }
    });
  });
}

window.switchTab = function(tabName) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  const btn = document.querySelector(`.nav-item[data-tab="${tabName}"]`);
  if (btn) btn.classList.add('active');
  document.getElementById('tab-' + tabName)?.classList.add('active');
  if (tabName === 'performance') {
    renderPerformanceSummary();
    renderTracker();
    renderHistory();
  }
};

function renderHome() {
  const today = new Date(); today.setHours(0,0,0,0);
  const thisMonth = today.toISOString().slice(0,7);

  const subscribing = IPOS.filter(i => {
      const s = i.subscribeStart ? new Date(i.subscribeStart) : null;
      const e = i.subscribeEnd ? new Date(i.subscribeEnd) : (s ? new Date(s) : null);
      if(e) e.setHours(23,59,59,999);
      return s && s <= today && today <= e;
  }).length;
  
  const upcoming = IPOS.filter(i => {
      const s = i.subscribeStart ? new Date(i.subscribeStart) : null;
      return s && s > today;
  }).length;
  
  const listingThis = IPOS.filter(i => i.listingDate?.startsWith(thisMonth)).length;
  const comps = IPOS.filter(i => i.competitionRate);
  const avgComp = comps.length ? comps.reduce((s,i) => s + i.competitionRate, 0) / comps.length : 0;

  const dateEl = el('home-today-date');
  if (dateEl) dateEl.textContent = today.toLocaleDateString('ko-KR', { year:'numeric', month:'long', day:'numeric', weekday:'short' });

  if(el('home-subscribing')) el('home-subscribing').textContent = subscribing + '건';
  if(el('home-upcoming')) el('home-upcoming').textContent = upcoming + '건';
  if(el('home-listing')) el('home-listing').textContent = listingThis + '건';
  if(el('home-avg-comp')) el('home-avg-comp').textContent = avgComp > 0 ? Math.round(avgComp).toLocaleString() + ':1' : '-';

  const oneWeekAgo = new Date(today); oneWeekAgo.setDate(today.getDate() - 7);
  let recentIPOs = IPOS.filter(i => {
    if (!i.subscribeEnd) return false;
    const endDate = new Date(i.subscribeEnd);
    return endDate < today && endDate >= oneWeekAgo;
  }).sort((a,b) => new Date(b.subscribeEnd) - new Date(a.subscribeEnd));

  if (!recentIPOs.length) {
    const pastIPOs = IPOS.filter(i => i.subscribeEnd && new Date(i.subscribeEnd) < today)
      .sort((a,b) => new Date(b.subscribeEnd) - new Date(a.subscribeEnd));
    if (pastIPOs.length) recentIPOs = [pastIPOs[0]];
  }

  const twoWeeksLater = new Date(today); twoWeeksLater.setDate(today.getDate() + 14);
  let nextIPOs = IPOS.filter(i => {
    if (!i.subscribeStart) return false;
    const startDate = new Date(i.subscribeStart);
    return startDate >= today && startDate <= twoWeeksLater;
  }).sort((a,b) => new Date(a.subscribeStart) - new Date(b.subscribeStart));

  if (!nextIPOs.length) {
    const futureIPOs = IPOS.filter(i => i.subscribeStart && new Date(i.subscribeStart) >= today)
      .sort((a,b) => new Date(a.subscribeStart) - new Date(b.subscribeStart));
    if (futureIPOs.length) nextIPOs = [futureIPOs[0]];
  }

  const homeCards = el('home-cards');
  if (!homeCards) return;

  homeCards.innerHTML = `
    <div class="home-card-section">
      <div class="home-card-label">
        <span class="home-card-tag recent">최근 마감 청약</span>
        <span class="home-card-tag-sub">종료된 최근 공모주</span>
      </div>
      <div class="home-card-list">
        ${recentIPOs.length ? recentIPOs.map(ipo => homeIPOCard(ipo, 'recent')).join('') : '<div class="home-card-empty">최근 마감된 청약이 없습니다</div>'}
      </div>
    </div>
    <div class="home-card-section">
      <div class="home-card-label">
        <span class="home-card-tag next">다가오는 다음 청약</span>
        <span class="home-card-tag-sub">2주 이내 시작 예정</span>
      </div>
      <div class="home-card-list">
        ${nextIPOs.length ? nextIPOs.map(ipo => homeIPOCard(ipo, 'next')).join('') : '<div class="home-card-empty">예정된 다음 청약 일정이 없습니다</div>'}
      </div>
    </div>
  `;
}

function homeIPOCard(ipo, type) {
  const today = new Date(); today.setHours(0,0,0,0);
  const s = new Date(ipo.subscribeStart);
  const e = ipo.subscribeEnd ? new Date(ipo.subscribeEnd) : s;
  const isActive = today >= s && today <= e;
  const isPast = today > e;
  
  let ddayText = "";
  if (isActive) ddayText = '청약중';
  else if (isPast) ddayText = '청약종료';
  else {
    const dday = Math.ceil((s - today) / 86400000);
    ddayText = dday === 0 ? 'D-Day' : `D-${dday}`;
  }

  const ddayColor = isActive ? '#3B82F6' : isPast ? '#64748B' : '#F59E0B';
  const price = ipo.finalPrice
    ? `${fmt.won(ipo.finalPrice)} <span class="badge-inside-ok">확정</span>`
    : ipo.priceRange?.[0]
      ? `${fmt.num(ipo.priceRange[0])}~${fmt.num(ipo.priceRange[1])}원 <span class="badge-inside-hope">희망</span>`
      : '<span style="color:#94A3B8">미정</span>';

  return `
    <div class="home-ipo-card" onclick="openCalcModal('${ipo.id}')">
      <div class="home-ipo-top">
        <div class="home-ipo-name">${ipo.name}</div>
        <div class="home-ipo-dday" style="color:${ddayColor}; background-color:${ddayColor}20">${ddayText}</div>
      </div>
      ${ipo.sector ? `<div class="home-ipo-sector">${ipo.sector}</div>` : ''}
      <div class="home-ipo-details">
        <div class="home-ipo-row">
          <span>공모가격</span>
          <span>${price}</span>
        </div>
        <div class="home-ipo-row">
          <span>청약기간</span>
          <span>${fmt.dotDate(ipo.subscribeStart)} ~ ${fmt.dotDate(ipo.subscribeEnd)}</span>
        </div>
        ${ipo.listingDate ? `<div class="home-ipo-row"><span>상장예정일</span><span>${fmt.dotDate(ipo.listingDate)}</span></div>` : ''}
        <div class="home-ipo-row">
          <span>주관회사</span>
          <span>${(ipo.securities||[]).join(', ') || '-'}</span>
        </div>
      </div>
      <div class="home-ipo-footer">계산기 열기 및 상세 시뮬레이션 →</div>
    </div>
  `;
}

function renderToday() {
  const today = new Date(); today.setHours(0,0,0,0);
  const activeIPOs = IPOS.filter(i => {
    if (!i.subscribeStart) return false;
    const end = i.subscribeEnd ? new Date(i.subscribeEnd) : new Date(i.subscribeStart);
    return end >= today;
  }).sort((a,b) => (a.subscribeStart||'').localeCompare(b.subscribeStart||''));

  const grid = el('today-ipo-grid');
  if (!grid) return;

  if (!activeIPOs.length) {
    grid.innerHTML = '<div class="calendar-empty-text" style="padding:80px;">현재 진행 중이거나 예정된 청약 일정이 없습니다.</div>';
    return;
  }
  grid.innerHTML = activeIPOs.map(ipo => ipoFullCard(ipo)).join('');
}

function ipoFullCard(ipo) {
  const today = new Date(); today.setHours(0,0,0,0);
  const s = new Date(ipo.subscribeStart);
  const e = ipo.subscribeEnd ? new Date(ipo.subscribeEnd) : s;
  const isActive = today >= s && today <= e;
  const isPast = today > e;
  
  let statusText = "청약 예정";
  let badgeClass = "upcoming";
  if (isActive) {
    statusText = "청약 진행중";
    badgeClass = ""; 
  } else if (isPast) {
    statusText = "청약 종료";
    badgeClass = "past";
  }

  const basePrice = ipo.finalPrice || (ipo.priceRange ? ipo.priceRange[1] : 0);
  const priceDisplay = ipo.finalPrice ? fmt.won(ipo.finalPrice) : (ipo.priceRange ? `${fmt.num(ipo.priceRange[0])}~${fmt.num(ipo.priceRange[1])}원` : '미정');
  const ttatsangPrice = basePrice * 4;
  const returnProfit = ttatsangPrice - basePrice;

  return `
    <div class="premium-ipo-card" onclick="openCalcModal('${ipo.id}')" style="cursor:pointer;">
      <div class="premium-header">
        <div class="premium-title">
          <h2>${ipo.name}</h2>
          <span>코스닥 · 종목코드 ${ipo.code || '미정'}</span>
        </div>
        <div class="premium-badge ${badgeClass}">${statusText}</div>
      </div>

      <div class="premium-body">
        <div class="premium-grid">
          <div class="premium-box ${isActive ? 'active-border' : ''}">
            <span class="premium-box-label">청약일</span>
            <span class="premium-box-value">${fmt.shortDate(ipo.subscribeStart)} ~ ${fmt.shortDate(ipo.subscribeEnd)}</span>
          </div>
          <div class="premium-box">
            <span class="premium-box-label">환불일 / 상장일</span>
            <span class="premium-box-value" style="font-size:15px;">${fmt.shortDate(ipo.refundDate) || '-'} / ${fmt.shortDate(ipo.listingDate) || '-'}</span>
          </div>
          <div class="premium-box" style="grid-column: span 2;">
            <span class="premium-box-label">${ipo.finalPrice ? '확정' : '희망'}공모가</span>
            <span class="premium-box-value" style="font-size:22px;">${priceDisplay}</span>
          </div>
          <div class="premium-box">
            <span class="premium-box-label">기관경쟁률</span>
            <span class="premium-box-value">${ipo.competitionRate ? fmt.num(ipo.competitionRate) + ':1' : '미정'}</span>
          </div>
          <div class="premium-box">
            <span class="premium-box-label">의무보유확약</span>
            <span class="premium-box-value">${ipo.lockup ? ipo.lockup + '%' : '미정'}</span>
          </div>
        </div>

        <div class="premium-highlight">
          <span class="highlight-sub">🚀 상장일 최대 상한가 (따따블 400%)</span>
          <div class="highlight-price">${basePrice > 0 ? fmt.won(ttatsangPrice) : '분석중'}</div>
          ${basePrice > 0 ? `
            <div class="highlight-return">+300.0% (+${fmt.num(returnProfit)}원)</div>
            <span style="font-size:12px; color:#888;">공모가 ${fmt.won(basePrice)} 대비</span>
          ` : '<span style="font-size:12px; color:#888;">공모가 확정 시 제공됩니다</span>'}
        </div>
      </div>

      <div class="premium-footer">
        <div class="premium-underwriter">
          <span class="pu-label">배정 주관사</span>
          <span class="pu-value">${(ipo.securities||[]).join(' · ')}</span>
        </div>
      </div>
    </div>
  `;
}

let calendarYear  = new Date().getFullYear();
let calendarMonth = new Date().getMonth();  

function renderCalendar() {
  renderCalGrid();
  renderCalendarDetail(); 
}

function renderCalGrid() {
  const monthTitle = el('cal-month-title');
  if (monthTitle) monthTitle.textContent = `${calendarYear}년 ${calendarMonth + 1}월`;

  const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  const today = new Date(); today.setHours(0,0,0,0);

  const monthStr = `${calendarYear}-${String(calendarMonth+1).padStart(2,'0')}`;
  const events = {};  

  IPOS.forEach(ipo => {
    if (ipo.subscribeStart) {
      const start = ipo.subscribeStart;
      const end   = ipo.subscribeEnd || start;
      let d = new Date(start);
      while (d <= new Date(end)) {
        const ds = d.toISOString().slice(0,10);
        if (ds.startsWith(monthStr)) {
          if (!events[ds]) events[ds] = [];
          
          let type = 'upcoming';
          const iStart = new Date(ipo.subscribeStart);
          const iEnd = new Date(ipo.subscribeEnd || ipo.subscribeStart);
          iEnd.setHours(23,59,59,999);

          let eName = ipo.name;

          if (today > iEnd) {
            type = 'past';
            eName = ipo.name + ' (청약종료)';
          } else if (today >= iStart && today <= iEnd) {
            type = 'subscribing'; 
          } else {
            type = 'upcoming'; 
          }

          if (!events[ds].find(e => e.id === ipo.id)) {
            events[ds].push({ type, name: eName, id: ipo.id });
          }
        }
        d.setDate(d.getDate() + 1);
      }
    }
    if (ipo.listingDate?.startsWith(monthStr)) {
      if (!events[ipo.listingDate]) events[ipo.listingDate] = [];
      events[ipo.listingDate].push({ type: 'listing', name: '[상장] ' + ipo.name, id: ipo.id });
    }
  });

  const body = el('cal-body');
  if (!body) return;

  let html = '';
  for (let i = 0; i < firstDay; i++) {
    html += '<div class="cal-cell empty"></div>';
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const currentDayStr = `${calendarYear}-${String(calendarMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isToday = currentDayStr === today.toISOString().slice(0,10);
    const dayEvents = events[currentDayStr] || [];
    const dateObj = new Date(calendarYear, calendarMonth, d);
    const weekendClass = dateObj.getDay() === 0 ? 'sun' : (dateObj.getDay() === 6 ? 'sat' : '');
    const activeClass = (currentDayStr === activeCalendarDate) ? 'selected-date' : '';

    html += `
      <div class="cal-cell ${isToday?'today':''} ${weekendClass} ${activeClass}" onclick="selectCalendarDate('${currentDayStr}')">
        <span class="cal-day-num">${d}</span>
        <div class="cal-events">
          ${dayEvents.slice(0, 3).map(e => `
            <div class="cal-event ${e.type}" title="${e.name}">${e.name}</div>
          `).join('')}
          ${dayEvents.length > 3 ? `<div class="cal-event-more">+${dayEvents.length - 3}건 더보기</div>` : ''}
        </div>
      </div>
    `;
  }

  body.innerHTML = html;

  el('cal-prev').onclick = () => {
    calendarMonth--;
    if (calendarMonth < 0) { calendarMonth = 11; calendarYear--; }
    renderCalGrid();
  };
  el('cal-next').onclick = () => {
    calendarMonth++;
    if (calendarMonth > 11) { calendarMonth = 0; calendarYear++; }
    renderCalGrid();
  };
}

window.selectCalendarDate = function(dateStr) {
  activeCalendarDate = dateStr;
  renderCalGrid(); 
  renderCalendarDetail();
};

function renderCalendarDetail() {
  const listContainer = el('calendar-detail-list');
  const titleContainer = el('calendar-detail-title');
  if (!listContainer) return;

  if (!activeCalendarDate) {
    titleContainer.textContent = "선택된 날짜의 상세 일정";
    listContainer.innerHTML = '<p class="calendar-empty-text">달력에서 원하시는 날짜를 클릭하시면 하단에 매칭되는 상세 정보 카드가 표출됩니다.</p>';
    return;
  }

  titleContainer.textContent = `${activeCalendarDate} 기준 상세 일정 리스트`;

  const matched = IPOS.filter(ipo => {
    if (!ipo.subscribeStart) return false;
    const isSub = (activeCalendarDate >= ipo.subscribeStart && activeCalendarDate <= ipo.subscribeEnd);
    const isList = (ipo.listingDate === activeCalendarDate);
    return isSub || isList;
  });

  if (!matched.length) {
    listContainer.innerHTML = `<p class="calendar-empty-text">${activeCalendarDate} 일에는 등록된 공모주 청약 혹은 상장 일정이 없습니다.</p>`;
    return;
  }

  listContainer.innerHTML = matched.map(ipo => {
    const isListingDay = ipo.listingDate === activeCalendarDate;
    const badgeType = isListingDay ? 'listing' : 'subscribing';
    const badgeText = isListingDay ? '🎉 상장일' : '✍️ 청약진행';
    
    return `
      <div class="calendar-detail-card card-item-flex" onclick="openCalcModal('${ipo.id}')">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span class="badge cal-dot ${badgeType}" style="border-radius:4px; font-size:12px; font-weight:700; color:white; padding:4px 8px;">${badgeText}</span>
          <span style="font-size:13px; color:var(--text-secondary); font-weight:600;">${ipo.sector || '일반섹터'}</span>
        </div>
        <h4 style="font-size:17px; font-weight:700; margin-bottom:10px; color:var(--text-primary)">${ipo.name}</h4>
        <div style="font-size:13px; display:grid; grid-template-columns:1fr; gap:6px; color:var(--text-secondary)">
          <div><strong>공모가격:</strong> ${ipo.finalPrice ? fmt.won(ipo.finalPrice) : '밴드 ' + ipo.priceRange.map(p=>fmt.num(p)).join('~') + '원'}</div>
          <div><strong>청약일정:</strong> ${ipo.subscribeStart} ~ ${ipo.subscribeEnd}</div>
          <div><strong>상장기일:</strong> ${ipo.listingDate || '미정'}</div>
          <div><strong>배정주관사:</strong> ${(ipo.securities||[]).join(', ')}</div>
        </div>
        <div style="margin-top:12px; text-align:right; font-size:12px; color:var(--primary); font-weight:700;">
          클릭시 모달 계산기 자동 연동 →
        </div>
      </div>
    `;
  }).join('');
}

function renderPerformanceSummary() {}

let trackerSelected = null;

function renderTracker() {
  const today = new Date(); today.setHours(0,0,0,0);
  const listed = IPOS.filter(i => i.status === 'listed' && i.code && i.listingDate && new Date(i.listingDate) <= today)
    .sort((a, b) => new Date(b.listingDate) - new Date(a.listingDate));

  const tabsDiv = el('tracker-tabs');
  const statsDiv = el('tracker-stats');
  const returnsDiv = el('tracker-returns');

  if (!listed.length) {
    if (tabsDiv) tabsDiv.innerHTML = '';
    if (statsDiv) {
      statsDiv.innerHTML = `
        <div class="stat-card" style="grid-column: span 4; text-align:center; padding: 32px; color: var(--text-secondary);">
          <p style="font-weight:700; font-size:16px;">최고가 실시간 분석 대상 종목이 없습니다.</p>
        </div>`;
    }
    if (returnsDiv) returnsDiv.innerHTML = '';
    return;
  }

  trackerSelected = listed[0];

  tabsDiv.innerHTML = listed.map(i =>
    `<button class="tracker-tab" data-id="${i.id}">${i.name} <span style="opacity:0.6;font-size:11px">${i.code}</span></button>`
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
  if (!t || !t.code || !t.listingDate) return;

  const statsDiv = el('tracker-stats');
  const returnsDiv = el('tracker-returns');

  statsDiv.innerHTML = `<div class="stat-card" style="grid-column: span 4; text-align:center; padding: 32px;"><p style="color:var(--text-secondary)">🔄 ${t.name} 실시간 시세 데이터 동기화 및 덤프 연산 중...</p></div>`;
  if (returnsDiv) returnsDiv.innerHTML = '';

  if (!isApiAvailable()) {
    statsDiv.innerHTML = '<div class="stat-card" style="grid-column: span 4">현재 외부 연동 주가 API 포트 주소가 설정되지 않았습니다.</div>';
    return;
  }

  try {
    const url = `${_BASE}/api/price?code=${t.code}&since=${t.listingDate}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.error || !data.daily || !data.daily.length) {
      const mockData = {
        peak: { price: t.allTimeHigh || (t.firstDayClose ? t.firstDayClose * 1.2 : t.finalPrice * 1.5), date: t.allTimeHighDate || t.listingDate, daysAfterListing: 2 },
        current: { price: t.currentPrice || t.finalPrice * 1.1, date: "최신 거래일" },
        firstDay: { close: t.firstDayClose || t.finalPrice * 1.3, date: t.listingDate },
        totalDaysListed: 15,
        daily: [
          { date: t.listingDate, close: t.finalPrice * 1.1, high: t.finalPrice * 1.3 },
          { date: t.allTimeHighDate || "고점일", close: t.finalPrice * 1.2, high: t.allTimeHigh || t.finalPrice * 1.5 },
          { date: "최신 거래일", close: t.currentPrice || t.finalPrice * 1.1, high: t.currentPrice || t.currentPrice || t.finalPrice * 1.1 }
        ]
      };
      renderTrackerStats(t, mockData);
      renderTrackerChart(t, mockData);
      return;
    }

    renderTrackerStats(t, data);
    renderTrackerChart(t, data);
  } catch (err) {
    statsDiv.innerHTML = `<div class="stat-card" style="grid-column: span 4;color:#DC2626">연동 실패 백업 모드 실행 중</div>`;
  }
}

function renderTrackerStats(t, data) {
  const firstDayRet = calcReturn(t.finalPrice, data.firstDay.close);
  const currentRet = calcReturn(t.finalPrice, data.current.price);
  const peakRet = calcReturn(t.finalPrice, data.peak.price);

  el('tracker-stats').innerHTML = `
    <div class="stat-card">
      <span class="stat-label">확정 공모가</span>
      <span class="stat-value">${fmt.won(t.finalPrice)}</span>
      <span class="stat-sub">상장일자 ${t.listingDate}</span>
    </div>
    <div class="stat-card">
      <span class="stat-label">상장 당일 종가</span>
      <span class="stat-value">${fmt.won(data.firstDay.close)}</span>
      <span class="stat-sub ${firstDayRet >= 0 ? 'positive' : 'negative'}">수익률: ${fmt.rate(firstDayRet)}</span>
    </div>
    <div class="stat-card">
      <span class="stat-label">현재 실시간 주가</span>
      <span class="stat-value">${fmt.won(data.current.price)}</span>
      <span class="stat-sub ${currentRet >= 0 ? 'positive' : 'negative'}">수익률: ${fmt.rate(currentRet)}<br>(${data.current.date} 기준)</span>
    </div>
    <div class="stat-card peak">
      <span class="stat-label">🏆 역대 최고가</span>
      <span class="stat-value">${fmt.won(data.peak.price)}</span>
      <span class="stat-sub" style="color:rgba(255,255,255,0.85);">최적 매도시 최고 수익률: <strong style="color:#ffffff">${fmt.rate(peakRet)}</strong></span>
    </div>
  `;
}

function renderTrackerChart(t, data) {
  const chartCard = el('tracker-chart-card');
  if (chartCard) chartCard.style.display = 'block';

  const labels = data.daily.map(d => d.date);
  const closes = data.daily.map(d => d.close);
  const peakIdx = data.daily.findIndex(d => d.date === data.peak.date);

  el('tracker-chart-title').textContent = `${t.name} 상장 후 일별 실시간 주가 차트 흐름 트렌드`;

  const ctx = el('tracker-chart');
  if (chartInstances.tracker) chartInstances.tracker.destroy();

  const finalPriceLine = data.daily.map(() => t.finalPrice);

  chartInstances.tracker = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: '당일 마감 종가',
          data: closes,
          borderColor: '#2563EB',
          backgroundColor: 'rgba(37,99,235,0.06)',
          borderWidth: 2.5,
          tension: 0.2,
          fill: true,
          pointRadius: closes.map((_, i) => i === peakIdx ? 8 : 3),
          pointBackgroundColor: closes.map((_, i) => i === peakIdx ? '#EA580C' : '#2563EB'),
        },
        {
          label: '기준 공모가',
          data: finalPriceLine,
          borderColor: '#94A3B8',
          borderWidth: 1.5,
          borderDash: [6, 4],
          pointRadius: 0,
          fill: false,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { ticks: { callback: v => fmt.num(v) } }
      }
    }
  });
}

let historySortKey = 'listingDate';
let historySortDir = 'desc';

function renderHistory() {
  renderHistoryTable();
  if (isApiAvailable()) loadHistoryLivePrices();
}

async function loadHistoryLivePrices() {
  const today = new Date(); today.setHours(0,0,0,0);
  const listed = IPOS.filter(i => i.status === 'listed' && i.code && i.listingDate && new Date(i.listingDate) <= today);
  if (!listed.length) return;

  // 모든 상장 종목에 대해 상세 차트 데이터(API)를 개별 호출하여 완벽하게 동기화합니다.
  await Promise.all(listed.map(async (ipo) => {
    try {
      const url = `${_BASE}/api/price?code=${ipo.code}&since=${ipo.listingDate}`;
      const res = await fetch(url);
      const data = await res.json();

      if (!data.error) {
        // API의 실제 데이터로 100% 덮어쓰기 (공모가 제외)
        if (data.firstDay && data.firstDay.close) {
          ipo.firstDayClose = data.firstDay.close;
        }
        if (data.peak && data.peak.price) {
          ipo.allTimeHigh = data.peak.price;
          ipo.allTimeHighDate = data.peak.date;
        }
        if (data.current && data.current.price) {
          ipo.currentPrice = data.current.price;
        }
      }
    } catch (e) {
      console.error(`${ipo.name} 실시간 동기화 실패:`, e);
    }
  }));

  // 데이터 동기화 완료 후 테이블 다시 그리기
  renderHistoryTable();   
  try { renderPerformanceSummary(); } catch(e) {}
}

function renderHistoryTable() {
  const today = new Date(); today.setHours(0,0,0,0);
  const listed = IPOS.filter(i => i.status === 'listed' && i.finalPrice && i.listingDate && new Date(i.listingDate) <= today);
  
  const tbody = document.querySelector('#history-table tbody');
  if (!tbody) return;

  if (!listed.length) {
    tbody.innerHTML = '<tr><td colspan="10" class="text-center" style="padding:40px;">상장 완료된 이력 데이터가 로드되지 않았습니다.</td></tr>';
    return;
  }
  
  listed.sort((a, b) => {
    const av = a[historySortKey], bv = b[historySortKey];
    if (av == null) return 1;
    if (bv == null) return -1;
    return historySortDir === 'desc' ? (av > bv ? -1 : 1) : (av > bv ? 1 : -1);
  });

  tbody.innerHTML = listed.map(i => {
    const finalP = i.finalPrice || 0;
    const firstP = i.firstDayClose || finalP;
    const peakP  = i.allTimeHigh || firstP;
    const curP   = i.currentPrice || firstP;

    const firstRet   = calcReturn(finalP, firstP);
    const peakRet    = calcReturn(finalP, peakP);
    const currentRet = calcReturn(finalP, curP);
    
    const firstCls   = firstRet >= 0 ? 'positive' : 'negative';
    const peakCls    = peakRet >= 0 ? 'positive' : 'negative';
    const currentCls = currentRet >= 0 ? 'positive' : 'negative';
    
    const timingText = getOptimalExitStrategy(i);

    return `
      <tr>
        <td><strong>${i.name}</strong><br><small style="color:#64748B">${i.code||'-'}</small></td>
        <td>${i.listingDate || '-'}</td>
        <td><span class="badge badge-sector">${i.sector || '기타'}</span></td>
        <td style="font-size:12px; max-width:140px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${(i.securities || []).join(', ')}</td>
        <td class="text-center" style="font-size:13px;">${i.competitionRate ? fmt.comp(i.competitionRate) : '-'}</td>
        <td class="text-right">${fmt.won(i.finalPrice)}</td>
        
        <td class="text-right">
            <div>${fmt.won(firstP)}</div>
            <div class="${firstCls}"><strong>${fmt.rate(firstRet)}</strong></div>
        </td>
        
        <td class="text-right" style="background-color:rgba(22,163,74,0.04)">
            <div>${fmt.won(peakP)}</div>
            <div class="${peakCls}"><strong>${fmt.rate(peakRet)}</strong></div>
        </td>
        
        <td class="text-right">
            <div style="font-weight:700">${fmt.won(curP)}</div>
            <div class="${currentCls}"><strong>${fmt.rate(currentRet)}</strong></div>
        </td>

        <td class="text-center"><span class="badge badge-exit-timing">${timingText}</span></td>
      </tr>
    `;
  }).join('');
}

function renderAccount() {
  const list = el('account-list');
  if (!list) return;
  list.innerHTML = BROKERS.map(b => {
    return `
      <div class="account-card">
        <div class="account-info">
          <div class="account-icon" style="background: ${b.color}15; color: ${b.color}">💳</div>
          <div class="account-text">
            <h3>${b.broker} ${b.priority === 'high' ? '<span class="badge badge-hot">HOT</span>' : ''}</h3>
            <p>${b.event}</p>
            <div class="account-meta">
              <span>⏱️ 마감기한: ${b.deadline}</span>
              <span>개설조건: ${b.condition}</span>
            </div>
          </div>
        </div>
        <div class="account-action">
          <div class="account-benefit">${b.benefit}</div>
          <a href="${b.link}" target="_blank" class="account-btn">비대면 계좌개설 가기</a>
        </div>
      </div>
    `;
  }).join('');
}

let currentCalcIpo = null;

function openCalcModal(ipoId) {
  const ipo = IPOS.find(i => String(i.id) === String(ipoId));
  if (!ipo) return;
  currentCalcIpo = ipo;

  const modal = el('calc-modal');
  if (!modal) return;

  el('calc-modal-title').textContent = ipo.name + ' 청약 수량 예측 시뮬레이터';
  el('calc-modal-sub').textContent = `공모청약 기일: ${ipo.subscribeStart} ~ ${ipo.subscribeEnd} | 상장예정일: ${ipo.listingDate || '미정'}`;

  const priceStatus = el('mc-price-status');
  if (ipo.finalPrice) {
    priceStatus.style.display = 'inline-flex';
  } else {
    priceStatus.style.display = 'none';
  }

  const price = ipo.finalPrice || ipo.priceRange?.[1] || 10000;
  el('mc-price').value  = price;

  const similar = IPOS.filter(i => i.sector === ipo.sector && i.id !== ipo.id && i.competitionRate)
                      .sort((a,b) => new Date(b.subscribeStart) - new Date(a.subscribeStart))[0];
  
  const compWrap = el('mc-similar-comp-wrap');
  if (similar) {
    compWrap.innerHTML = `<button type="button" class="calc-quick-btn highlight" onclick="applyComp(${similar.competitionRate})">💡 유사 종목: ${similar.name} (${Math.round(similar.competitionRate)}:1)</button>`;
  } else {
    compWrap.innerHTML = '';
  }

  el('mc-comp').value   = iposCompetition(ipo);
  el('mc-deposit').value = ipo.minDeposit || (price * 10 * 0.5);
  el('mc-sell').value   = price * 2;

  modal.style.display = 'block';
  calcIPO();
}

window.applyComp = function(val) {
  el('mc-comp').value = Math.round(val);
  calcIPO();
};

window.applyMinDeposit = function() {
  if (!currentCalcIpo) return;
  const price = Number(el('mc-price').value) || 0;
  const minD = currentCalcIpo.minDeposit || (price * 10 * 0.5);
  el('mc-deposit').value = minD;
  calcIPO();
};

window.applySellMult = function(mult) {
  const price = Number(el('mc-price').value) || 0;
  el('mc-sell').value = price * mult;
  calcIPO();
};

window.applyNextDayLimit = function() {
  const price = Number(el('mc-price').value) || 0;
  const nextDayMax = Math.floor((price * 4) * 1.3);
  el('mc-sell').value = nextDayMax;
  calcIPO();
};

function iposCompetition(ipo) {
  if (ipo.competitionRate) return ipo.competitionRate;
  if (ipo.sector === 'SPAC') return 800;
  return 1200;
}

function closeCalcModal() { el('calc-modal').style.display = 'none'; }

function calcIPO() {
  const price   = Number(el('mc-price').value) || 0;
  const comp    = Number(el('mc-comp').value)  || 1;
  const deposit = Number(el('mc-deposit').value) || 0;
  const sell    = Number(el('mc-sell').value)  || 0;

  const resultBox = el('calc-result-box');
  if (!price) { resultBox.style.display = 'none'; return; }

  const equalMin = price * 10 * 0.5;
  const propShares = deposit > 0 ? Math.floor((deposit / (price * 0.5)) / comp) : 0;
  const equalProfit = sell > 0 ? (sell - price) * 1 : 0;
  const propProfit = sell > 0 ? (sell - price) * propShares : 0;

  el('cr-equal-deposit').textContent = fmt.won(equalMin);
  el('cr-prop-shares').textContent   = deposit > 0 ? `약 ${propShares}주 예상` : '0주';
  el('cr-equal-profit').textContent  = sell > 0 ? fmt.won(equalProfit) : '0원';
  el('cr-prop-profit').textContent   = sell > 0 && propShares > 0 ? fmt.won(propProfit) : '0원';

  el('cr-note').textContent = `* 비례배정 추정치는 주관사의 청약 한도 등 거래 증거금 정산 비율에 따라 최종 확정치와 차이가 발생할 수 있습니다.`;
  resultBox.style.display = 'block';
}

window.openCalcModal  = openCalcModal;
window.closeCalcModal = closeCalcModal;
window.calcIPO        = calcIPO;

document.addEventListener('DOMContentLoaded', () => {
  loadData();
  const modal = el('calc-modal');
  if (modal) {
    modal.addEventListener('click', e => { if (e.target === modal) closeCalcModal(); });
  }
});
