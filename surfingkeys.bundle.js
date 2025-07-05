(() => {
  // src/modules/defaultRemapped.js
  api.map("gt", "t");
  api.map("w", "d");
  api.map("t", "T");
  api.map("ao", ";di");
  api.map("su", ";U");
  api.map("C-1", "g0");
  api.map("aa", "S");
  api.map("<Alt-j>", "l");
  api.map("<Alt-k>", "h");
  api.map("h", "E");
  api.map("gj", "G");
  api.map("gi", "yy", /.*youtube.*/i);
  api.map("l", "R");
  api.lmap("f", "<t>");
  api.map("as", ";fs");
  api.map("u", "<Ctrl-i>");
  api.map("Ctrl+d", "<Ctrl-f>");
  api.unmap("<ctrl-i>");
  api.unmap("p");
  api.map(",", "<Ctrl-6>");

  // src/modules/github.js
  api.mapkey("gr", "Repository Github", function() {
    window.open("https://github.com/shahjalal-labs?tab=repositories", "_blank");
  });
  api.mapkey("gn", "new repo github", function() {
    window.open("https://github.com/new", "_blank");
  });
  api.mapkey("ga", "\u{1F4CB} Smart GitHub Repo Copier", async function() {
    const url = window.location.href;
    const extractUserRepo = (href) => {
      const match = href.match(/^\/([^/]+)\/([^/]+)/);
      return match ? `${match[1]}/${match[2]}` : null;
    };
    if (url.includes("?tab=repositories")) {
      let clickLoopActive = true;
      const runHintLoop = () => {
        if (!clickLoopActive) return;
        api.Hints.create('a[href*="/"][itemprop="name codeRepository"]', (el) => {
          const user = location.pathname.split("/")[1];
          const repo = el.innerText.trim();
          if (user && repo) {
            api.Clipboard.write(`${user}/${repo}`);
            api.Front.showBanner(`\u2705 Copied: ${user}/${repo}`);
          }
          setTimeout(runHintLoop, 200);
        });
      };
      runHintLoop();
      api.mapkey("<Esc>", "\u274C Stop GitHub Repo Copier loop", () => {
        clickLoopActive = false;
      });
    } else if (/^https:\/\/github\.com\/[^/]+\/[^/]+/.test(url)) {
      const match = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)/);
      if (match) {
        const userRepo = `${match[1]}/${match[2]}`;
        api.Clipboard.write(userRepo);
        api.Front.showBanner(`\u2705 Copied: ${userRepo}`);
      }
      api.Hints.create("clipboard-copy[data-copy-feedback]", (el) => {
        const ssh = el.getAttribute("value") || el.innerText;
        api.Clipboard.write(ssh);
        api.Front.showBanner(`\u{1F511} Copied SSH: ${ssh}`);
      });
    } else {
      api.Front.showBanner("\u26A0\uFE0F Not on a GitHub repo or repositories page");
    }
  });
  api.mapkey(
    "gl",
    "Copy GitHub username/repo",
    function() {
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
    { domain: /./, prefix: " " }
  );
  api.mapkey("gb", "\u{1F464} Go to GitHub user profile from repo page", function() {
    const match = window.location.href.match(
      /^https:\/\/github\.com\/([^\/?#]+)/
    );
    if (match && match[1]) {
      const user = match[1];
      window.location.href = `https://github.com/${user}`;
    } else {
      api.Front.showBanner("\u274C Not on a GitHub repo page");
    }
  });
  api.mapkey(
    "gma",
    "\u{1F464} Go to GitHub user profile or my static profile",
    function() {
      const currentUrl = window.location.href;
      const staticProfile = "https://github.com/shahjalal-labs";
      if (currentUrl.startsWith("https://github.com/")) {
        const match = currentUrl.match(/^https:\/\/github\.com\/([^\/?#]+)/);
        if (match && match[1] && match[1] !== "features" && match[1] !== "topics" && match[1] !== "collections") {
          const user = match[1];
          window.location.href = `https://github.com/${user}`;
        } else {
          window.location.href = staticProfile;
        }
      } else {
        api.tabOpenLink(staticProfile);
      }
    }
  );
  api.mapkey(
    "gmb",
    "\u{1F464} Go to GitHub user profile or my static profile",
    function() {
      const currentUrl = window.location.href;
      const staticProfile = "https://github.com/shahjalal-labs";
      if (currentUrl.startsWith("https://github.com/")) {
        const match = currentUrl.match(/^https:\/\/github\.com\/([^\/?#]+)/);
        if (match && match[1] && !["features", "topics", "collections", ""].includes(match[1])) {
          const isOnUserProfile = currentUrl === `https://github.com/${match[1]}`;
          if (isOnUserProfile) {
            window.location.href = staticProfile;
          } else {
            window.location.href = `https://github.com/${match[1]}`;
          }
        } else {
          window.location.href = staticProfile;
        }
      } else {
        api.tabOpenLink(staticProfile);
      }
    }
  );

  // src/settings/theme.js
  api.mapkey("ck", "\u{1F312} Toggle dark mode (CSS inversion)", function() {
    if (!document.getElementById("__sk_darkmode")) {
      const style = document.createElement("style");
      style.id = "__sk_darkmode";
      style.innerHTML = `html { filter: invert(0.92) hue-rotate(180deg); background: #111 !important; } img, video { filter: invert(1) hue-rotate(180deg) !important; }`;
      document.head.appendChild(style);
      api.Front.showBanner("\u{1F31A} Dark mode ON");
    } else {
      document.getElementById("__sk_darkmode").remove();
      api.Front.showBanner("\u{1F31E} Dark mode OFF");
    }
  });
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

  // src/settings/settings.js
  api.Hints.setCharacters("asdjkluiopwerm,nhgzxcvq'");
  settings.startToShowEmoji = 1;

  // src/modules/opener/opener.js
  api.mapkey("ad", "Dotfiles", function() {
    window.open(
      "https://github.com/shahjalal-labs/allDotfilesBackupEndeavourOs",
      "_blank"
    );
  });
  api.mapkey("ay", "youtube opening", function() {
    window.open("https://www.youtube.com/", "_blank");
  });
  api.mapkey("sq", "Open Quran", function() {
    window.open("https://quran.com", "_blank");
  });
  api.mapkey("sb", "Open blank page", function() {
    window.open("https://blank.page/", "_blank");
  });

  // src/modules/opener/aiOpener.js
  api.mapkey("sc", "Open ChatGPT chk", function() {
    let newTab = window.open("https://chatgpt.com/", "_blank");
    console.log(newTab, ".surfingkeys.js", 240);
    setInterval(() => {
      console.log(`hellow`);
    }, 2e3);
  });
  api.mapkey("ax", "perplexity ai", function() {
    if (window.location.hostname.includes("perplexity")) {
      window.location.href = "https://www.perplexity.ai/";
    } else {
      window.open("https://www.perplexity.ai/", "_blank");
    }
  });
  api.mapkey("gh", "gemini ai", function() {
    if (window.location.hostname.includes("gemini")) {
      window.location.href = "https://gemini.google.com/app";
    } else {
      window.open("https://gemini.google.com/app", "_blank");
    }
  });
  api.mapkey("ah", "Deep ai", function() {
    window.open("https://deepai.org/dashboard/images", "_blank");
  });
  api.mapkey("al", "Open claude ai", function() {
    window.open("https://claude.ai/new");
  });
  api.mapkey("am", "Chk claude", function() {
    if (window.location.hostname.includes("claude.ai")) {
      window.location.href = "/new";
    } else {
      window.open("https://claude.ai/new", "_blank");
    }
  });

  // src/modules/opener/mernOpener.js
  api.mapkey("cd", "daisy ui", function() {
    if (window.location.hostname.includes("daisy")) {
      window.location.href = "https://daisyui.com/docs/install/vite/";
    } else {
      window.open("https://daisyui.com/docs/install/vite/", "_blank");
    }
  });
  api.mapkey("at", "tailwind css v4 installation", function() {
    window.open("https://tailwindcss.com/docs/installation/using-vite", "_blank");
  });
  api.mapkey("sl", "localhost", function() {
    window.open("http://localhost:5173/", "_blank");
  });

  // src/modules/opener/socialOpener.js
  api.mapkey("sf", "Open Facebook", function() {
    window.open("https://www.facebook.com", "_blank");
  });
  api.mapkey("sa", "email inbox opening", function() {
    window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", "_blank");
  });
  api.mapkey("sm", "whatsApp", function() {
    window.open("https://web.whatsapp.com/", "_blank");
  });
  api.mapkey("co", "open linkedin", function() {
    if (window.location.hostname.includes("linkedin")) {
      window.location.href = "https://www.linkedin.com/in/shahjalal-mern/";
    } else {
      window.open("https://www.linkedin.com/in/shahjalal-mern/", "_blank");
    }
  });
  api.mapkey("and", "open ejp discord sesssion announcement", function() {
    if (window.location.hostname.includes("discord")) {
      window.location.href = "https://discord.com/channels/1386609361345843211/1386636865842708550";
    } else {
      window.open(
        "https://discord.com/channels/1386609361345843211/1386636865842708550",
        "_blank"
      );
    }
  });
  api.mapkey("anz", "open ejp discord sesssion announcement", function() {
    if (window.location.hostname.includes("zoom")) {
      window.location.href = "https://www.zoom.us/join";
    } else {
      window.open("https://www.zoom.us/profile", "_blank");
    }
  });

  // src/modules/opener/phOpener.js
  api.mapkey("pso", "scribble l1b10", () => {
    window.open(
      "https://web.programming-hero.com/update-1/video/update-1-42-1-scribbles-cafe-project-overview-and-tailwind-setup",
      "_blank"
    );
  });
  api.mapkey("pa,", "HELP DESK", function() {
    window.open("https://helpdesk.programming-hero.com/", "_blank");
  });
  api.mapkey("sn", "PH b11 github repositories", function() {
    window.open("https://github.com/ProgrammingHero1?tab=repositories", "_blank");
  });
  api.mapkey("s1", "fbLevel1", function() {
    window.open("https://www.facebook.com/groups/programmingHero", "_blank");
  });
  api.mapkey("si", "L2B4Web", function() {
    window.open(
      "https://web.programming-hero.com/level2-batch-4-frontend-track/video/level2-batch-4-frontend-track-36-11-displaying-blogs-and-handling-loading-with-rtk-query-module-summary",
      "_blank"
    );
  });
  api.mapkey("sk", "outline L2B4", function() {
    window.open(
      "https://web.programming-hero.com/676fa61320dff5186afcd780/course-outline",
      "_blank"
    );
  });
  api.mapkey("ae", "Conceptual Level1 Batch 10", function() {
    window.open("https://web.programming-hero.com/conceptual-session", "_blank");
  });
  api.mapkey("ac", "Conceptual Level1 Batch 11", function() {
    window.open("https://web.programming-hero.com/conceptual-session", "_blank");
  });
  api.mapkey("sr", "redux", function() {
    window.open(
      "https://web.programming-hero.com/level2-batch-1/video/level2-batch-1-21-1-project-initialization-and-redux-store-setup-recap",
      "_blank"
    );
  });
  api.mapkey("sp", "pre requisite level2", function() {
    window.open(
      "https://web.programming-hero.com/next-level-prerequisites-batch4/video/next-level-prerequisites-batch4-45-8-active-route-loading-spinner-uselocation-usenavigation",
      "_blank"
    );
  });
  api.mapkey("s2", "fbLevel2", function() {
    window.open("https://www.facebook.com/groups/phapollo4", "_blank");
  });
  api.mapkey("s4", "L2B4 typescript module 2", function() {
    window.open(
      "https://web.programming-hero.com/level2-batch-4/video/level2-batch-4-2-1-type-assertion-type-narrowing"
    );
  });
  api.mapkey("ai", "Level1 Batch 11", function() {
    window.open(
      "https://web.programming-hero.com/web-11/video/web-11-15-9-module-summary-legal-system-practice-task-",
      "_blank"
    );
  });
  api.mapkey("ak", "outline level1 batch 11", function() {
    window.open(
      "https://web.programming-hero.com/675439d776a088463223e16d/course-outline",
      "_blank"
    );
  });
  api.mapkey("aj", "fb  Level1 Batch 11 support group", function() {
    window.open("https://www.facebook.com/groups/targetwebdevcareer", "_blank");
  });

  // src/modules/opener/islamicOpener.js
  api.mapkey("sj", "Open Wedding Nasheed", function() {
    window.open(
      "https://www.youtube.com/watch?v=dWBgNHT4ipE&ab_channel=HuzaifahNasheeds",
      "_blank"
    );
  });

  // src/modules/yank/imgYank.js
  api.mapkey("ci", "\u{1F5BC}\uFE0F Copy image URL under cursor or focused image", () => {
    const img = document.querySelector("img:hover") || document.activeElement;
    if (img && img.tagName === "IMG") {
      const url = img.src;
      if (url) {
        api.Clipboard.write(url);
      }
    }
  });
  var copyLoopActive = false;
  api.mapkey(
    "cl",
    "\u{1F501} Copy multiple image URLs with hints loop",
    function startCopyLoop() {
      copyLoopActive = true;
      const copyImageWithHints = () => {
        if (!copyLoopActive) return;
        api.Hints.create("img[src]", function(el) {
          api.Clipboard.write(el.src);
          setTimeout(copyImageWithHints, 300);
        });
      };
      copyImageWithHints();
    }
  );
  api.mapkey("cj", "\u{1F4F7} Copy image URL using hints", function() {
    api.Hints.create("img[src]", function(el) {
      api.Clipboard.write(el.src);
    });
  });
  api.mapkey("cm", "\u{1F4C4} Copy image as Markdown", function() {
    api.Hints.create("img[src]", function(el) {
      const alt = el.alt || "image";
      const markdown = `![${alt}](${el.src})`;
      api.Clipboard.write(markdown);
      api.Front.showPopup("\u2705 Copied as Markdown!");
    });
  });
  api.mapkey("cy", "Copy multiple image URLs and open tabs", () => {
    api.Hints.create(
      "img[src]",
      (el) => {
        api.Clipboard.write(el.src);
        api.tabOpenLink(el.src);
      },
      { multipleHits: true }
    );
  });
  api.mapkey("gI", "#7View image in new tab", function() {
    api.Hints.create("img", (i) => api.tabOpenLink(i.src));
  });

  // src/modules/hoverClick/hoverClick.js
  api.mapkey("cb", "\u{1F501} Persistent click hints", function repeatClickHints() {
    api.Hints.create(
      "a, button, select, input, textarea, summary, *[onclick], *[contenteditable=true], *.jfk-button, *.goog-flat-menu-button, *[role=button], *[role=link], *[role=menuitem], *[role=option], *[role=switch], *[role=tab], *[role=checkbox], *[role=combobox], *[role=menuitemcheckbox], *[role=menuitemradio]",
      // { tabbed: true },
      function(el) {
        el.click();
        setTimeout(() => {
          repeatClickHints();
        }, 200);
      }
    );
  });
  api.mapkey("ch", "\u{1F5B1}\uFE0F Smart hover using hints", function() {
    api.Hints.create("*", function(el) {
      ["mouseover", "mouseenter", "focus"].forEach((type) => {
        el.dispatchEvent(
          new MouseEvent(type, { bubbles: true, cancelable: true, view: window })
        );
      });
    });
  });
  api.mapkey("ca", "\u{1F50D} Reveal hidden elements using hints", function() {
    api.Hints.create("*", function(el) {
      el.style.display = "block";
      el.style.visibility = "visible";
      el.style.opacity = "1";
      el.hidden = false;
      api.Front.showPopup("\u2705 Revealed element: " + el.tagName);
    });
  });
  api.mapkey("of", "#8Open URL in incognito window", function() {
    api.Hints.create("*[href]", function(element) {
      api?.RUNTIME("openIncognito", {
        url: element.href
      });
    });
  });
})();
