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

// t: 📋 Copy image as file (requires a real click after hint)
api.mapkey("cy", "📋 Hint image → click → copy as file", () => {
  api.Hints.create("img[src]", function (img) {
    // Add temporary visual cue
    img.style.outline = "3px solid lime";
    img.style.cursor = "pointer";
    img.title = "Click to copy image to clipboard";

    // One-time click handler to copy image
    const clickHandler = async () => {
      try {
        const response = await fetch(img.src);
        const blob = await response.blob();
        const item = new ClipboardItem({ [blob.type]: blob });
        await navigator.clipboard.write([item]);
        api.Front.showPopup("✅ Copied image to clipboard");
      } catch (err) {
        api.Front.showPopup("❌ Failed: " + err.message);
      } finally {
        // Cleanup
        img.style.outline = "";
        img.style.cursor = "";
        img.removeEventListener("click", clickHandler);
      }
    };

    // Attach the click handler
    img.addEventListener("click", clickHandler, { once: true });
  });
});
