import TurndownService from "turndown";
// const { mapkey, Clipboard, Front } = api;

const turndown = new TurndownService();

export default function markdownDownload() {
  api.mapkey("ca", "📋 Copy & Download Markdown from visual selection", () => {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) {
      Front.showPopup("❌ No selection");
      return;
    }

    const range = sel.getRangeAt(0).cloneContents();
    const div = document.createElement("div");
    div.appendChild(range);

    const md = turndown.turndown(div.innerHTML);

    api.Clipboard.write(md);

    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    // const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    // a.download = `selection-${timestamp}.md`;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    api.Front.showPopup("✅ Markdown copied & downloaded");
  });
}
