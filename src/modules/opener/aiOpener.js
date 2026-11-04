const { mapkey } = api;

function openAiTab(url, hostMatch) {
  if (hostMatch && window.location.hostname.includes(hostMatch)) {
    window.location.href = url;
  } else {
    api.tabOpenLink(url);
  }
}

mapkey("oac", "Open ChatGPT", function () {
  openAiTab("https://chatgpt.com/", "chatgpt.com");
});

const urlOpener = (key, desc, url) => {
  mapkey(key, desc, function () {
    const host = new URL(url).hostname;
    openAiTab(url, host);
  });
};

mapkey("oap", "perplexity ai", function () {
  openAiTab("https://www.perplexity.ai/", "perplexity");
});

mapkey("oaj", "gemini ai", function () {
  openAiTab("https://gemini.google.com/app", "gemini");
});

mapkey("oad", "Deep ai", function () {
  api.tabOpenLink("https://deepai.org/dashboard/images");
});

// Open deepseek
urlOpener("oas", "Open deepseek", "https://chat.deepseek.com/");

// open claude ai
urlOpener("oak", "claude", "https://claude.ai/new");

// open grok ai
urlOpener("oag", "open grok ai", "https://grok.com/");

// open google audio
urlOpener("oaa", "open google audio", "https://aistudio.google.com/live");

// github copilot
urlOpener("oaq", "Open github copilot", "https://github.com/copilot");

module.exports = {
  urlOpener,
};
