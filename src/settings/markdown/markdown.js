const { Front, Visual, Clipboard, vmapkey } = api;

vmapkey("cn", "📝 Copy selection as Markdown", function () {
  Visual.getSelectedText(function (text) {
    if (!text.trim()) {
      Front.showPopup("❌ No text selected");
      return;
    }

    let markdownText;
    if (text.includes("\n")) {
      markdownText = `\`\`\`\n${text.trim()}\n\`\`\``;
    } else if (text.length < 50) {
      markdownText = `### ${text.trim()}`;
    } else {
      markdownText = `${text.trim()}`;
    }

    Clipboard.write(markdownText);
    Front.showPopup("✅ Copied as Markdown:\n" + markdownText);
  });
});
