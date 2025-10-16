// ==UserScript==
// @name        sjIntel - ChatGPT Stealth UI
// @namespace   sjIntel
// @description Transform ChatGPT into sjIntel with night theme and right sidebar
// @version     1.0
// @match       https://chatgpt.com/*
// @grant       none
// ==/UserScript==

const { mapkey, Front } = api;

function createSJIntelUI() {
  const css = `
        /* Main Theme - Deep Night */
        body {
            background: linear-gradient(135deg, #0c0c1a 0%, #1a1a2e 50%, #16213e 100%) !important;
            color: #e6edf3 !important;
            font-family: 'Segoe UI', system-ui, sans-serif !important;
        }

        /* Header & Branding */
        header, .sticky {
            background: rgba(10, 10, 20, 0.95) !important;
            backdrop-filter: blur(20px) !important;
            border-bottom: 1px solid #2a2a4a !important;
        }

        /* ChatGPT -> sjIntel text replacement */
        * {
            font-family: 'Segoe UI', system-ui, sans-serif !important;
        }

        /* Main Chat Area */
        .flex-1.overflow-hidden {
            background: rgba(15, 15, 30, 0.8) !important;
            border-radius: 16px !important;
            margin: 8px !important;
            border: 1px solid #2a2a4a !important;
        }

        /* Message Bubbles */
        .text-base {
            background: linear-gradient(135deg, #1e1e3f 0%, #2d2b55 100%) !important;
            border-radius: 18px !important;
            padding: 16px 20px !important;
            margin: 12px 0 !important;
            border: 1px solid #3a3a6a !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
            position: relative !important;
        }

        /* User message bubbles */
        .text-base:has([data-message-author-role="user"]) {
            background: linear-gradient(135deg, #2a2a5a 0%, #3a3a7a 100%) !important;
            border: 1px solid #4a4a8a !important;
        }

        /* Input Area */
        textarea, .flex-col > div:last-child {
            background: rgba(20, 20, 40, 0.9) !important;
            color: #ffffff !important;
            border: 1px solid #3a3a6a !important;
            border-radius: 20px !important;
            padding: 16px 20px !important;
            font-size: 14px !important;
            backdrop-filter: blur(10px) !important;
        }

        textarea:focus {
            border-color: #646cff !important;
            box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.2) !important;
            outline: none !important;
        }

        /* Buttons */
        button {
            background: linear-gradient(135deg, #646cff 0%, #747bff 100%) !important;
            border: none !important;
            border-radius: 12px !important;
            color: white !important;
            padding: 10px 20px !important;
            transition: all 0.3s ease !important;
        }

        button:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 25px rgba(100, 108, 255, 0.4) !important;
        }

        /* Code Blocks */
        pre, code {
            background: #1a1a2e !important;
            border: 1px solid #2a2a4a !important;
            border-radius: 12px !important;
            color: #f8f8f2 !important;
        }

        /* Copy Code -> Yank Button */
        button:has(> div > svg), button[class*="copy"] {
            position: relative !important;
        }

        /* Right Sidebar Layout */
        @media (min-width: 768px) {
            .flex > .flex-col:first-child {
                order: 2 !important;
                margin-left: 8px !important;
            }
            
            .flex > .flex-col:last-child {
                order: 1 !important;
                margin-right: 8px !important;
            }
            
            .flex {
                flex-direction: row-reverse !important;
            }
        }

        /* Scrollbars */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: #1a1a2e;
        }

        ::-webkit-scrollbar-thumb {
            background: #646cff;
            border-radius: 4px;
        }

        /* Loading Animation */
        [class*="animate-spin"] {
            color: #646cff !important;
        }

        /* Selection */
        ::selection {
            background: rgba(100, 108, 255, 0.3) !important;
        }
    `;

  const style = document.createElement("style");
  style.id = "sjIntel-night-theme";
  style.textContent = css;
  document.head.appendChild(style);
}

function replaceBranding() {
  // Replace text content throughout the page
  const replaceText = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = node.textContent
        .replace(/ChatGPT/gi, "sjIntel 🚀")
        .replace(/Copy code/gi, "Yank 📋")
        .replace(/Copy/gi, "Yank")
        .replace(/OpenAI/gi, "sjIntel Labs");
    } else {
      node.childNodes.forEach(replaceText);
    }
  };

  replaceText(document.body);

  // Observer for dynamic content
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          replaceText(node);
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

function changeFavicon() {
  const favicon =
    document.querySelector('link[rel*="icon"]') ||
    document.createElement("link");
  favicon.type = "image/x-icon";
  favicon.rel = "shortcut icon";

  // Create a simple custom favicon (blue diamond/hexagon)
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");

  // Draw custom icon
  ctx.fillStyle = "#646cff";
  ctx.beginPath();
  ctx.moveTo(16, 4);
  ctx.lineTo(24, 10);
  ctx.lineTo(24, 22);
  ctx.lineTo(16, 28);
  ctx.lineTo(8, 22);
  ctx.lineTo(8, 10);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 12px Arial";
  ctx.fillText("SJ", 10, 20);

  favicon.href = canvas.toDataURL();
  document.head.appendChild(favicon);
}

function createVariantThemes() {
  const variants = {
    cyberpunk: `
            body {
                background: linear-gradient(135deg, #0a0a0a 0%, #1a0033 100%) !important;
                color: #00ff88 !important;
            }
            .text-base {
                background: linear-gradient(135deg, #1a0033 0%, #330066 100%) !important;
                border: 1px solid #00ff88 !important;
                box-shadow: 0 0 20px rgba(0, 255, 136, 0.3) !important;
            }
            button {
                background: linear-gradient(135deg, #ff00ff 0%, #00ff88 100%) !important;
            }
        `,
    "midnight-blue": `
            body {
                background: linear-gradient(135deg, #0f1a2b 0%, #1e3a5f 100%) !important;
            }
            .text-base {
                background: linear-gradient(135deg, #1e3a5f 0%, #2e4a7f 100%) !important;
                border: 1px solid #3a5f8f !important;
            }
        `,
    amethyst: `
            body {
                background: linear-gradient(135deg, #1a102b 0%, #3a1f5f 100%) !important;
            }
            .text-base {
                background: linear-gradient(135deg, #2a1f4f 0%, #4a2f7f 100%) !important;
                border: 1px solid #6b46c1 !important;
            }
        `,
  };

  return variants;
}

// Initialize
if (window.location.hostname.includes("chatgpt.com")) {
  let currentVariant = "default";
  const variants = createVariantThemes();

  // Apply main theme
  createSJIntelUI();
  replaceBranding();
  changeFavicon();

  // --- Toggle System ---

  // Toggle between original and sjIntel UI
  mapkey("ts", "Toggle sjIntel/ChatGPT UI", () => {
    const style = document.getElementById("sjIntel-night-theme");
    if (style) {
      style.remove();
      Front.showBanner("🔵 Original ChatGPT UI");
    } else {
      createSJIntelUI();
      Front.showBanner("🚀 sjIntel Stealth UI Activated");
    }
  });

  // Cycle through theme variants
  mapkey("tv", "Cycle theme variants", () => {
    const variantNames = Object.keys(variants);
    const currentIndex = variantNames.indexOf(currentVariant);
    const nextIndex = (currentIndex + 1) % (variantNames.length + 1);

    // Remove existing variant
    document.getElementById("sjIntel-variant")?.remove();

    if (nextIndex === 0) {
      currentVariant = "default";
      Front.showBanner("🌙 Default Night Theme");
    } else {
      currentVariant = variantNames[nextIndex - 1];
      const variantStyle = document.createElement("style");
      variantStyle.id = "sjIntel-variant";
      variantStyle.textContent = variants[currentVariant];
      document.head.appendChild(variantStyle);
      Front.showBanner(
        `🎨 ${currentVariant.charAt(0).toUpperCase() + currentVariant.slice(1)} Theme`,
      );
    }
  });

  // Compact mode toggle
  mapkey("tc", "Toggle compact layout", () => {
    const styleId = "sjIntel-compact-style";
    let style = document.getElementById(styleId);
    if (style) {
      style.remove();
      Front.showBanner("📏 Normal Layout");
    } else {
      style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
                .text-base { 
                    font-size: 13px !important; 
                    padding: 12px 16px !important; 
                    margin: 8px 0 !important;
                }
                main { 
                    max-width: 900px !important; 
                    margin: auto !important; 
                }
                textarea {
                    padding: 12px 16px !important;
                    font-size: 13px !important;
                }
            `;
      document.head.appendChild(style);
      Front.showBanner("📐 Compact Layout");
    }
  });

  Front.showBanner("🚀 sjIntel Stealth UI Loaded! Use 'ts' to toggle");
}
