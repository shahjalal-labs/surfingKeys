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
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-radius: 10px !important;
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.7) !important;
        padding: 6px !important;
        width: 290px !important;
        max-width: 290px !important;
        max-height: 70vh !important;
        overflow-y: auto !important;
        box-sizing: border-box !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 3px !important;
    }

    #sk_tabs::-webkit-scrollbar {
        width: 4px !important;
    }
    #sk_tabs::-webkit-scrollbar-track {
        background: transparent !important;
    }
    #sk_tabs::-webkit-scrollbar-thumb {
        background: #313244 !important;
        border-radius: 2px !important;
    }

    #sk_tabs div.sk_tab, div.sk_tab {
        background: #1e1e2e !important;
        border: 1px solid #313244 !important;
        border-radius: 6px !important;
        margin: 0 !important;
        padding: 4px 8px !important;
        box-shadow: none !important;
        transition: all 0.15s ease-in-out !important;
        box-sizing: border-box !important;
        display: flex !important;
        align-items: center !important;
        height: 32px !important;
        overflow: hidden !important;
    }

    #sk_tabs div.sk_tab:hover, div.sk_tab:hover {
        background: #252739 !important;
        border-color: #89b4fa !important;
        transform: none !important;
        box-shadow: 0 2px 8px rgba(137, 180, 250, 0.2) !important;
    }

    #sk_tabs div.sk_tab.active, div.sk_tab.active {
        background: #313244 !important;
        border-color: #cba6f7 !important;
        box-shadow: 0 0 10px rgba(203, 166, 247, 0.25) !important;
    }

    /* Hint badge: strictly left-aligned in a single column */
    #sk_tabs div.sk_tab_hint, div.sk_tab_hint,
    #sk_tabs.vertical div.sk_tab_hint, div.sk_tab.vertical div.sk_tab_hint {
        position: static !important;
        float: none !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 20px !important;
        min-width: 20px !important;
        max-width: 20px !important;
        height: 18px !important;
        box-sizing: border-box !important;
        padding: 0 !important;
        margin: 0 7px 0 0 !important;
        flex-shrink: 0 !important;
        order: -1 !important;
        font-family: "JetBrains Mono", monospace !important;
        font-size: 8.5pt !important;
        font-weight: 700 !important;
        text-align: center !important;
        background: linear-gradient(135deg, #fab387 0%, #f38ba8 100%) !important;
        color: #11111b !important;
        border-radius: 4px !important;
        border: none !important;
        box-shadow: 0 1px 4px rgba(243, 139, 168, 0.3) !important;
        text-transform: uppercase !important;
    }

    /* Active tab indicator: reserves the hint column space so active tab icon & title stay aligned */
    #sk_tabs div.sk_tab.active::before, div.sk_tab.active::before {
        content: "•" !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 20px !important;
        min-width: 20px !important;
        max-width: 20px !important;
        height: 18px !important;
        box-sizing: border-box !important;
        margin: 0 7px 0 0 !important;
        flex-shrink: 0 !important;
        order: -1 !important;
        color: #cba6f7 !important;
        font-size: 15pt !important;
        line-height: 18px !important;
        font-weight: 700 !important;
        text-shadow: 0 0 6px rgba(203, 166, 247, 0.6) !important;
    }

    /* Tab wrap: flex row for icon + title */
    #sk_tabs div.sk_tab_wrap, div.sk_tab_wrap {
        display: flex !important;
        align-items: center !important;
        flex: 1 1 auto !important;
        min-width: 0 !important;
        overflow: hidden !important;
    }

    /* Favicon */
    #sk_tabs div.sk_tab_icon, div.sk_tab_icon {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        flex-shrink: 0 !important;
        width: 18px !important;
        height: 18px !important;
        margin: 0 7px 0 0 !important;
        padding: 0 !important;
    }

    #sk_tabs div.sk_tab_icon img, div.sk_tab_icon img {
        width: 16px !important;
        height: 16px !important;
        border-radius: 3px !important;
    }

    /* Tab Title: single line, truncated with ellipsis */
    #sk_tabs div.sk_tab_title, div.sk_tab_title {
        color: #cdd6f4 !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        font-size: 9pt !important;
        font-weight: 500 !important;
        padding: 0 !important;
        margin: 0 !important;
        white-space: nowrap !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        flex: 1 1 auto !important;
        min-width: 0 !important;
    }

    #sk_tabs div.sk_tab_url, div.sk_tab_url,
    #sk_tabs div.tab_rocket, div.tab_rocket {
        display: none !important;
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
