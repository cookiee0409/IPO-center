// ============================================
// 데이터 (새 공모주는 여기에 직접 추가하세요)
// status: "upcoming"(예정) | "subscribing"(청약중) | "listed"(상장완료)
// ============================================
const IPOS_DATA = [
  {
    "id": 1,
    "name": "빅웨이브로보틱스",
    "code": "0035S0",
    "status": "upcoming",
    "subscribeStart": "2026-06-18",
    "subscribeEnd": "2026-06-19",
    "listingDate": null,
    "refundDate": "2026-06-23",
    "priceRange": [
      22000,
      27000
    ],
    "finalPrice": null,
    "securities": [
      "미래에셋증권",
      "유진투자증권"
    ],
    "minDeposit": 135000,
    "totalShares": null,
    "sector": "IT/SW",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 2,
    "name": "스트라드비젼",
    "code": "475040",
    "status": "upcoming",
    "subscribeStart": "2026-06-17",
    "subscribeEnd": "2026-06-18",
    "listingDate": null,
    "refundDate": "2026-06-22",
    "priceRange": [
      12400,
      14800
    ],
    "finalPrice": null,
    "securities": [
      "KB증권"
    ],
    "minDeposit": 74000,
    "totalShares": null,
    "sector": "IT/SW",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 3,
    "name": "져스텍",
    "code": "153890",
    "status": "upcoming",
    "subscribeStart": "2026-06-11",
    "subscribeEnd": "2026-06-12",
    "listingDate": null,
    "refundDate": "2026-06-16",
    "priceRange": [
      10500,
      12500
    ],
    "finalPrice": null,
    "securities": [
      "삼성증권"
    ],
    "minDeposit": 62500,
    "totalShares": null,
    "sector": "제조",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 4,
    "name": "레몬헬스케어",
    "code": "365660",
    "status": "upcoming",
    "subscribeStart": "2026-06-09",
    "subscribeEnd": "2026-06-10",
    "listingDate": null,
    "refundDate": "2026-06-12",
    "priceRange": [
      7500,
      10000
    ],
    "finalPrice": null,
    "securities": [
      "KB증권"
    ],
    "minDeposit": 50000,
    "totalShares": null,
    "sector": "IT/SW",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 5,
    "name": "메리츠스팩2호",
    "code": "0165X0",
    "status": "upcoming",
    "subscribeStart": "2026-06-09",
    "subscribeEnd": "2026-06-10",
    "listingDate": null,
    "refundDate": "2026-06-12",
    "priceRange": [
      2000,
      2000
    ],
    "finalPrice": null,
    "securities": [
      "메리츠증권"
    ],
    "minDeposit": 10000,
    "totalShares": null,
    "sector": "SPAC",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 6,
    "name": "매드업",
    "code": "0039P0",
    "status": "upcoming",
    "subscribeStart": "2026-06-01",
    "subscribeEnd": "2026-06-02",
    "listingDate": null,
    "refundDate": "2026-06-05",
    "priceRange": [
      7000,
      8000
    ],
    "finalPrice": null,
    "securities": [
      "미래에셋증권"
    ],
    "minDeposit": 40000,
    "totalShares": null,
    "sector": "IT/SW",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 7,
    "name": "피스피스스튜디오",
    "code": "0117P0",
    "status": "upcoming",
    "subscribeStart": "2026-05-26",
    "subscribeEnd": "2026-05-27",
    "listingDate": null,
    "refundDate": "2026-05-29",
    "priceRange": [
      19000,
      21500
    ],
    "finalPrice": null,
    "securities": [
      "NH투자증권",
      "미래에셋증권"
    ],
    "minDeposit": 107500,
    "totalShares": null,
    "sector": "소비재",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 8,
    "name": "대신밸런스스팩20호",
    "code": "0134X0",
    "status": "upcoming",
    "subscribeStart": "2026-05-22",
    "subscribeEnd": "2026-05-26",
    "listingDate": null,
    "refundDate": "2026-05-28",
    "priceRange": [
      2000,
      2000
    ],
    "finalPrice": null,
    "securities": [
      "대신증권"
    ],
    "minDeposit": 10000,
    "totalShares": null,
    "sector": "SPAC",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 9,
    "name": "마키나락스",
    "code": "477850",
    "status": "listed",
    "subscribeStart": "2026-05-11",
    "subscribeEnd": "2026-05-12",
    "listingDate": "2026-05-20",
    "refundDate": "2026-05-14",
    "priceRange": [
      12500,
      15000
    ],
    "finalPrice": 15000,
    "securities": [
      "미래에셋증권",
      "현대차증권"
    ],
    "minDeposit": 75000,
    "totalShares": null,
    "sector": "IT/SW",
    "competitionRate": 2807.8,
    "lockup": 78.2,
    "equalShares": null,
    "firstDayClose": null,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 10,
    "name": "폴레드",
    "code": "487580",
    "status": "listed",
    "subscribeStart": "2026-05-04",
    "subscribeEnd": "2026-05-06",
    "listingDate": "2026-05-14",
    "refundDate": "2026-05-08",
    "priceRange": [
      4100,
      5000
    ],
    "finalPrice": 5000,
    "securities": [
      "NH투자증권"
    ],
    "minDeposit": 25000,
    "totalShares": 2600000,
    "sector": "소비재",
    "competitionRate": 1486.66,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": 20000,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 11,
    "name": "코스모로보틱스",
    "code": "439960",
    "status": "listed",
    "subscribeStart": "2026-04-27",
    "subscribeEnd": "2026-04-28",
    "listingDate": "2026-05-11",
    "refundDate": "2026-04-30",
    "priceRange": [
      5300,
      6000
    ],
    "finalPrice": 6000,
    "securities": [
      "유진투자증권",
      "NH투자증권",
      "유안타증권"
    ],
    "minDeposit": 30000,
    "totalShares": 4170000,
    "sector": "바이오",
    "competitionRate": 2013.8,
    "lockup": 74.48,
    "equalShares": null,
    "firstDayClose": 24000,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 12,
    "name": "채비",
    "code": "0011T0",
    "status": "listed",
    "subscribeStart": "2026-04-20",
    "subscribeEnd": "2026-04-21",
    "listingDate": "2026-04-29",
    "refundDate": "2026-04-23",
    "priceRange": [
      12300,
      15300
    ],
    "finalPrice": 12300,
    "securities": [
      "KB증권",
      "삼성증권",
      "대신증권",
      "하나증권"
    ],
    "minDeposit": 61500,
    "totalShares": null,
    "sector": "에너지",
    "competitionRate": 302.0,
    "lockup": 6.49,
    "equalShares": null,
    "firstDayClose": 27400,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 13,
    "name": "신한스팩18호",
    "code": "0129K0",
    "status": "listed",
    "subscribeStart": "2026-04-20",
    "subscribeEnd": "2026-04-21",
    "listingDate": "2026-04-30",
    "refundDate": "2026-04-23",
    "priceRange": [
      2000,
      2000
    ],
    "finalPrice": 2000,
    "securities": [
      "신한투자증권"
    ],
    "minDeposit": 10000,
    "totalShares": null,
    "sector": "SPAC",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": 5900,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 14,
    "name": "키움히어로스팩2호",
    "code": "0131D0",
    "status": "listed",
    "subscribeStart": "2026-04-14",
    "subscribeEnd": "2026-04-15",
    "listingDate": "2026-04-23",
    "refundDate": "2026-04-17",
    "priceRange": [
      2000,
      2000
    ],
    "finalPrice": 2000,
    "securities": [
      "키움증권"
    ],
    "minDeposit": 10000,
    "totalShares": null,
    "sector": "SPAC",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": 2000,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 15,
    "name": "인벤테라",
    "code": "0007J0",
    "status": "listed",
    "subscribeStart": "2026-03-23",
    "subscribeEnd": "2026-03-24",
    "listingDate": "2026-04-02",
    "refundDate": "2026-03-26",
    "priceRange": [
      12100,
      16600
    ],
    "finalPrice": 16600,
    "securities": [
      "NH투자증권",
      "유진투자증권"
    ],
    "minDeposit": 83000,
    "totalShares": null,
    "sector": "바이오",
    "competitionRate": 1913.44,
    "lockup": 50.0,
    "equalShares": null,
    "firstDayClose": 38500,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 16,
    "name": "교보스팩20호",
    "code": "0132G0",
    "status": "listed",
    "subscribeStart": "2026-03-23",
    "subscribeEnd": "2026-03-24",
    "listingDate": "2026-04-02",
    "refundDate": "2026-03-26",
    "priceRange": [
      2000,
      2000
    ],
    "finalPrice": 2000,
    "securities": [
      "교보증권"
    ],
    "minDeposit": 10000,
    "totalShares": null,
    "sector": "SPAC",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": 3300,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 17,
    "name": "리센스메디컬",
    "code": "394420",
    "status": "listed",
    "subscribeStart": "2026-03-19",
    "subscribeEnd": "2026-03-20",
    "listingDate": "2026-03-31",
    "refundDate": "2026-03-24",
    "priceRange": [
      9000,
      11000
    ],
    "finalPrice": 11000,
    "securities": [
      "KB증권",
      "한국투자증권"
    ],
    "minDeposit": 55000,
    "totalShares": null,
    "sector": "바이오",
    "competitionRate": 2097.68,
    "lockup": 63.9,
    "equalShares": null,
    "firstDayClose": 35850,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 18,
    "name": "신한스팩17호",
    "code": "0130D0",
    "status": "listed",
    "subscribeStart": "2026-03-19",
    "subscribeEnd": "2026-03-20",
    "listingDate": "2026-04-01",
    "refundDate": "2026-03-24",
    "priceRange": [
      2000,
      2000
    ],
    "finalPrice": 2000,
    "securities": [
      "신한투자증권"
    ],
    "minDeposit": 10000,
    "totalShares": null,
    "sector": "SPAC",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": 3550,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 19,
    "name": "NH스팩33호",
    "code": "0130H0",
    "status": "listed",
    "subscribeStart": "2026-03-17",
    "subscribeEnd": "2026-03-18",
    "listingDate": "2026-03-27",
    "refundDate": "2026-03-20",
    "priceRange": [
      2000,
      2000
    ],
    "finalPrice": 2000,
    "securities": [
      "NH투자증권"
    ],
    "minDeposit": 10000,
    "totalShares": null,
    "sector": "SPAC",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": 3800,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 20,
    "name": "메쥬",
    "code": "0088M0",
    "status": "listed",
    "subscribeStart": "2026-03-16",
    "subscribeEnd": "2026-03-17",
    "listingDate": "2026-03-26",
    "refundDate": "2026-03-19",
    "priceRange": [
      16700,
      21600
    ],
    "finalPrice": 21600,
    "securities": [
      "미래에셋증권"
    ],
    "minDeposit": 108000,
    "totalShares": null,
    "sector": "바이오",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": 48900,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 21,
    "name": "한패스",
    "code": "408470",
    "status": "listed",
    "subscribeStart": "2026-03-16",
    "subscribeEnd": "2026-03-17",
    "listingDate": "2026-03-25",
    "refundDate": "2026-03-19",
    "priceRange": [
      17000,
      19000
    ],
    "finalPrice": 19000,
    "securities": [
      "대신증권"
    ],
    "minDeposit": 95000,
    "totalShares": null,
    "sector": "금융",
    "competitionRate": 1172.59,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": 55300,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 22,
    "name": "아이엠바이오로직스",
    "code": "493280",
    "status": "listed",
    "subscribeStart": "2026-03-11",
    "subscribeEnd": "2026-03-12",
    "listingDate": "2026-03-20",
    "refundDate": "2026-03-16",
    "priceRange": [
      19000,
      26000
    ],
    "finalPrice": 26000,
    "securities": [
      "한국투자증권",
      "신한투자증권"
    ],
    "minDeposit": 130000,
    "totalShares": null,
    "sector": "바이오",
    "competitionRate": 1806.0,
    "lockup": 76.0,
    "equalShares": null,
    "firstDayClose": 104000,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 23,
    "name": "카나프테라퓨틱스",
    "code": "0082N0",
    "status": "listed",
    "subscribeStart": "2026-03-05",
    "subscribeEnd": "2026-03-06",
    "listingDate": "2026-03-16",
    "refundDate": "2026-03-10",
    "priceRange": [
      16000,
      20000
    ],
    "finalPrice": 20000,
    "securities": [
      "한국투자증권"
    ],
    "minDeposit": 100000,
    "totalShares": null,
    "sector": "바이오",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": 24700,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 24,
    "name": "액스비스",
    "code": "0011A0",
    "status": "listed",
    "subscribeStart": "2026-02-23",
    "subscribeEnd": "2026-02-24",
    "listingDate": "2026-03-09",
    "refundDate": "2026-02-26",
    "priceRange": [
      10100,
      11500
    ],
    "finalPrice": 11500,
    "securities": [
      "미래에셋증권"
    ],
    "minDeposit": 57500,
    "totalShares": null,
    "sector": "제조",
    "competitionRate": 1124.21,
    "lockup": 75.7,
    "equalShares": null,
    "firstDayClose": 29200,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 25,
    "name": "에스팀",
    "code": "458350",
    "status": "listed",
    "subscribeStart": "2026-02-23",
    "subscribeEnd": "2026-02-24",
    "listingDate": "2026-03-06",
    "refundDate": "2026-02-26",
    "priceRange": [
      7000,
      8500
    ],
    "finalPrice": 8500,
    "securities": [
      "한국투자증권"
    ],
    "minDeposit": 42500,
    "totalShares": null,
    "sector": "소비재",
    "competitionRate": 1334.91,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": 22100,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 26,
    "name": "케이뱅크",
    "code": "279570",
    "status": "listed",
    "subscribeStart": "2026-02-20",
    "subscribeEnd": "2026-02-23",
    "listingDate": "2026-03-05",
    "refundDate": "2026-02-25",
    "priceRange": [
      8300,
      9500
    ],
    "finalPrice": 8300,
    "securities": [
      "NH투자증권",
      "삼성증권",
      "신한투자증권"
    ],
    "minDeposit": 41500,
    "totalShares": null,
    "sector": "금융",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": 11550,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 27,
    "name": "덕양에너젠",
    "code": "0001A0",
    "status": "listed",
    "subscribeStart": "2026-01-20",
    "subscribeEnd": "2026-01-21",
    "listingDate": "2026-01-30",
    "refundDate": "2026-01-23",
    "priceRange": [
      8500,
      10000
    ],
    "finalPrice": 10000,
    "securities": [
      "NH투자증권",
      "미래에셋증권"
    ],
    "minDeposit": 50000,
    "totalShares": null,
    "sector": "에너지",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": 22000,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 28,
    "name": "삼성스팩13호",
    "code": "0115H0",
    "status": "listed",
    "subscribeStart": "2026-01-12",
    "subscribeEnd": "2026-01-13",
    "listingDate": "2026-01-21",
    "refundDate": "2026-01-15",
    "priceRange": [
      2000,
      2000
    ],
    "finalPrice": 2000,
    "securities": [
      "삼성증권"
    ],
    "minDeposit": 10000,
    "totalShares": null,
    "sector": "SPAC",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": 3300,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 29,
    "name": "세미파이브",
    "code": "490470",
    "status": "listed",
    "subscribeStart": "2025-12-18",
    "subscribeEnd": "2025-12-19",
    "listingDate": "2025-12-29",
    "refundDate": "2025-12-22",
    "priceRange": [
      21000,
      24000
    ],
    "finalPrice": 21000,
    "securities": [
      "삼성증권"
    ],
    "minDeposit": 120000,
    "totalShares": null,
    "sector": "반도체",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": 45000,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
  },
  {
    "id": 30,
    "name": "리브스메드",
    "code": "491000",
    "status": "listed",
    "subscribeStart": "2025-12-15",
    "subscribeEnd": "2025-12-16",
    "listingDate": "2025-12-24",
    "refundDate": "2025-12-18",
    "priceRange": [
      44000,
      55000
    ],
    "finalPrice": 44000,
    "securities": [
      "삼성증권",
      "미래에셋증권"
    ],
    "minDeposit": 275000,
    "totalShares": null,
    "sector": "바이오",
    "competitionRate": null,
    "lockup": null,
    "equalShares": null,
    "firstDayClose": 90000,
    "allTimeHigh": null,
    "allTimeHighDate": null,
    "currentPrice": null,
    "source": "38_initial"
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
// 우선순위: IPOS_DATA(내장) → localStorage 추가/수정
// 단, localStorage에 같은 이름이 있어도 source가 'ai' 또는 'manual'일 때만 덮어쓰기
function applyLocalOverrides() {
  try {
    const savedBrokers = localStorage.getItem('ipo_brokers');
    if (savedBrokers) {
      const arr = JSON.parse(savedBrokers);
      if (Array.isArray(arr) && arr.length > 0) BROKERS = arr;
    }

    const savedIPOs = localStorage.getItem('ipo_manual');
    if (savedIPOs) {
      const manual = JSON.parse(savedIPOs);
      if (!Array.isArray(manual)) return;
      manual.forEach(m => {
        // source가 사용자 입력일 때만 처리
        if (m.source !== 'ai' && m.source !== 'manual') return;

        // 같은 이름 있으면 업데이트, 없으면 신규 추가
        const idx = IPOS.findIndex(i => i.name === m.name);
        if (idx >= 0) IPOS[idx] = m;
        else IPOS.push(m);
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
  renderHome();
  renderToday();
  renderCalendar();
  renderPerformance();
  renderAccount();

  // 탭 전환
  const navItems = document.querySelectorAll('.nav-item');
  const tabPanels = document.querySelectorAll('.tab-panel');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(n => n.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      item.classList.add('active');
      const tabId = 'tab-' + item.dataset.tab;
      document.getElementById(tabId)?.classList.add('active');
      // 성과 탭 진입 시 트래커 로드
      if (item.dataset.tab === 'performance') renderTracker();
    });
  });

  // 관리자 버튼
  const adminBtn = document.getElementById('admin-btn');
  if (adminBtn) adminBtn.addEventListener('click', openAdminModal);
}

function switchTab(tabName) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  const btn = document.querySelector(`.nav-item[data-tab="${tabName}"]`);
  if (btn) btn.classList.add('active');
  document.getElementById('tab-' + tabName)?.classList.add('active');
  if (tabName === 'performance') renderTracker();
}
window.switchTab = switchTab;

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
// 홈 탭
// ============================================
function renderHome() {
  const today = new Date(); today.setHours(0,0,0,0);
  const thisMonth = today.toISOString().slice(0,7);
  const nextWeek = new Date(today); nextWeek.setDate(today.getDate() + 7);

  // 요약 통계
  const subscribing = IPOS.filter(i => i.status === 'subscribing').length;
  const upcoming    = IPOS.filter(i => i.status === 'upcoming').length;
  const listingThis = IPOS.filter(i => i.listingDate?.startsWith(thisMonth)).length;
  const comps = IPOS.filter(i => i.competitionRate);
  const avgComp = comps.length ? comps.reduce((s,i) => s + i.competitionRate, 0) / comps.length : 0;

  el('home-subscribing').textContent = subscribing + '건';
  el('home-upcoming').textContent    = upcoming + '건';
  el('home-listing').textContent     = listingThis + '건';
  el('home-avg-comp').textContent    = avgComp > 0 ? Math.round(avgComp).toLocaleString() + ':1' : '-';

  // 오늘 날짜
  const dateEl = el('home-today-date');
  if (dateEl) dateEl.textContent = today.toLocaleDateString('ko-KR', { year:'numeric', month:'long', day:'numeric', weekday:'short' });

  // 이번 주 청약
  const weekIPOs = IPOS.filter(i => {
    if (!i.subscribeStart) return false;
    const s = new Date(i.subscribeStart);
    const e = i.subscribeEnd ? new Date(i.subscribeEnd) : s;
    return e >= today && s <= nextWeek;
  }).sort((a,b) => (a.subscribeStart||'').localeCompare(b.subscribeStart||''));

  const weekDiv = el('home-this-week');
  if (weekDiv) {
    if (!weekIPOs.length) {
      weekDiv.innerHTML = '<div style="padding:20px;color:var(--text-tertiary);font-size:13px">이번 주 청약 일정이 없습니다.</div>';
    } else {
      weekDiv.innerHTML = weekIPOs.map(ipo => ipoMiniCard(ipo)).join('');
    }
  }

  // 최근 상장주 성과
  const perfIPOs = IPOS.filter(i => i.status === 'listed' && i.finalPrice)
    .sort((a,b) => new Date(b.listingDate||0) - new Date(a.listingDate||0))
    .slice(0, 5);

  const perfDiv = el('home-recent-perf');
  if (perfDiv) {
    if (!perfIPOs.length) {
      perfDiv.innerHTML = '<div style="padding:20px;color:var(--text-tertiary);font-size:13px">데이터 없음</div>';
    } else {
      perfDiv.innerHTML = perfIPOs.map(i => {
        const ret = calcReturn(i.finalPrice, i.firstDayClose || i.currentPrice);
        const cls = ret != null ? (ret >= 0 ? 'positive' : 'negative') : '';
        return `
          <div class="perf-row" onclick="switchTab('performance')" style="cursor:pointer">
            <div class="perf-row-left">
              <span class="perf-name">${i.name}</span>
              <span class="perf-date">${i.listingDate || '-'} 상장</span>
            </div>
            <div class="perf-row-right">
              <span class="perf-price">${fmt.won(i.firstDayClose || i.currentPrice)}</span>
              <span class="perf-ret ${cls}">${ret != null ? fmt.rate(ret) : '-'}</span>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 증권사 이벤트
  const brokersDiv = el('home-brokers');
  if (brokersDiv) {
    brokersDiv.innerHTML = BROKERS.slice(0, 4).map(b => `
      <div class="broker-card">
        <div class="broker-name" style="color:${b.color}">${b.broker}</div>
        <div class="broker-benefit">계좌 개설시<br><strong>${b.benefit}</strong></div>
        <a href="${b.link}" target="_blank" class="broker-btn">개설하기 ›</a>
      </div>
    `).join('') || '<div style="padding:20px;color:var(--text-tertiary);font-size:13px">등록된 이벤트가 없습니다.</div>';
  }
}

// ============================================
// 오늘의 공모주 탭
// ============================================
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
    grid.innerHTML = '<div style="padding:60px;text-align:center;color:var(--text-tertiary)">현재 청약 예정인 공모주가 없습니다.</div>';
    return;
  }

  grid.innerHTML = activeIPOs.map(ipo => ipoFullCard(ipo)).join('');
}

// ── 카드 렌더러 ──
function ipoMiniCard(ipo) {
  const today = new Date(); today.setHours(0,0,0,0);
  const s = new Date(ipo.subscribeStart);
  const dday = Math.ceil((s - today) / 86400000);
  const ddayText = dday < 0 ? '청약중' : dday === 0 ? 'D-day' : `D-${dday}`;
  const ddayColor = dday <= 0 ? '#ef4444' : dday <= 3 ? '#f59e0b' : '#4A8AC9';

  const price = ipo.finalPrice ? fmt.won(ipo.finalPrice) + ' (확정)'
    : (ipo.priceRange?.[0] ? `${fmt.num(ipo.priceRange[0])}~${fmt.num(ipo.priceRange[1])}원` : '미정');

  return `
    <div class="ipo-mini-card" onclick="openCalcModal('${ipo.id}')" style="cursor:pointer">
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:10px">
        <strong style="font-size:14px;color:var(--text-primary);line-height:1.3">${ipo.name}</strong>
        <span style="font-size:12px;font-weight:700;color:${ddayColor};flex-shrink:0;margin-left:8px">${ddayText}</span>
      </div>
      <div style="font-size:12px;color:var(--text-secondary);display:flex;flex-direction:column;gap:4px">
        <div style="display:flex;justify-content:space-between">
          <span style="color:var(--text-tertiary)">공모가</span>
          <span style="font-weight:600">${price}</span>
        </div>
        <div style="display:flex;justify-content:space-between">
          <span style="color:var(--text-tertiary)">청약일</span>
          <span>${fmt.dotDate(ipo.subscribeStart)}~${fmt.dotDate(ipo.subscribeEnd)}</span>
        </div>
        <div style="display:flex;justify-content:space-between">
          <span style="color:var(--text-tertiary)">주관사</span>
          <span style="font-size:11px">${(ipo.securities||[]).join(', ')||'-'}</span>
        </div>
      </div>
      <div style="margin-top:10px;padding-top:8px;border-top:1px solid #F1F5F9;font-size:11px;color:#4A8AC9;text-align:right">
        탭하여 계산하기 →
      </div>
    </div>
  `;
}

function ipoFullCard(ipo) {
  const today = new Date(); today.setHours(0,0,0,0);
  const s = new Date(ipo.subscribeStart);
  const e = ipo.subscribeEnd ? new Date(ipo.subscribeEnd) : s;
  const dday = Math.ceil((s - today) / 86400000);
  const isActive = today >= s && today <= e;
  const ddayText = isActive ? '청약중' : dday === 0 ? 'D-day' : `D-${dday}`;
  const ddayColor = isActive ? '#10b981' : dday <= 3 ? '#f59e0b' : '#4A8AC9';
  const borderColor = isActive ? '#10b981' : '#4A8AC9';

  const price = ipo.finalPrice ? fmt.won(ipo.finalPrice) + ' <small style="color:#10b981">확정</small>'
    : (ipo.priceRange?.[0] ? `${fmt.num(ipo.priceRange[0])}~${fmt.num(ipo.priceRange[1])}원 <small style="color:#9CA3AF">희망</small>` : '<small style="color:#9CA3AF">미정</small>');

  const isHot = ipo.competitionRate && ipo.competitionRate >= 1500;

  return `
    <div class="ipo-full-card" style="border-top:3px solid ${borderColor}">
      <div class="ipo-full-header">
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <h3 style="font-size:17px;font-weight:700;color:var(--text-primary)">${ipo.name}</h3>
            ${isHot ? '<span class="badge badge-hot">🔥 고경쟁</span>' : ''}
            ${ipo.sector ? `<span class="badge badge-sector">${ipo.sector}</span>` : ''}
          </div>
          <div style="font-size:13px;color:var(--text-tertiary)">${(ipo.securities||[]).join(' · ')||'주관사 미확인'}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-size:20px;font-weight:800;color:${ddayColor}">${ddayText}</div>
          <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px">${fmt.dotDate(ipo.subscribeStart)}</div>
        </div>
      </div>

      <div class="ipo-full-info">
        <div class="ipo-info-item">
          <span class="ipo-info-label">공모가</span>
          <span class="ipo-info-value">${price}</span>
        </div>
        <div class="ipo-info-item">
          <span class="ipo-info-label">청약일</span>
          <span class="ipo-info-value">${fmt.dotDate(ipo.subscribeStart)} ~ ${fmt.dotDate(ipo.subscribeEnd)}</span>
        </div>
        <div class="ipo-info-item">
          <span class="ipo-info-label">환불일</span>
          <span class="ipo-info-value">${fmt.dotDate(ipo.refundDate) || calcRefundDate(ipo.subscribeEnd)}</span>
        </div>
        <div class="ipo-info-item">
          <span class="ipo-info-label">상장일</span>
          <span class="ipo-info-value">${fmt.dotDate(ipo.listingDate) || '-'}</span>
        </div>
        <div class="ipo-info-item">
          <span class="ipo-info-label">최소증거금</span>
          <span class="ipo-info-value">${fmt.won(ipo.minDeposit) || '-'}</span>
        </div>
        <div class="ipo-info-item">
          <span class="ipo-info-label">경쟁률</span>
          <span class="ipo-info-value">${ipo.competitionRate ? ipo.competitionRate.toLocaleString() + ':1' : '-'}</span>
        </div>
      </div>

      <button onclick="openCalcModal('${ipo.id}')" class="ipo-calc-btn">
        균등·비례 계산하기 →
      </button>
    </div>
  `;
}

// ============================================
// 1. 대시보드 (하위 호환용 - 더 이상 쓰지 않음)
// ============================================
function renderDashboard() { renderHome(); renderToday(); }


// ============================================
// 2. 캘린더 탭
// ============================================
let calendarFilter = 'all';
let calendarYear  = new Date().getFullYear();
let calendarMonth = new Date().getMonth();  // 0-indexed

function renderCalendar() {
  renderCalGrid();
  setupCalListFilters();
  renderCalendarCards();
}

function renderCalGrid() {
  const monthTitle = el('cal-month-title');
  if (monthTitle) monthTitle.textContent = `${calendarYear}년 ${calendarMonth + 1}월`;

  const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  const today = new Date(); today.setHours(0,0,0,0);

  // 이 달 이벤트 수집
  const monthStr = `${calendarYear}-${String(calendarMonth+1).padStart(2,'0')}`;
  const events = {};  // { 'YYYY-MM-DD': [{type, name}] }

  IPOS.forEach(ipo => {
    // 청약 기간
    if (ipo.subscribeStart?.startsWith(monthStr)) {
      const start = ipo.subscribeStart;
      const end   = ipo.subscribeEnd || start;
      // 청약 기간 전체 표시
      let d = new Date(start);
      while (d <= new Date(end)) {
        const ds = d.toISOString().slice(0,10);
        if (ds.startsWith(monthStr)) {
          if (!events[ds]) events[ds] = [];
          const today2 = new Date(); today2.setHours(0,0,0,0);
          const type = today2 >= new Date(start) && today2 <= new Date(end) ? 'subscribing' : 'upcoming';
          if (!events[ds].find(e => e.name === ipo.name))
            events[ds].push({ type, name: ipo.name });
        }
        d.setDate(d.getDate() + 1);
      }
    }
    // 상장일
    if (ipo.listingDate?.startsWith(monthStr)) {
      if (!events[ipo.listingDate]) events[ipo.listingDate] = [];
      events[ipo.listingDate].push({ type: 'listing', name: ipo.name + ' 상장' });
    }
  });

  // 달력 렌더링
  const body = el('cal-body');
  if (!body) return;

  let html = '';
  // 빈 셀 (첫 주 앞부분)
  for (let i = 0; i < firstDay; i++) html += '<div class="cal-cell empty"></div>';

  for (let d = 1; d <= daysInMonth; d++) {
    const ds = `${calendarYear}-${String(calendarMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isToday = ds === today.toISOString().slice(0,10);
    const dayEvents = events[ds] || [];
    const isWeekend = (new Date(ds).getDay() === 0 || new Date(ds).getDay() === 6);

    html += `<div class="cal-cell${isToday?' today':''}${isWeekend?' weekend':''}">
      <span class="cal-day-num">${d}</span>
      <div class="cal-events">
        ${dayEvents.slice(0,2).map(e => `<div class="cal-event ${e.type}" title="${e.name}">${e.name.length > 6 ? e.name.slice(0,5)+'…' : e.name}</div>`).join('')}
        ${dayEvents.length > 2 ? `<div class="cal-event-more">+${dayEvents.length - 2}건</div>` : ''}
      </div>
    </div>`;
  }

  body.innerHTML = html;

  // 이전/다음 버튼
  const prevBtn = el('cal-prev');
  const nextBtn = el('cal-next');
  if (prevBtn) prevBtn.onclick = () => {
    calendarMonth--;
    if (calendarMonth < 0) { calendarMonth = 11; calendarYear--; }
    renderCalGrid();
  };
  if (nextBtn) nextBtn.onclick = () => {
    calendarMonth++;
    if (calendarMonth > 11) { calendarMonth = 0; calendarYear++; }
    renderCalGrid();
  };
}

function setupCalListFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      calendarFilter = btn.dataset.filter;
      renderCalendarCards();
    });
  });
}

function renderCalendarCards() {
  const today = new Date(); today.setHours(0,0,0,0);
  let filtered = IPOS.filter(i => {
    if (i.status === 'listed') return false;
    if (!i.subscribeStart) return false;
    const end = i.subscribeEnd ? new Date(i.subscribeEnd) : new Date(i.subscribeStart);
    const start = new Date(i.subscribeStart);
    let realStatus;
    if (today > end) realStatus = 'past';
    else if (today >= start) realStatus = 'subscribing';
    else realStatus = 'upcoming';
    if (calendarFilter === 'all') return true;
    return realStatus === calendarFilter;
  });

  filtered.sort((a, b) => {
    if (calendarFilter === 'past')
      return (b.subscribeStart||'').localeCompare(a.subscribeStart||'');
    return (a.subscribeStart||'').localeCompare(b.subscribeStart||'');
  });

  const container = el('calendar-cards');
  if (!container) return;
  container.innerHTML = filtered.map(ipo => {
    const today2 = new Date(); today2.setHours(0,0,0,0);
    const s = new Date(ipo.subscribeStart);
    const e = ipo.subscribeEnd ? new Date(ipo.subscribeEnd) : s;
    const isPast = today2 > e;
    const isActive = !isPast && today2 >= s;

    const badge = isPast
      ? '<span class="badge badge-status-past">종료</span>'
      : isActive
        ? '<span class="badge badge-status-sub">청약중</span>'
        : '<span class="badge badge-status-upcoming">예정</span>';

    const price = ipo.finalPrice
      ? fmt.won(ipo.finalPrice) + ' <span style="color:var(--accent-success);font-size:11px">확정</span>'
      : (ipo.priceRange?.[0] ? `${fmt.num(ipo.priceRange[0])}~${fmt.num(ipo.priceRange[1])}원 <span style="color:var(--text-tertiary);font-size:11px">희망</span>` : '미정');

    return `
      <div class="ipo-card">
        <div class="ipo-card-header">
          <div class="ipo-card-title">
            <span class="ipo-card-name">${ipo.name}</span>
            ${badge}
            ${ipo.sector ? `<span class="badge badge-sector">${ipo.sector}</span>` : ''}
          </div>
        </div>
        <div class="ipo-card-grid">
          <div class="ipo-info-item"><span class="ipo-info-label">청약일</span><span class="ipo-info-value">${fmt.dotDate(ipo.subscribeStart)} ~ ${fmt.dotDate(ipo.subscribeEnd)}</span></div>
          <div class="ipo-info-item"><span class="ipo-info-label">상장일</span><span class="ipo-info-value highlight">${fmt.dotDate(ipo.listingDate) || '-'}</span></div>
          <div class="ipo-info-item"><span class="ipo-info-label">공모가</span><span class="ipo-info-value">${price}</span></div>
          <div class="ipo-info-item"><span class="ipo-info-label">최소 증거금</span><span class="ipo-info-value">${fmt.won(ipo.minDeposit)}</span></div>
          <div class="ipo-info-item"><span class="ipo-info-label">주관사</span><span class="ipo-info-value">${(ipo.securities||[]).join(', ')||'-'}</span></div>
          ${ipo.competitionRate ? `<div class="ipo-info-item"><span class="ipo-info-label">경쟁률</span><span class="ipo-info-value">${ipo.competitionRate.toLocaleString()}:1</span></div>` : ''}
        </div>
      </div>
    `;
  }).join('') || '<div style="padding:40px;text-align:center;color:var(--text-tertiary)">해당 조건의 공모주가 없습니다.</div>';
}

// ============================================
// 3. 계산기 모달 (카드 탭에서 호출)
// ============================================
function openCalcModal(ipoId) {
  const ipo = IPOS.find(i => String(i.id) === String(ipoId));
  if (!ipo) return;

  const modal = el('calc-modal');
  if (!modal) return;

  el('calc-modal-title').textContent = ipo.name;
  el('calc-modal-sub').textContent =
    `청약일: ${fmt.dotDate(ipo.subscribeStart)} ~ ${fmt.dotDate(ipo.subscribeEnd)}` +
    (ipo.listingDate ? ` · 상장일: ${fmt.dotDate(ipo.listingDate)}` : '');

  // 기본값 채우기
  const price = ipo.finalPrice || ipo.priceRange?.[1] || '';
  el('mc-price').value  = price;
  el('mc-comp').value   = ipo.competitionRate || 1000;
  el('mc-deposit').value = ipo.minDeposit || (price ? price * 10 * 0.5 : '');
  el('mc-sell').value   = price ? price * 2 : '';

  modal.style.display = 'block';
  el('calc-result-box').style.display = 'none';
  calcIPO();
}

function closeCalcModal() {
  const modal = el('calc-modal');
  if (modal) modal.style.display = 'none';
}

function calcIPO() {
  const price   = Number(el('mc-price')?.value) || 0;
  const comp    = Number(el('mc-comp')?.value)  || 1;
  const deposit = Number(el('mc-deposit')?.value) || 0;
  const sell    = Number(el('mc-sell')?.value)  || 0;

  if (!price) { el('calc-result-box').style.display = 'none'; return; }

  // 균등 최소 증거금 (공모가 × 10주 × 50%)
  const equalMin = price * 10 * 0.5;
  // 비례 예상 배정 주수 = 청약금액 / (공모가 × 0.5) / 경쟁률
  const propShares = deposit > 0 ? Math.floor((deposit / (price * 0.5)) / comp) : 0;
  // 균등 배정 수익 (1주 기준, 매도가-공모가)
  const equalProfit = sell > 0 ? (sell - price) * 1 : 0;
  // 비례 배정 수익
  const propProfit = sell > 0 ? (sell - price) * propShares : 0;

  el('cr-equal-deposit').textContent = fmt.won(equalMin);
  el('cr-prop-shares').textContent   = deposit > 0 ? `약 ${propShares}주` : '-';
  el('cr-equal-profit').textContent  = sell > 0 ? fmt.won(equalProfit) : '-';
  el('cr-prop-profit').textContent   = sell > 0 && propShares > 0 ? fmt.won(propProfit) : '-';

  const note = [
    '· 균등 배정: 주관사별 최소 청약 시 1주 내외',
    comp > 0 ? `· 비례 배정: ${fmt.won(deposit)} 청약 기준 (경쟁률 ${comp.toLocaleString()}:1)` : '',
    sell > 0 ? `· 수익은 세금(0.23%) 미공제 추정치` : '',
  ].filter(Boolean).join(' · ');
  el('cr-note').textContent = note;

  el('calc-result-box').style.display = 'block';
}

window.openCalcModal  = openCalcModal;
window.closeCalcModal = closeCalcModal;
window.calcIPO        = calcIPO;

// 모달 배경 클릭 시 닫기
document.addEventListener('DOMContentLoaded', () => {
  const modal = el('calc-modal');
  if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeCalcModal(); });
});


// ============================================
// 4. 최고가 추적 (실시간 주가 연동)
// ============================================
let trackerSelected = null;

function renderTracker() {
  // 상장된 종목 중 종목코드 있는 것 + listingDate 있는 것
  const listedIPOs = IPOS.filter(i => i.status === 'listed' && i.code && i.listingDate)
    .sort((a, b) => new Date(b.listingDate) - new Date(a.listingDate));

  // 종목코드 없는 상장 종목 (입력 안내)
  const codeNeeded = IPOS.filter(i => i.status === 'listed' && !i.code);

  const tabsDiv = document.getElementById('tracker-tabs');
  const statsDiv = document.getElementById('tracker-stats');
  const returnsDiv = document.getElementById('tracker-returns');

  if (!listedIPOs.length) {
    tabsDiv.innerHTML = '';
    if (codeNeeded.length > 0) {
      statsDiv.innerHTML = `
        <div class="stat-card" style="grid-column: span 4; text-align:center; padding: 32px; color: var(--text-tertiary);">
          <div style="font-size:32px;margin-bottom:8px">📊</div>
          <p style="font-weight:600;color:var(--text-primary);margin-bottom:8px">
            최고가 추적을 시작하려면 종목코드가 필요합니다
          </p>
          <p style="font-size:13px;margin-bottom:16px">
            상장된 종목 ${codeNeeded.length}개의 종목코드를 등록해주세요.<br>
            관리자 모드(🔧) → 공모주 수정 탭에서 입력 가능합니다.
          </p>
          <div style="background:#F8FAFC;border-radius:8px;padding:12px;font-size:12px;text-align:left;display:inline-block">
            <strong>대상 종목:</strong><br>
            ${codeNeeded.slice(0, 5).map(i => `· ${i.name}`).join('<br>')}
            ${codeNeeded.length > 5 ? `<br>... 외 ${codeNeeded.length - 5}개` : ''}
          </div>
        </div>`;
    } else {
      statsDiv.innerHTML = `<div class="stat-card" style="grid-column: span 4; text-align:center; padding: 40px; color: var(--text-tertiary);">상장 완료된 공모주가 없습니다.</div>`;
    }
    if (returnsDiv) returnsDiv.innerHTML = '';
    return;
  }

  trackerSelected = listedIPOs[0];

  tabsDiv.innerHTML = listedIPOs.map(i =>
    `<button class="tracker-tab" data-id="${i.id}">${i.name} <span style="opacity:0.6;font-size:10px">${i.code}</span></button>`
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

  const statsDiv = document.getElementById('tracker-stats');
  const returnsDiv = document.getElementById('tracker-returns');

  // 로딩 표시
  statsDiv.innerHTML = `
    <div class="stat-card" style="grid-column: span 4; text-align:center; padding: 32px;">
      <div style="font-size:24px;margin-bottom:8px">📡</div>
      <p style="color:var(--text-tertiary)">${t.name} 일별 시세 분석 중...</p>
    </div>`;
  returnsDiv.innerHTML = '';

  if (!isApiAvailable()) {
    statsDiv.innerHTML = '<div class="stat-card" style="grid-column: span 4">API가 연결되지 않았습니다.</div>';
    return;
  }

  try {
    const url = `${_BASE}/api/price?code=${t.code}&since=${t.listingDate}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.error || !data.daily || !data.daily.length) {
      statsDiv.innerHTML = `<div class="stat-card" style="grid-column: span 4;text-align:center;padding:32px;color:#B91C1C">
        시세 데이터를 가져올 수 없습니다.<br>
        <small style="color:var(--text-tertiary)">종목코드가 정확한지 확인해주세요. (${t.code})</small>
      </div>`;
      return;
    }

    renderTrackerStats(t, data);
    renderTrackerReturns(t, data);
    renderTrackerChart(t, data);
  } catch (err) {
    console.error('트래커 오류:', err);
    statsDiv.innerHTML = `<div class="stat-card" style="grid-column: span 4;color:#B91C1C">오류: ${err.message}</div>`;
  }
}

function renderTrackerStats(t, data) {
  const peakReturn = ((data.peak.price - t.finalPrice) / t.finalPrice * 100);
  const currentReturn = ((data.current.price - t.finalPrice) / t.finalPrice * 100);

  document.getElementById('tracker-stats').innerHTML = `
    <div class="stat-card">
      <span class="stat-label">공모가</span>
      <span class="stat-value">${fmt.won(t.finalPrice)}</span>
      <span class="stat-sub">상장일 ${t.listingDate}</span>
    </div>
    <div class="stat-card peak">
      <span class="stat-label">🏆 역대 최고가</span>
      <span class="stat-value">${fmt.won(data.peak.price)}</span>
      <span class="stat-sub">D+${data.peak.daysAfterListing} (${data.peak.date})</span>
    </div>
    <div class="stat-card">
      <span class="stat-label">현재가</span>
      <span class="stat-value">${fmt.won(data.current.price)}</span>
      <span class="stat-sub">${data.current.date} (D+${data.totalDaysListed})</span>
    </div>
    <div class="stat-card">
      <span class="stat-label">상장 첫날 종가</span>
      <span class="stat-value">${fmt.won(data.firstDay.close)}</span>
      <span class="stat-sub">${data.firstDay.date}</span>
    </div>
  `;
}

function renderTrackerReturns(t, data) {
  const firstDayRet = calcReturn(t.finalPrice, data.firstDay.close);
  const peakRet = calcReturn(t.finalPrice, data.peak.price);
  const currentRet = calcReturn(t.finalPrice, data.current.price);
  const fromPeakRet = ((data.current.price - data.peak.price) / data.peak.price * 100);

  document.getElementById('tracker-returns').innerHTML = `
    <div class="return-card">
      <span class="return-label">상장 첫날 수익률</span>
      <span class="return-value ${firstDayRet >= 0 ? 'positive' : 'negative'}">${fmt.rate(firstDayRet)}</span>
      <span class="return-sub">공모가 → 첫날 종가</span>
    </div>
    <div class="return-card highlight">
      <span class="return-label">🏆 최고점 수익률</span>
      <span class="return-value">${fmt.rate(peakRet)}</span>
      <span class="return-sub">D+${data.peak.daysAfterListing}일에 달성</span>
    </div>
    <div class="return-card">
      <span class="return-label">현재 수익률</span>
      <span class="return-value ${currentRet >= 0 ? 'positive' : 'negative'}">${fmt.rate(currentRet)}</span>
      <span class="return-sub">최고점 대비 ${fromPeakRet >= 0 ? '+' : ''}${fromPeakRet.toFixed(1)}%</span>
    </div>
  `;
}

function renderTrackerChart(t, data) {
  const chartCard = document.getElementById('tracker-chart-card');
  if (chartCard) chartCard.style.display = 'block';

  const labels = data.daily.map((d, i) => `D+${i}`);
  const closes = data.daily.map(d => d.close);
  const highs = data.daily.map(d => d.high);
  const peakIdx = data.daily.findIndex(d => d.date === data.peak.date);

  document.getElementById('tracker-chart-title').textContent =
    `${t.name} 상장 후 일별 주가 추이 (D+0 ~ D+${data.totalDaysListed})`;

  const ctx = document.getElementById('tracker-chart');
  if (chartInstances.tracker) chartInstances.tracker.destroy();

  // 공모가 수평선용
  const finalPriceLine = data.daily.map(() => t.finalPrice);

  chartInstances.tracker = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: '종가',
          data: closes,
          borderColor: '#4A8AC9',
          backgroundColor: 'rgba(74,138,201,0.1)',
          borderWidth: 2,
          tension: 0.3,
          fill: true,
          pointRadius: closes.map((_, i) => i === peakIdx ? 8 : 2),
          pointBackgroundColor: closes.map((_, i) => i === peakIdx ? '#F59E0B' : '#4A8AC9'),
          pointHoverRadius: 6,
        },
        {
          label: '공모가',
          data: finalPriceLine,
          borderColor: '#9CA3AF',
          borderWidth: 1,
          borderDash: [5, 5],
          pointRadius: 0,
          fill: false,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: 'top', align: 'end' },
        tooltip: {
          callbacks: {
            label: c => c.dataset.label === '종가'
              ? `${data.daily[c.dataIndex].date} (D+${c.dataIndex}): ${fmt.won(c.parsed.y)}`
              : `공모가: ${fmt.won(c.parsed.y)}`
          }
        }
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
        <td>${(i.securities || []).join(', ') || '-'}</td>
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
// 6. 성과 탭 (최고가 추적 + 히스토리 통합)
// ============================================
function renderPerformance() {
  renderTracker();
  renderHistory();
}

// renderSector는 이제 사용하지 않음 (성과 탭에 통합)
function renderSector() {}


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
  renderHome(); renderToday(); renderCalendar(); renderPerformance();
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
  renderHome(); renderToday(); renderCalendar();
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
  renderHome(); renderToday(); renderCalendar(); renderPerformance();
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
  renderHome(); renderToday(); renderCalendar(); renderPerformance();
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
