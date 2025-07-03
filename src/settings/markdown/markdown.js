api.vmapkey("cn", "📋 Copy selection as Markdown using Turndown", () => {
  const event = new CustomEvent("triggerCopyMarkdown");
  window.dispatchEvent(event);
});
