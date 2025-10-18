//

// ==UserScript==
// @name        SJ Pulse - ChatGPT Stealth UI
// @namespace   SJ Pulse
// @description Transform ChatGPT into SJ Pulse with night theme (safe layout)
// @version     1.2
// @match       https://chatgpt.com/*
// @grant       none
// ==/UserScript==

const { mapkey, Front } = api;

// Enhanced placeholder replacement with persistent observer
function initPlaceholderReplacement() {
  let placeholderObserver;
  let isReplacing = false;

  function replacePlaceholders() {
    if (isReplacing) return;
    isReplacing = true;

    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
      if (
        textarea.placeholder &&
        textarea.placeholder.includes("Ask anything")
      ) {
        // Use a more persistent approach
        Object.defineProperty(textarea, "placeholder", {
          get: function () {
            return "Pulse Query 🫀";
          },
          set: function (value) {
            // Only allow setting if it's not our custom placeholder
            if (!value.includes("Pulse Query")) {
              this.setAttribute("placeholder", "Pulse Query 🫀");
            }
          },
          configurable: true,
        });

        // Also set the attribute directly
        textarea.setAttribute("placeholder", "Pulse Query 🫀");

        // Monitor for changes and revert if needed
        const originalDescriptor = Object.getOwnPropertyDescriptor(
          textarea,
          "placeholder",
        );
        if (!originalDescriptor || !originalDescriptor.get) {
          textarea._originalPlaceholder = "Pulse Query 🫀";
        }
      }
    });

    isReplacing = false;
  }

  // Set up observer for dynamic textareas
  function setupObserver() {
    if (placeholderObserver) placeholderObserver.disconnect();

    placeholderObserver = new MutationObserver((mutations) => {
      let shouldReplace = false;

      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              if (
                node.tagName === "TEXTAREA" ||
                node.querySelector("textarea")
              ) {
                shouldReplace = true;
              }
            }
          });
        }

        // Also check for attribute changes on textareas
        if (
          mutation.type === "attributes" &&
          mutation.target.tagName === "TEXTAREA" &&
          mutation.attributeName === "placeholder"
        ) {
          shouldReplace = true;
        }
      });

      if (shouldReplace) {
        setTimeout(replacePlaceholders, 100);
      }
    });

    placeholderObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["placeholder"],
    });
  }

  // Initialize
  replacePlaceholders();
  setupObserver();

  // Also run periodically to catch any missed changes
  const interval = setInterval(replacePlaceholders, 2000);

  // Cleanup function
  return () => {
    if (placeholderObserver) placeholderObserver.disconnect();
    clearInterval(interval);
  };
}

function createSJPulseUI() {
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

    /* Main Chat Area - Safe styling */
    main, [class*="flex-1"] {
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
    }

    /* User message bubbles */
    [data-message-author-role="user"] .text-base {
      background: linear-gradient(135deg, #2a2a5a 0%, #3a3a7a 100%) !important;
      border: 1px solid #4a4a8a !important;
    }

    /* Input Area - Fixed */
    form textarea, [data-testid*="textarea"] {
      background: rgba(20, 20, 40, 0.9) !important;
      color: #ffffff !important;
      border: 1px solid #3a3a6a !important;
      border-radius: 20px !important;
      padding: 16px 20px !important;
      font-size: 14px !important;
      backdrop-filter: blur(10px) !important;
      resize: vertical !important;
    }

    form textarea:focus, [data-testid*="textarea"]:focus {
      border-color: #646cff !important;
      box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.2) !important;
      outline: none !important;
    }

    /* Send button */
    button[data-testid*="send"] {
      background: linear-gradient(135deg, #646cff 0%, #747bff 100%) !important;
      border: none !important;
      border-radius: 12px !important;
      color: white !important;
      transition: all 0.3s ease !important;
    }

    button[data-testid*="send"]:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 25px rgba(100, 108, 255, 0.4) !important;
    }

    /* Sidebar - Safe styling */
    nav, [class*="sidebar"], [class*="Nav"] {
      background: rgba(10, 10, 20, 0.9) !important;
      backdrop-filter: blur(15px) !important;
      border-right: 1px solid #2a2a4a !important;
    }

    /* Sidebar items */
    nav a, [class*="Nav"] a, [class*="nav"] a {
      background: transparent !important;
      border-radius: 10px !important;
      margin: 4px 8px !important;
      transition: all 0.3s ease !important;
    }

    nav a:hover, [class*="Nav"] a:hover {
      background: rgba(100, 108, 255, 0.1) !important;
      transform: translateX(4px) !important;
    }

    /* Code Blocks */
    pre, code {
      background: #1a1a2e !important;
      border: 1px solid #2a2a4a !important;
      border-radius: 12px !important;
      color: #f8f8f2 !important;
    }

    /* Copy/Yank button */
    button:has(> div > svg), button[class*="copy"] {
      background: rgba(100, 108, 255, 0.1) !important;
      border: 1px solid #646cff !important;
      border-radius: 8px !important;
      color: #646cff !important;
      transition: all 0.3s ease !important;
    }

    button:has(> div > svg):hover, button[class*="copy"]:hover {
      background: #646cff !important;
      color: white !important;
      transform: scale(1.05) !important;
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

    /* New Chat button */
    button:has(svg), button[class*="new-chat"] {
      background: linear-gradient(135deg, #646cff 0%, #747bff 100%) !important;
      border: none !important;
      border-radius: 12px !important;
      color: white !important;
      font-weight: 600 !important;
    }

    /* User menu */
    [class*="user"] button {
      background: transparent !important;
      border: 1px solid #3a3a6a !important;
      border-radius: 12px !important;
    }
  `;

  const style = document.createElement("style");
  style.id = "sjPulse-night-theme";
  style.textContent = css;
  document.head.appendChild(style);
}

function replaceBranding() {
  const replaceText = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      let newText = node.textContent;

      // Only replace visible text, not URLs or data attributes
      if (
        !node.parentElement?.closest("script") &&
        !node.parentElement?.closest("style") &&
        !node.parentElement?.getAttribute("href")
      ) {
        newText = newText
          .replace(/\bChatGPT\b/gi, "SJ Pulse 🚀")
          .replace(/\bChatGPT-\d\b/gi, "SJ Pulse")
          .replace(/Copy code/gi, "Yank 📋")
          .replace(/\bCopy\b/gi, "Yank")
          .replace(/\bAsk anything\b/gi, "Pulse Query 🫀");
      }

      if (newText !== node.textContent) {
        node.textContent = newText;
      }
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

  // Create custom favicon
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");

  // Draw custom icon (purple hexagon with SJ)
  ctx.fillStyle = "#561530";
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
  ctx.font = "bold 10px Arial";
  ctx.textAlign = "center";
  ctx.fillText("SJ", 16, 20);

  favicon.href = canvas.toDataURL();
  document.head.appendChild(favicon);
}

function createVariantThemes() {
  return {
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
      button[data-testid*="send"] {
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
    "deep-space": `
      body {
        background: linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #0f3460 100%) !important;
      }
      .text-base {
        background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%) !important;
        border: 1px solid #4cc9f0 !important;
      }
    `,
  };
}

// Initialize
if (window.location.hostname.includes("chatgpt.com")) {
  let currentVariant = "default";
  const variants = createVariantThemes();
  let cleanupPlaceholders;

  // Apply main theme
  createSJPulseUI();
  replaceBranding();
  changeFavicon();
  cleanupPlaceholders = initPlaceholderReplacement();

  // --- Toggle System ---

  // Toggle between original and SJ Pulse UI
  mapkey("ts", "Toggle SJ Pulse/ChatGPT UI", () => {
    const style = document.getElementById("sjPulse-night-theme");
    if (style) {
      style.remove();
      if (cleanupPlaceholders) cleanupPlaceholders();
      Front.showBanner("🔵 Original ChatGPT UI Restored");
    } else {
      createSJPulseUI();
      cleanupPlaceholders = initPlaceholderReplacement();
      Front.showBanner("🚀 SJ Pulse Stealth UI Activated");
    }
  });

  // Cycle through theme variants
  mapkey("tv", "Cycle theme variants", () => {
    const variantNames = Object.keys(variants);
    const currentIndex = variantNames.indexOf(currentVariant);
    const nextIndex = (currentIndex + 1) % (variantNames.length + 1);

    // Remove existing variant
    document.getElementById("sjPulse-variant")?.remove();

    if (nextIndex === 0) {
      currentVariant = "default";
      Front.showBanner("🌙 Default Night Theme");
    } else {
      currentVariant = variantNames[nextIndex - 1];
      const variantStyle = document.createElement("style");
      variantStyle.id = "sjPulse-variant";
      variantStyle.textContent = variants[currentVariant];
      document.head.appendChild(variantStyle);
      Front.showBanner(
        `🎨 ${currentVariant
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")} Theme`,
      );
    }
  });

  // Compact mode toggle
  mapkey("tc", "Toggle compact layout", () => {
    const styleId = "sjPulse-compact-style";
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
        form textarea, [data-testid*="textarea"] {
          padding: 12px 16px !important;
          font-size: 13px !important;
          min-height: 60px !important;
        }
        main, [class*="flex-1"] {
          margin: 4px !important;
        }
      `;
      document.head.appendChild(style);
      Front.showBanner("📐 Compact Layout");
    }
  });

  Front.showBanner(
    "🚀 SJ Pulse Stealth UI Loaded! Use 'ts' to toggle, 'tv' for variants, 'tc' for compact",
  );
}
