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

function goToWithClipboard(n = 0) {
  const { origin, pathname } = window.location;
  const parts = pathname.split("/").filter(Boolean);
  const base = parts.slice(0, n).join("/");

  Clipboard.read(function (clip) {
    const str = String(clip || "").trim();

    if (!str) {
      console.warn("Clipboard is empty.");
      return;
    }

    const cleanedClip = str.replace(/^\/|\/$/g, ""); // remove leading/trailing slashes
    const fullPath = [base, cleanedClip].filter(Boolean).join("/");
    const finalUrl = `${origin}/${fullPath}`;

    window.location.href = finalUrl;
  });
}

// ap → go to root + clipboard
mapkey("ap,", "Go to root + clipboard path", () => goToWithClipboard(0));
mapkey("ap1", "Go to 1st path + clipboard path", () => goToWithClipboard(1));
mapkey("ap2", "Go to 2nd path + clipboard path", () => goToWithClipboard(2));
mapkey("ap3", "Go to 3rd path + clipboard path", () => goToWithClipboard(3));
