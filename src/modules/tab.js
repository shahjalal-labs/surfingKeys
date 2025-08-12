// 🚀 SUPER FAST TAB NAVIGATION

// tj - Jump to FIRST tab
api.mapkey("tj", "🔼 Jump to first tab", function () {
  api.RUNTIME("focusTab", { tabId: "first" });
});

// tk - Jump to LAST tab
api.mapkey("tk", "🔽 Jump to last tab", function () {
  api.RUNTIME("focusTab", { tabId: "last" });
});

// BONUS: Even more tab navigation shortcuts
// th - Jump to tab on LEFT (previous)
api.mapkey("th", "◀️ Jump to previous tab", function () {
  api.RUNTIME("previousTab");
});

// tl - Jump to tab on RIGHT (next)
api.mapkey("tl", "▶️ Jump to next tab", function () {
  api.RUNTIME("nextTab");
});

// tm - Jump to MIDDLE tab (approximate)
api.mapkey("tm", "🎯 Jump to middle tab", function () {
  api.RUNTIME("getTabs", {}, (response) => {
    const tabs = response.tabs;
    const middleIndex = Math.floor(tabs.length / 2);
    const middleTab = tabs[middleIndex];
    if (middleTab) {
      api.RUNTIME("focusTab", { tabId: middleTab.id });
      api.Front.showBanner(
        `🎯 Jumped to middle tab (${middleIndex + 1}/${tabs.length})`,
      );
    }
  });
});

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
