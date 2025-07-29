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
    const parts = pathname.split("/").filter(Boolean);
    const base = n > 0 ? parts.slice(0, n).join("/") : "";

    Clipboard.read((clip) => {
      // Handle clipboard type safety
      let clipContent = "";
      if (typeof clip === "string") {
        clipContent = clip;
      } else if (clip && typeof clip.data === "string") {
        clipContent = clip.data;
      } else {
        throw new Error("Clipboard content is not a string");
      }

      // Clean and normalize paths
      const cleanClip = clipContent
        .replace(/^\/+|\/+$/g, "") // Trim leading/trailing slashes
        .replace(/\/{2,}/g, "/"); // Remove duplicate slashes

      // Construct new URL
      const newPath = base ? `${base}/${cleanClip}` : cleanClip;
      const finalUrl = `${origin}/${newPath}`.replace(/\/{2,}/g, "/");

      // Debug info
      console.debug("URL Manipulation Debug:");
      console.debug("- Original URL:", window.location.href);
      console.debug("- Base segments:", base);
      console.debug("- Clipboard content:", clipContent);
      console.debug("- Cleaned clipboard:", cleanClip);
      console.debug("- Constructed URL:", finalUrl);

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

for (let i = 1; i <= 9; i++) {
  api.mapkey(`ap${i}`, `Append clipboard to first ${i} path segments`, () =>
    appendClipboardToPath(i),
  );
}
