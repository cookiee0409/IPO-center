// ============================================
// app.js (데이터 보호 및 실시간 동기화 안정화 버전)
// ============================================

const IPOS_DATA = [
  // ... 기존 데이터 유지 (데이터는 그대로 두세요)
  { "id": 9, "name": "마키나락스", "code": "477850", "status": "listed", "subscribeStart": "2026-05-11", "subscribeEnd": "2026-05-12", "listingDate": "2026-05-20", "refundDate": "2026-05-14", "priceRange": [12500, 15000], "finalPrice": 15000, "securities": ["미래에셋증권", "현대차증권"], "minDeposit": 75000, "totalShares": null, "sector": "IT/SW", "competitionRate": 2807.8, "lockup": 78.2, "equalShares": null, "firstDayClose": 60000, "allTimeHigh": 60000, "allTimeHighDate": "2026-05-20", "currentPrice": 60000 },
  // ... (다른 종목들도 기존 입력값 그대로 유지하세요)
];

// 히스토리 데이터를 안전하게 불러오는 함수
async function loadHistoryLivePrices() {
  const today = new Date(); 
  today.setHours(0,0,0,0);
  
  const listed = IPOS_DATA.filter(i => i.status === 'listed' && i.code && i.listingDate && new Date(i.listingDate) <= today);
  if (!listed.length) return;

  await Promise.all(listed.map(async (ipo) => {
    // 1. 이미 데이터가 입력되어 있으면 API를 호출하지 않음 (데이터 보호)
    if (ipo.firstDayClose && ipo.allTimeHigh && ipo.currentPrice) return;

    try {
      const url = `/api/price?code=${ipo.code}&since=${ipo.listingDate}`;
      const res = await fetch(url);
      const data = await res.json();

      if (!data.error && data.current) {
        // 2. 수동 입력값이 없는 경우에만 API 값으로 채워 넣음
        if (!ipo.firstDayClose && data.firstDay?.close) ipo.firstDayClose = data.firstDay.close;
        if (!ipo.allTimeHigh && data.peak?.price) {
          ipo.allTimeHigh = data.peak.price;
          ipo.allTimeHighDate = data.peak.date;
        }
        if (!ipo.currentPrice && data.current?.price) ipo.currentPrice = data.current.price;
      }
    } catch (e) {
      console.error(`${ipo.name} 동기화 생략`);
    }
  }));

  renderHistoryTable();
}

// 나머지 함수들은 기존 코드 그대로 사용하시면 됩니다...
