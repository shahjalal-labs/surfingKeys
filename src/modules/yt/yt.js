// == YouTube Language Toggler ==
// Toggle between original language and English (USA) on YouTube videos
// Use key: ayy (toggle) or ayo/ayu (specific language)
// Created: 2024

const { mapkey, Front } = api;

// Language codes and their display names
const YOUTUBE_LANGUAGES = {
  original: {
    code: "original",
    name: "Original",
    label: "🎬 Original Language",
  },
  en: {
    code: "en",
    name: "English (USA)",
    label: "🇺🇸 English (USA)",
  },
};

class YouTubeLanguageToggler {
  constructor() {
    this.currentLanguage = null;
    this.isYouTube = window.location.hostname.includes("youtube.com");
    this.observer = null;
  }

  // Initialize the toggler
  init() {
    if (!this.isYouTube) return;

    this.detectCurrentLanguage();
    this.setupObserver();
    this.registerKeys();
  }

  // Detect current language from YouTube's settings
  detectCurrentLanguage() {
    // Method 1: Check URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("hl");

    // Method 2: Check YouTube's language dropdown if visible
    const languageButton = document.querySelector(
      '[aria-label*="language"], [aria-label*="Language"]',
    );

    if (langParam === "en" || langParam === "en-US") {
      this.currentLanguage = YOUTUBE_LANGUAGES.en;
    } else if (languageButton) {
      const buttonText =
        languageButton.textContent ||
        languageButton.getAttribute("aria-label") ||
        "";
      if (buttonText.includes("English") || buttonText.includes("USA")) {
        this.currentLanguage = YOUTUBE_LANGUAGES.en;
      } else {
        this.currentLanguage = YOUTUBE_LANGUAGES.original;
      }
    } else {
      // Default detection based on typical YouTube behavior
      const htmlLang = document.documentElement.lang;
      if (htmlLang === "en" || htmlLang === "en-US") {
        this.currentLanguage = YOUTUBE_LANGUAGES.en;
      } else {
        this.currentLanguage = YOUTUBE_LANGUAGES.original;
      }
    }

    Front.showBanner(`🌐 Current: ${this.currentLanguage.label}`);
  }

  // Toggle between languages
  toggleLanguage() {
    if (!this.isYouTube) {
      Front.showBanner("⚠️ This only works on YouTube");
      return;
    }

    if (!this.currentLanguage) {
      this.detectCurrentLanguage();
    }

    const targetLanguage =
      this.currentLanguage.code === "original"
        ? YOUTUBE_LANGUAGES.en
        : YOUTUBE_LANGUAGES.original;

    this.setLanguage(targetLanguage);
  }

  // Set specific language
  setLanguage(language) {
    if (!this.isYouTube) {
      Front.showBanner("⚠️ This only works on YouTube");
      return;
    }

    this.currentLanguage = language;
    Front.showBanner(`✅ Switched to: ${language.label}`);

    // Different methods to change language
    this.tryLanguageChangeMethods(language);
  }

  // Try multiple methods to change YouTube language
  tryLanguageChangeMethods(language) {
    // Method 1: Direct URL parameter change (works for captions/subtitles)
    if (window.location.pathname.includes("/watch")) {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);

      if (language.code === "original") {
        // Remove caption track parameter for original
        params.delete("cc_load_policy");
        params.delete("cc_lang_pref");
      } else {
        // Set English captions
        params.set("cc_load_policy", "1");
        params.set("cc_lang_pref", "en");
      }

      url.search = params.toString();
      window.location.href = url.toString();
      return;
    }

    // Method 2: Click language settings if available
    this.openLanguageSettings(language);
  }

  // Open YouTube's language settings
  openLanguageSettings(language) {
    // Try to find and click the language settings
    const selectors = [
      'button[aria-label*="language"]',
      'button[aria-label*="Language"]',
      "ytd-settings-button button",
      "#guide-button",
      'yt-icon-button[aria-label="Settings"]',
    ];

    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) {
        element.click();
        setTimeout(() => this.selectLanguageInMenu(language), 300);
        break;
      }
    }
  }

  // Select language in YouTube's menu
  selectLanguageInMenu(language) {
    const languageMenuItems = document.querySelectorAll(
      "ytd-menu-popup-renderer ytd-menu-service-item-renderer, " +
        "tp-yt-paper-listbox ytd-toggle-item-renderer",
    );

    for (const item of languageMenuItems) {
      const text = item.textContent || item.innerText || "";

      if (language.code === "original") {
        // Look for original/auto option
        if (
          text.includes("Original") ||
          text.includes("Auto") ||
          text.includes("Off")
        ) {
          item.click();
          Front.showBanner(`✅ Set to: ${language.label}`);
          break;
        }
      } else if (language.code === "en") {
        // Look for English option
        if (
          text.includes("English") ||
          text.includes("en") ||
          text.includes("USA")
        ) {
          item.click();
          Front.showBanner(`✅ Set to: ${language.label}`);
          break;
        }
      }
    }
  }

  // Set up mutation observer to detect language changes
  setupObserver() {
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "lang"
        ) {
          this.detectCurrentLanguage();
        }
      });
    });

    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
  }

  // Register SurfingKeys shortcuts
  registerKeys() {
    // Main toggle: ayy
    mapkey(
      "ayy",
      "🌐 Toggle YouTube language (Original ↔ English USA)",
      () => {
        this.toggleLanguage();
      },
    );

    // Direct shortcuts
    mapkey("ayo", "🎬 Switch to Original language", () => {
      this.setLanguage(YOUTUBE_LANGUAGES.original);
    });

    mapkey("ayu", "🇺🇸 Switch to English (USA)", () => {
      this.setLanguage(YOUTUBE_LANGUAGES.en);
    });

    // Display current language status
    mapkey("ays", "📊 Show current YouTube language", () => {
      this.detectCurrentLanguage();
    });
  }

  // Clean up
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Initialize when on YouTube
if (window.location.hostname.includes("youtube.com")) {
  const languageToggler = new YouTubeLanguageToggler();
  languageToggler.init();

  // Make it accessible globally for debugging
  window.ytLanguageToggler = languageToggler;

  // Also add a visual indicator in the page
  const indicator = document.createElement("div");
  indicator.id = "sk-yt-language-indicator";
  indicator.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 12px;
    z-index: 10000;
    font-family: Arial, sans-serif;
    display: none;
  `;
  document.body.appendChild(indicator);

  // Update indicator on language change
  const updateIndicator = () => {
    const lang = languageToggler.currentLanguage;
    if (lang) {
      indicator.textContent = `🌐 ${lang.label}`;
      indicator.style.display = "block";
      setTimeout(() => {
        indicator.style.display = "none";
      }, 3000);
    }
  };

  // Override the setLanguage method to update indicator
  const originalSetLanguage = languageToggler.setLanguage.bind(languageToggler);
  languageToggler.setLanguage = function (lang) {
    originalSetLanguage(lang);
    updateIndicator();
  };
}

// Alternative simplified version if above doesn't work
function toggleYouTubeCaptions() {
  if (!window.location.hostname.includes("youtube.com")) {
    Front.showBanner("⚠️ Only works on YouTube");
    return;
  }

  // Method 1: Try to click the caption button
  const captionButton = document.querySelector(
    '.ytp-subtitles-button, [aria-label*="subtitles"], [aria-label*="Subtitles"]',
  );
  if (captionButton) {
    captionButton.click();
    Front.showBanner("📺 Toggled captions");
    return;
  }

  // Method 2: Use YouTube's keyboard shortcuts
  // 'c' toggles captions in YouTube player
  if (document.querySelector("video")) {
    const event = new KeyboardEvent("keydown", {
      key: "c",
      code: "KeyC",
      keyCode: 67,
      bubbles: true,
    });
    document.activeElement.dispatchEvent(event);
    Front.showBanner("📺 Toggled captions (keyboard shortcut)");
    return;
  }

  // Method 3: Change URL parameters
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);

  if (params.get("cc_load_policy") === "1") {
    params.delete("cc_load_policy");
    Front.showBanner("🎬 Original language (captions off)");
  } else {
    params.set("cc_load_policy", "1");
    params.set("cc_lang_pref", "en");
    Front.showBanner("🇺🇸 English captions on");
  }

  url.search = params.toString();
  window.location.href = url.toString();
}

// Alternative simplified toggle
mapkey(
  "ayt",
  "📺 Toggle YouTube captions (quick method)",
  toggleYouTubeCaptions,
);
