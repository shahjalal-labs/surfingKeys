// ==UserScript==
// @name        SD Pulse - DeepSeek Stealth UI
// @namespace   SD Pulse
// @description Transform DeepSeek into SD Pulse with modern night theme
// @version     1.1
// @match       https://chat.deepseek.com/*
// @grant       none
// ==/UserScript==

// First, analyze DeepSeek's DOM structure
function analyzeDeepSeekStructure() {
  console.log("=== DeepSeek DOM Analysis ===");

  // Key elements to target
  const elements = {
    header: document.querySelector('header, [class*="header"]'),
    sidebar: document.querySelector('nav, [class*="sidebar"], [class*="nav"]'),
    chatArea: document.querySelector(
      'main, [class*="chat"], [class*="message"]',
    ),
    input: document.querySelector(
      'textarea, [class*="input"], [class*="text"]',
    ),
    sendButton: document.querySelector(
      'button[type="submit"], [class*="send"], [class*="submit"]',
    ),
    messages: document.querySelectorAll(
      '[class*="message"], [class*="bubble"]',
    ),
  };

  Object.entries(elements).forEach(([key, element]) => {
    console.log(`${key}:`, element);
  });

  return elements;
}

function replaceDeepSeekBranding() {
  const brandingMap = {
    DeepSeek: "SD Pulse 🌌",
    deepseek: "SD Pulse",
    Deepseek: "SD Pulse",
    "Copy code": "Yank 📋",
    Copy: "Yank",
    "Ask me anything...": "Pulse Query 🫀",
    "Message DeepSeek...": "Pulse Query 🫀",
    // Add DeepSeek-specific text replacements here
  };

  function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      let newText = node.textContent;
      Object.entries(brandingMap).forEach(([original, replacement]) => {
        const regex = new RegExp(
          original.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
          "gi",
        );
        newText = newText.replace(regex, replacement);
      });

      if (newText !== node.textContent) {
        node.textContent = newText;
      }
    } else {
      node.childNodes.forEach(replaceText);
    }
  }

  function scanAndReplace() {
    replaceText(document.body);

    // Also check title
    if (document.title.includes("DeepSeek")) {
      document.title = document.title.replace(/DeepSeek/gi, "SD Pulse");
    }
  }

  scanAndReplace();

  // Observer for dynamic content
  const observer = new MutationObserver((mutations) => {
    let shouldScan = false;

    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            shouldScan = true;
          }
        });
      }
    });

    if (shouldScan) {
      setTimeout(scanAndReplace, 100);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Also monitor title changes
  new MutationObserver(() => {
    if (document.title.includes("DeepSeek")) {
      document.title = document.title.replace(/DeepSeek/gi, "SD Pulse");
    }
  }).observe(document.querySelector("title"), {
    childList: true,
  });
}

function initDeepSeekPlaceholderReplacement() {
  let placeholderObserver;

  function replacePlaceholders() {
    const textareas = document.querySelectorAll("textarea");
    const inputs = document.querySelectorAll("input[placeholder]");

    [...textareas, ...inputs].forEach((element) => {
      if (element.placeholder && !element.placeholder.includes("Pulse Query")) {
        try {
          // Store original placeholder for restoration if needed
          if (!element.hasAttribute("data-original-placeholder")) {
            element.setAttribute(
              "data-original-placeholder",
              element.placeholder,
            );
          }

          element.setAttribute("placeholder", "Pulse Query 🫀");
        } catch (e) {
          console.log("Placeholder replacement error:", e);
        }
      }
    });
  }

  function setupObserver() {
    if (placeholderObserver) placeholderObserver.disconnect();

    placeholderObserver = new MutationObserver((mutations) => {
      let shouldReplace = false;

      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const textareas =
                node.tagName === "TEXTAREA"
                  ? [node]
                  : node.querySelectorAll
                    ? node.querySelectorAll("textarea, input[placeholder]")
                    : [];
              if (textareas.length > 0) {
                shouldReplace = true;
              }
            }
          });
        }

        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "placeholder" &&
          !mutation.target.getAttribute("placeholder")?.includes("Pulse Query")
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

  // Periodic check
  const interval = setInterval(replacePlaceholders, 2000);

  return () => {
    if (placeholderObserver) placeholderObserver.disconnect();
    clearInterval(interval);
  };
}

function createDeepSeekTheme() {
  const css = `
    /* SD Pulse Modern Night Theme - DeepSeek */
    :root {
      --sd-primary: #6366f1;
      --sd-primary-dark: #4f46e5;
      --sd-secondary: #06b6d4;
      --sd-accent: #10b981;
      --sd-bg-primary: #0f0f23;
      --sd-bg-secondary: #1a1a2e;
      --sd-bg-tertiary: #16213e;
      --sd-text-primary: #f8fafc;
      --sd-text-secondary: #cbd5e1;
      --sd-border: #2d3748;
      --sd-glow: rgba(99, 102, 241, 0.3);
    }

    /* Base Styles */
    body {
      background: linear-gradient(135deg, var(--sd-bg-primary) 0%, var(--sd-bg-secondary) 50%, var(--sd-bg-tertiary) 100%) !important;
      color: var(--sd-text-primary) !important;
      font-family: 'Inter', 'Segoe UI', system-ui, sans-serif !important;
    }

    /* Glass Morphism Header */
    header, [class*="header"], [class*="top-bar"] {
      background: rgba(15, 15, 35, 0.85) !important;
      backdrop-filter: blur(20px) saturate(180%) !important;
      border-bottom: 1px solid var(--sd-border) !important;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
    }

    /* Main Chat Container */
    main, [class*="chat-container"], [class*="main"] {
      background: rgba(26, 26, 46, 0.7) !important;
      backdrop-filter: blur(10px) !important;
    }

    /* Message Bubbles with Glass Effect */
    [class*="message"], [class*="bubble"], [class*="chat-item"] {
      background: linear-gradient(135deg, rgba(30, 30, 60, 0.9) 0%, rgba(45, 45, 85, 0.9) 100%) !important;
      backdrop-filter: blur(10px) !important;
      border-radius: 20px !important;
      padding: 18px 22px !important;
      margin: 14px 0 !important;
      border: 1px solid rgba(99, 102, 241, 0.2) !important;
      box-shadow: 
        0 4px 20px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(99, 102, 241, 0.1) !important;
      transition: all 0.3s ease !important;
      position: relative !important;
      overflow: hidden !important;
    }

    /* Glow effect on hover */
    [class*="message"]:hover, [class*="bubble"]:hover {
      border-color: var(--sd-primary) !important;
      box-shadow: 
        0 8px 30px rgba(0, 0, 0, 0.4),
        0 0 20px var(--sd-glow) !important;
      transform: translateY(-2px) !important;
    }

    /* User messages - Teal accent */
    [class*="user"], [class*="human"], [data-role="user"] {
      background: linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(45, 45, 85, 0.9) 100%) !important;
      border: 1px solid rgba(6, 182, 212, 0.3) !important;
      margin-left: 20% !important;
    }

    /* Assistant messages - Purple accent */
    [class*="assistant"], [class*="bot"], [data-role="assistant"] {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(45, 45, 85, 0.9) 100%) !important;
      border: 1px solid rgba(99, 102, 241, 0.3) !important;
      margin-right: 20% !important;
    }

    /* Input Area - Modern Glass */
    textarea, [class*="input"], [class*="composer"] {
      background: rgba(26, 26, 46, 0.8) !important;
      backdrop-filter: blur(15px) !important;
      color: var(--sd-text-primary) !important;
      border: 2px solid var(--sd-border) !important;
      border-radius: 20px !important;
      padding: 18px 22px !important;
      font-size: 15px !important;
      transition: all 0.3s ease !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2) !important;
    }

    textarea:focus, [class*="input"]:focus, [class*="composer"]:focus {
      border-color: var(--sd-primary) !important;
      box-shadow: 
        0 0 0 3px rgba(99, 102, 241, 0.2),
        0 8px 30px rgba(0, 0, 0, 0.3) !important;
      outline: none !important;
      background: rgba(26, 26, 46, 0.9) !important;
    }

    /* Send Button - Gradient */
    button[type="submit"], [class*="send"], [class*="submit"] {
      background: linear-gradient(135deg, var(--sd-primary) 0%, var(--sd-primary-dark) 100%) !important;
      border: none !important;
      border-radius: 16px !important;
      color: white !important;
      font-weight: 600 !important;
      padding: 12px 24px !important;
      transition: all 0.3s ease !important;
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4) !important;
      position: relative !important;
      overflow: hidden !important;
    }

    button[type="submit"]:hover, [class*="send"]:hover {
      transform: translateY(-2px) scale(1.02) !important;
      box-shadow: 
        0 8px 25px rgba(99, 102, 241, 0.6),
        0 0 20px rgba(99, 102, 241, 0.3) !important;
    }

    button[type="submit"]:active {
      transform: translateY(0) scale(0.98) !important;
    }

    /* Sidebar - Glass Morphism */
    nav, [class*="sidebar"], [class*="nav"], [class*="conversation"] {
      background: rgba(15, 15, 35, 0.8) !important;
      backdrop-filter: blur(20px) saturate(180%) !important;
      border-right: 1px solid var(--sd-border) !important;
      box-shadow: 4px 0 20px rgba(0, 0, 0, 0.2) !important;
    }

    /* Sidebar Items */
    [class*="sidebar"] a, [class*="nav"] a, [class*="conversation"] a {
      background: transparent !important;
      border-radius: 12px !important;
      margin: 6px 12px !important;
      padding: 12px 16px !important;
      transition: all 0.3s ease !important;
      border: 1px solid transparent !important;
    }

    [class*="sidebar"] a:hover, [class*="nav"] a:hover {
      background: rgba(99, 102, 241, 0.1) !important;
      border-color: var(--sd-primary) !important;
      transform: translateX(8px) !important;
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2) !important;
    }

    /* Code blocks - Cyberpunk style */
    pre, code, [class*="code"] {
      background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%) !important;
      border: 1px solid rgba(99, 102, 241, 0.3) !important;
      border-radius: 12px !important;
      color: #e0e7ff !important;
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 4px 20px rgba(0, 0, 0, 0.3) !important;
    }

    /* Copy/Yank button */
    button:has(> div > svg), button[class*="copy"] {
      background: rgba(99, 102, 241, 0.1) !important;
      border: 1px solid var(--sd-primary) !important;
      border-radius: 10px !important;
      color: var(--sd-primary) !important;
      transition: all 0.3s ease !important;
    }

    button:has(> div > svg):hover, button[class*="copy"]:hover {
      background: var(--sd-primary) !important;
      color: white !important;
      transform: scale(1.05) !important;
      box-shadow: 0 4px 15px var(--sd-glow) !important;
    }

    /* Custom scrollbars */
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    
    ::-webkit-scrollbar-track {
      background: var(--sd-bg-secondary);
      border-radius: 5px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, var(--sd-primary) 0%, var(--sd-secondary) 100%);
      border-radius: 5px;
      border: 2px solid var(--sd-bg-secondary);
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(135deg, var(--sd-primary-dark) 0%, #0891b2 100%);
    }

    /* Loading animations */
    [class*="animate-spin"], [class*="loading"] {
      color: var(--sd-primary) !important;
    }

    /* Selection color */
    ::selection {
      background: rgba(99, 102, 241, 0.3) !important;
      color: white !important;
    }

    /* Focus rings */
    *:focus {
      outline: 2px solid var(--sd-primary) !important;
      outline-offset: 2px !important;
    }

    /* New Chat button */
    button:has(svg), button[class*="new-chat"] {
      background: linear-gradient(135deg, var(--sd-primary) 0%, var(--sd-primary-dark) 100%) !important;
      border: none !important;
      border-radius: 16px !important;
      color: white !important;
      font-weight: 600 !important;
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4) !important;
    }
  `;

  const style = document.createElement("style");
  style.id = "sdPulse-deepseek-theme";
  style.textContent = css;
  document.head.appendChild(style);
}

function replaceDeepSeekFavicon() {
  const favicon =
    document.querySelector('link[rel*="icon"]') ||
    document.createElement("link");
  favicon.type = "image/x-icon";
  favicon.rel = "shortcut icon";

  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");

  // SD Pulse favicon - Modern purple/teal theme
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 32, 32);
  gradient.addColorStop(0, "#6366f1");
  gradient.addColorStop(1, "#06b6d4");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(16, 16, 14, 0, 2 * Math.PI);
  ctx.fill();

  // SD text
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 12px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("SD", 16, 16);

  favicon.href = canvas.toDataURL();

  // Remove existing favicons and add new one
  document
    .querySelectorAll('link[rel*="icon"]')
    .forEach((link) => link.remove());
  document.head.appendChild(favicon);
}

// Initialize on DeepSeek
if (window.location.hostname.includes("chat.deepseek.com")) {
  let cleanupPlaceholders;

  // Apply transformations
  function applySDPulseTransform() {
    createDeepSeekTheme();
    replaceDeepSeekBranding();
    replaceDeepSeekFavicon();
    cleanupPlaceholders = initDeepSeekPlaceholderReplacement();
  }

  // Wait for page to be interactive
  function init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", applySDPulseTransform);
    } else {
      // Small delay to ensure DeepSeek's React has loaded
      setTimeout(applySDPulseTransform, 1000);
    }
  }

  init();

  // Add toggle functionality to window
  window.toggleSDPulse = function () {
    const theme = document.getElementById("sdPulse-deepseek-theme");
    if (theme) {
      theme.remove();
      if (cleanupPlaceholders) cleanupPlaceholders();
      console.log("🔵 Original DeepSeek UI restored");

      // Restore original favicon by reloading the page
      window.location.reload();
    } else {
      applySDPulseTransform();
      console.log("🌌 SD Pulse DeepSeek UI activated");
    }
  };

  console.log("🌌 SD Pulse DeepSeek UI loaded - Use toggleSDPulse() to toggle");
}
