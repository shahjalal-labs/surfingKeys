// BONUS: Jump to tab by number (t1, t2, t3, etc.)
for (let i = 1; i <= 9; i++) {
  api.mapkey(`t${i}`, `🔢 Jump to tab ${i}`, function () {
    api.RUNTIME("getTabs", {}, (response) => {
      const tabs = response.tabs;
      if (tabs[i - 1]) {
        api.RUNTIME("focusTab", { tabId: tabs[i - 1].id });
        api.Front.showBanner(`🔢 Jumped to tab ${i}`);
      } else {
        api.Front.showBanner(`❌ Tab ${i} doesn't exist`);
      }
    });
  });
}

// BONUS: Jump to previously active tab
api.mapkey("tp", "🔄 Jump to previous active tab", function () {
  api.RUNTIME("focusTab", { tabId: "previous" });
});

console.log("🚀 Tab navigation shortcuts loaded!");
