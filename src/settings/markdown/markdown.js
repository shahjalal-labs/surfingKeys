import TurndownService from "turndown";

const turndown = new TurndownService({ headingStyle: "atx" });

const { mapkey } = api;
export default function markdownTableExport() {
  mapkey("mt", "🧾 Convert HTML selection (table) to Markdown", async () => {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) {
      Front.showPopup("❌ No selection");
      return;
    }

    const range = sel.getRangeAt(0).cloneContents();
    const div = document.createElement("div");
    div.appendChild(range);

    const html = div.innerHTML;
    const markdown = turndown.turndown(html);

    api.Clipboard.write(markdown);
    api.Front.showPopup("✅ Copied as Markdown");
    console.log(markdown);
  });
}
