// ==UserCSS==
// ChatGPT UI tweaks

const { mapkey, Front } = api;
api.addCSS(`
  body {
    background-color: #0d1117 !important;
    color: #e6edf3 !important;
  }

  .text-base {
    background: #161b22 !important;
    border-radius: 10px !important;
    padding: 8px !important;
  }

  textarea {
    background-color: #0d1117 !important;
    color: #fff !important;
  }
`);

// ==Custom Hotkeys==
// Example: Toggle a compact layout
mapkey("tsl", "Toggle compact ChatGPT UI", () => {
  const styleId = "chatgpt-compact-style";
  let style = document.getElementById(styleId);
  if (style) {
    style.remove();
    Front.showBanner("Compact layout OFF");
  } else {
    style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .text-base { font-size: 13px !important; padding: 4px 8px !important; }
      main { max-width: 800px !important; margin: auto !important; }
    `;
    document.head.appendChild(style);
    Front.showBanner("Compact layout ON");
  }
});
