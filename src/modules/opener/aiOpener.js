const { mapkey } = api;
mapkey("oac", "Open ChatGPT chk", function () {
  let newTab = window.open("https://chatgpt.com/", "_blank"); // Open ChatGPT in a new tab
  console.log(newTab, ".surfingkeys.js", 240);
  setInterval(() => {
    console.log(`hellow`);
  }, 2000);
});

//w: opening perplexity ai ai

const urlOpener = (key, desc, host, url) => {
  mapkey(key, desc, function () {
    if (window.location.hostname.includes(host)) {
      window.location.href = "https://www.perplexity.ai/";
    } else {
      window.open("https://www.perplexity.ai/", "_blank");
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
mapkey("oas", "Open deepseek", function () {
  if (window.location.hostname.includes("deepseek")) {
    window.location.href = "https://chat.deepseek.com";
  } else {
    window.open("https://chat.deepseek.com/", "_blank");
  }
});

//t: open  claude ai
mapkey("oaq", "Open claude ai", function () {
  window.open("https://claude.ai/new");
});
mapkey("oak", "Chk claude", function () {
  if (window.location.hostname.includes("claude.ai")) {
    window.location.href = "/new";
  } else {
    window.open("https://claude.ai/new", "_blank");
  }
});

mapkey("oag", "open grok ai", function () {
  if (window.location.hostname.includes("grok")) {
    window.location.href = "https://grok.com/";
  } else {
    window.open("https://grok.com/", "_blank");
  }
});

mapkey("oaa", "open google audio", function () {
  if (window.location.hostname.includes("aistudio")) {
    window.location.href = "https://aistudio.google.com/live";
  } else {
    window.open("https://aistudio.google.com/live", "_blank");
  }
});
