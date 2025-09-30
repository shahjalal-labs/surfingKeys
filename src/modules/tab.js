// 🚀 SUPER FAST TAB NAVIGATION - CONSOLE ERROR FREE

const { mapkey, RUNTIME } = api;
// tj - Jump to FIRST tab
/* api.mapkey("tj", "🔼 Jump to first tab", function () {
  // Use SurfingKeys' built-in tab navigation
  // Go to first tab by pressing g0 (SurfingKeys built-in)
  api.Normal.feedkeys("g0");
  api.Front.showBanner("🔼 First tab");
}); */

api.map("tj", "g0");

// tk - Jump to LAST tab
/* api.mapkey("tk", "🔽 Jump to last tab", function () {
  // Go to last tab by pressing g$ (SurfingKeys built-in)
  api.Normal.feedkeys("g$");
  api.Front.showBanner("🔽 Last tab");
}); */

api.map("tk", "g$");

// th - Jump to PREVIOUS tab
/* api.mapkey("th", "◀️ Jump to previous tab", function () {
  // Use SurfingKeys built-in E (previous tab)
  api.Normal.feedkeys("E");
  api.Front.showBanner("◀️ Previous tab");
}); */
api.map("th", "E");

// Jump to tab by number (t1, t2, t3, etc.)
for (let i = 1; i <= 9; i++) {
  api.mapkey(`t${i}`, `🔢 Jump to tab ${i}`, function () {
    api.RUNTIME(
      "getTabs",
      { queryInfo: { currentWindow: true } },
      (response) => {
        if (response.tabs && response.tabs[i - 1]) {
          const targetTab = response.tabs[i - 1];
          api.RUNTIME("focusTab", { tabId: targetTab.id }, () => {
            api.Front.showBanner(`🔢 Jumped to tab ${i}`);
          });
        } else {
          api.Front.showBanner(`❌ Tab ${i} doesn't exist`);
        }
      },
    );
  });
}
// BONUS: Close current tab and go to previous
/* api.mapkey("tc", "❌ Close tab and go to previous", function () {
  api.Normal.feedkeys("x");
}); */

api.map("tc", "x");
// BONUS: Duplicate current tab
/* api.mapkey("td", "📄 Duplicate current tab", function () {
  api.Normal.feedkeys("yt");
}); */
api.map("td", "yt");
// BONUS: Move tab left/right
/* api.mapkey("th", "◀️ Move tab left", function () {
  api.Normal.feedkeys("<<");
}); */

api.map("th", "<<");
/* api.mapkey("tr", "▶️ Move tab right", function () {
  api.Normal.feedkeys(">>");
}); */
// api.map("gt", "t");
api.map("tl", ">>");
console.log("🚀 Console error-free tab navigation loaded!");

mapkey("sxx", "Close all tabs from same host", function () {
  chrome.tabs.query({}, function (tabs) {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      function (activeTabs) {
        const currentTab = activeTabs[0];
        const currentHost = new URL(currentTab.url).hostname;
        const sameHostTabs = tabs.filter((tab) => {
          try {
            return new URL(tab.url).hostname === currentHost;
          } catch (e) {
            return false;
          }
        });
        sameHostTabs.forEach((tab) => chrome.tabs.remove(tab.id));
      },
    );
  });
});

//close single tab on left
api.map("txh", "gxt");

//close single tab on right
api.map("txl", "gxT");

//close all tabs on left
api.map("txH", "gx0");

//close all tabs on right
api.map("txL", "gx$");
