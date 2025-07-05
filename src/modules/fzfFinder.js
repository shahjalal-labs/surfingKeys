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

// Max history size
const MAX_CLIP_HISTORY = 20;

// Load existing history or initialize
let clipHistory = [];

api.storage.get("clipHistory").then((data) => {
  clipHistory = data.clipHistory || [];
});

// Helper to save history
function saveHistory() {
  api.storage.set("clipHistory", clipHistory);
}

// Add new item to history (most recent first, no duplicates)
function addToHistory(text) {
  if (!text) return;
  // Remove if already exists
  clipHistory = clipHistory.filter((t) => t !== text);
  clipHistory.unshift(text);
  if (clipHistory.length > MAX_CLIP_HISTORY) {
    clipHistory.pop();
  }
  saveHistory();
}

// Override Clipboard.write to also add to history
const originalClipboardWrite = Clipboard.write;
Clipboard.write = function (text) {
  addToHistory(text);
  return originalClipboardWrite(text);
};

// Mapkey: Show popup menu of clipboard history and paste selected
mapkey("yp", "Paste from clipboard history", function () {
  if (clipHistory.length === 0) {
    Front.showPopup("Clipboard history is empty");
    return;
  }

  // Show a simple list and let user pick one
  Hints.create(
    clipHistory.map((text, i) => ({
      text,
      key: (i + 1).toString(),
    })),
    function (selectedText) {
      Clipboard.write(selectedText);
      Normal.insert(selectedText);
      Front.showPopup("Pasted from clipboard history");
    },
    {
      multipleHits: false,
      active: true,
    },
  );
});

// Mapkey: cycle forward through history and paste (you can extend to backward cycling)
let historyIndex = 0;
mapkey("yn", "Cycle clipboard history forward", function () {
  if (clipHistory.length === 0) {
    Front.showPopup("Clipboard history is empty");
    return;
  }
  historyIndex = (historyIndex + 1) % clipHistory.length;
  let text = clipHistory[historyIndex];
  Clipboard.write(text);
  Normal.insert(text);
  Front.showPopup(
    `Pasted: ${text.length > 20 ? text.slice(0, 20) + "..." : text}`,
  );
});

// Mapkey: clear clipboard history
mapkey("yc", "Clear clipboard history", function () {
  clipHistory = [];
  saveHistory();
  Front.showPopup("Clipboard history cleared");
});
