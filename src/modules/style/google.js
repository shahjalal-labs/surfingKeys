// ==UserScript==
// @name Google EyeCandy
// ==/UserScript==

const { mapkey, Front } = api;
let googleUICustom = false;

function toggleGoogleUI() {
  const styleId = "google-eye-candy-style";
  let styleTag = document.getElementById(styleId);

  if (googleUICustom) {
    if (styleTag) styleTag.remove();
    Front.showBanner("👁️ Default Google UI restored.");
  } else {
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = styleId;
      styleTag.textContent = `
        /* Main container */
        #search .g {
          background: #1e1e1e !important;
          color: #ddd !important;
          border: 1px solid #333;
          border-radius: 10px;
          margin: 15px 0;
          padding: 15px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          transition: all 0.2s ease;
        }
        #search .g:hover {
          transform: scale(1.01);
          border-color: #444;
        }

        /* Titles */
        #search .g h3 {
          color: #88c0d0 !important;
          font-size: 1.2em;
          margin-bottom: 5px;
        }

        /* URLs */
        #search .g cite {
          color: #a3be8c !important;
          font-size: 0.9em;
        }

        /* Snippets */
        #search .g .VwiC3b {
          color: #ccc !important;
          font-size: 0.95em;
          line-height: 1.5;
        }

        /* Background fix */
        body, html {
          background-color: #111 !important;
        }
      `;
      document.head.appendChild(styleTag);
    }
    Front.showBanner("✨ EyeCandy Google UI enabled!");
  }
  googleUICustom = !googleUICustom;
}

// Only register the key on Google Search pages
if (/google\.com\/search/.test(window.location.href)) {
  mapkey("<Space>g", "Toggle Google EyeCandy UI", toggleGoogleUI);
}
