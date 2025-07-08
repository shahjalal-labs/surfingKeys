api.mapkey("oac", "Open ChatGPT chk", function () {
  let newTab = window.open("https://chatgpt.com/", "_blank"); // Open ChatGPT in a new tab
  console.log(newTab, ".surfingkeys.js", 240);
  setInterval(() => {
    console.log(`hellow`);
  }, 2000);
});

//w: opening perplexity ai ai

api.mapkey("oap", "perplexity ai", function () {
  if (window.location.hostname.includes("perplexity")) {
    window.location.href = "https://www.perplexity.ai/";
  } else {
    window.open("https://www.perplexity.ai/", "_blank");
  }
});

//w: opening gemini ai

api.mapkey("oag", "gemini ai", function () {
  if (window.location.hostname.includes("gemini")) {
    window.location.href = "https://gemini.google.com/app";
  } else {
    window.open("https://gemini.google.com/app", "_blank");
  }
});

//
//t:  open deep  ai
api.mapkey("oad", "Deep ai", function () {
  window.open("https://deepai.org/dashboard/images", "_blank");
});

//t: open  claude ai
api.mapkey("oaq", "Open claude ai", function () {
  window.open("https://claude.ai/new");
});
api.mapkey("oak", "Chk claude", function () {
  if (window.location.hostname.includes("claude.ai")) {
    window.location.href = "/new";
  } else {
    window.open("https://claude.ai/new", "_blank");
  }
});

api.mapkey("oak", "Chk claude", function () {
  if (window.location.hostname.includes("claude.ai")) {
    window.location.href = "/new";
  } else {
    window.open("https://claude.ai/new", "_blank");
  }
});

api.mapkey("oak", "Chk claude", function () {
  if (window.location.hostname.includes("claude.ai")) {
    window.location.href = "/new";
  } else {
    window.open("https://claude.ai/new", "_blank");
  }
});
