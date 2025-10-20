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
