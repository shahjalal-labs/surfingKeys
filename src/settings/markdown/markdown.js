const { Front, Visual, Clipboard, vmapkey } = api;

// This must be inside your SurfingKeys config

vmapkey("cn", "📝 Copy selected text as Markdown", function () {
  Visual.getWordUnderCursor(); // initialize selection if needed
  Visual.getSelection(function (sel) {
    const text = sel.trim();
    if (!text) {
      Front.showPopup("❌ No text selected");
      return;
    }

    let markdown;
    const lines = text.split("\n");
    const isMultiLine = lines.length > 1;
    const isURL = /^https?:\/\//.test(text);

    if (isMultiLine || /^\s/.test(text)) {
      markdown = "```js\n" + text + "\n```";
    } else if (isURL) {
      markdown = `[${text}](${text})`;
    } else if (text.length < 50) {
      markdown = "### " + text;
    } else {
      markdown = "`" + text + "`";
    }

    Clipboard.write(markdown);
    Front.showPopup("✅ Markdown copied:\n" + markdown);
  });
});
