// ==UserScript==
// @name Google EyeCandy
// ==/UserScript==

// const { mapkey, Front } = api;
// let googleUICustom = false;
//
// function toggleGoogleUI() {
//   const styleId = "google-eye-candy-style";
//   let styleTag = document.getElementById(styleId);
//
//   if (googleUICustom) {
//     if (styleTag) styleTag.remove();
//     Front.showBanner("👁️ Default Google UI restored.");
//   } else {
//     if (!styleTag) {
//       styleTag = document.createElement("style");
//       styleTag.id = styleId;
//       styleTag.textContent = `
//         /* Main container */
//         #search .g {
//           background: #1e1e1e !important;
//           color: #ddd !important;
//           border: 1px solid #333;
//           border-radius: 10px;
//           margin: 15px 0;
//           padding: 15px;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.3);
//           transition: all 0.2s ease;
//         }
//         #search .g:hover {
//           transform: scale(1.01);
//           border-color: #444;
//         }
//
//         /* Titles */
//         #search .g h3 {
//           color: #88c0d0 !important;
//           font-size: 1.2em;
//           margin-bottom: 5px;
//         }
//
//         /* URLs */
//         #search .g cite {
//           color: #a3be8c !important;
//           font-size: 0.9em;
//         }
//
//         /* Snippets */
//         #search .g .VwiC3b {
//           color: #ccc !important;
//           font-size: 0.95em;
//           line-height: 1.5;
//         }
//
//         /* Background fix */
//         body, html {
//           background-color: #111 !important;
//         }
//       `;
//       document.head.appendChild(styleTag);
//     }
//     Front.showBanner("✨ EyeCandy Google UI enabled!");
//   }
//   googleUICustom = !googleUICustom;
// }
//
// // Only register the key on Google Search pages
// if (/google\.com\/search/.test(window.location.href)) {
//   mapkey("<Space>g", "Toggle Google EyeCandy UI", toggleGoogleUI);
// }

// ==UserScript==
// @name Google EyeCandy (Modern Vibrant Compact)
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
        /* Smooth background tone */
        body, html {
          background: #0f1115 !important;
          color: #d8dee9 !important;
        }

        /* Result blocks — compact, clean, subtle accent */
        #search .g {
          background: rgba(32, 34, 38, 0.9) !important;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 12px 16px;
          margin: 10px 0;
          transition: transform 0.12s ease, box-shadow 0.15s ease;
        }
        #search .g:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.08);
        }

        /* Title link — subtle glow with accent */
        #search .g h3 {
          color: #8be9fd !important;
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 3px;
          text-shadow: 0 0 8px rgba(139, 233, 253, 0.15);
        }

        /* URL / cite — modern muted green */
        #search .g cite {
          color: #50fa7b !important;
          font-size: 0.85rem;
          opacity: 0.9;
        }

        /* Description / snippet */
        #search .g .VwiC3b {
          color: #e5e9f0 !important;
          font-size: 0.93rem;
          line-height: 1.45;
        }

        /* Remove clutter / gray lines */
        .ULSxyf, .kvH3mc, .v5yQqb, .GHDvEf, .RzdJxc { display: none !important; }

        /* Slight separator lines for flow */
        #search .g:not(:last-child) {
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        /* Vibrant accent on hover for links */
        a:hover h3 {
          color: #ff79c6 !important;
          text-shadow: 0 0 10px rgba(255, 121, 198, 0.2);
        }

        /* “People also ask” and similar */
        .related-question-pair {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 6px;
          padding: 8px 10px;
        }
      `;
      document.head.appendChild(styleTag);
    }
    Front.showBanner("🌈 EyeCandy: Modern Compact UI enabled!");
  }
  googleUICustom = !googleUICustom;
}

// Apply automatically + bind toggle
if (/google\.com\/search/.test(window.location.href)) {
  window.addEventListener("load", () => toggleGoogleUI());
  mapkey("<Space>g", "Toggle Google EyeCandy UI", toggleGoogleUI);
}
