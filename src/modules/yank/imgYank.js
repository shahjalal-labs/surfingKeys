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

// t: 📋 Copy actual image (blob) via hints
api.mapkey(
  "cy",
  "📋 Copy actual image (blob) via hints",
  function copyElementToClipboard(element) {
    window.getSelection().removeAllRanges();
    let range = document.createRange();
    range.selectNode(
      typeof element === "string"
        ? document.getElementById(elementName)
        : element,
    );
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  },
);
