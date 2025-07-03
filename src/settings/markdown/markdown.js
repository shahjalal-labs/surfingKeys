const { Front, Visual, Clipboard, vmapkey } = api;

vmapkey("cn", "📝 Copy selection as Markdown", function () {
  Visual.getSelectedText(function (text) {
    const selected = text.trim();
    if (!selected) {
      Front.showPopup("❌ No text selected");
      return;
    }

    let markdown;

    // Detect if it's a block of code
    const lines = selected.split("\n");
    const isCodeBlock = lines.length > 1 || selected.includes("  ");

    if (isCodeBlock) {
      // Wrap in Markdown fenced code block
      markdown = `\`\`\`js\n${selected}\n\`\`\``;
    } else if (selected.match(/^https?:\/\//)) {
      // If it's a URL
      markdown = `[${selected}](${selected})`;
    } else if (selected.length < 50) {
      // Short, probably a heading
      markdown = `### ${selected}`;
    } else {
      // Default to inline code or paragraph
      markdown = selected.includes("`") ? selected : "`" + selected + "`";
    }

    Clipboard.write(markdown);
    Front.showPopup("✅ Markdown copied!\n" + markdown);
  });
});
