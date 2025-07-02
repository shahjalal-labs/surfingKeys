//w: opening daisy ui
api.mapkey("cd", "daisy ui", function () {
  if (window.location.hostname.includes("daisy")) {
    window.location.href = "https://daisyui.com/docs/install/vite/";
  } else {
    window.open("https://daisyui.com/docs/install/vite/", "_blank");
  }
});

//t:  opening function
//
//t: facebook
api.mapkey("sf", "Open Facebook", function () {
  window.open("https://www.facebook.com", "_blank");
});

//w: opening perplexity ai ai

api.mapkey("ax", "perplexity ai", function () {
  if (window.location.hostname.includes("perplexity")) {
    window.location.href = "https://www.perplexity.ai/";
  } else {
    window.open("https://www.perplexity.ai/", "_blank");
  }
});

//w: opening gemini ai

api.mapkey("gh", "gemini ai", function () {
  if (window.location.hostname.includes("gemini")) {
    window.location.href = "https://gemini.google.com/app";
  } else {
    window.open("https://gemini.google.com/app", "_blank");
  }
});

//
//
//
//
//t:  open deep  ai
api.mapkey("ah", "Deep ai", function () {
  window.open("https://deepai.org/dashboard/images", "_blank");
});
//
//
//
//t: opening dotfiles
api.mapkey("ad", "Dotfiles", function () {
  window.open(
    "https://github.com/shahjalal-labs/allDotfilesBackupEndeavourOs",
    "_blank",
  );
});

//
api.mapkey("ay", "youtube opening", function () {
  window.open("https://www.youtube.com/", "_blank");
});
//
//
//
//
api.mapkey("at", "tailwind css v4 installation", function () {
  window.open("https://tailwindcss.com/docs/installation/using-vite", "_blank");
});
//
//
//
//
//
//
//
//
//t: Open Quran
//
api.mapkey("sq", "Open Quran", function () {
  window.open("https://quran.com", "_blank");
}); //
//
//
//
//
//
//
//
//
//
//
//
//t:https://web.programming-hero.com/level2-batch-4/video/level2-batch-4-1-12-never-unknown-and-nullable-type
api.mapkey("sa", "email inbox opening", function () {
  window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", "_blank");
});
//t: outline L2B4 https://web.programming-hero.com/web-11/video/web-11-0-1-welcome-message
//
//
//p: coceptual level1 batch 9
api.mapkey("ae", "Conceptual Level1 Batch 9", function () {
  window.open("https://web.programming-hero.com/conceptual-session", "_blank");
});
//
//
//
//
//p: coceptual level1 batch 11
api.mapkey("ac", "Conceptual Level1 Batch 11", function () {
  window.open("https://web.programming-hero.com/conceptual-session", "_blank");
});
////
//
//
//
//
//p: level1 batch 11
api.mapkey("ai", "Level1 Batch 11", function () {
  window.open(
    "https://web.programming-hero.com/web-11/video/web-11-15-9-module-summary-legal-system-practice-task-",
    "_blank",
  );
});
//
//
//
//
//
//
//p: outline level1 batch 11
api.mapkey("ak", "outline level1 batch 11", function () {
  window.open(
    "https://web.programming-hero.com/675439d776a088463223e16d/course-outline",
    "_blank",
  );
});
//
//
//
//
//p: level1 batch 11 fb suport group
api.mapkey("aj", "fb  Level1 Batch 11 support group", function () {
  window.open("https://www.facebook.com/groups/targetwebdevcareer", "_blank");
});
//
//
//
//
//
//
//t: fbLevel2
api.mapkey("s2", "fbLevel2", function () {
  window.open("https://www.facebook.com/groups/phapollo4", "_blank");
});
//t:L2B4
api.mapkey("s4", "L2B4 typescript module 2", function () {
  window.open(
    "https://web.programming-hero.com/level2-batch-4/video/level2-batch-4-2-1-type-assertion-type-narrowing",
  );
});
//t: pre requisite
api.mapkey("sp", "pre requisite level2", function () {
  window.open(
    "https://web.programming-hero.com/next-level-prerequisites-batch4/video/next-level-prerequisites-batch4-45-8-active-route-loading-spinner-uselocation-usenavigation",
    "_blank",
  );
});
//t:redux
api.mapkey("sr", "redux", function () {
  window.open(
    "https://web.programming-hero.com/level2-batch-1/video/level2-batch-1-21-1-project-initialization-and-redux-store-setup-recap",
    "_blank",
  );
});
//t: open  chatgpt
/* api.mapkey("sc", "Open chatgpt", function () {
  window.open("https://chatgpt.com/", "_blank");
  let p = document.querySelector("#prompt-textarea  p");
  console.log(`p tag `, p);
}); */
api.mapkey("sc", "Open ChatGPT chk", function () {
  let newTab = window.open("https://chatgpt.com/", "_blank"); // Open ChatGPT in a new tab
  console.log(newTab, ".surfingkeys.js", 240);
  setInterval(() => {
    console.log(`hellow`);
  }, 2000);
});

//
//
//
//
//
//
//t: open  claude ai
api.mapkey("al", "Open claude ai", function () {
  window.open("https://claude.ai/new");
});
api.mapkey("am", "Chk claude", function () {
  if (window.location.hostname.includes("claude.ai")) {
    window.location.href = "/new";
  } else {
    window.open("https://claude.ai/new", "_blank");
  }
});

//t: github repository page opening
api.mapkey("gr", "Repository Github", function () {
  window.open("https://github.com/shahjalal-labs?tab=repositories", "_blank");
});

//t:  new repo for github

api.mapkey("gn", "new repo github", function () {
  window.open("https://github.com/new", "_blank");
});
//t:Open blank page
api.mapkey("sb", "Open blank page", function () {
  window.open("https://blank.page/", "_blank");
});
