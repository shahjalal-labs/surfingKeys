const { mapkey } = api;
mapkey("oac", "Open ChatGPT chk", function () {
  let newTab = window.open("https://chatgpt.com/", "_blank"); // Open ChatGPT in a new tab
  console.log(newTab, ".surfingkeys.js", 240);
  setInterval(() => {
    console.log(`hellow`);
  }, 2000);
});

//w: opening perplexity ai ai

const urlOpener = (key, desc, url) => {
  mapkey(key, desc, function () {
    const host = new URL(url).hostname;
    if (window.location.hostname === host) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  });
};

mapkey("oap", "perplexity ai", function () {
  if (window.location.hostname.includes("perplexity")) {
    window.location.href = "https://www.perplexity.ai/";
  } else {
    window.open("https://www.perplexity.ai/", "_blank");
  }
});

//w: opening gemini ai

mapkey("oaj", "gemini ai", function () {
  if (window.location.hostname.includes("gemini")) {
    window.location.href = "https://gemini.google.com/app";
  } else {
    window.open("https://gemini.google.com/app", "_blank");
  }
});

//
//t:  open deep  ai
mapkey("oad", "Deep ai", function () {
  window.open("https://deepai.org/dashboard/images", "_blank");
});

// Open deepseek
urlOpener("oas", "Open deepseek", "https://chat.deepseek.com/");

//t: open  claude ai
urlOpener("oak", "claude", "https://claude.ai/new");

// open grok ai
urlOpener("oag", "open grok ai", "https://grok.com/");

// open google audio
urlOpener("oaa", "open google audio", "https://aistudio.google.com/live");

// github copilot
urlOpener("oaq", "Open github copilot", "https://github.com/copilot");
