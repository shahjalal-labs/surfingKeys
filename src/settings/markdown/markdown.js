api.mapkey(
  "cn",
  "🪄 Convert clipboard text to Markdown and copy",
  async function () {
    try {
      const text = await navigator.clipboard.readText();
      const trimmed = text.trim();

      if (!trimmed) {
        api.Front.showPopup("❌ Clipboard is empty");
        return;
      }

      let markdownText;
      if (trimmed.startsWith("http")) {
        markdownText = `[${trimmed}](${trimmed})`;
      } else if (trimmed.includes("\n")) {
        markdownText = `\`\`\`\n${trimmed}\n\`\`\``;
      } else if (trimmed.length < 50) {
        markdownText = `### ${trimmed}`;
      } else {
        markdownText = trimmed;
      }

      await navigator.clipboard.writeText(markdownText);
      api.Front.showPopup("✅ Copied as Markdown:\n" + markdownText);
    } catch (err) {
      api.Front.showPopup("❌ Error reading clipboard");
      console.error(err);
    }
  },
);
