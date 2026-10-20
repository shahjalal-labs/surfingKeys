// ==UserScript==
// @name        SJ Pulse - ChatGPT Stealth UI
// @namespace   SJ Pulse
// @description Transform ChatGPT into SJ Pulse with night theme (safe layout)
// @version     1.3
// @match       https://chatgpt.com/*
// @grant       none
// ==/UserScript==

const { mapkey, Front } = api;

// Enhanced favicon replacement with persistent monitoring
function initFaviconReplacement() {
  let faviconObserver;
  let customFaviconUrl;

  // Create custom favicon once
  function createCustomFavicon() {
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

    return canvas.toDataURL();
  }

  function replaceFavicon() {
    const favicons = document.querySelectorAll('link[rel*="icon"]');
    customFaviconUrl = customFaviconUrl || createCustomFavicon();

    favicons.forEach((favicon) => {
      // Store original href to prevent loops
      if (!favicon.hasAttribute("data-original-href")) {
        favicon.setAttribute("data-original-href", favicon.href);
      }

      // Only replace if it's not already our custom favicon
      if (favicon.href !== customFaviconUrl) {
        favicon.href = customFaviconUrl;
      }
    });

    // Also set the favicon dynamically if it doesn't exist
    if (favicons.length === 0) {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.type = "image/x-icon";
      newFavicon.href = customFaviconUrl;
      document.head.appendChild(newFavicon);
    }
  }

  // Set up observer to catch favicon changes
  function setupFaviconObserver() {
    if (faviconObserver) faviconObserver.disconnect();

    faviconObserver = new MutationObserver((mutations) => {
      let faviconChanged = false;

      mutations.forEach((mutation) => {
        // Check for added nodes
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (
              node.nodeType === Node.ELEMENT_NODE &&
              node.tagName === "LINK" &&
              node.getAttribute("rel")?.includes("icon")
            ) {
              faviconChanged = true;
            }
          });
        }

        // Check for attribute changes on existing favicons
        if (
          mutation.type === "attributes" &&
          mutation.target.tagName === "LINK" &&
          mutation.target.getAttribute("rel")?.includes("icon") &&
          (mutation.attributeName === "href" ||
            mutation.attributeName === "rel")
        ) {
          faviconChanged = true;
        }
      });

      if (faviconChanged) {
        setTimeout(replaceFavicon, 100);
      }
    });

    // Observe the entire head for changes
    faviconObserver.observe(document.head, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href", "rel"],
    });
  }

  // More aggressive approach: also override the DOM methods
  function overrideDOMMethods() {
    const originalSetAttribute = Element.prototype.setAttribute;
    const originalAppendChild = Node.prototype.appendChild;
    const originalInsertBefore = Node.prototype.insertBefore;

    Element.prototype.setAttribute = function (name, value) {
      if (
        this.tagName === "LINK" &&
        name === "href" &&
        this.getAttribute("rel")?.includes("icon") &&
        !value.includes("data:image")
      ) {
        value = customFaviconUrl || createCustomFavicon();
      }
      return originalSetAttribute.call(this, name, value);
    };

    Node.prototype.appendChild = function (node) {
      if (
        node &&
        node.tagName === "LINK" &&
        node.getAttribute("rel")?.includes("icon")
      ) {
        node.setAttribute("href", customFaviconUrl || createCustomFavicon());
      }
      return originalAppendChild.call(this, node);
    };

    Node.prototype.insertBefore = function (newNode, referenceNode) {
      if (
        newNode &&
        newNode.tagName === "LINK" &&
        newNode.getAttribute("rel")?.includes("icon")
      ) {
        newNode.setAttribute("href", customFaviconUrl || createCustomFavicon());
      }
      return originalInsertBefore.call(this, newNode, referenceNode);
    };
  }

  // Initialize
  replaceFavicon();
  setupFaviconObserver();
  overrideDOMMethods();

  // Also run periodically as a fallback
  const interval = setInterval(replaceFavicon, 3000);

  // Cleanup function
  return () => {
    if (faviconObserver) faviconObserver.disconnect();
    clearInterval(interval);
  };
}

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
        (textarea.placeholder.includes("Ask anything") ||
          textarea.placeholder.includes("Ask ChatGPT"))
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

    const prosePlaceholders = document.querySelectorAll(
      ".ProseMirror p[data-placeholder]",
    );
    prosePlaceholders.forEach((p) => {
      if (p.getAttribute("data-placeholder") !== "Pulse Query 🫀") {
        p.setAttribute("data-placeholder", "Pulse Query 🫀");
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

// Rest of your existing functions remain the same...
function createSJPulseUI() {
  const css = `
    /* Main Theme - Deep Night */
    body {
      background: linear-gradient(135deg, #0c0c1a 0%, #1a1a2e 50%, #16213e 100%) !important;
      color: #A7B49E !important;
      font-family: 'Segoe UI', system-ui, sans-serif !important;
    }

    /* Top Header */
    header {
      background: rgba(10, 10, 20, 0.95) !important;
      backdrop-filter: blur(20px) !important;
      border-bottom: 1px solid #2a2a4a !important;
    }

    /* Main Chat Layout & Canvas - Transparent, no cascading borders */
    main {
      background: transparent !important;
      outline: none !important;
      border: none !important;
    }

    /* Prevent any nested flex-1 containers from cascading margins or borders */
    [class*="flex-1"] {
      border-color: transparent;
      box-shadow: none !important;
    }

    /* Remove focus rings and extra outlines from conversation scroll containers */
    [class*="thread-scroll-container"],
    [class*="MainContent"] {
      outline: none !important;
      box-shadow: none !important;
      border: none !important;
    }

    /* User Message Bubble - Targeted, sleek, compact */
    [data-user-message-bubble="true"],
    [data-message-author-role="user"] {
      background: linear-gradient(135deg, #25254d 0%, #343468 100%) !important;
      border: 1px solid #4a4a8a !important;
      border-radius: 14px !important;
      padding: 8px 14px !important;
      color: #D3DDCB !important;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25) !important;
      max-width: 80% !important;
    }

    /* Assistant Response Container */
    [data-message-author-role="assistant"],
    [data-chatgpt-search-unit-key*="assistant"] {
      color: #A7B49E !important;
      line-height: 1.6 !important;
    }

    /* Sidebar Shell */
    nav, [class*="sidebar-rail"], aside {
      background: rgba(10, 10, 20, 0.94) !important;
      backdrop-filter: blur(15px) !important;
      border-right: 1px solid #22223a !important;
    }

    /* Sidebar items - Compact, reset rogue pill styles */
    nav .sidebar-item,
    nav button,
    nav a {
      background: transparent;
      border: none !important;
      border-radius: 6px !important;
      box-shadow: none !important;
      color: #A7B49E !important;
      transition: background 0.15s ease, color 0.15s ease !important;
    }

    nav .sidebar-item:hover,
    nav button:hover,
    nav a:hover {
      background: rgba(100, 108, 255, 0.14) !important;
      color: #ffffff !important;
    }

    /* Active / Selected Chat in Sidebar - Crystal clear visibility */
    nav .sidebar-item[aria-current="page"],
    nav .sidebar-item:has([aria-current="page"]),
    nav [data-app-action-sidebar-thread-selected="true"],
    nav [data-sidebar-cycle-item][aria-current="page"],
    nav [data-sidebar-chatgpt-conversation-key]:has([aria-current="page"]) .sidebar-item,
    nav [data-sidebar-chatgpt-conversation-key]:has([aria-current="page"]) a,
    nav li:has([aria-current="page"]) {
      background: linear-gradient(90deg, rgba(100, 108, 255, 0.28) 0%, rgba(42, 42, 90, 0.45) 100%) !important;
      border: 1px solid rgba(100, 108, 255, 0.5) !important;
      border-left: 3px solid #646cff !important;
      border-radius: 6px !important;
      color: #ffffff !important;
      box-shadow: 0 2px 12px rgba(100, 108, 255, 0.18) !important;
    }

    nav .sidebar-item[aria-current="page"] *,
    nav .sidebar-item:has([aria-current="page"]) *,
    nav [data-app-action-sidebar-thread-selected="true"] *,
    nav [data-sidebar-chatgpt-conversation-key]:has([aria-current="page"]) * {
      color: #ffffff !important;
      font-weight: 600 !important;
    }

    /* Neutralize .text-base inside nav/sidebar */
    nav .text-base,
    nav [class*="text-"] {
      border: none !important;
      box-shadow: none !important;
      padding: 0 !important;
      margin: 0 !important;
    }

    /* Input & Composer Area */
    form [contenteditable="true"],
    form textarea,
    [data-testid*="textarea"] {
      background: transparent !important;
      color: #D3DDCB !important;
      font-size: 14px !important;
    }

    /* Outer composer pill */
    form > div {
      background: rgba(18, 18, 36, 0.95) !important;
      border: 1px solid #36365a !important;
      border-radius: 18px !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35) !important;
    }

    form > div:focus-within {
      border-color: #646cff !important;
      box-shadow: 0 0 0 1px #646cff, 0 4px 20px rgba(100, 108, 255, 0.2) !important;
    }

    /* Placeholder in ProseMirror */
    .ProseMirror p.placeholder::before {
      content: "Pulse Query 🫀" !important;
      color: #A7B49E !important;
      opacity: 0.65 !important;
    }

    /* Fix bottom black cutoff strip */
    .background-uNUrfY,
    [class*="surface-nr8PSS"],
    div[class*="pointer-events-none"][class*="bottom-0"] {
      background: transparent !important;
    }

    /* Send & action buttons */
    button[data-testid*="send"] {
      background: linear-gradient(135deg, #646cff 0%, #747bff 100%) !important;
      border: none !important;
      border-radius: 10px !important;
      color: white !important;
      transition: all 0.2s ease !important;
    }

    button[data-testid*="send"]:hover {
      transform: translateY(-1px) !important;
      box-shadow: 0 4px 15px rgba(100, 108, 255, 0.4) !important;
    }

    /* Code Blocks */
    pre, pre code, [class*="code-block"] {
      background: #121224 !important;
      border: 1px solid #282846 !important;
      border-radius: 8px !important;
      color: #c0ceb8 !important;
    }

    /* Inline code */
    :not(pre) > code {
      background: rgba(100, 108, 255, 0.12) !important;
      color: #9cb4dd !important;
      padding: 2px 5px !important;
      border-radius: 4px !important;
      border: 1px solid rgba(100, 108, 255, 0.2) !important;
    }

    /* Copy/Yank button */
    button:has(> div > svg), button[class*="copy"] {
      background: rgba(100, 108, 255, 0.1) !important;
      border: 1px solid #646cff !important;
      border-radius: 8px !important;
      color: #646cff !important;
      transition: all 0.2s ease !important;
    }

    button:has(> div > svg):hover, button[class*="copy"]:hover {
      background: #646cff !important;
      color: white !important;
    }

    /* Scrollbars */
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: #2a2a4a;
      border-radius: 3px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #646cff;
    }

    /* Loading Animation */
    [class*="animate-spin"] {
      color: #646cff !important;
    }

    /* Typography hierarchy */
    h1, h2, h3, h4, h5, h6 {
      color: #e0eade !important;
    }

    p, span, li, td, th, label {
      color: #A7B49E;
    }

    strong, b {
      color: #e6efe3 !important;
    }

    input, select, option {
      color: #A7B49E !important;
    }

    ::placeholder {
      color: #A7B49E !important;
      opacity: 0.65 !important;
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

function createVariantThemes() {
  return {
    cyberpunk: `
      body {
        background: linear-gradient(135deg, #0a0a0a 0%, #1a0033 100%) !important;
        color: #A7B49E !important;
      }
      [data-user-message-bubble="true"],
      [data-message-author-role="user"] {
        background: linear-gradient(135deg, #1a0033 0%, #330066 100%) !important;
        border: 1px solid #00ff88 !important;
        box-shadow: 0 0 15px rgba(0, 255, 136, 0.25) !important;
        color: #A7B49E !important;
      }
      nav .sidebar-item[aria-current="page"],
      nav .sidebar-item:has([aria-current="page"]),
      nav [data-app-action-sidebar-thread-selected="true"] {
        border-left: 3px solid #00ff88 !important;
        background: rgba(0, 255, 136, 0.18) !important;
      }
      button[data-testid*="send"] {
        background: linear-gradient(135deg, #ff00ff 0%, #00ff88 100%) !important;
      }
    `,
    "midnight-blue": `
      body {
        background: linear-gradient(135deg, #0f1a2b 0%, #1e3a5f 100%) !important;
        color: #A7B49E !important;
      }
      [data-user-message-bubble="true"],
      [data-message-author-role="user"] {
        background: linear-gradient(135deg, #1e3a5f 0%, #2e4a7f 100%) !important;
        border: 1px solid #3a5f8f !important;
        color: #A7B49E !important;
      }
      nav .sidebar-item[aria-current="page"],
      nav .sidebar-item:has([aria-current="page"]),
      nav [data-app-action-sidebar-thread-selected="true"] {
        border-left: 3px solid #3a5f8f !important;
        background: rgba(30, 58, 95, 0.45) !important;
      }
    `,
    amethyst: `
      body {
        background: linear-gradient(135deg, #1a102b 0%, #3a1f5f 100%) !important;
        color: #A7B49E !important;
      }
      [data-user-message-bubble="true"],
      [data-message-author-role="user"] {
        background: linear-gradient(135deg, #2a1f4f 0%, #4a2f7f 100%) !important;
        border: 1px solid #6b46c1 !important;
        color: #A7B49E !important;
      }
      nav .sidebar-item[aria-current="page"],
      nav .sidebar-item:has([aria-current="page"]),
      nav [data-app-action-sidebar-thread-selected="true"] {
        border-left: 3px solid #6b46c1 !important;
        background: rgba(107, 70, 193, 0.35) !important;
      }
    `,
    "deep-space": `
      body {
        background: linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #0f3460 100%) !important;
        color: #A7B49E !important;
      }
      [data-user-message-bubble="true"],
      [data-message-author-role="user"] {
        background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%) !important;
        border: 1px solid #4cc9f0 !important;
        color: #A7B49E !important;
      }
      nav .sidebar-item[aria-current="page"],
      nav .sidebar-item:has([aria-current="page"]),
      nav [data-app-action-sidebar-thread-selected="true"] {
        border-left: 3px solid #4cc9f0 !important;
        background: rgba(76, 201, 240, 0.25) !important;
      }
    `,
  };
}

// Initialize
if (window.location.hostname.includes("chatgpt.com")) {
  let currentVariant = "default";
  const variants = createVariantThemes();
  let cleanupPlaceholders;
  let cleanupFavicon;

  // Apply main theme
  createSJPulseUI();
  replaceBranding();
  cleanupFavicon = initFaviconReplacement();
  cleanupPlaceholders = initPlaceholderReplacement();

  // --- Toggle System ---

  // Toggle between original and SJ Pulse UI
  mapkey("ts", "Toggle SJ Pulse/ChatGPT UI", () => {
    const style = document.getElementById("sjPulse-night-theme");
    if (style) {
      style.remove();
      if (cleanupPlaceholders) cleanupPlaceholders();
      if (cleanupFavicon) cleanupFavicon();
      Front.showBanner("🔵 Original ChatGPT UI Restored");
    } else {
      createSJPulseUI();
      cleanupPlaceholders = initPlaceholderReplacement();
      cleanupFavicon = initFaviconReplacement();
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
        [data-user-message-bubble="true"],
        [data-message-author-role="user"] { 
          font-size: 13px !important; 
          padding: 6px 10px !important; 
          border-radius: 10px !important;
        }
        [data-message-author-role="assistant"],
        [data-chatgpt-search-unit-key*="assistant"],
        .text-size-chat {
          font-size: 13px !important;
          line-height: 1.45 !important;
        }
        nav .sidebar-item, nav button, nav a {
          padding-top: 2px !important;
          padding-bottom: 2px !important;
          font-size: 12px !important;
        }
        pre, pre code {
          font-size: 12px !important;
          padding: 8px 12px !important;
        }
        form > div {
          padding: 4px 8px !important;
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
