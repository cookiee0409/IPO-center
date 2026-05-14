/**
 * Vercel 서버리스 함수 - Claude API로 공모주 정보 추출
 *
 * 요청 형식 (POST):
 *   { image: "data:image/png;base64,...", text: "추가 메모", existing: {...} }
 *
 * 응답 형식:
 *   { success: true, data: { name, subscribeStart, ... } }
 */

const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages';
const MODEL = 'claude-sonnet-4-20250514';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST 요청만 허용됩니다.' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY가 설정되지 않았습니다.' });
  }

  try {
    const { image, text, existing } = req.body || {};

    if (!image && !text) {
      return res.status(400).json({ error: '이미지 또는 텍스트가 필요합니다.' });
    }

    // 메시지 콘텐츠 구성
    const content = [];

    if (image) {
      // data URL에서 base64 부분만 추출
      const match = image.match(/^data:(image\/[a-z]+);base64,(.+)$/);
      if (!match) {
        return res.status(400).json({ error: '이미지 형식이 잘못되었습니다.' });
      }
      content.push({
        type: 'image',
        source: {
          type: 'base64',
          media_type: match[1],
          data: match[2],
        }
      });
    }

    content.push({ type: 'text', text: buildPrompt(text, existing) });

    // Claude API 호출
    const aiRes = await fetch(ANTHROPIC_API, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1500,
        messages: [{ role: 'user', content }],
      }),
    });

    if (!aiRes.ok) {
      const errText = await aiRes.text();
      console.error('Claude API 오류:', aiRes.status, errText);
      return res.status(502).json({ error: `AI 응답 오류 (${aiRes.status})` });
    }

    const aiData = await aiRes.json();
    const responseText = aiData.content?.[0]?.text || '';

    // JSON 추출 (Claude가 ```json...``` 형식으로 감쌀 수 있음)
    const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/) ||
                      responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return res.status(500).json({
        error: 'AI가 JSON 형식으로 응답하지 않았습니다.',
        raw: responseText
      });
    }

    let parsed;
    try {
      parsed = JSON.parse(jsonMatch[1] || jsonMatch[0]);
    } catch (e) {
      return res.status(500).json({
        error: 'JSON 파싱 실패',
        raw: responseText
      });
    }

    return res.status(200).json({ success: true, data: parsed });

  } catch (err) {
    console.error('처리 오류:', err);
    return res.status(500).json({ error: err.message });
  }
}

// ── Claude에게 보낼 프롬프트 ───────────────────────
function buildPrompt(userText, existing) {
  const existingInfo = existing
    ? `\n\n기존에 입력된 정보 (이번에 보완할 부분):\n${JSON.stringify(existing, null, 2)}`
    : '';

  const memo = userText ? `\n\n사용자 메모:\n${userText}` : '';

  return `당신은 한국 공모주 정보를 분석하는 전문 어시스턴트입니다.
${userText ? '제공된 이미지와 메모를' : '제공된 이미지를'} 분석해서 공모주 정보를 추출해주세요.

다음 JSON 형식으로 답변해주세요. 정보가 없는 필드는 null로 두세요.

\`\`\`json
{
  "name": "종목명 (필수)",
  "code": "종목코드 6자리 (있는 경우만, 없으면 \\"\\")",
  "subscribeStart": "YYYY-MM-DD 형식 청약 시작일",
  "subscribeEnd": "YYYY-MM-DD 형식 청약 종료일",
  "listingDate": "YYYY-MM-DD 형식 상장일",
  "priceRange": [희망공모가 하단, 희망공모가 상단],
  "finalPrice": 확정 공모가 (숫자, 미확정이면 null),
  "securities": ["주관사1", "주관사2"],
  "minDeposit": 최소 증거금 (숫자, 보통 공모가 × 10주 × 0.5),
  "totalShares": 총 공모주식수 (숫자),
  "sector": "섹터 (예: 바이오, IT/SW, 반도체, 2차전지, 모빌리티, 로봇, 친환경, 산업기계, 금융 등)",
  "competitionRate": 수요예측 경쟁률 (숫자, 1234.56 형식),
  "lockup": 의무보유확약 비율 (숫자, % 단위 - 25.5 형식),
  "equalShares": 균등배정 1인당 주식수 (숫자),
  "firstDayClose": 상장 첫날 종가 (숫자, 있으면),
  "allTimeHigh": 역대 최고가 (숫자, 있으면),
  "allTimeHighDate": "YYYY-MM-DD 역대 최고가 달성일",
  "currentPrice": 현재 주가 (숫자, 있으면)
}
\`\`\`

규칙:
- 종목명은 반드시 추출 (가장 중요)
- 날짜는 모두 YYYY-MM-DD 형식
- 금액은 모두 숫자만 (콤마, "원" 제거)
- 경쟁률 "1,234.56:1" → 1234.56
- 의무보유확약 "25.5%" → 25.5
- 섹터는 가장 적합한 한 단어 선택
- 스팩(SPAC) 종목이면 섹터는 "SPAC"으로
- 확신이 없는 필드는 null로 (추측하지 말 것)
- 사용자 메모에 명시된 값은 이미지보다 우선${existingInfo}${memo}

JSON만 응답하세요. 설명 없이 \`\`\`json 블록만 출력하세요.`;
}
