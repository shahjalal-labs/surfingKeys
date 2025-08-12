/* // BONUS: Jump to tab by number (t1, t2, t3, etc.)
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

console.log("🚀 Tab navigation shortcuts loaded!"); */

// 🚀 SUPER FAST TAB NAVIGATION - USING SURFINGKEYS BUILT-IN APIs

// tj - Jump to FIRST tab
/* api.mapkey("tj", "🔼 Jump to first tab", function () {
  // Using SurfingKeys built-in RUNTIME API for tab operations
  api.RUNTIME("getTabs", { queryInfo: { currentWindow: true } }, (response) => {
    if (response.tabs && response.tabs.length > 0) {
      const firstTab = response.tabs[0];
      api.RUNTIME("focusTab", { tabId: firstTab.id }, () => {
        api.Front.showBanner("🔼 Jumped to first tab");
      });
    }
  });
});

// tk - Jump to LAST tab
api.mapkey("tk", "🔽 Jump to last tab", function () {
  api.RUNTIME("getTabs", { queryInfo: { currentWindow: true } }, (response) => {
    if (response.tabs && response.tabs.length > 0) {
      const lastTab = response.tabs[response.tabs.length - 1];
      api.RUNTIME("focusTab", { tabId: lastTab.id }, () => {
        api.Front.showBanner("🔽 Jumped to last tab");
      });
    }
  });
});

// th - Jump to PREVIOUS tab (with wrap-around)
api.mapkey("th", "◀️ Jump to previous tab", function () {
  api.RUNTIME("getTabs", { queryInfo: { currentWindow: true } }, (response) => {
    if (response.tabs && response.tabs.length > 1) {
      const currentIndex = response.tabs.findIndex((tab) => tab.active);
      let targetIndex;

      if (currentIndex > 0) {
        targetIndex = currentIndex - 1;
      } else {
        targetIndex = response.tabs.length - 1; // Wrap to last tab
      }

      const targetTab = response.tabs[targetIndex];
      api.RUNTIME("focusTab", { tabId: targetTab.id }, () => {
        api.Front.showBanner("◀️ Previous tab");
      });
    }
  });
});

// tl - Jump to NEXT tab (with wrap-around)
api.mapkey("tl", "▶️ Jump to next tab", function () {
  api.RUNTIME("getTabs", { queryInfo: { currentWindow: true } }, (response) => {
    if (response.tabs && response.tabs.length > 1) {
      const currentIndex = response.tabs.findIndex((tab) => tab.active);
      let targetIndex;

      if (currentIndex < response.tabs.length - 1) {
        targetIndex = currentIndex + 1;
      } else {
        targetIndex = 0; // Wrap to first tab
      }

      const targetTab = response.tabs[targetIndex];
      api.RUNTIME("focusTab", { tabId: targetTab.id }, () => {
        api.Front.showBanner("▶️ Next tab");
      });
    }
  });
});

// tm - Jump to MIDDLE tab
api.mapkey("tm", "🎯 Jump to middle tab", function () {
  api.RUNTIME("getTabs", { queryInfo: { currentWindow: true } }, (response) => {
    if (response.tabs && response.tabs.length > 0) {
      const middleIndex = Math.floor(response.tabs.length / 2);
      const middleTab = response.tabs[middleIndex];
      api.RUNTIME("focusTab", { tabId: middleTab.id }, () => {
        api.Front.showBanner(
          `🎯 Middle tab (${middleIndex + 1}/${response.tabs.length})`,
        );
      });
    }
  });
});

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

// Store last active tab for tp functionality
let previousTabId = null;

// tp - Jump to previously active tab
api.mapkey("tp", "🔄 Jump to previous tab", function () {
  if (previousTabId !== null) {
    api.RUNTIME("focusTab", { tabId: previousTabId }, () => {
      api.Front.showBanner("🔄 Switched to previous tab");
    });
  } else {
    // Fallback: go to second tab if no previous tab tracked
    api.RUNTIME(
      "getTabs",
      { queryInfo: { currentWindow: true } },
      (response) => {
        if (response.tabs && response.tabs.length > 1) {
          const secondTab = response.tabs[1];
          api.RUNTIME("focusTab", { tabId: secondTab.id }, () => {
            api.Front.showBanner("🔄 Switched to second tab");
          });
        }
      },
    );
  }
});

// Track tab changes for tp functionality
// Note: This might not work perfectly due to SurfingKeys limitations
// but the fallback in tp should handle it
api.RUNTIME("getTabs", { queryInfo: { currentWindow: true } }, (response) => {
  if (response.tabs) {
    const activeTab = response.tabs.find((tab) => tab.active);
    if (activeTab && activeTab.id !== previousTabId) {
      // Don't update on first load
      if (previousTabId !== null) {
        // This would be the previous active tab, but tracking is complex
        // The tp function has a fallback for this case
      }
    }
  }
});

console.log("🚀 Tab navigation shortcuts loaded with SurfingKeys APIs!"); */

// 🚀 SUPER FAST TAB NAVIGATION - CONSOLE ERROR FREE

// tj - Jump to FIRST tab
api.mapkey("tj", "🔼 Jump to first tab", function () {
  // Use SurfingKeys' built-in tab navigation
  // Go to first tab by pressing g0 (SurfingKeys built-in)
  api.Normal.feedkeys("g0");
  api.Front.showBanner("🔼 First tab");
});

// tk - Jump to LAST tab
api.mapkey("tk", "🔽 Jump to last tab", function () {
  // Go to last tab by pressing g$ (SurfingKeys built-in)
  api.Normal.feedkeys("g$");
  api.Front.showBanner("🔽 Last tab");
});

// th - Jump to PREVIOUS tab
api.mapkey("th", "◀️ Jump to previous tab", function () {
  // Use SurfingKeys built-in E (previous tab)
  api.Normal.feedkeys("E");
  api.Front.showBanner("◀️ Previous tab");
});

// tl - Jump to NEXT tab
api.mapkey("tl", "▶️ Jump to next tab", function () {
  // Use SurfingKeys built-in R (next tab)
  api.Normal.feedkeys("R");
  api.Front.showBanner("▶️ Next tab");
});

// tm - Jump to MIDDLE tab (approximate)
api.mapkey("tm", "🎯 Jump to middle tab", function () {
  // Get tab count and go to middle
  api.RUNTIME("getTabs", { queryInfo: { currentWindow: true } }, (response) => {
    if (response.tabs && response.tabs.length > 0) {
      const middleIndex = Math.floor(response.tabs.length / 2) + 1;
      // Feed the number + gt to go to specific tab
      api.Normal.feedkeys(middleIndex + "gt");
      api.Front.showBanner(
        `🎯 Middle tab (${middleIndex}/${response.tabs.length})`,
      );
    }
  });
});

// Jump to tab by number (t1, t2, t3, etc.) - Using SurfingKeys' built-in gt
for (let i = 1; i <= 9; i++) {
  api.mapkey(`t${i}`, `🔢 Jump to tab ${i}`, function () {
    // Use SurfingKeys built-in number + gt
    api.Normal.feedkeys(i + "gt");
    api.Front.showBanner(`🔢 Tab ${i}`);
  });
}

// tp - Jump to previously active tab (using alt-s which is last focused tab)
api.mapkey("tp", "🔄 Jump to previous tab", function () {
  // Use SurfingKeys built-in alt-s for last focused tab
  api.Normal.feedkeys("<Alt-s>");
  api.Front.showBanner("🔄 Previous active tab");
});

// BONUS: Close current tab and go to previous
api.mapkey("tc", "❌ Close tab and go to previous", function () {
  api.Normal.feedkeys("x");
  api.Front.showBanner("❌ Tab closed");
});

// BONUS: Duplicate current tab
api.mapkey("td", "📄 Duplicate current tab", function () {
  api.Normal.feedkeys("yt");
  api.Front.showBanner("📄 Tab duplicated");
});

// BONUS: Move tab left/right
api.mapkey("t<", "◀️ Move tab left", function () {
  api.Normal.feedkeys("<<");
  api.Front.showBanner("◀️ Tab moved left");
});

api.mapkey("t>", "▶️ Move tab right", function () {
  api.Normal.feedkeys(">>");
  api.Front.showBanner("▶️ Tab moved right");
});

console.log("🚀 Console error-free tab navigation loaded!");
