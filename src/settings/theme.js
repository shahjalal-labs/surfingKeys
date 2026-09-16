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
    }

    /* ──────────── Modern Night Tab Switcher (#sk_tabs) ──────────── */
    #sk_tabs {
        background: rgba(17, 17, 27, 0.95) !important;
        backdrop-filter: blur(20px) saturate(180%) !important;
        -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6) !important;
        padding: 8px 12px !important;
    }

    #sk_tabs div.sk_tab, div.sk_tab {
        background: #1e1e2e !important;
        border: 1px solid #313244 !important;
        border-radius: 8px !important;
        margin: 3px !important;
        padding: 6px 10px !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35) !important;
        transition: all 0.15s ease-in-out !important;
        box-sizing: border-box !important;
    }

    #sk_tabs div.sk_tab:hover, div.sk_tab:hover {
        background: #252739 !important;
        border-color: #89b4fa !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 16px rgba(137, 180, 250, 0.25) !important;
    }

    #sk_tabs div.sk_tab.active, div.sk_tab.active {
        background: #313244 !important;
        border-color: #cba6f7 !important;
        box-shadow: 0 0 14px rgba(203, 166, 247, 0.3) !important;
    }

    #sk_tabs div.sk_tab_title, div.sk_tab_title {
        color: #cdd6f4 !important;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        font-size: 11pt !important;
        font-weight: 500 !important;
        padding-left: 6px !important;
    }

    #sk_tabs div.sk_tab_url, div.sk_tab_url {
        color: #a6adc8 !important;
        font-size: 9pt !important;
        font-family: "JetBrains Mono", monospace !important;
    }

    #sk_tabs div.sk_tab_hint, div.sk_tab_hint {
        background: linear-gradient(135deg, #fab387 0%, #f38ba8 100%) !important;
        color: #11111b !important;
        border: none !important;
        border-radius: 6px !important;
        font-family: "JetBrains Mono", monospace !important;
        font-size: 10pt !important;
        font-weight: 700 !important;
        padding: 2px 7px !important;
        margin: 4px 6px !important;
        box-shadow: 0 2px 8px rgba(243, 139, 168, 0.4) !important;
        text-transform: uppercase !important;
        letter-spacing: 0.5px !important;
    }

    #sk_tabs.vertical div.sk_tab, div.sk_tab.vertical {
        padding: 8px 12px !important;
        border-radius: 8px !important;
        margin-bottom: 6px !important;
    }

    #sk_tabs.vertical div.sk_tab_hint, div.sk_tab.vertical div.sk_tab_hint {
        position: relative !important;
        left: auto !important;
        float: right !important;
    }

    #sk_banner {
        background: #181825 !important;
        color: #cdd6f4 !important;
        border: 1px solid #cba6f7 !important;
        border-top: none !important;
        border-radius: 0 0 10px 10px !important;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5) !important;
        font-family: "Inter", sans-serif !important;
        font-weight: 500 !important;
    }
`;
//w: (end)  ╰────────────  settings.theme ────────────╯
