// Utility to copy URL path parts

const { mapkey } = api;
function copyUrlParts(n) {
  const { origin, pathname } = window.location;
  const parts = pathname.split("/").filter(Boolean); // remove empty strings
  let toCopy = "";

  if (n === 0) {
    toCopy = origin;
  } else {
    const sliced = parts.slice(-n);
    toCopy = sliced.join("/");
  }

  if (toCopy) {
    Clipboard.write(toCopy);
    Front.showPopup(`Copied: ${toCopy}`);
  } else {
    Front.showPopup("Nothing to copy");
  }
}

// Map gc0 to gc4
mapkey("ag0", "Copy root URL", () => copyUrlParts(0));
mapkey("ag1", "Copy last 1 segment of URL path", () => copyUrlParts(1));
mapkey("ag2", "Copy last 2 segments of URL path", () => copyUrlParts(2));
mapkey("ag3", "Copy last 3 segments of URL path", () => copyUrlParts(3));
mapkey("ag4", "Copy last 4 segments of URL path", () => copyUrlParts(4));

// Open root in new tab
mapkey("ag,", "Open root URL in new tab", () => {
  const root = window.location.origin;
  window.open(root, "_blank");
});
