//w: 2╭──────────── Block Start ────────────╮
// t: 📋 Telegram Chat Link & Info Copier (Normal & Insert Mode)

function extractTelegramChatInfo(element) {
  let chatUrl = "";

  if (element.tagName === "A" && element.getAttribute("href")) {
    chatUrl = element.href;
  } else if (element.querySelector("a[href]")) {
    chatUrl = element.querySelector("a[href]").href;
  } else if (element.closest("a[href]")) {
    chatUrl = element.closest("a[href]").href;
  } else {
    const peerId = element.getAttribute("data-peer-id") || element.dataset?.peerId;
    if (peerId) {
      const base = window.location.origin + window.location.pathname;
      chatUrl = `${base}#${peerId}`;
    }
  }

  // Extract Chat Name, Time, and Last Message from sidebar item
  const titleEl = element.querySelector(".peer-title, .user-title, .ListItem-title, .title");
  const timeEl = element.querySelector(".message-time, .time");
  const subtitleEl = element.querySelector(".dialog-subtitle, .row-subtitle, .subtitle");

  const title = titleEl ? titleEl.innerText.split("\n")[0].trim() : "";
  const time = timeEl ? timeEl.innerText.trim() : "";
  const lastMessage = subtitleEl ? subtitleEl.innerText.trim().replace(/\s+/g, " ") : "";

  const parts = [];
  if (title) parts.push(`Chat: ${title}`);
  if (chatUrl) parts.push(`Link: ${chatUrl}`);
  if (time) parts.push(`Time: ${time}`);
  if (lastMessage) parts.push(`Last Message: ${lastMessage}`);

  return {
    chatUrl,
    title,
    time,
    lastMessage,
    formatted: parts.join("\n") || chatUrl
  };
}

// Copy image binary data to system clipboard as PNG
async function copyImageToClipboard(imgElement) {
  if (!imgElement) return false;
  try {
    let blob = null;

    // Method 1: Render onto canvas to obtain a clean PNG Blob
    try {
      const canvas = document.createElement("canvas");
      canvas.width = imgElement.naturalWidth || imgElement.width || 300;
      canvas.height = imgElement.naturalHeight || imgElement.height || 300;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(imgElement, 0, 0);

      blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    } catch (canvasErr) {
      // Method 2: Fallback to direct blob fetch if canvas tainted
      if (imgElement.src) {
        const res = await fetch(imgElement.src);
        blob = await res.blob();
      }
    }

    if (!blob) {
      api.Front.showBanner("⚠️ Could not generate image data");
      return false;
    }

    // Ensure format is image/png for universal clipboard compatibility
    if (blob.type !== "image/png") {
      const imgBitmap = await createImageBitmap(blob);
      const canvas = document.createElement("canvas");
      canvas.width = imgBitmap.width;
      canvas.height = imgBitmap.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(imgBitmap, 0, 0);
      blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    }

    await navigator.clipboard.write([
      new ClipboardItem({ "image/png": blob })
    ]);
    api.Front.showBanner("📷 Copied Image to clipboard!");
    return true;
  } catch (err) {
    api.Front.showBanner(`⚠️ Image copy error: ${err.message}`);
    return false;
  }
}

// Extract pure message text from a message bubble
function extractTelegramMessageText(element) {
  if (!element) return "";
  const bubble = element.closest(".bubble, .Message") || element;
  const msg = bubble.querySelector(".message, .media-caption, .translatable-message, .text-content, .attachment-description") || bubble;
  const clone = msg.cloneNode(true);
  clone.querySelectorAll(".time, .time-inner, .message-time, .status-icon, .reactions, .bubble-tail, .clearfix, svg").forEach(e => e.remove());
  return (clone.innerText || clone.textContent || "").trim();
}

// Handler for hint-based message content (smart text or image copy)
function triggerTelegramMessageHints() {
  if (!window.location.hostname.includes("telegram.org")) {
    api.Front.showBanner("⚠️ Not on Telegram Web");
    return;
  }

  // Unfocus message input if focused so hints render and respond cleanly
  if (document.activeElement && (document.activeElement.isContentEditable || ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName))) {
    document.activeElement.blur();
  }

  const selector = ".bubble:not(.service) .attachment.media-container, .bubble:not(.service) img.media-photo, .bubble:not(.service) img.media-sticker, .bubble:not(.service) .message, .bubble:not(.service) .media-caption, .Message .media-container, .Message .text-content, .bubble.photo:not(.service)";

  api.Hints.create(selector, async function (element) {
    // 1. If element is an image or image container, copy image directly
    const img = element.tagName === "IMG" ? element : element.querySelector("img.media-photo, img.media-sticker, img");
    const isImageTarget = element.classList.contains("media-container") || element.classList.contains("media-photo") || element.classList.contains("photo") || (element.tagName === "IMG");

    if (img && isImageTarget) {
      await copyImageToClipboard(img);
      return;
    }

    // 2. Otherwise extract clean message text
    const text = extractTelegramMessageText(element);
    if (text) {
      api.Clipboard.write(text);
      const preview = text.length > 40 ? text.slice(0, 40) + "..." : text;
      api.Front.showBanner(`📋 Copied Message: ${preview}`);
    } else if (img) {
      // Fallback: If no text found, copy the image
      await copyImageToClipboard(img);
    } else {
      api.Front.showBanner("⚠️ No content found in selected message");
    }
  });
}

// Handler for hint-based chat selection
function triggerTelegramHints(copyFullInfo = true) {
  if (!window.location.hostname.includes("telegram.org")) {
    api.Front.showBanner("⚠️ Not on Telegram Web");
    return;
  }

  // Unfocus message input if focused so hints render and respond cleanly
  if (document.activeElement && (document.activeElement.isContentEditable || ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName))) {
    document.activeElement.blur();
  }

  const selector = "a.chatlist-chat, a.chat-list-item, a[data-peer-id]";

  api.Hints.create(selector, function (element) {
    const info = extractTelegramChatInfo(element);
    const toCopy = copyFullInfo ? info.formatted : info.chatUrl;

    if (toCopy) {
      api.Clipboard.write(toCopy);
      const preview = info.title ? `[${info.title}]` : info.chatUrl;
      api.Front.showBanner(`📋 Copied Telegram: ${preview}`);
    } else {
      api.Front.showBanner("⚠️ Could not extract Telegram chat info");
    }
  });
}

// Handler for copying current active chat directly
function copyActiveTelegramChat(copyFullInfo = true) {
  if (!window.location.hostname.includes("telegram.org")) {
    api.Front.showBanner("⚠️ Not on Telegram Web");
    return;
  }

  // Unfocus message input if focused
  if (document.activeElement && (document.activeElement.isContentEditable || ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName))) {
    document.activeElement.blur();
  }

  // Look for active item in sidebar, or fall back to current chat header
  const activeEl = document.querySelector("a.chatlist-chat.active, a.chat-list-item.active");
  let info = null;

  if (activeEl) {
    info = extractTelegramChatInfo(activeEl);
  } else {
    const title = document.querySelector(".chat-info .peer-title, .top .peer-title, .chat-title")?.innerText?.trim() || "";
    const chatUrl = window.location.href;
    const parts = [];
    if (title) parts.push(`Chat: ${title}`);
    if (chatUrl) parts.push(`Link: ${chatUrl}`);
    info = {
      chatUrl,
      title,
      time: "",
      lastMessage: "",
      formatted: parts.join("\n") || chatUrl
    };
  }

  const toCopy = copyFullInfo ? info.formatted : info.chatUrl;
  if (toCopy && (info.chatUrl.includes("#") || window.location.href.includes("#"))) {
    api.Clipboard.write(toCopy);
    const preview = info.title ? `[${info.title}]` : info.chatUrl;
    api.Front.showBanner(`📋 Copied Active Telegram: ${preview}`);
  } else {
    api.Front.showBanner("⚠️ No active chat selected");
  }
}

// ──────── NORMAL MODE MAPPINGS ────────
api.mapkey("yo", "📋 Copy Telegram message text using hints", () => triggerTelegramMessageHints());
api.mapkey("yc", "📋 Copy Telegram chat info (Name, Link, Time, Message) using hints", () => triggerTelegramHints(true));
api.mapkey("yC", "📋 Copy active Telegram chat info directly", () => copyActiveTelegramChat(true));
api.mapkey("yt", "📋 Copy Telegram chat URL only using hints", () => triggerTelegramHints(false));
api.mapkey("yT", "📋 Copy active Telegram chat URL directly", () => copyActiveTelegramChat(false));

// ──────── INSERT MODE MAPPINGS (works while focused in message inbox) ────────
api.imapkey(",yo", "📋 Copy Telegram message text using hints (Insert mode)", () => triggerTelegramMessageHints(), { domain: /telegram\.org/i });
api.imapkey("yC", "📋 Copy active Telegram chat info directly (Insert mode)", () => copyActiveTelegramChat(true), { domain: /telegram\.org/i });
api.imapkey("yT", "📋 Copy active Telegram chat URL directly (Insert mode)", () => copyActiveTelegramChat(false), { domain: /telegram\.org/i });
api.imapkey(",yc", "📋 Copy Telegram chat info using hints (Insert mode)", () => triggerTelegramHints(true), { domain: /telegram\.org/i });
api.imapkey(",yC", "📋 Copy active Telegram chat info directly (Insert mode)", () => copyActiveTelegramChat(true), { domain: /telegram\.org/i });
api.imapkey(",yt", "📋 Copy Telegram chat URL only using hints (Insert mode)", () => triggerTelegramHints(false), { domain: /telegram\.org/i });
api.imapkey(",yT", "📋 Copy active Telegram chat URL directly (Insert mode)", () => copyActiveTelegramChat(false), { domain: /telegram\.org/i });
//w: 2╰───────────── Block End ─────────────╯
