api.vmapkey("cn", "📋 Copy selection as Markdown using Turndown", function () {
  if (typeof window.copyTableAsMarkdown === "function") {
    window.copyTableAsMarkdown();
  } else {
    api.Front.showPopup(
      "❌ Function not found. Make sure Tampermonkey script is active.",
    );
  }
});
