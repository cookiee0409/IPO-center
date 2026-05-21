// ============================================
// 데이터 (새 공모주는 여기에 직접 추가하세요)
// status: "upcoming"(예정) | "subscribing"(청약중) | "listed"(상장완료)
// ============================================
const IPOS_DATA = [
  { "id": 1, "name": "빅웨이브로보틱스", "code": "0035S0", "status": "upcoming", "subscribeStart": "2026-06-18", "subscribeEnd": "2026-06-19", "listingDate": null, "refundDate": "2026-06-23", "priceRange": [22000, 27000], "finalPrice": null, "securities": ["미래에셋증권", "유진투자증권"], "minDeposit": 135000, "totalShares": null, "sector": "IT/SW", "competitionRate": null, "lockup": null, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" },
  { "id": 2, "name": "스트라드비젼", "code": "475040", "status": "upcoming", "subscribeStart": "2026-06-17", "subscribeEnd": "2026-06-18", "listingDate": null, "refundDate": "2026-06-22", "priceRange": [12400, 14000], "finalPrice": null, "securities": ["미래에셋증권"], "minDeposit": 70000, "totalShares": null, "sector": "자동차", "competitionRate": null, "lockup": null, "equalShares": null, "firstDayClose": null, "allTimeHigh": null, "allTimeHighDate": null, "currentPrice": null, "source": "38_initial" }
];

// 실시간 데이터 동기화 함수 (API 우선 모드)
async function loadHistoryLivePrices() {
  const today = new Date(); 
  today.setHours(0,0,0,0);
  
  // 상장 완료된 종목들만 필터링
  const listed = IPOS_DATA.filter(i => i.status === 'listed' && i.code && i.listingDate && new Date(i.listingDate) <= today);
  if (!listed.length) return;

  // 모든 상장 종목에 대해 API 호출
  await Promise.all(listed.map(async (ipo) => {
    try {
      // API 호출: Vercel 서버리스 함수 호출
      const url = `/api/price?code=${ipo.code}&since=${ipo.listingDate}`;
      const res = await fetch(url);
      const data = await res.json();

      if (!data.error && data.items) {
        // API에서 받은 최신 데이터로 객체 업데이트
        const live = data.items[0];
        if (live) {
          ipo.firstDayClose = live.firstDayClose || ipo.firstDayClose;
          ipo.allTimeHigh = live.allTimeHigh || ipo.allTimeHigh;
          ipo.currentPrice = live.currentPrice || ipo.currentPrice;
        }
      }
    } catch (e) {
      console.error(`${ipo.name} 동기화 실패:`, e);
    }
  }));

  // 업데이트 후 화면 갱신
  renderHistoryTable();
  try { renderPerformanceSummary(); } catch(e) {}
}
