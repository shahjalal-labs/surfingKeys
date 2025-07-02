(() => {
  // modules/defaultRemapped.js
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
  api.map(",", "<Ctrl-6>");

  // modules/github.js
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

  // modules/theme.js
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
})();
