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
