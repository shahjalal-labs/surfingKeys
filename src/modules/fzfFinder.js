import Fuse from "fuse.js";
import { injectTailwind } from "../../surfingkeys";

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
  container.className =
    "fixed top-[20%] left-1/2 -translate-x-1/2 bg-gray-800 text-white rounded-xl shadow-2xl z-[9999] w-[500px] max-h-[60vh] p-4 overflow-hidden";
  container.id = "fzf-finder";

  const input = document.createElement("input");
  input.className =
    "w-full px-3 py-2 mb-2 rounded bg-gray-900 text-white outline-none border border-gray-600";
  input.placeholder = "🔍 Fuzzy Search History...";

  const resultsContainer = document.createElement("div");
  resultsContainer.className = "overflow-y-auto max-h-[40vh] space-y-1";

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
      div.className =
        "px-3 py-2 bg-gray-700 hover:bg-gray-600 cursor-pointer rounded text-sm";
      div.textContent = r.item;
      div.tabIndex = idx;
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
    if (e.key === "Escape") container.remove();
  };
}
api.mapkey("zf", "🔍 Fuzzy search history like fzf", () => {
  injectTailwind(() => {
    openFuzzyFinder(); // your fuzzy UI logic
  });
});
