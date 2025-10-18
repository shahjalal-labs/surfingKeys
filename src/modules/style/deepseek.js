// ==UserScript==
// @name        SJ Pulse - DeepSeek Stealth UI
// @namespace   SJ Pulse
// @description Transform DeepSeek into SJ Pulse with night theme
// @version     1.0
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
    branding: document.querySelectorAll(
      '*:contains("DeepSeek"), *:contains("deepseek")',
    ),
  };

  Object.entries(elements).forEach(([key, element]) => {
    console.log(`${key}:`, element);
  });

  return elements;
}

function replaceDeepSeekBranding() {
  const brandingMap = {
    DeepSeek: "SJ Pulse 🚀",
    deepseek: "SJ Pulse",
    Deepseek: "SJ Pulse",
    "Copy code": "Yank 📋",
    Copy: "Yank",
    // Add DeepSeek-specific text replacements here
  };

  function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      let newText = node.textContent;
      Object.entries(brandingMap).forEach(([original, replacement]) => {
        newText = newText.replace(new RegExp(original, "gi"), replacement);
      });

      if (newText !== node.textContent) {
        node.textContent = newText;
      }
    } else {
      node.childNodes.forEach(replaceText);
    }
  }

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

function initDeepSeekPlaceholderReplacement() {
  let placeholderObserver;

  function replacePlaceholders() {
    const textareas = document.querySelectorAll("textarea");
    const inputs = document.querySelectorAll("input[placeholder]");

    [...textareas, ...inputs].forEach((element) => {
      if (
        element.placeholder &&
        (element.placeholder.includes("Message") ||
          element.placeholder.includes("Ask") ||
          element.placeholder.includes("Type"))
      ) {
        // Use property descriptor for persistence
        try {
          Object.defineProperty(element, "placeholder", {
            get: function () {
              return "Pulse Query 🫀";
            },
            set: function (value) {
              this.setAttribute("placeholder", "Pulse Query 🫀");
            },
            configurable: true,
          });
          element.setAttribute("placeholder", "Pulse Query 🫀");
        } catch (e) {
          // Fallback
          element.setAttribute("placeholder", "Pulse Query 🫀");
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
            if (
              node.nodeType === Node.ELEMENT_NODE &&
              (node.tagName === "TEXTAREA" ||
                node.tagName === "INPUT" ||
                node.querySelector("textarea, input"))
            ) {
              shouldReplace = true;
            }
          });
        }

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

  // Periodic check
  const interval = setInterval(replacePlaceholders, 3000);

  return () => {
    if (placeholderObserver) placeholderObserver.disconnect();
    clearInterval(interval);
  };
}

function createDeepSeekTheme() {
  const css = `
        /* DeepSeek Main Theme - Customized for their structure */
        body {
            background: linear-gradient(135deg, #0c0c1a 0%, #1a1a2e 50%, #16213e 100%) !important;
            color: #e6edf3 !important;
            font-family: 'Segoe UI', system-ui, sans-serif !important;
        }
        
        /* DeepSeek Header */
        header, [class*="header"], [class*="top-bar"] {
            background: rgba(10, 10, 20, 0.95) !important;
            backdrop-filter: blur(20px) !important;
            border-bottom: 1px solid #2a2a4a !important;
        }
        
        /* Chat Messages - DeepSeek specific */
        [class*="message"], [class*="bubble"], [class*="chat-item"] {
            background: linear-gradient(135deg, #1e1e3f 0%, #2d2b55 100%) !important;
            border-radius: 18px !important;
            padding: 16px 20px !important;
            margin: 12px 0 !important;
            border: 1px solid #3a3a6a !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
        }
        
        /* User messages */
        [class*="user"], [class*="human"], [data-role="user"] {
            background: linear-gradient(135deg, #2a2a5a 0%, #3a3a7a 100%) !important;
            border: 1px solid #4a4a8a !important;
        }
        
        /* Input Area - DeepSeek specific */
        textarea, [class*="input"], [class*="composer"] {
            background: rgba(20, 20, 40, 0.9) !important;
            color: #ffffff !important;
            border: 1px solid #3a3a6a !important;
            border-radius: 20px !important;
            padding: 16px 20px !important;
            font-size: 14px !important;
            backdrop-filter: blur(10px) !important;
        }
        
        /* Send Button */
        button[type="submit"], [class*="send"], [class*="submit"] {
            background: linear-gradient(135deg, #646cff 0%, #747bff 100%) !important;
            border: none !important;
            border-radius: 12px !important;
            color: white !important;
            transition: all 0.3s ease !important;
        }
        
        button[type="submit"]:hover, [class*="send"]:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 25px rgba(100, 108, 255, 0.4) !important;
        }
        
        /* Sidebar - DeepSeek specific */
        nav, [class*="sidebar"], [class*="nav"], [class*="conversation"] {
            background: rgba(10, 10, 20, 0.9) !important;
            backdrop-filter: blur(15px) !important;
            border-right: 1px solid #2a2a4a !important;
        }
        
        /* Code blocks */
        pre, code, [class*="code"] {
            background: #1a1a2e !important;
            border: 1px solid #2a2a4a !important;
            border-radius: 12px !important;
            color: #f8f8f2 !important;
        }
        
        /* Custom scrollbars */
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
    `;

  const style = document.createElement("style");
  style.id = "sjPulse-deepseek-theme";
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

  // SJ Pulse favicon
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

// Initialize on DeepSeek
if (window.location.hostname.includes("chat.deepseek.com")) {
  let cleanupPlaceholders;

  // Analyze structure first (optional)
  setTimeout(() => {
    analyzeDeepSeekStructure();
  }, 1000);

  // Apply transformations
  function applySJPulseTransform() {
    createDeepSeekTheme();
    replaceDeepSeekBranding();
    replaceDeepSeekFavicon();
    cleanupPlaceholders = initDeepSeekPlaceholderReplacement();
  }

  // Wait for page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applySJPulseTransform);
  } else {
    applySJPulseTransform();
  }

  // Add toggle functionality
  window.toggleSJPulse = function () {
    const theme = document.getElementById("sjPulse-deepseek-theme");
    if (theme) {
      theme.remove();
      if (cleanupPlaceholders) cleanupPlaceholders();
      console.log("🔵 Original DeepSeek UI restored");
    } else {
      applySJPulseTransform();
      console.log("🚀 SJ Pulse DeepSeek UI activated");
    }
  };

  console.log("🚀 SJ Pulse DeepSeek UI loaded - Use toggleSJPulse() to toggle");
}
