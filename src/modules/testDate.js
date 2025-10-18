// src/modules/testDate.js
//
import dayjs from "dayjs";

function showCurrentDate() {
  const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
  api.Front.showBanner(`🕒 Now: ${now}`);
}

api.mapkey("g,", "🕒 Show current date", showCurrentDate);
