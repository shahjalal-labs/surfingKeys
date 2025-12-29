# srcFullContent.md

## 🌲 Full Project Structure

```bash
/home/sj/dotfiles-sj/surfingKeys
├── bun.lock
├── note.md
├── package.json
├── random.md
├── README.md
├── src
│   ├── modules
│   │   ├── API.md
│   │   ├── defaultRemapped.js
│   │   ├── fzfFinder.js
│   │   ├── github
│   │   │   ├── github.js
│   │   │   └── githubNavigator.js
│   │   ├── hoverClick
│   │   │   └── hoverClick.js
│   │   ├── insertMode
│   │   │   └── textExpanse
│   │   │       └── textExpanse.js
│   │   ├── markdown
│   │   │   └── markdown.js
│   │   ├── opener
│   │   │   ├── aiOpener.js
│   │   │   ├── islamicOpener.js
│   │   │   ├── mernOpener.js
│   │   │   ├── opener.js
│   │   │   ├── PH
│   │   │   │   ├── PhHelp
│   │   │   │   │   └── phHelp.js
│   │   │   │   └── PhWeb
│   │   │   │       └── phWeb.js
│   │   │   ├── phOpener.js
│   │   │   ├── resourceOpener.js
│   │   │   ├── smtFigma
│   │   │   │   └── smtFigma.js
│   │   │   ├── socialOpener.js
│   │   │   └── webDevOpener.js
│   │   ├── style
│   │   │   ├── chatgpt.js
│   │   │   ├── chatgpt_prev.js
│   │   │   ├── deepseek.js
│   │   │   └── google.js
│   │   ├── tab.js
│   │   ├── testDate.js
│   │   ├── yank
│   │   │   ├── imgYank.js
│   │   │   └── urlYanker.js
│   │   └── yt
│   │       └── yt.js
│   └── settings
│       ├── settings.js
│       └── theme.js
├── structure.md
├── surfingkeys.bundle.js
└── surfingkeys.js

17 directories, 38 files
```

## 📁 src Module Tree

```bash
/home/sj/dotfiles-sj/surfingKeys/src
├── assets
│   └── screenshots
│       ├── ss-12-42-27-AM_03-07-25.png
│       └── ss-12-59-05-AM_03-07-25.png
├── modules
│   ├── API.md
│   ├── defaultRemapped.js
│   ├── fzfFinder.js
│   ├── github
│   │   ├── github.js
│   │   └── githubNavigator.js
│   ├── hoverClick
│   │   └── hoverClick.js
│   ├── insertMode
│   │   └── textExpanse
│   │       └── textExpanse.js
│   ├── markdown
│   │   └── markdown.js
│   ├── opener
│   │   ├── aiOpener.js
│   │   ├── islamicOpener.js
│   │   ├── mernOpener.js
│   │   ├── opener.js
│   │   ├── PH
│   │   │   ├── PhHelp
│   │   │   │   └── phHelp.js
│   │   │   └── PhWeb
│   │   │       └── phWeb.js
│   │   ├── phOpener.js
│   │   ├── resourceOpener.js
│   │   ├── smtFigma
│   │   │   └── smtFigma.js
│   │   ├── socialOpener.js
│   │   └── webDevOpener.js
│   ├── style
│   │   ├── chatgpt.js
│   │   ├── chatgpt_prev.js
│   │   ├── deepseek.js
│   │   └── google.js
│   ├── tab.js
│   ├── testDate.js
│   ├── yank
│   │   ├── imgYank.js
│   │   └── urlYanker.js
│   └── yt
│       └── yt.js
└── settings
    ├── settings.js
    └── theme.js

18 directories, 32 files
```

## 📋 schema.prisma

```prisma
```

## 📦 package.json

```json
{
  "scripts": {
    "build": "bun run esbuild surfingkeys.js --bundle --outfile=surfingkeys.bundle.js --format=iife"
  },
  "dependencies": {
    "dayjs": "^1.11.18",
    "dotenv": "^17.2.1",
    "fuse.js": "^7.1.0",
    "turndown": "^7.2.0"
  },
  "devDependencies": {
    "esbuild": "^0.25.5"
  }
}
```

## 📄 settings/theme.js

```javascript
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
}`;
//w: (end)  ╰────────────  settings.theme ────────────╯
```

## 📄 settings/settings.js

```javascript
api.Hints.setCharacters("asdjkluiopwermnhgzx,cvq'"); // for right hand  hints will show for now right hands

settings.startToShowEmoji = 1;
```

## 📄 modules/markdown/markdown.js

```javascript

```

## 📄 modules/yt/yt.js

```javascript
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
```

## 📄 modules/insertMode/textExpanse/textExpanse.js

```javascript
// Block chatgpt.com completely
if (location.hostname === "chatgpt.com") {
  return;
}

const { imapkey } = api;

function textPaster(keys, desc, text) {
  imapkey(keys, desc, function () {
    document.execCommand("insertText", false, text);
  });
}

// insert fullname
textPaster(",nn", "Insert Fullname: Md. Shahjalal", "Md. Shahjalal");

// insert firstname:
textPaster(",nf", "Insert Firstname: Md.", "Md. ");

// insert root mail
textPaster(
  ",er",
  "insert root mail muhommodshah...",
  "muhommodshahjalal@gmail.com",
);

// insert mail dev.shah
textPaster(",ed", "insert mail dev.shah...", "dev.shahjalal@gmail.com");

// insert mail javedkarim.codes...
textPaster(
  ",ej",
  "insert mail javedkarim.codes...",
  "javedkarim.codes@gmail.com",
);

//w: (start)╭──────────── insert backend mail ────────────╮
textPaster(
  ",eb",
  "Insert Backend Mail: shahjalal.backend@gmail.com",
  "shahjalal.backend@gmail.com",
);
//w: (end)  ╰──────────── insert backend mail ────────────╯

// Insert BL Phn: 01989
textPaster(",pb", "Insert BL Phn: 01989", "01989763775");

// Insert TEL Phn: 01540
textPaster(",pt", "Insert TEL Phn: 01540", "01540325659");

// Insert Salam
textPaster(",is", "Insert Salam", "Assalamu Alaikum,");
```

## 📄 modules/opener/islamicOpener.js

```javascript
//t: isami music playlist
//
/* api.mapkey("su", "isami music playlist", function () {
  window.open(
    "https://www.youtube.com/watch?v=rL6qQ49hBlQ&list=PLXOE5SEv6NpDUSPNxCu1fFTfBi8HZDeJM",
    "_blank",
  );
}); */

//t: Open Wedding Nasheed
api.mapkey("sj", "Open Wedding Nasheed", function () {
  window.open(
    "https://www.youtube.com/watch?v=dWBgNHT4ipE&ab_channel=HuzaifahNasheeds",
    "_blank",
  );
});

//t: Open Quran
//
api.mapkey("opq", "Open Quran", function () {
  window.open("https://quran.com", "_blank");
});

//w: ╭──────────── Block Start ────────────╮
//t: open shariyah solution ahmadullah
api.mapkey("ops", "open shariyah solution ahmadullah", function () {
  if (
    window.location.hostname.includes("youtube.com") &&
    window.location.pathname.toLowerCase().includes("@sheikhahmadullahofficial")
  ) {
    window.location.href =
      "https://www.youtube.com/@sheikhahmadullahofficial/streams";
  } else {
    window.open(
      "https://www.youtube.com/@sheikhahmadullahofficial/streams",
      "_blank",
    );
  }
});
//w: ╰───────────── Block End ─────────────╯
```

## 📄 modules/opener/mernOpener.js

```javascript
//w: opening daisy ui
```

## 📄 modules/opener/PH/PhHelp/phHelp.js

```javascript
api.mapkey("phg", "PH b11 github repositories", function () {
  window.open("https://github.com/ProgrammingHero1?tab=repositories", "_blank");
});

//t: fbLevel1
api.mapkey("phc", "fbLevel1", function () {
  window.open("https://www.facebook.com/groups/programmingHero", "_blank");
});

//t: fbLevel2
api.mapkey("ph2", "fbLevel2", function () {
  window.open("https://www.facebook.com/groups/phapollo4", "_blank");
});

//p: level1 batch 11 fb suport group
api.mapkey("phf", "fb  Level1 Batch 11 support group", function () {
  window.open("https://www.facebook.com/groups/targetwebdevcareer", "_blank");
});

api.mapkey("phs", "SCIC", function () {
  if (window.location.pathname.includes("/groups/scic11/announcements")) {
    console.log(window.location.pathname, "pathname");
    window.location.href = "https://www.facebook.com/groups/scic11/";
  } else {
    window.open(
      "https://www.facebook.com/groups/scic11/announcements",

      "_blank",
    );
  }
});
```

## 📄 modules/opener/PH/PhWeb/phWeb.js

```javascript
api.mapkey("pws", "SCIC", function () {
  if (window.location.pathname.includes("/groups/scic11/announcements")) {
    console.log(window.location.pathname, "pathname");
    window.location.href =
      "https://web.programming-hero.com/scic-11/video/scic-11-0-2-tips-to-get-the-best-out-of-scic";
  } else {
    window.open(
      "https://web.programming-hero.com/scic-11/video/scic-11-0-2-tips-to-get-the-best-out-of-scic",

      "_blank",
    );
  }
});

//p: outline SCIC
api.mapkey("pwo", "outline SCIC", function () {
  window.open(
    "https://web.programming-hero.com/688f7b564965ce7350b23f35/course-outline",
    "_blank",
  );
});
```

## 📄 modules/opener/socialOpener.js

```javascript
//w: ╭──────────── Block Start ────────────╮

//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
// p: open discord session announcement
api.mapkey("ouc", "open gContacts", function () {
  if (window.location.hostname.includes("contacts")) {
    window.location.href = "https://contacts.google.com/new";
  } else {
    window.location.href = "https://contacts.google.com/";
    window.open("https://contacts.google.com/new", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
api.mapkey("oux", "open twitter @shahjalal_labs", function () {
  if (window.location.hostname.includes("x.com")) {
    window.location.href = "https://x.com/shahjalal_labs ";
  } else {
    window.open("https://x.com/shahjalal_labs ", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯
//

//
//w: ╭──────────── Block Start ────────────╮
//t: facebook
api.mapkey("ouf", "Open Facebook", function () {
  window.open("https://www.facebook.com", "_blank");
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
api.mapkey("oue", "email inbox opening", function () {
  window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", "_blank");
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
//t: open whatsApp
api.mapkey("ouw", "whatsApp", function () {
  window.open("https://web.whatsapp.com/", "_blank");
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
// p: open zoom session
api.mapkey("oul", "open linkedin", function () {
  if (window.location.hostname.includes("linkedin")) {
    window.location.href = "https://www.linkedin.com/in/shahjalal-labs/";
  } else {
    window.open("https://www.linkedin.com/in/shahjalal-labs/", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
// p: open discord session announcement
api.mapkey("oud", "open ejp discord sesssion announcement", function () {
  if (window.location.hostname.includes("discord")) {
    window.location.href =
      "https://discord.com/channels/1391805056957026364/1391809512100462592";
  } else {
    window.open(
      "https://discord.com/channels/1391805056957026364/1391809512100462592",
      "_blank",
    );
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
// p: open zoom session
api.mapkey("anz", "open ejp discord sesssion announcement", function () {
  if (window.location.hostname.includes("zoom")) {
    window.location.href = "https://www.zoom.us/join";
  } else {
    window.open("https://www.zoom.us/profile", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
//t: open youtube @shahjalal-labs
api.mapkey("ouy", "open yt @shahjalal-labs", function () {
  if (window.location.hostname.includes("youtube")) {
    window.location.href = "https://www.youtube.com/@shahjalal-labs";
  } else {
    window.open("https://www.youtube.com/@shahjalal-labs", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
//t: open portfolio shahjalal-labs
api.mapkey("oup", "open portfolio shahjalal-labs", function () {
  if (window.location.hostname.includes("shahjalal-labs.surge.sh")) {
    window.location.href = "https://shahjalal-labs.surge.sh";
  } else {
    window.open("https://shahjalal-labs.surge.sh", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯
//
//
//w: ╭──────────── Block Start ────────────╮
//t: open resume  shahjalal-labs
api.mapkey("our", "open resume root", function () {
  if (window.location.hostname.includes("drive.google.com")) {
    window.location.href =
      "https://drive.google.com/file/d/1eKx1OO7p2tvSIxPKD1aDHu6sgPkVcJwN/view";
  } else {
    window.open(
      "https://drive.google.com/file/d/1eKx1OO7p2tvSIxPKD1aDHu6sgPkVcJwN/view",
      "_blank",
    );
  }
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
// open ms team live
api.mapkey("out", "open ms team live", function () {
  if (window.location.hostname.includes("teams.live.com")) {
    window.location.href = "https://teams.live.com/v2/";
  } else {
    window.open("https://teams.live.com/v2/", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯
//w: ╭──────────── Block Start ────────────╮

//w: ╰───────────── Block End ─────────────╯
//w: ╭──────────── Block Start ────────────╮

//w: ╰───────────── Block End ─────────────╯
//w: ╭──────────── Block Start ────────────╮

//w: ╰───────────── Block End ─────────────╯
//w: ╭──────────── Block Start ────────────╮

//w: ╰───────────── Block End ─────────────╯
```

## 📄 modules/opener/aiOpener.js

```javascript
const { mapkey } = api;
mapkey("oac", "Open ChatGPT chk", function () {
  let newTab = window.open("https://chatgpt.com/", "_blank"); // Open ChatGPT in a new tab
  console.log(newTab, ".surfingkeys.js", 240);
  setInterval(() => {
    console.log(`hellow`);
  }, 2000);
});

//w: opening perplexity ai ai

const urlOpener = (key, desc, url) => {
  mapkey(key, desc, function () {
    const host = new URL(url).hostname;
    if (window.location.hostname === host) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  });
};

mapkey("oap", "perplexity ai", function () {
  if (window.location.hostname.includes("perplexity")) {
    window.location.href = "https://www.perplexity.ai/";
  } else {
    window.open("https://www.perplexity.ai/", "_blank");
  }
});

//w: opening gemini ai

mapkey("oaj", "gemini ai", function () {
  if (window.location.hostname.includes("gemini")) {
    window.location.href = "https://gemini.google.com/app";
  } else {
    window.open("https://gemini.google.com/app", "_blank");
  }
});

//
//t:  open deep  ai
mapkey("oad", "Deep ai", function () {
  window.open("https://deepai.org/dashboard/images", "_blank");
});

// Open deepseek
urlOpener("oas", "Open deepseek", "https://chat.deepseek.com/");

//t: open  claude ai
urlOpener("oak", "claude", "https://claude.ai/new");

// open grok ai
urlOpener("oag", "open grok ai", "https://grok.com/");

// open google audio
urlOpener("oaa", "open google audio", "https://aistudio.google.com/live");

// github copilot
urlOpener("oaq", "Open github copilot", "https://github.com/copilot");
```

## 📄 modules/opener/webDevOpener.js

```javascript
//w: ╭──────────── Block Start ────────────╮
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
api.mapkey("ocm", "open mongodb", function () {
  if (window.location.hostname.includes("mongodb")) {
    window.location.href = "https://cloud.mongodb.com";
  } else {
    window.open("https://cloud.mongodb.com", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
api.mapkey("oct", "open tailwind vite ", function () {
  if (window.location.hostname.includes("tailwindcss")) {
    window.location.href =
      "https://tailwindcss.com/docs/installation/using-vite";
  } else {
    window.open(
      "https://tailwindcss.com/docs/installation/using-vite",
      "_blank",
    );
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
api.mapkey("ocd", "open daisyUI", function () {
  if (window.location.hostname.includes("daisyui")) {
    window.location.href = "https://daisyui.com/docs/install/vite/";
  } else {
    window.open("https://daisyui.com/docs/install/vite/", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
//t:localhost
api.mapkey("ocl", "open localhost", function () {
  if (window.location.hostname.includes("localhost")) {
    window.open("http://localhost:5174/", "_blank");
  } else {
    window.open("http://localhost:5173/", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
api.mapkey("ocn", "open nextjs Docs", function () {
  if (window.location.hostname.includes("nextjs.org")) {
    window.location.href = "https://nextjs.org/docs";
  } else {
    window.open("https://nextjs.org/docs", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯
//

//w: (start)╭──────────── Fiverr Message Rewriter ────────────╮
api.mapkey("ocf", "Fiverr Message Rewriter", function () {
  if (window.location.hostname.includes("relevance-phi.vercel.app")) {
    window.location.href = "https://relevance-phi.vercel.app/";
  } else {
    window.open("https://relevance-phi.vercel.app/", "_blank");
  }
});
//w: (end)  ╰──────────── Fiverr Message Rewriter ────────────╯

//w: (start)╭──────────── open temp mail ────────────╮
api.mapkey("oce", "open temp mail", function () {
  if (window.location.hostname.includes("tempmail.plus")) {
    window.location.href = "https://tempmail.plus/en/#!";
  } else {
    window.open("https://tempmail.plus/en/#!", "_blank");
  }
});
//w: (end)  ╰──────────── open temp mail ────────────╯
//

//w: (start)╭──────────── open postman web ────────────╮
// open postman web
api.mapkey("ocp", "open postman web", function () {
  if (
    window.location.hostname.includes("shahjalal-backend-9458759.postman.co")
  ) {
    window.location.href =
      "https://shahjalal-backend-9458759.postman.co/workspaces";
  } else {
    window.open(
      "https://shahjalal-backend-9458759.postman.co/workspaces",
      "_blank",
    );
  }
});
//w: (end)  ╰──────────── open postman web ────────────╯
```

## 📄 modules/opener/resourceOpener.js

```javascript
//w: ╭──────────── Block Start ────────────╮
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openGDrive = () => {
  if (window.location.hostname.includes("drive")) {
    window.location.href =
      "https://drive.google.com/drive/u/0/folders/1zjnO2RfqwIhV_95-7nMnTPi1-2q5m1Cp";
  } else {
    window.open(
      "https://drive.google.com/drive/u/0/folders/1zjnO2RfqwIhV_95-7nMnTPi1-2q5m1Cp",
      "_blank",
    );
  }
};
api.mapkey("ord", "open GDrive Resource", openGDrive);
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openImgbb = () => {
  if (
    window.location.hostname.includes("imgbb") ||
    window.location.hostname.includes("ibb")
  ) {
    window.location.href = "https://md-shahjalal.imgbb.com/";
  } else {
    window.open("https://md-shahjalal.imgbb.com/", "_blank");
  }
};
api.mapkey("ori", "open imgbb Resource", openImgbb);

//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openJpSheet = () => {
  if (window.location.hostname.includes("docs")) {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1OA2UGMcqJc6zST3BVR70qUqyMnjftBuFHLGP7sHR0z8/edit?gid=2099620628#gid=2099620628";
  } else {
    window.open(
      "https://docs.google.com/spreadsheets/d/1OA2UGMcqJc6zST3BVR70qUqyMnjftBuFHLGP7sHR0z8/edit?gid=2099620628#gid=2099620628",
      "_blank",
    );
  }
};
api.mapkey("ors", "open Jp Sheet", openJpSheet);
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openJpMasumVaiSheet = () => {
  if (window.location.hostname.includes("docs")) {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1MVvvT7qvJZEmejn9vdfPyOnjLFCxMpqUT92eClzV9PE/edit?gid=0#gid=0";
  } else {
    window.open(
      "https://docs.google.com/spreadsheets/d/1MVvvT7qvJZEmejn9vdfPyOnjLFCxMpqUT92eClzV9PE/edit?gid=0#gid=0",
      "_blank",
    );
  }
};
api.mapkey("orm", "open Jp Masum Vai Sheet", openJpMasumVaiSheet);

//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openJpMahinVaiSheet = () => {
  if (window.location.hostname.includes("docs")) {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1d9wPS0-rstt0TY23AR1LP4SpCQfULYHItmUZZoI5Ww4/edit?gid=0#gid=0";
  } else {
    window.open(
      "https://docs.google.com/spreadsheets/d/1d9wPS0-rstt0TY23AR1LP4SpCQfULYHItmUZZoI5Ww4/edit?gid=0#gid=0",
      "_blank",
    );
  }
};
api.mapkey("ork", "open Jp Masum Vai Sheet", openJpMasumVaiSheet);
//w: ╰───────────── Block End ─────────────╯
//

//w: ╭──────────── Block Start ────────────╮
const openPeopleDesk = () => {
  if (window.location.hostname.includes("app.peopledesk.io")) {
    window.location.href = "https://app.peopledesk.io/dashboard/employee";
  } else {
    window.open("https://app.peopledesk.io/dashboard/employee", "_blank");
  }
};
api.mapkey("orp", "openPeopleDesk", openPeopleDesk);
//w: ╰───────────── Block End ─────────────╯
//

//w: ╭──────────── Block Start ────────────╮
const openTeamUnitySheets = () => {
  if (window.location.hostname.includes("docs")) {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1nGC-g1KKlB4soo28RgKguGwghvV0CCF7h_ahhUzjpFw/edit?gid=568784421#gid=568784421";
  } else {
    window.open(
      "https://docs.google.com/spreadsheets/d/1nGC-g1KKlB4soo28RgKguGwghvV0CCF7h_ahhUzjpFw/edit?gid=568784421#gid=568784421",
      "_blank",
    );
  }
};
api.mapkey("oru", "open Team Unity Sheets", openTeamUnitySheets);
//w: ╰───────────── Block End ─────────────╯
```

## 📄 modules/opener/opener.js

```javascript
//t: opening dotfiles
api.mapkey("ad", "Dotfiles", function () {
  window.open(
    "https://github.com/shahjalal-labs/allDotfilesBackupEndeavourOs",
    "_blank",
  );
});

//
api.mapkey("ay,", "youtube opening", function () {
  window.open("https://www.youtube.com/", "_blank");
});
//
//
//t:Open blank page
api.mapkey("sb", "Open blank page", function () {
  window.open("https://blank.page/", "_blank");
});
```

## 📄 modules/opener/phOpener.js

```javascript
//w: ╭──────────── Block Start ────────────╮
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t: ph scribble l1b10
api.mapkey("pso", "scribble l1b10", () => {
  window.open(
    "https://web.programming-hero.com/update-1/video/update-1-42-1-scribbles-cafe-project-overview-and-tailwind-setup",
    "_blank",
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
api.mapkey("pwh", "HELP DESK", function () {
  window.open("https://helpdesk.programming-hero.com/", "_blank");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t:L2B4Web
api.mapkey("si", "L2B4Web", function () {
  window.open(
    "https://web.programming-hero.com/level2-batch-4-frontend-track/video/level2-batch-4-frontend-track-36-11-displaying-blogs-and-handling-loading-with-rtk-query-module-summary",
    "_blank",
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t: outline L2B4 https://web.programming-hero.com/web-11/video/web-11-0-1-welcome-message
api.mapkey("sk", "outline L2B4", function () {
  window.open(
    "https://web.programming-hero.com/676fa61320dff5186afcd780/course-outline",
    "_blank",
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//p: coceptual level1 batch 10
api.mapkey("ae", "Conceptual Level1 Batch 10", function () {
  window.open("https://web.programming-hero.com/conceptual-session", "_blank");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//p: coceptual level1 batch 11
api.mapkey("acd", "Conceptual Level1 Batch 11", function () {
  window.open("https://web.programming-hero.com/conceptual-session", "_blank");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t:redux
api.mapkey("sr", "redux", function () {
  window.open(
    "https://web.programming-hero.com/level2-batch-1/video/level2-batch-1-21-1-project-initialization-and-redux-store-setup-recap",
    "_blank",
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t: pre requisite
api.mapkey("sp", "pre requisite level2", function () {
  window.open(
    "https://web.programming-hero.com/next-level-prerequisites-batch4/video/next-level-prerequisites-batch4-45-8-active-route-loading-spinner-uselocation-usenavigation",
    "_blank",
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t:L2B4
api.mapkey("s4", "L2B4 typescript module 2", function () {
  window.open(
    "https://web.programming-hero.com/level2-batch-4/video/level2-batch-4-2-1-type-assertion-type-narrowing",
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//p: level1 batch 11
api.mapkey("pwj", "Level1 Batch 11", function () {
  window.open(
    "https://web.programming-hero.com/web-11/video/web-11-15-9-module-summary-legal-system-practice-task-",
    "_blank",
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t: open ph podcast
api.mapkey("php", "open ph podcast", function () {
  if (
    window.location.hostname.includes("youtube.com") &&
    window.location.pathname
      .toLowerCase()
      .includes("@ProgrammingHeroCommunity/podcasts")
  ) {
    window.location.href =
      "https://www.youtube.com/@ProgrammingHeroCommunity/podcasts";
  } else {
    window.open(
      "https://www.youtube.com/@ProgrammingHeroCommunity/podcasts",
      "_blank",
    );
  }
});
//w: ╰───────────── Block End ─────────────╯
```

## 📄 modules/opener/smtFigma/smtFigma.js

```javascript
// open visual => ov => visual means figma design which help us to visual view

//w: (start)╭──────────── ashmaster  ────────────╮
// open ashmaster
api.mapkey("ova", "ashmaster figma", function () {
  if (window.location.hostname.includes("www.figma.com")) {
    window.location.href =
      "https://www.figma.com/design/zQdcO8yAzu6RBqaWAHY5Qt/ash_master_Bridge-Network-App?node-id=28320-2244&t=SAlFLJ39wHSWPOjA-1";
  } else {
    window.open(
      "https://www.figma.com/design/zQdcO8yAzu6RBqaWAHY5Qt/ash_master_Bridge-Network-App?node-id=28320-2244&t=SAlFLJ39wHSWPOjA-1",
      "_blank",
    );
  }
});

//open ashmaster docs
api.mapkey("ovda", "ashmaster docs", function () {
  if (window.location.hostname.includes("docs.google.com")) {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1QUT4qSbz6graO9wLbTLk5rrr37AMKlN09dOIG5dUCTg/edit?gid=0#gid=0";
  } else {
    window.open(
      "https://docs.google.com/spreadsheets/d/1QUT4qSbz6graO9wLbTLk5rrr37AMKlN09dOIG5dUCTg/edit?gid=0#gid=0",
      "_blank",
    );
  }
});
//w: (end)  ╰──────────── ashmaster  ────────────╯
```

## 📖 modules/API.md

```markdown
<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

- [mapkey][1]
  - [Parameters][2]
  - [Examples][3]
- [vmapkey][4]
  - [Parameters][5]
- [imapkey][6]
  - [Parameters][7]
- [map][8]
  - [Parameters][9]
  - [Examples][10]
- [unmap][11]
  - [Parameters][12]
  - [Examples][13]
- [unmapAllExcept][14]
  - [Parameters][15]
  - [Examples][16]
- [imap][17]
  - [Parameters][18]
- [iunmap][19]
  - [Parameters][20]
- [cmap][21]
  - [Parameters][22]
- [vmap][23]
  - [Parameters][24]
- [vunmap][25]
  - [Parameters][26]
- [lmap][27]
  - [Parameters][28]
- [addSearchAlias][29]
  - [Parameters][30]
  - [Examples][31]
- [removeSearchAlias][32]
  - [Parameters][33]
  - [Examples][34]
- [searchSelectedWith][35]
  - [Parameters][36]
  - [Examples][37]
- [Clipboard.read][38]
  - [Parameters][39]
  - [Examples][40]
- [Clipboard.write][41]
  - [Parameters][42]
  - [Examples][43]
- [Hints.setNumeric][44]
  - [Examples][45]
- [Hints.setCharacters][46]
  - [Parameters][47]
  - [Examples][48]
- [Hints.dispatchMouseClick][49]
  - [Parameters][50]
  - [Examples][51]
- [Hints.click][52]
  - [Parameters][53]
  - [Examples][54]
- [Hints.create][55]
  - [Parameters][56]
  - [Examples][57]
- [Hints.style][58]
  - [Parameters][59]
  - [Examples][60]
- [Normal.passThrough][61]
  - [Parameters][62]
- [Normal.scroll][63]
  - [Parameters][64]
- [Normal.feedkeys][65]
  - [Parameters][66]
- [Normal.jumpVIMark][67]
  - [Parameters][68]
- [Visual.style][69]
  - [Parameters][70]
  - [Examples][71]
- [Front.openOmnibar][72]
  - [Parameters][73]
  - [Examples][74]
- [Front.registerInlineQuery][75]
  - [Parameters][76]
- [getBrowserName][77]
- [Front.showBanner][78]
  - [Parameters][79]
  - [Examples][80]
- [Front.showPopup][81]
  - [Parameters][82]
  - [Examples][83]
- [isElementPartiallyInViewport][84]
  - [Parameters][85]
- [getClickableElements][86]
  - [Parameters][87]
  - [Examples][88]
- [tabOpenLink][89]
  - [Parameters][90]
  - [Examples][91]
- [insertJS][92]
  - [Parameters][93]
- [aceVimMap][94]
  - [Parameters][95]
  - [Examples][96]
- [addVimMapKey][97]
  - [Parameters][98]
  - [Examples][99]
- [RUNTIME][100]
  - [Parameters][101]
  - [Examples][102]

## mapkey

Create a shortcut in normal mode to execute your own action.

### Parameters

- `keys` **[string][103]** the key sequence for the shortcut.
- `annotation` **[string][103]** a help message to describe the action, which will displayed in help opened by `?`.
- `jscode` **[function][104]** a Javascript function to be bound. If the function needs an argument, next pressed key will be fed to the function.
- `options` **[object][105]** `domain`: regex, a Javascript regex pattern to identify the domains that this mapping works, for example, `/github\.com/i` says that this mapping works only for github.com, `repeatIgnore`: boolean, whether this action can be repeated by dot command. (optional, default `null`)

### Examples

```javascript
mapkey(
  "<Space>",
  "pause/resume on youtube",
  function () {
    var btn =
      document.querySelector("button.ytp-ad-overlay-close-button") ||
      document.querySelector("button.ytp-ad-skip-button") ||
      document.querySelector("ytd-watch-flexy button.ytp-play-button");
    btn.click();
  },
  { domain: /youtube.com/i },
);
```

## vmapkey

- **See**: mapkey

Create a shortcut in visual mode to execute your own action.

### Parameters

- `keys` **[string][103]** the key sequence for the shortcut.
- `annotation` **[string][103]** a help message to describe the action, which will displayed in help opened by `?`.
- `jscode` **[function][104]** a Javascript function to be bound. If the function needs an argument, next pressed key will be fed to the function.
- `options` **[object][105]** `domain`: regex, a Javascript regex pattern to identify the domains that this mapping works, for example, `/github\.com/i` says that this mapping works only for github.com, `repeatIgnore`: boolean, whether this action can be repeated by dot command. (optional, default `null`)

## imapkey

- **See**: mapkey

Create a shortcut in insert mode to execute your own action.

### Parameters

- `keys` **[string][103]** the key sequence for the shortcut.
- `annotation` **[string][103]** a help message to describe the action, which will displayed in help opened by `?`.
- `jscode` **[function][104]** a Javascript function to be bound. If the function needs an argument, next pressed key will be fed to the function.
- `options` **[object][105]** `domain`: regex, a Javascript regex pattern to identify the domains that this mapping works, for example, `/github\.com/i` says that this mapping works only for github.com, `repeatIgnore`: boolean, whether this action can be repeated by dot command. (optional, default `null`)

## map

Map a key sequence to another in normal mode.

### Parameters

- `new_keystroke` **[string][103]** a key sequence to replace
- `old_keystroke` **[string][103]** a key sequence to be replaced
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping works. (optional, default `null`)
- `new_annotation` **[string][103]** use it instead of the annotation from old_keystroke if provided. (optional, default `null`)

### Examples

```javascript
map(";d", "<Ctrl-Alt-d>");
```

## unmap

Unmap a key sequence in normal mode.

### Parameters

- `keystroke` **[string][103]** a key sequence to be removed.
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping will be removed. (optional, default `null`)

### Examples

```javascript
unmap("<<", /youtube.com/);
```

## unmapAllExcept

Unmap all keybindings except those specified.

### Parameters

- `keystrokes` **[array][106]** the keybindings you want to keep.
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping will be removed. (optional, default `null`)

### Examples

```javascript
unmapAllExcept(["E", "R", "T"], /google.com|twitter.com/);
```

## imap

- **See**: map

Map a key sequence to another in insert mode.

### Parameters

- `new_keystroke` **[string][103]** a key sequence to replace
- `old_keystroke` **[string][103]** a key sequence to be replaced
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping works. (optional, default `null`)
- `new_annotation` **[string][103]** use it instead of the annotation from old_keystroke if provided. (optional, default `null`)

## iunmap

- **See**: unmap

Unmap a key sequence in insert mode.

### Parameters

- `keystroke` **[string][103]** a key sequence to be removed.
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping will be removed. (optional, default `null`)

## cmap

- **See**: map

Map a key sequence to another in omnibar.

### Parameters

- `new_keystroke` **[string][103]** a key sequence to replace
- `old_keystroke` **[string][103]** a key sequence to be replaced
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping works. (optional, default `null`)
- `new_annotation` **[string][103]** use it instead of the annotation from old_keystroke if provided. (optional, default `null`)

## vmap

- **See**: map

Map a key sequence to another in visual mode.

### Parameters

- `new_keystroke` **[string][103]** a key sequence to replace
- `old_keystroke` **[string][103]** a key sequence to be replaced
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping works. (optional, default `null`)
- `new_annotation` **[string][103]** use it instead of the annotation from old_keystroke if provided. (optional, default `null`)

## vunmap

- **See**: unmap

Unmap a key sequence in visual mode.

### Parameters

- `keystroke` **[string][103]** a key sequence to be removed.
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping will be removed. (optional, default `null`)

## lmap

- **See**: map

Map a key sequence to another in lurk mode.

### Parameters

- `new_keystroke` **[string][103]** a key sequence to replace
- `old_keystroke` **[string][103]** a key sequence to be replaced
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping works. (optional, default `null`)
- `new_annotation` **[string][103]** use it instead of the annotation from old_keystroke if provided. (optional, default `null`)

## addSearchAlias

Add a search engine alias into Omnibar.

### Parameters

- `alias` **[string][103]** the key to trigger this search engine, one or several chars, used as search alias, when you input the string and press `space` in omnibar, the search engine will be triggered.
- `prompt` **[string][103]** a caption to be placed in front of the omnibar.
- `search_url` **[string][103]** the URL of the search engine, for example, `https://www.s.com/search.html?query=`, if there are extra parameters for the search engine, you can use it as `https://www.s.com/search.html?query={0}&type=cs` or `https://www.s.com/search.html?type=cs&query=`(since order of URL parameters usually does not matter).
- `search_leader_key` **[string][103]** `<search_leader_key><alias>` in normal mode will search selected text with this search engine directly without opening the omnibar, for example `sd`. (optional, default `s`)
- `suggestion_url` **[string][103]** the URL to fetch suggestions in omnibar when this search engine is triggered. (optional, default `null`)
- `callback_to_parse_suggestion` **[function][104]** a function to parse the response from `suggestion_url` and return a list of strings as suggestions. Receives two arguments: `response`, the first argument, is an object containing a property `text` which holds the text of the response; and `request`, the second argument, is an object containing the properties `query` which is the text of the query and `url` which is the formatted URL for the request. (optional, default `null`)
- `only_this_site_key` **[string][103]** `<search_leader_key><only_this_site_key><alias>` in normal mode will search selected text within current site with this search engine directly without opening the omnibar, for example `sod`. (optional, default `o`)
- `options` **[object][105]** `favicon_url` URL for favicon for this search engine, `skipMaps` if `true` disable creating key mappings for this search engine (optional, default `null`)

### Examples

```javascript
addSearchAlias(
  "d",
  "duckduckgo",
  "https://duckduckgo.com/?q=",
  "s",
  "https://duckduckgo.com/ac/?q=",
  function (response) {
    var res = JSON.parse(response.text);
    return res.map(function (r) {
      return r.phrase;
    });
  },
);
```

## removeSearchAlias

Remove a search engine alias from Omnibar.

### Parameters

- `alias` **[string][103]** the alias of the search engine to be removed.
- `search_leader_key` **[string][103]** `<search_leader_key><alias>` in normal mode will search selected text with this search engine directly without opening the omnibar, for example `sd`. (optional, default `s`)
- `only_this_site_key` **[string][103]** `<search_leader_key><only_this_site_key><alias>` in normal mode will search selected text within current site with this search engine directly without opening the omnibar, for example `sod`. (optional, default `o`)

### Examples

```javascript
removeSearchAlias("d");
```

## searchSelectedWith

Search selected with.

### Parameters

- `se` **[string][103]** a search engine's search URL
- `onlyThisSite` **[boolean][107]** whether to search only within current site, need support from the provided search engine. (optional, default `false`)
- `interactive` **[boolean][107]** whether to search in interactive mode, in case that you need some small modification on the selected content. (optional, default `false`)
- `alias` **[string][103]** only used with interactive mode, in such case the url from `se` is ignored, SurfingKeys will construct search URL from the alias registered by `addSearchAlias`. (optional, default `""`)

### Examples

```javascript
searchSelectedWith("https://translate.google.com/?hl=en#auto/en/");
```

## Clipboard.read

Read from clipboard.

### Parameters

- `onReady` **[function][104]** a callback function to handle text read from clipboard.

### Examples

```javascript
Clipboard.read(function (response) {
  console.log(response.data);
});
```

## Clipboard.write

Write text to clipboard.

### Parameters

- `text` **[string][103]** the text to be written to clipboard.

### Examples

```javascript
Clipboard.write(window.location.href);
```

## Hints.setNumeric

Use digits as hint label, with it set you could type text to filter links, this API is to replace original setting like `Hints.numericHints = true;`.

### Examples

```javascript
Hints.setNumeric();
```

## Hints.setCharacters

Set characters for generating hints, this API is to replace original setting like `Hints.characters = "asdgqwertzxcvb";`.

### Parameters

- `characters` **[string][103]** the characters for generating hints.

### Examples

```javascript
Hints.setCharacters("asdgqwertzxcvb");
```

## Hints.dispatchMouseClick

- **See**: Hints.create

The default `onHintKey` implementation.

### Parameters

- `element` **[HTMLElement][108]** the element for which the pressed hint is targeted.

### Examples

```javascript
mapkey(
  "q",
  "click on images",
  function () {
    Hints.create("div.media_box img", Hints.dispatchMouseClick);
  },
  { domain: /weibo.com/i },
);
```

## Hints.click

Click element or create hints for elements to click.

### Parameters

- `links` `string or array of HTMLElement`, click on it if there is only one in the array or `force` parameter is true, otherwise hints will be generated for them. If `links` is a string, it will be used as css selector for `getClickableElements`.
- `force` **[boolean][107]** force to click the first input element whether there are more than one elements in `links` or not. (optional, default `false`)

### Examples

```javascript
mapkey("zz", "Hide replies", function () {
  Hints.click(document.querySelectorAll("#less-replies:not([hidden])"), true);
});
```

## Hints.create

- **See**: Hints.dispatchMouseClick

Create hints for elements to click.

### Parameters

- `cssSelector` `string or array of HTMLElement`, if `links` is a string, it will be used as css selector.
- `onHintKey` **[function][104]** a callback function on hint keys pressed.
- `attrs` **[object][105]** `active`: whether to activate the new tab when a link is opened, `tabbed`: whether to open a link in a new tab, `multipleHits`: whether to stay in hints mode after one hint is triggered. (optional, default `null`)

### Examples

```javascript
mapkey("yA", "#7Copy a link URL to the clipboard", function () {
  Hints.create("*[href]", function (element) {
    Clipboard.write("[" + element.innerText + "](" + element.href + ")");
  });
});
```

Returns **[boolean][107]** whether any hint is created for target elements.

## Hints.style

Set styles for hints.

### Parameters

- `css` **[string][103]** styles for hints.
- `mode` **[string][103]** sub mode for hints, use `text` for hints mode to enter visual mode. (optional, default `null`)

### Examples

```javascript
Hints.style(
  "border: solid 3px #552a48; color:#efe1eb; background: none; background-color: #552a48;",
);
Hints.style(
  "div{border: solid 3px #707070; color:#efe1eb; background: none; background-color: #707070;} div.begin{color:red;}",
  "text",
);
```

## Normal.passThrough

Enter PassThrough mode.

### Parameters

- `timeout` **[number][109]?** how many milliseconds to linger in PassThrough mode, to ignore it will stay in PassThrough mode until an Escape key is pressed.

## Normal.scroll

Scroll within current target.

### Parameters

- `type` **[string][103]** down | up | pageDown | fullPageDown | pageUp | fullPageUp | top | bottom | left | right | leftmost | rightmost | byRatio

## Normal.feedkeys

Feed keys into Normal mode.

### Parameters

- `keys` **[string][103]** the keys to be fed into Normal mode.

## Normal.jumpVIMark

Jump to a vim-like mark.

### Parameters

- `mark` **[string][103]** a vim-like mark.

## Visual.style

Set styles for visual mode.

### Parameters

- `element` **[string][103]** element in visual mode, which can be `marks` and `cursor`.
- `style` **[string][103]** css style

### Examples

```javascript
Visual.style("marks", "background-color: #89a1e2;");
Visual.style("cursor", "background-color: #9065b7;");
```

## Front.openOmnibar

Open the omnibar.

### Parameters

- `args` **[object][105]** `type` the sub type for the omnibar, which can be `Bookmarks`, `AddBookmark`, `History`, `URLs`, `RecentlyClosed`, `TabURLs`, `Tabs`, `Windows`, `VIMarks`, `SearchEngine`, `Commands`, `OmniQuery` and `UserURLs`.

### Examples

```javascript
mapkey(
  "ou",
  "#8Open AWS services",
  function () {
    var services = Array.from(
      top.document.querySelectorAll(
        "#awsc-services-container li[data-service-href]",
      ),
    ).map(function (li) {
      return {
        title: li.querySelector("span.service-label").textContent,
        url: li.getAttribute("data-service-href"),
      };
    });
    if (services.length === 0) {
      services = Array.from(
        top.document.querySelectorAll(
          'div[data-testid="awsc-nav-service-list"] li[data-testid]>a',
        ),
      ).map(function (a) {
        return {
          title: a.innerText,
          url: a.href,
        };
      });
    }
    Front.openOmnibar({ type: "UserURLs", extra: services });
  },
  { domain: /console.amazonaws|console.aws.amazon.com/i },
);
```

## Front.registerInlineQuery

- **See**: [example][110].

Register an inline query.

### Parameters

- `args` **[object][105]** `url`: string or function, the dictionary service url or a function to return the dictionary service url, `parseResult`: function, a function to parse result from dictionary service and return a HTML string to render explanation, `headers`: object\[optional], in case your dictionary service needs authentication.

## getBrowserName

Get current browser name

Returns **[string][103]** "Chrome" | "Firefox" | "Safari"

## Front.showBanner

Show message in banner.

### Parameters

- `msg` **[string][103]** the message to be displayed in banner.
- `timeout` **[number][109]** milliseconds after which the banner will disappear. (optional, default `1600`)

### Examples

```javascript
Front.showBanner(window.location.href);
```

## Front.showPopup

Show message in popup.

### Parameters

- `msg` **[string][103]** the message to be displayed in popup.

### Examples

```javascript
Front.showPopup(window.location.href);
```

## isElementPartiallyInViewport

Check whether an element is in viewport.

### Parameters

- `el` **[Element][111]** the element to be checked.
- `ignoreSize` **[boolean][107]** whether to ignore size of the element, otherwise the element must be with size 4\*4. (optional, default `false`)

Returns **[boolean][107]**

## getClickableElements

Get all clickable elements. SurfingKeys has its own logic to identify clickable elements, such as a `HTMLAnchorElement` or elements with cursor as pointer. This function provides two parameters to identify those clickable elements that SurfingKeys failed to identify.

### Parameters

- `selectorString` **[string][103]** extra css selector of those clickable elements.
- `pattern` **regex** a regular expression that matches text of the clickable elements.

### Examples

```javascript
var elms = getClickableElements("[rel=link]", /click this/);
```

Returns **[array][106]** array of clickable elements.

## tabOpenLink

Open links in new tabs.

### Parameters

- `str` **[string][103]** links to be opened, the links should be split by `\n` if there are more than one.
- `simultaneousness` **[number][109]** how many tabs will be opened simultaneously, the rest will be queued and opened later whenever a tab is closed. (optional, default `5`)

### Examples

```javascript
tabOpenLink("https://github.com/brookhong/Surfingkeys");
```

## insertJS

Insert javascript code into main world context.

### Parameters

- `code` **([function][104] | [string][103])** a javascript function to be executed in main world context, or an URL of js file.
- `onload` **[function][104]** a callback function after requested code executed.

## aceVimMap

Map the key sequence `lhs` to `rhs` for mode `ctx` in ACE editor.

### Parameters

- `lhs` **[string][103]** a key sequence to replace
- `rhs` **[string][103]** a key sequence to be replaced
- `ctx` **[string][103]** a mode such as `insert`, `normal`.

### Examples

```javascript
aceVimMap("J", ":bn", "normal");
```

## addVimMapKey

Add map key in ACE editor.

### Parameters

- `objects` **[object][105]** multiple objects to define key map in ACE, see more from [ace/keyboard/vim.js][112]

### Examples

```javascript
addVimMapKey(
  {
    keys: "n",
    type: "motion",
    motion: "moveByCharacters",
    motionArgs: {
      forward: false,
    },
  },

  {
    keys: "e",
    type: "motion",
    motion: "moveByLines",
    motionArgs: {
      forward: true,
      linewise: true,
    },
  },
);
```

## RUNTIME

Call background `action` with `args`, the `callback` will be executed with response from background.

### Parameters

- `action` **[string][103]** a background action to be called.
- `args` **[object][105]** the parameters to be passed to the background action.
- `callback` **[function][104]** a function to be executed with the result from the background action.

### Examples

```javascript
RUNTIME("getTabs", { queryInfo: { currentWindow: true } }, (response) => {
  console.log(response);
});
```

[1]: #mapkey
[2]: #parameters
[3]: #examples
[4]: #vmapkey
[5]: #parameters-1
[6]: #imapkey
[7]: #parameters-2
[8]: #map
[9]: #parameters-3
[10]: #examples-1
[11]: #unmap
[12]: #parameters-4
[13]: #examples-2
[14]: #unmapallexcept
[15]: #parameters-5
[16]: #examples-3
[17]: #imap
[18]: #parameters-6
[19]: #iunmap
[20]: #parameters-7
[21]: #cmap
[22]: #parameters-8
[23]: #vmap
[24]: #parameters-9
[25]: #vunmap
[26]: #parameters-10
[27]: #lmap
[28]: #parameters-11
[29]: #addsearchalias
[30]: #parameters-12
[31]: #examples-4
[32]: #removesearchalias
[33]: #parameters-13
[34]: #examples-5
[35]: #searchselectedwith
[36]: #parameters-14
[37]: #examples-6
[38]: #clipboardread
[39]: #parameters-15
[40]: #examples-7
[41]: #clipboardwrite
[42]: #parameters-16
[43]: #examples-8
[44]: #hintssetnumeric
[45]: #examples-9
[46]: #hintssetcharacters
[47]: #parameters-17
[48]: #examples-10
[49]: #hintsdispatchmouseclick
[50]: #parameters-18
[51]: #examples-11
[52]: #hintsclick
[53]: #parameters-19
[54]: #examples-12
[55]: #hintscreate
[56]: #parameters-20
[57]: #examples-13
[58]: #hintsstyle
[59]: #parameters-21
[60]: #examples-14
[61]: #normalpassthrough
[62]: #parameters-22
[63]: #normalscroll
[64]: #parameters-23
[65]: #normalfeedkeys
[66]: #parameters-24
[67]: #normaljumpvimark
[68]: #parameters-25
[69]: #visualstyle
[70]: #parameters-26
[71]: #examples-15
[72]: #frontopenomnibar
[73]: #parameters-27
[74]: #examples-16
[75]: #frontregisterinlinequery
[76]: #parameters-28
[77]: #getbrowsername
[78]: #frontshowbanner
[79]: #parameters-29
[80]: #examples-17
[81]: #frontshowpopup
[82]: #parameters-30
[83]: #examples-18
[84]: #iselementpartiallyinviewport
[85]: #parameters-31
[86]: #getclickableelements
[87]: #parameters-32
[88]: #examples-19
[89]: #tabopenlink
[90]: #parameters-33
[91]: #examples-20
[92]: #insertjs
[93]: #parameters-34
[94]: #acevimmap
[95]: #parameters-35
[96]: #examples-21
[97]: #addvimmapkey
[98]: #parameters-36
[99]: #examples-22
[100]: #runtime
[101]: #parameters-37
[102]: #examples-23
[103]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
[104]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function
[105]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
[106]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
[107]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[108]: https://developer.mozilla.org/docs/Web/HTML/Element
[109]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
[110]: https://github.com/brookhong/Surfingkeys/wiki/Register-inline-query
[111]: https://developer.mozilla.org/docs/Web/API/Element
[112]: https://github.com/ajaxorg/ace/blob/ec450c03b51aba3724cf90bb133708078d1f3de6/lib/ace/eyboard/vim.js#L927-L1099

[SurfingKeys] Error found in settings(https://docs.google.com/document/d/1snFuTQppEN8GSMj5bIj3mDlAdYy4fiNEoS_Q3FRXB8/edit?tab=t.0): TypeError: e.test is not a function content.js:1:136593
```

## 📄 modules/github/github.js

```javascript
//w: (start)╭──────────── Block Start ────────────╮

//w: (end)  ╰───────────── Block End ─────────────╯
//w: 1╭──────────── Block Start ────────────╮
//t: github repository page opening
api.mapkey("gro", "Github own Repositories", function () {
  window.open("https://github.com/shahjalal-labs?tab=repositories", "_blank");
});

//t:  new repo for github

//w: (start)╭──────────── github Ruhul vai  ────────────╮
//t: github repository page opening

api.mapkey("grr", "github Ruhul vai ", function () {
  const baseUrl = "https://github.com/ruhulamin-programming";
  const repoUrl = baseUrl + "?tab=repositories";

  if (window.location.href.startsWith(repoUrl)) {
    // On repositories page → switch to profile
    window.location.href = baseUrl;
  } else if (window.location.href.startsWith(baseUrl)) {
    // On profile (or subpage under profile) → switch to repositories
    window.location.href = repoUrl;
  } else {
    // Anywhere else → open repositories in a new tab
    window.open(repoUrl, "_blank");
  }
});
//w: (end)╰───────────── github Ruhul vai  ─────────────╯

//
//w: (start)╭──────────── github Mirhasankhan vai ────────────╮
api.mapkey("grm", "github Mirhasankhan vai", function () {
  const baseUrl = "https://github.com/Mirhasankhan";
  const repoUrl = baseUrl + "?tab=repositories";

  if (window.location.href.startsWith(repoUrl)) {
    // On repositories page → switch to profile
    window.location.href = baseUrl;
  } else if (window.location.href.startsWith(baseUrl)) {
    // On profile (or subpage under profile) → switch to repositories
    window.location.href = repoUrl;
  } else {
    // Anywhere else → open repositories in a new tab
    window.open(repoUrl, "_blank");
  }
});
//w: (end)╰───────────── github Mirhasankhan vai ─────────────╯
//

//w: (start)╭──────────── create new github repo────────────╮
api.mapkey("grn", "create new github repo", function () {
  window.open("https://github.com/new", "_blank");
});
//w: (end)  ╰───────────── create new github repo───────────╯

//w: 2╭──────────── Block Start ────────────╮
// t: 📋 Smart GitHub Repo Copier
api.mapkey("gyu", "📋 Smart GitHub Repo Copier", async function () {
  const url = window.location.href;

  // Helper to extract user/repo from href
  const extractUserRepo = (href) => {
    const match = href.match(/^\/([^/]+)\/([^/]+)/);
    return match ? `${match[1]}/${match[2]}` : null;
  };

  // If on repositories list page
  if (url.includes("?tab=repositories")) {
    let clickLoopActive = true;

    const runHintLoop = () => {
      if (!clickLoopActive) return;
      api.Hints.create('a[href*="/"][itemprop="name codeRepository"]', (el) => {
        const user = location.pathname.split("/")[1];
        const repo = el.innerText.trim();
        if (user && repo) {
          api.Clipboard.write(`${user}/${repo}`);
          api.Front.showBanner(`✅ Copied: ${user}/${repo}`);
        }
        setTimeout(runHintLoop, 200);
      });
    };

    runHintLoop();

    // Stop loop on Esc
    api.mapkey("<Esc>", "❌ Stop GitHub Repo Copier loop", () => {
      clickLoopActive = false;
    });
  }

  // If on a single repository page
  else if (/^https:\/\/github\.com\/[^/]+\/[^/]+/.test(url)) {
    const match = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)/);
    if (match) {
      const userRepo = `${match[1]}/${match[2]}`;
      api.Clipboard.write(userRepo);
      api.Front.showBanner(`✅ Copied: ${userRepo}`);
    }

    // Show hint for SSH copy buttons
    api.Hints.create("clipboard-copy[data-copy-feedback]", (el) => {
      const ssh = el.getAttribute("value") || el.innerText;
      api.Clipboard.write(ssh);
      api.Front.showBanner(`🔑 Copied SSH: ${ssh}`);
    });
  }

  // Else: Not on GitHub repo
  else {
    api.Front.showBanner("⚠️ Not on a GitHub repo or repositories page");
  }
});
//w: 2╰───────────── Block End ─────────────╯

//w: 3╭──────────── Block Start ────────────╮
//t: copy github username/repo like shahjalal-labs/nvim
api.mapkey(
  "gyr",
  "Copy GitHub username/repo",
  function () {
    const url = window.location.href;
    if (!url.includes("github.com")) {
      api.Front.showBanner("Not a GitHub page");
      return;
    }
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)(\/|$)/);
    if (match) {
      const user = match[1];
      const repo = match[2];
      const textToCopy = `${user}/${repo}`;
      api.Clipboard.write(textToCopy);
      api.Front.showBanner(`Copied: ${textToCopy}`);
    } else {
      api.Front.showBanner("Not a repo URL");
    }
  },
  { domain: /./, prefix: " " },
);
//w: 3╰───────────── Block End ─────────────╯
//w: 5╭──────────── Block Start ────────────╮
api.mapkey("grp", "👤 Go to GitHub user profile from repo page", function () {
  const match = window.location.href.match(
    /^https:\/\/github\.com\/([^\/?#]+)/,
  );
  if (match && match[1]) {
    const user = match[1];
    window.location.href = `https://github.com/${user}`;
  } else {
    api.Front.showBanner("❌ Not on a GitHub repo page");
  }
});

// == 🧭 Surfingkeys Mapping: gm - Go to GitHub user profile or Repositories tab ==
// Behavior:
// - 🌐 Not on GitHub → open your GitHub profile in new tab.
// - 🏠 On GitHub generic page (features, topics, homepage, etc) → go to your GitHub profile.
// - 📁 On GitHub repo/subpath → redirect to that user’s profile.
// - 👤 On any GitHub user profile (yours or others) → redirect to your GitHub profile.
// - 👤 If already on your GitHub profile → go to your repositories tab.

api.mapkey(
  "gm",
  "👤 Go to GitHub user profile or repositories tab",
  function () {
    const currentUrl = window.location.href;
    const staticProfile = "https://github.com/shahjalal-labs";
    const yourReposTab = "https://github.com/shahjalal-labs?tab=repositories";

    if (!currentUrl.startsWith("https://github.com/")) {
      // 🌐 Not on GitHub
      api.tabOpenLink(staticProfile);
      return;
    }

    const match = currentUrl.match(/^https:\/\/github\.com\/([^\/?#]+)/);
    const currentUser = match && match[1];

    if (
      !currentUser ||
      ["features", "topics", "collections"].includes(currentUser)
    ) {
      // 🏠 On GitHub homepage or generic section
      window.location.href = staticProfile;
      return;
    }

    const isOnProfilePage = currentUrl === `https://github.com/${currentUser}`;

    if (isOnProfilePage) {
      if (currentUser.toLowerCase() === "shahjalal-labs") {
        // 👤 Already on your own profile
        window.location.href = yourReposTab;
      } else {
        // 👤 On someone else’s profile
        window.location.href = staticProfile;
      }
    } else {
      // 📁 On repo or subpath — redirect to the user's profile
      window.location.href = `https://github.com/${currentUser}`;
    }
  },
);

//w: 5╰───────────── Block End ─────────────╯
//w: 6╭──────────── Block Start ────────────╮
//w: opening github ruhulamin-programming vai

/* api.mapkey("gz", "github ruhulamin-programming vai", function () {
  if (window.location.hostname.includes("github.com")) {
    window.location.href =
      "https://github.com/ruhulamin-programming?tab=repositories";
  } else {
    window.open(
      "https://github.com/ruhulamin-programming?tab=repositories",
      "_blank",
    );
  }
}); */

//w: 6╰───────────── Block End ─────────────╯
//w: 7╭──────────── Block Start ────────────╮

//w: 7╰───────────── Block End ─────────────╯
//w: 8╭──────────── Block Start ────────────╮

//w: 8╰───────────── Block End ─────────────╯
//w: 9╭──────────── Block Start ────────────╮

//w: 9╰───────────── Block End ─────────────╯
```

## 📄 modules/github/githubNavigator.js

```javascript
//

// GitHub-specific mappings for SurfingKeys
api.map(";A", "Open repository Actions page", () => {
  window.location.href =
    window.location.origin + window.location.pathname + "/actions";
});

api.map(";C", "Open repository Commits page", () => {
  window.location.href =
    window.location.origin + window.location.pathname + "/commits";
});

api.map(";I", "Open repository Issues page", () => {
  window.location.href =
    window.location.origin + window.location.pathname + "/issues";
});

api.map(";N", "Open notifications page", () => {
  window.location.href = "https://github.com/notifications";
});

api.map(";P", "Open repository Pull Requests page", () => {
  window.location.href =
    window.location.origin + window.location.pathname + "/pulls";
});

api.map(";R", "Open Repository page", () => {
  // Go to main repo page
  const pathParts = window.location.pathname.split("/").slice(1, 3);
  window.location.href = window.location.origin + "/" + pathParts.join("/");
});

api.map(";S", "Open repository Settings page", () => {
  window.location.href =
    window.location.origin + window.location.pathname + "/settings";
});

api.map(";W", "Open repository Wiki page", () => {
  window.location.href =
    window.location.origin + window.location.pathname + "/wiki";
});

api.map(";X", "Open repository Security page", () => {
  window.location.href =
    window.location.origin + window.location.pathname + "/security";
});

api.map(";O", "Open repository Owners profile page", () => {
  const owner = window.location.pathname.split("/")[1];
  window.location.href = window.location.origin + "/" + owner;
});

api.map(";M", "Open your profile page", () => {
  // This assumes your username is in the avatar link
  const userLink = document.querySelector(
    'header [data-ga-click*="user avatar"]',
  );
  if (userLink) {
    window.location.href = userLink.href;
  }
});

// Quick view mappings
api.map(";a", "View Repository", () => {
  Front.showContent("Repository view - implement based on context");
});

api.map(";u", "View User", () => {
  Front.showContent("User view - implement based on context");
});

// Copy mappings
api.map(";yy", "Copy Project Path", () => {
  const path = window.location.pathname.slice(1);
  api.Clipboard.write(path);
  Front.showBanner("Copied: " + path);
});

api.map(";Y", "Copy Project Path with domain", () => {
  const fullPath = window.location.origin + window.location.pathname;
  api.Clipboard.write(fullPath);
  Front.showBanner("Copied: " + fullPath);
});

// GitHub.dev mappings
api.map(";D", "Open in github.dev (new tab)", () => {
  const devUrl = "https://github.dev" + window.location.pathname;
  window.open(devUrl, "_blank");
});

api.map(";dd", "Open in github.dev", () => {
  const devUrl = "https://github.dev" + window.location.pathname;
  window.location.href = devUrl;
});

// SourceGraph mapping
api.map(";G", "View on SourceGraph", () => {
  const sgUrl = "https://sourcegraph.com/github.com" + window.location.pathname;
  window.location.href = sgUrl;
});

// Raw file mappings
api.map(";r", "View live raw version of file", () => {
  if (window.location.pathname.includes("/blob/")) {
    const rawUrl = window.location.href.replace("/blob/", "/raw/");
    window.location.href = rawUrl;
  }
});

api.map(";yr", "Copy raw link to file", () => {
  if (window.location.pathname.includes("/blob/")) {
    const rawUrl = window.location.href.replace("/blob/", "/raw/");
    api.Clipboard.write(rawUrl);
    Front.showBanner("Copied raw URL: " + rawUrl);
  }
});

api.map(";yf", "Copy link to file", () => {
  api.Clipboard.write(window.location.href);
  Front.showBanner("Copied file URL: " + window.location.href);
});

// Go up one directory level
api.map("gu", "Go up one path level", () => {
  const path = window.location.pathname;
  const newPath = path.split("/").slice(0, -1).join("/") || "/";
  window.location.href = window.location.origin + newPath;
});

// Toggle star (this would need more context-specific implementation)
api.map(";s", "Toggle Star", () => {
  const starButton = document.querySelector('[aria-label^="Star"]');
  if (starButton) {
    starButton.click();
  }
});

// Toggle language stats
api.map(";l", "Toggle repo language stats", () => {
  const langStats = document.querySelector(".repository-lang-stats-graph");
  if (langStats) {
    langStats.style.display =
      langStats.style.display === "none" ? "block" : "none";
  }
});

// Open clipboard as file path
api.map(";gcp", "Open clipboard string as file path in repo", async () => {
  const clipboardText = await api.Clipboard.read();
  if (clipboardText) {
    const baseRepoUrl =
      window.location.origin +
      window.location.pathname.split("/").slice(0, 3).join("/");
    window.location.href = baseRepoUrl + "/blob/main/" + clipboardText;
  }
});
```

## 📄 modules/defaultRemapped.js

```javascript
api.map("gt", "t");
api.map("w", "d");
api.map("tt", "T");
api.map("ao", ";di");
api.map("su", ";U");
api.map("C-1", "g0");
// api.map("ss", "on");
api.map("aa", "S");
api.map("<Alt-j>", "l");
api.map("<Alt-k>", "h");
api.map("h", "E");
api.map("gj", "G");
api.map("gi", "yy", /.*youtube.*/i);
//api.map("t", "f");
//api.map("f", "t");
api.map("l", "R");
api.lmap("f", "<t>");
api.map("as", ";fs");
api.map("u", "<Ctrl-i>");
api.map("Ctrl+d", "<Ctrl-f>");
// api.map("<Ctrl-i>", "<Alt-s>"); // hotkey must be one keystroke with/without modifier, it can not be a sequence of keystrokes like `gg`.
// an example to remove mapkey `Ctrl-i`
api.unmap("<ctrl-i>");
api.unmap("p");
api.unmap("t");
api.map(",", "<Ctrl-6>");
```

## 📄 modules/hoverClick/hoverClick.js

```javascript
//t: 🔁 Persistent smart click loop that detects and clicks both semantic and styled custom clickable elements across page navigations.
//w: (start)╭──────────── Persistent smart click ────────────╮
api.mapkey("cb", "🔁 Persistent click hints", function repeatClickHints() {
  api.Hints.create(
    "a, button, select, input, textarea, summary, *[onclick], *[contenteditable=true], *.jfk-button, *.goog-flat-menu-button, *[role=button], *[role=link], *[role=menuitem], *[role=option], *[role=switch], *[role=tab], *[role=checkbox], *[role=combobox], *[role=menuitemcheckbox], *[role=menuitemradio]",
    // { tabbed: true },
    function (el) {
      el.click();

      // Wait a short moment, then re-show hints
      setTimeout(() => {
        repeatClickHints(); // Call itself again
      }, 200); // Delay to allow DOM to update
    },
  );
});
//w: (end)  ╰──────────── Persistent smart click ────────────╯

//t: 🖱️ Smart hover using hints
//w: (start)╭──────────── Smart hover using hints ────────────╮
api.mapkey("ch", "🖱️ Smart hover using hints", function () {
  api.Hints.create("*", function (el) {
    ["mouseover", "mouseenter", "focus"].forEach((type) => {
      el.dispatchEvent(
        new MouseEvent(type, { bubbles: true, cancelable: true, view: window }),
      );
    });

    // api.Front.showPopup("🟡 Hovered or focused: " + (el.alt || el.innerText || el.tagName));
  });
});
//w: (end)  ╰──────────── Smart hover using hints ────────────╯

// t: 🔍 Reveal hidden elements using hints
//w: (start)╭──────────── Reveal hidden elements ────────────╮
api.mapkey("ca", "🔍 Reveal hidden elements using hints", function () {
  api.Hints.create("*", function (el) {
    el.style.display = "block";
    el.style.visibility = "visible";
    el.style.opacity = "1";
    el.hidden = false;
    api.Front.showPopup("✅ Revealed element: " + el.tagName);
  });
});
//w: (end)  ╰──────────── Reveal hidden elements ────────────╯

//w: (start)╭──────────── Open URL in incognito ────────────╮
api.mapkey("of", "Open URL in incognito window", function () {
  api.Hints.create("*[href]", function (element) {
    api?.RUNTIME("openIncognito", {
      url: element.href,
    });
  });
});
//w: (end)  ╰──────────── Open URL in incognito ────────────╯

// postman click
//w: (start)╭──────────── postman click ────────────╮
// 🎯 Postman-specific hints for custom clickable divs
api.mapkey(
  "tp",
  "🎯 Postman key/value hints",
  function () {
    // Target Postman's custom clickable divs
    api.Hints.create(
      'div.key-value-cell__placeholder[tabindex="-1"], div[class*="key-value"][tabindex], .auto-suggest-group .key-value-cell__placeholder',
      function (element) {
        element.click();
        element.focus();

        // Try to simulate a click event more thoroughly
        const clickEvent = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        });
        element.dispatchEvent(clickEvent);

        // Also try focus
        element.dispatchEvent(new FocusEvent("focus"));
      },
      { multipleHits: true }, // Allows multiple selections
    );
  },
  // { domain: /\.postman\.(co|com)$/i }, // work only domain where postman .com exists this type something
);
//w: (end)  ╰──────────── postman click ────────────╯
//  insert name


```

## 📄 modules/style/chatgpt_prev.js

```javascript
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
```

## 📄 modules/style/google.js

```javascript
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
```

## 📄 modules/style/chatgpt.js

```javascript
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

// Rest of your existing functions remain the same...
function createSJPulseUI() {
  const css = `
    /* Main Theme - Deep Night */
    body {
      background: linear-gradient(135deg, #0c0c1a 0%, #1a1a2e 50%, #16213e 100%) !important;
      color: #A7B49E !important;
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
      color: #A7B49E !important;
    }

    /* User message bubbles */
    [data-message-author-role="user"] .text-base {
      background: linear-gradient(135deg, #2a2a5a 0%, #3a3a7a 100%) !important;
      border: 1px solid #4a4a8a !important;
      color: #A7B49E !important;
    }

    /* Input Area - Fixed */
    form textarea, [data-testid*="textarea"] {
      background: rgba(20, 20, 40, 0.9) !important;
      color: #A7B49E !important;
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
      color: #A7B49E !important;
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
      color: #A7B49E !important;
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
      color: #A7B49E !important;
    }

    /* Additional text elements */
    h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label {
      color: #A7B49E !important;
    }

    /* Input text */
    input, select, option {
      color: #A7B49E !important;
    }

    /* Placeholder text */
    ::placeholder {
      color: #A7B49E !important;
      opacity: 0.7 !important;
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

function createVariantThemes() {
  return {
    cyberpunk: `
      body {
        background: linear-gradient(135deg, #0a0a0a 0%, #1a0033 100%) !important;
        color: #A7B49E !important;
      }
      .text-base {
        background: linear-gradient(135deg, #1a0033 0%, #330066 100%) !important;
        border: 1px solid #00ff88 !important;
        box-shadow: 0 0 20px rgba(0, 255, 136, 0.3) !important;
        color: #A7B49E !important;
      }
      button[data-testid*="send"] {
        background: linear-gradient(135deg, #ff00ff 0%, #00ff88 100%) !important;
      }
      h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label {
        color: #A7B49E !important;
      }
    `,
    "midnight-blue": `
      body {
        background: linear-gradient(135deg, #0f1a2b 0%, #1e3a5f 100%) !important;
        color: #A7B49E !important;
      }
      .text-base {
        background: linear-gradient(135deg, #1e3a5f 0%, #2e4a7f 100%) !important;
        border: 1px solid #3a5f8f !important;
        color: #A7B49E !important;
      }
      h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label {
        color: #A7B49E !important;
      }
    `,
    amethyst: `
      body {
        background: linear-gradient(135deg, #1a102b 0%, #3a1f5f 100%) !important;
        color: #A7B49E !important;
      }
      .text-base {
        background: linear-gradient(135deg, #2a1f4f 0%, #4a2f7f 100%) !important;
        border: 1px solid #6b46c1 !important;
        color: #A7B49E !important;
      }
      h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label {
        color: #A7B49E !important;
      }
    `,
    "deep-space": `
      body {
        background: linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #0f3460 100%) !important;
        color: #A7B49E !important;
      }
      .text-base {
        background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%) !important;
        border: 1px solid #4cc9f0 !important;
        color: #A7B49E !important;
      }
      h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label {
        color: #A7B49E !important;
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
```

## 📄 modules/style/deepseek.js

```javascript
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
```

## 📄 modules/testDate.js

```javascript
// src/modules/testDate.js
//
import dayjs from "dayjs";

function showCurrentDate() {
  const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
  api.Front.showBanner(`🕒 Now: ${now}`);
}

api.mapkey("g,", "🕒 Show current date", showCurrentDate);
```

## 📄 modules/fzfFinder.js

```javascript
import Fuse from "fuse.js";

const historyStore = [
  "open https://github.com/shahjalal-labs",
  "scroll down",
  "copy image url",
  "evaluate Surfingkeys UI",
  "jump to GitHub user profile",
  "highlight text in markdown format",
  "persistent hint click",
];

function openFuzzyFinder() {
  const container = document.createElement("div");
  container.id = "fzf-finder";
  Object.assign(container.style, {
    position: "fixed",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#1f2937", // bg-gray-800
    color: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
    zIndex: "9999",
    width: "500px",
    maxHeight: "60vh",
    padding: "16px",
    overflow: "hidden",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  });

  const input = document.createElement("input");
  Object.assign(input.style, {
    width: "100%",
    padding: "8px 12px",
    marginBottom: "12px",
    borderRadius: "8px",
    backgroundColor: "#111827", // bg-gray-900
    color: "#ffffff",
    border: "1px solid #4b5563", // border-gray-600
    outline: "none",
    fontSize: "14px",
    boxSizing: "border-box",
  });
  input.placeholder = "🔍 Fuzzy Search History...";

  const resultsContainer = document.createElement("div");
  Object.assign(resultsContainer.style, {
    overflowY: "auto",
    maxHeight: "40vh",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  });

  container.appendChild(input);
  container.appendChild(resultsContainer);
  document.body.appendChild(container);
  input.focus();

  const fuse = new Fuse(historyStore, { includeScore: true, threshold: 0.4 });

  const renderResults = (query) => {
    resultsContainer.innerHTML = "";
    const results = fuse.search(query || "").slice(0, 10);
    results.forEach((r, idx) => {
      const div = document.createElement("div");
      Object.assign(div.style, {
        padding: "8px 12px",
        backgroundColor: "#374151", // bg-gray-700
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "13px",
        userSelect: "none",
      });
      div.textContent = r.item;
      div.tabIndex = idx;
      div.onmouseenter = () => {
        div.style.backgroundColor = "#4b5563"; // bg-gray-600
      };
      div.onmouseleave = () => {
        div.style.backgroundColor = "#374151"; // bg-gray-700
      };
      div.onclick = () => {
        api.Front.showBanner("✅ Selected: " + r.item);
        container.remove();
      };
      resultsContainer.appendChild(div);
    });
  };

  renderResults("");

  input.oninput = (e) => renderResults(e.target.value);
  input.onkeydown = (e) => {
    if (e.key === "Escape") {
      container.remove();
    }
  };
}

api.mapkey("zf", "🔍 Fuzzy search history like fzf", () => {
  openFuzzyFinder();
});
```

## 📄 modules/tab.js

```javascript
// 🚀 SUPER FAST TAB NAVIGATION - CONSOLE ERROR FREE

const { mapkey, RUNTIME } = api;
// tj - Jump to FIRST tab
/* api.mapkey("tj", "🔼 Jump to first tab", function () {
  // Use SurfingKeys' built-in tab navigation
  // Go to first tab by pressing g0 (SurfingKeys built-in)
  api.Normal.feedkeys("g0");
  api.Front.showBanner("🔼 First tab");
}); */

api.map("tj", "g0");

// tk - Jump to LAST tab
/* api.mapkey("tk", "🔽 Jump to last tab", function () {
  // Go to last tab by pressing g$ (SurfingKeys built-in)
  api.Normal.feedkeys("g$");
  api.Front.showBanner("🔽 Last tab");
}); */

api.map("tk", "g$");

// th - Jump to PREVIOUS tab
/* api.mapkey("th", "◀️ Jump to previous tab", function () {
  // Use SurfingKeys built-in E (previous tab)
  api.Normal.feedkeys("E");
  api.Front.showBanner("◀️ Previous tab");
}); */
api.map("th", "E");

// Jump to tab by number (t1, t2, t3, etc.)
for (let i = 1; i <= 9; i++) {
  api.mapkey(`t${i}`, `🔢 Jump to tab ${i}`, function () {
    api.RUNTIME(
      "getTabs",
      { queryInfo: { currentWindow: true } },
      (response) => {
        if (response.tabs && response.tabs[i - 1]) {
          const targetTab = response.tabs[i - 1];
          api.RUNTIME("focusTab", { tabId: targetTab.id }, () => {
            api.Front.showBanner(`🔢 Jumped to tab ${i}`);
          });
        } else {
          api.Front.showBanner(`❌ Tab ${i} doesn't exist`);
        }
      },
    );
  });
}
// BONUS: Close current tab and go to previous
/* api.mapkey("tc", "❌ Close tab and go to previous", function () {
  api.Normal.feedkeys("x");
}); */

api.map("tc", "x");
// BONUS: Duplicate current tab
/* api.mapkey("td", "📄 Duplicate current tab", function () {
  api.Normal.feedkeys("yt");
}); */
api.map("td", "yt");
// BONUS: Move tab left/right
/* api.mapkey("th", "◀️ Move tab left", function () {
  api.Normal.feedkeys("<<");
}); */

api.map("th", "<<");
/* api.mapkey("tr", "▶️ Move tab right", function () {
  api.Normal.feedkeys(">>");
}); */
// api.map("gt", "t");
api.map("tl", ">>");
console.log("🚀 Console error-free tab navigation loaded!");

mapkey("sxx", "Close all tabs from same host", function () {
  chrome.tabs.query({}, function (tabs) {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      function (activeTabs) {
        const currentTab = activeTabs[0];
        const currentHost = new URL(currentTab.url).hostname;
        const sameHostTabs = tabs.filter((tab) => {
          try {
            return new URL(tab.url).hostname === currentHost;
          } catch (e) {
            return false;
          }
        });
        sameHostTabs.forEach((tab) => chrome.tabs.remove(tab.id));
      },
    );
  });
});

//close single tab on left
api.map("txh", "gxt");

//close single tab on right
api.map("txl", "gxT");

//close all tabs on left
api.map("txH", "gx0");

//close all tabs on right
api.map("txL", "gx$");
```

## 📄 modules/yank/urlYanker.js

```javascript
const { mapkey, Clipboard } = api;

function copyUrlParts(n) {
  const { origin, pathname } = window.location;
  const parts = pathname.split("/").filter(Boolean); // ['dashboard', 'manage-profile']

  let toCopy = "";

  if (n === 0) {
    toCopy = origin; // Only the root URL
  } else if (parts.length === 0) {
    return;
  } else {
    // Only join the last `n` parts of the path
    const sliced = parts.slice(-n);
    toCopy = sliced.join("/"); // Don't include origin
  }

  Clipboard.write(toCopy);
}

// ag0 => Copy root domain only
mapkey("ag0", "Copy root URL", () => copyUrlParts(0));

// ag1 ~ ag4 => Copy last n parts of path (without origin)
mapkey("ag1", "Copy last 1 path segment", () => copyUrlParts(1));
mapkey("ag2", "Copy last 2 path segments", () => copyUrlParts(2));
mapkey("ag3", "Copy last 3 path segments", () => copyUrlParts(3));
mapkey("ag4", "Copy last 4 path segments", () => copyUrlParts(4));

// ag, => Open root in new tab
mapkey("ag,", "Open root URL in new tab", () => {
  const root = window.location.origin;
  window.open(root, "_blank");
});

// src/modules/urlManipulator.js
function appendClipboardToPath(n = 0) {
  try {
    const { origin, pathname } = window.location;

    // Extract and clean path segments
    const segments = pathname.split("/").filter(Boolean);
    const base = n > 0 ? segments.slice(0, n).join("/") : "";

    Clipboard.read((clip) => {
      // Robust type handling
      let clipContent = "";
      if (typeof clip === "string") {
        clipContent = clip;
      } else if (clip?.data) {
        clipContent = String(clip.data);
      } else {
        throw new Error("Clipboard content is not a string");
      }

      // Extract path from clipboard if it contains a full URL
      let clipPath = clipContent;
      try {
        if (clipContent.includes("://")) {
          const url = new URL(clipContent);
          clipPath = url.pathname + url.search + url.hash;
        }
      } catch (e) {
        // Not a valid URL, use as-is
      }

      // Normalize all paths
      const normalize = (path) =>
        path
          .replace(/^\/+|\/+$/g, "") // Trim slashes
          .replace(/\/{2,}/g, "/"); // Remove duplicate slashes

      const cleanBase = normalize(base);
      const cleanClip = normalize(clipPath);

      // Construct final path
      const newPath = [cleanBase, cleanClip]
        .filter((p) => p.length > 0)
        .join("/");

      // Build final URL without double origin
      const finalUrl = new URL(newPath, origin).href;

      // Navigate
      api.Front.showBanner(`↗️ Redirecting to: ${finalUrl}`);
      window.location.href = finalUrl;
    });
  } catch (error) {
    console.error("URL Manipulation Error:", error);
    api.Front.showBanner(`❌ Error: ${error.message}`);
  }
}

// Create mappings ap, to ap9
api.mapkey("ap,", "Append clipboard to root path", () =>
  appendClipboardToPath(0),
);

for (let i = 1; i <= 3; i++) {
  api.mapkey(`ap${i}`, `Append clipboard to first ${i} path segments`, () =>
    appendClipboardToPath(i),
  );
}

// Add help documentation
api.mapkey("aph", "Show URL manipulator help", () => {
  api.Front.showPopup(`
    <div style="padding:15px;font-family:system-ui;max-width:500px">
      <h3>URL Path Manipulator Help</h3>
      <p><strong>ap,</strong>: Append clipboard to domain root</p>
      <p><strong>ap1-ap9</strong>: Append after N path segments</p>
      <p><strong>Examples</strong>:</p>
      <ul>
        <li>URL: <code>http://localhost:5173/dashboard/tourist</code></li>
        <li>Clipboard: <code>manage-profile</code></li>
        <li><code>ap,</code> → <code>http://localhost:5173/manage-profile</code></li>
        <li><code>ap1</code> → <code>http://localhost:5173/dashboard/manage-profile</code></li>
        <li><code>ap2</code> → <code>http://localhost:5173/dashboard/tourist/manage-profile</code></li>
      </ul>
      <p>Handles URLs in clipboard, relative paths, and special characters</p>
    </div>
  `);
});

// Replace current URL with clipboard content
api.mapkey("ar", "🔄 Replace current URL with clipboard content", function () {
  api.Clipboard.read((clipContent) => {
    try {
      // Handle different clipboard content types
      let url = "";
      if (typeof clipContent === "string") {
        url = clipContent;
      } else if (clipContent?.data) {
        url = String(clipContent.data);
      } else {
        throw new Error("Clipboard content is not a valid string");
      }

      // Clean and validate the URL
      url = url.trim();

      if (!url) {
        throw new Error("Clipboard is empty");
      }

      // Add protocol if missing (assume https for non-localhost)
      if (!url.match(/^https?:\/\//)) {
        if (url.includes("localhost") || url.match(/^\d+\.\d+\.\d+\.\d+/)) {
          url = `http://${url}`;
        } else {
          url = `https://${url}`;
        }
      }

      // Validate URL format
      new URL(url); // This will throw if invalid

      // Show banner and navigate
      // api.Front.showBanner(`🔄 Replacing URL with: ${url}`);
      window.location.href = url;
    } catch (error) {
      console.error("URL Replace Error:", error);
      // api.Front.showBanner(`❌ Error: ${error.message}`);
    }
  });
});

// checking feature

// 🚀 ULTIMATE SPEED BOOST FEATURES FOR SURFINGKEYS

// ===== 1. INSTANT FORM FILLER =====
// Auto-fill forms with predefined data
const formData = {
  email: "your@email.com",
  name: "Your Name",
  phone: "123-456-7890",
  github: "https://github.com/shahjalal-labs",
  linkedin: "https://linkedin.com/in/shahjalal-labs",
};

api.mapkey("zf", "⚡ Auto-fill form fields", function () {
  const inputs = document.querySelectorAll("input, textarea, select");
  let filled = 0;

  inputs.forEach((input) => {
    const type = input.type?.toLowerCase();
    const name = input.name?.toLowerCase();
    const id = input.id?.toLowerCase();
    const placeholder = input.placeholder?.toLowerCase();

    // Smart field detection
    if (type === "email" || name?.includes("email") || id?.includes("email")) {
      input.value = formData.email;
      filled++;
    } else if (
      name?.includes("name") ||
      id?.includes("name") ||
      placeholder?.includes("name")
    ) {
      input.value = formData.name;
      filled++;
    } else if (
      type === "tel" ||
      name?.includes("phone") ||
      id?.includes("phone")
    ) {
      input.value = formData.phone;
      filled++;
    }

    // Trigger change events
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  });

  api.Front.showBanner(`⚡ Auto-filled ${filled} fields`);
});

// ===== 2. LIGHTNING FAST TAB SWITCHER WITH FUZZY SEARCH =====
api.mapkey("zt", "⚡ Fuzzy tab switcher", function () {
  api.RUNTIME("getTabs", {}, (response) => {
    const tabs = response.tabs;

    const container = document.createElement("div");
    container.id = "tab-switcher";
    Object.assign(container.style, {
      position: "fixed",
      top: "10%",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#0f172a",
      color: "#e2e8f0",
      borderRadius: "12px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
      zIndex: "10000",
      width: "700px",
      maxHeight: "70vh",
      padding: "20px",
      overflow: "hidden",
      fontFamily: "JetBrains Mono, monospace",
      border: "1px solid #334155",
    });

    const input = document.createElement("input");
    Object.assign(input.style, {
      width: "100%",
      padding: "12px 16px",
      marginBottom: "16px",
      borderRadius: "8px",
      backgroundColor: "#1e293b",
      color: "#e2e8f0",
      border: "1px solid #475569",
      outline: "none",
      fontSize: "16px",
      boxSizing: "border-box",
      fontFamily: "JetBrains Mono, monospace",
    });
    input.placeholder = "🔍 Search tabs...";

    const resultsList = document.createElement("div");
    Object.assign(resultsList.style, {
      overflowY: "auto",
      maxHeight: "50vh",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    });

    let selectedIndex = 0;

    const renderTabs = (searchTabs) => {
      resultsList.innerHTML = "";
      searchTabs.slice(0, 15).forEach((tab, idx) => {
        const div = document.createElement("div");
        Object.assign(div.style, {
          padding: "12px 16px",
          borderRadius: "6px",
          cursor: "pointer",
          backgroundColor: idx === selectedIndex ? "#3b82f6" : "#334155",
          color: idx === selectedIndex ? "#ffffff" : "#e2e8f0",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "14px",
          transition: "all 0.15s ease",
        });

        const favicon = document.createElement("img");
        favicon.src =
          tab.favIconUrl ||
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3C/svg%3E";
        favicon.style.width = "16px";
        favicon.style.height = "16px";

        const title = document.createElement("span");
        title.style.fontWeight = "500";
        title.textContent = tab.title.substring(0, 60);

        const url = document.createElement("span");
        url.style.opacity = "0.7";
        url.style.fontSize = "12px";
        url.textContent = tab.url.substring(0, 80);

        div.appendChild(favicon);
        div.appendChild(title);
        div.appendChild(url);

        div.onclick = () => {
          api.RUNTIME("focusTab", { tabId: tab.id });
          container.remove();
        };

        resultsList.appendChild(div);
      });
    };

    const filterTabs = (query) => {
      if (!query) return tabs;
      return tabs.filter(
        (tab) =>
          tab.title.toLowerCase().includes(query.toLowerCase()) ||
          tab.url.toLowerCase().includes(query.toLowerCase()),
      );
    };

    input.oninput = (e) => {
      const filtered = filterTabs(e.target.value);
      selectedIndex = 0;
      renderTabs(filtered);
    };

    input.onkeydown = (e) => {
      const filtered = filterTabs(input.value);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedIndex = Math.min(
          selectedIndex + 1,
          Math.min(filtered.length - 1, 14),
        );
        renderTabs(filtered);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, 0);
        renderTabs(filtered);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          api.RUNTIME("focusTab", { tabId: filtered[selectedIndex].id });
          container.remove();
        }
      } else if (e.key === "Escape") {
        container.remove();
      }
    };

    container.appendChild(input);
    container.appendChild(resultsList);
    document.body.appendChild(container);
    input.focus();
    renderTabs(tabs);
  });
});
```

## 📄 modules/yank/imgYank.js

```javascript
//t: 🖼️ Copy image URL under cursor or focused image
api.mapkey("ci", "🖼️ Copy image URL under cursor or focused image", () => {
  const img = document.querySelector("img:hover") || document.activeElement;
  if (img && img.tagName === "IMG") {
    const url = img.src;
    if (url) {
      api.Clipboard.write(url);
    }
  }
});

//t: Copy multiple image URLs with hints loop
let copyLoopActive = false;

api.mapkey(
  "cl",
  "🔁 Copy multiple image URLs with hints loop",
  function startCopyLoop() {
    copyLoopActive = true;

    const copyImageWithHints = () => {
      if (!copyLoopActive) return;

      api.Hints.create("img[src]", function (el) {
        api.Clipboard.write(el.src);

        // Delay a bit and show hints again
        setTimeout(copyImageWithHints, 300);
      });
    };

    copyImageWithHints();
  },
);
//t: ended Copy multiple image URLs with hints loop

// t: 📷 Copy image URL using hints
api.mapkey("cj", "📷 Copy image URL using hints", function () {
  api.Hints.create("img[src]", function (el) {
    api.Clipboard.write(el.src);
  });
});

//t: 📄 Copy image as Markdown
api.mapkey("cm", "📄 Copy image as Markdown", function () {
  api.Hints.create("img[src]", function (el) {
    const alt = el.alt || "image";
    const markdown = `![${alt}](${el.src})`;
    api.Clipboard.write(markdown);
    api.Front.showPopup("✅ Copied as Markdown!");
  });
});

// 🖼️ Copy multiple image URLs and open each in a new tab
api.mapkey("cy", "Copy multiple image URLs and open tabs", () => {
  api.Hints.create(
    "img[src]",
    (el) => {
      api.Clipboard.write(el.src);
      api.tabOpenLink(el.src);
    },
    { multipleHits: true },
  );
});

// open img in new tab
api.mapkey("gI", "#7View image in new tab", function () {
  api.Hints.create("img", (i) => api.tabOpenLink(i.src));
});
```
