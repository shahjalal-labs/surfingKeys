// tj - Jump to FIRST tab
api.mapkey("tj", "🔼 Jump to first tab", function () {
  // Use SurfingKeys' built-in tab navigation
  // Go to first tab by pressing g0 (SurfingKeys built-in)
  api.Normal.feedkeys("g0");
});

// tk - Jump to LAST tab
api.mapkey("tk", "🔽 Jump to last tab", function () {
  // Go to last tab by pressing g$ (SurfingKeys built-in)
  api.Normal.feedkeys("g$");
});

// th - Jump to PREVIOUS tab
api.mapkey("th", "◀️ Jump to previous tab", function () {
  // Use SurfingKeys built-in E (previous tab)
  api.Normal.feedkeys("E");
});

// Jump to tab by number (t1, t2, t3, etc.) - Using SurfingKeys' built-in gt
for (let i = 1; i <= 9; i++) {
  api.mapkey(`t${i}`, `🔢 Jump to tab ${i}`, function () {
    // Use SurfingKeys built-in number + gt
    api.Normal.feedkeys(i + "gt");
    api.Front.showBanner(`🔢 Tab ${i}`);
  });
}

// BONUS: Close current tab and go to previous
api.mapkey("tc", "❌ Close tab and go to previous", function () {
  api.Normal.feedkeys("x");
});

// BONUS: Duplicate current tab
api.mapkey("td", "📄 Duplicate current tab", function () {
  api.Normal.feedkeys("yt");
});

// BONUS: Move tab left/right
api.mapkey("th", "◀️ Move tab left", function () {
  api.Normal.feedkeys("<<");
});

api.mapkey("tl", "▶️ Move tab right", function () {
  api.Normal.feedkeys(">>");
});

console.log("🚀 Console error-free tab navigation loaded!");
