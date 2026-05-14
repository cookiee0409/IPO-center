// ============================================
// 데이터 (새 공모주는 여기에 직접 추가하세요)
// status: "upcoming"(예정) | "subscribing"(청약중) | "listed"(상장완료)
// ============================================
const IPOS_DATA = [
  {
    "id": 1,
    "name": "빅웨이브로보틱스",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-06-18",
    "subscribeEnd": "2026-06-19",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 2,
    "name": "스트라드비젼",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-06-17",
    "subscribeEnd": "2026-06-18",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 3,
    "name": "져스텍",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-06-11",
    "subscribeEnd": "2026-06-12",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 4,
    "name": "레몬헬스케어",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-06-09",
    "subscribeEnd": "2026-06-10",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 5,
    "name": "메리츠스팩2호",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-06-09",
    "subscribeEnd": "2026-06-10",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 6,
    "name": "매드업",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-06-01",
    "subscribeEnd": "2026-06-02",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 7,
    "name": "피스피스스튜디오",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-05-26",
    "subscribeEnd": "2026-05-27",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 8,
    "name": "대신밸런스스팩20호",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-05-22",
    "subscribeEnd": "2026-05-26",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 9,
    "name": "마키나락스",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-05-11",
    "subscribeEnd": "2026-05-12",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 10,
    "name": "폴레드",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-05-04",
    "subscribeEnd": "2026-05-06",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 11,
    "name": "코스모로보틱스",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-04-27",
    "subscribeEnd": "2026-04-28",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 12,
    "name": "채비",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-04-20",
    "subscribeEnd": "2026-04-21",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 13,
    "name": "신한스팩18호",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-04-20",
    "subscribeEnd": "2026-04-21",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 14,
    "name": "키움히어로스팩2호",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-04-14",
    "subscribeEnd": "2026-04-15",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 15,
    "name": "인벤테라",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-03-23",
    "subscribeEnd": "2026-03-24",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 16,
    "name": "교보스팩20호",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-03-23",
    "subscribeEnd": "2026-03-24",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 17,
    "name": "리센스메디컬",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-03-19",
    "subscribeEnd": "2026-03-20",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 18,
    "name": "신한스팩17호",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-03-19",
    "subscribeEnd": "2026-03-20",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 19,
    "name": "NH스팩33호",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-03-17",
    "subscribeEnd": "2026-03-18",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 20,
    "name": "메쥬",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-03-16",
    "subscribeEnd": "2026-03-17",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 21,
    "name": "한패스",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-03-16",
    "subscribeEnd": "2026-03-17",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 22,
    "name": "아이엠바이오로직스",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-03-11",
    "subscribeEnd": "2026-03-12",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 23,
    "name": "카나프테라퓨틱스",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-03-05",
    "subscribeEnd": "2026-03-06",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 24,
    "name": "액스비스",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-02-23",
    "subscribeEnd": "2026-02-24",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 25,
    "name": "에스팀",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-02-23",
    "subscribeEnd": "2026-02-24",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 26,
    "name": "케이뱅크",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-02-20",
    "subscribeEnd": "2026-02-23",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 27,
    "name": "덕양에너젠",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-01-20",
    "subscribeEnd": "2026-01-21",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 28,
    "name": "삼성스팩13호",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2026-01-12",
    "subscribeEnd": "2026-01-13",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 29,
    "name": "세미파이브",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2025-12-18",
    "subscribeEnd": "2025-12-19",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  },
  {
    "id": 30,
    "name": "리브스메드",
    "code": "",
    "status": "upcoming",
    "subscribeStart": "2025-12-15",
    "subscribeEnd": "2025-12-16",
    "listingDate": null,
    "priceRange": [
      null,
      null
    ],
    "finalPrice": null,
    "securities": [],
    "minDeposit": null,
    "totalShares": null,
    "sector": "",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "manual"
  }
];

const BROKERS_DATA = [];

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
// 끝 슬래시 자동 제거 (사용자가 슬래시 붙여도 안전하게)
const _BASE = VERCEL_URL.replace(/\/$/, '');
const API_BASE = _BASE ? `${_BASE}/api/price` : '/api/price';
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

  // 자동 수집 제거 - 데이터는 IPOS_DATA에서 관리
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
  // VERCEL_URL이 설정돼 있으면 GitHub Pages 포함 모든 환경에서 API 사용
  return VERCEL_URL !== '';
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
// 대시보드 뷰 토글
// ============================================
function switchDashboardView(view) {
  const tableView = document.getElementById('dashboard-table-view');
  const cardView = document.getElementById('dashboard-card-view');
  const tableBtn = document.getElementById('view-table-btn');
  const cardBtn = document.getElementById('view-card-btn');

  if (view === 'card') {
    tableView.style.display = 'none';
    cardView.style.display = 'block';
    cardBtn.classList.add('active');
    tableBtn.classList.remove('active');
  } else {
    tableView.style.display = 'block';
    cardView.style.display = 'none';
    tableBtn.classList.add('active');
    cardBtn.classList.remove('active');
  }
}
window.switchDashboardView = switchDashboardView;

function renderDashboardCards(activeIPOs) {
  const container = document.getElementById('dashboard-card-view');
  if (!container) return;

  if (!activeIPOs.length) {
    container.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text-tertiary)">진행 중인 공모주가 없습니다.</div>';
    return;
  }

  container.innerHTML = `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;padding:8px 0">${
    activeIPOs.map(ipo => {
      let priceText;
      if (ipo.finalPrice) priceText = fmt.won(ipo.finalPrice);
      else if (ipo.priceRange?.[0] && ipo.priceRange?.[1]) priceText = `${fmt.num(ipo.priceRange[0])}~${fmt.num(ipo.priceRange[1])}`;
      else priceText = '미정';

      const isHot = ipo.competitionRate && ipo.competitionRate >= 1500;
      const statusLabel = ipo.status === 'subscribing' ? '청약중' : '예정';
      const statusColor = ipo.status === 'subscribing' ? '#10b981' : '#3b82f6';

      return `
        <div class="ipo-mini-card" style="background:white;border-radius:12px;padding:16px;box-shadow:var(--shadow-sm);border-left:4px solid ${statusColor}">
          <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px">
            <strong style="font-size:14px;color:var(--text-primary)">${ipo.name}</strong>
            ${isHot ? '<span class="badge badge-hot" style="font-size:10px">🔥</span>' : ''}
          </div>
          <div style="font-size:11px;color:${statusColor};font-weight:600;margin-bottom:8px">${statusLabel}</div>
          <div style="display:flex;flex-direction:column;gap:4px;font-size:12px">
            <div style="display:flex;justify-content:space-between"><span style="color:var(--text-tertiary)">청약일</span><span>${fmt.dotDate(ipo.subscribeStart)}-${fmt.dotDate(ipo.subscribeEnd)}</span></div>
            <div style="display:flex;justify-content:space-between"><span style="color:var(--text-tertiary)">상장일</span><span>${fmt.dotDate(ipo.listingDate) || '-'}</span></div>
            <div style="display:flex;justify-content:space-between"><span style="color:var(--text-tertiary)">공모가</span><span style="font-weight:600">${priceText}</span></div>
            <div style="display:flex;justify-content:space-between"><span style="color:var(--text-tertiary)">주관사</span><span style="font-size:11px">${ipo.securities?.[0] || '-'}</span></div>
          </div>
        </div>
      `;
    }).join('')
  }</div>`;
}

// ============================================
// 1. 대시보드
// ============================================
function renderDashboard() {
  // 청약 일정 테이블 (청약중 + 예정만)
  const today = new Date(); today.setHours(0,0,0,0);
  const activeIPOs = IPOS.filter(i => {
    if (i.status === 'listed' || !i.subscribeStart) return false;
    const end = i.subscribeEnd ? new Date(i.subscribeEnd) : new Date(i.subscribeStart);
    return end >= today;  // 오늘 이후 청약만
  }).sort((a, b) => (a.subscribeStart || '').localeCompare(b.subscribeStart || ''));

  const tbody = document.querySelector('#dashboard-ipo-table tbody');
  tbody.innerHTML = activeIPOs.map(ipo => {
    let priceText;
    if (ipo.finalPrice) {
      priceText = fmt.won(ipo.finalPrice) + ' <span style="color:var(--accent-success);font-size:11px">확정</span>';
    } else if (ipo.priceRange?.[0] && ipo.priceRange?.[1]) {
      priceText = `${fmt.num(ipo.priceRange[0])}~${fmt.num(ipo.priceRange[1])}원 <span style="color:var(--text-tertiary);font-size:11px">희망</span>`;
    } else {
      priceText = '미정';
    }
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

  // 카드 뷰도 렌더링
  renderDashboardCards(activeIPOs);

  // 최근 상장주 (상장된 종목 중 최고가 수익률 top)
  const listedIPOs = IPOS.filter(i => i.status === 'listed' && i.firstDayClose && i.finalPrice)
    .map(i => ({
      ...i,
      peakReturn: calcReturn(i.finalPrice, i.firstDayClose),  // 첫날 종가 기준
    }))
    .sort((a, b) => new Date(b.listingDate || 0) - new Date(a.listingDate || 0))
    .slice(0, 5);

  const recentDiv = document.getElementById('dashboard-recent');
  if (!listedIPOs.length) {
    recentDiv.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-tertiary);font-size:12px">데이터 불러오는 중...</div>';
  } else {
    recentDiv.innerHTML = listedIPOs.map(i => {
      const ret = i.peakReturn || 0;
      const cls = ret >= 0 ? 'positive' : 'negative';
      const sign = ret >= 0 ? '▲' : '▼';
      return `
        <div class="recent-item">
          <div class="recent-info">
            <span class="recent-name">${i.name}</span>
            <span class="recent-date">${i.listingDate || '-'}</span>
          </div>
          <span class="recent-return ${cls}">${sign} ${Math.abs(ret).toFixed(1)}%</span>
        </div>
      `;
    }).join('');
  }
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
  const today = new Date(); today.setHours(0,0,0,0);
  let filtered = IPOS.filter(i => {
    if (i.status === 'listed') return false;
    if (!i.subscribeStart) return false;
    // 상태 재계산 (오늘 기준)
    const end = i.subscribeEnd ? new Date(i.subscribeEnd) : new Date(i.subscribeStart);
    const start = new Date(i.subscribeStart);
    let realStatus;
    if (today > end) realStatus = 'past';
    else if (today >= start) realStatus = 'subscribing';
    else realStatus = 'upcoming';

    if (calendarFilter === 'all') return true;
    return realStatus === calendarFilter;
  });
  // past는 최신순, 나머지는 오래된 순
  filtered.sort((a, b) => {
    if (calendarFilter === 'past') {
      return (b.subscribeStart || '').localeCompare(a.subscribeStart || '');
    }
    return (a.subscribeStart || '').localeCompare(b.subscribeStart || '');
  });

  const container = document.getElementById('calendar-cards');
  container.innerHTML = filtered.map(ipo => {
    const statusBadge = ipo.status === 'subscribing'
      ? '<span class="badge badge-status-sub">청약중</span>'
      : '<span class="badge badge-status-upcoming">예정</span>';

    let priceText;
    if (ipo.finalPrice) {
      priceText = fmt.won(ipo.finalPrice) + ' <span style="color:var(--accent-success);font-size:11px">확정</span>';
    } else if (ipo.priceRange?.[0] && ipo.priceRange?.[1]) {
      priceText = `${fmt.num(ipo.priceRange[0])}~${fmt.num(ipo.priceRange[1])}원 <span style="color:var(--text-tertiary);font-size:11px">희망</span>`;
    } else {
      priceText = '미정';
    }

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
  const listedIPOs = IPOS.filter(i => i.status === 'listed' && i.firstDayClose)
    .sort((a, b) => new Date(b.listingDate) - new Date(a.listingDate));

  const tabsDiv = document.getElementById('tracker-tabs');
  const statsDiv = document.getElementById('tracker-stats');
  const returnsDiv = document.getElementById('tracker-returns');

  if (!listedIPOs.length) {
    tabsDiv.innerHTML = '';
    statsDiv.innerHTML = `<div class="stat-card" style="grid-column: span 4; text-align:center; padding: 40px; color: var(--text-tertiary);">상장 완료된 공모주 데이터를 불러오는 중입니다...</div>`;
    if (returnsDiv) returnsDiv.innerHTML = '';
    return;
  }

  trackerSelected = listedIPOs[0];

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

  // 종목코드가 있을 때만 실시간 주가 조회 (38.co.kr 데이터엔 종목코드 없음)
  const hasCode = t.code && t.code.length >= 6;
  let livePrice = null, history = [];
  if (hasCode && isApiAvailable()) {
    [livePrice, history] = await Promise.all([
      fetchCurrentPrice(t.code),
      fetchPriceHistory(t.code, 30)
    ]);
  }

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
      <span class="stat-sub">상장일 ${t.listingDate || '-'}</span>
    </div>
    <div class="stat-card peak">
      <span class="stat-label">역대 최고가</span>
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
  const listed = IPOS.filter(i => i.status === 'listed' && i.finalPrice);
  if (!listed.length) {
    document.querySelector('#history-table tbody').innerHTML =
      '<tr><td colspan="11" style="text-align:center;padding:40px;color:var(--text-tertiary)">상장 완료된 공모주 데이터를 불러오는 중입니다...</td></tr>';
    return;
  }
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
  // 38.co.kr 데이터엔 섹터 없음 → 임시 안내
  const hasSectorData = IPOS.some(i => i.status === 'listed' && i.sector);
  if (!hasSectorData) {
    const cardsDiv = document.getElementById('sector-cards');
    if (cardsDiv) {
      cardsDiv.innerHTML = '<div style="grid-column:span 3;text-align:center;padding:40px;background:white;border-radius:12px;color:var(--text-tertiary)">섹터별 분석은 종목별 섹터 정보가 필요합니다.<br>향후 종목별 섹터 매핑 기능이 추가될 예정입니다.</div>';
    }
    return;
  }
  // 섹터별 집계
  const sectorMap = {};
  IPOS.filter(i => i.status === 'listed' && i.sector).forEach(i => {
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
      <button class="admin-tab-btn active" onclick="showAdminTab('ai',this)">🤖 AI 자동 입력</button>
      <button class="admin-tab-btn" onclick="showAdminTab('brokers',this)">증권사 이벤트</button>
      <button class="admin-tab-btn" onclick="showAdminTab('ipos',this)">공모주 수정</button>
      <button class="admin-tab-btn" onclick="showAdminTab('reset',this)">초기화</button>
    </div>
    <div id="admin-tab-ai">${renderAIAdmin()}</div>
    <div id="admin-tab-brokers" style="display:none">${renderBrokersAdmin()}</div>
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
        <span style="font-size:12px;color:#6B7280">${ipo.source === '38' ? '📡 자동수집' : '✍️ 수동'}</span>
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
    i.source === 'manual' || i.source === '38' ||
    !IPOS_DATA.some(d => d.id === i.id &&
      d.status === i.status && d.finalPrice === i.finalPrice)
  );
  localStorage.setItem('ipo_manual', JSON.stringify(manualOrModified));
}

// ============================================
// AI 자동 입력 (스크린샷 → JSON)
// ============================================
function renderAIAdmin() {
  return `
    <div style="padding:8px">
      <div style="background:#EFF6FF;border-left:4px solid #4A8AC9;border-radius:8px;padding:14px;margin-bottom:20px">
        <p style="font-size:13px;color:#1E3A5F;margin:0;line-height:1.6">
          📸 <strong>공모주 스크린샷을 올리고 추가 메모를 입력하면 AI가 정보를 자동으로 추출합니다.</strong><br>
          38커뮤니케이션, 증권사 페이지, 뉴스 기사 등 어떤 형식이든 OK!
        </p>
      </div>

      <div class="form-group">
        <label style="font-size:13px;color:#374151;font-weight:600;margin-bottom:8px;display:block">
          📷 스크린샷 업로드
        </label>
        <div id="ai-drop-zone" style="border:2px dashed #CBD5E1;border-radius:12px;padding:32px;
          text-align:center;cursor:pointer;background:#F8FAFC;transition:all 0.2s"
          onclick="document.getElementById('ai-image-input').click()"
          ondragover="event.preventDefault();this.style.borderColor='#4A8AC9';this.style.background='#EFF6FF'"
          ondragleave="this.style.borderColor='#CBD5E1';this.style.background='#F8FAFC'"
          ondrop="handleImageDrop(event)">
          <div id="ai-drop-content">
            <div style="font-size:32px;margin-bottom:8px">📷</div>
            <p style="font-size:13px;color:#64748B;margin:0">
              이미지를 드래그하거나 <span style="color:#4A8AC9;font-weight:600">클릭해서 선택</span>하세요
            </p>
          </div>
          <img id="ai-image-preview" style="display:none;max-width:100%;max-height:300px;border-radius:8px"/>
        </div>
        <input type="file" id="ai-image-input" accept="image/*" style="display:none"
               onchange="handleImageSelect(event)">
      </div>

      <div class="form-group">
        <label style="font-size:13px;color:#374151;font-weight:600;margin-bottom:8px;display:block">
          📝 추가 메모 (선택사항)
        </label>
        <textarea id="ai-memo" rows="3" class="admin-input"
          placeholder="예: 이미지에 없는 추가 정보, 정정해야 할 부분, 섹터 분류 힌트 등"></textarea>
      </div>

      <button onclick="parseWithAI()" id="ai-parse-btn" class="admin-save-btn"
              style="width:100%;padding:14px;font-size:14px;margin-top:8px">
        ✨ AI로 분석하기
      </button>

      <div id="ai-result" style="margin-top:24px;display:none"></div>
    </div>
  `;
}

// 이미지 변수
let pendingImage = null;

function handleImageDrop(e) {
  e.preventDefault();
  e.stopPropagation();
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) loadImageToPreview(file);
}

function handleImageSelect(e) {
  const file = e.target.files[0];
  if (file) loadImageToPreview(file);
}

function loadImageToPreview(file) {
  const reader = new FileReader();
  reader.onload = e => {
    pendingImage = e.target.result;
    const preview = document.getElementById('ai-image-preview');
    const content = document.getElementById('ai-drop-content');
    preview.src = pendingImage;
    preview.style.display = 'block';
    content.style.display = 'none';
  };
  reader.readAsDataURL(file);
}

async function parseWithAI() {
  const memo = document.getElementById('ai-memo').value.trim();
  const btn = document.getElementById('ai-parse-btn');
  const resultDiv = document.getElementById('ai-result');

  if (!pendingImage && !memo) {
    alert('이미지나 메모 중 하나는 입력해주세요.');
    return;
  }

  btn.disabled = true;
  btn.innerHTML = '🤔 AI가 분석 중... (10~20초 소요)';
  resultDiv.style.display = 'none';

  try {
    const PARSE_API_BASE = _BASE ? `${_BASE}/api/parse` : '/api/parse';
    const res = await fetch(PARSE_API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: pendingImage, text: memo })
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'AI 분석 실패');
    }

    showAIResult(data.data);
  } catch (err) {
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `<div style="background:#FEF2F2;border:1px solid #FECACA;
      border-radius:8px;padding:12px;color:#991B1B">
      ❌ 오류: ${err.message}
    </div>`;
  } finally {
    btn.disabled = false;
    btn.innerHTML = '✨ AI로 분석하기';
  }
}

function showAIResult(parsed) {
  const resultDiv = document.getElementById('ai-result');

  // 미리보기 + 수정 가능한 폼
  const fields = [
    ['name', '종목명'], ['code', '종목코드'],
    ['subscribeStart', '청약 시작일'], ['subscribeEnd', '청약 종료일'],
    ['listingDate', '상장일'],
    ['priceLow', '희망공모가 하단'], ['priceHigh', '희망공모가 상단'],
    ['finalPrice', '확정 공모가'],
    ['securities', '주관사'], ['sector', '섹터'],
    ['minDeposit', '최소 증거금'], ['totalShares', '총 공모주식수'],
    ['competitionRate', '경쟁률'], ['lockup', '의무보유확약 (%)'],
    ['equalShares', '균등배정 (주)'],
    ['firstDayClose', '상장 첫날 종가'],
    ['allTimeHigh', '역대 최고가'], ['allTimeHighDate', '최고가 달성일'],
    ['currentPrice', '현재 주가']
  ];

  const getVal = (key) => {
    if (key === 'priceLow') return parsed.priceRange?.[0] ?? '';
    if (key === 'priceHigh') return parsed.priceRange?.[1] ?? '';
    if (key === 'securities') return (parsed.securities || []).join(', ');
    return parsed[key] ?? '';
  };

  const inputs = fields.map(([key, label]) => `
    <div>
      <label style="font-size:11px;color:#6B7280">${label}</label>
      <input class="admin-input" id="ai_field_${key}" value="${getVal(key)}">
    </div>
  `).join('');

  resultDiv.style.display = 'block';
  resultDiv.innerHTML = `
    <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:8px;padding:12px;margin-bottom:16px">
      <p style="font-size:13px;color:#166534;margin:0">
        ✅ AI 분석 완료! 아래 내용을 확인하고 수정한 뒤 저장하세요.
      </p>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;background:#F8FAFC;
      border-radius:12px;padding:16px;margin-bottom:16px">
      ${inputs}
    </div>

    <button onclick="saveAIParsedIPO()" class="admin-save-btn"
            style="width:100%;padding:12px;font-size:14px">
      💾 공모주 데이터에 저장
    </button>
  `;
}

function saveAIParsedIPO() {
  const get = (key) => {
    const el = document.getElementById(`ai_field_${key}`);
    return el ? el.value.trim() : '';
  };
  const getNum = (key) => {
    const v = get(key);
    return v ? Number(v.replace(/,/g, '')) : null;
  };

  const name = get('name');
  if (!name) { alert('종목명은 필수입니다.'); return; }

  const pLow = getNum('priceLow');
  const pHigh = getNum('priceHigh');
  const finalPrice = getNum('finalPrice');
  const secs = get('securities').split(',').map(s => s.trim()).filter(Boolean);

  const newIPO = {
    id: `ai_${Date.now()}`,
    name,
    code: get('code'),
    status: 'upcoming',  // 날짜 기준 자동 재계산
    subscribeStart: get('subscribeStart') || null,
    subscribeEnd: get('subscribeEnd') || null,
    listingDate: get('listingDate') || null,
    priceRange: [pLow, pHigh],
    finalPrice,
    securities: secs,
    minDeposit: getNum('minDeposit') || (pHigh ? pHigh * 10 * 0.5 : null),
    totalShares: getNum('totalShares'),
    sector: get('sector') || '',
    competitionRate: getNum('competitionRate'),
    lockup: getNum('lockup'),
    equalShares: getNum('equalShares'),
    firstDayClose: getNum('firstDayClose'),
    allTimeHigh: getNum('allTimeHigh'),
    allTimeHighDate: get('allTimeHighDate') || null,
    currentPrice: getNum('currentPrice'),
    source: 'ai',
  };

  // 같은 이름 있으면 교체, 없으면 추가
  const idx = IPOS.findIndex(i => i.name === name);
  if (idx >= 0) IPOS[idx] = newIPO;
  else IPOS.push(newIPO);

  saveManualIPOs();
  renderDashboard();
  renderCalendar();
  renderHistory();
  renderSector();
  showToast(`✅ ${name} 정보가 저장되었습니다.`, 'success');

  // 초기화
  pendingImage = null;
  document.getElementById('admin-modal').style.display = 'none';
}

// 전역 등록
window.handleImageDrop = handleImageDrop;
window.handleImageSelect = handleImageSelect;
window.parseWithAI = parseWithAI;
window.saveAIParsedIPO = saveAIParsedIPO;

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
