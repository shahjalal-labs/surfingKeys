Also return a `.sh` script that will:

- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved modules version`

---

## 🌲 Full Project Structure (cwd)

```bash
/run/media/sj/developer/surfingKeys
├── bun.lock
├── package.json
├── random.md
├── readmeGenerate.md
├── README.md
├── src
│   ├── modules
│   │   ├── defaultRemapped.js
│   │   ├── fzfFinder.js
│   │   ├── github.js
│   │   ├── hoverClick
│   │   │   └── hoverClick.js
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
│   │   │   ├── socialOpener.js
│   │   │   └── webDevOpener.js
│   │   ├── testDate.js
│   │   └── yank
│   │       ├── imgYank.js
│   │       └── urlYanker.js
│   └── settings
│       ├── settings.js
│       └── theme.js
├── structure.md
├── surfingkeys.bundle.js
└── surfingkeys.js

11 directories, 28 files
```

## 📁 Target Module Tree (modules)

```bash
/run/media/sj/developer/surfingKeys/src/modules
├── defaultRemapped.js
├── fzfFinder.js
├── github.js
├── hoverClick
│   └── hoverClick.js
├── markdown
│   └── markdown.js
├── opener
│   ├── aiOpener.js
│   ├── islamicOpener.js
│   ├── mernOpener.js
│   ├── opener.js
│   ├── PH
│   │   ├── PhHelp
│   │   │   └── phHelp.js
│   │   └── PhWeb
│   │       └── phWeb.js
│   ├── phOpener.js
│   ├── resourceOpener.js
│   ├── socialOpener.js
│   └── webDevOpener.js
├── testDate.js
└── yank
    ├── imgYank.js
    └── urlYanker.js

8 directories, 18 files
```

## 📄 Module Files & Contents

### `defaultRemapped.js`

```javascript
api.map("gt", "t");
api.map("w", "d");
api.map("t", "T");
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
api.map(",", "<Ctrl-6>");
```

### `fzfFinder.js`

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

### `github.js`

```javascript
// ╭──────────── Block Start ────────────╮
// ╰───────────── Block End ─────────────╯
//w: 1╭──────────── Block Start ────────────╮
//t: github repository page opening
api.mapkey("gr", "Repository Github", function () {
  window.open("https://github.com/shahjalal-labs?tab=repositories", "_blank");
});

//t:  new repo for github

api.mapkey("gn", "new repo github", function () {
  window.open("https://github.com/new", "_blank");
});
//w: 1╰───────────── Block End ─────────────╯

//w: 2╭──────────── Block Start ────────────╮
// t: 📋 Smart GitHub Repo Copier
api.mapkey("ga", "📋 Smart GitHub Repo Copier", async function () {
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
  "gl",
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
api.mapkey("gb", "👤 Go to GitHub user profile from repo page", function () {
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

//w: 6╰───────────── Block End ─────────────╯
//w: 7╭──────────── Block Start ────────────╮

//w: 7╰───────────── Block End ─────────────╯
//w: 8╭──────────── Block Start ────────────╮

//w: 8╰───────────── Block End ─────────────╯
//w: 9╭──────────── Block Start ────────────╮

//w: 9╰───────────── Block End ─────────────╯
//w: 5╭──────────── Block Start ────────────╮

//w: 5╰───────────── Block End ─────────────╯
//w: 6╭──────────── Block Start ────────────╮

//w: 6╰───────────── Block End ─────────────╯
//w: 7╭──────────── Block Start ────────────╮

//w: 7╰───────────── Block End ─────────────╯
//w: 8╭──────────── Block Start ────────────╮

//w: 8╰───────────── Block End ─────────────╯
//w: 9╭──────────── Block Start ────────────╮

//w: 9╰───────────── Block End ─────────────╯

//w: 5╭──────────── Block Start ────────────╮

//w: 5╰───────────── Block End ─────────────╯
//w: 6╭──────────── Block Start ────────────╮

//w: 6╰───────────── Block End ─────────────╯
//w: 7╭──────────── Block Start ────────────╮

//w: 7╰───────────── Block End ─────────────╯
//w: 8╭──────────── Block Start ────────────╮

//w: 8╰───────────── Block End ─────────────╯
//w: 9╭──────────── Block Start ────────────╮

//w: 9╰───────────── Block End ─────────────╯
//w: 5╭──────────── Block Start ────────────╮

//w: 5╰───────────── Block End ─────────────╯
//w: 6╭──────────── Block Start ────────────╮

//w: 6╰───────────── Block End ─────────────╯
//w: 7╭──────────── Block Start ────────────╮

//w: 7╰───────────── Block End ─────────────╯
//w: 8╭──────────── Block Start ────────────╮

//w: 8╰───────────── Block End ─────────────╯
//w: 9╭──────────── Block Start ────────────╮

//w: 9╰───────────── Block End ─────────────╯
```

### `hoverClick/hoverClick.js`

```javascript
//t: 🔁 Persistent smart click loop that detects and clicks both semantic and styled custom clickable elements across page navigations.
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

//t: 🖱️ Smart hover using hints
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

// t: 🔍 Reveal hidden elements using hints
api.mapkey("ca", "🔍 Reveal hidden elements using hints", function () {
  api.Hints.create("*", function (el) {
    el.style.display = "block";
    el.style.visibility = "visible";
    el.style.opacity = "1";
    el.hidden = false;
    api.Front.showPopup("✅ Revealed element: " + el.tagName);
  });
});

api.mapkey("of", "#8Open URL in incognito window", function () {
  api.Hints.create("*[href]", function (element) {
    api?.RUNTIME("openIncognito", {
      url: element.href,
    });
  });
});
```

### `markdown/markdown.js`

```javascript

```

### `opener/aiOpener.js`

```javascript
api.mapkey("oac", "Open ChatGPT chk", function () {
  let newTab = window.open("https://chatgpt.com/", "_blank"); // Open ChatGPT in a new tab
  console.log(newTab, ".surfingkeys.js", 240);
  setInterval(() => {
    console.log(`hellow`);
  }, 2000);
});

//w: opening perplexity ai ai

api.mapkey("oap", "perplexity ai", function () {
  if (window.location.hostname.includes("perplexity")) {
    window.location.href = "https://www.perplexity.ai/";
  } else {
    window.open("https://www.perplexity.ai/", "_blank");
  }
});

//w: opening gemini ai

api.mapkey("oaj", "gemini ai", function () {
  if (window.location.hostname.includes("gemini")) {
    window.location.href = "https://gemini.google.com/app";
  } else {
    window.open("https://gemini.google.com/app", "_blank");
  }
});

//
//t:  open deep  ai
api.mapkey("oad", "Deep ai", function () {
  window.open("https://deepai.org/dashboard/images", "_blank");
});
api.mapkey("oas", "Open deepseek", function () {
  if (window.location.hostname.includes("deepseek")) {
    window.location.href = "https://chat.deepseek.com";
  } else {
    window.open("https://chat.deepseek.com/", "_blank");
  }
});

//t: open  claude ai
api.mapkey("oaq", "Open claude ai", function () {
  window.open("https://claude.ai/new");
});
api.mapkey("oak", "Chk claude", function () {
  if (window.location.hostname.includes("claude.ai")) {
    window.location.href = "/new";
  } else {
    window.open("https://claude.ai/new", "_blank");
  }
});

api.mapkey("oag", "open grok ai", function () {
  if (window.location.hostname.includes("grok")) {
    window.location.href = "https://grok.com/";
  } else {
    window.open("https://grok.com/", "_blank");
  }
});

api.mapkey("oaa", "open google audio", function () {
  if (window.location.hostname.includes("aistudio")) {
    window.location.href = "https://aistudio.google.com/live";
  } else {
    window.open("https://aistudio.google.com/live", "_blank");
  }
});
```

### `opener/islamicOpener.js`

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
api.mapkey("sq", "Open Quran", function () {
  window.open("https://quran.com", "_blank");
});
```

### `opener/mernOpener.js`

```javascript
//w: opening daisy ui
```

### `opener/opener.js`

```javascript
//t: opening dotfiles
api.mapkey("ad", "Dotfiles", function () {
  window.open(
    "https://github.com/shahjalal-labs/allDotfilesBackupEndeavourOs",
    "_blank",
  );
});

//
api.mapkey("ay", "youtube opening", function () {
  window.open("https://www.youtube.com/", "_blank");
});
//
//
//t:Open blank page
api.mapkey("sb", "Open blank page", function () {
  window.open("https://blank.page/", "_blank");
});
```

### `opener/PH/PhHelp/phHelp.js`

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

### `opener/PH/PhWeb/phWeb.js`

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

### `opener/phOpener.js`

```javascript
//t: ph scribble l1b10
api.mapkey("pso", "scribble l1b10", () => {
  window.open(
    "https://web.programming-hero.com/update-1/video/update-1-42-1-scribbles-cafe-project-overview-and-tailwind-setup",
    "_blank",
  );
});

api.mapkey("pwh", "HELP DESK", function () {
  window.open("https://helpdesk.programming-hero.com/", "_blank");
});

//t:L2B4Web
api.mapkey("si", "L2B4Web", function () {
  window.open(
    "https://web.programming-hero.com/level2-batch-4-frontend-track/video/level2-batch-4-frontend-track-36-11-displaying-blogs-and-handling-loading-with-rtk-query-module-summary",
    "_blank",
  );
});
//
//t: outline L2B4 https://web.programming-hero.com/web-11/video/web-11-0-1-welcome-message
api.mapkey("sk", "outline L2B4", function () {
  window.open(
    "https://web.programming-hero.com/676fa61320dff5186afcd780/course-outline",
    "_blank",
  );
});

//p: coceptual level1 batch 10
api.mapkey("ae", "Conceptual Level1 Batch 10", function () {
  window.open("https://web.programming-hero.com/conceptual-session", "_blank");
});

//p: coceptual level1 batch 11
api.mapkey("acd", "Conceptual Level1 Batch 11", function () {
  window.open("https://web.programming-hero.com/conceptual-session", "_blank");
});

//t:redux
api.mapkey("sr", "redux", function () {
  window.open(
    "https://web.programming-hero.com/level2-batch-1/video/level2-batch-1-21-1-project-initialization-and-redux-store-setup-recap",
    "_blank",
  );
});

//t: pre requisite
api.mapkey("sp", "pre requisite level2", function () {
  window.open(
    "https://web.programming-hero.com/next-level-prerequisites-batch4/video/next-level-prerequisites-batch4-45-8-active-route-loading-spinner-uselocation-usenavigation",
    "_blank",
  );
});

//t:L2B4
api.mapkey("s4", "L2B4 typescript module 2", function () {
  window.open(
    "https://web.programming-hero.com/level2-batch-4/video/level2-batch-4-2-1-type-assertion-type-narrowing",
  );
});
//p: level1 batch 11
api.mapkey("pwj", "Level1 Batch 11", function () {
  window.open(
    "https://web.programming-hero.com/web-11/video/web-11-15-9-module-summary-legal-system-practice-task-",
    "_blank",
  );
});
//

//
```

### `opener/resourceOpener.js`

```javascript
// https://md-shahjalal.imgbb.com/
const openGDrive = () => {
  if (window.location.hostname.includes("drive")) {
    window.location.href =
      "https://drive.google.com/drive/u/0/folders/1FD0nX0xdN64zZX_LgV_bZvz7b7Yq30J4";
  } else {
    window.open(
      "https://drive.google.com/drive/u/0/folders/1FD0nX0xdN64zZX_LgV_bZvz7b7Yq30J4",
      "_blank",
    );
  }
};
api.mapkey("ord", "open GDrive Resource", openGDrive);

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
```

### `opener/socialOpener.js`

```javascript
// p: open discord session announcement
api.mapkey("ouc", "open gContacts", function () {
  if (window.location.hostname.includes("contacts")) {
    window.location.href = "https://contacts.google.com/new";
  } else {
    window.location.href = "https://contacts.google.com/";
    window.open("https://contacts.google.com/new", "_blank");
  }
});

api.mapkey("oux", "open twitter @shahjalal_labs", function () {
  if (window.location.hostname.includes("x.com")) {
    window.location.href = "https://x.com/shahjalal_labs ";
  } else {
    window.open("https://x.com/shahjalal_labs ", "_blank");
  }
});
//t: facebook
api.mapkey("ouf", "Open Facebook", function () {
  window.open("https://www.facebook.com", "_blank");
});

api.mapkey("oue", "email inbox opening", function () {
  window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", "_blank");
});

//t: open whatsApp
api.mapkey("ouw", "whatsApp", function () {
  window.open("https://web.whatsapp.com/", "_blank");
});
// p: open zoom session
api.mapkey("oul", "open linkedin", function () {
  if (window.location.hostname.includes("linkedin")) {
    window.location.href = "https://www.linkedin.com/in/shahjalal-labs/";
  } else {
    window.open("https://www.linkedin.com/in/shahjalal-labs/", "_blank");
  }
});
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

// p: open zoom session
api.mapkey("anz", "open ejp discord sesssion announcement", function () {
  if (window.location.hostname.includes("zoom")) {
    window.location.href = "https://www.zoom.us/join";
  } else {
    window.open("https://www.zoom.us/profile", "_blank");
  }
});

//t: open youtube @shahjalal-labs
api.mapkey("ouy", "open yt @shahjalal-labs", function () {
  if (window.location.hostname.includes("youtube")) {
    window.location.href = "https://www.youtube.com/@shahjalal-labs";
  } else {
    window.open("https://www.youtube.com/@shahjalal-labs", "_blank");
  }
});
```

### `opener/webDevOpener.js`

```javascript
api.mapkey("ocm", "open mongodb", function () {
  if (window.location.hostname.includes("mongodb")) {
    window.location.href =
      "https://cloud.mongodb.com/v2/68216ab8964d5b3dffeb6a42#/overview?connectCluster=Cluster0";
  } else {
    window.open(
      "https://cloud.mongodb.com/v2/68216ab8964d5b3dffeb6a42#/overview?connectCluster=Cluster0",
      "_blank",
    );
  }
});

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

api.mapkey("ocd", "open daisyUI", function () {
  if (window.location.hostname.includes("daisyui")) {
    window.location.href = "https://daisyui.com/docs/install/vite/";
  } else {
    window.open("https://daisyui.com/docs/install/vite/", "_blank");
  }
});

//t:localhost

api.mapkey("ocl", "open localhost", function () {
  if (window.location.hostname.includes("localhost")) {
    window.open("http://localhost:5174/", "_blank");
  } else {
    window.open("http://localhost:5173/", "_blank");
  }
});
```

### `testDate.js`

```javascript
// src/modules/testDate.js
import dayjs from "dayjs";

function showCurrentDate() {
  const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
  api.Front.showBanner(`🕒 Now: ${now}`);
}

api.mapkey("g,", "🕒 Show current date", showCurrentDate);
```

### `yank/imgYank.js`

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

### `yank/urlYanker.js`

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
```
