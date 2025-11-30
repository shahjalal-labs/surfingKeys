//
//w: (start)╭──────────── Toggle dark mode ────────────╮
// t: toggle dark mode (CSS inversion)
api.mapkey("ck", "🌒 Toggle dark mode (CSS inversion)", inverse);

function inverse() {
  if (!document.getElementById("__sk_darkmode")) {
    const style = document.createElement("style");
    style.id = "__sk_darkmode";
    style.innerHTML = `html { filter: invert(0.92) hue-rotate(180deg); background: #111 !important; } img, video { filter: invert(1) hue-rotate(180deg) !important; }`;
    document.head.appendChild(style);
    api.Front.showBanner("🌚 Dark mode ON");
  } else {
    document.getElementById("__sk_darkmode").remove();
    api.Front.showBanner("🌞 Dark mode OFF");
  }
}

inverse();
//w: (end)  ╰──────────── Toggle dark mode ────────────╯
//
//
//w: 25/11/2024 12:51 PM Mon GMT+6 Sharifpur, Gazipur, Dhaka
//w: (start)╭────────────  settings.theme ────────────╮
settings.theme = `
.sk_theme {
    font-family: "Input Sans Condensed", Charcoal, sans-serif;
    font-size: 10pt;
    background: #1e1e2e; /* Base */
    color: #cdd6f4; /* Text */
}
.sk_theme tbody {
    color: #f5e0dc; /* Light text */
}
.sk_theme input {
    color: #cdd6f4; /* Input text */
}
.sk_theme .url {
    color: #89b4aa; /* Blue */
}
.sk_theme .annotation {
    color: #f5c2e7; /* Pink */
}
.sk_theme .omnibar_highlight {
    color: #a6e3a1; /* Green */
}
.sk_theme .omnibar_timestamp {
    color: #fab387; /* Peach */
}
.sk_theme .omnibar_visitcount {
    color: #f9e2af; /* Yellow */
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #181825; /* Darker Base */
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #313244; /* Highlight */
}
#sk_status, #sk_find {
    font-size: 20pt;
    background: #1e1e2e; /* Base */
    color: #cdd6f4; /* Text */
}`;
//w: (end)  ╰────────────  settings.theme ────────────╯

function enableDarkMode() {
  if (!document.getElementById("__sk_darkmode")) {
    const style = document.createElement("style");
    style.id = "__sk_darkmode";
    style.innerHTML = `
      html {
        background: #0f0f0f !important;
        color: #e0e0e0 !important;
      }
      
      body {
        background: #0f0f0f !important;
        color: #e0e0e0 !important;
        transition: all 0.3s ease !important;
      }
      
      /* Main content areas */
      div, section, article, main, header, footer {
        background: #1a1a1a !important;
        color: #e0e0e0 !important;
      }
      
      /* Cards and elevated elements */
      .card, [class*="card"], [class*="box"], .panel, .container {
        background: #2a2a2a !important;
        border-color: #404040 !important;
      }
      
      /* Text elements */
      h1, h2, h3, h4, h5, h6, p, span, li, td, div {
        color: #e0e0e0 !important;
      }
      
      /* Links */
      a {
        color: #7eb6ff !important;
      }
      
      a:hover {
        color: #a3cfff !important;
      }
      
      /* Input fields */
      input, textarea, select {
        background: #2a2a2a !important;
        color: #e0e0e0 !important;
        border-color: #404040 !important;
      }
      
      /* Buttons */
      button, [role="button"], [type="button"], [type="submit"] {
        background: #3a3a3a !important;
        color: #e0e0e0 !important;
        border-color: #505050 !important;
      }
      
      /* Images - slightly reduce brightness for comfort */
      img, video {
        filter: brightness(0.85) !important;
        transition: filter 0.3s ease !important;
      }
      
      /* Code blocks and preformatted text */
      code, pre {
        background: #2a2a2a !important;
        color: #e0e0e0 !important;
      }
      
      /* Tables */
      table {
        background: #1a1a1a !important;
      }
      
      th, td {
        background: #2a2a2a !important;
        border-color: #404040 !important;
      }
      
      /* Scrollbar styling */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #1a1a1a;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #404040;
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #505050;
      }
    `;
    document.head.appendChild(style);
    api.Front.showBanner("🌙 Modern Dark Mode ON");
  } else {
    document.getElementById("__sk_darkmode").remove();
    api.Front.showBanner("☀️ Modern Dark Mode OFF");
  }
}

api.mapkey("c.", "🌒 Toggle dark mode (CSS inversion)", enableDarkMode);
