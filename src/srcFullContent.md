# srcFullContent.md

## 🌲 Full Project Structure

```bash
/home/sj/dotfiles-sj/surfingKeys
├── bun.lock
├── note.md
├── package.json
├── random.md
├── README.md
├── src
│   ├── modules
│   │   ├── API.md
│   │   ├── defaultRemapped.js
│   │   ├── fzfFinder.js
│   │   ├── github
│   │   │   ├── github.js
│   │   │   └── githubNavigator.js
│   │   ├── hoverClick
│   │   │   └── hoverClick.js
│   │   ├── insertMode
│   │   │   └── textExpanse
│   │   │       └── textExpanse.js
│   │   ├── markdown
│   │   │   └── markdown.js
│   │   ├── opener
│   │   │   ├── aiOpener.js
│   │   │   ├── islamicOpener.js
│   │   │   ├── mernOpener.js
│   │   │   ├── opener.js
│   │   │   ├── PH
│   │   │   │   ├── PhHelp
│   │   │   │   │   └── phHelp.js
│   │   │   │   └── PhWeb
│   │   │   │       └── phWeb.js
│   │   │   ├── phOpener.js
│   │   │   ├── resourceOpener.js
│   │   │   ├── smtFigma
│   │   │   │   └── smtFigma.js
│   │   │   ├── socialOpener.js
│   │   │   └── webDevOpener.js
│   │   ├── style
│   │   │   ├── chatgpt.js
│   │   │   ├── chatgpt_prev.js
│   │   │   ├── deepseek.js
│   │   │   └── google.js
│   │   ├── tab.js
│   │   ├── testDate.js
│   │   └── yank
│   │       ├── imgYank.js
│   │       └── urlYanker.js
│   └── settings
│       ├── settings.js
│       └── theme.js
├── structure.md
├── surfingkeys.bundle.js
└── surfingkeys.js

16 directories, 37 files
```

## 📁 src Module Tree

```bash
/home/sj/dotfiles-sj/surfingKeys/src
├── assets
│   └── screenshots
│       ├── ss-12-42-27-AM_03-07-25.png
│       └── ss-12-59-05-AM_03-07-25.png
├── modules
│   ├── API.md
│   ├── defaultRemapped.js
│   ├── fzfFinder.js
│   ├── github
│   │   ├── github.js
│   │   └── githubNavigator.js
│   ├── hoverClick
│   │   └── hoverClick.js
│   ├── insertMode
│   │   └── textExpanse
│   │       └── textExpanse.js
│   ├── markdown
│   │   └── markdown.js
│   ├── opener
│   │   ├── aiOpener.js
│   │   ├── islamicOpener.js
│   │   ├── mernOpener.js
│   │   ├── opener.js
│   │   ├── PH
│   │   │   ├── PhHelp
│   │   │   │   └── phHelp.js
│   │   │   └── PhWeb
│   │   │       └── phWeb.js
│   │   ├── phOpener.js
│   │   ├── resourceOpener.js
│   │   ├── smtFigma
│   │   │   └── smtFigma.js
│   │   ├── socialOpener.js
│   │   └── webDevOpener.js
│   ├── style
│   │   ├── chatgpt.js
│   │   ├── chatgpt_prev.js
│   │   ├── deepseek.js
│   │   └── google.js
│   ├── tab.js
│   ├── testDate.js
│   └── yank
│       ├── imgYank.js
│       └── urlYanker.js
└── settings
    ├── settings.js
    └── theme.js

17 directories, 31 files
```

## 📋 schema.prisma

```prisma

```

## 📦 package.json

```json
{
  "scripts": {
    "build": "bun run esbuild surfingkeys.js --bundle --outfile=surfingkeys.bundle.js --format=iife"
  },
  "dependencies": {
    "dayjs": "^1.11.18",
    "dotenv": "^17.2.1",
    "fuse.js": "^7.1.0",
    "turndown": "^7.2.0"
  },
  "devDependencies": {
    "esbuild": "^0.25.5"
  }
}
```

## 📄 settings/theme.js

```javascript
//
//w: (start)╭──────────── Toggle dark mode ────────────╮
// t: toggle dark mode (CSS inversion)
api.mapkey("ck", "🌒 Toggle dark mode (CSS inversion)", inverse);

function inverse() {
  if (!document.getElementById("__sk_darkmode")) {
    const style = document.createElement("style");
    style.id = "__sk_darkmode";
    style.innerHTML = `html { filter: invert(0.92) hue-rotate(180deg); background: #111 !important; } img, video { filter: invert(1) hue-rotate(180deg) !important; }`;
    document.head.appendChild(style);
    api.Front.showBanner("🌚 Dark mode ON");
  } else {
    document.getElementById("__sk_darkmode").remove();
    api.Front.showBanner("🌞 Dark mode OFF");
  }
}

//w: (end)  ╰──────────── Toggle dark mode ────────────╯
//
//
//w: 25/11/2024 12:51 PM Mon GMT+6 Sharifpur, Gazipur, Dhaka
//w: (start)╭────────────  settings.theme ────────────╮
settings.theme = `
.sk_theme {
    font-family: "Input Sans Condensed", Charcoal, sans-serif;
    font-size: 10pt;
    background: #1e1e2e; /* Base */
    color: #cdd6f4; /* Text */
}
.sk_theme tbody {
    color: #f5e0dc; /* Light text */
}
.sk_theme input {
    color: #cdd6f4; /* Input text */
}
.sk_theme .url {
    color: #89b4aa; /* Blue */
}
.sk_theme .annotation {
    color: #f5c2e7; /* Pink */
}
.sk_theme .omnibar_highlight {
    color: #a6e3a1; /* Green */
}
.sk_theme .omnibar_timestamp {
    color: #fab387; /* Peach */
}
.sk_theme .omnibar_visitcount {
    color: #f9e2af; /* Yellow */
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #181825; /* Darker Base */
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #313244; /* Highlight */
}
#sk_status, #sk_find {
    font-size: 20pt;
    background: #1e1e2e; /* Base */
    color: #cdd6f4; /* Text */
}`;
//w: (end)  ╰────────────  settings.theme ────────────╯
```

## 📄 settings/settings.js

```javascript
api.Hints.setCharacters("asdjkluiopwermnhgzx,cvq'"); // for right hand  hints will show for now right hands

settings.startToShowEmoji = 1;
```

## 📄 modules/markdown/markdown.js

```javascript

```

## 📄 modules/insertMode/textExpanse/textExpanse.js

```javascript
// Block chatgpt.com completely
if (location.hostname === "chatgpt.com") {
  return;
}

const { imapkey } = api;

function textPaster(keys, desc, text) {
  imapkey(keys, desc, function () {
    document.execCommand("insertText", false, text);
  });
}

// insert fullname
textPaster(",nn", "Insert Fullname: Md. Shahjalal", "Md. Shahjalal");

// insert firstname:
textPaster(",nf", "Insert Firstname: Md.", "Md. ");

// insert root mail
textPaster(
  ",er",
  "insert root mail muhommodshah...",
  "muhommodshahjalal@gmail.com",
);

// insert mail dev.shah
textPaster(",ed", "insert mail dev.shah...", "dev.shahjalal@gmail.com");

// insert mail javedkarim.codes...
textPaster(
  ",ej",
  "insert mail javedkarim.codes...",
  "javedkarim.codes@gmail.com",
);

//w: (start)╭──────────── insert backend mail ────────────╮
textPaster(
  ",eb",
  "Insert Backend Mail: shahjalal.backend@gmail.com",
  "shahjalal.backend@gmail.com",
);
//w: (end)  ╰──────────── insert backend mail ────────────╯

// Insert BL Phn: 01989
textPaster(",pb", "Insert BL Phn: 01989", "01989763775");

// Insert TEL Phn: 01540
textPaster(",pt", "Insert TEL Phn: 01540", "01540325659");

// Insert Salam
textPaster(",is", "Insert Salam", "Assalamu Alaikum,");
```

## 📄 modules/opener/islamicOpener.js

```javascript
//t: isami music playlist
//
/* api.mapkey("su", "isami music playlist", function () {
  window.open(
    "https://www.youtube.com/watch?v=rL6qQ49hBlQ&list=PLXOE5SEv6NpDUSPNxCu1fFTfBi8HZDeJM",
    "_blank",
  );
}); */

//t: Open Wedding Nasheed
api.mapkey("sj", "Open Wedding Nasheed", function () {
  window.open(
    "https://www.youtube.com/watch?v=dWBgNHT4ipE&ab_channel=HuzaifahNasheeds",
    "_blank",
  );
});

//t: Open Quran
//
api.mapkey("opq", "Open Quran", function () {
  window.open("https://quran.com", "_blank");
});

//w: ╭──────────── Block Start ────────────╮
//t: open shariyah solution ahmadullah
api.mapkey("ops", "open shariyah solution ahmadullah", function () {
  if (
    window.location.hostname.includes("youtube.com") &&
    window.location.pathname.toLowerCase().includes("@sheikhahmadullahofficial")
  ) {
    window.location.href =
      "https://www.youtube.com/@sheikhahmadullahofficial/streams";
  } else {
    window.open(
      "https://www.youtube.com/@sheikhahmadullahofficial/streams",
      "_blank",
    );
  }
});
//w: ╰───────────── Block End ─────────────╯
```

## 📄 modules/opener/mernOpener.js

```javascript
//w: opening daisy ui
```

## 📄 modules/opener/PH/PhHelp/phHelp.js

```javascript
api.mapkey("phg", "PH b11 github repositories", function () {
  window.open("https://github.com/ProgrammingHero1?tab=repositories", "_blank");
});

//t: fbLevel1
api.mapkey("phc", "fbLevel1", function () {
  window.open("https://www.facebook.com/groups/programmingHero", "_blank");
});

//t: fbLevel2
api.mapkey("ph2", "fbLevel2", function () {
  window.open("https://www.facebook.com/groups/phapollo4", "_blank");
});

//p: level1 batch 11 fb suport group
api.mapkey("phf", "fb  Level1 Batch 11 support group", function () {
  window.open("https://www.facebook.com/groups/targetwebdevcareer", "_blank");
});

api.mapkey("phs", "SCIC", function () {
  if (window.location.pathname.includes("/groups/scic11/announcements")) {
    console.log(window.location.pathname, "pathname");
    window.location.href = "https://www.facebook.com/groups/scic11/";
  } else {
    window.open(
      "https://www.facebook.com/groups/scic11/announcements",

      "_blank",
    );
  }
});
```

## 📄 modules/opener/PH/PhWeb/phWeb.js

```javascript
api.mapkey("pws", "SCIC", function () {
  if (window.location.pathname.includes("/groups/scic11/announcements")) {
    console.log(window.location.pathname, "pathname");
    window.location.href =
      "https://web.programming-hero.com/scic-11/video/scic-11-0-2-tips-to-get-the-best-out-of-scic";
  } else {
    window.open(
      "https://web.programming-hero.com/scic-11/video/scic-11-0-2-tips-to-get-the-best-out-of-scic",

      "_blank",
    );
  }
});

//p: outline SCIC
api.mapkey("pwo", "outline SCIC", function () {
  window.open(
    "https://web.programming-hero.com/688f7b564965ce7350b23f35/course-outline",
    "_blank",
  );
});
```

## 📄 modules/opener/socialOpener.js

```javascript
//w: ╭──────────── Block Start ────────────╮

//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
// p: open discord session announcement
api.mapkey("ouc", "open gContacts", function () {
  if (window.location.hostname.includes("contacts")) {
    window.location.href = "https://contacts.google.com/new";
  } else {
    window.location.href = "https://contacts.google.com/";
    window.open("https://contacts.google.com/new", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
api.mapkey("oux", "open twitter @shahjalal_labs", function () {
  if (window.location.hostname.includes("x.com")) {
    window.location.href = "https://x.com/shahjalal_labs ";
  } else {
    window.open("https://x.com/shahjalal_labs ", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯
//

//
//w: ╭──────────── Block Start ────────────╮
//t: facebook
api.mapkey("ouf", "Open Facebook", function () {
  window.open("https://www.facebook.com", "_blank");
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
api.mapkey("oue", "email inbox opening", function () {
  window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", "_blank");
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
//t: open whatsApp
api.mapkey("ouw", "whatsApp", function () {
  window.open("https://web.whatsapp.com/", "_blank");
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
// p: open zoom session
api.mapkey("oul", "open linkedin", function () {
  if (window.location.hostname.includes("linkedin")) {
    window.location.href = "https://www.linkedin.com/in/shahjalal-labs/";
  } else {
    window.open("https://www.linkedin.com/in/shahjalal-labs/", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
// p: open discord session announcement
api.mapkey("oud", "open ejp discord sesssion announcement", function () {
  if (window.location.hostname.includes("discord")) {
    window.location.href =
      "https://discord.com/channels/1391805056957026364/1391809512100462592";
  } else {
    window.open(
      "https://discord.com/channels/1391805056957026364/1391809512100462592",
      "_blank",
    );
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
// p: open zoom session
api.mapkey("anz", "open ejp discord sesssion announcement", function () {
  if (window.location.hostname.includes("zoom")) {
    window.location.href = "https://www.zoom.us/join";
  } else {
    window.open("https://www.zoom.us/profile", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
//t: open youtube @shahjalal-labs
api.mapkey("ouy", "open yt @shahjalal-labs", function () {
  if (window.location.hostname.includes("youtube")) {
    window.location.href = "https://www.youtube.com/@shahjalal-labs";
  } else {
    window.open("https://www.youtube.com/@shahjalal-labs", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
//t: open portfolio shahjalal-labs
api.mapkey("oup", "open portfolio shahjalal-labs", function () {
  if (window.location.hostname.includes("shahjalal-labs.surge.sh")) {
    window.location.href = "https://shahjalal-labs.surge.sh";
  } else {
    window.open("https://shahjalal-labs.surge.sh", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯
//
//
//w: ╭──────────── Block Start ────────────╮
//t: open resume  shahjalal-labs
api.mapkey("our", "open resume root", function () {
  if (window.location.hostname.includes("drive.google.com")) {
    window.location.href =
      "https://drive.google.com/file/d/1eKx1OO7p2tvSIxPKD1aDHu6sgPkVcJwN/view";
  } else {
    window.open(
      "https://drive.google.com/file/d/1eKx1OO7p2tvSIxPKD1aDHu6sgPkVcJwN/view",
      "_blank",
    );
  }
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
// open ms team live
api.mapkey("out", "open ms team live", function () {
  if (window.location.hostname.includes("teams.live.com")) {
    window.location.href = "https://teams.live.com/v2/";
  } else {
    window.open("https://teams.live.com/v2/", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯
//w: ╭──────────── Block Start ────────────╮

//w: ╰───────────── Block End ─────────────╯
//w: ╭──────────── Block Start ────────────╮

//w: ╰───────────── Block End ─────────────╯
//w: ╭──────────── Block Start ────────────╮

//w: ╰───────────── Block End ─────────────╯
//w: ╭──────────── Block Start ────────────╮

//w: ╰───────────── Block End ─────────────╯
```

## 📄 modules/opener/aiOpener.js

```javascript
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

api.mapkey("oaj", "gemini ai", function () {
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
api.mapkey("oas", "Open deepseek", function () {
  if (window.location.hostname.includes("deepseek")) {
    window.location.href = "https://chat.deepseek.com";
  } else {
    window.open("https://chat.deepseek.com/", "_blank");
  }
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

api.mapkey("oag", "open grok ai", function () {
  if (window.location.hostname.includes("grok")) {
    window.location.href = "https://grok.com/";
  } else {
    window.open("https://grok.com/", "_blank");
  }
});

api.mapkey("oaa", "open google audio", function () {
  if (window.location.hostname.includes("aistudio")) {
    window.location.href = "https://aistudio.google.com/live";
  } else {
    window.open("https://aistudio.google.com/live", "_blank");
  }
});
```

## 📄 modules/opener/webDevOpener.js

```javascript
//w: ╭──────────── Block Start ────────────╮
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
api.mapkey("ocm", "open mongodb", function () {
  if (window.location.hostname.includes("mongodb")) {
    window.location.href = "https://cloud.mongodb.com";
  } else {
    window.open("https://cloud.mongodb.com", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
api.mapkey("oct", "open tailwind vite ", function () {
  if (window.location.hostname.includes("tailwindcss")) {
    window.location.href =
      "https://tailwindcss.com/docs/installation/using-vite";
  } else {
    window.open(
      "https://tailwindcss.com/docs/installation/using-vite",
      "_blank",
    );
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
api.mapkey("ocd", "open daisyUI", function () {
  if (window.location.hostname.includes("daisyui")) {
    window.location.href = "https://daisyui.com/docs/install/vite/";
  } else {
    window.open("https://daisyui.com/docs/install/vite/", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
//t:localhost
api.mapkey("ocl", "open localhost", function () {
  if (window.location.hostname.includes("localhost")) {
    window.open("http://localhost:5174/", "_blank");
  } else {
    window.open("http://localhost:5173/", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
api.mapkey("ocn", "open nextjs Docs", function () {
  if (window.location.hostname.includes("nextjs.org")) {
    window.location.href = "https://nextjs.org/docs";
  } else {
    window.open("https://nextjs.org/docs", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯
//

//w: (start)╭──────────── Fiverr Message Rewriter ────────────╮
api.mapkey("ocf", "Fiverr Message Rewriter", function () {
  if (window.location.hostname.includes("relevance-phi.vercel.app")) {
    window.location.href = "https://relevance-phi.vercel.app/";
  } else {
    window.open("https://relevance-phi.vercel.app/", "_blank");
  }
});
//w: (end)  ╰──────────── Fiverr Message Rewriter ────────────╯

//w: (start)╭──────────── open temp mail ────────────╮
api.mapkey("oce", "open temp mail", function () {
  if (window.location.hostname.includes("tempmail.plus")) {
    window.location.href = "https://tempmail.plus/en/#!";
  } else {
    window.open("https://tempmail.plus/en/#!", "_blank");
  }
});
//w: (end)  ╰──────────── open temp mail ────────────╯
//

//w: (start)╭──────────── open postman web ────────────╮
// open postman web
api.mapkey("ocp", "open postman web", function () {
  if (
    window.location.hostname.includes("shahjalal-backend-9458759.postman.co")
  ) {
    window.location.href =
      "https://shahjalal-backend-9458759.postman.co/workspaces";
  } else {
    window.open(
      "https://shahjalal-backend-9458759.postman.co/workspaces",
      "_blank",
    );
  }
});
//w: (end)  ╰──────────── open postman web ────────────╯
```

## 📄 modules/opener/resourceOpener.js

```javascript
//w: ╭──────────── Block Start ────────────╮
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openGDrive = () => {
  if (window.location.hostname.includes("drive")) {
    window.location.href =
      "https://drive.google.com/drive/u/0/folders/1zjnO2RfqwIhV_95-7nMnTPi1-2q5m1Cp";
  } else {
    window.open(
      "https://drive.google.com/drive/u/0/folders/1zjnO2RfqwIhV_95-7nMnTPi1-2q5m1Cp",
      "_blank",
    );
  }
};
api.mapkey("ord", "open GDrive Resource", openGDrive);
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openImgbb = () => {
  if (
    window.location.hostname.includes("imgbb") ||
    window.location.hostname.includes("ibb")
  ) {
    window.location.href = "https://md-shahjalal.imgbb.com/";
  } else {
    window.open("https://md-shahjalal.imgbb.com/", "_blank");
  }
};
api.mapkey("ori", "open imgbb Resource", openImgbb);

//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openJpSheet = () => {
  if (window.location.hostname.includes("docs")) {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1OA2UGMcqJc6zST3BVR70qUqyMnjftBuFHLGP7sHR0z8/edit?gid=2099620628#gid=2099620628";
  } else {
    window.open(
      "https://docs.google.com/spreadsheets/d/1OA2UGMcqJc6zST3BVR70qUqyMnjftBuFHLGP7sHR0z8/edit?gid=2099620628#gid=2099620628",
      "_blank",
    );
  }
};
api.mapkey("ors", "open Jp Sheet", openJpSheet);
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openJpMasumVaiSheet = () => {
  if (window.location.hostname.includes("docs")) {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1MVvvT7qvJZEmejn9vdfPyOnjLFCxMpqUT92eClzV9PE/edit?gid=0#gid=0";
  } else {
    window.open(
      "https://docs.google.com/spreadsheets/d/1MVvvT7qvJZEmejn9vdfPyOnjLFCxMpqUT92eClzV9PE/edit?gid=0#gid=0",
      "_blank",
    );
  }
};
api.mapkey("orm", "open Jp Masum Vai Sheet", openJpMasumVaiSheet);

//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openJpMahinVaiSheet = () => {
  if (window.location.hostname.includes("docs")) {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1d9wPS0-rstt0TY23AR1LP4SpCQfULYHItmUZZoI5Ww4/edit?gid=0#gid=0";
  } else {
    window.open(
      "https://docs.google.com/spreadsheets/d/1d9wPS0-rstt0TY23AR1LP4SpCQfULYHItmUZZoI5Ww4/edit?gid=0#gid=0",
      "_blank",
    );
  }
};
api.mapkey("ork", "open Jp Masum Vai Sheet", openJpMasumVaiSheet);
//w: ╰───────────── Block End ─────────────╯
//

//w: ╭──────────── Block Start ────────────╮
const openPeopleDesk = () => {
  if (window.location.hostname.includes("app.peopledesk.io")) {
    window.location.href = "https://app.peopledesk.io/dashboard/employee";
  } else {
    window.open("https://app.peopledesk.io/dashboard/employee", "_blank");
  }
};
api.mapkey("orp", "openPeopleDesk", openPeopleDesk);
//w: ╰───────────── Block End ─────────────╯
//

//w: ╭──────────── Block Start ────────────╮
const openTeamUnitySheets = () => {
  if (window.location.hostname.includes("docs")) {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1nGC-g1KKlB4soo28RgKguGwghvV0CCF7h_ahhUzjpFw/edit?gid=568784421#gid=568784421";
  } else {
    window.open(
      "https://docs.google.com/spreadsheets/d/1nGC-g1KKlB4soo28RgKguGwghvV0CCF7h_ahhUzjpFw/edit?gid=568784421#gid=568784421",
      "_blank",
    );
  }
};
api.mapkey("oru", "open Team Unity Sheets", openTeamUnitySheets);
//w: ╰───────────── Block End ─────────────╯
```

## 📄 modules/opener/opener.js

```javascript
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
//t:Open blank page
api.mapkey("sb", "Open blank page", function () {
  window.open("https://blank.page/", "_blank");
});
```

## 📄 modules/opener/phOpener.js

```javascript
//w: ╭──────────── Block Start ────────────╮
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t: ph scribble l1b10
api.mapkey("pso", "scribble l1b10", () => {
  window.open(
    "https://web.programming-hero.com/update-1/video/update-1-42-1-scribbles-cafe-project-overview-and-tailwind-setup",
    "_blank",
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
api.mapkey("pwh", "HELP DESK", function () {
  window.open("https://helpdesk.programming-hero.com/", "_blank");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t:L2B4Web
api.mapkey("si", "L2B4Web", function () {
  window.open(
    "https://web.programming-hero.com/level2-batch-4-frontend-track/video/level2-batch-4-frontend-track-36-11-displaying-blogs-and-handling-loading-with-rtk-query-module-summary",
    "_blank",
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t: outline L2B4 https://web.programming-hero.com/web-11/video/web-11-0-1-welcome-message
api.mapkey("sk", "outline L2B4", function () {
  window.open(
    "https://web.programming-hero.com/676fa61320dff5186afcd780/course-outline",
    "_blank",
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//p: coceptual level1 batch 10
api.mapkey("ae", "Conceptual Level1 Batch 10", function () {
  window.open("https://web.programming-hero.com/conceptual-session", "_blank");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//p: coceptual level1 batch 11
api.mapkey("acd", "Conceptual Level1 Batch 11", function () {
  window.open("https://web.programming-hero.com/conceptual-session", "_blank");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t:redux
api.mapkey("sr", "redux", function () {
  window.open(
    "https://web.programming-hero.com/level2-batch-1/video/level2-batch-1-21-1-project-initialization-and-redux-store-setup-recap",
    "_blank",
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t: pre requisite
api.mapkey("sp", "pre requisite level2", function () {
  window.open(
    "https://web.programming-hero.com/next-level-prerequisites-batch4/video/next-level-prerequisites-batch4-45-8-active-route-loading-spinner-uselocation-usenavigation",
    "_blank",
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t:L2B4
api.mapkey("s4", "L2B4 typescript module 2", function () {
  window.open(
    "https://web.programming-hero.com/level2-batch-4/video/level2-batch-4-2-1-type-assertion-type-narrowing",
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//p: level1 batch 11
api.mapkey("pwj", "Level1 Batch 11", function () {
  window.open(
    "https://web.programming-hero.com/web-11/video/web-11-15-9-module-summary-legal-system-practice-task-",
    "_blank",
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t: open ph podcast
api.mapkey("php", "open ph podcast", function () {
  if (
    window.location.hostname.includes("youtube.com") &&
    window.location.pathname
      .toLowerCase()
      .includes("@ProgrammingHeroCommunity/podcasts")
  ) {
    window.location.href =
      "https://www.youtube.com/@ProgrammingHeroCommunity/podcasts";
  } else {
    window.open(
      "https://www.youtube.com/@ProgrammingHeroCommunity/podcasts",
      "_blank",
    );
  }
});
//w: ╰───────────── Block End ─────────────╯
```

## 📄 modules/opener/smtFigma/smtFigma.js

```javascript
// open visual => ov => visual means figma design which help us to visual view

//w: (start)╭──────────── ashmaster  ────────────╮
// open ashmaster
api.mapkey("ova", "ashmaster figma", function () {
  if (window.location.hostname.includes("www.figma.com")) {
    window.location.href =
      "https://www.figma.com/design/zQdcO8yAzu6RBqaWAHY5Qt/ash_master_Bridge-Network-App?node-id=28320-2244&t=SAlFLJ39wHSWPOjA-1";
  } else {
    window.open(
      "https://www.figma.com/design/zQdcO8yAzu6RBqaWAHY5Qt/ash_master_Bridge-Network-App?node-id=28320-2244&t=SAlFLJ39wHSWPOjA-1",
      "_blank",
    );
  }
});

//open ashmaster docs
api.mapkey("ovda", "ashmaster docs", function () {
  if (window.location.hostname.includes("docs.google.com")) {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1QUT4qSbz6graO9wLbTLk5rrr37AMKlN09dOIG5dUCTg/edit?gid=0#gid=0";
  } else {
    window.open(
      "https://docs.google.com/spreadsheets/d/1QUT4qSbz6graO9wLbTLk5rrr37AMKlN09dOIG5dUCTg/edit?gid=0#gid=0",
      "_blank",
    );
  }
});
//w: (end)  ╰──────────── ashmaster  ────────────╯
```

## 📖 modules/API.md

````markdown
<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

- [mapkey][1]
  - [Parameters][2]
  - [Examples][3]
- [vmapkey][4]
  - [Parameters][5]
- [imapkey][6]
  - [Parameters][7]
- [map][8]
  - [Parameters][9]
  - [Examples][10]
- [unmap][11]
  - [Parameters][12]
  - [Examples][13]
- [unmapAllExcept][14]
  - [Parameters][15]
  - [Examples][16]
- [imap][17]
  - [Parameters][18]
- [iunmap][19]
  - [Parameters][20]
- [cmap][21]
  - [Parameters][22]
- [vmap][23]
  - [Parameters][24]
- [vunmap][25]
  - [Parameters][26]
- [lmap][27]
  - [Parameters][28]
- [addSearchAlias][29]
  - [Parameters][30]
  - [Examples][31]
- [removeSearchAlias][32]
  - [Parameters][33]
  - [Examples][34]
- [searchSelectedWith][35]
  - [Parameters][36]
  - [Examples][37]
- [Clipboard.read][38]
  - [Parameters][39]
  - [Examples][40]
- [Clipboard.write][41]
  - [Parameters][42]
  - [Examples][43]
- [Hints.setNumeric][44]
  - [Examples][45]
- [Hints.setCharacters][46]
  - [Parameters][47]
  - [Examples][48]
- [Hints.dispatchMouseClick][49]
  - [Parameters][50]
  - [Examples][51]
- [Hints.click][52]
  - [Parameters][53]
  - [Examples][54]
- [Hints.create][55]
  - [Parameters][56]
  - [Examples][57]
- [Hints.style][58]
  - [Parameters][59]
  - [Examples][60]
- [Normal.passThrough][61]
  - [Parameters][62]
- [Normal.scroll][63]
  - [Parameters][64]
- [Normal.feedkeys][65]
  - [Parameters][66]
- [Normal.jumpVIMark][67]
  - [Parameters][68]
- [Visual.style][69]
  - [Parameters][70]
  - [Examples][71]
- [Front.openOmnibar][72]
  - [Parameters][73]
  - [Examples][74]
- [Front.registerInlineQuery][75]
  - [Parameters][76]
- [getBrowserName][77]
- [Front.showBanner][78]
  - [Parameters][79]
  - [Examples][80]
- [Front.showPopup][81]
  - [Parameters][82]
  - [Examples][83]
- [isElementPartiallyInViewport][84]
  - [Parameters][85]
- [getClickableElements][86]
  - [Parameters][87]
  - [Examples][88]
- [tabOpenLink][89]
  - [Parameters][90]
  - [Examples][91]
- [insertJS][92]
  - [Parameters][93]
- [aceVimMap][94]
  - [Parameters][95]
  - [Examples][96]
- [addVimMapKey][97]
  - [Parameters][98]
  - [Examples][99]
- [RUNTIME][100]
  - [Parameters][101]
  - [Examples][102]

## mapkey

Create a shortcut in normal mode to execute your own action.

### Parameters

- `keys` **[string][103]** the key sequence for the shortcut.
- `annotation` **[string][103]** a help message to describe the action, which will displayed in help opened by `?`.
- `jscode` **[function][104]** a Javascript function to be bound. If the function needs an argument, next pressed key will be fed to the function.
- `options` **[object][105]** `domain`: regex, a Javascript regex pattern to identify the domains that this mapping works, for example, `/github\.com/i` says that this mapping works only for github.com, `repeatIgnore`: boolean, whether this action can be repeated by dot command. (optional, default `null`)

### Examples

```javascript
mapkey(
  "<Space>",
  "pause/resume on youtube",
  function () {
    var btn =
      document.querySelector("button.ytp-ad-overlay-close-button") ||
      document.querySelector("button.ytp-ad-skip-button") ||
      document.querySelector("ytd-watch-flexy button.ytp-play-button");
    btn.click();
  },
  { domain: /youtube.com/i },
);
```
````

## vmapkey

- **See**: mapkey

Create a shortcut in visual mode to execute your own action.

### Parameters

- `keys` **[string][103]** the key sequence for the shortcut.
- `annotation` **[string][103]** a help message to describe the action, which will displayed in help opened by `?`.
- `jscode` **[function][104]** a Javascript function to be bound. If the function needs an argument, next pressed key will be fed to the function.
- `options` **[object][105]** `domain`: regex, a Javascript regex pattern to identify the domains that this mapping works, for example, `/github\.com/i` says that this mapping works only for github.com, `repeatIgnore`: boolean, whether this action can be repeated by dot command. (optional, default `null`)

## imapkey

- **See**: mapkey

Create a shortcut in insert mode to execute your own action.

### Parameters

- `keys` **[string][103]** the key sequence for the shortcut.
- `annotation` **[string][103]** a help message to describe the action, which will displayed in help opened by `?`.
- `jscode` **[function][104]** a Javascript function to be bound. If the function needs an argument, next pressed key will be fed to the function.
- `options` **[object][105]** `domain`: regex, a Javascript regex pattern to identify the domains that this mapping works, for example, `/github\.com/i` says that this mapping works only for github.com, `repeatIgnore`: boolean, whether this action can be repeated by dot command. (optional, default `null`)

## map

Map a key sequence to another in normal mode.

### Parameters

- `new_keystroke` **[string][103]** a key sequence to replace
- `old_keystroke` **[string][103]** a key sequence to be replaced
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping works. (optional, default `null`)
- `new_annotation` **[string][103]** use it instead of the annotation from old_keystroke if provided. (optional, default `null`)

### Examples

```javascript
map(";d", "<Ctrl-Alt-d>");
```

## unmap

Unmap a key sequence in normal mode.

### Parameters

- `keystroke` **[string][103]** a key sequence to be removed.
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping will be removed. (optional, default `null`)

### Examples

```javascript
unmap("<<", /youtube.com/);
```

## unmapAllExcept

Unmap all keybindings except those specified.

### Parameters

- `keystrokes` **[array][106]** the keybindings you want to keep.
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping will be removed. (optional, default `null`)

### Examples

```javascript
unmapAllExcept(["E", "R", "T"], /google.com|twitter.com/);
```

## imap

- **See**: map

Map a key sequence to another in insert mode.

### Parameters

- `new_keystroke` **[string][103]** a key sequence to replace
- `old_keystroke` **[string][103]** a key sequence to be replaced
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping works. (optional, default `null`)
- `new_annotation` **[string][103]** use it instead of the annotation from old_keystroke if provided. (optional, default `null`)

## iunmap

- **See**: unmap

Unmap a key sequence in insert mode.

### Parameters

- `keystroke` **[string][103]** a key sequence to be removed.
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping will be removed. (optional, default `null`)

## cmap

- **See**: map

Map a key sequence to another in omnibar.

### Parameters

- `new_keystroke` **[string][103]** a key sequence to replace
- `old_keystroke` **[string][103]** a key sequence to be replaced
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping works. (optional, default `null`)
- `new_annotation` **[string][103]** use it instead of the annotation from old_keystroke if provided. (optional, default `null`)

## vmap

- **See**: map

Map a key sequence to another in visual mode.

### Parameters

- `new_keystroke` **[string][103]** a key sequence to replace
- `old_keystroke` **[string][103]** a key sequence to be replaced
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping works. (optional, default `null`)
- `new_annotation` **[string][103]** use it instead of the annotation from old_keystroke if provided. (optional, default `null`)

## vunmap

- **See**: unmap

Unmap a key sequence in visual mode.

### Parameters

- `keystroke` **[string][103]** a key sequence to be removed.
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping will be removed. (optional, default `null`)

## lmap

- **See**: map

Map a key sequence to another in lurk mode.

### Parameters

- `new_keystroke` **[string][103]** a key sequence to replace
- `old_keystroke` **[string][103]** a key sequence to be replaced
- `domain` **regex** a Javascript regex pattern to identify the domains that this mapping works. (optional, default `null`)
- `new_annotation` **[string][103]** use it instead of the annotation from old_keystroke if provided. (optional, default `null`)

## addSearchAlias

Add a search engine alias into Omnibar.

### Parameters

- `alias` **[string][103]** the key to trigger this search engine, one or several chars, used as search alias, when you input the string and press `space` in omnibar, the search engine will be triggered.
- `prompt` **[string][103]** a caption to be placed in front of the omnibar.
- `search_url` **[string][103]** the URL of the search engine, for example, `https://www.s.com/search.html?query=`, if there are extra parameters for the search engine, you can use it as `https://www.s.com/search.html?query={0}&type=cs` or `https://www.s.com/search.html?type=cs&query=`(since order of URL parameters usually does not matter).
- `search_leader_key` **[string][103]** `<search_leader_key><alias>` in normal mode will search selected text with this search engine directly without opening the omnibar, for example `sd`. (optional, default `s`)
- `suggestion_url` **[string][103]** the URL to fetch suggestions in omnibar when this search engine is triggered. (optional, default `null`)
- `callback_to_parse_suggestion` **[function][104]** a function to parse the response from `suggestion_url` and return a list of strings as suggestions. Receives two arguments: `response`, the first argument, is an object containing a property `text` which holds the text of the response; and `request`, the second argument, is an object containing the properties `query` which is the text of the query and `url` which is the formatted URL for the request. (optional, default `null`)
- `only_this_site_key` **[string][103]** `<search_leader_key><only_this_site_key><alias>` in normal mode will search selected text within current site with this search engine directly without opening the omnibar, for example `sod`. (optional, default `o`)
- `options` **[object][105]** `favicon_url` URL for favicon for this search engine, `skipMaps` if `true` disable creating key mappings for this search engine (optional, default `null`)

### Examples

```javascript
addSearchAlias(
  "d",
  "duckduckgo",
  "https://duckduckgo.com/?q=",
  "s",
  "https://duckduckgo.com/ac/?q=",
  function (response) {
    var res = JSON.parse(response.text);
    return res.map(function (r) {
      return r.phrase;
    });
  },
);
```

## removeSearchAlias

Remove a search engine alias from Omnibar.

### Parameters

- `alias` **[string][103]** the alias of the search engine to be removed.
- `search_leader_key` **[string][103]** `<search_leader_key><alias>` in normal mode will search selected text with this search engine directly without opening the omnibar, for example `sd`. (optional, default `s`)
- `only_this_site_key` **[string][103]** `<search_leader_key><only_this_site_key><alias>` in normal mode will search selected text within current site with this search engine directly without opening the omnibar, for example `sod`. (optional, default `o`)

### Examples

```javascript
removeSearchAlias("d");
```

## searchSelectedWith

Search selected with.

### Parameters

- `se` **[string][103]** a search engine's search URL
- `onlyThisSite` **[boolean][107]** whether to search only within current site, need support from the provided search engine. (optional, default `false`)
- `interactive` **[boolean][107]** whether to search in interactive mode, in case that you need some small modification on the selected content. (optional, default `false`)
- `alias` **[string][103]** only used with interactive mode, in such case the url from `se` is ignored, SurfingKeys will construct search URL from the alias registered by `addSearchAlias`. (optional, default `""`)

### Examples

```javascript
searchSelectedWith("https://translate.google.com/?hl=en#auto/en/");
```

## Clipboard.read

Read from clipboard.

### Parameters

- `onReady` **[function][104]** a callback function to handle text read from clipboard.

### Examples

```javascript
Clipboard.read(function (response) {
  console.log(response.data);
});
```

## Clipboard.write

Write text to clipboard.

### Parameters

- `text` **[string][103]** the text to be written to clipboard.

### Examples

```javascript
Clipboard.write(window.location.href);
```

## Hints.setNumeric

Use digits as hint label, with it set you could type text to filter links, this API is to replace original setting like `Hints.numericHints = true;`.

### Examples

```javascript
Hints.setNumeric();
```

## Hints.setCharacters

Set characters for generating hints, this API is to replace original setting like `Hints.characters = "asdgqwertzxcvb";`.

### Parameters

- `characters` **[string][103]** the characters for generating hints.

### Examples

```javascript
Hints.setCharacters("asdgqwertzxcvb");
```

## Hints.dispatchMouseClick

- **See**: Hints.create

The default `onHintKey` implementation.

### Parameters

- `element` **[HTMLElement][108]** the element for which the pressed hint is targeted.

### Examples

```javascript
mapkey(
  "q",
  "click on images",
  function () {
    Hints.create("div.media_box img", Hints.dispatchMouseClick);
  },
  { domain: /weibo.com/i },
);
```

## Hints.click

Click element or create hints for elements to click.

### Parameters

- `links` `string or array of HTMLElement`, click on it if there is only one in the array or `force` parameter is true, otherwise hints will be generated for them. If `links` is a string, it will be used as css selector for `getClickableElements`.
- `force` **[boolean][107]** force to click the first input element whether there are more than one elements in `links` or not. (optional, default `false`)

### Examples

```javascript
mapkey("zz", "Hide replies", function () {
  Hints.click(document.querySelectorAll("#less-replies:not([hidden])"), true);
});
```

## Hints.create

- **See**: Hints.dispatchMouseClick

Create hints for elements to click.

### Parameters

- `cssSelector` `string or array of HTMLElement`, if `links` is a string, it will be used as css selector.
- `onHintKey` **[function][104]** a callback function on hint keys pressed.
- `attrs` **[object][105]** `active`: whether to activate the new tab when a link is opened, `tabbed`: whether to open a link in a new tab, `multipleHits`: whether to stay in hints mode after one hint is triggered. (optional, default `null`)

### Examples

```javascript
mapkey("yA", "#7Copy a link URL to the clipboard", function () {
  Hints.create("*[href]", function (element) {
    Clipboard.write("[" + element.innerText + "](" + element.href + ")");
  });
});
```

Returns **[boolean][107]** whether any hint is created for target elements.

## Hints.style

Set styles for hints.

### Parameters

- `css` **[string][103]** styles for hints.
- `mode` **[string][103]** sub mode for hints, use `text` for hints mode to enter visual mode. (optional, default `null`)

### Examples

```javascript
Hints.style(
  "border: solid 3px #552a48; color:#efe1eb; background: none; background-color: #552a48;",
);
Hints.style(
  "div{border: solid 3px #707070; color:#efe1eb; background: none; background-color: #707070;} div.begin{color:red;}",
  "text",
);
```

## Normal.passThrough

Enter PassThrough mode.

### Parameters

- `timeout` **[number][109]?** how many milliseconds to linger in PassThrough mode, to ignore it will stay in PassThrough mode until an Escape key is pressed.

## Normal.scroll

Scroll within current target.

### Parameters

- `type` **[string][103]** down | up | pageDown | fullPageDown | pageUp | fullPageUp | top | bottom | left | right | leftmost | rightmost | byRatio

## Normal.feedkeys

Feed keys into Normal mode.

### Parameters

- `keys` **[string][103]** the keys to be fed into Normal mode.

## Normal.jumpVIMark

Jump to a vim-like mark.

### Parameters

- `mark` **[string][103]** a vim-like mark.

## Visual.style

Set styles for visual mode.

### Parameters

- `element` **[string][103]** element in visual mode, which can be `marks` and `cursor`.
- `style` **[string][103]** css style

### Examples

```javascript
Visual.style("marks", "background-color: #89a1e2;");
Visual.style("cursor", "background-color: #9065b7;");
```

## Front.openOmnibar

Open the omnibar.

### Parameters

- `args` **[object][105]** `type` the sub type for the omnibar, which can be `Bookmarks`, `AddBookmark`, `History`, `URLs`, `RecentlyClosed`, `TabURLs`, `Tabs`, `Windows`, `VIMarks`, `SearchEngine`, `Commands`, `OmniQuery` and `UserURLs`.

### Examples

```javascript
mapkey(
  "ou",
  "#8Open AWS services",
  function () {
    var services = Array.from(
      top.document.querySelectorAll(
        "#awsc-services-container li[data-service-href]",
      ),
    ).map(function (li) {
      return {
        title: li.querySelector("span.service-label").textContent,
        url: li.getAttribute("data-service-href"),
      };
    });
    if (services.length === 0) {
      services = Array.from(
        top.document.querySelectorAll(
          'div[data-testid="awsc-nav-service-list"] li[data-testid]>a',
        ),
      ).map(function (a) {
        return {
          title: a.innerText,
          url: a.href,
        };
      });
    }
    Front.openOmnibar({ type: "UserURLs", extra: services });
  },
  { domain: /console.amazonaws|console.aws.amazon.com/i },
);
```

## Front.registerInlineQuery

- **See**: [example][110].

Register an inline query.

### Parameters

- `args` **[object][105]** `url`: string or function, the dictionary service url or a function to return the dictionary service url, `parseResult`: function, a function to parse result from dictionary service and return a HTML string to render explanation, `headers`: object\[optional], in case your dictionary service needs authentication.

## getBrowserName

Get current browser name

Returns **[string][103]** "Chrome" | "Firefox" | "Safari"

## Front.showBanner

Show message in banner.

### Parameters

- `msg` **[string][103]** the message to be displayed in banner.
- `timeout` **[number][109]** milliseconds after which the banner will disappear. (optional, default `1600`)

### Examples

```javascript
Front.showBanner(window.location.href);
```

## Front.showPopup

Show message in popup.

### Parameters

- `msg` **[string][103]** the message to be displayed in popup.

### Examples

```javascript
Front.showPopup(window.location.href);
```

## isElementPartiallyInViewport

Check whether an element is in viewport.

### Parameters

- `el` **[Element][111]** the element to be checked.
- `ignoreSize` **[boolean][107]** whether to ignore size of the element, otherwise the element must be with size 4\*4. (optional, default `false`)

Returns **[boolean][107]**

## getClickableElements

Get all clickable elements. SurfingKeys has its own logic to identify clickable elements, such as a `HTMLAnchorElement` or elements with cursor as pointer. This function provides two parameters to identify those clickable elements that SurfingKeys failed to identify.

### Parameters

- `selectorString` **[string][103]** extra css selector of those clickable elements.
- `pattern` **regex** a regular expression that matches text of the clickable elements.

### Examples

```javascript
var elms = getClickableElements("[rel=link]", /click this/);
```

Returns **[array][106]** array of clickable elements.

## tabOpenLink

Open links in new tabs.

### Parameters

- `str` **[string][103]** links to be opened, the links should be split by `\n` if there are more than one.
- `simultaneousness` **[number][109]** how many tabs will be opened simultaneously, the rest will be queued and opened later whenever a tab is closed. (optional, default `5`)

### Examples

```javascript
tabOpenLink("https://github.com/brookhong/Surfingkeys");
```

## insertJS

Insert javascript code into main world context.

### Parameters

- `code` **([function][104] | [string][103])** a javascript function to be executed in main world context, or an URL of js file.
- `onload` **[function][104]** a callback function after requested code executed.

## aceVimMap

Map the key sequence `lhs` to `rhs` for mode `ctx` in ACE editor.

### Parameters

- `lhs` **[string][103]** a key sequence to replace
- `rhs` **[string][103]** a key sequence to be replaced
- `ctx` **[string][103]** a mode such as `insert`, `normal`.

### Examples

```javascript
aceVimMap("J", ":bn", "normal");
```

## addVimMapKey

Add map key in ACE editor.

### Parameters

- `objects` **[object][105]** multiple objects to define key map in ACE, see more from [ace/keyboard/vim.js][112]

### Examples

```javascript
addVimMapKey(
  {
    keys: "n",
    type: "motion",
    motion: "moveByCharacters",
    motionArgs: {
      forward: false,
    },
  },

  {
    keys: "e",
    type: "motion",
    motion: "moveByLines",
    motionArgs: {
      forward: true,
      linewise: true,
    },
  },
);
```

## RUNTIME

Call background `action` with `args`, the `callback` will be executed with response from background.

### Parameters

- `action` **[string][103]** a background action to be called.
- `args` **[object][105]** the parameters to be passed to the background action.
- `callback` **[function][104]** a function to be executed with the result from the background action.

### Examples

```javascript
RUNTIME("getTabs", { queryInfo: { currentWindow: true } }, (response) => {
  console.log(response);
});
```

[1]: #mapkey
[2]: #parameters
[3]: #examples
[4]: #vmapkey
[5]: #parameters-1
[6]: #imapkey
[7]: #parameters-2
[8]: #map
[9]: #parameters-3
[10]: #examples-1
[11]: #unmap
[12]: #parameters-4
[13]: #examples-2
[14]: #unmapallexcept
[15]: #parameters-5
[16]: #examples-3
[17]: #imap
[18]: #parameters-6
[19]: #iunmap
[20]: #parameters-7
[21]: #cmap
[22]: #parameters-8
[23]: #vmap
[24]: #parameters-9
[25]: #vunmap
[26]: #parameters-10
[27]: #lmap
[28]: #parameters-11
[29]: #addsearchalias
[30]: #parameters-12
[31]: #examples-4
[32]: #removesearchalias
[33]: #parameters-13
[34]: #examples-5
[35]: #searchselectedwith
[36]: #parameters-14
[37]: #examples-6
[38]: #clipboardread
[39]: #parameters-15
[40]: #examples-7
[41]: #clipboardwrite
[42]: #parameters-16
[43]: #examples-8
[44]: #hintssetnumeric
[45]: #examples-9
[46]: #hintssetcharacters
[47]: #parameters-17
[48]: #examples-10
[49]: #hintsdispatchmouseclick
[50]: #parameters-18
[51]: #examples-11
[52]: #hintsclick
[53]: #parameters-19
[54]: #examples-12
[55]: #hintscreate
[56]: #parameters-20
[57]: #examples-13
[58]: #hintsstyle
[59]: #parameters-21
[60]: #examples-14
[61]: #normalpassthrough
[62]: #parameters-22
[63]: #normalscroll
[64]: #parameters-23
[65]: #normalfeedkeys
[66]: #parameters-24
[67]: #normaljumpvimark
[68]: #parameters-25
[69]: #visualstyle
[70]: #parameters-26
[71]: #examples-15
[72]: #frontopenomnibar
[73]: #parameters-27
[74]: #examples-16
[75]: #frontregisterinlinequery
[76]: #parameters-28
[77]: #getbrowsername
[78]: #frontshowbanner
[79]: #parameters-29
[80]: #examples-17
[81]: #frontshowpopup
[82]: #parameters-30
[83]: #examples-18
[84]: #iselementpartiallyinviewport
[85]: #parameters-31
[86]: #getclickableelements
[87]: #parameters-32
[88]: #examples-19
[89]: #tabopenlink
[90]: #parameters-33
[91]: #examples-20
[92]: #insertjs
[93]: #parameters-34
[94]: #acevimmap
[95]: #parameters-35
[96]: #examples-21
[97]: #addvimmapkey
[98]: #parameters-36
[99]: #examples-22
[100]: #runtime
[101]: #parameters-37
[102]: #examples-23
[103]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
[104]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function
[105]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
[106]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
[107]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[108]: https://developer.mozilla.org/docs/Web/HTML/Element
[109]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
[110]: https://github.com/brookhong/Surfingkeys/wiki/Register-inline-query
[111]: https://developer.mozilla.org/docs/Web/API/Element
[112]: https://github.com/ajaxorg/ace/blob/ec450c03b51aba3724cf90bb133708078d1f3de6/lib/ace/eyboard/vim.js#L927-L1099

[SurfingKeys] Error found in settings(https://docs.google.com/document/d/1snFuTQppEN8GSMj5bIj3mDlAdYy4fiNEoS_Q3FRXB8/edit?tab=t.0): TypeError: e.test is not a function content.js:1:136593

````

## 📄 modules/github/github.js

```javascript
//w: (start)╭──────────── Block Start ────────────╮

//w: (end)  ╰───────────── Block End ─────────────╯
//w: 1╭──────────── Block Start ────────────╮
//t: github repository page opening
api.mapkey("gro", "Github own Repositories", function () {
  window.open("https://github.com/shahjalal-labs?tab=repositories", "_blank");
});

//t:  new repo for github

//w: (start)╭──────────── github Ruhul vai  ────────────╮
//t: github repository page opening

api.mapkey("grr", "github Ruhul vai ", function () {
  const baseUrl = "https://github.com/ruhulamin-programming";
  const repoUrl = baseUrl + "?tab=repositories";

  if (window.location.href.startsWith(repoUrl)) {
    // On repositories page → switch to profile
    window.location.href = baseUrl;
  } else if (window.location.href.startsWith(baseUrl)) {
    // On profile (or subpage under profile) → switch to repositories
    window.location.href = repoUrl;
  } else {
    // Anywhere else → open repositories in a new tab
    window.open(repoUrl, "_blank");
  }
});
//w: (end)╰───────────── github Ruhul vai  ─────────────╯

//
//w: (start)╭──────────── github Mirhasankhan vai ────────────╮
api.mapkey("grm", "github Mirhasankhan vai", function () {
  const baseUrl = "https://github.com/Mirhasankhan";
  const repoUrl = baseUrl + "?tab=repositories";

  if (window.location.href.startsWith(repoUrl)) {
    // On repositories page → switch to profile
    window.location.href = baseUrl;
  } else if (window.location.href.startsWith(baseUrl)) {
    // On profile (or subpage under profile) → switch to repositories
    window.location.href = repoUrl;
  } else {
    // Anywhere else → open repositories in a new tab
    window.open(repoUrl, "_blank");
  }
});
//w: (end)╰───────────── github Mirhasankhan vai ─────────────╯
//

//w: (start)╭──────────── create new github repo────────────╮
api.mapkey("grn", "create new github repo", function () {
  window.open("https://github.com/new", "_blank");
});
//w: (end)  ╰───────────── create new github repo───────────╯

//w: 2╭──────────── Block Start ────────────╮
// t: 📋 Smart GitHub Repo Copier
api.mapkey("gyu", "📋 Smart GitHub Repo Copier", async function () {
  const url = window.location.href;

  // Helper to extract user/repo from href
  const extractUserRepo = (href) => {
    const match = href.match(/^\/([^/]+)\/([^/]+)/);
    return match ? `${match[1]}/${match[2]}` : null;
  };

  // If on repositories list page
  if (url.includes("?tab=repositories")) {
    let clickLoopActive = true;

    const runHintLoop = () => {
      if (!clickLoopActive) return;
      api.Hints.create('a[href*="/"][itemprop="name codeRepository"]', (el) => {
        const user = location.pathname.split("/")[1];
        const repo = el.innerText.trim();
        if (user && repo) {
          api.Clipboard.write(`${user}/${repo}`);
          api.Front.showBanner(`✅ Copied: ${user}/${repo}`);
        }
        setTimeout(runHintLoop, 200);
      });
    };

    runHintLoop();

    // Stop loop on Esc
    api.mapkey("<Esc>", "❌ Stop GitHub Repo Copier loop", () => {
      clickLoopActive = false;
    });
  }

  // If on a single repository page
  else if (/^https:\/\/github\.com\/[^/]+\/[^/]+/.test(url)) {
    const match = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)/);
    if (match) {
      const userRepo = `${match[1]}/${match[2]}`;
      api.Clipboard.write(userRepo);
      api.Front.showBanner(`✅ Copied: ${userRepo}`);
    }

    // Show hint for SSH copy buttons
    api.Hints.create("clipboard-copy[data-copy-feedback]", (el) => {
      const ssh = el.getAttribute("value") || el.innerText;
      api.Clipboard.write(ssh);
      api.Front.showBanner(`🔑 Copied SSH: ${ssh}`);
    });
  }

  // Else: Not on GitHub repo
  else {
    api.Front.showBanner("⚠️ Not on a GitHub repo or repositories page");
  }
});
//w: 2╰───────────── Block End ─────────────╯

//w: 3╭──────────── Block Start ────────────╮
//t: copy github username/repo like shahjalal-labs/nvim
api.mapkey(
  "gyr",
  "Copy GitHub username/repo",
  function () {
    const url = window.location.href;
    if (!url.includes("github.com")) {
      api.Front.showBanner("Not a GitHub page");
      return;
    }
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)(\/|$)/);
    if (match) {
      const user = match[1];
      const repo = match[2];
      const textToCopy = `${user}/${repo}`;
      api.Clipboard.write(textToCopy);
      api.Front.showBanner(`Copied: ${textToCopy}`);
    } else {
      api.Front.showBanner("Not a repo URL");
    }
  },
  { domain: /./, prefix: " " },
);
//w: 3╰───────────── Block End ─────────────╯
//w: 5╭──────────── Block Start ────────────╮
api.mapkey("grp", "👤 Go to GitHub user profile from repo page", function () {
  const match = window.location.href.match(
    /^https:\/\/github\.com\/([^\/?#]+)/,
  );
  if (match && match[1]) {
    const user = match[1];
    window.location.href = `https://github.com/${user}`;
  } else {
    api.Front.showBanner("❌ Not on a GitHub repo page");
  }
});

// == 🧭 Surfingkeys Mapping: gm - Go to GitHub user profile or Repositories tab ==
// Behavior:
// - 🌐 Not on GitHub → open your GitHub profile in new tab.
// - 🏠 On GitHub generic page (features, topics, homepage, etc) → go to your GitHub profile.
// - 📁 On GitHub repo/subpath → redirect to that user’s profile.
// - 👤 On any GitHub user profile (yours or others) → redirect to your GitHub profile.
// - 👤 If already on your GitHub profile → go to your repositories tab.

api.mapkey(
  "gm",
  "👤 Go to GitHub user profile or repositories tab",
  function () {
    const currentUrl = window.location.href;
    const staticProfile = "https://github.com/shahjalal-labs";
    const yourReposTab = "https://github.com/shahjalal-labs?tab=repositories";

    if (!currentUrl.startsWith("https://github.com/")) {
      // 🌐 Not on GitHub
      api.tabOpenLink(staticProfile);
      return;
    }

    const match = currentUrl.match(/^https:\/\/github\.com\/([^\/?#]+)/);
    const currentUser = match && match[1];

    if (
      !currentUser ||
      ["features", "topics", "collections"].includes(currentUser)
    ) {
      // 🏠 On GitHub homepage or generic section
      window.location.href = staticProfile;
      return;
    }

    const isOnProfilePage = currentUrl === `https://github.com/${currentUser}`;

    if (isOnProfilePage) {
      if (currentUser.toLowerCase() === "shahjalal-labs") {
        // 👤 Already on your own profile
        window.location.href = yourReposTab;
      } else {
        // 👤 On someone else’s profile
        window.location.href = staticProfile;
      }
    } else {
      // 📁 On repo or subpath — redirect to the user's profile
      window.location.href = `https://github.com/${currentUser}`;
    }
  },
);

//w: 5╰───────────── Block End ─────────────╯
//w: 6╭──────────── Block Start ────────────╮
//w: opening github ruhulamin-programming vai

/* api.mapkey("gz", "github ruhulamin-programming vai", function () {
  if (window.location.hostname.includes("github.com")) {
    window.location.href =
      "https://github.com/ruhulamin-programming?tab=repositories";
  } else {
    window.open(
      "https://github.com/ruhulamin-programming?tab=repositories",
      "_blank",
    );
  }
}); */

//w: 6╰───────────── Block End ─────────────╯
//w: 7╭──────────── Block Start ────────────╮

//w: 7╰───────────── Block End ─────────────╯
//w: 8╭──────────── Block Start ────────────╮

//w: 8╰───────────── Block End ─────────────╯
//w: 9╭──────────── Block Start ────────────╮

//w: 9╰───────────── Block End ─────────────╯
````

## 📄 modules/github/githubNavigator.js

```javascript
//

// GitHub-specific mappings for SurfingKeys
api.map(";A", "Open repository Actions page", () => {
  window.location.href =
    window.location.origin + window.location.pathname + "/actions";
});

api.map(";C", "Open repository Commits page", () => {
  window.location.href =
    window.location.origin + window.location.pathname + "/commits";
});

api.map(";I", "Open repository Issues page", () => {
  window.location.href =
    window.location.origin + window.location.pathname + "/issues";
});

api.map(";N", "Open notifications page", () => {
  window.location.href = "https://github.com/notifications";
});

api.map(";P", "Open repository Pull Requests page", () => {
  window.location.href =
    window.location.origin + window.location.pathname + "/pulls";
});

api.map(";R", "Open Repository page", () => {
  // Go to main repo page
  const pathParts = window.location.pathname.split("/").slice(1, 3);
  window.location.href = window.location.origin + "/" + pathParts.join("/");
});

api.map(";S", "Open repository Settings page", () => {
  window.location.href =
    window.location.origin + window.location.pathname + "/settings";
});

api.map(";W", "Open repository Wiki page", () => {
  window.location.href =
    window.location.origin + window.location.pathname + "/wiki";
});

api.map(";X", "Open repository Security page", () => {
  window.location.href =
    window.location.origin + window.location.pathname + "/security";
});

api.map(";O", "Open repository Owners profile page", () => {
  const owner = window.location.pathname.split("/")[1];
  window.location.href = window.location.origin + "/" + owner;
});

api.map(";M", "Open your profile page", () => {
  // This assumes your username is in the avatar link
  const userLink = document.querySelector(
    'header [data-ga-click*="user avatar"]',
  );
  if (userLink) {
    window.location.href = userLink.href;
  }
});

// Quick view mappings
api.map(";a", "View Repository", () => {
  Front.showContent("Repository view - implement based on context");
});

api.map(";u", "View User", () => {
  Front.showContent("User view - implement based on context");
});

// Copy mappings
api.map(";yy", "Copy Project Path", () => {
  const path = window.location.pathname.slice(1);
  api.Clipboard.write(path);
  Front.showBanner("Copied: " + path);
});

api.map(";Y", "Copy Project Path with domain", () => {
  const fullPath = window.location.origin + window.location.pathname;
  api.Clipboard.write(fullPath);
  Front.showBanner("Copied: " + fullPath);
});

// GitHub.dev mappings
api.map(";D", "Open in github.dev (new tab)", () => {
  const devUrl = "https://github.dev" + window.location.pathname;
  window.open(devUrl, "_blank");
});

api.map(";dd", "Open in github.dev", () => {
  const devUrl = "https://github.dev" + window.location.pathname;
  window.location.href = devUrl;
});

// SourceGraph mapping
api.map(";G", "View on SourceGraph", () => {
  const sgUrl = "https://sourcegraph.com/github.com" + window.location.pathname;
  window.location.href = sgUrl;
});

// Raw file mappings
api.map(";r", "View live raw version of file", () => {
  if (window.location.pathname.includes("/blob/")) {
    const rawUrl = window.location.href.replace("/blob/", "/raw/");
    window.location.href = rawUrl;
  }
});

api.map(";yr", "Copy raw link to file", () => {
  if (window.location.pathname.includes("/blob/")) {
    const rawUrl = window.location.href.replace("/blob/", "/raw/");
    api.Clipboard.write(rawUrl);
    Front.showBanner("Copied raw URL: " + rawUrl);
  }
});

api.map(";yf", "Copy link to file", () => {
  api.Clipboard.write(window.location.href);
  Front.showBanner("Copied file URL: " + window.location.href);
});

// Go up one directory level
api.map("gu", "Go up one path level", () => {
  const path = window.location.pathname;
  const newPath = path.split("/").slice(0, -1).join("/") || "/";
  window.location.href = window.location.origin + newPath;
});

// Toggle star (this would need more context-specific implementation)
api.map(";s", "Toggle Star", () => {
  const starButton = document.querySelector('[aria-label^="Star"]');
  if (starButton) {
    starButton.click();
  }
});

// Toggle language stats
api.map(";l", "Toggle repo language stats", () => {
  const langStats = document.querySelector(".repository-lang-stats-graph");
  if (langStats) {
    langStats.style.display =
      langStats.style.display === "none" ? "block" : "none";
  }
});

// Open clipboard as file path
api.map(";gcp", "Open clipboard string as file path in repo", async () => {
  const clipboardText = await api.Clipboard.read();
  if (clipboardText) {
    const baseRepoUrl =
      window.location.origin +
      window.location.pathname.split("/").slice(0, 3).join("/");
    window.location.href = baseRepoUrl + "/blob/main/" + clipboardText;
  }
});
```

## 📄 modules/defaultRemapped.js

```javascript
api.map("gt", "t");
api.map("w", "d");
api.map("tt", "T");
api.map("ao", ";di");
api.map("su", ";U");
api.map("C-1", "g0");
// api.map("ss", "on");
api.map("aa", "S");
api.map("<Alt-j>", "l");
api.map("<Alt-k>", "h");
api.map("h", "E");
api.map("gj", "G");
api.map("gi", "yy", /.*youtube.*/i);
//api.map("t", "f");
//api.map("f", "t");
api.map("l", "R");
api.lmap("f", "<t>");
api.map("as", ";fs");
api.map("u", "<Ctrl-i>");
api.map("Ctrl+d", "<Ctrl-f>");
// api.map("<Ctrl-i>", "<Alt-s>"); // hotkey must be one keystroke with/without modifier, it can not be a sequence of keystrokes like `gg`.
// an example to remove mapkey `Ctrl-i`
api.unmap("<ctrl-i>");
api.unmap("p");
api.unmap("t");
api.map(",", "<Ctrl-6>");
```

## 📄 modules/hoverClick/hoverClick.js

```javascript
//t: 🔁 Persistent smart click loop that detects and clicks both semantic and styled custom clickable elements across page navigations.
//w: (start)╭──────────── Persistent smart click ────────────╮
api.mapkey("cb", "🔁 Persistent click hints", function repeatClickHints() {
  api.Hints.create(
    "a, button, select, input, textarea, summary, *[onclick], *[contenteditable=true], *.jfk-button, *.goog-flat-menu-button, *[role=button], *[role=link], *[role=menuitem], *[role=option], *[role=switch], *[role=tab], *[role=checkbox], *[role=combobox], *[role=menuitemcheckbox], *[role=menuitemradio]",
    // { tabbed: true },
    function (el) {
      el.click();

      // Wait a short moment, then re-show hints
      setTimeout(() => {
        repeatClickHints(); // Call itself again
      }, 200); // Delay to allow DOM to update
    },
  );
});
//w: (end)  ╰──────────── Persistent smart click ────────────╯

//t: 🖱️ Smart hover using hints
//w: (start)╭──────────── Smart hover using hints ────────────╮
api.mapkey("ch", "🖱️ Smart hover using hints", function () {
  api.Hints.create("*", function (el) {
    ["mouseover", "mouseenter", "focus"].forEach((type) => {
      el.dispatchEvent(
        new MouseEvent(type, { bubbles: true, cancelable: true, view: window }),
      );
    });

    // api.Front.showPopup("🟡 Hovered or focused: " + (el.alt || el.innerText || el.tagName));
  });
});
//w: (end)  ╰──────────── Smart hover using hints ────────────╯

// t: 🔍 Reveal hidden elements using hints
//w: (start)╭──────────── Reveal hidden elements ────────────╮
api.mapkey("ca", "🔍 Reveal hidden elements using hints", function () {
  api.Hints.create("*", function (el) {
    el.style.display = "block";
    el.style.visibility = "visible";
    el.style.opacity = "1";
    el.hidden = false;
    api.Front.showPopup("✅ Revealed element: " + el.tagName);
  });
});
//w: (end)  ╰──────────── Reveal hidden elements ────────────╯

//w: (start)╭──────────── Open URL in incognito ────────────╮
api.mapkey("of", "Open URL in incognito window", function () {
  api.Hints.create("*[href]", function (element) {
    api?.RUNTIME("openIncognito", {
      url: element.href,
    });
  });
});
//w: (end)  ╰──────────── Open URL in incognito ────────────╯

// postman click
//w: (start)╭──────────── postman click ────────────╮
// 🎯 Postman-specific hints for custom clickable divs
api.mapkey(
  "tp",
  "🎯 Postman key/value hints",
  function () {
    // Target Postman's custom clickable divs
    api.Hints.create(
      'div.key-value-cell__placeholder[tabindex="-1"], div[class*="key-value"][tabindex], .auto-suggest-group .key-value-cell__placeholder',
      function (element) {
        element.click();
        element.focus();

        // Try to simulate a click event more thoroughly
        const clickEvent = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        });
        element.dispatchEvent(clickEvent);

        // Also try focus
        element.dispatchEvent(new FocusEvent("focus"));
      },
      { multipleHits: true }, // Allows multiple selections
    );
  },
  // { domain: /\.postman\.(co|com)$/i }, // work only domain where postman .com exists this type something
);
//w: (end)  ╰──────────── postman click ────────────╯
//  insert name
```

## 📄 modules/style/chatgpt_prev.js

```javascript
//

// ==UserScript==
// @name        SJ Pulse - ChatGPT Stealth UI
// @namespace   SJ Pulse
// @description Transform ChatGPT into SJ Pulse with night theme (safe layout)
// @version     1.2
// @match       https://chatgpt.com/*
// @grant       none
// ==/UserScript==

const { mapkey, Front } = api;

// Enhanced placeholder replacement with persistent observer
function initPlaceholderReplacement() {
  let placeholderObserver;
  let isReplacing = false;

  function replacePlaceholders() {
    if (isReplacing) return;
    isReplacing = true;

    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
      if (
        textarea.placeholder &&
        textarea.placeholder.includes("Ask anything")
      ) {
        // Use a more persistent approach
        Object.defineProperty(textarea, "placeholder", {
          get: function () {
            return "Pulse Query 🫀";
          },
          set: function (value) {
            // Only allow setting if it's not our custom placeholder
            if (!value.includes("Pulse Query")) {
              this.setAttribute("placeholder", "Pulse Query 🫀");
            }
          },
          configurable: true,
        });

        // Also set the attribute directly
        textarea.setAttribute("placeholder", "Pulse Query 🫀");

        // Monitor for changes and revert if needed
        const originalDescriptor = Object.getOwnPropertyDescriptor(
          textarea,
          "placeholder",
        );
        if (!originalDescriptor || !originalDescriptor.get) {
          textarea._originalPlaceholder = "Pulse Query 🫀";
        }
      }
    });

    isReplacing = false;
  }

  // Set up observer for dynamic textareas
  function setupObserver() {
    if (placeholderObserver) placeholderObserver.disconnect();

    placeholderObserver = new MutationObserver((mutations) => {
      let shouldReplace = false;

      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              if (
                node.tagName === "TEXTAREA" ||
                node.querySelector("textarea")
              ) {
                shouldReplace = true;
              }
            }
          });
        }

        // Also check for attribute changes on textareas
        if (
          mutation.type === "attributes" &&
          mutation.target.tagName === "TEXTAREA" &&
          mutation.attributeName === "placeholder"
        ) {
          shouldReplace = true;
        }
      });

      if (shouldReplace) {
        setTimeout(replacePlaceholders, 100);
      }
    });

    placeholderObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["placeholder"],
    });
  }

  // Initialize
  replacePlaceholders();
  setupObserver();

  // Also run periodically to catch any missed changes
  const interval = setInterval(replacePlaceholders, 2000);

  // Cleanup function
  return () => {
    if (placeholderObserver) placeholderObserver.disconnect();
    clearInterval(interval);
  };
}

function createSJPulseUI() {
  const css = `
    /* Main Theme - Deep Night */
    body {
      background: linear-gradient(135deg, #0c0c1a 0%, #1a1a2e 50%, #16213e 100%) !important;
      color: #e6edf3 !important;
      font-family: 'Segoe UI', system-ui, sans-serif !important;
    }

    /* Header & Branding */
    header, .sticky {
      background: rgba(10, 10, 20, 0.95) !important;
      backdrop-filter: blur(20px) !important;
      border-bottom: 1px solid #2a2a4a !important;
    }

    /* Main Chat Area - Safe styling */
    main, [class*="flex-1"] {
      background: rgba(15, 15, 30, 0.8) !important;
      border-radius: 16px !important;
      margin: 8px !important;
      border: 1px solid #2a2a4a !important;
    }

    /* Message Bubbles */
    .text-base {
      background: linear-gradient(135deg, #1e1e3f 0%, #2d2b55 100%) !important;
      border-radius: 18px !important;
      padding: 16px 20px !important;
      margin: 12px 0 !important;
      border: 1px solid #3a3a6a !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
    }

    /* User message bubbles */
    [data-message-author-role="user"] .text-base {
      background: linear-gradient(135deg, #2a2a5a 0%, #3a3a7a 100%) !important;
      border: 1px solid #4a4a8a !important;
    }

    /* Input Area - Fixed */
    form textarea, [data-testid*="textarea"] {
      background: rgba(20, 20, 40, 0.9) !important;
      color: #ffffff !important;
      border: 1px solid #3a3a6a !important;
      border-radius: 20px !important;
      padding: 16px 20px !important;
      font-size: 14px !important;
      backdrop-filter: blur(10px) !important;
      resize: vertical !important;
    }

    form textarea:focus, [data-testid*="textarea"]:focus {
      border-color: #646cff !important;
      box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.2) !important;
      outline: none !important;
    }

    /* Send button */
    button[data-testid*="send"] {
      background: linear-gradient(135deg, #646cff 0%, #747bff 100%) !important;
      border: none !important;
      border-radius: 12px !important;
      color: white !important;
      transition: all 0.3s ease !important;
    }

    button[data-testid*="send"]:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 25px rgba(100, 108, 255, 0.4) !important;
    }

    /* Sidebar - Safe styling */
    nav, [class*="sidebar"], [class*="Nav"] {
      background: rgba(10, 10, 20, 0.9) !important;
      backdrop-filter: blur(15px) !important;
      border-right: 1px solid #2a2a4a !important;
    }

    /* Sidebar items */
    nav a, [class*="Nav"] a, [class*="nav"] a {
      background: transparent !important;
      border-radius: 10px !important;
      margin: 4px 8px !important;
      transition: all 0.3s ease !important;
    }

    nav a:hover, [class*="Nav"] a:hover {
      background: rgba(100, 108, 255, 0.1) !important;
      transform: translateX(4px) !important;
    }

    /* Code Blocks */
    pre, code {
      background: #1a1a2e !important;
      border: 1px solid #2a2a4a !important;
      border-radius: 12px !important;
      color: #f8f8f2 !important;
    }

    /* Copy/Yank button */
    button:has(> div > svg), button[class*="copy"] {
      background: rgba(100, 108, 255, 0.1) !important;
      border: 1px solid #646cff !important;
      border-radius: 8px !important;
      color: #646cff !important;
      transition: all 0.3s ease !important;
    }

    button:has(> div > svg):hover, button[class*="copy"]:hover {
      background: #646cff !important;
      color: white !important;
      transform: scale(1.05) !important;
    }

    /* Scrollbars */
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #1a1a2e;
    }

    ::-webkit-scrollbar-thumb {
      background: #646cff;
      border-radius: 4px;
    }

    /* Loading Animation */
    [class*="animate-spin"] {
      color: #646cff !important;
    }

    /* New Chat button */
    button:has(svg), button[class*="new-chat"] {
      background: linear-gradient(135deg, #646cff 0%, #747bff 100%) !important;
      border: none !important;
      border-radius: 12px !important;
      color: white !important;
      font-weight: 600 !important;
    }

    /* User menu */
    [class*="user"] button {
      background: transparent !important;
      border: 1px solid #3a3a6a !important;
      border-radius: 12px !important;
    }
  `;

  const style = document.createElement("style");
  style.id = "sjPulse-night-theme";
  style.textContent = css;
  document.head.appendChild(style);
}

function replaceBranding() {
  const replaceText = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      let newText = node.textContent;

      // Only replace visible text, not URLs or data attributes
      if (
        !node.parentElement?.closest("script") &&
        !node.parentElement?.closest("style") &&
        !node.parentElement?.getAttribute("href")
      ) {
        newText = newText
          .replace(/\bChatGPT\b/gi, "SJ Pulse 🚀")
          .replace(/\bChatGPT-\d\b/gi, "SJ Pulse")
          .replace(/Copy code/gi, "Yank 📋")
          .replace(/\bCopy\b/gi, "Yank")
          .replace(/\bAsk anything\b/gi, "Pulse Query 🫀");
      }

      if (newText !== node.textContent) {
        node.textContent = newText;
      }
    } else {
      node.childNodes.forEach(replaceText);
    }
  };

  replaceText(document.body);

  // Observer for dynamic content
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          replaceText(node);
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

function changeFavicon() {
  const favicon =
    document.querySelector('link[rel*="icon"]') ||
    document.createElement("link");
  favicon.type = "image/x-icon";
  favicon.rel = "shortcut icon";

  // Create custom favicon
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");

  // Draw custom icon (purple hexagon with SJ)
  ctx.fillStyle = "#561530";
  ctx.beginPath();
  ctx.moveTo(16, 4);
  ctx.lineTo(24, 10);
  ctx.lineTo(24, 22);
  ctx.lineTo(16, 28);
  ctx.lineTo(8, 22);
  ctx.lineTo(8, 10);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 10px Arial";
  ctx.textAlign = "center";
  ctx.fillText("SJ", 16, 20);

  favicon.href = canvas.toDataURL();
  document.head.appendChild(favicon);
}

function createVariantThemes() {
  return {
    cyberpunk: `
      body {
        background: linear-gradient(135deg, #0a0a0a 0%, #1a0033 100%) !important;
        color: #00ff88 !important;
      }
      .text-base {
        background: linear-gradient(135deg, #1a0033 0%, #330066 100%) !important;
        border: 1px solid #00ff88 !important;
        box-shadow: 0 0 20px rgba(0, 255, 136, 0.3) !important;
      }
      button[data-testid*="send"] {
        background: linear-gradient(135deg, #ff00ff 0%, #00ff88 100%) !important;
      }
    `,
    "midnight-blue": `
      body {
        background: linear-gradient(135deg, #0f1a2b 0%, #1e3a5f 100%) !important;
      }
      .text-base {
        background: linear-gradient(135deg, #1e3a5f 0%, #2e4a7f 100%) !important;
        border: 1px solid #3a5f8f !important;
      }
    `,
    amethyst: `
      body {
        background: linear-gradient(135deg, #1a102b 0%, #3a1f5f 100%) !important;
      }
      .text-base {
        background: linear-gradient(135deg, #2a1f4f 0%, #4a2f7f 100%) !important;
        border: 1px solid #6b46c1 !important;
      }
    `,
    "deep-space": `
      body {
        background: linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #0f3460 100%) !important;
      }
      .text-base {
        background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%) !important;
        border: 1px solid #4cc9f0 !important;
      }
    `,
  };
}

// Initialize
if (window.location.hostname.includes("chatgpt.com")) {
  let currentVariant = "default";
  const variants = createVariantThemes();
  let cleanupPlaceholders;

  // Apply main theme
  createSJPulseUI();
  replaceBranding();
  changeFavicon();
  cleanupPlaceholders = initPlaceholderReplacement();

  // --- Toggle System ---

  // Toggle between original and SJ Pulse UI
  mapkey("ts", "Toggle SJ Pulse/ChatGPT UI", () => {
    const style = document.getElementById("sjPulse-night-theme");
    if (style) {
      style.remove();
      if (cleanupPlaceholders) cleanupPlaceholders();
      Front.showBanner("🔵 Original ChatGPT UI Restored");
    } else {
      createSJPulseUI();
      cleanupPlaceholders = initPlaceholderReplacement();
      Front.showBanner("🚀 SJ Pulse Stealth UI Activated");
    }
  });

  // Cycle through theme variants
  mapkey("tv", "Cycle theme variants", () => {
    const variantNames = Object.keys(variants);
    const currentIndex = variantNames.indexOf(currentVariant);
    const nextIndex = (currentIndex + 1) % (variantNames.length + 1);

    // Remove existing variant
    document.getElementById("sjPulse-variant")?.remove();

    if (nextIndex === 0) {
      currentVariant = "default";
      Front.showBanner("🌙 Default Night Theme");
    } else {
      currentVariant = variantNames[nextIndex - 1];
      const variantStyle = document.createElement("style");
      variantStyle.id = "sjPulse-variant";
      variantStyle.textContent = variants[currentVariant];
      document.head.appendChild(variantStyle);
      Front.showBanner(
        `🎨 ${currentVariant
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")} Theme`,
      );
    }
  });

  // Compact mode toggle
  mapkey("tc", "Toggle compact layout", () => {
    const styleId = "sjPulse-compact-style";
    let style = document.getElementById(styleId);
    if (style) {
      style.remove();
      Front.showBanner("📏 Normal Layout");
    } else {
      style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        .text-base { 
          font-size: 13px !important; 
          padding: 12px 16px !important; 
          margin: 8px 0 !important;
        }
        form textarea, [data-testid*="textarea"] {
          padding: 12px 16px !important;
          font-size: 13px !important;
          min-height: 60px !important;
        }
        main, [class*="flex-1"] {
          margin: 4px !important;
        }
      `;
      document.head.appendChild(style);
      Front.showBanner("📐 Compact Layout");
    }
  });

  Front.showBanner(
    "🚀 SJ Pulse Stealth UI Loaded! Use 'ts' to toggle, 'tv' for variants, 'tc' for compact",
  );
}
```

## 📄 modules/style/google.js

```javascript
// ==UserScript==
// @name Google EyeCandy
// ==/UserScript==

// const { mapkey, Front } = api;
// let googleUICustom = false;
//
// function toggleGoogleUI() {
//   const styleId = "google-eye-candy-style";
//   let styleTag = document.getElementById(styleId);
//
//   if (googleUICustom) {
//     if (styleTag) styleTag.remove();
//     Front.showBanner("👁️ Default Google UI restored.");
//   } else {
//     if (!styleTag) {
//       styleTag = document.createElement("style");
//       styleTag.id = styleId;
//       styleTag.textContent = `
//         /* Main container */
//         #search .g {
//           background: #1e1e1e !important;
//           color: #ddd !important;
//           border: 1px solid #333;
//           border-radius: 10px;
//           margin: 15px 0;
//           padding: 15px;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.3);
//           transition: all 0.2s ease;
//         }
//         #search .g:hover {
//           transform: scale(1.01);
//           border-color: #444;
//         }
//
//         /* Titles */
//         #search .g h3 {
//           color: #88c0d0 !important;
//           font-size: 1.2em;
//           margin-bottom: 5px;
//         }
//
//         /* URLs */
//         #search .g cite {
//           color: #a3be8c !important;
//           font-size: 0.9em;
//         }
//
//         /* Snippets */
//         #search .g .VwiC3b {
//           color: #ccc !important;
//           font-size: 0.95em;
//           line-height: 1.5;
//         }
//
//         /* Background fix */
//         body, html {
//           background-color: #111 !important;
//         }
//       `;
//       document.head.appendChild(styleTag);
//     }
//     Front.showBanner("✨ EyeCandy Google UI enabled!");
//   }
//   googleUICustom = !googleUICustom;
// }
//
// // Only register the key on Google Search pages
// if (/google\.com\/search/.test(window.location.href)) {
//   mapkey("<Space>g", "Toggle Google EyeCandy UI", toggleGoogleUI);
// }

// ==UserScript==
// @name Google EyeCandy (Modern Vibrant Compact)
// ==/UserScript==

const { mapkey, Front } = api;
let googleUICustom = false;

function toggleGoogleUI() {
  const styleId = "google-eye-candy-style";
  let styleTag = document.getElementById(styleId);

  if (googleUICustom) {
    if (styleTag) styleTag.remove();
    Front.showBanner("👁️ Default Google UI restored.");
  } else {
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = styleId;
      styleTag.textContent = `
        /* Smooth background tone */
        body, html {
          background: #0f1115 !important;
          color: #d8dee9 !important;
        }

        /* Result blocks — compact, clean, subtle accent */
        #search .g {
          background: rgba(32, 34, 38, 0.9) !important;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 12px 16px;
          margin: 10px 0;
          transition: transform 0.12s ease, box-shadow 0.15s ease;
        }
        #search .g:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.08);
        }

        /* Title link — subtle glow with accent */
        #search .g h3 {
          color: #8be9fd !important;
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 3px;
          text-shadow: 0 0 8px rgba(139, 233, 253, 0.15);
        }

        /* URL / cite — modern muted green */
        #search .g cite {
          color: #50fa7b !important;
          font-size: 0.85rem;
          opacity: 0.9;
        }

        /* Description / snippet */
        #search .g .VwiC3b {
          color: #e5e9f0 !important;
          font-size: 0.93rem;
          line-height: 1.45;
        }

        /* Remove clutter / gray lines */
        .ULSxyf, .kvH3mc, .v5yQqb, .GHDvEf, .RzdJxc { display: none !important; }

        /* Slight separator lines for flow */
        #search .g:not(:last-child) {
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        /* Vibrant accent on hover for links */
        a:hover h3 {
          color: #ff79c6 !important;
          text-shadow: 0 0 10px rgba(255, 121, 198, 0.2);
        }

        /* “People also ask” and similar */
        .related-question-pair {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 6px;
          padding: 8px 10px;
        }
      `;
      document.head.appendChild(styleTag);
    }
    Front.showBanner("🌈 EyeCandy: Modern Compact UI enabled!");
  }
  googleUICustom = !googleUICustom;
}

// Apply automatically + bind toggle
if (/google\.com\/search/.test(window.location.href)) {
  window.addEventListener("load", () => toggleGoogleUI());
  mapkey("<Space>g", "Toggle Google EyeCandy UI", toggleGoogleUI);
}
```

## 📄 modules/style/chatgpt.js

```javascript
// ==UserScript==
// @name        SJ Pulse - ChatGPT Stealth UI
// @namespace   SJ Pulse
// @description Transform ChatGPT into SJ Pulse with night theme (safe layout)
// @version     1.3
// @match       https://chatgpt.com/*
// @grant       none
// ==/UserScript==

const { mapkey, Front } = api;

// Enhanced favicon replacement with persistent monitoring
function initFaviconReplacement() {
  let faviconObserver;
  let customFaviconUrl;

  // Create custom favicon once
  function createCustomFavicon() {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");

    // Draw custom icon (purple hexagon with SJ)
    ctx.fillStyle = "#561530";
    ctx.beginPath();
    ctx.moveTo(16, 4);
    ctx.lineTo(24, 10);
    ctx.lineTo(24, 22);
    ctx.lineTo(16, 28);
    ctx.lineTo(8, 22);
    ctx.lineTo(8, 10);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 10px Arial";
    ctx.textAlign = "center";
    ctx.fillText("SJ", 16, 20);

    return canvas.toDataURL();
  }

  function replaceFavicon() {
    const favicons = document.querySelectorAll('link[rel*="icon"]');
    customFaviconUrl = customFaviconUrl || createCustomFavicon();

    favicons.forEach((favicon) => {
      // Store original href to prevent loops
      if (!favicon.hasAttribute("data-original-href")) {
        favicon.setAttribute("data-original-href", favicon.href);
      }

      // Only replace if it's not already our custom favicon
      if (favicon.href !== customFaviconUrl) {
        favicon.href = customFaviconUrl;
      }
    });

    // Also set the favicon dynamically if it doesn't exist
    if (favicons.length === 0) {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.type = "image/x-icon";
      newFavicon.href = customFaviconUrl;
      document.head.appendChild(newFavicon);
    }
  }

  // Set up observer to catch favicon changes
  function setupFaviconObserver() {
    if (faviconObserver) faviconObserver.disconnect();

    faviconObserver = new MutationObserver((mutations) => {
      let faviconChanged = false;

      mutations.forEach((mutation) => {
        // Check for added nodes
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (
              node.nodeType === Node.ELEMENT_NODE &&
              node.tagName === "LINK" &&
              node.getAttribute("rel")?.includes("icon")
            ) {
              faviconChanged = true;
            }
          });
        }

        // Check for attribute changes on existing favicons
        if (
          mutation.type === "attributes" &&
          mutation.target.tagName === "LINK" &&
          mutation.target.getAttribute("rel")?.includes("icon") &&
          (mutation.attributeName === "href" ||
            mutation.attributeName === "rel")
        ) {
          faviconChanged = true;
        }
      });

      if (faviconChanged) {
        setTimeout(replaceFavicon, 100);
      }
    });

    // Observe the entire head for changes
    faviconObserver.observe(document.head, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href", "rel"],
    });
  }

  // More aggressive approach: also override the DOM methods
  function overrideDOMMethods() {
    const originalSetAttribute = Element.prototype.setAttribute;
    const originalAppendChild = Node.prototype.appendChild;
    const originalInsertBefore = Node.prototype.insertBefore;

    Element.prototype.setAttribute = function (name, value) {
      if (
        this.tagName === "LINK" &&
        name === "href" &&
        this.getAttribute("rel")?.includes("icon") &&
        !value.includes("data:image")
      ) {
        value = customFaviconUrl || createCustomFavicon();
      }
      return originalSetAttribute.call(this, name, value);
    };

    Node.prototype.appendChild = function (node) {
      if (
        node &&
        node.tagName === "LINK" &&
        node.getAttribute("rel")?.includes("icon")
      ) {
        node.setAttribute("href", customFaviconUrl || createCustomFavicon());
      }
      return originalAppendChild.call(this, node);
    };

    Node.prototype.insertBefore = function (newNode, referenceNode) {
      if (
        newNode &&
        newNode.tagName === "LINK" &&
        newNode.getAttribute("rel")?.includes("icon")
      ) {
        newNode.setAttribute("href", customFaviconUrl || createCustomFavicon());
      }
      return originalInsertBefore.call(this, newNode, referenceNode);
    };
  }

  // Initialize
  replaceFavicon();
  setupFaviconObserver();
  overrideDOMMethods();

  // Also run periodically as a fallback
  const interval = setInterval(replaceFavicon, 3000);

  // Cleanup function
  return () => {
    if (faviconObserver) faviconObserver.disconnect();
    clearInterval(interval);
  };
}

// Enhanced placeholder replacement with persistent observer
function initPlaceholderReplacement() {
  let placeholderObserver;
  let isReplacing = false;

  function replacePlaceholders() {
    if (isReplacing) return;
    isReplacing = true;

    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
      if (
        textarea.placeholder &&
        textarea.placeholder.includes("Ask anything")
      ) {
        // Use a more persistent approach
        Object.defineProperty(textarea, "placeholder", {
          get: function () {
            return "Pulse Query 🫀";
          },
          set: function (value) {
            // Only allow setting if it's not our custom placeholder
            if (!value.includes("Pulse Query")) {
              this.setAttribute("placeholder", "Pulse Query 🫀");
            }
          },
          configurable: true,
        });

        // Also set the attribute directly
        textarea.setAttribute("placeholder", "Pulse Query 🫀");

        // Monitor for changes and revert if needed
        const originalDescriptor = Object.getOwnPropertyDescriptor(
          textarea,
          "placeholder",
        );
        if (!originalDescriptor || !originalDescriptor.get) {
          textarea._originalPlaceholder = "Pulse Query 🫀";
        }
      }
    });

    isReplacing = false;
  }

  // Set up observer for dynamic textareas
  function setupObserver() {
    if (placeholderObserver) placeholderObserver.disconnect();

    placeholderObserver = new MutationObserver((mutations) => {
      let shouldReplace = false;

      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              if (
                node.tagName === "TEXTAREA" ||
                node.querySelector("textarea")
              ) {
                shouldReplace = true;
              }
            }
          });
        }

        // Also check for attribute changes on textareas
        if (
          mutation.type === "attributes" &&
          mutation.target.tagName === "TEXTAREA" &&
          mutation.attributeName === "placeholder"
        ) {
          shouldReplace = true;
        }
      });

      if (shouldReplace) {
        setTimeout(replacePlaceholders, 100);
      }
    });

    placeholderObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["placeholder"],
    });
  }

  // Initialize
  replacePlaceholders();
  setupObserver();

  // Also run periodically to catch any missed changes
  const interval = setInterval(replacePlaceholders, 2000);

  // Cleanup function
  return () => {
    if (placeholderObserver) placeholderObserver.disconnect();
    clearInterval(interval);
  };
}

// Rest of your existing functions remain the same...
function createSJPulseUI() {
  const css = `
    /* Main Theme - Deep Night */
    body {
      background: linear-gradient(135deg, #0c0c1a 0%, #1a1a2e 50%, #16213e 100%) !important;
      color: #A7B49E !important;
      font-family: 'Segoe UI', system-ui, sans-serif !important;
    }

    /* Header & Branding */
    header, .sticky {
      background: rgba(10, 10, 20, 0.95) !important;
      backdrop-filter: blur(20px) !important;
      border-bottom: 1px solid #2a2a4a !important;
    }

    /* Main Chat Area - Safe styling */
    main, [class*="flex-1"] {
      background: rgba(15, 15, 30, 0.8) !important;
      border-radius: 16px !important;
      margin: 8px !important;
      border: 1px solid #2a2a4a !important;
    }

    /* Message Bubbles */
    .text-base {
      background: linear-gradient(135deg, #1e1e3f 0%, #2d2b55 100%) !important;
      border-radius: 18px !important;
      padding: 16px 20px !important;
      margin: 12px 0 !important;
      border: 1px solid #3a3a6a !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
      color: #A7B49E !important;
    }

    /* User message bubbles */
    [data-message-author-role="user"] .text-base {
      background: linear-gradient(135deg, #2a2a5a 0%, #3a3a7a 100%) !important;
      border: 1px solid #4a4a8a !important;
      color: #A7B49E !important;
    }

    /* Input Area - Fixed */
    form textarea, [data-testid*="textarea"] {
      background: rgba(20, 20, 40, 0.9) !important;
      color: #A7B49E !important;
      border: 1px solid #3a3a6a !important;
      border-radius: 20px !important;
      padding: 16px 20px !important;
      font-size: 14px !important;
      backdrop-filter: blur(10px) !important;
      resize: vertical !important;
    }

    form textarea:focus, [data-testid*="textarea"]:focus {
      border-color: #646cff !important;
      box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.2) !important;
      outline: none !important;
    }

    /* Send button */
    button[data-testid*="send"] {
      background: linear-gradient(135deg, #646cff 0%, #747bff 100%) !important;
      border: none !important;
      border-radius: 12px !important;
      color: white !important;
      transition: all 0.3s ease !important;
    }

    button[data-testid*="send"]:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 25px rgba(100, 108, 255, 0.4) !important;
    }

    /* Sidebar - Safe styling */
    nav, [class*="sidebar"], [class*="Nav"] {
      background: rgba(10, 10, 20, 0.9) !important;
      backdrop-filter: blur(15px) !important;
      border-right: 1px solid #2a2a4a !important;
    }

    /* Sidebar items */
    nav a, [class*="Nav"] a, [class*="nav"] a {
      background: transparent !important;
      border-radius: 10px !important;
      margin: 4px 8px !important;
      transition: all 0.3s ease !important;
      color: #A7B49E !important;
    }

    nav a:hover, [class*="Nav"] a:hover {
      background: rgba(100, 108, 255, 0.1) !important;
      transform: translateX(4px) !important;
    }

    /* Code Blocks */
    pre, code {
      background: #1a1a2e !important;
      border: 1px solid #2a2a4a !important;
      border-radius: 12px !important;
      color: #A7B49E !important;
    }

    /* Copy/Yank button */
    button:has(> div > svg), button[class*="copy"] {
      background: rgba(100, 108, 255, 0.1) !important;
      border: 1px solid #646cff !important;
      border-radius: 8px !important;
      color: #646cff !important;
      transition: all 0.3s ease !important;
    }

    button:has(> div > svg):hover, button[class*="copy"]:hover {
      background: #646cff !important;
      color: white !important;
      transform: scale(1.05) !important;
    }

    /* Scrollbars */
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #1a1a2e;
    }

    ::-webkit-scrollbar-thumb {
      background: #646cff;
      border-radius: 4px;
    }

    /* Loading Animation */
    [class*="animate-spin"] {
      color: #646cff !important;
    }

    /* New Chat button */
    button:has(svg), button[class*="new-chat"] {
      background: linear-gradient(135deg, #646cff 0%, #747bff 100%) !important;
      border: none !important;
      border-radius: 12px !important;
      color: white !important;
      font-weight: 600 !important;
    }

    /* User menu */
    [class*="user"] button {
      background: transparent !important;
      border: 1px solid #3a3a6a !important;
      border-radius: 12px !important;
      color: #A7B49E !important;
    }

    /* Additional text elements */
    h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label {
      color: #A7B49E !important;
    }

    /* Input text */
    input, select, option {
      color: #A7B49E !important;
    }

    /* Placeholder text */
    ::placeholder {
      color: #A7B49E !important;
      opacity: 0.7 !important;
    }
  `;

  const style = document.createElement("style");
  style.id = "sjPulse-night-theme";
  style.textContent = css;
  document.head.appendChild(style);
}

function replaceBranding() {
  const replaceText = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      let newText = node.textContent;

      // Only replace visible text, not URLs or data attributes
      if (
        !node.parentElement?.closest("script") &&
        !node.parentElement?.closest("style") &&
        !node.parentElement?.getAttribute("href")
      ) {
        newText = newText
          .replace(/\bChatGPT\b/gi, "SJ Pulse 🚀")
          .replace(/\bChatGPT-\d\b/gi, "SJ Pulse")
          .replace(/Copy code/gi, "Yank 📋")
          .replace(/\bCopy\b/gi, "Yank")
          .replace(/\bAsk anything\b/gi, "Pulse Query 🫀");
      }

      if (newText !== node.textContent) {
        node.textContent = newText;
      }
    } else {
      node.childNodes.forEach(replaceText);
    }
  };

  replaceText(document.body);

  // Observer for dynamic content
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          replaceText(node);
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

function createVariantThemes() {
  return {
    cyberpunk: `
      body {
        background: linear-gradient(135deg, #0a0a0a 0%, #1a0033 100%) !important;
        color: #A7B49E !important;
      }
      .text-base {
        background: linear-gradient(135deg, #1a0033 0%, #330066 100%) !important;
        border: 1px solid #00ff88 !important;
        box-shadow: 0 0 20px rgba(0, 255, 136, 0.3) !important;
        color: #A7B49E !important;
      }
      button[data-testid*="send"] {
        background: linear-gradient(135deg, #ff00ff 0%, #00ff88 100%) !important;
      }
      h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label {
        color: #A7B49E !important;
      }
    `,
    "midnight-blue": `
      body {
        background: linear-gradient(135deg, #0f1a2b 0%, #1e3a5f 100%) !important;
        color: #A7B49E !important;
      }
      .text-base {
        background: linear-gradient(135deg, #1e3a5f 0%, #2e4a7f 100%) !important;
        border: 1px solid #3a5f8f !important;
        color: #A7B49E !important;
      }
      h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label {
        color: #A7B49E !important;
      }
    `,
    amethyst: `
      body {
        background: linear-gradient(135deg, #1a102b 0%, #3a1f5f 100%) !important;
        color: #A7B49E !important;
      }
      .text-base {
        background: linear-gradient(135deg, #2a1f4f 0%, #4a2f7f 100%) !important;
        border: 1px solid #6b46c1 !important;
        color: #A7B49E !important;
      }
      h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label {
        color: #A7B49E !important;
      }
    `,
    "deep-space": `
      body {
        background: linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #0f3460 100%) !important;
        color: #A7B49E !important;
      }
      .text-base {
        background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%) !important;
        border: 1px solid #4cc9f0 !important;
        color: #A7B49E !important;
      }
      h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label {
        color: #A7B49E !important;
      }
    `,
  };
}

// Initialize
if (window.location.hostname.includes("chatgpt.com")) {
  let currentVariant = "default";
  const variants = createVariantThemes();
  let cleanupPlaceholders;
  let cleanupFavicon;

  // Apply main theme
  createSJPulseUI();
  replaceBranding();
  cleanupFavicon = initFaviconReplacement();
  cleanupPlaceholders = initPlaceholderReplacement();

  // --- Toggle System ---

  // Toggle between original and SJ Pulse UI
  mapkey("ts", "Toggle SJ Pulse/ChatGPT UI", () => {
    const style = document.getElementById("sjPulse-night-theme");
    if (style) {
      style.remove();
      if (cleanupPlaceholders) cleanupPlaceholders();
      if (cleanupFavicon) cleanupFavicon();
      Front.showBanner("🔵 Original ChatGPT UI Restored");
    } else {
      createSJPulseUI();
      cleanupPlaceholders = initPlaceholderReplacement();
      cleanupFavicon = initFaviconReplacement();
      Front.showBanner("🚀 SJ Pulse Stealth UI Activated");
    }
  });

  // Cycle through theme variants
  mapkey("tv", "Cycle theme variants", () => {
    const variantNames = Object.keys(variants);
    const currentIndex = variantNames.indexOf(currentVariant);
    const nextIndex = (currentIndex + 1) % (variantNames.length + 1);

    // Remove existing variant
    document.getElementById("sjPulse-variant")?.remove();

    if (nextIndex === 0) {
      currentVariant = "default";
      Front.showBanner("🌙 Default Night Theme");
    } else {
      currentVariant = variantNames[nextIndex - 1];
      const variantStyle = document.createElement("style");
      variantStyle.id = "sjPulse-variant";
      variantStyle.textContent = variants[currentVariant];
      document.head.appendChild(variantStyle);
      Front.showBanner(
        `🎨 ${currentVariant
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")} Theme`,
      );
    }
  });

  // Compact mode toggle
  mapkey("tc", "Toggle compact layout", () => {
    const styleId = "sjPulse-compact-style";
    let style = document.getElementById(styleId);
    if (style) {
      style.remove();
      Front.showBanner("📏 Normal Layout");
    } else {
      style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        .text-base { 
          font-size: 13px !important; 
          padding: 12px 16px !important; 
          margin: 8px 0 !important;
        }
        form textarea, [data-testid*="textarea"] {
          padding: 12px 16px !important;
          font-size: 13px !important;
          min-height: 60px !important;
        }
        main, [class*="flex-1"] {
          margin: 4px !important;
        }
      `;
      document.head.appendChild(style);
      Front.showBanner("📐 Compact Layout");
    }
  });

  Front.showBanner(
    "🚀 SJ Pulse Stealth UI Loaded! Use 'ts' to toggle, 'tv' for variants, 'tc' for compact",
  );
}
```

## 📄 modules/style/deepseek.js

```javascript
// ==UserScript==
// @name        SD Pulse - DeepSeek Stealth UI
// @namespace   SD Pulse
// @description Transform DeepSeek into SD Pulse with modern night theme
// @version     1.1
// @match       https://chat.deepseek.com/*
// @grant       none
// ==/UserScript==

// First, analyze DeepSeek's DOM structure
function analyzeDeepSeekStructure() {
  console.log("=== DeepSeek DOM Analysis ===");

  // Key elements to target
  const elements = {
    header: document.querySelector('header, [class*="header"]'),
    sidebar: document.querySelector('nav, [class*="sidebar"], [class*="nav"]'),
    chatArea: document.querySelector(
      'main, [class*="chat"], [class*="message"]',
    ),
    input: document.querySelector(
      'textarea, [class*="input"], [class*="text"]',
    ),
    sendButton: document.querySelector(
      'button[type="submit"], [class*="send"], [class*="submit"]',
    ),
    messages: document.querySelectorAll(
      '[class*="message"], [class*="bubble"]',
    ),
  };

  Object.entries(elements).forEach(([key, element]) => {
    console.log(`${key}:`, element);
  });

  return elements;
}

function replaceDeepSeekBranding() {
  const brandingMap = {
    DeepSeek: "SD Pulse 🌌",
    deepseek: "SD Pulse",
    Deepseek: "SD Pulse",
    "Copy code": "Yank 📋",
    Copy: "Yank",
    "Ask me anything...": "Pulse Query 🫀",
    "Message DeepSeek...": "Pulse Query 🫀",
    // Add DeepSeek-specific text replacements here
  };

  function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      let newText = node.textContent;
      Object.entries(brandingMap).forEach(([original, replacement]) => {
        const regex = new RegExp(
          original.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
          "gi",
        );
        newText = newText.replace(regex, replacement);
      });

      if (newText !== node.textContent) {
        node.textContent = newText;
      }
    } else {
      node.childNodes.forEach(replaceText);
    }
  }

  function scanAndReplace() {
    replaceText(document.body);

    // Also check title
    if (document.title.includes("DeepSeek")) {
      document.title = document.title.replace(/DeepSeek/gi, "SD Pulse");
    }
  }

  scanAndReplace();

  // Observer for dynamic content
  const observer = new MutationObserver((mutations) => {
    let shouldScan = false;

    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            shouldScan = true;
          }
        });
      }
    });

    if (shouldScan) {
      setTimeout(scanAndReplace, 100);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Also monitor title changes
  new MutationObserver(() => {
    if (document.title.includes("DeepSeek")) {
      document.title = document.title.replace(/DeepSeek/gi, "SD Pulse");
    }
  }).observe(document.querySelector("title"), {
    childList: true,
  });
}

function initDeepSeekPlaceholderReplacement() {
  let placeholderObserver;

  function replacePlaceholders() {
    const textareas = document.querySelectorAll("textarea");
    const inputs = document.querySelectorAll("input[placeholder]");

    [...textareas, ...inputs].forEach((element) => {
      if (element.placeholder && !element.placeholder.includes("Pulse Query")) {
        try {
          // Store original placeholder for restoration if needed
          if (!element.hasAttribute("data-original-placeholder")) {
            element.setAttribute(
              "data-original-placeholder",
              element.placeholder,
            );
          }

          element.setAttribute("placeholder", "Pulse Query 🫀");
        } catch (e) {
          console.log("Placeholder replacement error:", e);
        }
      }
    });
  }

  function setupObserver() {
    if (placeholderObserver) placeholderObserver.disconnect();

    placeholderObserver = new MutationObserver((mutations) => {
      let shouldReplace = false;

      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const textareas =
                node.tagName === "TEXTAREA"
                  ? [node]
                  : node.querySelectorAll
                    ? node.querySelectorAll("textarea, input[placeholder]")
                    : [];
              if (textareas.length > 0) {
                shouldReplace = true;
              }
            }
          });
        }

        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "placeholder" &&
          !mutation.target.getAttribute("placeholder")?.includes("Pulse Query")
        ) {
          shouldReplace = true;
        }
      });

      if (shouldReplace) {
        setTimeout(replacePlaceholders, 100);
      }
    });

    placeholderObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["placeholder"],
    });
  }

  // Initialize
  replacePlaceholders();
  setupObserver();

  // Periodic check
  const interval = setInterval(replacePlaceholders, 2000);

  return () => {
    if (placeholderObserver) placeholderObserver.disconnect();
    clearInterval(interval);
  };
}

function createDeepSeekTheme() {
  const css = `
    /* SD Pulse Modern Night Theme - DeepSeek */
    :root {
      --sd-primary: #6366f1;
      --sd-primary-dark: #4f46e5;
      --sd-secondary: #06b6d4;
      --sd-accent: #10b981;
      --sd-bg-primary: #0f0f23;
      --sd-bg-secondary: #1a1a2e;
      --sd-bg-tertiary: #16213e;
      --sd-text-primary: #f8fafc;
      --sd-text-secondary: #cbd5e1;
      --sd-border: #2d3748;
      --sd-glow: rgba(99, 102, 241, 0.3);
    }

    /* Base Styles */
    body {
      background: linear-gradient(135deg, var(--sd-bg-primary) 0%, var(--sd-bg-secondary) 50%, var(--sd-bg-tertiary) 100%) !important;
      color: var(--sd-text-primary) !important;
      font-family: 'Inter', 'Segoe UI', system-ui, sans-serif !important;
    }

    /* Glass Morphism Header */
    header, [class*="header"], [class*="top-bar"] {
      background: rgba(15, 15, 35, 0.85) !important;
      backdrop-filter: blur(20px) saturate(180%) !important;
      border-bottom: 1px solid var(--sd-border) !important;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
    }

    /* Main Chat Container */
    main, [class*="chat-container"], [class*="main"] {
      background: rgba(26, 26, 46, 0.7) !important;
      backdrop-filter: blur(10px) !important;
    }

    /* Message Bubbles with Glass Effect */
    [class*="message"], [class*="bubble"], [class*="chat-item"] {
      background: linear-gradient(135deg, rgba(30, 30, 60, 0.9) 0%, rgba(45, 45, 85, 0.9) 100%) !important;
      backdrop-filter: blur(10px) !important;
      border-radius: 20px !important;
      padding: 18px 22px !important;
      margin: 14px 0 !important;
      border: 1px solid rgba(99, 102, 241, 0.2) !important;
      box-shadow: 
        0 4px 20px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(99, 102, 241, 0.1) !important;
      transition: all 0.3s ease !important;
      position: relative !important;
      overflow: hidden !important;
    }

    /* Glow effect on hover */
    [class*="message"]:hover, [class*="bubble"]:hover {
      border-color: var(--sd-primary) !important;
      box-shadow: 
        0 8px 30px rgba(0, 0, 0, 0.4),
        0 0 20px var(--sd-glow) !important;
      transform: translateY(-2px) !important;
    }

    /* User messages - Teal accent */
    [class*="user"], [class*="human"], [data-role="user"] {
      background: linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(45, 45, 85, 0.9) 100%) !important;
      border: 1px solid rgba(6, 182, 212, 0.3) !important;
      margin-left: 20% !important;
    }

    /* Assistant messages - Purple accent */
    [class*="assistant"], [class*="bot"], [data-role="assistant"] {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(45, 45, 85, 0.9) 100%) !important;
      border: 1px solid rgba(99, 102, 241, 0.3) !important;
      margin-right: 20% !important;
    }

    /* Input Area - Modern Glass */
    textarea, [class*="input"], [class*="composer"] {
      background: rgba(26, 26, 46, 0.8) !important;
      backdrop-filter: blur(15px) !important;
      color: var(--sd-text-primary) !important;
      border: 2px solid var(--sd-border) !important;
      border-radius: 20px !important;
      padding: 18px 22px !important;
      font-size: 15px !important;
      transition: all 0.3s ease !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2) !important;
    }

    textarea:focus, [class*="input"]:focus, [class*="composer"]:focus {
      border-color: var(--sd-primary) !important;
      box-shadow: 
        0 0 0 3px rgba(99, 102, 241, 0.2),
        0 8px 30px rgba(0, 0, 0, 0.3) !important;
      outline: none !important;
      background: rgba(26, 26, 46, 0.9) !important;
    }

    /* Send Button - Gradient */
    button[type="submit"], [class*="send"], [class*="submit"] {
      background: linear-gradient(135deg, var(--sd-primary) 0%, var(--sd-primary-dark) 100%) !important;
      border: none !important;
      border-radius: 16px !important;
      color: white !important;
      font-weight: 600 !important;
      padding: 12px 24px !important;
      transition: all 0.3s ease !important;
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4) !important;
      position: relative !important;
      overflow: hidden !important;
    }

    button[type="submit"]:hover, [class*="send"]:hover {
      transform: translateY(-2px) scale(1.02) !important;
      box-shadow: 
        0 8px 25px rgba(99, 102, 241, 0.6),
        0 0 20px rgba(99, 102, 241, 0.3) !important;
    }

    button[type="submit"]:active {
      transform: translateY(0) scale(0.98) !important;
    }

    /* Sidebar - Glass Morphism */
    nav, [class*="sidebar"], [class*="nav"], [class*="conversation"] {
      background: rgba(15, 15, 35, 0.8) !important;
      backdrop-filter: blur(20px) saturate(180%) !important;
      border-right: 1px solid var(--sd-border) !important;
      box-shadow: 4px 0 20px rgba(0, 0, 0, 0.2) !important;
    }

    /* Sidebar Items */
    [class*="sidebar"] a, [class*="nav"] a, [class*="conversation"] a {
      background: transparent !important;
      border-radius: 12px !important;
      margin: 6px 12px !important;
      padding: 12px 16px !important;
      transition: all 0.3s ease !important;
      border: 1px solid transparent !important;
    }

    [class*="sidebar"] a:hover, [class*="nav"] a:hover {
      background: rgba(99, 102, 241, 0.1) !important;
      border-color: var(--sd-primary) !important;
      transform: translateX(8px) !important;
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2) !important;
    }

    /* Code blocks - Cyberpunk style */
    pre, code, [class*="code"] {
      background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%) !important;
      border: 1px solid rgba(99, 102, 241, 0.3) !important;
      border-radius: 12px !important;
      color: #e0e7ff !important;
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 4px 20px rgba(0, 0, 0, 0.3) !important;
    }

    /* Copy/Yank button */
    button:has(> div > svg), button[class*="copy"] {
      background: rgba(99, 102, 241, 0.1) !important;
      border: 1px solid var(--sd-primary) !important;
      border-radius: 10px !important;
      color: var(--sd-primary) !important;
      transition: all 0.3s ease !important;
    }

    button:has(> div > svg):hover, button[class*="copy"]:hover {
      background: var(--sd-primary) !important;
      color: white !important;
      transform: scale(1.05) !important;
      box-shadow: 0 4px 15px var(--sd-glow) !important;
    }

    /* Custom scrollbars */
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    
    ::-webkit-scrollbar-track {
      background: var(--sd-bg-secondary);
      border-radius: 5px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, var(--sd-primary) 0%, var(--sd-secondary) 100%);
      border-radius: 5px;
      border: 2px solid var(--sd-bg-secondary);
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(135deg, var(--sd-primary-dark) 0%, #0891b2 100%);
    }

    /* Loading animations */
    [class*="animate-spin"], [class*="loading"] {
      color: var(--sd-primary) !important;
    }

    /* Selection color */
    ::selection {
      background: rgba(99, 102, 241, 0.3) !important;
      color: white !important;
    }

    /* Focus rings */
    *:focus {
      outline: 2px solid var(--sd-primary) !important;
      outline-offset: 2px !important;
    }

    /* New Chat button */
    button:has(svg), button[class*="new-chat"] {
      background: linear-gradient(135deg, var(--sd-primary) 0%, var(--sd-primary-dark) 100%) !important;
      border: none !important;
      border-radius: 16px !important;
      color: white !important;
      font-weight: 600 !important;
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4) !important;
    }
  `;

  const style = document.createElement("style");
  style.id = "sdPulse-deepseek-theme";
  style.textContent = css;
  document.head.appendChild(style);
}

function replaceDeepSeekFavicon() {
  const favicon =
    document.querySelector('link[rel*="icon"]') ||
    document.createElement("link");
  favicon.type = "image/x-icon";
  favicon.rel = "shortcut icon";

  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");

  // SD Pulse favicon - Modern purple/teal theme
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 32, 32);
  gradient.addColorStop(0, "#6366f1");
  gradient.addColorStop(1, "#06b6d4");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(16, 16, 14, 0, 2 * Math.PI);
  ctx.fill();

  // SD text
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 12px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("SD", 16, 16);

  favicon.href = canvas.toDataURL();

  // Remove existing favicons and add new one
  document
    .querySelectorAll('link[rel*="icon"]')
    .forEach((link) => link.remove());
  document.head.appendChild(favicon);
}

// Initialize on DeepSeek
if (window.location.hostname.includes("chat.deepseek.com")) {
  let cleanupPlaceholders;

  // Apply transformations
  function applySDPulseTransform() {
    createDeepSeekTheme();
    replaceDeepSeekBranding();
    replaceDeepSeekFavicon();
    cleanupPlaceholders = initDeepSeekPlaceholderReplacement();
  }

  // Wait for page to be interactive
  function init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", applySDPulseTransform);
    } else {
      // Small delay to ensure DeepSeek's React has loaded
      setTimeout(applySDPulseTransform, 1000);
    }
  }

  init();

  // Add toggle functionality to window
  window.toggleSDPulse = function () {
    const theme = document.getElementById("sdPulse-deepseek-theme");
    if (theme) {
      theme.remove();
      if (cleanupPlaceholders) cleanupPlaceholders();
      console.log("🔵 Original DeepSeek UI restored");

      // Restore original favicon by reloading the page
      window.location.reload();
    } else {
      applySDPulseTransform();
      console.log("🌌 SD Pulse DeepSeek UI activated");
    }
  };

  console.log("🌌 SD Pulse DeepSeek UI loaded - Use toggleSDPulse() to toggle");
}
```

## 📄 modules/testDate.js

```javascript
// src/modules/testDate.js
//
import dayjs from "dayjs";

function showCurrentDate() {
  const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
  api.Front.showBanner(`🕒 Now: ${now}`);
}

api.mapkey("g,", "🕒 Show current date", showCurrentDate);
```

## 📄 modules/fzfFinder.js

```javascript
import Fuse from "fuse.js";

const historyStore = [
  "open https://github.com/shahjalal-labs",
  "scroll down",
  "copy image url",
  "evaluate Surfingkeys UI",
  "jump to GitHub user profile",
  "highlight text in markdown format",
  "persistent hint click",
];

function openFuzzyFinder() {
  const container = document.createElement("div");
  container.id = "fzf-finder";
  Object.assign(container.style, {
    position: "fixed",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#1f2937", // bg-gray-800
    color: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
    zIndex: "9999",
    width: "500px",
    maxHeight: "60vh",
    padding: "16px",
    overflow: "hidden",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  });

  const input = document.createElement("input");
  Object.assign(input.style, {
    width: "100%",
    padding: "8px 12px",
    marginBottom: "12px",
    borderRadius: "8px",
    backgroundColor: "#111827", // bg-gray-900
    color: "#ffffff",
    border: "1px solid #4b5563", // border-gray-600
    outline: "none",
    fontSize: "14px",
    boxSizing: "border-box",
  });
  input.placeholder = "🔍 Fuzzy Search History...";

  const resultsContainer = document.createElement("div");
  Object.assign(resultsContainer.style, {
    overflowY: "auto",
    maxHeight: "40vh",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  });

  container.appendChild(input);
  container.appendChild(resultsContainer);
  document.body.appendChild(container);
  input.focus();

  const fuse = new Fuse(historyStore, { includeScore: true, threshold: 0.4 });

  const renderResults = (query) => {
    resultsContainer.innerHTML = "";
    const results = fuse.search(query || "").slice(0, 10);
    results.forEach((r, idx) => {
      const div = document.createElement("div");
      Object.assign(div.style, {
        padding: "8px 12px",
        backgroundColor: "#374151", // bg-gray-700
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "13px",
        userSelect: "none",
      });
      div.textContent = r.item;
      div.tabIndex = idx;
      div.onmouseenter = () => {
        div.style.backgroundColor = "#4b5563"; // bg-gray-600
      };
      div.onmouseleave = () => {
        div.style.backgroundColor = "#374151"; // bg-gray-700
      };
      div.onclick = () => {
        api.Front.showBanner("✅ Selected: " + r.item);
        container.remove();
      };
      resultsContainer.appendChild(div);
    });
  };

  renderResults("");

  input.oninput = (e) => renderResults(e.target.value);
  input.onkeydown = (e) => {
    if (e.key === "Escape") {
      container.remove();
    }
  };
}

api.mapkey("zf", "🔍 Fuzzy search history like fzf", () => {
  openFuzzyFinder();
});
```

## 📄 modules/tab.js

```javascript
// 🚀 SUPER FAST TAB NAVIGATION - CONSOLE ERROR FREE

const { mapkey, RUNTIME } = api;
// tj - Jump to FIRST tab
/* api.mapkey("tj", "🔼 Jump to first tab", function () {
  // Use SurfingKeys' built-in tab navigation
  // Go to first tab by pressing g0 (SurfingKeys built-in)
  api.Normal.feedkeys("g0");
  api.Front.showBanner("🔼 First tab");
}); */

api.map("tj", "g0");

// tk - Jump to LAST tab
/* api.mapkey("tk", "🔽 Jump to last tab", function () {
  // Go to last tab by pressing g$ (SurfingKeys built-in)
  api.Normal.feedkeys("g$");
  api.Front.showBanner("🔽 Last tab");
}); */

api.map("tk", "g$");

// th - Jump to PREVIOUS tab
/* api.mapkey("th", "◀️ Jump to previous tab", function () {
  // Use SurfingKeys built-in E (previous tab)
  api.Normal.feedkeys("E");
  api.Front.showBanner("◀️ Previous tab");
}); */
api.map("th", "E");

// Jump to tab by number (t1, t2, t3, etc.)
for (let i = 1; i <= 9; i++) {
  api.mapkey(`t${i}`, `🔢 Jump to tab ${i}`, function () {
    api.RUNTIME(
      "getTabs",
      { queryInfo: { currentWindow: true } },
      (response) => {
        if (response.tabs && response.tabs[i - 1]) {
          const targetTab = response.tabs[i - 1];
          api.RUNTIME("focusTab", { tabId: targetTab.id }, () => {
            api.Front.showBanner(`🔢 Jumped to tab ${i}`);
          });
        } else {
          api.Front.showBanner(`❌ Tab ${i} doesn't exist`);
        }
      },
    );
  });
}
// BONUS: Close current tab and go to previous
/* api.mapkey("tc", "❌ Close tab and go to previous", function () {
  api.Normal.feedkeys("x");
}); */

api.map("tc", "x");
// BONUS: Duplicate current tab
/* api.mapkey("td", "📄 Duplicate current tab", function () {
  api.Normal.feedkeys("yt");
}); */
api.map("td", "yt");
// BONUS: Move tab left/right
/* api.mapkey("th", "◀️ Move tab left", function () {
  api.Normal.feedkeys("<<");
}); */

api.map("th", "<<");
/* api.mapkey("tr", "▶️ Move tab right", function () {
  api.Normal.feedkeys(">>");
}); */
// api.map("gt", "t");
api.map("tl", ">>");
console.log("🚀 Console error-free tab navigation loaded!");

mapkey("sxx", "Close all tabs from same host", function () {
  chrome.tabs.query({}, function (tabs) {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      function (activeTabs) {
        const currentTab = activeTabs[0];
        const currentHost = new URL(currentTab.url).hostname;
        const sameHostTabs = tabs.filter((tab) => {
          try {
            return new URL(tab.url).hostname === currentHost;
          } catch (e) {
            return false;
          }
        });
        sameHostTabs.forEach((tab) => chrome.tabs.remove(tab.id));
      },
    );
  });
});

//close single tab on left
api.map("txh", "gxt");

//close single tab on right
api.map("txl", "gxT");

//close all tabs on left
api.map("txH", "gx0");

//close all tabs on right
api.map("txL", "gx$");
```

## 📄 modules/yank/urlYanker.js

```javascript
const { mapkey, Clipboard } = api;

function copyUrlParts(n) {
  const { origin, pathname } = window.location;
  const parts = pathname.split("/").filter(Boolean); // ['dashboard', 'manage-profile']

  let toCopy = "";

  if (n === 0) {
    toCopy = origin; // Only the root URL
  } else if (parts.length === 0) {
    return;
  } else {
    // Only join the last `n` parts of the path
    const sliced = parts.slice(-n);
    toCopy = sliced.join("/"); // Don't include origin
  }

  Clipboard.write(toCopy);
}

// ag0 => Copy root domain only
mapkey("ag0", "Copy root URL", () => copyUrlParts(0));

// ag1 ~ ag4 => Copy last n parts of path (without origin)
mapkey("ag1", "Copy last 1 path segment", () => copyUrlParts(1));
mapkey("ag2", "Copy last 2 path segments", () => copyUrlParts(2));
mapkey("ag3", "Copy last 3 path segments", () => copyUrlParts(3));
mapkey("ag4", "Copy last 4 path segments", () => copyUrlParts(4));

// ag, => Open root in new tab
mapkey("ag,", "Open root URL in new tab", () => {
  const root = window.location.origin;
  window.open(root, "_blank");
});

// src/modules/urlManipulator.js
function appendClipboardToPath(n = 0) {
  try {
    const { origin, pathname } = window.location;

    // Extract and clean path segments
    const segments = pathname.split("/").filter(Boolean);
    const base = n > 0 ? segments.slice(0, n).join("/") : "";

    Clipboard.read((clip) => {
      // Robust type handling
      let clipContent = "";
      if (typeof clip === "string") {
        clipContent = clip;
      } else if (clip?.data) {
        clipContent = String(clip.data);
      } else {
        throw new Error("Clipboard content is not a string");
      }

      // Extract path from clipboard if it contains a full URL
      let clipPath = clipContent;
      try {
        if (clipContent.includes("://")) {
          const url = new URL(clipContent);
          clipPath = url.pathname + url.search + url.hash;
        }
      } catch (e) {
        // Not a valid URL, use as-is
      }

      // Normalize all paths
      const normalize = (path) =>
        path
          .replace(/^\/+|\/+$/g, "") // Trim slashes
          .replace(/\/{2,}/g, "/"); // Remove duplicate slashes

      const cleanBase = normalize(base);
      const cleanClip = normalize(clipPath);

      // Construct final path
      const newPath = [cleanBase, cleanClip]
        .filter((p) => p.length > 0)
        .join("/");

      // Build final URL without double origin
      const finalUrl = new URL(newPath, origin).href;

      // Navigate
      api.Front.showBanner(`↗️ Redirecting to: ${finalUrl}`);
      window.location.href = finalUrl;
    });
  } catch (error) {
    console.error("URL Manipulation Error:", error);
    api.Front.showBanner(`❌ Error: ${error.message}`);
  }
}

// Create mappings ap, to ap9
api.mapkey("ap,", "Append clipboard to root path", () =>
  appendClipboardToPath(0),
);

for (let i = 1; i <= 3; i++) {
  api.mapkey(`ap${i}`, `Append clipboard to first ${i} path segments`, () =>
    appendClipboardToPath(i),
  );
}

// Add help documentation
api.mapkey("aph", "Show URL manipulator help", () => {
  api.Front.showPopup(`
    <div style="padding:15px;font-family:system-ui;max-width:500px">
      <h3>URL Path Manipulator Help</h3>
      <p><strong>ap,</strong>: Append clipboard to domain root</p>
      <p><strong>ap1-ap9</strong>: Append after N path segments</p>
      <p><strong>Examples</strong>:</p>
      <ul>
        <li>URL: <code>http://localhost:5173/dashboard/tourist</code></li>
        <li>Clipboard: <code>manage-profile</code></li>
        <li><code>ap,</code> → <code>http://localhost:5173/manage-profile</code></li>
        <li><code>ap1</code> → <code>http://localhost:5173/dashboard/manage-profile</code></li>
        <li><code>ap2</code> → <code>http://localhost:5173/dashboard/tourist/manage-profile</code></li>
      </ul>
      <p>Handles URLs in clipboard, relative paths, and special characters</p>
    </div>
  `);
});

// Replace current URL with clipboard content
api.mapkey("ar", "🔄 Replace current URL with clipboard content", function () {
  api.Clipboard.read((clipContent) => {
    try {
      // Handle different clipboard content types
      let url = "";
      if (typeof clipContent === "string") {
        url = clipContent;
      } else if (clipContent?.data) {
        url = String(clipContent.data);
      } else {
        throw new Error("Clipboard content is not a valid string");
      }

      // Clean and validate the URL
      url = url.trim();

      if (!url) {
        throw new Error("Clipboard is empty");
      }

      // Add protocol if missing (assume https for non-localhost)
      if (!url.match(/^https?:\/\//)) {
        if (url.includes("localhost") || url.match(/^\d+\.\d+\.\d+\.\d+/)) {
          url = `http://${url}`;
        } else {
          url = `https://${url}`;
        }
      }

      // Validate URL format
      new URL(url); // This will throw if invalid

      // Show banner and navigate
      // api.Front.showBanner(`🔄 Replacing URL with: ${url}`);
      window.location.href = url;
    } catch (error) {
      console.error("URL Replace Error:", error);
      // api.Front.showBanner(`❌ Error: ${error.message}`);
    }
  });
});

// checking feature

// 🚀 ULTIMATE SPEED BOOST FEATURES FOR SURFINGKEYS

// ===== 1. INSTANT FORM FILLER =====
// Auto-fill forms with predefined data
const formData = {
  email: "your@email.com",
  name: "Your Name",
  phone: "123-456-7890",
  github: "https://github.com/shahjalal-labs",
  linkedin: "https://linkedin.com/in/shahjalal-labs",
};

api.mapkey("zf", "⚡ Auto-fill form fields", function () {
  const inputs = document.querySelectorAll("input, textarea, select");
  let filled = 0;

  inputs.forEach((input) => {
    const type = input.type?.toLowerCase();
    const name = input.name?.toLowerCase();
    const id = input.id?.toLowerCase();
    const placeholder = input.placeholder?.toLowerCase();

    // Smart field detection
    if (type === "email" || name?.includes("email") || id?.includes("email")) {
      input.value = formData.email;
      filled++;
    } else if (
      name?.includes("name") ||
      id?.includes("name") ||
      placeholder?.includes("name")
    ) {
      input.value = formData.name;
      filled++;
    } else if (
      type === "tel" ||
      name?.includes("phone") ||
      id?.includes("phone")
    ) {
      input.value = formData.phone;
      filled++;
    }

    // Trigger change events
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  });

  api.Front.showBanner(`⚡ Auto-filled ${filled} fields`);
});

// ===== 2. LIGHTNING FAST TAB SWITCHER WITH FUZZY SEARCH =====
api.mapkey("zt", "⚡ Fuzzy tab switcher", function () {
  api.RUNTIME("getTabs", {}, (response) => {
    const tabs = response.tabs;

    const container = document.createElement("div");
    container.id = "tab-switcher";
    Object.assign(container.style, {
      position: "fixed",
      top: "10%",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#0f172a",
      color: "#e2e8f0",
      borderRadius: "12px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
      zIndex: "10000",
      width: "700px",
      maxHeight: "70vh",
      padding: "20px",
      overflow: "hidden",
      fontFamily: "JetBrains Mono, monospace",
      border: "1px solid #334155",
    });

    const input = document.createElement("input");
    Object.assign(input.style, {
      width: "100%",
      padding: "12px 16px",
      marginBottom: "16px",
      borderRadius: "8px",
      backgroundColor: "#1e293b",
      color: "#e2e8f0",
      border: "1px solid #475569",
      outline: "none",
      fontSize: "16px",
      boxSizing: "border-box",
      fontFamily: "JetBrains Mono, monospace",
    });
    input.placeholder = "🔍 Search tabs...";

    const resultsList = document.createElement("div");
    Object.assign(resultsList.style, {
      overflowY: "auto",
      maxHeight: "50vh",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    });

    let selectedIndex = 0;

    const renderTabs = (searchTabs) => {
      resultsList.innerHTML = "";
      searchTabs.slice(0, 15).forEach((tab, idx) => {
        const div = document.createElement("div");
        Object.assign(div.style, {
          padding: "12px 16px",
          borderRadius: "6px",
          cursor: "pointer",
          backgroundColor: idx === selectedIndex ? "#3b82f6" : "#334155",
          color: idx === selectedIndex ? "#ffffff" : "#e2e8f0",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "14px",
          transition: "all 0.15s ease",
        });

        const favicon = document.createElement("img");
        favicon.src =
          tab.favIconUrl ||
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3C/svg%3E";
        favicon.style.width = "16px";
        favicon.style.height = "16px";

        const title = document.createElement("span");
        title.style.fontWeight = "500";
        title.textContent = tab.title.substring(0, 60);

        const url = document.createElement("span");
        url.style.opacity = "0.7";
        url.style.fontSize = "12px";
        url.textContent = tab.url.substring(0, 80);

        div.appendChild(favicon);
        div.appendChild(title);
        div.appendChild(url);

        div.onclick = () => {
          api.RUNTIME("focusTab", { tabId: tab.id });
          container.remove();
        };

        resultsList.appendChild(div);
      });
    };

    const filterTabs = (query) => {
      if (!query) return tabs;
      return tabs.filter(
        (tab) =>
          tab.title.toLowerCase().includes(query.toLowerCase()) ||
          tab.url.toLowerCase().includes(query.toLowerCase()),
      );
    };

    input.oninput = (e) => {
      const filtered = filterTabs(e.target.value);
      selectedIndex = 0;
      renderTabs(filtered);
    };

    input.onkeydown = (e) => {
      const filtered = filterTabs(input.value);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedIndex = Math.min(
          selectedIndex + 1,
          Math.min(filtered.length - 1, 14),
        );
        renderTabs(filtered);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, 0);
        renderTabs(filtered);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          api.RUNTIME("focusTab", { tabId: filtered[selectedIndex].id });
          container.remove();
        }
      } else if (e.key === "Escape") {
        container.remove();
      }
    };

    container.appendChild(input);
    container.appendChild(resultsList);
    document.body.appendChild(container);
    input.focus();
    renderTabs(tabs);
  });
});
```

## 📄 modules/yank/imgYank.js

```javascript
//t: 🖼️ Copy image URL under cursor or focused image
api.mapkey("ci", "🖼️ Copy image URL under cursor or focused image", () => {
  const img = document.querySelector("img:hover") || document.activeElement;
  if (img && img.tagName === "IMG") {
    const url = img.src;
    if (url) {
      api.Clipboard.write(url);
    }
  }
});

//t: Copy multiple image URLs with hints loop
let copyLoopActive = false;

api.mapkey(
  "cl",
  "🔁 Copy multiple image URLs with hints loop",
  function startCopyLoop() {
    copyLoopActive = true;

    const copyImageWithHints = () => {
      if (!copyLoopActive) return;

      api.Hints.create("img[src]", function (el) {
        api.Clipboard.write(el.src);

        // Delay a bit and show hints again
        setTimeout(copyImageWithHints, 300);
      });
    };

    copyImageWithHints();
  },
);
//t: ended Copy multiple image URLs with hints loop

// t: 📷 Copy image URL using hints
api.mapkey("cj", "📷 Copy image URL using hints", function () {
  api.Hints.create("img[src]", function (el) {
    api.Clipboard.write(el.src);
  });
});

//t: 📄 Copy image as Markdown
api.mapkey("cm", "📄 Copy image as Markdown", function () {
  api.Hints.create("img[src]", function (el) {
    const alt = el.alt || "image";
    const markdown = `![${alt}](${el.src})`;
    api.Clipboard.write(markdown);
    api.Front.showPopup("✅ Copied as Markdown!");
  });
});

// 🖼️ Copy multiple image URLs and open each in a new tab
api.mapkey("cy", "Copy multiple image URLs and open tabs", () => {
  api.Hints.create(
    "img[src]",
    (el) => {
      api.Clipboard.write(el.src);
      api.tabOpenLink(el.src);
    },
    { multipleHits: true },
  );
});

// open img in new tab
api.mapkey("gI", "#7View image in new tab", function () {
  api.Hints.create("img", (i) => api.tabOpenLink(i.src));
});
```

can i toggle original language and usa language through ayy by using surfing keys. from youtube, youtube has option in settings.

here is some html from youtube.

<div id="watch7-content" class="watch-main-col" itemscope="" itemid="https://www.youtube.com/watch?v=_FHqOHJefI8" itemtype="http://schema.org/VideoObject http://schema.org/LearningResource"><link itemprop="url" href="https://www.youtube.com/watch?v=_FHqOHJefI8"><meta itemprop="name" content="এগুলো জানলে, এক মুহূর্ত Social Media ব্যবহার করবেন না।"><meta itemprop="description" content="Social Media Addiction | Ways to reduce social media addiction | Easy ways to remove/cure social media addiction | Mobile Addiction | Phone Addiction | Ways ..."><meta itemprop="requiresSubscription" content="False"><meta itemprop="identifier" content="_FHqOHJefI8"><meta itemprop="duration" content="PT10M57S"><span itemprop="author" itemscope="" itemtype="http://schema.org/Person"><link itemprop="url" href="http://www.youtube.com/@shb_esor"><link itemprop="name" content="Sihab Hossain"></span><span itemscope="" itemtype="https://schema.org/BreadcrumbList"><span itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><meta itemprop="position" content="1"><span itemprop="item" itemid="http://www.youtube.com/@shb_esor" itemscope="" itemtype="https://schema.org/Thing"><meta itemprop="name" content="Sihab Hossain"></span></span></span><link itemprop="thumbnailUrl" href="https://i.ytimg.com/vi/_FHqOHJefI8/maxresdefault.jpg"><span itemprop="thumbnail" itemscope="" itemtype="http://schema.org/ImageObject"><link itemprop="url" href="https://i.ytimg.com/vi/_FHqOHJefI8/maxresdefault.jpg"><meta itemprop="width" content="1280"><meta itemprop="height" content="720"></span><link itemprop="embedUrl" href="https://www.youtube.com/embed/_FHqOHJefI8?start=273"><meta itemprop="playerType" content="HTML5 Flash"><meta itemprop="width" content="1280"><meta itemprop="height" content="720"><meta itemprop="isFamilyFriendly" content="true"><meta itemprop="regionsAllowed" content="AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH,ER,ES,ET,FI,FJ,FK,FM,FO,FR,GA,GB,GD,GE,GF,GG,GH,GI,GL,GM,GN,GP,GQ,GR,GS,GT,GU,GW,GY,HK,HM,HN,HR,HT,HU,ID,IE,IL,IM,IN,IO,IQ,IR,IS,IT,JE,JM,JO,JP,KE,KG,KH,KI,KM,KN,KP,KR,KW,KY,KZ,LA,LB,LC,LI,LK,LR,LS,LT,LU,LV,LY,MA,MC,MD,ME,MF,MG,MH,MK,ML,MM,MN,MO,MP,MQ,MR,MS,MT,MU,MV,MW,MX,MY,MZ,NA,NC,NE,NF,NG,NI,NL,NO,NP,NR,NU,NZ,OM,PA,PE,PF,PG,PH,PK,PL,PM,PN,PR,PS,PT,PW,PY,QA,RE,RO,RS,RU,RW,SA,SB,SC,SD,SE,SG,SH,SI,SJ,SK,SL,SM,SN,SO,SR,SS,ST,SV,SX,SY,SZ,TC,TD,TF,TG,TH,TJ,TK,TL,TM,TN,TO,TR,TT,TV,TW,TZ,UA,UG,UM,US,UY,UZ,VA,VC,VE,VG,VI,VN,VU,WF,WS,YE,YT,ZA,ZM,ZW"><div itemprop="interactionStatistic" itemscope="" itemtype="https://schema.org/InteractionCounter"><meta itemprop="interactionType" content="https://schema.org/LikeAction"><meta itemprop="userInteractionCount" content="1186"></div><meta itemprop="keywords" content="Book review,motivational video,sihab hossain,mindful trading by shb"><div itemprop="interactionStatistic" itemscope="" itemtype="https://schema.org/InteractionCounter"><meta itemprop="interactionType" content="https://schema.org/WatchAction"><meta itemprop="userInteractionCount" content="17756"></div><meta itemprop="datePublished" content="2025-12-16T06:01:06-08:00"><meta itemprop="uploadDate" content="2025-12-16T06:01:06-08:00"><meta itemprop="genre" content="Education"><meta itemprop="learningResourceType" content="Real life example"><meta itemprop="educationalLevel" content="Advanced (BD)"></div><script nonce="">var ytInitialPlayerResponse = {"responseContext":{"serviceTrackingParams":[{"service":"GFEEDBACK","params":[{"key":"ipcc","value":"0"},{"key":"is_alc_surface","value":"false"},{"key":"is_viewed_live","value":"False"},{"key":"wh_paused","value":"0"},{"key":"logged_in","value":"1"}]},{"service":"CSI","params":[{"key":"yt_ad","value":"1"},{"key":"c","value":"WEB"},{"key":"cver","value":"2.20251222.04.00"},{"key":"yt_li","value":"1"},{"key":"GetPlayer_rid","value":"0xa20b027020d27683"}]},{"service":"GUIDED_HELP","params":[{"key":"logged_in","value":"1"}]},{"service":"ECATCHER","params":[{"key":"client.version","value":"2.20251222"},{"key":"client.name","value":"WEB"}]}],"maxAgeSeconds":0,"mainAppWebResponseContext":{"datasyncId":"115922182847223597940||","loggedOut":false,"trackingParam":"kx_fmPxhoPZRDPbqIWHdX9FJ8e57LVjMTmgT0Mmy3u43wbzRgkuMsNLBwOcCE59TDtslLKPQ-SS"},"webResponseContextExtensionData":{"webResponseContextPreloadData":{"preloadMessageNames":["miniplayerRenderer","offlineabilityRenderer","playerLegacyDesktopWatchAdsRenderer","adPlacementRenderer","adBreakServiceRenderer","adSlotRenderer","playerBytesAdLayoutRenderer","playerBytesSequentialLayoutRenderer","instreamVideoAdRenderer","adActionInterstitialRenderer","aboveFeedAdLayoutRenderer","adsEngagementPanelLayoutViewModel","panelAdHeaderImageLockupViewModel","adImageViewModel","adAvatarLockupViewModel","adAvatarViewModel","adBadgeViewModel","adDetailsLineViewModel","adButtonViewModel","buttonViewModel","aboutThisAdRenderer","toggleButtonViewModel","adsEngagementPanelContentRenderer","panelTextIconTextGridCardsSubLayoutContentViewModel","adGridCardCollectionViewModel","adGridCardTextViewModel","inPlayerAdLayoutRenderer","videoInterstitialButtonedCenteredLayoutRenderer","adHoverTextButtonRenderer","buttonRenderer","skipAdButtonViewModel","imageBackgroundViewModel","timedPieCountdownViewModel","playerOverlayLayoutRenderer","skipAdViewModel","adPreviewViewModel","playerAdAvatarLockupCardButtonedViewModel","visitAdvertiserLinkViewModel","adPodIndexViewModel","adDurationRemainingRenderer","playerCaptionsTracklistRenderer","playerAnnotationsExpandedRenderer","subscribeButtonRenderer","confirmDialogRenderer","playerStoryboardSpecRenderer","playerMicroformatRenderer","cardCollectionRenderer","cardRenderer","simpleCardTeaserRenderer","infoCardIconRenderer","endscreenRenderer","endscreenElementRenderer","thumbnailOverlayTimeStatusRenderer"]},"hasDecorated":true}},"playabilityStatus":{"status":"OK","playableInEmbed":true,"offlineability":{"offlineabilityRenderer":{"offlineable":true,"formats":[{"name":{"runs":[{"text":"Full HD (1080p)"}]},"formatType":"HD_1080","availabilityType":"OFFLINEABILITY_AVAILABILITY_TYPE_PREMIUM_LOCKED","savedSettingShouldExpire":false},{"name":{"runs":[{"text":"High (720p)"}]},"formatType":"HD","availabilityType":"OFFLINEABILITY_AVAILABILITY_TYPE_PREMIUM_LOCKED","savedSettingShouldExpire":false},{"name":{"runs":[{"text":"Medium (360p)"}]},"formatType":"SD","availabilityType":"OFFLINEABILITY_AVAILABILITY_TYPE_FREE","savedSettingShouldExpire":true},{"name":{"runs":[{"text":"Low (144p)"}]},"formatType":"LD","availabilityType":"OFFLINEABILITY_AVAILABILITY_TYPE_FREE","savedSettingShouldExpire":true}],"clickTrackingParams":"CJQBEMc3IhMIm4bUvcXgkQMV3IXpBR20_DjEMgtvZmZsaW5lbGlzdMoBBOxNbzI="}},"miniplayer":{"miniplayerRenderer":{"playbackMode":"PLAYBACK_MODE_ALLOW"}},"contextParams":"Q0FFU0FnZ0M="},"streamingData":{"expiresInSeconds":"21540","formats":[{"itag":18,"url":"https://rr2---sn-1p2oxucq-q5jl.googlevideo.com/videoplayback?expire=1766955437\u0026ei=TUVRadurC9yLpt8PtPnjoQw\u0026ip=137.59.180.209\u0026id=o-AOYUr4_C5hkHiqkYULN1FF8w_QdPNDD3U5BbiEoGHBtf\u0026itag=18\u0026source=youtube\u0026requiressl=yes\u0026xpc=EgVo2aDSNQ%3D%3D\u0026cps=58\u0026met=1766933837%2C\u0026mh=pD\u0026mm=31%2C29\u0026mn=sn-1p2oxucq-q5jl%2Csn-h557sn6s\u0026ms=au%2Crdu\u0026mv=m\u0026mvi=2\u0026pl=24\u0026rms=au%2Cau\u0026initcwndbps=932500\u0026siu=1\u0026bui=AYUSA3BXMCLX1KLhDTWrOhgIFI_eQxte4SCQZESDD8gEm-bzot2xqUBeHFq5770tWhUeII2UHg\u0026spc=wH4Qq9fAZ0mOOUZOqnhLtKCjsbYL9SSXP7Seatj6Z9v9AFUPheWF\u0026vprv=1\u0026svpuc=1\u0026mime=video%2Fmp4\u0026ns=aQMRbeRq3AHOBMJ9KYiBAdgR\u0026rqh=1\u0026gir=yes\u0026clen=34294004\u0026ratebypass=yes\u0026dur=656.892\u0026lmt=1765859054807827\u0026mt=1766933352\u0026fvip=3\u0026fexp=51355912%2C51552689%2C51565115%2C51565682%2C51580968\u0026c=WEB\u0026sefc=1\u0026txp=6309224\u0026n=futXF2ayLo9_iF2X5W\u0026sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Csiu%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt\u0026sig=AJfQdSswRQIhAI810K9YuEJ_EUKw-LK92oHihYP47gE7rtkSBbhfUx31AiByKEqQthTn_d_1dMBIdq3CAXlqwkowgtztTkdEXYMsaQ%3D%3D\u0026lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps\u0026lsig=APaTxxMwRAIgZhfNOwTQBPaU0C0UWWGkDV1CjXDw3DesZ4pR2mMvi_4CIBFYzJ5BbImGa9pu4r_Hc77SrEclTG5XWVT014UJyWPM","mimeType":"video/mp4; codecs=\"avc1.42001E, mp4a.40.2\"","bitrate":417731,"width":640,"height":360,"lastModified":"1765859054807827","contentLength":"34294004","quality":"medium","fps":30,"qualityLabel":"360p","projectionType":"RECTANGULAR","averageBitrate":417651,"audioQuality":"AUDIO_QUALITY_LOW","approxDurationMs":"656892","audioSampleRate":"22050","audioChannels":2,"qualityOrdinal":"QUALITY_ORDINAL_360P"}],"adaptiveFormats":[{"itag":299,"mimeType":"video/mp4; codecs=\"avc1.64002a\"","bitrate":6961370,"width":1920,"height":1080,"initRange":{"start":"0","end":"741"},"indexRange":{"start":"742","end":"2201"},"lastModified":"1765859055785167","contentLength":"278229385","quality":"hd1080","fps":60,"qualityLabel":"1080p60","projectionType":"RECTANGULAR","averageBitrate":3389166,"approxDurationMs":"656750","qualityOrdinal":"QUALITY_ORDINAL_1080P"},{"itag":303,"mimeType":"video/webm; codecs=\"vp9\"","bitrate":7272660,"width":1920,"height":1080,"initRange":{"start":"0","end":"219"},"indexRange":{"start":"220","end":"2344"},"lastModified":"1765859055047796","contentLength":"298545477","quality":"hd1080","fps":60,"qualityLabel":"1080p60","projectionType":"RECTANGULAR","averageBitrate":3636646,"colorInfo":{"primaries":"COLOR_PRIMARIES_BT709","transferCharacteristics":"COLOR_TRANSFER_CHARACTERISTICS_BT709","matrixCoefficients":"COLOR_MATRIX_COEFFICIENTS_BT709"},"approxDurationMs":"656749","qualityOrdinal":"QUALITY_ORDINAL_1080P"},{"itag":136,"mimeType":"video/mp4; codecs=\"avc1.64001f\"","bitrate":2404078,"width":1280,"height":720,"initRange":{"start":"0","end":"739"},"indexRange":{"start":"740","end":"2199"},"lastModified":"1765859052890885","contentLength":"123778590","quality":"hd720","fps":30,"qualityLabel":"720p","projectionType":"RECTANGULAR","averageBitrate":1507734,"approxDurationMs":"656766","qualityOrdinal":"QUALITY_ORDINAL_720P"},{"itag":247,"mimeType":"video/webm; codecs=\"vp9\"","bitrate":3128926,"width":1280,"height":720,"initRange":{"start":"0","end":"219"},"indexRange":{"start":"220","end":"2328"},"lastModified":"1765859055186874","contentLength":"81640746","quality":"hd720","fps":30,"qualityLabel":"720p","projectionType":"RECTANGULAR","averageBitrate":994457,"colorInfo":{"primaries":"COLOR_PRIMARIES_BT709","transferCharacteristics":"COLOR_TRANSFER_CHARACTERISTICS_BT709","matrixCoefficients":"COLOR_MATRIX_COEFFICIENTS_BT709"},"approxDurationMs":"656766","qualityOrdinal":"QUALITY_ORDINAL_720P"},{"itag":298,"mimeType":"video/mp4; codecs=\"avc1.640020\"","bitrate":4168814,"width":1280,"height":720,"initRange":{"start":"0","end":"739"},"indexRange":{"start":"740","end":"2199"},"lastModified":"1765859057578929","contentLength":"149702833","quality":"hd720","fps":60,"qualityLabel":"720p60","projectionType":"RECTANGULAR","averageBitrate":1823559,"approxDurationMs":"656750","qualityOrdinal":"QUALITY_ORDINAL_720P"},{"itag":302,"mimeType":"video/webm; codecs=\"vp9\"","bitrate":4143300,"width":1280,"height":720,"initRange":{"start":"0","end":"218"},"indexRange":{"start":"219","end":"2336"},"lastModified":"1765859059909661","contentLength":"172112414","quality":"hd720","fps":60,"qualityLabel":"720p60","projectionType":"RECTANGULAR","averageBitrate":2096538,"colorInfo":{"primaries":"COLOR_PRIMARIES_BT709","transferCharacteristics":"COLOR_TRANSFER_CHARACTERISTICS_BT709","matrixCoefficients":"COLOR_MATRIX_COEFFICIENTS_BT709"},"approxDurationMs":"656749","qualityOrdinal":"QUALITY_ORDINAL_720P"},{"itag":135,"mimeType":"video/mp4; codecs=\"avc1.4d401f\"","bitrate":1264208,"width":854,"height":480,"initRange":{"start":"0","end":"740"},"indexRange":{"start":"741","end":"2200"},"lastModified":"1765859052414315","contentLength":"59809033","quality":"large","fps":30,"qualityLabel":"480p","projectionType":"RECTANGULAR","averageBitrate":728527,"approxDurationMs":"656766","qualityOrdinal":"QUALITY_ORDINAL_480P"},{"itag":244,"mimeType":"video/webm; codecs=\"vp9\"","bitrate":1617784,"width":854,"height":480,"initRange":{"start":"0","end":"219"},"indexRange":{"start":"220","end":"2312"},"lastModified":"1765859048715620","contentLength":"45829702","quality":"large","fps":30,"qualityLabel":"480p","projectionType":"RECTANGULAR","averageBitrate":558246,"colorInfo":{"primaries":"COLOR_PRIMARIES_BT709","transferCharacteristics":"COLOR_TRANSFER_CHARACTERISTICS_BT709","matrixCoefficients":"COLOR_MATRIX_COEFFICIENTS_BT709"},"approxDurationMs":"656766","qualityOrdinal":"QUALITY_ORDINAL_480P"},{"itag":134,"mimeType":"video/mp4; codecs=\"avc1.4d401e\"","bitrate":691301,"width":640,"height":360,"initRange":{"start":"0","end":"740"},"indexRange":{"start":"741","end":"2200"},"lastModified":"1765859052300584","contentLength":"30387912","quality":"medium","fps":30,"qualityLabel":"360p","projectionType":"RECTANGULAR","averageBitrate":370152,"highReplication":true,"approxDurationMs":"656766","qualityOrdinal":"QUALITY_ORDINAL_360P"},{"itag":243,"mimeType":"video/webm; codecs=\"vp9\"","bitrate":956343,"width":640,"height":360,"initRange":{"start":"0","end":"219"},"indexRange":{"start":"220","end":"2284"},"lastModified":"1765859050732308","contentLength":"28197396","quality":"medium","fps":30,"qualityLabel":"360p","projectionType":"RECTANGULAR","averageBitrate":343469,"colorInfo":{"primaries":"COLOR_PRIMARIES_BT709","transferCharacteristics":"COLOR_TRANSFER_CHARACTERISTICS_BT709","matrixCoefficients":"COLOR_MATRIX_COEFFICIENTS_BT709"},"approxDurationMs":"656766","qualityOrdinal":"QUALITY_ORDINAL_360P"},{"itag":133,"mimeType":"video/mp4; codecs=\"avc1.4d4015\"","bitrate":324634,"width":426,"height":240,"initRange":{"start":"0","end":"739"},"indexRange":{"start":"740","end":"2199"},"lastModified":"1765859051047035","contentLength":"15714644","quality":"small","fps":30,"qualityLabel":"240p","projectionType":"RECTANGULAR","averageBitrate":191418,"approxDurationMs":"656766","qualityOrdinal":"QUALITY_ORDINAL_240P"},{"itag":242,"mimeType":"video/webm; codecs=\"vp9\"","bitrate":528714,"width":426,"height":240,"initRange":{"start":"0","end":"218"},"indexRange":{"start":"219","end":"2233"},"lastModified":"1765859052589082","contentLength":"16810762","quality":"small","fps":30,"qualityLabel":"240p","projectionType":"RECTANGULAR","averageBitrate":204770,"colorInfo":{"primaries":"COLOR_PRIMARIES_BT709","transferCharacteristics":"COLOR_TRANSFER_CHARACTERISTICS_BT709","matrixCoefficients":"COLOR_MATRIX_COEFFICIENTS_BT709"},"approxDurationMs":"656766","qualityOrdinal":"QUALITY_ORDINAL_240P"},{"itag":160,"mimeType":"video/mp4; codecs=\"avc1.4d400c\"","bitrate":151310,"width":256,"height":144,"initRange":{"start":"0","end":"738"},"indexRange":{"start":"739","end":"2198"},"lastModified":"1765859052548140","contentLength":"7240089","quality":"tiny","fps":30,"qualityLabel":"144p","projectionType":"RECTANGULAR","averageBitrate":88190,"approxDurationMs":"656766","qualityOrdinal":"QUALITY_ORDINAL_144P"},{"itag":278,"mimeType":"video/webm; codecs=\"vp9\"","bitrate":1299853,"width":256,"height":144,"initRange":{"start":"0","end":"218"},"indexRange":{"start":"219","end":"2233"},"lastModified":"1765859050089060","contentLength":"11860972","quality":"tiny","fps":30,"qualityLabel":"144p","projectionType":"RECTANGULAR","averageBitrate":144477,"colorInfo":{"primaries":"COLOR_PRIMARIES_BT709","transferCharacteristics":"COLOR_TRANSFER_CHARACTERISTICS_BT709","matrixCoefficients":"COLOR_MATRIX_COEFFICIENTS_BT709"},"approxDurationMs":"656766","qualityOrdinal":"QUALITY_ORDINAL_144P"},{"itag":140,"mimeType":"audio/mp4; codecs=\"mp4a.40.2\"","bitrate":131109,"initRange":{"start":"0","end":"722"},"indexRange":{"start":"723","end":"1546"},"lastModified":"1765861298844994","contentLength":"10631475","quality":"tiny","xtags":"ChQKBWFjb250EgtkdWJiZWQtYXV0bwoNCgRsYW5nEgVlbi1VUw","projectionType":"RECTANGULAR","audioTrack":{"displayName":"English (US)","id":"en-US.10","audioIsDefault":false,"isAutoDubbed":true},"averageBitrate":129480,"highReplication":true,"audioQuality":"AUDIO_QUALITY_MEDIUM","approxDurationMs":"656869","audioSampleRate":"44100","audioChannels":2,"loudnessDb":-2.2900009,"trackAbsoluteLoudnessLkfs":-16.290001,"qualityOrdinal":"QUALITY_ORDINAL_UNKNOWN"},{"itag":140,"mimeType":"audio/mp4; codecs=\"mp4a.40.2\"","bitrate":131124,"initRange":{"start":"0","end":"722"},"indexRange":{"start":"723","end":"1546"},"lastModified":"1765861088933574","contentLength":"10630724","quality":"tiny","xtags":"ChEKBWFjb250EghvcmlnaW5hbAoICgNkcmMSATEKCgoEbGFuZxICYm4","projectionType":"RECTANGULAR","audioTrack":{"displayName":"Bangla original","id":"bn.4","audioIsDefault":true},"averageBitrate":129480,"highReplication":true,"audioQuality":"AUDIO_QUALITY_MEDIUM","approxDurationMs":"656822","audioSampleRate":"44100","audioChannels":2,"loudnessDb":-5.3899994,"isDrc":true,"trackAbsoluteLoudnessLkfs":-19.389999,"qualityOrdinal":"QUALITY_ORDINAL_UNKNOWN"},{"itag":140,"mimeType":"audio/mp4; codecs=\"mp4a.40.2\"","bitrate":131125,"initRange":{"start":"0","end":"722"},"indexRange":{"start":"723","end":"1546"},"lastModified":"1765861069384382","contentLength":"10630724","quality":"tiny","xtags":"ChEKBWFjb250EghvcmlnaW5hbAoKCgRsYW5nEgJibg","projectionType":"RECTANGULAR","audioTrack":{"displayName":"Bangla original","id":"bn.4","audioIsDefault":true},"averageBitrate":129480,"highReplication":true,"audioQuality":"AUDIO_QUALITY_MEDIUM","approxDurationMs":"656822","audioSampleRate":"44100","audioChannels":2,"loudnessDb":-5.3999996,"trackAbsoluteLoudnessLkfs":-19.4,"qualityOrdinal":"QUALITY_ORDINAL_UNKNOWN"},{"itag":140,"mimeType":"audio/mp4; codecs=\"mp4a.40.2\"","bitrate":131000,"initRange":{"start":"0","end":"722"},"indexRange":{"start":"723","end":"1546"},"lastModified":"1765861493783997","contentLength":"10631108","quality":"tiny","xtags":"ChEKBWFjb250EghvcmlnaW5hbAoKCgRsYW5nEgJibgoHCgJ2YhIBMQ","projectionType":"RECTANGULAR","audioTrack":{"displayName":"Bangla original","id":"bn.4","audioIsDefault":true},"averageBitrate":129485,"highReplication":true,"audioQuality":"AUDIO_QUALITY_MEDIUM","approxDurationMs":"656822","audioSampleRate":"44100","audioChannels":2,"loudnessDb":0.60000038,"trackAbsoluteLoudnessLkfs":-13.4,"isVb":true,"qualityOrdinal":"QUALITY_ORDINAL_UNKNOWN"},{"itag":249,"mimeType":"audio/webm; codecs=\"opus\"","bitrate":64810,"initRange":{"start":"0","end":"258"},"indexRange":{"start":"259","end":"1377"},"lastModified":"1765861053340365","contentLength":"4847046","quality":"tiny","xtags":"ChQKBWFjb250EgtkdWJiZWQtYXV0bwoNCgRsYW5nEgVlbi1VUw","projectionType":"RECTANGULAR","audioTrack":{"displayName":"English (US)","id":"en-US.10","audioIsDefault":false,"isAutoDubbed":true},"averageBitrate":59034,"audioQuality":"AUDIO_QUALITY_LOW","approxDurationMs":"656841","audioSampleRate":"48000","audioChannels":2,"loudnessDb":-2.2999992,"trackAbsoluteLoudnessLkfs":-16.299999,"qualityOrdinal":"QUALITY_ORDINAL_UNKNOWN"},{"itag":249,"mimeType":"audio/webm; codecs=\"opus\"","bitrate":63169,"initRange":{"start":"0","end":"265"},"indexRange":{"start":"266","end":"1384"},"lastModified":"1765861098464809","contentLength":"4623137","quality":"tiny","xtags":"ChEKBWFjb250EghvcmlnaW5hbAoICgNkcmMSATEKCgoEbGFuZxICYm4","projectionType":"RECTANGULAR","audioTrack":{"displayName":"Bangla original","id":"bn.4","audioIsDefault":true},"averageBitrate":56312,"audioQuality":"AUDIO_QUALITY_LOW","approxDurationMs":"656781","audioSampleRate":"48000","audioChannels":2,"loudnessDb":-5.3999996,"isDrc":true,"trackAbsoluteLoudnessLkfs":-19.4,"qualityOrdinal":"QUALITY_ORDINAL_UNKNOWN"},{"itag":249,"mimeType":"audio/webm; codecs=\"opus\"","bitrate":63169,"initRange":{"start":"0","end":"265"},"indexRange":{"start":"266","end":"1384"},"lastModified":"1765861106881639","contentLength":"4623067","quality":"tiny","xtags":"ChEKBWFjb250EghvcmlnaW5hbAoKCgRsYW5nEgJibg","projectionType":"RECTANGULAR","audioTrack":{"displayName":"Bangla original","id":"bn.4","audioIsDefault":true},"averageBitrate":56311,"audioQuality":"AUDIO_QUALITY_LOW","approxDurationMs":"656781","audioSampleRate":"48000","audioChannels":2,"loudnessDb":-5.3999996,"trackAbsoluteLoudnessLkfs":-19.4,"qualityOrdinal":"QUALITY_ORDINAL_UNKNOWN"},{"itag":249,"mimeType":"audio/webm; codecs=\"opus\"","bitrate":59559,"initRange":{"start":"0","end":"258"},"indexRange":{"start":"259","end":"1376"},"lastModified":"1765861392072488","contentLength":"4453973","quality":"tiny","xtags":"ChEKBWFjb250EghvcmlnaW5hbAoKCgRsYW5nEgJibgoHCgJ2YhIBMQ","projectionType":"RECTANGULAR","audioTrack":{"displayName":"Bangla original","id":"bn.4","audioIsDefault":true},"averageBitrate":54252,"audioQuality":"AUDIO_QUALITY_LOW","approxDurationMs":"656781","audioSampleRate":"48000","audioChannels":2,"loudnessDb":0.60000038,"trackAbsoluteLoudnessLkfs":-13.4,"isVb":true,"qualityOrdinal":"QUALITY_ORDINAL_UNKNOWN"},{"itag":250,"mimeType":"audio/webm; codecs=\"opus\"","bitrate":83356,"initRange":{"start":"0","end":"258"},"indexRange":{"start":"259","end":"1377"},"lastModified":"1765861053267248","contentLength":"6251951","quality":"tiny","xtags":"ChQKBWFjb250EgtkdWJiZWQtYXV0bwoNCgRsYW5nEgVlbi1VUw","projectionType":"RECTANGULAR","audioTrack":{"displayName":"English (US)","id":"en-US.10","audioIsDefault":false,"isAutoDubbed":true},"averageBitrate":76145,"audioQuality":"AUDIO_QUALITY_LOW","approxDurationMs":"656841","audioSampleRate":"48000","audioChannels":2,"loudnessDb":-2.2999992,"trackAbsoluteLoudnessLkfs":-16.299999,"qualityOrdinal":"QUALITY_ORDINAL_UNKNOWN"},{"itag":250,"mimeType":"audio/webm; codecs=\"opus\"","bitrate":82830,"initRange":{"start":"0","end":"265"},"indexRange":{"start":"266","end":"1384"},"lastModified":"1765861098591895","contentLength":"6246318","quality":"tiny","xtags":"ChEKBWFjb250EghvcmlnaW5hbAoICgNkcmMSATEKCgoEbGFuZxICYm4","projectionType":"RECTANGULAR","audioTrack":{"displayName":"Bangla original","id":"bn.4","audioIsDefault":true},"averageBitrate":76084,"audioQuality":"AUDIO_QUALITY_LOW","approxDurationMs":"656781","audioSampleRate":"48000","audioChannels":2,"loudnessDb":-5.3999996,"isDrc":true,"trackAbsoluteLoudnessLkfs":-19.4,"qualityOrdinal":"QUALITY_ORDINAL_UNKNOWN"},{"itag":250,"mimeType":"audio/webm; codecs=\"opus\"","bitrate":82831,"initRange":{"start":"0","end":"265"},"indexRange":{"start":"266","end":"1384"},"lastModified":"1765861106521885","contentLength":"6246315","quality":"tiny","xtags":"ChEKBWFjb250EghvcmlnaW5hbAoKCgRsYW5nEgJibg","projectionType":"RECTANGULAR","audioTrack":{"displayName":"Bangla original","id":"bn.4","audioIsDefault":true},"averageBitrate":76083,"audioQuality":"AUDIO_QUALITY_LOW","approxDurationMs":"656781","audioSampleRate":"48000","audioChannels":2,"loudnessDb":-5.3999996,"trackAbsoluteLoudnessLkfs":-19.4,"qualityOrdinal":"QUALITY_ORDINAL_UNKNOWN"},{"itag":250,"mimeType":"audio/webm; codecs=\"opus\"","bitrate":77387,"initRange":{"start":"0","end":"258"},"indexRange":{"start":"259","end":"1377"},"lastModified":"1765861352394605","contentLength":"5927265","quality":"tiny","xtags":"ChEKBWFjb250EghvcmlnaW5hbAoKCgRsYW5nEgJibgoHCgJ2YhIBMQ","projectionType":"RECTANGULAR","audioTrack":{"displayName":"Bangla original","id":"bn.4","audioIsDefault":true},"averageBitrate":72197,"audioQuality":"AUDIO_QUALITY_LOW","approxDurationMs":"656781","audioSampleRate":"48000","audioChannels":2,"loudnessDb":0.60000038,"trackAbsoluteLoudnessLkfs":-13.4,"isVb":true,"qualityOrdinal":"QUALITY_ORDINAL_UNKNOWN"},{"itag":251,"mimeType":"audio/webm; codecs=\"opus\"","bitrate":158179,"initRange":{"start":"0","end":"258"},"indexRange":{"start":"259","end":"1377"},"lastModified":"1765861052885082","contentLength":"11978738","quality":"tiny","xtags":"ChQKBWFjb250EgtkdWJiZWQtYXV0bwoNCgRsYW5nEgVlbi1VUw","projectionType":"RECTANGULAR","audioTrack":{"displayName":"English (US)","id":"en-US.10","audioIsDefault":false,"isAutoDubbed":true},"averageBitrate":145895,"audioQuality":"AUDIO_QUALITY_MEDIUM","approxDurationMs":"656841","audioSampleRate":"48000","audioChannels":2,"loudnessDb":-2.2999992,"trackAbsoluteLoudnessLkfs":-16.299999,"qualityOrdinal":"QUALITY_ORDINAL_UNKNOWN"},{"itag":251,"mimeType":"audio/webm; codecs=\"opus\"","bitrate":162464,"initRange":{"start":"0","end":"265"},"indexRange":{"start":"266","end":"1384"},"lastModified":"1765861120700996","contentLength":"12282364","quality":"tiny","xtags":"ChEKBWFjb250EghvcmlnaW5hbAoICgNkcmMSATEKCgoEbGFuZxICYm4","projectionType":"RECTANGULAR","audioTrack":{"displayName":"Bangla original","id":"bn.4","audioIsDefault":true},"averageBitrate":149606,"audioQuality":"AUDIO_QUALITY_MEDIUM","approxDurationMs":"656781","audioSampleRate":"48000","audioChannels":2,"loudnessDb":-5.3999996,"isDrc":true,"trackAbsoluteLoudnessLkfs":-19.4,"qualityOrdinal":"QUALITY_ORDINAL_UNKNOWN"},{"itag":251,"mimeType":"audio/webm; codecs=\"opus\"","bitrate":162464,"initRange":{"start":"0","end":"265"},"indexRange":{"start":"266","end":"1384"},"lastModified":"1765861106744492","contentLength":"12282349","quality":"tiny","xtags":"ChEKBWFjb250EghvcmlnaW5hbAoKCgRsYW5nEgJibg","projectionType":"RECTANGULAR","audioTrack":{"displayName":"Bangla original","id":"bn.4","audioIsDefault":true},"averageBitrate":149606,"audioQuality":"AUDIO_QUALITY_MEDIUM","approxDurationMs":"656781","audioSampleRate":"48000","audioChannels":2,"loudnessDb":-5.3999996,"trackAbsoluteLoudnessLkfs":-19.4,"qualityOrdinal":"QUALITY_ORDINAL_UNKNOWN"},{"itag":251,"mimeType":"audio/webm; codecs=\"opus\"","bitrate":152324,"initRange":{"start":"0","end":"258"},"indexRange":{"start":"259","end":"1377"},"lastModified":"1765861363299099","contentLength":"11447630","quality":"tiny","xtags":"ChEKBWFjb250EghvcmlnaW5hbAoKCgRsYW5nEgJibgoHCgJ2YhIBMQ","projectionType":"RECTANGULAR","audioTrack":{"displayName":"Bangla original","id":"bn.4","audioIsDefault":true},"averageBitrate":139439,"audioQuality":"AUDIO_QUALITY_MEDIUM","approxDurationMs":"656781","audioSampleRate":"48000","audioChannels":2,"loudnessDb":0.60000038,"trackAbsoluteLoudnessLkfs":-13.4,"isVb":true,"qualityOrdinal":"QUALITY_ORDINAL_UNKNOWN"}],"serverAbrStreamingUrl":"https://rr2---sn-1p2oxucq-q5jl.googlevideo.com/videoplayback?expire=1766955437\u0026ei=TUVRadurC9yLpt8PtPnjoQw\u0026ip=137.59.180.209\u0026id=o-AOYUr4_C5hkHiqkYULN1FF8w_QdPNDD3U5BbiEoGHBtf\u0026source=youtube\u0026requiressl=yes\u0026xpc=EgVo2aDSNQ%3D%3D\u0026cps=58\u0026met=1766933837%2C\u0026mh=pD\u0026mm=31%2C29\u0026mn=sn-1p2oxucq-q5jl%2Csn-h557sn6s\u0026ms=au%2Crdu\u0026mv=m\u0026mvi=2\u0026pl=24\u0026rms=au%2Cau\u0026initcwndbps=932500\u0026siu=1\u0026spc=wH4Qq9fDZ0mOOUZOqnhLtKCjsbYL9SSXP7Seatj6Z9v9AFU_gA\u0026svpuc=1\u0026ns=zB_uyvC9ad_gK-3PG8vJTL4R\u0026sabr=1\u0026rqh=1\u0026mt=1766933352\u0026fvip=3\u0026keepalive=yes\u0026fexp=51355912%2C51552689%2C51565115%2C51565682%2C51580968\u0026c=WEB\u0026n=t_eY2VvbT87AkAmCLO\u0026sparams=expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Cxpc%2Csiu%2Cspc%2Csvpuc%2Cns%2Csabr%2Crqh\u0026sig=AJfQdSswRQIgLocBUTiM6nuKvUGBAYIdGxnlrMarkc62vFwxkjvPlQUCIQCTIcyNQ_0B7Vd3J3QmxY8Og0bxQMiwO0obNXbFgOs8Bw%3D%3D\u0026lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps\u0026lsig=APaTxxMwRAIgZhfNOwTQBPaU0C0UWWGkDV1CjXDw3DesZ4pR2mMvi_4CIBFYzJ5BbImGa9pu4r_Hc77SrEclTG5XWVT014UJyWPM"},"playerAds":[{"playerLegacyDesktopWatchAdsRenderer":{"playerAdParams":{"showContentThumbnail":true,"enabledEngageTypes":"3,6,4,5,17,1"},"gutParams":{"tag":"\\4061\\ytpwmpu"},"showCompanion":true,"showInstream":true,"useGut":true}}],"playbackTracking":{"videostatsPlaybackUrl":{"baseUrl":"https://s.youtube.com/api/stats/playback?cl=847500619\u0026docid=_FHqOHJefI8\u0026ei=TUVRadurC9yLpt8PtPnjoQw\u0026feature=youtu.be\u0026fexp=\u0026ns=yt\u0026plid=AAZHBFe1aEvt6PaC\u0026sdetail=f%3Ayoutu.be%2C\u0026el=detailpage\u0026len=657\u0026of=Ttw1pKZ3GItrz21I8ga81A\u0026uga=m20\u0026vm=CAEQARgEOjJBSHFpSlRLR0RUemNoUHI2ZjllVXpkVksyUTA2SjIwUE5pLUYtZUtUN3Z4eU9aNVpvUWJTQUJFVEpNa1RtMTNCOERobGJNdFNCa3FrYk53U1lFVGtGRGIxcDQ2UEp3UzBmSXdFZGFReXpMaWtpOUYxRGRteUlGT05PZFFzZ1ZFUklxTG1KSFE"},"videostatsDelayplayUrl":{"baseUrl":"https://s.youtube.com/api/stats/delayplay?cl=847500619\u0026docid=_FHqOHJefI8\u0026ei=TUVRadurC9yLpt8PtPnjoQw\u0026feature=youtu.be\u0026fexp=\u0026ns=yt\u0026plid=AAZHBFe1aEvt6PaC\u0026sdetail=f%3Ayoutu.be%2C\u0026el=detailpage\u0026len=657\u0026of=Ttw1pKZ3GItrz21I8ga81A\u0026uga=m20\u0026vm=CAEQARgEOjJBSHFpSlRLR0RUemNoUHI2ZjllVXpkVksyUTA2SjIwUE5pLUYtZUtUN3Z4eU9aNVpvUWJTQUJFVEpNa1RtMTNCOERobGJNdFNCa3FrYk53U1lFVGtGRGIxcDQ2UEp3UzBmSXdFZGFReXpMaWtpOUYxRGRteUlGT05PZFFzZ1ZFUklxTG1KSFE"},"videostatsWatchtimeUrl":{"baseUrl":"https://s.youtube.com/api/stats/watchtime?cl=847500619\u0026docid=_FHqOHJefI8\u0026ei=TUVRadurC9yLpt8PtPnjoQw\u0026feature=youtu.be\u0026fexp=\u0026ns=yt\u0026plid=AAZHBFe1aEvt6PaC\u0026sdetail=f%3Ayoutu.be%2C\u0026el=detailpage\u0026len=657\u0026of=Ttw1pKZ3GItrz21I8ga81A\u0026uga=m20\u0026vm=CAEQARgEOjJBSHFpSlRLR0RUemNoUHI2ZjllVXpkVksyUTA2SjIwUE5pLUYtZUtUN3Z4eU9aNVpvUWJTQUJFVEpNa1RtMTNCOERobGJNdFNCa3FrYk53U1lFVGtGRGIxcDQ2UEp3UzBmSXdFZGFReXpMaWtpOUYxRGRteUlGT05PZFFzZ1ZFUklxTG1KSFE"},"ptrackingUrl":{"baseUrl":"https://www.youtube.com/ptracking?ei=TUVRadurC9yLpt8PtPnjoQw\u0026oid=vrezM6LxRdVBw4jtpJ2-Lg\u0026plid=AAZHBFe1aEvt6PaC\u0026pltype=content\u0026ptchn=dBqW0cJT9ovy3V42RcF7aQ\u0026ptk=youtube_single\u0026video_id=_FHqOHJefI8"},"qoeUrl":{"baseUrl":"https://s.youtube.com/api/stats/qoe?cat=mta\u0026cl=847500619\u0026docid=_FHqOHJefI8\u0026ei=TUVRadurC9yLpt8PtPnjoQw\u0026el=detailpage\u0026event=streamingstats\u0026feature=youtu.be\u0026fexp=\u0026ns=yt\u0026plid=AAZHBFe1aEvt6PaC\u0026sdetail=f%3Ayoutu.be%2C\u0026stmp=vb%3A1"},"atrUrl":{"baseUrl":"https://s.youtube.com/api/stats/atr?c=WEB\u0026docid=_FHqOHJefI8\u0026ei=TUVRadurC9yLpt8PtPnjoQw\u0026feature=youtu.be\u0026len=657\u0026ns=yt\u0026plid=AAZHBFe1aEvt6PaC\u0026ver=2\u0026vm=CAEQARgEOjJBSHFpSlRLR0RUemNoUHI2ZjllVXpkVksyUTA2SjIwUE5pLUYtZUtUN3Z4eU9aNVpvUWJTQUJFVEpNa1RtMTNCOERobGJNdFNCa3FrYk53U1lFVGtGRGIxcDQ2UEp3UzBmSXdFZGFReXpMaWtpOUYxRGRteUlGT05PZFFzZ1ZFUklxTG1KSFE","elapsedMediaTimeSeconds":5},"videostatsScheduledFlushWalltimeSeconds":[10,20,30],"videostatsDefaultFlushIntervalSeconds":40},"captions":{"playerCaptionsTracklistRenderer":{"captionTracks":[{"baseUrl":"https://www.youtube.com/api/timedtext?v=_FHqOHJefI8\u0026ei=TUVRadurC9yLpt8PtPnjoQw\u0026caps=asr\u0026opi=112496729\u0026exp=xpe\u0026xoaf=5\u0026xowf=1\u0026xospf=1\u0026hl=en\u0026ip=0.0.0.0\u0026ipbits=0\u0026expire=1766959037\u0026sparams=ip,ipbits,expire,v,ei,caps,opi,exp,xoaf\u0026signature=1BC2926271250C6FA47B0F62A4C7DFBA1BAC236D.B7321BC7B7DC5DA31845451229076C2D57467F93\u0026key=yt8\u0026kind=asr\u0026lang=bn\u0026variant=ec","name":{"simpleText":"Bangla (auto-generated)"},"vssId":"a.bn","languageCode":"bn","kind":"asr","isTranslatable":true,"trackName":""}],"audioTracks":[{"captionTrackIndices":[0],"audioTrackId":"en-US.10"},{"captionTrackIndices":[0],"audioTrackId":"bn.4"}],"translationLanguages":[{"languageCode":"ab","languageName":{"simpleText":"Abkhazian"}},{"languageCode":"aa","languageName":{"simpleText":"Afar"}},{"languageCode":"af","languageName":{"simpleText":"Afrikaans"}},{"languageCode":"ak","languageName":{"simpleText":"Akan"}},{"languageCode":"sq","languageName":{"simpleText":"Albanian"}},{"languageCode":"am","languageName":{"simpleText":"Amharic"}},{"languageCode":"ar","languageName":{"simpleText":"Arabic"}},{"languageCode":"hy","languageName":{"simpleText":"Armenian"}},{"languageCode":"as","languageName":{"simpleText":"Assamese"}},{"languageCode":"ay","languageName":{"simpleText":"Aymara"}},{"languageCode":"az","languageName":{"simpleText":"Azerbaijani"}},{"languageCode":"bn","languageName":{"simpleText":"Bangla"}},{"languageCode":"ba","languageName":{"simpleText":"Bashkir"}},{"languageCode":"eu","languageName":{"simpleText":"Basque"}},{"languageCode":"be","languageName":{"simpleText":"Belarusian"}},{"languageCode":"bho","languageName":{"simpleText":"Bhojpuri"}},{"languageCode":"bs","languageName":{"simpleText":"Bosnian"}},{"languageCode":"br","languageName":{"simpleText":"Breton"}},{"languageCode":"bg","languageName":{"simpleText":"Bulgarian"}},{"languageCode":"my","languageName":{"simpleText":"Burmese"}},{"languageCode":"ca","languageName":{"simpleText":"Catalan"}},{"languageCode":"ceb","languageName":{"simpleText":"Cebuano"}},{"languageCode":"zh-Hans","languageName":{"simpleText":"Chinese (Simplified)"}},{"languageCode":"zh-Hant","languageName":{"simpleText":"Chinese (Traditional)"}},{"languageCode":"co","languageName":{"simpleText":"Corsican"}},{"languageCode":"hr","languageName":{"simpleText":"Croatian"}},{"languageCode":"cs","languageName":{"simpleText":"Czech"}},{"languageCode":"da","languageName":{"simpleText":"Danish"}},{"languageCode":"dv","languageName":{"simpleText":"Divehi"}},{"languageCode":"nl","languageName":{"simpleText":"Dutch"}},{"languageCode":"dz","languageName":{"simpleText":"Dzongkha"}},{"languageCode":"en","languageName":{"simpleText":"English"}},{"languageCode":"eo","languageName":{"simpleText":"Esperanto"}},{"languageCode":"et","languageName":{"simpleText":"Estonian"}},{"languageCode":"ee","languageName":{"simpleText":"Ewe"}},{"languageCode":"fo","languageName":{"simpleText":"Faroese"}},{"languageCode":"fj","languageName":{"simpleText":"Fijian"}},{"languageCode":"fil","languageName":{"simpleText":"Filipino"}},{"languageCode":"fi","languageName":{"simpleText":"Finnish"}},{"languageCode":"fr","languageName":{"simpleText":"French"}},{"languageCode":"gaa","languageName":{"simpleText":"Ga"}},{"languageCode":"gl","languageName":{"simpleText":"Galician"}},{"languageCode":"lg","languageName":{"simpleText":"Ganda"}},{"languageCode":"ka","languageName":{"simpleText":"Georgian"}},{"languageCode":"de","languageName":{"simpleText":"German"}},{"languageCode":"el","languageName":{"simpleText":"Greek"}},{"languageCode":"gn","languageName":{"simpleText":"Guarani"}},{"languageCode":"gu","languageName":{"simpleText":"Gujarati"}},{"languageCode":"ht","languageName":{"simpleText":"Haitian Creole"}},{"languageCode":"ha","languageName":{"simpleText":"Hausa"}},{"languageCode":"haw","languageName":{"simpleText":"Hawaiian"}},{"languageCode":"iw","languageName":{"simpleText":"Hebrew"}},{"languageCode":"hi","languageName":{"simpleText":"Hindi"}},{"languageCode":"hmn","languageName":{"simpleText":"Hmong"}},{"languageCode":"hu","languageName":{"simpleText":"Hungarian"}},{"languageCode":"is","languageName":{"simpleText":"Icelandic"}},{"languageCode":"ig","languageName":{"simpleText":"Igbo"}},{"languageCode":"id","languageName":{"simpleText":"Indonesian"}},{"languageCode":"iu","languageName":{"simpleText":"Inuktitut"}},{"languageCode":"ga","languageName":{"simpleText":"Irish"}},{"languageCode":"it","languageName":{"simpleText":"Italian"}},{"languageCode":"ja","languageName":{"simpleText":"Japanese"}},{"languageCode":"jv","languageName":{"simpleText":"Javanese"}},{"languageCode":"kl","languageName":{"simpleText":"Kalaallisut"}},{"languageCode":"kn","languageName":{"simpleText":"Kannada"}},{"languageCode":"kk","languageName":{"simpleText":"Kazakh"}},{"languageCode":"kha","languageName":{"simpleText":"Khasi"}},{"languageCode":"km","languageName":{"simpleText":"Khmer"}},{"languageCode":"rw","languageName":{"simpleText":"Kinyarwanda"}},{"languageCode":"ko","languageName":{"simpleText":"Korean"}},{"languageCode":"kri","languageName":{"simpleText":"Krio"}},{"languageCode":"ku","languageName":{"simpleText":"Kurdish"}},{"languageCode":"ky","languageName":{"simpleText":"Kyrgyz"}},{"languageCode":"lo","languageName":{"simpleText":"Lao"}},{"languageCode":"la","languageName":{"simpleText":"Latin"}},{"languageCode":"lv","languageName":{"simpleText":"Latvian"}},{"languageCode":"ln","languageName":{"simpleText":"Lingala"}},{"languageCode":"lt","languageName":{"simpleText":"Lithuanian"}},{"languageCode":"lua","languageName":{"simpleText":"Luba-Lulua"}},{"languageCode":"luo","languageName":{"simpleText":"Luo"}},{"languageCode":"lb","languageName":{"simpleText":"Luxembourgish"}},{"languageCode":"mk","languageName":{"simpleText":"Macedonian"}},{"languageCode":"mg","languageName":{"simpleText":"Malagasy"}},{"languageCode":"ms","languageName":{"simpleText":"Malay"}},{"languageCode":"ml","languageName":{"simpleText":"Malayalam"}},{"languageCode":"mt","languageName":{"simpleText":"Maltese"}},{"languageCode":"gv","languageName":{"simpleText":"Manx"}},{"languageCode":"mi","languageName":{"simpleText":"Māori"}},{"languageCode":"mr","languageName":{"simpleText":"Marathi"}},{"languageCode":"mn","languageName":{"simpleText":"Mongolian"}},{"languageCode":"mfe","languageName":{"simpleText":"Morisyen"}},{"languageCode":"ne","languageName":{"simpleText":"Nepali"}},{"languageCode":"new","languageName":{"simpleText":"Newari"}},{"languageCode":"nso","languageName":{"simpleText":"Northern Sotho"}},{"languageCode":"no","languageName":{"simpleText":"Norwegian"}},{"languageCode":"ny","languageName":{"simpleText":"Nyanja"}},{"languageCode":"oc","languageName":{"simpleText":"Occitan"}},{"languageCode":"or","languageName":{"simpleText":"Odia"}},{"languageCode":"om","languageName":{"simpleText":"Oromo"}},{"languageCode":"os","languageName":{"simpleText":"Ossetic"}},{"languageCode":"pam","languageName":{"simpleText":"Pampanga"}},{"languageCode":"ps","languageName":{"simpleText":"Pashto"}},{"languageCode":"fa","languageName":{"simpleText":"Persian"}},{"languageCode":"pl","languageName":{"simpleText":"Polish"}},{"languageCode":"pt","languageName":{"simpleText":"Portuguese"}},{"languageCode":"pt-PT","languageName":{"simpleText":"Portuguese (Portugal)"}},{"languageCode":"pa","languageName":{"simpleText":"Punjabi"}},{"languageCode":"qu","languageName":{"simpleText":"Quechua"}},{"languageCode":"ro","languageName":{"simpleText":"Romanian"}},{"languageCode":"rn","languageName":{"simpleText":"Rundi"}},{"languageCode":"ru","languageName":{"simpleText":"Russian"}},{"languageCode":"sm","languageName":{"simpleText":"Samoan"}},{"languageCode":"sg","languageName":{"simpleText":"Sango"}},{"languageCode":"sa","languageName":{"simpleText":"Sanskrit"}},{"languageCode":"gd","languageName":{"simpleText":"Scottish Gaelic"}},{"languageCode":"sr","languageName":{"simpleText":"Serbian"}},{"languageCode":"crs","languageName":{"simpleText":"Seselwa Creole French"}},{"languageCode":"sn","languageName":{"simpleText":"Shona"}},{"languageCode":"sd","languageName":{"simpleText":"Sindhi"}},{"languageCode":"si","languageName":{"simpleText":"Sinhala"}},{"languageCode":"sk","languageName":{"simpleText":"Slovak"}},{"languageCode":"sl","languageName":{"simpleText":"Slovenian"}},{"languageCode":"so","languageName":{"simpleText":"Somali"}},{"languageCode":"st","languageName":{"simpleText":"Southern Sotho"}},{"languageCode":"es","languageName":{"simpleText":"Spanish"}},{"languageCode":"su","languageName":{"simpleText":"Sundanese"}},{"languageCode":"sw","languageName":{"simpleText":"Swahili"}},{"languageCode":"ss","languageName":{"simpleText":"Swati"}},{"languageCode":"sv","languageName":{"simpleText":"Swedish"}},{"languageCode":"tg","languageName":{"simpleText":"Tajik"}},{"languageCode":"ta","languageName":{"simpleText":"Tamil"}},{"languageCode":"tt","languageName":{"simpleText":"Tatar"}},{"languageCode":"te","languageName":{"simpleText":"Telugu"}},{"languageCode":"th","languageName":{"simpleText":"Thai"}},{"languageCode":"bo","languageName":{"simpleText":"Tibetan"}},{"languageCode":"ti","languageName":{"simpleText":"Tigrinya"}},{"languageCode":"to","languageName":{"simpleText":"Tongan"}},{"languageCode":"ts","languageName":{"simpleText":"Tsonga"}},{"languageCode":"tn","languageName":{"simpleText":"Tswana"}},{"languageCode":"tum","languageName":{"simpleText":"Tumbuka"}},{"languageCode":"tr","languageName":{"simpleText":"Turkish"}},{"languageCode":"tk","languageName":{"simpleText":"Turkmen"}},{"languageCode":"uk","languageName":{"simpleText":"Ukrainian"}},{"languageCode":"ur","languageName":{"simpleText":"Urdu"}},{"languageCode":"ug","languageName":{"simpleText":"Uyghur"}},{"languageCode":"uz","languageName":{"simpleText":"Uzbek"}},{"languageCode":"ve","languageName":{"simpleText":"Venda"}},{"languageCode":"vi","languageName":{"simpleText":"Vietnamese"}},{"languageCode":"war","languageName":{"simpleText":"Waray"}},{"languageCode":"cy","languageName":{"simpleText":"Welsh"}},{"languageCode":"fy","languageName":{"simpleText":"Western Frisian"}},{"languageCode":"wo","languageName":{"simpleText":"Wolof"}},{"languageCode":"xh","languageName":{"simpleText":"Xhosa"}},{"languageCode":"yi","languageName":{"simpleText":"Yiddish"}},{"languageCode":"yo","languageName":{"simpleText":"Yoruba"}},{"languageCode":"zu","languageName":{"simpleText":"Zulu"}}],"defaultAudioTrackIndex":1}},"videoDetails":{"videoId":"_FHqOHJefI8","title":"এগুলো জানলে, এক মুহূর্ত Social Media ব্যবহার করবেন না।","lengthSeconds":"657","keywords":["Book review","motivational video","sihab hossain","mindful trading by shb"],"channelId":"UCdBqW0cJT9ovy3V42RcF7aQ","isOwnerViewing":false,"shortDescription":"Social Media Addiction | Ways to reduce social media addiction | Easy ways to remove/cure social media addiction | Mobile Addiction | Phone Addiction | Ways to quit addiction | Ways to stop bad habits | Facebook Addiction | Mobile addiction for students\n\n\nTimestamp\n0:00 – সোশ্যাল মিডিয়ার ক্ষতি\n1:05 – Rat Park experiment\n2:53 – মাদক নিয়ন্ত্রণ ও আবেগ নিয়ন্ত্রণ\n4:08 – সোশ্যাল মিডিয়ার ভেতরের গল্প\n6:19 – পর্তুগালের ঘটনা\n7:20 – সমাধান\n7:37 – স্টেপ ১\n8:16 – স্টেপ ২\n9:32 – স্টেপ ৩\n10:44 – Last words\n\n\n🎓 About Sihab Hossan\n\nI'm Sihab Hossain, an entrepreneur based in Dhaka, and I hold an unshakeable belief: Great knowledge is the true foundation of every great achievement.\n\nThis guiding truth led me to pause my formal studies after university admission, choosing instead to dedicate my life to the most intensive, transformative self-study possible. My focus is always on acquiring the valuable, practical knowledge that genuinely solves problems and elevates life.\n\nMy mission is to illuminate the path for humankind. I will share powerful, transformative knowledge so that everyone—in my country and across the world—can discover the profound education needed to attain their personal missions and become happier, freer, and more peaceful.❤️\n\n📧 Business Mail: contact.sihabh@gmail.com","isCrawlable":true,"thumbnail":{"thumbnails":[{"url":"https://i.ytimg.com/vi/_FHqOHJefI8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLDtmx37Bp4t9l2dcCITWhajCMDRhg","width":168,"height":94},{"url":"https://i.ytimg.com/vi/_FHqOHJefI8/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLAYj6707h9DkJlqS2J1porQeXp2Yg","width":196,"height":110},{"url":"https://i.ytimg.com/vi/_FHqOHJefI8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==\u0026rs=AOn4CLBmalxHJA0-iu5nK-7W9wfpUA2rMg","width":246,"height":138},{"url":"https://i.ytimg.com/vi/_FHqOHJefI8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==\u0026rs=AOn4CLBmEhba_0IhKL1FmPW_M5nz6Ymn6g","width":336,"height":188},{"url":"https://i.ytimg.com/vi/_FHqOHJefI8/maxresdefault.jpg","width":1920,"height":1080}]},"allowRatings":true,"viewCount":"17756","author":"Sihab Hossain","isPrivate":false,"isUnpluggedCorpus":false,"isLiveContent":false},"annotations":[{"playerAnnotationsExpandedRenderer":{"featuredChannel":{"startTimeMs":"0","endTimeMs":"636000","watermark":{"thumbnails":[{"url":"https://i.ytimg.com/an/dBqW0cJT9ovy3V42RcF7aQ/featured_channel.jpg?v=693cf4f6","width":40,"height":40}]},"trackingParams":"CI8BEPM3IhMIm4bUvcXgkQMV3IXpBR20_DjE","navigationEndpoint":{"clickTrackingParams":"CI8BEPM3IhMIm4bUvcXgkQMV3IXpBR20_DjEMgJpdsoBBOxNbzI=","commandMetadata":{"webCommandMetadata":{"url":"/channel/UCdBqW0cJT9ovy3V42RcF7aQ","webPageType":"WEB_PAGE_TYPE_CHANNEL","rootVe":3611,"apiUrl":"/youtubei/v1/browse"}},"browseEndpoint":{"browseId":"UCdBqW0cJT9ovy3V42RcF7aQ"}},"channelName":"Sihab Hossain","subscribeButton":{"subscribeButtonRenderer":{"buttonText":{"runs":[{"text":"SUBSCRIBE"}]},"subscribed":false,"enabled":true,"type":"FREE","channelId":"UCdBqW0cJT9ovy3V42RcF7aQ","showPreferences":false,"subscribedButtonText":{"runs":[{"text":"SUBSCRIBED"}]},"unsubscribedButtonText":{"runs":[{"text":"SUBSCRIBE"}]},"trackingParams":"CJABEJsrIhMIm4bUvcXgkQMV3IXpBR20_DjEMgJpdg==","unsubscribeButtonText":{"runs":[{"text":"UNSUBSCRIBE"}]},"serviceEndpoints":[{"clickTrackingParams":"CJABEJsrIhMIm4bUvcXgkQMV3IXpBR20_DjEMgJpdsoBBOxNbzI=","commandMetadata":{"webCommandMetadata":{"sendPost":true,"apiUrl":"/youtubei/v1/subscription/subscribe"}},"subscribeEndpoint":{"channelIds":["UCdBqW0cJT9ovy3V42RcF7aQ"],"params":"EgIIBBgA"}},{"clickTrackingParams":"CJABEJsrIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"sendPost":true}},"signalServiceEndpoint":{"signal":"CLIENT_SIGNAL","actions":[{"clickTrackingParams":"CJABEJsrIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","openPopupAction":{"popup":{"confirmDialogRenderer":{"trackingParams":"CJEBEMY4IhMIm4bUvcXgkQMV3IXpBR20_DjE","dialogMessages":[{"runs":[{"text":"Unsubscribe from "},{"text":"Sihab Hossain"},{"text":"?"}]}],"confirmButton":{"buttonRenderer":{"style":"STYLE_BLUE_TEXT","size":"SIZE_DEFAULT","isDisabled":false,"text":{"runs":[{"text":"Unsubscribe"}]},"serviceEndpoint":{"clickTrackingParams":"CJMBEPBbIhMIm4bUvcXgkQMV3IXpBR20_DjEMgJpdsoBBOxNbzI=","commandMetadata":{"webCommandMetadata":{"sendPost":true,"apiUrl":"/youtubei/v1/subscription/unsubscribe"}},"unsubscribeEndpoint":{"channelIds":["UCdBqW0cJT9ovy3V42RcF7aQ"],"params":"CgIIBBgA"}},"accessibility":{"label":"Unsubscribe"},"trackingParams":"CJMBEPBbIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"cancelButton":{"buttonRenderer":{"style":"STYLE_TEXT","size":"SIZE_DEFAULT","isDisabled":false,"text":{"runs":[{"text":"Cancel"}]},"accessibility":{"label":"Cancel"},"trackingParams":"CJIBEPBbIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"primaryIsCancel":false}},"popupType":"DIALOG"}}]}}],"subscribeAccessibility":{"accessibilityData":{"label":"Subscribe to Sihab Hossain."}},"unsubscribeAccessibility":{"accessibilityData":{"label":"Unsubscribe from Sihab Hossain."}}}}},"allowSwipeDismiss":true,"annotationId":"691ae507-0000-2601-a79c-30fd3813215c"}}],"playerConfig":{"granularVariableSpeedConfig":{"minimumPlaybackRate":25,"maximumPlaybackRate":200},"vssClientConfig":{"vssUsePostRequest":false},"audioConfig":{"loudnessDb":-5.3999996,"perceptualLoudnessDb":-19.4,"enablePerFormatLoudness":true,"trackAbsoluteLoudnessLkfs":-19.4,"loudnessTargetLkfs":-14},"playbackStartConfig":{"startSeconds":273,"startPosition":{"streamTimeMillis":"273000"}},"streamSelectionConfig":{"maxBitrate":"7460000"},"mediaCommonConfig":{"dynamicReadaheadConfig":{"maxReadAheadMediaTimeMs":120000,"minReadAheadMediaTimeMs":15000,"readAheadGrowthRateMs":1000},"mediaUstreamerRequestConfig":{"videoPlaybackUstreamerConfig":"CpUQCqkFCAAlAACAPy0zM3M_NT0Klz9YAWgBchoKFm1mczJfY21mc193ZWJfdjNfMl8wMDMYAKABAagBALgCANoChgEQsOoBGIDd2wEgoJwBKKCcATCYdXCIJ4AB9APgAQOYAgzQAgLoAgSAAwKIA4gnqAMDwAMByAMBgAQB0AQB2AQB-AQHgAV9wAUByAUB4AXQD-gFAfgF0A-QBgHQBgHwBgGAB9APwAcBgAgBiAgBnQjNzEw-oAjoB-AIAegI____________AfoClAEtAACgQjUAAKpCZQAAgEBowHCoAdCGA4UCmpkZP40CAACAP5UC-u1rO7UCAACAP8AC3wP9As3MzD2QAwGdAwrXIz2gAwHVAwAAekSYBAHVBAAAIEHoBPAQoAYBtQa9N4Y1vQYzM4NAwAcByAcB5QcAgAlE8AcBgAgBoQgAAAAAAADwv6kIAAAAAAAA8L-wCN8DuAoBqAMBsAMD0AMB2AMBygQcChMIwKkHEJh1GOgHJQAAAAAoADAAEODUAxjQD9IEDwoICLAJELAJIAEgiCcoAdoEDQoGCPAuEPAuIPAuKAHwBQGYBgGoBoCAAtIGFAjoBxBkGg0IiCcVAAAAPx3NzEw_2AYB8AYBuAcBoAgB0ggGCAEQARgBqQkAAAAAAADwv7EJAAAAAAAA8L_QCQHaCSBMREZNU0VDVDZ2ZXAxS2ZCb0NnUWN2cllQemc2a3c9PZgK997JGKIKCPbeyRj33skYqAsB6gsEiwaMBoAMAagMkAHgDQHIDwHQDwHoEAGQEQGgEQGyERxDQU1TRHhVS3ViYkpEUFFBaWdhQ0FpRE1CUT090BIB4BIBgBMBsBMBkRQAAAAAAADwv5kUAAAAAAAA8L-wFAHKFADYFADoFAGBFQAAAAAAAPC_iKehygsBMgwIqwIQz6n5zaHBkQMyDAivAhD0qMzNocGRAzIMCIgBEIXWyMyhwZEDMgwI9wEQuufUzaHBkQMyDAiqAhCx5-bOocGRAzIMCK4CEJ2I9c-hwZEDMgwIhwEQ68qrzKHBkQMyDAj0ARDk6snKocGRAzIMCIYBEKjSpMyhwZEDMgwI8wEQlPbEy6HBkQMyDAiFARD7kNjLocGRAzIMCPIBEJqgtsyhwZEDMgwIoAEQrOCzzKHBkQMyDAiWAhDk1J3LocGRAzJACIwBEMLqwvupwZEDGjJDaFFLQldGamIyNTBFZ3RrZFdKaVpXUXRZWFYwYndvTkNnUnNZVzVuRWdWbGJpMVZVdzJFCIwBEMbttpepwZEDGjdDaEVLQldGamIyNTBFZ2h2Y21sbmFXNWhiQW9JQ2dOa2NtTVNBVEVLQ2dvRWJHRnVaeElDWW00MjgIjAEQvtWNjqnBkQMaKkNoRUtCV0ZqYjI1MEVnaHZjbWxuYVc1aGJBb0tDZ1JzWVc1bkVnSmliZzJECIwBEL37vNiqwZEDGjZDaEVLQldGamIyNTBFZ2h2Y21sbmFXNWhiQW9LQ2dSc1lXNW5FZ0ppYmdvSENnSjJZaElCTVEyQAj5ARDNtbqGqcGRAxoyQ2hRS0JXRmpiMjUwRWd0a2RXSmlaV1F0WVhWMGJ3b05DZ1JzWVc1bkVnVmxiaTFWVXcyRQj5ARCpzPybqcGRAxo3Q2hFS0JXRmpiMjUwRWdodmNtbG5hVzVoYkFvSUNnTmtjbU1TQVRFS0Nnb0ViR0Z1WnhJQ1ltNDI4CPkBEOeo_p-pwZEDGipDaEVLQldGamIyNTBFZ2h2Y21sbmFXNWhiQW9LQ2dSc1lXNW5FZ0ppYmcyRAj5ARCo_vynqsGRAxo2Q2hFS0JXRmpiMjUwRWdodmNtbG5hVzVoYkFvS0NnUnNZVzVuRWdKaWJnb0hDZ0oyWWhJQk1RMkAI-gEQsPq1hqnBkQMaMkNoUUtCV0ZqYjI1MEVndGtkV0ppWldRdFlYVjBid29OQ2dSc1lXNW5FZ1ZsYmkxVlV3MkUI-gEQl62EnKnBkQMaN0NoRUtCV0ZqYjI1MEVnaHZjbWxuYVc1aGJBb0lDZ05rY21NU0FURUtDZ29FYkdGdVp4SUNZbTQyOAj6ARCdruifqcGRAxoqQ2hFS0JXRmpiMjUwRWdodmNtbG5hVzVoYkFvS0NnUnNZVzVuRWdKaWJnMkQI-gEQ7Z6HlarBkQMaNkNoRUtCV0ZqYjI1MEVnaHZjbWxuYVc1aGJBb0tDZ1JzWVc1bkVnSmliZ29IQ2dKMlloSUJNUTJACPsBENrQnoapwZEDGjJDaFFLQldGamIyNTBFZ3RrZFdKaVpXUXRZWFYwYndvTkNnUnNZVzVuRWdWbGJpMVZVdzJFCPsBEMTkyaapwZEDGjdDaEVLQldGamIyNTBFZ2h2Y21sbmFXNWhiQW9JQ2dOa2NtTVNBVEVLQ2dvRWJHRnVaeElDWW00MjgI-wEQrPn1n6nBkQMaKkNoRUtCV0ZqYjI1MEVnaHZjbWxuYVc1aGJBb0tDZ1JzWVc1bkVnSmliZzJECPsBEJvmoJqqwZEDGjZDaEVLQldGamIyNTBFZ2h2Y21sbmFXNWhiQW9LQ2dSc1lXNW5FZ0ppYmdvSENnSjJZaElCTVE6AFIxGgJibigAMhhVQ2RCcVcwY0pUOW92eTNWNDJSY0Y3YVE4AEAAUB5YAGABaAF4AIABAJIBAggFmgEECgJlbqABAbABBboBAwQFMcIBCAECAwQFCDBeygEjChsKF1RVVlJhZHVyQzl5THB0OFB0UG5qb1F3EAESBAgAEALQAQASTAD5XE0GMEUCIQCXo2_YhlgemNX8xxO934BvhUUEGGjcAhl-HzBYwF90PQIgFC6EQVFixI4znBISQN2ryG_DXoySavGQigIFI3AWeFgaAmVp"},"useServerDrivenAbr":true,"serverPlaybackStartConfig":{"enable":true,"playbackStartPolicy":{"startMinReadaheadPolicy":[{"minReadaheadMs":1200}]}},"platypusUseEnvoyNetFetch":false,"fixLivePlaybackModelDefaultPosition":false},"webPlayerConfig":{"useCobaltTvosDash":true,"webPlayerActionsPorting":{"getSharePanelCommand":{"clickTrackingParams":"CAAQu2kiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"sendPost":true,"apiUrl":"/youtubei/v1/share/get_web_player_share_panel"}},"webPlayerShareEntityServiceEndpoint":{"serializedShareEntity":"CgtfRkhxT0hKZWZJOA%3D%3D"}},"subscribeCommand":{"clickTrackingParams":"CAAQu2kiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"sendPost":true,"apiUrl":"/youtubei/v1/subscription/subscribe"}},"subscribeEndpoint":{"channelIds":["UCdBqW0cJT9ovy3V42RcF7aQ"],"params":"EgIIBxgA"}},"unsubscribeCommand":{"clickTrackingParams":"CAAQu2kiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"sendPost":true,"apiUrl":"/youtubei/v1/subscription/unsubscribe"}},"unsubscribeEndpoint":{"channelIds":["UCdBqW0cJT9ovy3V42RcF7aQ"],"params":"CgIIBxgA"}},"addToWatchLaterCommand":{"clickTrackingParams":"CAAQu2kiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"sendPost":true,"apiUrl":"/youtubei/v1/browse/edit_playlist"}},"playlistEditEndpoint":{"playlistId":"WL","actions":[{"addedVideoId":"_FHqOHJefI8","action":"ACTION_ADD_VIDEO"}]}},"removeFromWatchLaterCommand":{"clickTrackingParams":"CAAQu2kiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"sendPost":true,"apiUrl":"/youtubei/v1/browse/edit_playlist"}},"playlistEditEndpoint":{"playlistId":"WL","actions":[{"action":"ACTION_REMOVE_VIDEO_BY_VIDEO_ID","removedVideoId":"_FHqOHJefI8"}]}}}}},"storyboards":{"playerStoryboardSpecRenderer":{"spec":"https://i.ytimg.com/sb/_FHqOHJefI8/storyboard3_L$L/$N.jpg?sqp=-oaymwENSDfyq4qpAwVwAcABBqLzl_8DBgidwoPKBg==|48#27#100#10#10#0#default#rs$AOn4CLBGPxqUf9CtInDBgtOwhq_zR4Fqcw|80#45#133#10#10#5000#M$M#rs$AOn4CLDhiFNQBR0mVByRANX4ZuBWbCRm_A|160#90#133#5#5#5000#M$M#rs$AOn4CLB3O1L04r686TXZCzW02xMXE_nt8g|320#180#133#3#3#5000#M$M#rs$AOn4CLAhkEQJMn7GG82VLrPm9j68EVQEIA","recommendedLevel":3,"fineScrubbingRecommendedLevel":2,"highResolutionRecommendedLevel":3}},"microformat":{"playerMicroformatRenderer":{"thumbnail":{"thumbnails":[{"url":"https://i.ytimg.com/vi/_FHqOHJefI8/maxresdefault.jpg","width":1280,"height":720}]},"embed":{"iframeUrl":"https://www.youtube.com/embed/_FHqOHJefI8?start=273","width":1280,"height":720},"title":{"simpleText":"এগুলো জানলে, এক মুহূর্ত Social Media ব্যবহার করবেন না।"},"description":{"simpleText":"Social Media Addiction | Ways to reduce social media addiction | Easy ways to remove/cure social media addiction | Mobile Addiction | Phone Addiction | Ways to quit addiction | Ways to stop bad habits | Facebook Addiction | Mobile addiction for students\n\n\nTimestamp\n0:00 – সোশ্যাল মিডিয়ার ক্ষতি\n1:05 – Rat Park experiment\n2:53 – মাদক নিয়ন্ত্রণ ও আবেগ নিয়ন্ত্রণ\n4:08 – সোশ্যাল মিডিয়ার ভেতরের গল্প\n6:19 – পর্তুগালের ঘটনা\n7:20 – সমাধান\n7:37 – স্টেপ ১\n8:16 – স্টেপ ২\n9:32 – স্টেপ ৩\n10:44 – Last words\n\n\n🎓 About Sihab Hossan\n\nI'm Sihab Hossain, an entrepreneur based in Dhaka, and I hold an unshakeable belief: Great knowledge is the true foundation of every great achievement.\n\nThis guiding truth led me to pause my formal studies after university admission, choosing instead to dedicate my life to the most intensive, transformative self-study possible. My focus is always on acquiring the valuable, practical knowledge that genuinely solves problems and elevates life.\n\nMy mission is to illuminate the path for humankind. I will share powerful, transformative knowledge so that everyone—in my country and across the world—can discover the profound education needed to attain their personal missions and become happier, freer, and more peaceful.❤️\n\n📧 Business Mail: contact.sihabh@gmail.com"},"lengthSeconds":"657","ownerProfileUrl":"http://www.youtube.com/@shb_esor","externalChannelId":"UCdBqW0cJT9ovy3V42RcF7aQ","isFamilySafe":true,"availableCountries":["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"],"isUnlisted":false,"hasYpcMetadata":false,"viewCount":"17756","category":"Education","publishDate":"2025-12-16T06:01:06-08:00","ownerChannelName":"Sihab Hossain","uploadDate":"2025-12-16T06:01:06-08:00","learningResource":{"learningResourceType":["Real life example"],"educationalLevel":["Advanced"],"educationalLevelCountry":"BD"},"isShortsEligible":false,"externalVideoId":"_FHqOHJefI8","likeCount":"1186","canonicalUrl":"https://www.youtube.com/watch?v=_FHqOHJefI8"}},"cards":{"cardCollectionRenderer":{"cards":[{"cardRenderer":{"teaser":{"simpleCardTeaserRenderer":{"message":{"simpleText":"View corrections"},"trackingParams":"CI4BENA2IhMIm4bUvcXgkQMV3IXpBR20_DjE","prominent":true,"logVisibilityUpdates":true,"onTapCommand":{"clickTrackingParams":"CI4BENA2IhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-error-corrections","visibility":"ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"}}}},"cueRanges":[{"startCardActiveMs":"0","endCardActiveMs":"5000","teaserDurationMs":"6000","iconAfterTeaserMs":"5000"}],"trackingParams":"CI0BELWXARgAIhMIm4bUvcXgkQMV3IXpBR20_DjE"}}],"headerText":{"simpleText":"From Sihab Hossain"},"icon":{"infoCardIconRenderer":{"trackingParams":"CIwBELCXASITCJuG1L3F4JEDFdyF6QUdtPw4xA=="}},"closeButton":{"infoCardIconRenderer":{"trackingParams":"CIsBELGXASITCJuG1L3F4JEDFdyF6QUdtPw4xA=="}},"trackingParams":"CIoBEMI3IhMIm4bUvcXgkQMV3IXpBR20_DjE","allowTeaserDismiss":true,"logIconVisibilityUpdates":true}},"trackingParams":"CAAQu2kiEwibhtS9xeCRAxXchekFHbT8OMQ=","endscreen":{"endscreenRenderer":{"elements":[{"endscreenElementRenderer":{"style":"VIDEO","image":{"thumbnails":[{"url":"https://i.ytimg.com/vi/RyDFUR5ybxI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLBIUCeh1dXSZkD7hcQyf_NdUnrVZw","width":168,"height":94},{"url":"https://i.ytimg.com/vi/RyDFUR5ybxI/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLAL1C-0jACGjBTOAEH0aECaWSRuAg","width":196,"height":110},{"url":"https://i.ytimg.com/vi/RyDFUR5ybxI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==\u0026rs=AOn4CLAOKY-nP05YwkOL9-x-DaCzF2lBUw","width":246,"height":138},{"url":"https://i.ytimg.com/vi/RyDFUR5ybxI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==\u0026rs=AOn4CLCtlTHjuVvPhgvMxCnE2d-C9OH46Q","width":336,"height":188},{"url":"https://i.ytimg.com/vi_webp/RyDFUR5ybxI/maxresdefault.webp","width":1920,"height":1080}]},"left":0.27543861,"width":0.44912282,"top":0.37600699,"aspectRatio":1.7777778,"startMs":"644790","endMs":"656766","title":{"accessibility":{"accessibilityData":{"label":"The way we are being made into \"products\"., video"}},"simpleText":"The way we are being made into \"products\"."},"metadata":{"simpleText":"31,864 views"},"endpoint":{"clickTrackingParams":"CIkBEPDeARgAIhMIm4bUvcXgkQMV3IXpBR20_DjEMgxpdi1lbmRzY3JlZW5Ij_n5kofH-qj8AZoBAxC7acoBBOxNbzI=","commandMetadata":{"webCommandMetadata":{"url":"/watch?v=RyDFUR5ybxI","webPageType":"WEB_PAGE_TYPE_WATCH","rootVe":3832},"interactionLoggingCommandMetadata":{"loggingExpectations":{"screenCreatedLoggingExpectations":{"expectedParentScreens":[{"screenVeType":3832}]}}}},"watchEndpoint":{"videoId":"RyDFUR5ybxI","watchEndpointSupportedOnesieConfig":{"html5PlaybackOnesieConfig":{"commonConfig":{"url":"https://rr3---sn-1p2oxucq-q5jz.googlevideo.com/initplayback?source=youtube\u0026oeis=1\u0026c=WEB\u0026oad=3200\u0026ovd=3200\u0026oaad=11000\u0026oavd=11000\u0026ocs=700\u0026oewis=1\u0026oputc=1\u0026ofpcc=1\u0026siu=1\u0026msp=1\u0026odepv=1\u0026id=4720c5511e726f12\u0026ip=137.59.180.209\u0026initcwndbps=723750\u0026mt=1766933352\u0026oweuc=\u0026pxtags=Cg4KAnR4Egg1MTUzOTgzMQ\u0026rxtags=Cg4KAnR4Egg1MTUzOTgzMA%2CCg4KAnR4Egg1MTUzOTgzMQ"}}}}},"trackingParams":"CIkBEPDeARgAIhMIm4bUvcXgkQMV3IXpBR20_DjE","id":"1199437229308286145","thumbnailOverlays":[{"thumbnailOverlayTimeStatusRenderer":{"text":{"accessibility":{"accessibilityData":{"label":"14 minutes, 41 seconds"}},"simpleText":"14:41"},"style":"DEFAULT"}}]}}],"startMs":"644790","trackingParams":"CIUBEO_eASITCJuG1L3F4JEDFdyF6QUdtPw4xA==","hideButton":{"toggleButtonViewModel":{"defaultButtonViewModel":{"buttonViewModel":{"iconName":"VISIBILITY_OFF","title":"Hide","onTap":{"innertubeCommand":{"clickTrackingParams":"CIgBENPPDiITCJuG1L3F4JEDFdyF6QUdtPw4xMoBBOxNbzI=","changeCreatorEndscreenVisibilityCommand":{"hide":true}}},"accessibilityText":"Hide endscreen cards","style":"BUTTON_VIEW_MODEL_STYLE_OVERLAY","trackingParams":"CIgBENPPDiITCJuG1L3F4JEDFdyF6QUdtPw4xA==","type":"BUTTON_VIEW_MODEL_TYPE_FILLED","buttonSize":"BUTTON_VIEW_MODEL_SIZE_XSMALL"}},"toggledButtonViewModel":{"buttonViewModel":{"iconName":"VISIBILITY","title":"Show","onTap":{"innertubeCommand":{"clickTrackingParams":"CIcBENTPDiITCJuG1L3F4JEDFdyF6QUdtPw4xMoBBOxNbzI=","changeCreatorEndscreenVisibilityCommand":{"hide":false}}},"accessibilityText":"Show endscreen cards","style":"BUTTON_VIEW_MODEL_STYLE_OVERLAY","trackingParams":"CIcBENTPDiITCJuG1L3F4JEDFdyF6QUdtPw4xA==","type":"BUTTON_VIEW_MODEL_TYPE_FILLED","buttonSize":"BUTTON_VIEW_MODEL_SIZE_XSMALL"}},"rendererContext":{"loggingContext":{"loggingDirectives":{"trackingParams":"CIYBEPzuDiITCJuG1L3F4JEDFdyF6QUdtPw4xA==","visibility":{"types":"12"}}}}}}}},"adPlacements":[{"adPlacementRenderer":{"config":{"adPlacementConfig":{"kind":"AD_PLACEMENT_KIND_MILLISECONDS","adTimeOffset":{"offsetStartMilliseconds":"65700","offsetEndMilliseconds":"-1"},"hideCueRangeMarker":true}},"renderer":{"adBreakServiceRenderer":{"prefetchMilliseconds":"10000","getAdBreakUrl":"https://www.youtube.com/get_midroll_info?ei=TUVRadurC9yLpt8PtPnjoQw\u0026m_pos=65\u0026token=AOmNmeUGRx3BjyghVPQvSZ9_lIUd0-LNG6xs-fJX33r7SPjlK52QiTU-k1cu1B3N_NWlOvJxkVDmOk42ILrt_uGkN8VKHtt_DKe7uoGtKoZr2ZfWWPfQEE3nAG_hiE0dw_8b2p5MlcJbzDLKX_fBfEPAcqsRy85_USkZ54mJgypIVU-JisNwKjYgTo0HmyTneXLGm7Uhw0AVrFfqo1DDDTLxk3om2f7UCrp0UX0lfEkqVLW0Db6YxzLhlUgGenaEli5ClfrHdUInURVkBOUypZcAG3ZFJ01q0F0iXe27SUOzEOin3XZOdIhscDIaLmM-4KcX8YfQfEdSdOd-2LGMtjeGA8cAp1Fqx4VgkTJiEcYji-Z5KVLQehBlU-JNANkBAu8NuXqggNgc\u0026index=1\u0026cpn=[CPN]\u0026lact=[LACT]\u0026vis=[VIS]\u0026ad_block=[AD_BLOCK]\u0026tsla=[TSLA]\u0026bid=[BISCOTTI_ID]\u0026dt=[DT]\u0026flash=[FLASH]\u0026frm=[FRM]\u0026ca_type=[CA_TYPE]\u0026u_tz=[U_TZ]\u0026u_his=[U_HIS]\u0026u_java=[U_JAVA]\u0026u_h=[U_H]\u0026u_w=[U_W]\u0026u_ah=[U_AH]\u0026u_aw=[U_AW]\u0026u_cd=[U_CD]\u0026u_nplug=[U_NPLUG]\u0026u_nmime=[U_NMIME]\u0026p_w=[P_W]\u0026p_h=[P_H]\u0026c=WEB\u0026cver=2.20251222.04.00\u0026m_pos_ms=65700"}},"adSlotLoggingData":{"serializedSlotAdServingDataEntry":"ChMIu8HVvcXgkQMVQoevAR1HDjEbGhgYpIEEWARiEDRMMWtaZlp4em40eDF0Znc="}}},{"adPlacementRenderer":{"config":{"adPlacementConfig":{"kind":"AD_PLACEMENT_KIND_END","adTimeOffset":{"offsetStartMilliseconds":"-1","offsetEndMilliseconds":"-1"},"hideCueRangeMarker":true}},"renderer":{"adBreakServiceRenderer":{"prefetchMilliseconds":"10000","getAdBreakUrl":"https://www.youtube.com/get_midroll_info?ei=TUVRadurC9yLpt8PtPnjoQw\u0026m_pos=-1\u0026token=AOmNmeXWTf7q0ofsyi75_shdbH1BP3IG6_kzzqBLJIZuJHfWjFZHEi-Vo-w4caIvN0c6Cyqhe1-vm_FN9O06kE-8v1q0l6WIAhJmz0AVfg8qahMQxgvhxt6aIDJp5lkCYEvJG6BFjLqS5o3kJ2HRRQ84xPhDVXneJsX5ExNoNuMHtQw8UrzSuEBNdqnA2viBuF6Nz46polGzdye2emAwG5998YFyjz7ioNg2x6nBEfWkBaTfSAISdV31AG6hvbt5HckyVVyCddZL7Gn4AbceFqS4mc6mdgzfDYd1t5G3uHe24vJw2fm4PAOk58f7jrrSFXJG4ywEQhPVGbsHHD7p2jerjclg_QMGE9IPSdZzRHf5l2wQCOjzqAtIuUuJ0QHrmb4GI6FVTuJM\u0026index=2\u0026cpn=[CPN]\u0026lact=[LACT]\u0026vis=[VIS]\u0026ad_block=[AD_BLOCK]\u0026tsla=[TSLA]\u0026bid=[BISCOTTI_ID]\u0026dt=[DT]\u0026flash=[FLASH]\u0026frm=[FRM]\u0026ca_type=[CA_TYPE]\u0026u_tz=[U_TZ]\u0026u_his=[U_HIS]\u0026u_java=[U_JAVA]\u0026u_h=[U_H]\u0026u_w=[U_W]\u0026u_ah=[U_AH]\u0026u_aw=[U_AW]\u0026u_cd=[U_CD]\u0026u_nplug=[U_NPLUG]\u0026u_nmime=[U_NMIME]\u0026p_w=[P_W]\u0026p_h=[P_H]\u0026c=WEB\u0026cver=2.20251222.04.00\u0026m_pos_ms=-1"}},"adSlotLoggingData":{"serializedSlotAdServingDataEntry":"ChMIu8HVvcXgkQMVQoevAR1HDjEbGh8Y____________AVgFYhBFdmo0RjBHUEZsbVd0Vkx4"}}}],"adSlots":[{"adSlotRenderer":{"adSlotMetadata":{"slotId":"P53VzgUlrq4BTqpc","slotType":"SLOT_TYPE_PLAYER_BYTES","adSlotLoggingData":{"serializedSlotAdServingDataEntry":"ChMIu8HVvcXgkQMVQoevAR1HDjEbGhgQAUgBWAFiEFA1M1Z6Z1VscnE0QlRxcGM="},"triggerEvent":"SLOT_TRIGGER_EVENT_BEFORE_CONTENT"},"fulfillmentContent":{"fulfilledLayout":{"playerBytesAdLayoutRenderer":{"adLayoutMetadata":{"layoutId":"NXGDnmPOV48RioBd","layoutType":"LAYOUT_TYPE_COMPOSITE_PLAYER_BYTES"},"renderingContent":{"playerBytesSequentialLayoutRenderer":{"sequentialLayouts":[{"playerBytesAdLayoutRenderer":{"adLayoutMetadata":{"layoutId":"MNlGMXcyGjz7h0BA","layoutType":"LAYOUT_TYPE_MEDIA","adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgWShMIu8HVvcXgkQMVQoevAR1HDjEbUgYQAUgBWAFoAXAs"}},"renderingContent":{"instreamVideoAdRenderer":{"skipOffsetMilliseconds":5000,"pings":{"impressionPings":[{"baseUrl":"https://www.youtube.com/pagead/adview?ai=CxjXhTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBIEET9C8hPlVyAgopJOH7p1_IqZKYfNrrUjltEKD0yAjBi0eo_9W0pODw50NhoiTFfvfT7_Kcz-R_IBi9ythO0d6b3mV4hPEPcjCVNtxDVJOMvu9Rd7YoWSf0tyB22vNkkcdkM6dMgvf4hquaxdB-hJRwu7fjxxAMjCqJ_xoaTQaJoP4vNGUDZo34Gwx7CGhaPLHaeDEziqDOCUxr_xvyVpS6rfrBA8Yf1Fz3HbJ-sLOAXz-DpgyQUrZA_Aj98z1eu11mOgFsDxkap4sUW_SVvn-iPP8FrPgUgWZi5ugj4FP1grHtehKXpr_rar6Txwnf1hcnxv1CJbGVOzk8rNPQ0ri5mjEJ4Tb-bI_7wGUqGXmLy6otEsHIRkgN6YbPhBjF6pAC47E1lm78RgT6iGmJAKBdISVhroeoHVI7Maasa-wbH56-iomMqCDjovVB9UvN674scCVMeoYUemYW1QXv-rZkWeV9RkMCCFF6ClGCy3HtlLkN5N2FghbLCgdqGEerQk0F2kxYLEUQQ5uLQzrps2uvIJKf3R4UiStMvjT0SyCuEu3ZG59Am5kBAn6l27VHIGRGRLzyeI3NeUspRv8y_JfdGTLHAwSZOtQ5H8nh-Fds8w9TLsc_ms8CFmwQiqD8r2Ag09_yH5SbcXwSCs-Y8CgLJbMHOzK8WOp53zr8GW7J-6AwATTnqiuqgWIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAerxRuoB-PZG6gHt6mxAqgHl7qxAqgH6auxApIIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugt4CAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEagCALUCkmlMQN0CFvMPO6ADALoDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMADSFwoSAvBZGKQBIgEA\u0026sigh=aU5ouZb22UE\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026lact=%5BLACT%5D"},{"baseUrl":"https://www.youtube.com/api/stats/ads?ver=2\u0026ns=1\u0026event=2\u0026device=1\u0026content_v=_FHqOHJefI8\u0026el=detailpage\u0026ei=TUVRadurC9yLpt8PtPnjoQw\u0026devicever=2.20251222.04.00\u0026bti=9477942\u0026format=15_2_1\u0026break_type=1\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=0\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=h.3.0.0\u0026slot_pos=0\u0026slot_len=2\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]\u0026ad_cpn=[AD_CPN]\u0026ad_id=%2C692016276406\u0026ad_len=20000\u0026ad_mt=[AD_MT]\u0026ad_sys=YT%3AAdSense-Viral%2CAdSense-Viral\u0026ad_v=PuZeeWRqSYI\u0026aqi=TUVRafvmDMKOvr0Px5zE2QE\u0026ad_rmp=1\u0026sli=1\u0026slfs=1\u0026loginael=1"}],"errorPings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=videoplayfailed%5BERRORCODE%5D"}],"mutePings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=admute\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"unmutePings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=adunmute\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"pausePings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=adpause\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"rewindPings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=adrewind\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"resumePings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=adresume\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"skipPings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=videoskipped\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D\u0026ad_cpn=%5BAD_CPN%5D"}],"closePings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=adclose\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"progressPings":[{"baseUrl":"https://www.google.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026label=video_10s_engaged_view\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D","offsetMilliseconds":10000},{"baseUrl":"https://www.google.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_engaged_view\u0026ctype=110\u0026ms=%5BCLICK_MS%5D","offsetMilliseconds":20000}],"activeViewViewablePings":[{"baseUrl":"https://www.youtube.com/pcs/activeview?xai=AKAOjsthSHPwQq2zv-Zn7mzPEXy_nloNkhDGxpRCiejRDuqioJkb0K9Gk8mx_500Pwawg-9HnaeWx-kNx54r1PuitfF3PjahE4mxvBIk7NjyjCzvIprEa4OC8x-IzI-5QN5_yuOOUxAwaycgcO_vCMHsLgfevg\u0026sig=Cg0ArKJSzJXOsC4Id0CHEAE\u0026ad_cpn=%5BAD_CPN%5D\u0026id=lidarv\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"activeViewMeasurablePings":[{"baseUrl":"https://www.youtube.com/pcs/activeview?xai=AKAOjsthSHPwQq2zv-Zn7mzPEXy_nloNkhDGxpRCiejRDuqioJkb0K9Gk8mx_500Pwawg-9HnaeWx-kNx54r1PuitfF3PjahE4mxvBIk7NjyjCzvIprEa4OC8x-IzI-5QN5_yuOOUxAwaycgcO_vCMHsLgfevg\u0026sig=Cg0ArKJSzJXOsC4Id0CHEAE\u0026ad_cpn=%5BAD_CPN%5D\u0026id=lidarv\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D\u0026avm=1"}],"abandonPings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_abandon\u0026ad_mt=%5BAD_MT%5D\u0026ad_tos=%5BAD_TOS%5D\u0026ad_wat=%5BAD_WAT%5D\u0026final=%5BFINAL%5D\u0026ad_cpn=%5BAD_CPN%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"activeViewFullyViewableAudibleHalfDurationPings":[{"baseUrl":"https://www.youtube.com/pcs/activeview?xai=AKAOjsthSHPwQq2zv-Zn7mzPEXy_nloNkhDGxpRCiejRDuqioJkb0K9Gk8mx_500Pwawg-9HnaeWx-kNx54r1PuitfF3PjahE4mxvBIk7NjyjCzvIprEa4OC8x-IzI-5QN5_yuOOUxAwaycgcO_vCMHsLgfevg\u0026sig=Cg0ArKJSzJXOsC4Id0CHEAE\u0026ad_cpn=%5BAD_CPN%5D\u0026id=lidarv\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D\u0026avgm=1"}],"completePings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=videoplaytime100\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D\u0026ad_cpn=%5BAD_CPN%5D"}],"activeViewTracking":{"trafficType":"ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO","identifier":"f4b02532-79eb-498a-a077-f1b818dba8ad"}},"clickthroughEndpoint":{"clickTrackingParams":"CIQBEPn3ASITCJuG1L3F4JEDFdyF6QUdtPw4xMoBBOxNbzI=","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026adclksrc=%5BCLICK_SOURCE%5D\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026adclksrc=%5BCLICK_SOURCE%5D\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D","target":"TARGET_NEW_WINDOW"}},"csiParameters":[{"key":"ad_at","value":"15_2_1"}],"playerVars":"suppress_creator_endscreen=1\u0026is_trueview_action=1\u0026length_seconds=20\u0026video_id=PuZeeWRqSYI\u0026encoded_ad_playback_context=CA8QAhgBKgtfRkhxT0hKZWZJOEIXVFVWUmFmdm1ETUtPdnIwUHg1ekUyUUVYAGABdfnfdj-AAaCcAYoDJyAQMAE4FkoTCLvB1b3F4JEDFUKHrwEdRw4xG1IGEAFIAVgBaAFwLJADtseJ-5EU\u0026ad_query_id=TUVRafvmDMKOvr0Px5zE2QE\u0026break_type=1\u0026adformat=15_2_1\u0026player_response=%7B%22responseContext%22%3A%7B%22serviceTrackingParams%22%3A%5B%7B%22service%22%3A%22GFEEDBACK%22%2C%22params%22%3A%5B%7B%22key%22%3A%22is_alc_surface%22%2C%22value%22%3A%22false%22%7D%2C%7B%22key%22%3A%22ipcc%22%2C%22value%22%3A%220%22%7D%2C%7B%22key%22%3A%22is_viewed_live%22%2C%22value%22%3A%22False%22%7D%2C%7B%22key%22%3A%22wh_paused%22%2C%22value%22%3A%220%22%7D%2C%7B%22key%22%3A%22logged_in%22%2C%22value%22%3A%221%22%7D%5D%7D%2C%7B%22service%22%3A%22CSI%22%2C%22params%22%3A%5B%7B%22key%22%3A%22c%22%2C%22value%22%3A%22WEB%22%7D%2C%7B%22key%22%3A%22cver%22%2C%22value%22%3A%222.20251222.04.00%22%7D%2C%7B%22key%22%3A%22yt_li%22%2C%22value%22%3A%221%22%7D%2C%7B%22key%22%3A%22GetPlayer_rid%22%2C%22value%22%3A%220xa20b027020d27683%22%7D%5D%7D%2C%7B%22service%22%3A%22GUIDED_HELP%22%2C%22params%22%3A%5B%7B%22key%22%3A%22logged_in%22%2C%22value%22%3A%221%22%7D%5D%7D%2C%7B%22service%22%3A%22ECATCHER%22%2C%22params%22%3A%5B%7B%22key%22%3A%22client.version%22%2C%22value%22%3A%222.20251222%22%7D%2C%7B%22key%22%3A%22client.name%22%2C%22value%22%3A%22WEB%22%7D%5D%7D%5D%2C%22maxAgeSeconds%22%3A21540%2C%22mainAppWebResponseContext%22%3A%7B%22datasyncId%22%3A%22115922182847223597940%7C%7C%22%2C%22loggedOut%22%3Afalse%2C%22trackingParam%22%3A%22kx_fmPxhoPZRDPbqIWHdzCFScR57byjt_qgcU_myHL4YAazRgkuMsNLBwOcCE59TDtslLKPQ-SS%22%7D%2C%22webResponseContextExtensionData%22%3A%7B%22webResponseContextPreloadData%22%3A%7B%22preloadMessageNames%22%3A%5B%22miniplayerRenderer%22%2C%22offlineabilityRenderer%22%2C%22playerCaptionsTracklistRenderer%22%2C%22playerMicroformatRenderer%22%2C%22cardCollectionRenderer%22%2C%22cardRenderer%22%2C%22simpleCardTeaserRenderer%22%2C%22infoCardIconRenderer%22%5D%7D%2C%22hasDecorated%22%3Atrue%7D%7D%2C%22playabilityStatus%22%3A%7B%22status%22%3A%22OK%22%2C%22playableInEmbed%22%3Atrue%2C%22offlineability%22%3A%7B%22offlineabilityRenderer%22%3A%7B%22offlineable%22%3Atrue%2C%22formats%22%3A%5B%7B%22name%22%3A%7B%22runs%22%3A%5B%7B%22text%22%3A%22Full+HD+%281080p%29%22%7D%5D%7D%2C%22formatType%22%3A%22HD_1080%22%2C%22availabilityType%22%3A%22OFFLINEABILITY_AVAILABILITY_TYPE_PREMIUM_LOCKED%22%2C%22savedSettingShouldExpire%22%3Afalse%7D%2C%7B%22name%22%3A%7B%22runs%22%3A%5B%7B%22text%22%3A%22High+%28720p%29%22%7D%5D%7D%2C%22formatType%22%3A%22HD%22%2C%22availabilityType%22%3A%22OFFLINEABILITY_AVAILABILITY_TYPE_PREMIUM_LOCKED%22%2C%22savedSettingShouldExpire%22%3Afalse%7D%2C%7B%22name%22%3A%7B%22runs%22%3A%5B%7B%22text%22%3A%22Medium+%28360p%29%22%7D%5D%7D%2C%22formatType%22%3A%22SD%22%2C%22availabilityType%22%3A%22OFFLINEABILITY_AVAILABILITY_TYPE_FREE%22%2C%22savedSettingShouldExpire%22%3Atrue%7D%2C%7B%22name%22%3A%7B%22runs%22%3A%5B%7B%22text%22%3A%22Low+%28144p%29%22%7D%5D%7D%2C%22formatType%22%3A%22LD%22%2C%22availabilityType%22%3A%22OFFLINEABILITY_AVAILABILITY_TYPE_FREE%22%2C%22savedSettingShouldExpire%22%3Atrue%7D%5D%2C%22clickTrackingParams%22%3A%22CAgQxzciEwiZyum9xeCRAxXchekFHbT8OMQyC29mZmxpbmVsaXN0ygEE7E1vMg%3D%3D%22%7D%7D%2C%22miniplayer%22%3A%7B%22miniplayerRenderer%22%3A%7B%22playbackMode%22%3A%22PLAYBACK_MODE_ALLOW%22%7D%7D%2C%22contextParams%22%3A%22Q0FFU0FnZ0M%3D%22%2C%22paygatedQualitiesMetadata%22%3A%7B%22qualityDetails%22%3A%5B%7B%22key%22%3A%221080p+Premium%22%2C%22value%22%3A%7B%22paygatedIndicatorText%22%3A%22Enhanced+bitrate%22%2C%22endpoint%22%3A%7B%22clickTrackingParams%22%3A%22CAcQ%2BPMJIhMImcrpvcXgkQMV3IXpBR20%2FDjEygEE7E1vMg%3D%3D%22%2C%22commandMetadata%22%3A%7B%22interactionLoggingCommandMetadata%22%3A%7B%22screenVisualElement%22%3A%7B%22uiType%22%3A214295%7D%7D%7D%2C%22showDialogCommand%22%3A%7B%22panelLoadingStrategy%22%3A%7B%22requestTemplate%22%3A%7B%22panelId%22%3A%22PApremium_upsell%22%2C%22params%22%3A%22igkCCAI%253D%22%7D%2C%22screenVe%22%3A214295%7D%7D%7D%2C%22trackingParams%22%3A%22CAcQ%2BPMJIhMImcrpvcXgkQMV3IXpBR20%2FDjE%22%7D%7D%5D%2C%22restrictedAdaptiveFormats%22%3A%5B%7B%22itag%22%3A356%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A1790699%2C%22width%22%3A1920%2C%22height%22%3A1080%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A219%7D%2C%22indexRange%22%3A%7B%22start%22%3A220%2C%22end%22%3A269%7D%2C%22lastModified%22%3A1749588751496824%2C%22contentLength%22%3A4302703%2C%22quality%22%3A%22hd1080%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%221080p+Premium%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A1700673%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_1080P_ENHANCED%22%7D%5D%7D%7D%2C%22streamingData%22%3A%7B%22expiresInSeconds%22%3A21540%2C%22formats%22%3A%5B%7B%22itag%22%3A18%2C%22url%22%3A%22https%3A%2F%2Frr1---sn-1p2oxucq-q5jz.googlevideo.com%2Fvideoplayback%3Fexpire%3D1766955437%5Cu0026ei%3DTUVRadnvINyLpt8PtPnjoQw%5Cu0026ip%3D137.59.180.209%5Cu0026id%3Do-AOiyb43csLIZPUF71uPpJPCwyLvOdFWvUv0Ock7kDu9A%5Cu0026itag%3D18%5Cu0026source%3Dyoutube%5Cu0026requiressl%3Dyes%5Cu0026xpc%3DEgVo2aDSNQ%253D%253D%5Cu0026cps%3D3%5Cu0026met%3D1766933837%252C%5Cu0026mh%3DOy%5Cu0026mm%3D31%252C29%5Cu0026mn%3Dsn-1p2oxucq-q5jz%252Csn-h557sn6s%5Cu0026ms%3Dau%252Crdu%5Cu0026mv%3Dm%5Cu0026mvi%3D1%5Cu0026pl%3D24%5Cu0026rms%3Dau%252Cau%5Cu0026ctier%3DL%5Cu0026initcwndbps%3D723750%5Cu0026siu%3D1%5Cu0026bui%3DAYUSA3CcczzdpIKwnAYR0TD3AV1Y2z0Vnc_-yy24M2bol7CIki1-2JBwfkuRzjnUmWYOrDz9Rg%5Cu0026spc%3DwH4Qq98gmi_9-qyJ90mvtxcwRg6RxtlqHzfG4MS0LEHkarhSib7KVR2o2Q%5Cu0026vprv%3D1%5Cu0026svpuc%3D1%5Cu0026mime%3Dvideo%252Fmp4%5Cu0026ns%3DmSJoWBDl1GrXx4IEiJdYoy4R%5Cu0026rqh%3D1%5Cu0026gir%3Dyes%5Cu0026clen%3D1499076%5Cu0026ratebypass%3Dyes%5Cu0026dur%3D20.288%5Cu0026lmt%3D1749585965612006%5Cu0026mt%3D1766933352%5Cu0026fvip%3D5%5Cu0026fexp%3D51355912%252C51552689%252C51565115%252C51565682%252C51580968%5Cu0026c%3DWEB%5Cu0026sefc%3D1%5Cu0026txp%3D5430534%5Cu0026n%3DFkCpMeEHNWgXIkMjrq%5Cu0026sparams%3Dexpire%252Cei%252Cip%252Cid%252Citag%252Csource%252Crequiressl%252Cxpc%252Cctier%252Csiu%252Cbui%252Cspc%252Cvprv%252Csvpuc%252Cmime%252Cns%252Crqh%252Cgir%252Cclen%252Cratebypass%252Cdur%252Clmt%5Cu0026sig%3DAJfQdSswRQIgGbHg6TowDcsgcIwvFKhQiBe7FeCmIXglmtU17Y4ayugCIQCwVx-FoxqvWlljUYdRrmKRmVlK9VpkyEFLh17N4M30AQ%253D%253D%5Cu0026lsparams%3Dcps%252Cmet%252Cmh%252Cmm%252Cmn%252Cms%252Cmv%252Cmvi%252Cpl%252Crms%252Cinitcwndbps%5Cu0026lsig%3DAPaTxxMwRAIgR7ffbLZAVaAJVmlWNEpn5aiUOgEdmkgT-AlCOk7zm94CIFLN0ZMi1BHYbdF9STYAKnZwol1ZNLJkVsfKIqNzDrGt%22%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22avc1.42001E%2C+mp4a.40.2%5C%22%22%2C%22bitrate%22%3A592520%2C%22width%22%3A640%2C%22height%22%3A360%2C%22lastModified%22%3A1749585965612006%2C%22contentLength%22%3A1499076%2C%22quality%22%3A%22medium%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22360p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A591118%2C%22audioQuality%22%3A%22AUDIO_QUALITY_LOW%22%2C%22approxDurationMs%22%3A20288%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_360P%22%7D%5D%2C%22adaptiveFormats%22%3A%5B%7B%22itag%22%3A137%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22avc1.640028%5C%22%22%2C%22bitrate%22%3A2027861%2C%22width%22%3A1920%2C%22height%22%3A1080%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A741%7D%2C%22indexRange%22%3A%7B%22start%22%3A742%2C%22end%22%3A809%7D%2C%22lastModified%22%3A1749585932732097%2C%22contentLength%22%3A4820587%2C%22quality%22%3A%22hd1080%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%221080p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A1905370%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_1080P%22%7D%2C%7B%22itag%22%3A248%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A988926%2C%22width%22%3A1920%2C%22height%22%3A1080%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A219%7D%2C%22indexRange%22%3A%7B%22start%22%3A220%2C%22end%22%3A269%7D%2C%22lastModified%22%3A1749587372725918%2C%22contentLength%22%3A2380323%2C%22quality%22%3A%22hd1080%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%221080p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A940839%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_1080P%22%7D%2C%7B%22itag%22%3A399%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22av01.0.08M.08%5C%22%22%2C%22bitrate%22%3A778440%2C%22width%22%3A1920%2C%22height%22%3A1080%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A699%7D%2C%22indexRange%22%3A%7B%22start%22%3A700%2C%22end%22%3A767%7D%2C%22lastModified%22%3A1749586131455591%2C%22contentLength%22%3A1754898%2C%22quality%22%3A%22hd1080%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%221080p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A693635%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_1080P%22%7D%2C%7B%22itag%22%3A136%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22avc1.4d401f%5C%22%22%2C%22bitrate%22%3A890334%2C%22width%22%3A1280%2C%22height%22%3A720%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A739%7D%2C%22indexRange%22%3A%7B%22start%22%3A740%2C%22end%22%3A807%7D%2C%22lastModified%22%3A1749586631016323%2C%22contentLength%22%3A1943878%2C%22quality%22%3A%22hd720%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22720p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A768331%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_720P%22%7D%2C%7B%22itag%22%3A247%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A824802%2C%22width%22%3A1280%2C%22height%22%3A720%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A218%7D%2C%22indexRange%22%3A%7B%22start%22%3A219%2C%22end%22%3A268%7D%2C%22lastModified%22%3A1749586428298894%2C%22contentLength%22%3A1935851%2C%22quality%22%3A%22hd720%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22720p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A765158%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_720P%22%7D%2C%7B%22itag%22%3A398%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22av01.0.05M.08%5C%22%22%2C%22bitrate%22%3A462869%2C%22width%22%3A1280%2C%22height%22%3A720%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A699%7D%2C%22indexRange%22%3A%7B%22start%22%3A700%2C%22end%22%3A767%7D%2C%22lastModified%22%3A1749586141979240%2C%22contentLength%22%3A1077821%2C%22quality%22%3A%22hd720%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22720p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A426016%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_720P%22%7D%2C%7B%22itag%22%3A779%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A294944%2C%22width%22%3A1080%2C%22height%22%3A608%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A218%7D%2C%22indexRange%22%3A%7B%22start%22%3A219%2C%22end%22%3A268%7D%2C%22lastModified%22%3A1749586003204054%2C%22contentLength%22%3A718099%2C%22quality%22%3A%22large%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22480p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A283833%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_608P_SAVER%22%7D%2C%7B%22itag%22%3A780%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A451604%2C%22width%22%3A1080%2C%22height%22%3A608%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A218%7D%2C%22indexRange%22%3A%7B%22start%22%3A219%2C%22end%22%3A268%7D%2C%22lastModified%22%3A1749586608989757%2C%22contentLength%22%3A1126401%2C%22quality%22%3A%22large%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22480p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A445217%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_608P%22%7D%2C%7B%22itag%22%3A788%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22av01.0.04M.08%5C%22%22%2C%22bitrate%22%3A252241%2C%22width%22%3A1080%2C%22height%22%3A608%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A699%7D%2C%22indexRange%22%3A%7B%22start%22%3A700%2C%22end%22%3A767%7D%2C%22lastModified%22%3A1749586158176065%2C%22contentLength%22%3A593104%2C%22quality%22%3A%22large%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22480p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A234428%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_608P%22%7D%2C%7B%22itag%22%3A135%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22avc1.4d401e%5C%22%22%2C%22bitrate%22%3A551298%2C%22width%22%3A854%2C%22height%22%3A480%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A740%7D%2C%22indexRange%22%3A%7B%22start%22%3A741%2C%22end%22%3A808%7D%2C%22lastModified%22%3A1749586603291482%2C%22contentLength%22%3A1283636%2C%22quality%22%3A%22large%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22480p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A507366%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_480P%22%7D%2C%7B%22itag%22%3A244%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A454057%2C%22width%22%3A854%2C%22height%22%3A480%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A218%7D%2C%22indexRange%22%3A%7B%22start%22%3A219%2C%22end%22%3A268%7D%2C%22lastModified%22%3A1749586413210342%2C%22contentLength%22%3A1063899%2C%22quality%22%3A%22large%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22480p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A420513%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_480P%22%7D%2C%7B%22itag%22%3A397%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22av01.0.04M.08%5C%22%22%2C%22bitrate%22%3A265478%2C%22width%22%3A854%2C%22height%22%3A480%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A699%7D%2C%22indexRange%22%3A%7B%22start%22%3A700%2C%22end%22%3A767%7D%2C%22lastModified%22%3A1749585990891930%2C%22contentLength%22%3A637428%2C%22quality%22%3A%22large%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22480p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A251947%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_480P%22%7D%2C%7B%22itag%22%3A134%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22avc1.4d401e%5C%22%22%2C%22bitrate%22%3A240923%2C%22width%22%3A640%2C%22height%22%3A360%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A740%7D%2C%22indexRange%22%3A%7B%22start%22%3A741%2C%22end%22%3A808%7D%2C%22lastModified%22%3A1749586629519777%2C%22contentLength%22%3A591486%2C%22quality%22%3A%22medium%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22360p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A233788%2C%22highReplication%22%3Atrue%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_360P%22%7D%2C%7B%22itag%22%3A243%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A132812%2C%22width%22%3A640%2C%22height%22%3A360%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A218%7D%2C%22indexRange%22%3A%7B%22start%22%3A219%2C%22end%22%3A268%7D%2C%22lastModified%22%3A1749586409347814%2C%22contentLength%22%3A310616%2C%22quality%22%3A%22medium%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22360p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A122773%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_360P_SAVER%22%7D%2C%7B%22itag%22%3A396%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22av01.0.01M.08%5C%22%22%2C%22bitrate%22%3A165617%2C%22width%22%3A640%2C%22height%22%3A360%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A699%7D%2C%22indexRange%22%3A%7B%22start%22%3A700%2C%22end%22%3A767%7D%2C%22lastModified%22%3A1749586012552629%2C%22contentLength%22%3A391471%2C%22quality%22%3A%22medium%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22360p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A154731%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_360P%22%7D%2C%7B%22itag%22%3A133%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22avc1.4d4015%5C%22%22%2C%22bitrate%22%3A108894%2C%22width%22%3A426%2C%22height%22%3A240%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A739%7D%2C%22indexRange%22%3A%7B%22start%22%3A740%2C%22end%22%3A807%7D%2C%22lastModified%22%3A1749586626935882%2C%22contentLength%22%3A226526%2C%22quality%22%3A%22small%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22240p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A89535%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_240P%22%7D%2C%7B%22itag%22%3A242%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A65066%2C%22width%22%3A426%2C%22height%22%3A240%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A217%7D%2C%22indexRange%22%3A%7B%22start%22%3A218%2C%22end%22%3A266%7D%2C%22lastModified%22%3A1749586469836152%2C%22contentLength%22%3A154823%2C%22quality%22%3A%22small%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22240p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A61194%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_240P_SAVER%22%7D%2C%7B%22itag%22%3A395%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22av01.0.00M.08%5C%22%22%2C%22bitrate%22%3A59859%2C%22width%22%3A426%2C%22height%22%3A240%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A699%7D%2C%22indexRange%22%3A%7B%22start%22%3A700%2C%22end%22%3A767%7D%2C%22lastModified%22%3A1749585934561687%2C%22contentLength%22%3A134084%2C%22quality%22%3A%22small%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22240p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A52997%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_240P%22%7D%2C%7B%22itag%22%3A160%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22avc1.4d400c%5C%22%22%2C%22bitrate%22%3A55801%2C%22width%22%3A256%2C%22height%22%3A144%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A738%7D%2C%22indexRange%22%3A%7B%22start%22%3A739%2C%22end%22%3A806%7D%2C%22lastModified%22%3A1749586635641505%2C%22contentLength%22%3A110786%2C%22quality%22%3A%22tiny%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22144p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A43788%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_144P%22%7D%2C%7B%22itag%22%3A278%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A85313%2C%22width%22%3A256%2C%22height%22%3A144%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A217%7D%2C%22indexRange%22%3A%7B%22start%22%3A218%2C%22end%22%3A266%7D%2C%22lastModified%22%3A1749586415628871%2C%22contentLength%22%3A199607%2C%22quality%22%3A%22tiny%22%2C%22fps%22%3A25%2C%22qualityLabel%22%3A%22144p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A78896%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A20240%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_144P%22%7D%2C%7B%22itag%22%3A140%2C%22mimeType%22%3A%22audio%2Fmp4%3B+codecs%3D%5C%22mp4a.40.2%5C%22%22%2C%22bitrate%22%3A130522%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A722%7D%2C%22indexRange%22%3A%7B%22start%22%3A723%2C%22end%22%3A790%7D%2C%22lastModified%22%3A1749585410236771%2C%22contentLength%22%3A329649%2C%22quality%22%3A%22tiny%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A129949%2C%22highReplication%22%3Atrue%2C%22audioQuality%22%3A%22AUDIO_QUALITY_MEDIUM%22%2C%22approxDurationMs%22%3A20294%2C%22audioSampleRate%22%3A44100%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A6.4200001%2C%22trackAbsoluteLoudnessLkfs%22%3A-12.58%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A140%2C%22mimeType%22%3A%22audio%2Fmp4%3B+codecs%3D%5C%22mp4a.40.2%5C%22%22%2C%22bitrate%22%3A130526%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A722%7D%2C%22indexRange%22%3A%7B%22start%22%3A723%2C%22end%22%3A790%7D%2C%22lastModified%22%3A1749585431109341%2C%22contentLength%22%3A329375%2C%22quality%22%3A%22tiny%22%2C%22xtags%22%3A%22CggKA2RyYxIBMQ%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A129841%2C%22highReplication%22%3Atrue%2C%22audioQuality%22%3A%22AUDIO_QUALITY_MEDIUM%22%2C%22approxDurationMs%22%3A20294%2C%22audioSampleRate%22%3A44100%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A3%2C%22isDrc%22%3Atrue%2C%22trackAbsoluteLoudnessLkfs%22%3A-16%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A249%2C%22mimeType%22%3A%22audio%2Fwebm%3B+codecs%3D%5C%22opus%5C%22%22%2C%22bitrate%22%3A66030%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A265%7D%2C%22indexRange%22%3A%7B%22start%22%3A266%2C%22end%22%3A316%7D%2C%22lastModified%22%3A1749585409477115%2C%22contentLength%22%3A163903%2C%22quality%22%3A%22tiny%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A64716%2C%22audioQuality%22%3A%22AUDIO_QUALITY_LOW%22%2C%22approxDurationMs%22%3A20261%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A6.4099998%2C%22trackAbsoluteLoudnessLkfs%22%3A-12.59%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A249%2C%22mimeType%22%3A%22audio%2Fwebm%3B+codecs%3D%5C%22opus%5C%22%22%2C%22bitrate%22%3A65775%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A265%7D%2C%22indexRange%22%3A%7B%22start%22%3A266%2C%22end%22%3A316%7D%2C%22lastModified%22%3A1749585427450522%2C%22contentLength%22%3A164570%2C%22quality%22%3A%22tiny%22%2C%22xtags%22%3A%22CggKA2RyYxIBMQ%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A64980%2C%22audioQuality%22%3A%22AUDIO_QUALITY_LOW%22%2C%22approxDurationMs%22%3A20261%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A2.9899998%2C%22isDrc%22%3Atrue%2C%22trackAbsoluteLoudnessLkfs%22%3A-16.01%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A250%2C%22mimeType%22%3A%22audio%2Fwebm%3B+codecs%3D%5C%22opus%5C%22%22%2C%22bitrate%22%3A84864%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A265%7D%2C%22indexRange%22%3A%7B%22start%22%3A266%2C%22end%22%3A316%7D%2C%22lastModified%22%3A1749585416497185%2C%22contentLength%22%3A212483%2C%22quality%22%3A%22tiny%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A83898%2C%22audioQuality%22%3A%22AUDIO_QUALITY_LOW%22%2C%22approxDurationMs%22%3A20261%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A6.4099998%2C%22trackAbsoluteLoudnessLkfs%22%3A-12.59%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A250%2C%22mimeType%22%3A%22audio%2Fwebm%3B+codecs%3D%5C%22opus%5C%22%22%2C%22bitrate%22%3A84497%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A265%7D%2C%22indexRange%22%3A%7B%22start%22%3A266%2C%22end%22%3A316%7D%2C%22lastModified%22%3A1749585427835677%2C%22contentLength%22%3A212696%2C%22quality%22%3A%22tiny%22%2C%22xtags%22%3A%22CggKA2RyYxIBMQ%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A83982%2C%22audioQuality%22%3A%22AUDIO_QUALITY_LOW%22%2C%22approxDurationMs%22%3A20261%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A2.9899998%2C%22isDrc%22%3Atrue%2C%22trackAbsoluteLoudnessLkfs%22%3A-16.01%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A251%2C%22mimeType%22%3A%22audio%2Fwebm%3B+codecs%3D%5C%22opus%5C%22%22%2C%22bitrate%22%3A170615%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A265%7D%2C%22indexRange%22%3A%7B%22start%22%3A266%2C%22end%22%3A316%7D%2C%22lastModified%22%3A1749585410218495%2C%22contentLength%22%3A402127%2C%22quality%22%3A%22tiny%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A158778%2C%22audioQuality%22%3A%22AUDIO_QUALITY_MEDIUM%22%2C%22approxDurationMs%22%3A20261%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A6.4099998%2C%22trackAbsoluteLoudnessLkfs%22%3A-12.59%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A251%2C%22mimeType%22%3A%22audio%2Fwebm%3B+codecs%3D%5C%22opus%5C%22%22%2C%22bitrate%22%3A167569%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A265%7D%2C%22indexRange%22%3A%7B%22start%22%3A266%2C%22end%22%3A316%7D%2C%22lastModified%22%3A1749585429028388%2C%22contentLength%22%3A402652%2C%22quality%22%3A%22tiny%22%2C%22xtags%22%3A%22CggKA2RyYxIBMQ%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A158986%2C%22audioQuality%22%3A%22AUDIO_QUALITY_MEDIUM%22%2C%22approxDurationMs%22%3A20261%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A2.9899998%2C%22isDrc%22%3Atrue%2C%22trackAbsoluteLoudnessLkfs%22%3A-16.01%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%5D%2C%22serverAbrStreamingUrl%22%3A%22https%3A%2F%2Frr1---sn-1p2oxucq-q5jz.googlevideo.com%2Fvideoplayback%3Fexpire%3D1766955437%5Cu0026ei%3DTUVRadnvINyLpt8PtPnjoQw%5Cu0026ip%3D137.59.180.209%5Cu0026id%3Do-AOiyb43csLIZPUF71uPpJPCwyLvOdFWvUv0Ock7kDu9A%5Cu0026source%3Dyoutube%5Cu0026requiressl%3Dyes%5Cu0026xpc%3DEgVo2aDSNQ%253D%253D%5Cu0026cps%3D3%5Cu0026met%3D1766933837%252C%5Cu0026mh%3DOy%5Cu0026mm%3D31%252C29%5Cu0026mn%3Dsn-1p2oxucq-q5jz%252Csn-h557sn6s%5Cu0026ms%3Dau%252Crdu%5Cu0026mv%3Dm%5Cu0026mvi%3D1%5Cu0026pl%3D24%5Cu0026rms%3Dau%252Cau%5Cu0026ctier%3DL%5Cu0026initcwndbps%3D723750%5Cu0026siu%3D1%5Cu0026spc%3DwH4Qq98jmi_9-qyJ90mvtxcwRg6RxtlqHzfG4MS0LEHkarhoj8zJLR0%5Cu0026svpuc%3D1%5Cu0026ns%3DcpWQ8v0qbTUunudMd8Jz99oR%5Cu0026sabr%3D1%5Cu0026rqh%3D1%5Cu0026mt%3D1766933352%5Cu0026fvip%3D5%5Cu0026keepalive%3Dyes%5Cu0026fexp%3D51355912%252C51552689%252C51565115%252C51565682%252C51580968%5Cu0026c%3DWEB%5Cu0026n%3Df_ZNLh5Wo-PfyGSQpe%5Cu0026sparams%3Dexpire%252Cei%252Cip%252Cid%252Csource%252Crequiressl%252Cxpc%252Cctier%252Csiu%252Cspc%252Csvpuc%252Cns%252Csabr%252Crqh%5Cu0026sig%3DAJfQdSswRQIgXM0N5QWbpN5-XHA36QLuntyJu-_0PrILvpsZLElP_q8CIQCS8XBmtPuWIVvQjAJovl_vx1tXoKHZ0S_rNZH1gw_ysg%253D%253D%5Cu0026lsparams%3Dcps%252Cmet%252Cmh%252Cmm%252Cmn%252Cms%252Cmv%252Cmvi%252Cpl%252Crms%252Cinitcwndbps%5Cu0026lsig%3DAPaTxxMwRAIgR7ffbLZAVaAJVmlWNEpn5aiUOgEdmkgT-AlCOk7zm94CIFLN0ZMi1BHYbdF9STYAKnZwol1ZNLJkVsfKIqNzDrGt%22%7D%2C%22playbackTracking%22%3A%7B%22videostatsPlaybackUrl%22%3A%7B%22baseUrl%22%3A%22https%3A%2F%2Fs.youtube.com%2Fapi%2Fstats%2Fplayback%3Fcl%3D847500619%5Cu0026docid%3DPuZeeWRqSYI%5Cu0026ei%3DTUVRadnvINyLpt8PtPnjoQw%5Cu0026fexp%3D%5Cu0026ns%3Dyt%5Cu0026plid%3DAAZHBFe6ocU9OqVp%5Cu0026sdetail%3Df%253Ayoutu.be%252C%5Cu0026adcontext%3DCAESEwi7wdW9xeCRAxVCh68BHUcOMRsgASgWMAE%5Cu0026adformat%3D15_2_1%5Cu0026aqi%3DTUVRafvmDMKOvr0Px5zE2QE%5Cu0026autoplay%3D1%5Cu0026delay%3D18%5Cu0026el%3Ddetailpage%5Cu0026host_cpn%3D%5Cu0026len%3D21%5Cu0026of%3D1NAQ7FoKWbgcIJ4XpQv7vA%5Cu0026uga%3Dm20%5Cu0026vm%3DCAEQABgEOjJBSHFpSlRKamZQX3E4a1h0MzNXMlNWdkl1Tlp3UERFTUN2bjJ1YUVCdUtITEl3eE5lQWJbQUJFVEpNbUN3OE4tZUE1clZLVzVtQ0tEU1lLYkdxcUVoTl92dW0wcmxYT2czTnk0a3JPcGpXLXZRNG9FUzBneWpqZnFmRzlTZDFscTl6Y0Y4RGNPbDVfeHh1NA%22%7D%2C%22videostatsDelayplayUrl%22%3A%7B%22baseUrl%22%3A%22https%3A%2F%2Fs.youtube.com%2Fapi%2Fstats%2Fdelayplay%3Fcl%3D847500619%5Cu0026docid%3DPuZeeWRqSYI%5Cu0026ei%3DTUVRadnvINyLpt8PtPnjoQw%5Cu0026fexp%3D%5Cu0026ns%3Dyt%5Cu0026plid%3DAAZHBFe6ocU9OqVp%5Cu0026sdetail%3Df%253Ayoutu.be%252C%5Cu0026adformat%3D15_2_1%5Cu0026aqi%3DTUVRafvmDMKOvr0Px5zE2QE%5Cu0026autoplay%3D1%5Cu0026delay%3D18%5Cu0026el%3Ddetailpage%5Cu0026host_cpn%3D%5Cu0026is_ad%3D1%5Cu0026len%3D21%5Cu0026of%3D1NAQ7FoKWbgcIJ4XpQv7vA%5Cu0026uga%3Dm20%5Cu0026vm%3DCAEQABgEOjJBSHFpSlRKamZQX3E4a1h0MzNXMlNWdkl1Tlp3UERFTUN2bjJ1YUVCdUtITEl3eE5lQWJbQUJFVEpNbUN3OE4tZUE1clZLVzVtQ0tEU1lLYkdxcUVoTl92dW0wcmxYT2czTnk0a3JPcGpXLXZRNG9FUzBneWpqZnFmRzlTZDFscTl6Y0Y4RGNPbDVfeHh1NA%22%2C%22elapsedMediaTimeSeconds%22%3A18%7D%2C%22videostatsWatchtimeUrl%22%3A%7B%22baseUrl%22%3A%22https%3A%2F%2Fs.youtube.com%2Fapi%2Fstats%2Fwatchtime%3Fcl%3D847500619%5Cu0026docid%3DPuZeeWRqSYI%5Cu0026ei%3DTUVRadnvINyLpt8PtPnjoQw%5Cu0026fexp%3D%5Cu0026ns%3Dyt%5Cu0026plid%3DAAZHBFe6ocU9OqVp%5Cu0026sdetail%3Df%253Ayoutu.be%252C%5Cu0026adformat%3D15_2_1%5Cu0026aqi%3DTUVRafvmDMKOvr0Px5zE2QE%5Cu0026autoplay%3D1%5Cu0026el%3Ddetailpage%5Cu0026host_cpn%3D%5Cu0026is_ad%3D1%5Cu0026len%3D21%5Cu0026of%3D1NAQ7FoKWbgcIJ4XpQv7vA%5Cu0026uga%3Dm20%5Cu0026vm%3DCAEQABgEOjJBSHFpSlRKamZQX3E4a1h0MzNXMlNWdkl1Tlp3UERFTUN2bjJ1YUVCdUtITEl3eE5lQWJbQUJFVEpNbUN3OE4tZUE1clZLVzVtQ0tEU1lLYkdxcUVoTl92dW0wcmxYT2czTnk0a3JPcGpXLXZRNG9FUzBneWpqZnFmRzlTZDFscTl6Y0Y4RGNPbDVfeHh1NA%22%7D%2C%22ptrackingUrl%22%3A%7B%22baseUrl%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fptracking%3Fcontent_v%3D_FHqOHJefI8%5Cu0026ei%3DTUVRadnvINyLpt8PtPnjoQw%5Cu0026plid%3DAAZHBFe6ocU9OqVp%5Cu0026pltype%3Dadhost%5Cu0026ptchn%3Dyoutube_host%5Cu0026ptk%3Dyoutube_host%5Cu0026video_id%3DPuZeeWRqSYI%22%7D%2C%22qoeUrl%22%3A%7B%22baseUrl%22%3A%22https%3A%2F%2Fs.youtube.com%2Fapi%2Fstats%2Fqoe%3Fadcontext%3DCAESEwi7wdW9xeCRAxVCh68BHUcOMRsgASgWMAE%5Cu0026adformat%3D15_2_1%5Cu0026cl%3D847500619%5Cu0026docid%3DPuZeeWRqSYI%5Cu0026ei%3DTUVRadnvINyLpt8PtPnjoQw%5Cu0026el%3Ddetailpage%5Cu0026event%3Dstreamingstats%5Cu0026fexp%3D%5Cu0026ns%3Dyt%5Cu0026plid%3DAAZHBFe6ocU9OqVp%5Cu0026sdetail%3Df%253Ayoutu.be%252C%22%7D%2C%22atrUrl%22%3A%7B%22baseUrl%22%3A%22https%3A%2F%2Fs.youtube.com%2Fapi%2Fstats%2Fatr%3Fc%3DWEB%5Cu0026docid%3DPuZeeWRqSYI%5Cu0026ei%3DTUVRadnvINyLpt8PtPnjoQw%5Cu0026is_ad%3D1%5Cu0026len%3D21%5Cu0026ns%3Dyt%5Cu0026plid%3DAAZHBFe6ocU9OqVp%5Cu0026ver%3D2%5Cu0026vm%3DCAEQABgEOjJBSHFpSlRKamZQX3E4a1h0MzNXMlNWdkl1Tlp3UERFTUN2bjJ1YUVCdUtITEl3eE5lQWJbQUJFVEpNbUN3OE4tZUE1clZLVzVtQ0tEU1lLYkdxcUVoTl92dW0wcmxYT2czTnk0a3JPcGpXLXZRNG9FUzBneWpqZnFmRzlTZDFscTl6Y0Y4RGNPbDVfeHh1NA%22%2C%22elapsedMediaTimeSeconds%22%3A5%7D%2C%22videostatsScheduledFlushWalltimeSeconds%22%3A%5B10%2C20%2C30%5D%2C%22videostatsDefaultFlushIntervalSeconds%22%3A40%7D%2C%22captions%22%3A%7B%22playerCaptionsTracklistRenderer%22%3A%7B%22captionTracks%22%3A%5B%7B%22baseUrl%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fapi%2Ftimedtext%3Fv%3DPuZeeWRqSYI%5Cu0026ei%3DTUVRadnvINyLpt8PtPnjoQw%5Cu0026caps%3Dasr%5Cu0026opi%3D112496729%5Cu0026exp%3Dxpe%5Cu0026xoaf%3D5%5Cu0026xowf%3D1%5Cu0026hl%3Den%5Cu0026ip%3D0.0.0.0%5Cu0026ipbits%3D0%5Cu0026expire%3D1766959037%5Cu0026sparams%3Dip%2Cipbits%2Cexpire%2Cv%2Cei%2Ccaps%2Copi%2Cexp%2Cxoaf%5Cu0026signature%3D420778A70F1B6F3D1E583F3115F7FD12ECF2C7BA.856B1AF7F5A950A0126B1A792713CE7C0476B134%5Cu0026key%3Dyt8%5Cu0026kind%3Dasr%5Cu0026lang%3Den%22%2C%22name%22%3A%7B%22simpleText%22%3A%22English+%28auto-generated%29%22%7D%2C%22vssId%22%3A%22a.en%22%2C%22languageCode%22%3A%22en%22%2C%22kind%22%3A%22asr%22%2C%22isTranslatable%22%3Atrue%2C%22trackName%22%3A%22%22%7D%5D%2C%22audioTracks%22%3A%5B%7B%22captionTrackIndices%22%3A%5B0%5D%7D%5D%2C%22translationLanguages%22%3A%5B%7B%22languageCode%22%3A%22ab%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Abkhazian%22%7D%7D%2C%7B%22languageCode%22%3A%22aa%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Afar%22%7D%7D%2C%7B%22languageCode%22%3A%22af%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Afrikaans%22%7D%7D%2C%7B%22languageCode%22%3A%22ak%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Akan%22%7D%7D%2C%7B%22languageCode%22%3A%22sq%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Albanian%22%7D%7D%2C%7B%22languageCode%22%3A%22am%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Amharic%22%7D%7D%2C%7B%22languageCode%22%3A%22ar%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Arabic%22%7D%7D%2C%7B%22languageCode%22%3A%22hy%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Armenian%22%7D%7D%2C%7B%22languageCode%22%3A%22as%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Assamese%22%7D%7D%2C%7B%22languageCode%22%3A%22ay%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Aymara%22%7D%7D%2C%7B%22languageCode%22%3A%22az%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Azerbaijani%22%7D%7D%2C%7B%22languageCode%22%3A%22bn%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Bangla%22%7D%7D%2C%7B%22languageCode%22%3A%22ba%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Bashkir%22%7D%7D%2C%7B%22languageCode%22%3A%22eu%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Basque%22%7D%7D%2C%7B%22languageCode%22%3A%22be%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Belarusian%22%7D%7D%2C%7B%22languageCode%22%3A%22bho%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Bhojpuri%22%7D%7D%2C%7B%22languageCode%22%3A%22bs%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Bosnian%22%7D%7D%2C%7B%22languageCode%22%3A%22br%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Breton%22%7D%7D%2C%7B%22languageCode%22%3A%22bg%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Bulgarian%22%7D%7D%2C%7B%22languageCode%22%3A%22my%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Burmese%22%7D%7D%2C%7B%22languageCode%22%3A%22ca%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Catalan%22%7D%7D%2C%7B%22languageCode%22%3A%22ceb%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Cebuano%22%7D%7D%2C%7B%22languageCode%22%3A%22zh-Hans%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Chinese+%28Simplified%29%22%7D%7D%2C%7B%22languageCode%22%3A%22zh-Hant%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Chinese+%28Traditional%29%22%7D%7D%2C%7B%22languageCode%22%3A%22co%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Corsican%22%7D%7D%2C%7B%22languageCode%22%3A%22hr%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Croatian%22%7D%7D%2C%7B%22languageCode%22%3A%22cs%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Czech%22%7D%7D%2C%7B%22languageCode%22%3A%22da%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Danish%22%7D%7D%2C%7B%22languageCode%22%3A%22dv%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Divehi%22%7D%7D%2C%7B%22languageCode%22%3A%22nl%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Dutch%22%7D%7D%2C%7B%22languageCode%22%3A%22dz%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Dzongkha%22%7D%7D%2C%7B%22languageCode%22%3A%22en%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22English%22%7D%7D%2C%7B%22languageCode%22%3A%22eo%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Esperanto%22%7D%7D%2C%7B%22languageCode%22%3A%22et%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Estonian%22%7D%7D%2C%7B%22languageCode%22%3A%22ee%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Ewe%22%7D%7D%2C%7B%22languageCode%22%3A%22fo%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Faroese%22%7D%7D%2C%7B%22languageCode%22%3A%22fj%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Fijian%22%7D%7D%2C%7B%22languageCode%22%3A%22fil%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Filipino%22%7D%7D%2C%7B%22languageCode%22%3A%22fi%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Finnish%22%7D%7D%2C%7B%22languageCode%22%3A%22fr%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22French%22%7D%7D%2C%7B%22languageCode%22%3A%22gaa%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Ga%22%7D%7D%2C%7B%22languageCode%22%3A%22gl%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Galician%22%7D%7D%2C%7B%22languageCode%22%3A%22lg%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Ganda%22%7D%7D%2C%7B%22languageCode%22%3A%22ka%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Georgian%22%7D%7D%2C%7B%22languageCode%22%3A%22de%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22German%22%7D%7D%2C%7B%22languageCode%22%3A%22el%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Greek%22%7D%7D%2C%7B%22languageCode%22%3A%22gn%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Guarani%22%7D%7D%2C%7B%22languageCode%22%3A%22gu%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Gujarati%22%7D%7D%2C%7B%22languageCode%22%3A%22ht%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Haitian+Creole%22%7D%7D%2C%7B%22languageCode%22%3A%22ha%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Hausa%22%7D%7D%2C%7B%22languageCode%22%3A%22haw%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Hawaiian%22%7D%7D%2C%7B%22languageCode%22%3A%22iw%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Hebrew%22%7D%7D%2C%7B%22languageCode%22%3A%22hi%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Hindi%22%7D%7D%2C%7B%22languageCode%22%3A%22hmn%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Hmong%22%7D%7D%2C%7B%22languageCode%22%3A%22hu%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Hungarian%22%7D%7D%2C%7B%22languageCode%22%3A%22is%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Icelandic%22%7D%7D%2C%7B%22languageCode%22%3A%22ig%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Igbo%22%7D%7D%2C%7B%22languageCode%22%3A%22id%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Indonesian%22%7D%7D%2C%7B%22languageCode%22%3A%22iu%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Inuktitut%22%7D%7D%2C%7B%22languageCode%22%3A%22ga%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Irish%22%7D%7D%2C%7B%22languageCode%22%3A%22it%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Italian%22%7D%7D%2C%7B%22languageCode%22%3A%22ja%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Japanese%22%7D%7D%2C%7B%22languageCode%22%3A%22jv%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Javanese%22%7D%7D%2C%7B%22languageCode%22%3A%22kl%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Kalaallisut%22%7D%7D%2C%7B%22languageCode%22%3A%22kn%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Kannada%22%7D%7D%2C%7B%22languageCode%22%3A%22kk%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Kazakh%22%7D%7D%2C%7B%22languageCode%22%3A%22kha%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Khasi%22%7D%7D%2C%7B%22languageCode%22%3A%22km%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Khmer%22%7D%7D%2C%7B%22languageCode%22%3A%22rw%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Kinyarwanda%22%7D%7D%2C%7B%22languageCode%22%3A%22ko%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Korean%22%7D%7D%2C%7B%22languageCode%22%3A%22kri%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Krio%22%7D%7D%2C%7B%22languageCode%22%3A%22ku%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Kurdish%22%7D%7D%2C%7B%22languageCode%22%3A%22ky%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Kyrgyz%22%7D%7D%2C%7B%22languageCode%22%3A%22lo%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Lao%22%7D%7D%2C%7B%22languageCode%22%3A%22la%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Latin%22%7D%7D%2C%7B%22languageCode%22%3A%22lv%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Latvian%22%7D%7D%2C%7B%22languageCode%22%3A%22ln%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Lingala%22%7D%7D%2C%7B%22languageCode%22%3A%22lt%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Lithuanian%22%7D%7D%2C%7B%22languageCode%22%3A%22lua%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Luba-Lulua%22%7D%7D%2C%7B%22languageCode%22%3A%22luo%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Luo%22%7D%7D%2C%7B%22languageCode%22%3A%22lb%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Luxembourgish%22%7D%7D%2C%7B%22languageCode%22%3A%22mk%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Macedonian%22%7D%7D%2C%7B%22languageCode%22%3A%22mg%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Malagasy%22%7D%7D%2C%7B%22languageCode%22%3A%22ms%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Malay%22%7D%7D%2C%7B%22languageCode%22%3A%22ml%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Malayalam%22%7D%7D%2C%7B%22languageCode%22%3A%22mt%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Maltese%22%7D%7D%2C%7B%22languageCode%22%3A%22gv%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Manx%22%7D%7D%2C%7B%22languageCode%22%3A%22mi%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22M%C4%81ori%22%7D%7D%2C%7B%22languageCode%22%3A%22mr%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Marathi%22%7D%7D%2C%7B%22languageCode%22%3A%22mn%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Mongolian%22%7D%7D%2C%7B%22languageCode%22%3A%22mfe%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Morisyen%22%7D%7D%2C%7B%22languageCode%22%3A%22ne%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Nepali%22%7D%7D%2C%7B%22languageCode%22%3A%22new%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Newari%22%7D%7D%2C%7B%22languageCode%22%3A%22nso%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Northern+Sotho%22%7D%7D%2C%7B%22languageCode%22%3A%22no%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Norwegian%22%7D%7D%2C%7B%22languageCode%22%3A%22ny%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Nyanja%22%7D%7D%2C%7B%22languageCode%22%3A%22oc%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Occitan%22%7D%7D%2C%7B%22languageCode%22%3A%22or%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Odia%22%7D%7D%2C%7B%22languageCode%22%3A%22om%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Oromo%22%7D%7D%2C%7B%22languageCode%22%3A%22os%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Ossetic%22%7D%7D%2C%7B%22languageCode%22%3A%22pam%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Pampanga%22%7D%7D%2C%7B%22languageCode%22%3A%22ps%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Pashto%22%7D%7D%2C%7B%22languageCode%22%3A%22fa%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Persian%22%7D%7D%2C%7B%22languageCode%22%3A%22pl%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Polish%22%7D%7D%2C%7B%22languageCode%22%3A%22pt%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Portuguese%22%7D%7D%2C%7B%22languageCode%22%3A%22pt-PT%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Portuguese+%28Portugal%29%22%7D%7D%2C%7B%22languageCode%22%3A%22pa%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Punjabi%22%7D%7D%2C%7B%22languageCode%22%3A%22qu%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Quechua%22%7D%7D%2C%7B%22languageCode%22%3A%22ro%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Romanian%22%7D%7D%2C%7B%22languageCode%22%3A%22rn%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Rundi%22%7D%7D%2C%7B%22languageCode%22%3A%22ru%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Russian%22%7D%7D%2C%7B%22languageCode%22%3A%22sm%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Samoan%22%7D%7D%2C%7B%22languageCode%22%3A%22sg%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Sango%22%7D%7D%2C%7B%22languageCode%22%3A%22sa%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Sanskrit%22%7D%7D%2C%7B%22languageCode%22%3A%22gd%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Scottish+Gaelic%22%7D%7D%2C%7B%22languageCode%22%3A%22sr%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Serbian%22%7D%7D%2C%7B%22languageCode%22%3A%22crs%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Seselwa+Creole+French%22%7D%7D%2C%7B%22languageCode%22%3A%22sn%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Shona%22%7D%7D%2C%7B%22languageCode%22%3A%22sd%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Sindhi%22%7D%7D%2C%7B%22languageCode%22%3A%22si%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Sinhala%22%7D%7D%2C%7B%22languageCode%22%3A%22sk%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Slovak%22%7D%7D%2C%7B%22languageCode%22%3A%22sl%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Slovenian%22%7D%7D%2C%7B%22languageCode%22%3A%22so%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Somali%22%7D%7D%2C%7B%22languageCode%22%3A%22st%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Southern+Sotho%22%7D%7D%2C%7B%22languageCode%22%3A%22es%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Spanish%22%7D%7D%2C%7B%22languageCode%22%3A%22su%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Sundanese%22%7D%7D%2C%7B%22languageCode%22%3A%22sw%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Swahili%22%7D%7D%2C%7B%22languageCode%22%3A%22ss%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Swati%22%7D%7D%2C%7B%22languageCode%22%3A%22sv%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Swedish%22%7D%7D%2C%7B%22languageCode%22%3A%22tg%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tajik%22%7D%7D%2C%7B%22languageCode%22%3A%22ta%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tamil%22%7D%7D%2C%7B%22languageCode%22%3A%22tt%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tatar%22%7D%7D%2C%7B%22languageCode%22%3A%22te%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Telugu%22%7D%7D%2C%7B%22languageCode%22%3A%22th%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Thai%22%7D%7D%2C%7B%22languageCode%22%3A%22bo%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tibetan%22%7D%7D%2C%7B%22languageCode%22%3A%22ti%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tigrinya%22%7D%7D%2C%7B%22languageCode%22%3A%22to%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tongan%22%7D%7D%2C%7B%22languageCode%22%3A%22ts%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tsonga%22%7D%7D%2C%7B%22languageCode%22%3A%22tn%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tswana%22%7D%7D%2C%7B%22languageCode%22%3A%22tum%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tumbuka%22%7D%7D%2C%7B%22languageCode%22%3A%22tr%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Turkish%22%7D%7D%2C%7B%22languageCode%22%3A%22tk%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Turkmen%22%7D%7D%2C%7B%22languageCode%22%3A%22uk%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Ukrainian%22%7D%7D%2C%7B%22languageCode%22%3A%22ur%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Urdu%22%7D%7D%2C%7B%22languageCode%22%3A%22ug%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Uyghur%22%7D%7D%2C%7B%22languageCode%22%3A%22uz%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Uzbek%22%7D%7D%2C%7B%22languageCode%22%3A%22ve%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Venda%22%7D%7D%2C%7B%22languageCode%22%3A%22vi%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Vietnamese%22%7D%7D%2C%7B%22languageCode%22%3A%22war%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Waray%22%7D%7D%2C%7B%22languageCode%22%3A%22cy%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Welsh%22%7D%7D%2C%7B%22languageCode%22%3A%22fy%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Western+Frisian%22%7D%7D%2C%7B%22languageCode%22%3A%22wo%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Wolof%22%7D%7D%2C%7B%22languageCode%22%3A%22xh%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Xhosa%22%7D%7D%2C%7B%22languageCode%22%3A%22yi%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Yiddish%22%7D%7D%2C%7B%22languageCode%22%3A%22yo%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Yoruba%22%7D%7D%2C%7B%22languageCode%22%3A%22zu%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Zulu%22%7D%7D%5D%2C%22defaultAudioTrackIndex%22%3A0%7D%7D%2C%22videoDetails%22%3A%7B%22videoId%22%3A%22PuZeeWRqSYI%22%2C%22title%22%3A%22Contabo%3A+VPS+and+cloud+hosting+for+you%2C+whoever+you+are.%22%2C%22lengthSeconds%22%3A20%2C%22channelId%22%3A%22UCA8gvp8EAFnxrOUpFTqxn3Q%22%2C%22isOwnerViewing%22%3Afalse%2C%22shortDescription%22%3A%22Contabo+delivers+powerful+Cloud+VPS+and+Dedicated+Servers+at+unbeatable+prices.+With+21%2B+years+of+experience%2C+200%2C000%2B+customers+in+190+countries+trust+our+German+quality%2C+global+availability%2C+and+24%2F7+human+support.+Enjoy+high+performance%2C+no+setup+fees%2C+DDoS+protection%2C+and+transparent+pricing.%22%2C%22isCrawlable%22%3Afalse%2C%22thumbnail%22%3A%7B%22thumbnails%22%3A%5B%7B%22url%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FPuZeeWRqSYI%2Fhqdefault.jpg%3Fsqp%3D-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-DoACuAiKAgwIABABGC0gOyh_MA8%3D%5Cu0026rs%3DAOn4CLCCrk3ITePD0UKW1A8PwXIRWpq7zw%22%2C%22width%22%3A168%2C%22height%22%3A94%7D%2C%7B%22url%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FPuZeeWRqSYI%2Fhqdefault.jpg%3Fsqp%3D-oaymwE1CMQBEG5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-DoACuAiKAgwIABABGC0gOyh_MA8%3D%5Cu0026rs%3DAOn4CLAcuWVvzF_6EiFn7dqKoFtODEjmow%22%2C%22width%22%3A196%2C%22height%22%3A110%7D%2C%7B%22url%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FPuZeeWRqSYI%2Fhqdefault.jpg%3Fsqp%3D-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARgtIDsofzAP%5Cu0026rs%3DAOn4CLCcrQsnwltFcGm-Y-5-FKO-cqVAlw%22%2C%22width%22%3A246%2C%22height%22%3A138%7D%2C%7B%22url%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FPuZeeWRqSYI%2Fhqdefault.jpg%3Fsqp%3D-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARgtIDsofzAP%5Cu0026rs%3DAOn4CLAw2q4ocqtNIv-C8e0SV_e3DiToZA%22%2C%22width%22%3A336%2C%22height%22%3A188%7D%2C%7B%22url%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FPuZeeWRqSYI%2Fmaxresdefault.jpg%3Fsqp%3D-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGC0gOyh_MA8%3D%5Cu0026rs%3DAOn4CLARDOPkLAQ-U7MHmCEuAHqJIrqNDA%22%2C%22width%22%3A1920%2C%22height%22%3A1080%7D%5D%7D%2C%22allowRatings%22%3Atrue%2C%22viewCount%22%3A%222972943%22%2C%22author%22%3A%22Contabo%22%2C%22isPrivate%22%3Afalse%2C%22isUnpluggedCorpus%22%3Afalse%2C%22isLiveContent%22%3Afalse%7D%2C%22playerConfig%22%3A%7B%22granularVariableSpeedConfig%22%3A%7B%22minimumPlaybackRate%22%3A100%2C%22maximumPlaybackRate%22%3A100%7D%2C%22vssClientConfig%22%3A%7B%22vssUsePostRequest%22%3Afalse%7D%2C%22audioConfig%22%3A%7B%22loudnessDb%22%3A6.4200001%2C%22perceptualLoudnessDb%22%3A-12.58%2C%22enablePerFormatLoudness%22%3Atrue%2C%22trackAbsoluteLoudnessLkfs%22%3A-12.58%2C%22loudnessTargetLkfs%22%3A-19%7D%2C%22streamSelectionConfig%22%3A%7B%22maxBitrate%22%3A5790000%7D%2C%22mediaCommonConfig%22%3A%7B%22dynamicReadaheadConfig%22%3A%7B%22maxReadAheadMediaTimeMs%22%3A120000%2C%22minReadAheadMediaTimeMs%22%3A15000%2C%22readAheadGrowthRateMs%22%3A1000%7D%2C%22mediaUstreamerRequestConfig%22%3A%7B%22videoPlaybackUstreamerConfig%22%3A%22CugJCqkFCAAlAACAPy0zM3M%2FNT0Klz9YAWgBchoKFm1mczJfY21mc193ZWJfdjNfMl8wMDMYAKABAagBALgCANoChgEQsOoBGIDd2wEgoJwBKKCcATCYdXCIJ4AB9APgAQOYAgzQAgLoAgSAAwKIA4gnqAMDwAMByAMBgAQB0AQB2AQB%2BAQHgAV9wAUByAUB4AXQD%2BgFAfgF0A%2BQBgHQBgHwBgGAB9APwAcBgAgBiAgBnQjNzEw%2BoAjoB%2BAIAegI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FAfoClAEtAACgQjUAAKpCZQAAgEBowHCoAdCGA4UCmpkZP40CAACAP5UC%2Bu1rO7UCAACAP8AC3wP9As3MzD2QAwGdAwrXIz2gAwHVAwAAekSYBAHVBAAAIEHoBPAQoAYBtQa9N4Y1vQYzM4NAwAcByAcB5QcAgAlE8AcBgAgBoQgAAAAAAADwv6kIAAAAAAAA8L%2BwCN8DuAoBqAMBsAMD0AMB2AMBygQcChMIwKkHEJh1GOgHJQAAAAAoADAAEODUAxjQD9IEDwoICLAJELAJIAEgiCcoAdoEDQoGCPAuEPAuIPAuKAHwBQGYBgGoBoCAAtIGFAjoBxBkGg0IiCcVAAAAPx3NzEw%2F2AYB8AYBuAcBoAgB0ggGCAEQARgBqQkAAAAAAADwv7EJAAAAAAAA8L%2FQCQHaCSBMREZNU0VDVDZ2ZXAxS2ZCb0NnUWN2cllQemc2a3c9PZgK997JGKIKCPbeyRj33skYqAsB6gsEiwaMBoAMAagMkAHgDQHIDwHQDwHoEAGQEQGgEQGyERxDQU1TRHhVS3ViYkpEUFFBaWdhQ0FpRE1CUT090BIB4BIBgBMBsBMBkRQAAAAAAADwv5kUAAAAAAAA8L%2BwFAHKFADYFADoFAGBFQAAAAAAAPC%2FiKehygsBMgwIiQEQwY2ZwNPnjQMyDAj4ARCerevu2OeNAzIMCI8DEOec%2Bp7U540DMgwIiAEQg%2F%2BUjdbnjQMyDAj3ARCOjcCs1eeNAzIMCI4DEOjE%2FKPU540DMgwIiwYQ1q%2Fm4dPnjQMyDAiMBhC9zNSC1ueNAzIMCJQGEMGO2avU540DMgwIhwEQ2ub4%2F9XnjQMyDAj0ARDmlael1eeNAzIMCI0DEJrz9tvT540DMgwIhgEQodO5jNbnjQMyDAjzARDmtbuj1eeNAzIMCIwDELX7oObT540DMgwIhQEQyvibi9bnjQMyDAjyARD4qqfA1eeNAzIMCIsDEJfjiMHT540DMgwIoAEQoaWvj9bnjQMyDAiWAhDH5Lqm1eeNAzIMCIwBEOPChsfR540DMhwIjAEQ3b2A0dHnjQMaDkNnZ0tBMlJ5WXhJQk1RMgwI%2BQEQ%2B5PYxtHnjQMyHAj5ARCalaHP0eeNAxoOQ2dnS0EyUnlZeElCTVEyDAj6ARCh0ITK0eeNAzIcCPoBEJ3WuM%2FR540DGg5DZ2dLQTJSeVl4SUJNUTIMCPsBEP%2BzhcfR540DMhwI%2BwEQpLyB0NHnjQMaDkNnZ0tBMlJ5WXhJQk1ROgBSKhoAKAAyGFVDQThndnA4RUFGbnhyT1VwRlRxeG4zUTgAQABYAGAAcAF4AJIBAggFmgEECgJlbqABAbABBboBAwQFMcIBCAECAwQFCDBeygEdChsKF1RVVlJhZHVyQzl5THB0OFB0UG5qb1F3EALQAQASTAD5XE0GMEUCICspzq0i7L7k0%2Fr8FpfTWaU%2BRc6P6M2OOFLsEFpT6sdyAiEAgoUe31axKxYnDcNC8ucp1rZWuthNjsrn%2F2W1dzYnpD0aAmVp%22%7D%2C%22useServerDrivenAbr%22%3Atrue%2C%22serverPlaybackStartConfig%22%3A%7B%22enable%22%3Atrue%2C%22playbackStartPolicy%22%3A%7B%22startMinReadaheadPolicy%22%3A%5B%7B%22minReadaheadMs%22%3A1200%7D%5D%7D%7D%2C%22platypusUseEnvoyNetFetch%22%3Afalse%2C%22fixLivePlaybackModelDefaultPosition%22%3Afalse%7D%2C%22webPlayerConfig%22%3A%7B%22useCobaltTvosDash%22%3Atrue%2C%22webPlayerActionsPorting%22%3A%7B%22getSharePanelCommand%22%3A%7B%22clickTrackingParams%22%3A%22CAAQu2kiEwiZyum9xeCRAxXchekFHbT8OMTKAQTsTW8y%22%2C%22commandMetadata%22%3A%7B%22webCommandMetadata%22%3A%7B%22sendPost%22%3Atrue%2C%22apiUrl%22%3A%22%2Fyoutubei%2Fv1%2Fshare%2Fget_web_player_share_panel%22%7D%7D%2C%22webPlayerShareEntityServiceEndpoint%22%3A%7B%22serializedShareEntity%22%3A%22CgtQdVplZVdScVNZSQ%253D%253D%22%7D%7D%2C%22subscribeCommand%22%3A%7B%22clickTrackingParams%22%3A%22CAAQu2kiEwiZyum9xeCRAxXchekFHbT8OMTKAQTsTW8y%22%2C%22commandMetadata%22%3A%7B%22webCommandMetadata%22%3A%7B%22sendPost%22%3Atrue%2C%22apiUrl%22%3A%22%2Fyoutubei%2Fv1%2Fsubscription%2Fsubscribe%22%7D%7D%2C%22subscribeEndpoint%22%3A%7B%22channelIds%22%3A%5B%22UCA8gvp8EAFnxrOUpFTqxn3Q%22%5D%2C%22params%22%3A%22EgIIBxgA%22%7D%7D%2C%22unsubscribeCommand%22%3A%7B%22clickTrackingParams%22%3A%22CAAQu2kiEwiZyum9xeCRAxXchekFHbT8OMTKAQTsTW8y%22%2C%22commandMetadata%22%3A%7B%22webCommandMetadata%22%3A%7B%22sendPost%22%3Atrue%2C%22apiUrl%22%3A%22%2Fyoutubei%2Fv1%2Fsubscription%2Funsubscribe%22%7D%7D%2C%22unsubscribeEndpoint%22%3A%7B%22channelIds%22%3A%5B%22UCA8gvp8EAFnxrOUpFTqxn3Q%22%5D%2C%22params%22%3A%22CgIIBxgA%22%7D%7D%2C%22addToWatchLaterCommand%22%3A%7B%22clickTrackingParams%22%3A%22CAAQu2kiEwiZyum9xeCRAxXchekFHbT8OMTKAQTsTW8y%22%2C%22commandMetadata%22%3A%7B%22webCommandMetadata%22%3A%7B%22sendPost%22%3Atrue%2C%22apiUrl%22%3A%22%2Fyoutubei%2Fv1%2Fbrowse%2Fedit_playlist%22%7D%7D%2C%22playlistEditEndpoint%22%3A%7B%22playlistId%22%3A%22WL%22%2C%22actions%22%3A%5B%7B%22addedVideoId%22%3A%22PuZeeWRqSYI%22%2C%22action%22%3A%22ACTION_ADD_VIDEO%22%7D%5D%7D%7D%2C%22removeFromWatchLaterCommand%22%3A%7B%22clickTrackingParams%22%3A%22CAAQu2kiEwiZyum9xeCRAxXchekFHbT8OMTKAQTsTW8y%22%2C%22commandMetadata%22%3A%7B%22webCommandMetadata%22%3A%7B%22sendPost%22%3Atrue%2C%22apiUrl%22%3A%22%2Fyoutubei%2Fv1%2Fbrowse%2Fedit_playlist%22%7D%7D%2C%22playlistEditEndpoint%22%3A%7B%22playlistId%22%3A%22WL%22%2C%22actions%22%3A%5B%7B%22action%22%3A%22ACTION_REMOVE_VIDEO_BY_VIDEO_ID%22%2C%22removedVideoId%22%3A%22PuZeeWRqSYI%22%7D%5D%7D%7D%7D%2C%22skippableAdProgressBarDuration%22%3A5000%7D%7D%2C%22microformat%22%3A%7B%22playerMicroformatRenderer%22%3A%7B%22thumbnail%22%3A%7B%22thumbnails%22%3A%5B%7B%22url%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FPuZeeWRqSYI%2Fmaxresdefault.jpg%3Fsqp%3D-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGC0gOyh_MA8%3D%5Cu0026rs%3DAOn4CLARDOPkLAQ-U7MHmCEuAHqJIrqNDA%22%2C%22width%22%3A1280%2C%22height%22%3A720%7D%5D%7D%2C%22embed%22%3A%7B%22iframeUrl%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fembed%2FPuZeeWRqSYI%22%2C%22width%22%3A1280%2C%22height%22%3A720%7D%2C%22title%22%3A%7B%22simpleText%22%3A%22Contabo%3A+VPS+and+cloud+hosting+for+you%2C+whoever+you+are.%22%7D%2C%22description%22%3A%7B%22simpleText%22%3A%22Contabo+delivers+powerful+Cloud+VPS+and+Dedicated+Servers+at+unbeatable+prices.+With+21%2B+years+of+experience%2C+200%2C000%2B+customers+in+190+countries+trust+our+German+quality%2C+global+availability%2C+and+24%2F7+human+support.+Enjoy+high+performance%2C+no+setup+fees%2C+DDoS+protection%2C+and+transparent+pricing.%22%7D%2C%22lengthSeconds%22%3A21%2C%22ownerProfileUrl%22%3A%22http%3A%2F%2Fwww.youtube.com%2F%40ContaboCom%22%2C%22externalChannelId%22%3A%22UCA8gvp8EAFnxrOUpFTqxn3Q%22%2C%22isFamilySafe%22%3Afalse%2C%22availableCountries%22%3A%5B%22AD%22%2C%22AE%22%2C%22AF%22%2C%22AG%22%2C%22AI%22%2C%22AL%22%2C%22AM%22%2C%22AO%22%2C%22AQ%22%2C%22AR%22%2C%22AS%22%2C%22AT%22%2C%22AU%22%2C%22AW%22%2C%22AX%22%2C%22AZ%22%2C%22BA%22%2C%22BB%22%2C%22BD%22%2C%22BE%22%2C%22BF%22%2C%22BG%22%2C%22BH%22%2C%22BI%22%2C%22BJ%22%2C%22BL%22%2C%22BM%22%2C%22BN%22%2C%22BO%22%2C%22BQ%22%2C%22BR%22%2C%22BS%22%2C%22BT%22%2C%22BV%22%2C%22BW%22%2C%22BY%22%2C%22BZ%22%2C%22CA%22%2C%22CC%22%2C%22CD%22%2C%22CF%22%2C%22CG%22%2C%22CH%22%2C%22CI%22%2C%22CK%22%2C%22CL%22%2C%22CM%22%2C%22CN%22%2C%22CO%22%2C%22CR%22%2C%22CU%22%2C%22CV%22%2C%22CW%22%2C%22CX%22%2C%22CY%22%2C%22CZ%22%2C%22DE%22%2C%22DJ%22%2C%22DK%22%2C%22DM%22%2C%22DO%22%2C%22DZ%22%2C%22EC%22%2C%22EE%22%2C%22EG%22%2C%22EH%22%2C%22ER%22%2C%22ES%22%2C%22ET%22%2C%22FI%22%2C%22FJ%22%2C%22FK%22%2C%22FM%22%2C%22FO%22%2C%22FR%22%2C%22GA%22%2C%22GB%22%2C%22GD%22%2C%22GE%22%2C%22GF%22%2C%22GG%22%2C%22GH%22%2C%22GI%22%2C%22GL%22%2C%22GM%22%2C%22GN%22%2C%22GP%22%2C%22GQ%22%2C%22GR%22%2C%22GS%22%2C%22GT%22%2C%22GU%22%2C%22GW%22%2C%22GY%22%2C%22HK%22%2C%22HM%22%2C%22HN%22%2C%22HR%22%2C%22HT%22%2C%22HU%22%2C%22ID%22%2C%22IE%22%2C%22IL%22%2C%22IM%22%2C%22IN%22%2C%22IO%22%2C%22IQ%22%2C%22IR%22%2C%22IS%22%2C%22IT%22%2C%22JE%22%2C%22JM%22%2C%22JO%22%2C%22JP%22%2C%22KE%22%2C%22KG%22%2C%22KH%22%2C%22KI%22%2C%22KM%22%2C%22KN%22%2C%22KP%22%2C%22KR%22%2C%22KW%22%2C%22KY%22%2C%22KZ%22%2C%22LA%22%2C%22LB%22%2C%22LC%22%2C%22LI%22%2C%22LK%22%2C%22LR%22%2C%22LS%22%2C%22LT%22%2C%22LU%22%2C%22LV%22%2C%22LY%22%2C%22MA%22%2C%22MC%22%2C%22MD%22%2C%22ME%22%2C%22MF%22%2C%22MG%22%2C%22MH%22%2C%22MK%22%2C%22ML%22%2C%22MM%22%2C%22MN%22%2C%22MO%22%2C%22MP%22%2C%22MQ%22%2C%22MR%22%2C%22MS%22%2C%22MT%22%2C%22MU%22%2C%22MV%22%2C%22MW%22%2C%22MX%22%2C%22MY%22%2C%22MZ%22%2C%22NA%22%2C%22NC%22%2C%22NE%22%2C%22NF%22%2C%22NG%22%2C%22NI%22%2C%22NL%22%2C%22NO%22%2C%22NP%22%2C%22NR%22%2C%22NU%22%2C%22NZ%22%2C%22OM%22%2C%22PA%22%2C%22PE%22%2C%22PF%22%2C%22PG%22%2C%22PH%22%2C%22PK%22%2C%22PL%22%2C%22PM%22%2C%22PN%22%2C%22PR%22%2C%22PS%22%2C%22PT%22%2C%22PW%22%2C%22PY%22%2C%22QA%22%2C%22RE%22%2C%22RO%22%2C%22RS%22%2C%22RU%22%2C%22RW%22%2C%22SA%22%2C%22SB%22%2C%22SC%22%2C%22SD%22%2C%22SE%22%2C%22SG%22%2C%22SH%22%2C%22SI%22%2C%22SJ%22%2C%22SK%22%2C%22SL%22%2C%22SM%22%2C%22SN%22%2C%22SO%22%2C%22SR%22%2C%22SS%22%2C%22ST%22%2C%22SV%22%2C%22SX%22%2C%22SY%22%2C%22SZ%22%2C%22TC%22%2C%22TD%22%2C%22TF%22%2C%22TG%22%2C%22TH%22%2C%22TJ%22%2C%22TK%22%2C%22TL%22%2C%22TM%22%2C%22TN%22%2C%22TO%22%2C%22TR%22%2C%22TT%22%2C%22TV%22%2C%22TW%22%2C%22TZ%22%2C%22UA%22%2C%22UG%22%2C%22UM%22%2C%22US%22%2C%22UY%22%2C%22UZ%22%2C%22VA%22%2C%22VC%22%2C%22VE%22%2C%22VG%22%2C%22VI%22%2C%22VN%22%2C%22VU%22%2C%22WF%22%2C%22WS%22%2C%22YE%22%2C%22YT%22%2C%22ZA%22%2C%22ZM%22%2C%22ZW%22%5D%2C%22isUnlisted%22%3Atrue%2C%22hasYpcMetadata%22%3Afalse%2C%22viewCount%22%3A%222972943%22%2C%22category%22%3A%22Science+%5Cu0026+Technology%22%2C%22publishDate%22%3A%222025-04-25T02%3A50%3A37-07%3A00%22%2C%22ownerChannelName%22%3A%22Contabo%22%2C%22uploadDate%22%3A%222025-04-25T02%3A50%3A37-07%3A00%22%2C%22isShortsEligible%22%3Afalse%2C%22externalVideoId%22%3A%22PuZeeWRqSYI%22%2C%22likeCount%22%3A%2216%22%2C%22canonicalUrl%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPuZeeWRqSYI%22%7D%7D%2C%22cards%22%3A%7B%22cardCollectionRenderer%22%3A%7B%22cards%22%3A%5B%7B%22cardRenderer%22%3A%7B%22teaser%22%3A%7B%22simpleCardTeaserRenderer%22%3A%7B%22message%22%3A%7B%22simpleText%22%3A%22View+corrections%22%7D%2C%22trackingParams%22%3A%22CAYQ0DYiEwiZyum9xeCRAxXchekFHbT8OMQ%3D%22%2C%22impressionLoggingUrlsV2s%22%3A%5B%7B%22baseUrl%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fpagead%2Finteraction%2F%3Fai%3DCo_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA%5Cu0026sigh%3D5TGV3Bv5TJo%5Cu0026cid%3DCAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg%5Cu0026label%3Dvideo_card_impression%22%7D%5D%2C%22clickLoggingUrlsV2s%22%3A%5B%7B%22baseUrl%22%3A%22https%3A%2F%2Fwww.googleadservices.com%2Fpagead%2Faclk%3Fsa%3DL%5Cu0026ai%3DC2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE%5Cu0026gclid%3DCj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB%5Cu0026num%3D1%5Cu0026cid%3DCAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg%5Cu0026ad_cpn%3D%255BAD_CPN%255D%5Cu0026sig%3DAOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg%5Cu0026ctype%3D110%5Cu0026ms%3D%255BCLICK_MS%255D%5Cu0026label%3Dvideo_card_expand%22%7D%5D%2C%22iconClickLoggingUrlsV2s%22%3A%5B%7B%22baseUrl%22%3A%22https%3A%2F%2Fwww.googleadservices.com%2Fpagead%2Faclk%3Fsa%3DL%5Cu0026ai%3DC2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE%5Cu0026gclid%3DCj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB%5Cu0026num%3D1%5Cu0026cid%3DCAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg%5Cu0026ad_cpn%3D%255BAD_CPN%255D%5Cu0026sig%3DAOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg%5Cu0026ctype%3D110%5Cu0026ms%3D%255BCLICK_MS%255D%5Cu0026label%3Dvideo_card_expand%22%7D%5D%2C%22prominent%22%3Atrue%2C%22logVisibilityUpdates%22%3Atrue%2C%22onTapCommand%22%3A%7B%22clickTrackingParams%22%3A%22CAYQ0DYiEwiZyum9xeCRAxXchekFHbT8OMTKAQTsTW8y%22%2C%22changeEngagementPanelVisibilityAction%22%3A%7B%22targetId%22%3A%22engagement-panel-error-corrections%22%2C%22visibility%22%3A%22ENGAGEMENT_PANEL_VISIBILITY_EXPANDED%22%7D%7D%7D%7D%2C%22cueRanges%22%3A%5B%7B%22startCardActiveMs%22%3A0%2C%22endCardActiveMs%22%3A5000%2C%22teaserDurationMs%22%3A6000%2C%22iconAfterTeaserMs%22%3A5000%7D%5D%2C%22trackingParams%22%3A%22CAUQtZcBGAAiEwiZyum9xeCRAxXchekFHbT8OMQ%3D%22%7D%7D%5D%2C%22drawerIconClickLoggingUrlsV2s%22%3A%5B%7B%22baseUrl%22%3A%22https%3A%2F%2Fwww.googleadservices.com%2Fpagead%2Faclk%3Fsa%3DL%5Cu0026ai%3DC2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE%5Cu0026gclid%3DCj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB%5Cu0026num%3D1%5Cu0026cid%3DCAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg%5Cu0026ad_cpn%3D%255BAD_CPN%255D%5Cu0026sig%3DAOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg%5Cu0026ctype%3D110%5Cu0026ms%3D%255BCLICK_MS%255D%5Cu0026label%3Dvideo_card_expand%22%7D%5D%2C%22drawerCloseLoggingUrlsV2s%22%3A%5B%7B%22baseUrl%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fpagead%2Finteraction%2F%3Fai%3DCo_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA%5Cu0026sigh%3D5TGV3Bv5TJo%5Cu0026cid%3DCAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg%5Cu0026label%3Dvideo_card_dismiss%22%7D%5D%2C%22headerText%22%3A%7B%22simpleText%22%3A%22From+Contabo%22%7D%2C%22icon%22%3A%7B%22infoCardIconRenderer%22%3A%7B%22trackingParams%22%3A%22CAQQsJcBIhMImcrpvcXgkQMV3IXpBR20%2FDjE%22%7D%7D%2C%22closeButton%22%3A%7B%22infoCardIconRenderer%22%3A%7B%22trackingParams%22%3A%22CAMQsZcBIhMImcrpvcXgkQMV3IXpBR20%2FDjE%22%7D%7D%2C%22trackingParams%22%3A%22CAIQwjciEwiZyum9xeCRAxXchekFHbT8OMQ%3D%22%2C%22allowTeaserDismiss%22%3Atrue%2C%22logIconVisibilityUpdates%22%3Atrue%7D%7D%2C%22trackingParams%22%3A%22CAAQu2kiEwiZyum9xeCRAxXchekFHbT8OMQ%3D%22%2C%22adBreakHeartbeatParams%22%3A%22Q0FBJTNE%22%2C%22frameworkUpdates%22%3A%7B%22entityBatchUpdate%22%3A%7B%22mutations%22%3A%5B%7B%22entityKey%22%3A%22Eg0KC1B1WmVlV1JxU1lJIPYBKAE%253D%22%2C%22type%22%3A%22ENTITY_MUTATION_TYPE_REPLACE%22%2C%22payload%22%3A%7B%22offlineabilityEntity%22%3A%7B%22key%22%3A%22Eg0KC1B1WmVlV1JxU1lJIPYBKAE%253D%22%2C%22offlineabilityRenderer%22%3A%22CAEaGwoTChEKD0Z1bGwgSEQgKDEwODBwKRgHIAIoABoXCg8KDQoLSGlnaCAoNzIwcCkYAiACKAAaGQoRCg8KDU1lZGl1bSAoMzYwcCkYASABKAEaFgoOCgwKCkxvdyAoMTQ0cCkYBCABKAEiDTILb2ZmbGluZWxpc3Q%3D%22%2C%22addToOfflineButtonState%22%3A%22ADD_TO_OFFLINE_BUTTON_STATE_ENABLED%22%2C%22contentCheckOk%22%3Afalse%2C%22racyCheckOk%22%3Afalse%2C%22loggingDirectives%22%3A%7B%22trackingParams%22%3A%22CAEQxzciEwiZyum9xeCRAxXchekFHbT8OMQ%3D%22%2C%22visibility%22%3A%7B%22types%22%3A4%7D%7D%7D%7D%7D%5D%2C%22timestamp%22%3A%7B%22seconds%22%3A1766933837%2C%22nanos%22%3A558369250%7D%7D%7D%7D","elementId":"MNlGMXcyGjz7h0BA","trackingParams":"CIQBEPn3ASITCJuG1L3F4JEDFdyF6QUdtPw4xA==","legacyInfoCardVastExtension":"EtISCAISzRJodHRwczovL3d3dy5nb29nbGVhZHNlcnZpY2VzLmNvbS9wYWdlYWQvYWNsaz9zYT1MJmFpPUMyVmMwVFVWUmFmdm1ETUtPdnIwUHg1ekUyUUdMNjdHa2hBRzJ4NG43a1JTd2tCOFFBU0FBWUxPUVdvSUJGMk5oTFhCMVlpMDJNakU1T0RFeE56UTNNRFE1TXpjeG9BSG5sOFAtQTZrQzRHOXljdUNfc3o2b0F3U3FCUDBEVDlDOGhQbFZ5UHI3NVhBNWNQcWhTam9xVzhrbzZoUzJfbmk1a0dkX1ZXY2ttYjhYak51MHlyQkwydHpaTDhHZkF1LUNSRGE4dXRBNHZSRmJlZ29rSjA2Y3oxU1VhWUw0YnAwd1QyZEtMTkRnRTVUaW15UFpncFMyMGthTXlSMVhxdlRYY1ZLWDRoQ1NERThmamdOV3h0U2JnQ1ZHREQ2aGYtbDhlZ29lWTVuNnZwLUdCY01vODI1RjdTR2lhX0xHUXJuWXl3Q0VPR0F4cl94dnlWcFE2cmZyQkE0Q0tDVS1uQi1jb0o2aERINzRDcEk2UWtUWEdMdHVtSktqSUxBbmxjTTN2ekZOY3RGb0pYakpiYS0tMGJ2Z1BlYXVYUmllaTdMNHg1MU4xeDN1N3FVZEdNMjR3NnJtVHdJbGZrZGVuUUtpVE1lRU83aXFfNlpEUTJYbjVIbU9ONXpiNjRvLW9SNVMyUm5PUER6Z2Z5VjlJaHMxZlBFWEpBbk1kTkVHSEpYWk5uZUs3aHNRdEdMbWZnR0RZY19DaXFBSC1tRkVwc0NhODZwR0J4dUhsNXdaQ3FDTzFvdFEybV9kaUpvM3JMaVVNZjBlSC1uZFc2U3pUV2d0WjJTVjlSdjRfaUpGNkNteF9TN0h0bElSd1pCMkZnaXUyaXNkcUdIcld3bzBGMm5FbHJJVVFRNmIyd19ycHN4YlNvRktmM1NNcENldE12Z21KeS1DbUV0Q2ttMTlBazZSOGdyNmwyNGc2b0tSR1JJR1AtRTNOZVhaVXhnOHlfS19oOXA5cC13VlBDWjZmY25QZ0ZtMlpUdjRSanNWR0xTOW01VU5TMzAwU2tkZk5qSURLX09CdzVGM1Z3T1RaZnBPcW1OWnowZ3pmRkNUSXNsMkVycUlCZTZObEpoVW9BWlVnQWVCNkx3QmlBY0JrQWNDcUFmeXdMRUNxQWU0eExFQ3FBZmh0ckVDcUFlbHo3RUNxQWZubmJFQ3FBZm9uYkVDcUFmdnRiRUNxQWZ3dGJFQ3FBZjUwN0VDcUFlRUNLZ0hwdFN4QXFnSHFOSWJxQWUyQjZnSHNKdXhBcWdIcnJHeEFxZ0g1cnl4QXFnSHlycXhBcWdIX2JLeEFxZ0g5N2l4QXFnSC1MaXhBcWdIeU0teEFxZ0h5Yy14QXFnSHpjZXhBcWdIOGRHeEFxZ0hfTld4QXFnSC05V3hBcWdIak5heEFxZ0hpOWF4QXFnSG5kZXhBcWdIbmRTeEFxZ0hnY1licUFmOHI3RUNxQWY5QjZnSHE4VWJxQWVjM0J1b0I3ZWhzUUtvQjlXcHNRS29CLWZhc1FLb0I5NjFzUUtTQ0F0UWRWcGxaVmRTY1ZOWlNhZ0lBZElJTEFnQUVBSVlXaklCQURvUmo5Q0FnSUNBQklEQWdJQ0FnSUNBQWlwSTJhRFNOVkFVV05pcjFiM0Y0SkVEOGdnZlkyRXRlWFF0YUc5emRDMXdkV0l0T0RFMU56TTJOVFF4TXpJMk16SXlNNW9KRzJoMGRIQnpPaTh2WTI5dWRHRmlieTVqYjIwdlpXNHZkbkJ6TDdFSkEwNDdBN1ZCeldfSUNRUElDUmpJQ1k4QnlBbVFBWmdMQWFFTGlHRU12MFhkZWdXNkMyWUlBUkFCR0JZZ0FTZ0JNQkJBQVVnQllBQm9BSEFDaUFFQW1BRUJvZ0V6Q2g0Z0E5cTRCQmd5RmpvVUNoSW9NRWlwN3NMYnJocVlGNEdOcHoyWUdRQVlBU0FBV0FGZ0FIQUIwQUVCcUFJRndBSUNxQUVCMkFFQmdBSUJpQUlSdWdNRmRtbDBjR1hRQ3hMU0RBSVFBWm9OQVJLcURRSkNSTWdOQWRJTnBBRm9kSFJ3Y3pvdkwyTnZiblJoWW04dVkyOXRMMlZ1TDNad2N5OF9kWFJ0WDNOdmRYSmpaVDFuYjI5bmJHVW1kWFJ0WDIxbFpHbDFiVDFqY0dNbWRYUnRYMk5oYlhCaGFXZHVQV052Y21VdGNISnZjM0JsWTNScGJtY3RhVzVrYVdFdGNHMWhlQ1oxZEcxZmRHVnliVDBtZFhSdFgyTnZiblJsYm5ROUptZGhaRjl6YjNWeVkyVTlNaVpuWVdSZlkyRnRjR0ZwWjI1cFpEMHlNalU1T1RJek9UUXdOcmdUX19fX19fX19fX19fQVlnVUFiQVVBY0FWeVlDQVFOQVZBZGdWQVpBV0FlSVdBZ2dCZ0JjQmloY1dDQU1ZQVNBQktBRXdBVGdCUUFGSUFWQUJXQUZnQXFBWEFha1hfb2Zldl9RWHhkRzZGd1lvQURBQU9BSFFHQUh3R0FHeUdRRTN3aGtDQ0FFJmdjbGlkPUNqMEtDUWlBeDhQS0JoRDFBUklzQUtzbUdiZEtCZDRSaXJZc2JUQkYzakZqUnFxNGVQT0dtbGtzY0VDUk1iS0lCWXZ3VmVpUUFWdzduZ2dhQXFGNUVBTHdfd2NCJm51bT0xJmNpZD1DQUVTcFFIZzlnekJVWGNaU0RGX0xfekp4Nm5mMFUwR25ST2JjczRZeGJyeU01TDFlNHdRY2pzRW1FQlU3ZDlEYnU4UFlNZ3gxV3QxZ3VoWE9LQXh0cFVVczk1Zy1wUDNZX3haNDVqb1FWYzM5S09qTUJweHFkdEIxcjRobUhKZk91eU5RcTFRbnVOM1RKOTAydDFBNlN6ZE9TNUlONmpjdzVWUTMtd1VyQ2VIUHJSRjNJNFVycG5HdUNvdGdSaU83ZmE3LV81Z0VpWVBrVE92SG1EUUloWU9ReFpFRnR4c3NGZyZhZF9jcG49JTVCQURfQ1BOJTVEJnNpZz1BT0Q2NF8xYTJ5enhqQS13Z2czd1Fqdk5UMG9oTTdVNWNnJmN0eXBlPTExMCZtcz0lNUJDTElDS19NUyU1RCZsYWJlbD12aWRlb19jYXJkX2V4cGFuZBLVEggGEtASaHR0cHM6Ly93d3cuZ29vZ2xlYWRzZXJ2aWNlcy5jb20vcGFnZWFkL2FjbGs_c2E9TCZhaT1DMlZjMFRVVlJhZnZtRE1LT3ZyMFB4NXpFMlFHTDY3R2toQUcyeDRuN2tSU3drQjhRQVNBQVlMT1FXb0lCRjJOaExYQjFZaTAyTWpFNU9ERXhOelEzTURRNU16Y3hvQUhubDhQLUE2a0M0Rzl5Y3VDX3N6Nm9Bd1NxQlAwRFQ5QzhoUGxWeVByNzVYQTVjUHFoU2pvcVc4a282aFMyX25pNWtHZF9WV2NrbWI4WGpOdTB5ckJMMnR6Wkw4R2ZBdS1DUkRhOHV0QTR2UkZiZWdva0owNmN6MVNVYVlMNGJwMHdUMmRLTE5EZ0U1VGlteVBaZ3BTMjBrYU15UjFYcXZUWGNWS1g0aENTREU4ZmpnTld4dFNiZ0NWR0RENmhmLWw4ZWdvZVk1bjZ2cC1HQmNNbzgyNUY3U0dpYV9MR1Fybll5d0NFT0dBeHJfeHZ5VnBRNnJmckJBNENLQ1UtbkItY29KNmhESDc0Q3BJNlFrVFhHTHR1bUpLaklMQW5sY00zdnpGTmN0Rm9KWGpKYmEtLTBidmdQZWF1WFJpZWk3TDR4NTFOMXgzdTdxVWRHTTI0dzZybVR3SWxma2RlblFLaVRNZUVPN2lxXzZaRFEyWG41SG1PTjV6YjY0by1vUjVTMlJuT1BEemdmeVY5SWhzMWZQRVhKQW5NZE5FR0hKWFpObmVLN2hzUXRHTG1mZ0dEWWNfQ2lxQUgtbUZFcHNDYTg2cEdCeHVIbDV3WkNxQ08xb3RRMm1fZGlKbzNyTGlVTWYwZUgtbmRXNlN6VFdndFoyU1Y5UnY0X2lKRjZDbXhfUzdIdGxJUndaQjJGZ2l1MmlzZHFHSHJXd28wRjJuRWxySVVRUTZiMndfcnBzeGJTb0ZLZjNTTXBDZXRNdmdtSnktQ21FdENrbTE5QWs2UjhncjZsMjRnNm9LUkdSSUdQLUUzTmVYWlV4Zzh5X0tfaDlwOXAtd1ZQQ1o2ZmNuUGdGbTJaVHY0UmpzVkdMUzltNVVOUzMwMFNrZGZOaklES19PQnc1RjNWd09UWmZwT3FtTlp6MGd6ZkZDVElzbDJFcnFJQmU2TmxKaFVvQVpVZ0FlQjZMd0JpQWNCa0FjQ3FBZnl3TEVDcUFlNHhMRUNxQWZodHJFQ3FBZWx6N0VDcUFmbm5iRUNxQWZvbmJFQ3FBZnZ0YkVDcUFmd3RiRUNxQWY1MDdFQ3FBZUVDS2dIcHRTeEFxZ0hxTklicUFlMkI2Z0hzSnV4QXFnSHJyR3hBcWdINXJ5eEFxZ0h5cnF4QXFnSF9iS3hBcWdIOTdpeEFxZ0gtTGl4QXFnSHlNLXhBcWdIeWMteEFxZ0h6Y2V4QXFnSDhkR3hBcWdIX05XeEFxZ0gtOVd4QXFnSGpOYXhBcWdIaTlheEFxZ0huZGV4QXFnSG5kU3hBcWdIZ2NZYnFBZjhyN0VDcUFmOUI2Z0hxOFVicUFlYzNCdW9CN2Voc1FLb0I5V3BzUUtvQi1mYXNRS29COTYxc1FLU0NBdFFkVnBsWlZkU2NWTlpTYWdJQWRJSUxBZ0FFQUlZV2pJQkFEb1JqOUNBZ0lDQUJJREFnSUNBZ0lDQUFpcEkyYURTTlZBVVdOaXIxYjNGNEpFRDhnZ2ZZMkV0ZVhRdGFHOXpkQzF3ZFdJdE9ERTFOek0yTlRReE16STJNekl5TTVvSkcyaDBkSEJ6T2k4dlkyOXVkR0ZpYnk1amIyMHZaVzR2ZG5Cekw3RUpBMDQ3QTdWQnpXX0lDUVBJQ1JqSUNZOEJ5QW1RQVpnTEFhRUxpR0VNdjBYZGVnVzZDMllJQVJBQkdCWWdBU2dCTUJCQUFVZ0JZQUJvQUhBQ2lBRUFtQUVCb2dFekNoNGdBOXE0QkJneUZqb1VDaElvTUVpcDdzTGJyaHFZRjRHTnB6MllHUUFZQVNBQVdBRmdBSEFCMEFFQnFBSUZ3QUlDcUFFQjJBRUJnQUlCaUFJUnVnTUZkbWwwY0dYUUN4TFNEQUlRQVpvTkFSS3FEUUpDUk1nTkFkSU5wQUZvZEhSd2N6b3ZMMk52Ym5SaFltOHVZMjl0TDJWdUwzWndjeThfZFhSdFgzTnZkWEpqWlQxbmIyOW5iR1VtZFhSdFgyMWxaR2wxYlQxamNHTW1kWFJ0WDJOaGJYQmhhV2R1UFdOdmNtVXRjSEp2YzNCbFkzUnBibWN0YVc1a2FXRXRjRzFoZUNaMWRHMWZkR1Z5YlQwbWRYUnRYMk52Ym5SbGJuUTlKbWRoWkY5emIzVnlZMlU5TWlabllXUmZZMkZ0Y0dGcFoyNXBaRDB5TWpVNU9USXpPVFF3TnJnVF9fX19fX19fX19fX0FZZ1VBYkFVQWNBVnlZQ0FRTkFWQWRnVkFaQVdBZUlXQWdnQmdCY0JpaGNXQ0FNWUFTQUJLQUV3QVRnQlFBRklBVkFCV0FGZ0FxQVhBYWtYX29mZXZfUVh4ZEc2RndZb0FEQUFPQUhRR0FId0dBR3lHUUUzd2hrQ0NBRSZnY2xpZD1DajBLQ1FpQXg4UEtCaEQxQVJJc0FLc21HYmRLQmQ0UmlyWXNiVEJGM2pGalJxcTRlUE9HbWxrc2NFQ1JNYktJQll2d1ZlaVFBVnc3bmdnYUFxRjVFQUx3X3djQiZudW09MSZjaWQ9Q0FFU3BRSGc5Z3pCVVhjWlNERl9MX3pKeDZuZjBVMEduUk9iY3M0WXhicnlNNUwxZTR3UWNqc0VtRUJVN2Q5RGJ1OFBZTWd4MVd0MWd1aFhPS0F4dHBVVXM5NWctcFAzWV94WjQ1am9RVmMzOUtPak1CcHhxZHRCMXI0aG1ISmZPdXlOUXExUW51TjNUSjkwMnQxQTZTemRPUzVJTjZqY3c1VlEzLXdVckNlSFByUkYzSTRVcnBuR3VDb3RnUmlPN2ZhNy1fNWdFaVlQa1RPdkhtRFFJaFlPUXhaRUZ0eHNzRmcmYWRfY3BuPSU1QkFEX0NQTiU1RCZzaWc9QU9ENjRfMWEyeXp4akEtd2dnM3dRanZOVDBvaE03VTVjZyZjdHlwZT0xMTAmbXM9JTVCQ0xJQ0tfTVMlNUQmbGFiZWw9dmlkZW9fY2FyZF9bQUNUVFlQRV0SkQ4IARKMDmh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BhZ2VhZC9pbnRlcmFjdGlvbi8_YWk9Q29feTBUVVZSYWZ2bURNS092cjBQeDV6RTJRR0w2N0draEFHMng0bjdrUlN3a0I4UUFTQUFZTE9RV29JQkYyTmhMWEIxWWkwMk1qRTVPREV4TnpRM01EUTVNemN4b0FIbmw4UC1BNmtDNEc5eWN1Q19zejZvQXdTcUJQb0RUOUM4aFBsVnlQcjc1WEE1Y1BxaFNqb3FXOGtvNmhTMl9uaTVrR2RfVldja21iOFhqTnUweXJCTDJ0elpMOEdmQXUtQ1JEYTh1dEE0dlJGYmVnb2tKMDZjejFTVWFZTDRicDB3VDJkS0xORGdFNVRpbXlQWmdwUzIwa2FNeVIxWHF2VFhjVktYNGhDU0RFOGZqZ05XeHRTYmdDVkdERDZoZi1sOGVnb2VZNW42dnAtR0JjTW84MjVGN1NHaWFfTEdRcm5ZeXdDRU9HQXhyX3h2eVZwUTZyZnJCQTRDS0NVLW5CLWNvSjZoREg3NENwSTZRa1RYR0x0dW1KS2pJTEFubGNNM3Z6Rk5jdEZvSlhqSmJhLS0wYnZnUGVhdVhSaWVpN0w0eDUxTjF4M3U3cVVkR00yNHc2cm1Ud0lsZmtkZW5RS2lUTWVFTzdpcV82WkRRMlhuNUhtT041emI2NG8tb1I1UzJSbk9QRHpnZnlWOUloczFmUEVYSkFuTWRORUdISlhaTm5lSzdoc1F0R0xtZmdHRFljX0NpcUFILW1GRXBzQ2E4NnBHQnh1SGw1d1pDcUNPMW90UTJtX2RpSm8zckxpVU1mMGVILW5kVzZTelRXZ3RaMlNWOVJ2NF9pSkY2Q214X1M3SHRsSVJ3WkIyRmdpdTJpc2RxR0hyV3dvMEYybkVscklVUVE2YjJ3X3Jwc3hiU29GS2YzU01wQ2V0TXZnbUp5LUNtRXRDa20xOUFrNlI4Z3I2bDI0ZzZvS1JHUklHUC1FM05lWFpVeGc4eV9LX2g5cDlwLXdWUENaNmZjblBnRm0yWldQNWdpVWRSQ0NmQ1ZLVDJFS2IyVlBEejFHNC10TzJ5VHg5ZVJ0OTd4c3RFYmpVOG1RcnVlc1lIV2FnQmxTQUI0SG92QUdJQndHUUJ3S29CX0xBc1FLb0I3akVzUUtvQi1HMnNRS29CNlhQc1FLb0ItZWRzUUtvQi1pZHNRS29CLS0xc1FLb0JfQzFzUUtvQl9uVHNRS29CNFFJcUFlbTFMRUNxQWVvMGh1b0I3WUhxQWV3bTdFQ3FBZXVzYkVDcUFmbXZMRUNxQWZLdXJFQ3FBZjlzckVDcUFmM3VMRUNxQWY0dUxFQ3FBZkl6N0VDcUFmSno3RUNxQWZOeDdFQ3FBZngwYkVDcUFmODFiRUNxQWY3MWJFQ3FBZU0xckVDcUFlTDFyRUNxQWVkMTdFQ3FBZWQxTEVDcUFlQnhodW9CX3l2c1FLb0ItUFpHNUlJQzFCMVdtVmxWMUp4VTFsSnFBZ0IwZ2dzQ0FBUUFoaGFNZ0VBT2hHUDBJQ0FnSUFFZ01DQWdJQ0FnSUFDS2tqWm9OSTFVQlJZMkt2VnZjWGdrUVB5Q0I5allTMTVkQzFvYjNOMExYQjFZaTA0TVRVM016WTFOREV6TWpZek1qSXp5QWtEeUFrWXlBbVBBY2dKa0FHaEM0aGhETDlGM1hvRnVndG1DQUVRQVJnV0lBRW9BVEFRUUFGSUFXQUFhQUJ3QW9nQkFKZ0JBYUlCTXdvZUlBUGF1QVFZTWhZNkZBb1NLREJJcWU3QzI2NGFtQmVCamFjOW1Ca0FHQUVnQUZnQllBQndBZEFCQWFnQ0JjQUNBcWdCQWRnQkFZQUNBWWdDRWJvREJYWnBkSEJsMGd3Q0VBRzRFX19fX19fX19fX19fd0dJRkFHd0ZBSEFGY21BZ0VDUUZnR0tGeFlJQXhnQklBRW9BVEFCT0FGQUFVZ0JVQUZZQVdBQ29CY0JxUmYtaDk2XzlCZkYwYm9YQkNnQU1BQSZzaWdoPTVUR1YzQnY1VEpvJmNpZD1DQUVTcFFIZzlnekJVWGNaU0RGX0xfekp4Nm5mMFUwR25ST2JjczRZeGJyeU01TDFlNHdRY2pzRW1FQlU3ZDlEYnU4UFlNZ3gxV3QxZ3VoWE9LQXh0cFVVczk1Zy1wUDNZX3haNDVqb1FWYzM5S09qTUJweHFkdEIxcjRobUhKZk91eU5RcTFRbnVOM1RKOTAydDFBNlN6ZE9TNUlONmpjdzVWUTMtd1VyQ2VIUHJSRjNJNFVycG5HdUNvdGdSaU83ZmE3LV81Z0VpWVBrVE92SG1EUUloWU9ReFpFRnR4c3NGZyZsYWJlbD12aWRlb19jYXJkX2ltcHJlc3Npb24Sjg4IBBKJDmh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BhZ2VhZC9pbnRlcmFjdGlvbi8_YWk9Q29feTBUVVZSYWZ2bURNS092cjBQeDV6RTJRR0w2N0draEFHMng0bjdrUlN3a0I4UUFTQUFZTE9RV29JQkYyTmhMWEIxWWkwMk1qRTVPREV4TnpRM01EUTVNemN4b0FIbmw4UC1BNmtDNEc5eWN1Q19zejZvQXdTcUJQb0RUOUM4aFBsVnlQcjc1WEE1Y1BxaFNqb3FXOGtvNmhTMl9uaTVrR2RfVldja21iOFhqTnUweXJCTDJ0elpMOEdmQXUtQ1JEYTh1dEE0dlJGYmVnb2tKMDZjejFTVWFZTDRicDB3VDJkS0xORGdFNVRpbXlQWmdwUzIwa2FNeVIxWHF2VFhjVktYNGhDU0RFOGZqZ05XeHRTYmdDVkdERDZoZi1sOGVnb2VZNW42dnAtR0JjTW84MjVGN1NHaWFfTEdRcm5ZeXdDRU9HQXhyX3h2eVZwUTZyZnJCQTRDS0NVLW5CLWNvSjZoREg3NENwSTZRa1RYR0x0dW1KS2pJTEFubGNNM3Z6Rk5jdEZvSlhqSmJhLS0wYnZnUGVhdVhSaWVpN0w0eDUxTjF4M3U3cVVkR00yNHc2cm1Ud0lsZmtkZW5RS2lUTWVFTzdpcV82WkRRMlhuNUhtT041emI2NG8tb1I1UzJSbk9QRHpnZnlWOUloczFmUEVYSkFuTWRORUdISlhaTm5lSzdoc1F0R0xtZmdHRFljX0NpcUFILW1GRXBzQ2E4NnBHQnh1SGw1d1pDcUNPMW90UTJtX2RpSm8zckxpVU1mMGVILW5kVzZTelRXZ3RaMlNWOVJ2NF9pSkY2Q214X1M3SHRsSVJ3WkIyRmdpdTJpc2RxR0hyV3dvMEYybkVscklVUVE2YjJ3X3Jwc3hiU29GS2YzU01wQ2V0TXZnbUp5LUNtRXRDa20xOUFrNlI4Z3I2bDI0ZzZvS1JHUklHUC1FM05lWFpVeGc4eV9LX2g5cDlwLXdWUENaNmZjblBnRm0yWldQNWdpVWRSQ0NmQ1ZLVDJFS2IyVlBEejFHNC10TzJ5VHg5ZVJ0OTd4c3RFYmpVOG1RcnVlc1lIV2FnQmxTQUI0SG92QUdJQndHUUJ3S29CX0xBc1FLb0I3akVzUUtvQi1HMnNRS29CNlhQc1FLb0ItZWRzUUtvQi1pZHNRS29CLS0xc1FLb0JfQzFzUUtvQl9uVHNRS29CNFFJcUFlbTFMRUNxQWVvMGh1b0I3WUhxQWV3bTdFQ3FBZXVzYkVDcUFmbXZMRUNxQWZLdXJFQ3FBZjlzckVDcUFmM3VMRUNxQWY0dUxFQ3FBZkl6N0VDcUFmSno3RUNxQWZOeDdFQ3FBZngwYkVDcUFmODFiRUNxQWY3MWJFQ3FBZU0xckVDcUFlTDFyRUNxQWVkMTdFQ3FBZWQxTEVDcUFlQnhodW9CX3l2c1FLb0ItUFpHNUlJQzFCMVdtVmxWMUp4VTFsSnFBZ0IwZ2dzQ0FBUUFoaGFNZ0VBT2hHUDBJQ0FnSUFFZ01DQWdJQ0FnSUFDS2tqWm9OSTFVQlJZMkt2VnZjWGdrUVB5Q0I5allTMTVkQzFvYjNOMExYQjFZaTA0TVRVM016WTFOREV6TWpZek1qSXp5QWtEeUFrWXlBbVBBY2dKa0FHaEM0aGhETDlGM1hvRnVndG1DQUVRQVJnV0lBRW9BVEFRUUFGSUFXQUFhQUJ3QW9nQkFKZ0JBYUlCTXdvZUlBUGF1QVFZTWhZNkZBb1NLREJJcWU3QzI2NGFtQmVCamFjOW1Ca0FHQUVnQUZnQllBQndBZEFCQWFnQ0JjQUNBcWdCQWRnQkFZQUNBWWdDRWJvREJYWnBkSEJsMGd3Q0VBRzRFX19fX19fX19fX19fd0dJRkFHd0ZBSEFGY21BZ0VDUUZnR0tGeFlJQXhnQklBRW9BVEFCT0FGQUFVZ0JVQUZZQVdBQ29CY0JxUmYtaDk2XzlCZkYwYm9YQkNnQU1BQSZzaWdoPTVUR1YzQnY1VEpvJmNpZD1DQUVTcFFIZzlnekJVWGNaU0RGX0xfekp4Nm5mMFUwR25ST2JjczRZeGJyeU01TDFlNHdRY2pzRW1FQlU3ZDlEYnU4UFlNZ3gxV3QxZ3VoWE9LQXh0cFVVczk1Zy1wUDNZX3haNDVqb1FWYzM5S09qTUJweHFkdEIxcjRobUhKZk91eU5RcTFRbnVOM1RKOTAydDFBNlN6ZE9TNUlONmpjdzVWUTMtd1VyQ2VIUHJSRjNJNFVycG5HdUNvdGdSaU83ZmE3LV81Z0VpWVBrVE92SG1EUUloWU9ReFpFRnR4c3NGZyZsYWJlbD12aWRlb19jYXJkX2Rpc21pc3MSlQ4IBRKQDmh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BhZ2VhZC9pbnRlcmFjdGlvbi8_YWk9Q29feTBUVVZSYWZ2bURNS092cjBQeDV6RTJRR0w2N0draEFHMng0bjdrUlN3a0I4UUFTQUFZTE9RV29JQkYyTmhMWEIxWWkwMk1qRTVPREV4TnpRM01EUTVNemN4b0FIbmw4UC1BNmtDNEc5eWN1Q19zejZvQXdTcUJQb0RUOUM4aFBsVnlQcjc1WEE1Y1BxaFNqb3FXOGtvNmhTMl9uaTVrR2RfVldja21iOFhqTnUweXJCTDJ0elpMOEdmQXUtQ1JEYTh1dEE0dlJGYmVnb2tKMDZjejFTVWFZTDRicDB3VDJkS0xORGdFNVRpbXlQWmdwUzIwa2FNeVIxWHF2VFhjVktYNGhDU0RFOGZqZ05XeHRTYmdDVkdERDZoZi1sOGVnb2VZNW42dnAtR0JjTW84MjVGN1NHaWFfTEdRcm5ZeXdDRU9HQXhyX3h2eVZwUTZyZnJCQTRDS0NVLW5CLWNvSjZoREg3NENwSTZRa1RYR0x0dW1KS2pJTEFubGNNM3Z6Rk5jdEZvSlhqSmJhLS0wYnZnUGVhdVhSaWVpN0w0eDUxTjF4M3U3cVVkR00yNHc2cm1Ud0lsZmtkZW5RS2lUTWVFTzdpcV82WkRRMlhuNUhtT041emI2NG8tb1I1UzJSbk9QRHpnZnlWOUloczFmUEVYSkFuTWRORUdISlhaTm5lSzdoc1F0R0xtZmdHRFljX0NpcUFILW1GRXBzQ2E4NnBHQnh1SGw1d1pDcUNPMW90UTJtX2RpSm8zckxpVU1mMGVILW5kVzZTelRXZ3RaMlNWOVJ2NF9pSkY2Q214X1M3SHRsSVJ3WkIyRmdpdTJpc2RxR0hyV3dvMEYybkVscklVUVE2YjJ3X3Jwc3hiU29GS2YzU01wQ2V0TXZnbUp5LUNtRXRDa20xOUFrNlI4Z3I2bDI0ZzZvS1JHUklHUC1FM05lWFpVeGc4eV9LX2g5cDlwLXdWUENaNmZjblBnRm0yWldQNWdpVWRSQ0NmQ1ZLVDJFS2IyVlBEejFHNC10TzJ5VHg5ZVJ0OTd4c3RFYmpVOG1RcnVlc1lIV2FnQmxTQUI0SG92QUdJQndHUUJ3S29CX0xBc1FLb0I3akVzUUtvQi1HMnNRS29CNlhQc1FLb0ItZWRzUUtvQi1pZHNRS29CLS0xc1FLb0JfQzFzUUtvQl9uVHNRS29CNFFJcUFlbTFMRUNxQWVvMGh1b0I3WUhxQWV3bTdFQ3FBZXVzYkVDcUFmbXZMRUNxQWZLdXJFQ3FBZjlzckVDcUFmM3VMRUNxQWY0dUxFQ3FBZkl6N0VDcUFmSno3RUNxQWZOeDdFQ3FBZngwYkVDcUFmODFiRUNxQWY3MWJFQ3FBZU0xckVDcUFlTDFyRUNxQWVkMTdFQ3FBZWQxTEVDcUFlQnhodW9CX3l2c1FLb0ItUFpHNUlJQzFCMVdtVmxWMUp4VTFsSnFBZ0IwZ2dzQ0FBUUFoaGFNZ0VBT2hHUDBJQ0FnSUFFZ01DQWdJQ0FnSUFDS2tqWm9OSTFVQlJZMkt2VnZjWGdrUVB5Q0I5allTMTVkQzFvYjNOMExYQjFZaTA0TVRVM016WTFOREV6TWpZek1qSXp5QWtEeUFrWXlBbVBBY2dKa0FHaEM0aGhETDlGM1hvRnVndG1DQUVRQVJnV0lBRW9BVEFRUUFGSUFXQUFhQUJ3QW9nQkFKZ0JBYUlCTXdvZUlBUGF1QVFZTWhZNkZBb1NLREJJcWU3QzI2NGFtQmVCamFjOW1Ca0FHQUVnQUZnQllBQndBZEFCQWFnQ0JjQUNBcWdCQWRnQkFZQUNBWWdDRWJvREJYWnBkSEJsMGd3Q0VBRzRFX19fX19fX19fX19fd0dJRkFHd0ZBSEFGY21BZ0VDUUZnR0tGeFlJQXhnQklBRW9BVEFCT0FGQUFVZ0JVQUZZQVdBQ29CY0JxUmYtaDk2XzlCZkYwYm9YQkNnQU1BQSZzaWdoPTVUR1YzQnY1VEpvJmNpZD1DQUVTcFFIZzlnekJVWGNaU0RGX0xfekp4Nm5mMFUwR25ST2JjczRZeGJyeU01TDFlNHdRY2pzRW1FQlU3ZDlEYnU4UFlNZ3gxV3QxZ3VoWE9LQXh0cFVVczk1Zy1wUDNZX3haNDVqb1FWYzM5S09qTUJweHFkdEIxcjRobUhKZk91eU5RcTFRbnVOM1RKOTAydDFBNlN6ZE9TNUlONmpjdzVWUTMtd1VyQ2VIUHJSRjNJNFVycG5HdUNvdGdSaU83ZmE3LV81Z0VpWVBrVE92SG1EUUloWU9ReFpFRnR4c3NGZyZsYWJlbD12aWRlb19jYXJkX2hlYWRsaW5lX2NsaWNrEpkOCAcSlA5odHRwczovL3d3dy55b3V0dWJlLmNvbS9wYWdlYWQvaW50ZXJhY3Rpb24vP2FpPUNvX3kwVFVWUmFmdm1ETUtPdnIwUHg1ekUyUUdMNjdHa2hBRzJ4NG43a1JTd2tCOFFBU0FBWUxPUVdvSUJGMk5oTFhCMVlpMDJNakU1T0RFeE56UTNNRFE1TXpjeG9BSG5sOFAtQTZrQzRHOXljdUNfc3o2b0F3U3FCUG9EVDlDOGhQbFZ5UHI3NVhBNWNQcWhTam9xVzhrbzZoUzJfbmk1a0dkX1ZXY2ttYjhYak51MHlyQkwydHpaTDhHZkF1LUNSRGE4dXRBNHZSRmJlZ29rSjA2Y3oxU1VhWUw0YnAwd1QyZEtMTkRnRTVUaW15UFpncFMyMGthTXlSMVhxdlRYY1ZLWDRoQ1NERThmamdOV3h0U2JnQ1ZHREQ2aGYtbDhlZ29lWTVuNnZwLUdCY01vODI1RjdTR2lhX0xHUXJuWXl3Q0VPR0F4cl94dnlWcFE2cmZyQkE0Q0tDVS1uQi1jb0o2aERINzRDcEk2UWtUWEdMdHVtSktqSUxBbmxjTTN2ekZOY3RGb0pYakpiYS0tMGJ2Z1BlYXVYUmllaTdMNHg1MU4xeDN1N3FVZEdNMjR3NnJtVHdJbGZrZGVuUUtpVE1lRU83aXFfNlpEUTJYbjVIbU9ONXpiNjRvLW9SNVMyUm5PUER6Z2Z5VjlJaHMxZlBFWEpBbk1kTkVHSEpYWk5uZUs3aHNRdEdMbWZnR0RZY19DaXFBSC1tRkVwc0NhODZwR0J4dUhsNXdaQ3FDTzFvdFEybV9kaUpvM3JMaVVNZjBlSC1uZFc2U3pUV2d0WjJTVjlSdjRfaUpGNkNteF9TN0h0bElSd1pCMkZnaXUyaXNkcUdIcld3bzBGMm5FbHJJVVFRNmIyd19ycHN4YlNvRktmM1NNcENldE12Z21KeS1DbUV0Q2ttMTlBazZSOGdyNmwyNGc2b0tSR1JJR1AtRTNOZVhaVXhnOHlfS19oOXA5cC13VlBDWjZmY25QZ0ZtMlpXUDVnaVVkUkNDZkNWS1QyRUtiMlZQRHoxRzQtdE8yeVR4OWVSdDk3eHN0RWJqVThtUXJ1ZXNZSFdhZ0JsU0FCNEhvdkFHSUJ3R1FCd0tvQl9MQXNRS29CN2pFc1FLb0ItRzJzUUtvQjZYUHNRS29CLWVkc1FLb0ItaWRzUUtvQi0tMXNRS29CX0Mxc1FLb0JfblRzUUtvQjRRSXFBZW0xTEVDcUFlbzBodW9CN1lIcUFld203RUNxQWV1c2JFQ3FBZm12TEVDcUFmS3VyRUNxQWY5c3JFQ3FBZjN1TEVDcUFmNHVMRUNxQWZJejdFQ3FBZkp6N0VDcUFmTng3RUNxQWZ4MGJFQ3FBZjgxYkVDcUFmNzFiRUNxQWVNMXJFQ3FBZUwxckVDcUFlZDE3RUNxQWVkMUxFQ3FBZUJ4aHVvQl95dnNRS29CLVBaRzVJSUMxQjFXbVZsVjFKeFUxbEpxQWdCMGdnc0NBQVFBaGhhTWdFQU9oR1AwSUNBZ0lBRWdNQ0FnSUNBZ0lBQ0tralpvTkkxVUJSWTJLdlZ2Y1hna1FQeUNCOWpZUzE1ZEMxb2IzTjBMWEIxWWkwNE1UVTNNelkxTkRFek1qWXpNakl6eUFrRHlBa1l5QW1QQWNnSmtBR2hDNGhoREw5RjNYb0Z1Z3RtQ0FFUUFSZ1dJQUVvQVRBUVFBRklBV0FBYUFCd0FvZ0JBSmdCQWFJQk13b2VJQVBhdUFRWU1oWTZGQW9TS0RCSXFlN0MyNjRhbUJlQmphYzltQmtBR0FFZ0FGZ0JZQUJ3QWRBQkFhZ0NCY0FDQXFnQkFkZ0JBWUFDQVlnQ0Vib0RCWFpwZEhCbDBnd0NFQUc0RV9fX19fX19fX19fX3dHSUZBR3dGQUhBRmNtQWdFQ1FGZ0dLRnhZSUF4Z0JJQUVvQVRBQk9BRkFBVWdCVUFGWUFXQUNvQmNCcVJmLWg5Nl85QmZGMGJvWEJDZ0FNQUEmc2lnaD01VEdWM0J2NVRKbyZjaWQ9Q0FFU3BRSGc5Z3pCVVhjWlNERl9MX3pKeDZuZjBVMEduUk9iY3M0WXhicnlNNUwxZTR3UWNqc0VtRUJVN2Q5RGJ1OFBZTWd4MVd0MWd1aFhPS0F4dHBVVXM5NWctcFAzWV94WjQ1am9RVmMzOUtPak1CcHhxZHRCMXI0aG1ISmZPdXlOUXExUW51TjNUSjkwMnQxQTZTemRPUzVJTjZqY3c1VlEzLXdVckNlSFByUkYzSTRVcnBuR3VDb3RnUmlPN2ZhNy1fNWdFaVlQa1RPdkhtRFFJaFlPUXhaRUZ0eHNzRmcmbGFiZWw9dmlkZW9fY2FyZF9pbXByZXNzaW9uX2dhbGxlcnkSlw4ICRKSDmh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BhZ2VhZC9pbnRlcmFjdGlvbi8_YWk9Q29feTBUVVZSYWZ2bURNS092cjBQeDV6RTJRR0w2N0draEFHMng0bjdrUlN3a0I4UUFTQUFZTE9RV29JQkYyTmhMWEIxWWkwMk1qRTVPREV4TnpRM01EUTVNemN4b0FIbmw4UC1BNmtDNEc5eWN1Q19zejZvQXdTcUJQb0RUOUM4aFBsVnlQcjc1WEE1Y1BxaFNqb3FXOGtvNmhTMl9uaTVrR2RfVldja21iOFhqTnUweXJCTDJ0elpMOEdmQXUtQ1JEYTh1dEE0dlJGYmVnb2tKMDZjejFTVWFZTDRicDB3VDJkS0xORGdFNVRpbXlQWmdwUzIwa2FNeVIxWHF2VFhjVktYNGhDU0RFOGZqZ05XeHRTYmdDVkdERDZoZi1sOGVnb2VZNW42dnAtR0JjTW84MjVGN1NHaWFfTEdRcm5ZeXdDRU9HQXhyX3h2eVZwUTZyZnJCQTRDS0NVLW5CLWNvSjZoREg3NENwSTZRa1RYR0x0dW1KS2pJTEFubGNNM3Z6Rk5jdEZvSlhqSmJhLS0wYnZnUGVhdVhSaWVpN0w0eDUxTjF4M3U3cVVkR00yNHc2cm1Ud0lsZmtkZW5RS2lUTWVFTzdpcV82WkRRMlhuNUhtT041emI2NG8tb1I1UzJSbk9QRHpnZnlWOUloczFmUEVYSkFuTWRORUdISlhaTm5lSzdoc1F0R0xtZmdHRFljX0NpcUFILW1GRXBzQ2E4NnBHQnh1SGw1d1pDcUNPMW90UTJtX2RpSm8zckxpVU1mMGVILW5kVzZTelRXZ3RaMlNWOVJ2NF9pSkY2Q214X1M3SHRsSVJ3WkIyRmdpdTJpc2RxR0hyV3dvMEYybkVscklVUVE2YjJ3X3Jwc3hiU29GS2YzU01wQ2V0TXZnbUp5LUNtRXRDa20xOUFrNlI4Z3I2bDI0ZzZvS1JHUklHUC1FM05lWFpVeGc4eV9LX2g5cDlwLXdWUENaNmZjblBnRm0yWldQNWdpVWRSQ0NmQ1ZLVDJFS2IyVlBEejFHNC10TzJ5VHg5ZVJ0OTd4c3RFYmpVOG1RcnVlc1lIV2FnQmxTQUI0SG92QUdJQndHUUJ3S29CX0xBc1FLb0I3akVzUUtvQi1HMnNRS29CNlhQc1FLb0ItZWRzUUtvQi1pZHNRS29CLS0xc1FLb0JfQzFzUUtvQl9uVHNRS29CNFFJcUFlbTFMRUNxQWVvMGh1b0I3WUhxQWV3bTdFQ3FBZXVzYkVDcUFmbXZMRUNxQWZLdXJFQ3FBZjlzckVDcUFmM3VMRUNxQWY0dUxFQ3FBZkl6N0VDcUFmSno3RUNxQWZOeDdFQ3FBZngwYkVDcUFmODFiRUNxQWY3MWJFQ3FBZU0xckVDcUFlTDFyRUNxQWVkMTdFQ3FBZWQxTEVDcUFlQnhodW9CX3l2c1FLb0ItUFpHNUlJQzFCMVdtVmxWMUp4VTFsSnFBZ0IwZ2dzQ0FBUUFoaGFNZ0VBT2hHUDBJQ0FnSUFFZ01DQWdJQ0FnSUFDS2tqWm9OSTFVQlJZMkt2VnZjWGdrUVB5Q0I5allTMTVkQzFvYjNOMExYQjFZaTA0TVRVM016WTFOREV6TWpZek1qSXp5QWtEeUFrWXlBbVBBY2dKa0FHaEM0aGhETDlGM1hvRnVndG1DQUVRQVJnV0lBRW9BVEFRUUFGSUFXQUFhQUJ3QW9nQkFKZ0JBYUlCTXdvZUlBUGF1QVFZTWhZNkZBb1NLREJJcWU3QzI2NGFtQmVCamFjOW1Ca0FHQUVnQUZnQllBQndBZEFCQWFnQ0JjQUNBcWdCQWRnQkFZQUNBWWdDRWJvREJYWnBkSEJsMGd3Q0VBRzRFX19fX19fX19fX19fd0dJRkFHd0ZBSEFGY21BZ0VDUUZnR0tGeFlJQXhnQklBRW9BVEFCT0FGQUFVZ0JVQUZZQVdBQ29CY0JxUmYtaDk2XzlCZkYwYm9YQkNnQU1BQSZzaWdoPTVUR1YzQnY1VEpvJmNpZD1DQUVTcFFIZzlnekJVWGNaU0RGX0xfekp4Nm5mMFUwR25ST2JjczRZeGJyeU01TDFlNHdRY2pzRW1FQlU3ZDlEYnU4UFlNZ3gxV3QxZ3VoWE9LQXh0cFVVczk1Zy1wUDNZX3haNDVqb1FWYzM5S09qTUJweHFkdEIxcjRobUhKZk91eU5RcTFRbnVOM1RKOTAydDFBNlN6ZE9TNUlONmpjdzVWUTMtd1VyQ2VIUHJSRjNJNFVycG5HdUNvdGdSaU83ZmE3LV81Z0VpWVBrVE92SG1EUUloWU9ReFpFRnR4c3NGZyZsYWJlbD12aWRlb19jYXJkX2VuZGNhcF9bQUNUVFlQRV0SmA4ICBKTDmh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BhZ2VhZC9pbnRlcmFjdGlvbi8_YWk9Q29feTBUVVZSYWZ2bURNS092cjBQeDV6RTJRR0w2N0draEFHMng0bjdrUlN3a0I4UUFTQUFZTE9RV29JQkYyTmhMWEIxWWkwMk1qRTVPREV4TnpRM01EUTVNemN4b0FIbmw4UC1BNmtDNEc5eWN1Q19zejZvQXdTcUJQb0RUOUM4aFBsVnlQcjc1WEE1Y1BxaFNqb3FXOGtvNmhTMl9uaTVrR2RfVldja21iOFhqTnUweXJCTDJ0elpMOEdmQXUtQ1JEYTh1dEE0dlJGYmVnb2tKMDZjejFTVWFZTDRicDB3VDJkS0xORGdFNVRpbXlQWmdwUzIwa2FNeVIxWHF2VFhjVktYNGhDU0RFOGZqZ05XeHRTYmdDVkdERDZoZi1sOGVnb2VZNW42dnAtR0JjTW84MjVGN1NHaWFfTEdRcm5ZeXdDRU9HQXhyX3h2eVZwUTZyZnJCQTRDS0NVLW5CLWNvSjZoREg3NENwSTZRa1RYR0x0dW1KS2pJTEFubGNNM3Z6Rk5jdEZvSlhqSmJhLS0wYnZnUGVhdVhSaWVpN0w0eDUxTjF4M3U3cVVkR00yNHc2cm1Ud0lsZmtkZW5RS2lUTWVFTzdpcV82WkRRMlhuNUhtT041emI2NG8tb1I1UzJSbk9QRHpnZnlWOUloczFmUEVYSkFuTWRORUdISlhaTm5lSzdoc1F0R0xtZmdHRFljX0NpcUFILW1GRXBzQ2E4NnBHQnh1SGw1d1pDcUNPMW90UTJtX2RpSm8zckxpVU1mMGVILW5kVzZTelRXZ3RaMlNWOVJ2NF9pSkY2Q214X1M3SHRsSVJ3WkIyRmdpdTJpc2RxR0hyV3dvMEYybkVscklVUVE2YjJ3X3Jwc3hiU29GS2YzU01wQ2V0TXZnbUp5LUNtRXRDa20xOUFrNlI4Z3I2bDI0ZzZvS1JHUklHUC1FM05lWFpVeGc4eV9LX2g5cDlwLXdWUENaNmZjblBnRm0yWldQNWdpVWRSQ0NmQ1ZLVDJFS2IyVlBEejFHNC10TzJ5VHg5ZVJ0OTd4c3RFYmpVOG1RcnVlc1lIV2FnQmxTQUI0SG92QUdJQndHUUJ3S29CX0xBc1FLb0I3akVzUUtvQi1HMnNRS29CNlhQc1FLb0ItZWRzUUtvQi1pZHNRS29CLS0xc1FLb0JfQzFzUUtvQl9uVHNRS29CNFFJcUFlbTFMRUNxQWVvMGh1b0I3WUhxQWV3bTdFQ3FBZXVzYkVDcUFmbXZMRUNxQWZLdXJFQ3FBZjlzckVDcUFmM3VMRUNxQWY0dUxFQ3FBZkl6N0VDcUFmSno3RUNxQWZOeDdFQ3FBZngwYkVDcUFmODFiRUNxQWY3MWJFQ3FBZU0xckVDcUFlTDFyRUNxQWVkMTdFQ3FBZWQxTEVDcUFlQnhodW9CX3l2c1FLb0ItUFpHNUlJQzFCMVdtVmxWMUp4VTFsSnFBZ0IwZ2dzQ0FBUUFoaGFNZ0VBT2hHUDBJQ0FnSUFFZ01DQWdJQ0FnSUFDS2tqWm9OSTFVQlJZMkt2VnZjWGdrUVB5Q0I5allTMTVkQzFvYjNOMExYQjFZaTA0TVRVM016WTFOREV6TWpZek1qSXp5QWtEeUFrWXlBbVBBY2dKa0FHaEM0aGhETDlGM1hvRnVndG1DQUVRQVJnV0lBRW9BVEFRUUFGSUFXQUFhQUJ3QW9nQkFKZ0JBYUlCTXdvZUlBUGF1QVFZTWhZNkZBb1NLREJJcWU3QzI2NGFtQmVCamFjOW1Ca0FHQUVnQUZnQllBQndBZEFCQWFnQ0JjQUNBcWdCQWRnQkFZQUNBWWdDRWJvREJYWnBkSEJsMGd3Q0VBRzRFX19fX19fX19fX19fd0dJRkFHd0ZBSEFGY21BZ0VDUUZnR0tGeFlJQXhnQklBRW9BVEFCT0FGQUFVZ0JVQUZZQVdBQ29CY0JxUmYtaDk2XzlCZkYwYm9YQkNnQU1BQSZzaWdoPTVUR1YzQnY1VEpvJmNpZD1DQUVTcFFIZzlnekJVWGNaU0RGX0xfekp4Nm5mMFUwR25ST2JjczRZeGJyeU01TDFlNHdRY2pzRW1FQlU3ZDlEYnU4UFlNZ3gxV3QxZ3VoWE9LQXh0cFVVczk1Zy1wUDNZX3haNDVqb1FWYzM5S09qTUJweHFkdEIxcjRobUhKZk91eU5RcTFRbnVOM1RKOTAydDFBNlN6ZE9TNUlONmpjdzVWUTMtd1VyQ2VIUHJSRjNJNFVycG5HdUNvdGdSaU83ZmE3LV81Z0VpWVBrVE92SG1EUUloWU9ReFpFRnR4c3NGZyZsYWJlbD12aWRlb19jYXJkX2VuZGNhcF9pbXByZXNzaW9u","sodarExtensionData":{"siub":"56-y-0RG","bgub":"FF1-5JtC2VBc7GSN7irVwHzw27djPdnk41iTcQ2F4lQ","scs":"BeDBBTUVRafvmDMKOvr0Px5zE2QEAAAAAOAE","bgp":"dcZapfiUFfOb923tN6knT9IVFXLsFTosj/VR9Oh/bDs5iRJCcHEvks/Rw1TA0DTXCzWzlSjT71lGjIfhMXKRJHzW12CGJZMUFI9kHlmfF9KQabK0MWiobQs8EfdEEuZOIFRhnHVUxSUbO6exdgbbPHpCUZMWkmZ5anWmE2GISBzvYZhyNOa3wK3f+3ye4Rz6Fl4aZ6OuULtlEmuDpdPwOnQ3pYgNIUHM4/rcGdkcruBB2q3U4bSnfNGGW56bwoDPWu2+HKdkt5Amro6awT1d+MGuG/VS06tS1yPDNmwiF24RJ9QxtmOlrYdLyViK4aSGhx7ubvm+IO5g7+OwzkXerTvhZyFPe04JDEJppzV0IKVGQRLP6O1gr4Ppcpf358FEl0RNI0i6NsFUWLi/ND2+eS/YERnPWNE0SPuNBvNK6cYDVQwEVSGXRaBuFLRw/s8ZPKH6LUeSnqgXliOyOn07LWReU9x0ymKSTJU97p0Hl5/T9FtU0Zwnmf9AOOBl0tcaEJCZUyAtyJ43bRVWZC5MmUdkfHt3z4GZSs0g/DeoYLGfgkdLBpaFMvs0QCLNDJVQKNI5dTBag9++0SyMBhB00JRINYHUFFJlar3wDVSGN+AH2ZCHYReVDpRTKxPakiB+0uMPqmovmy6YVxxczXxhHO0OgSnQN8ve5BBT1b06HyPGY0wp8cYCIQ+yLJLQKxTi9FlCAP9wxK/RfI15jRD6vGSXiYLspPDgBia1Yh1oKlCOGXbHLC2MCPElDyXv2L37tL53RDZHkm4u2yoStcKER6njdZTiOgDPAlLN7guH1/zmpCgxkGMObvlp6CtoNVcAv4NuGXIgAX+2dvKfv5BSwEzy1iG3kHFhHQHjb8XT8urIYAN9Z1Vc4CM1s7+Bt22rocIaR2nIgPG2bblJjC6DN9sBIKoGrj4IiGy9g4zUMhNkrxMtK3/L7W7F55e/Y3Nqf2MR+0/XAatbmWRqf3TqbU+u7Uf1hay0u4yE9gdPuQ8CMLhma1YHO2jDVsxS8JIsOvqO/wdfjAxYyVr9ALmo9kMHjQZyFPPSZro+F68D9xZ+Hrq/rX0/B/j7tuvnZ+7yW1X8QWwpUaCXe8g22iY9XtFIHcVBE2n5gzUhIXAfDXrY0SSoe3cvsiDd2jXuSui2NfsSnm0ZDpJTaFoFXSHBO3gEXy6ZO8gr2zP8dVS2gTDDwi+89aFRp+fSJyGpmd8/HqXHGDLCAI86fq8WQhycazYTOneT1oWBFO7hJPYQR4uNjnLYa2qYvP8pZw2JQszThJqtweSkgpf1wvanexgPY7aTeDtzma5u6cy56OYIaqlEMvqJgcxMlhrOdA4lh9hhyCN5z3whMfRcKmlyFYtsyiiM34yagscw6vUXY10XN2ew8etusaeO03pUzOAhOy44rLu6KZcnCluYzQIEj+pG/FdcA3LOa/OoFgXNTeYheLYGh7hxjRzsJO2XvE5myqZcTgtf1KhhxwYPhjQ9omm23D9D4EF27/1vk7Ek18KeWcDZomY/fZcn4XNfrh6DlnhjTr6dRqCa6zsi3kPZDal2jeigxQHJHRkgHUaHxwiBD3qPxG9Phrre8uG+e5u+M2pAOpoBuWrQFVbpHuzLh7E3s5q6dIlBO4REnJWFKtscrHvzSmQn6ovYJ93boAaRleq0PdZpt6La2DbSJ6xsKTu7A1NKEZ7Falu6+wwcHGgObPcyCvDU6NK1kCMrZAHrN5mfoRt9UUcFlOyd26c7+Fu7rKvVZ6STgYJUr5z7BGhMd1GUHU6E0/0t2ILv2uzZZ8qESDCAczVqyKebWaGgI7BWTEG1Y5Uc02hILEJvt5vXRUT4oitMU8xCoeAjeG3+puGdppUzcL1hc0XN8bGOTpLDg1UVq+B1vL+eqAsHXRkqetDQiHZWv1B5JPYDyGVWODXf6oqazQVvbFKCKFS/mnh//FWJjYsDRnpQWFKZ9CGCO9vhh6OdEivTdDIM7FsjzuXSCCxeNni0Y4J5vO1sLIiaDvvgJOlN73dNKRvHZ5pqKV/JCwoKZxs/xBbFmTAWPAIiLGww0RV0966C1Savq1W1Ux0nfc0ufgN90Qju+8GDXHEzJWUltRQi8i+aaSCKUf/PxWZ0uqs+fSaDWe0HIzuBmwMkCvzQ1PRlNPRcLW1AeWdIXvkpmulXbaiXEjZT0wg014qF9IwsDYc54s2oqsYuu6g9AI+4ngyOUkSuq4WAAr3wyZr8BbsxBwJIY1DAjrxvBFljZgD/Il/eo2DLMJSJUyKerZQbY2pSNaDh2uGrINr0VfUlXQW7hV9ZcX18ZW+iig988qsjWy/PEyyg2xFLZpgNXrKsy/9t347W+GUxMZWJR5plWwYb2isl0dHfWeqi3lVRSNVleK9B7D4n6pPsfC7RfX8SQ1g/CtwQGXkzJCRh/TtQoIIlQbaXdwTP9uqSpgpnMU93SXatdK0J/kFekChPlyXlvu9QKLERdfox0DUvwB83KgTkc9T4qiOX+j7T5x1FOTy2uCwx3WWiKQNNWxGeVpy1EvSyqBOjmCMtYe2Y6KqbAR1J9+XbkYZ2N7cghH109nlEC75AeJkKUOzLTK0CBI64JkLvWbwSMMi3SP2VUknDfRIGgOWzARMhmMbonayG5c5//dbrPhxlZwSCXSWazLmFZXLibVoMQsEn+5dbpAcTNksO98RnX4l0yCG/eZNTNp21EV8fbFcXOQNJBJg3rS9rW8r4ERflQ1u1TmHOYLrSKK1dg6vXkYGVOoMyP4Z2G4lQDmL4r5/FM94SH3SKg8LNedpxtOhbEHGAVbl6sFb+FIJiPRCq9Y0MIKf8zUk57112x8CDoGb8r1z/wTESrMAD20NgzNTrHdyq/zRwtw2RjRMZ+TclYKcUB14hd1iJNzlyMnEr8XXlyL9U5MhMPO/fsl3eDEvO0s3G87X7o6zsIYdo1NWKCihV8XYxqSFhBDk1IFitKMXuQ3S9FWxYy9pm9mOpixnfJaT5fr97JyKAjYn2tevsVN8qSDgMOE8gDJYRgWQ7gnm7jdBOrh7mR4yMsQI5afDO2zcurolUNiewEnChtbiALbyCHiAp/LRYAm/qYx1tI5Gt3AEpJWmtNrVTDDcfFWXIYlLkyS8heyXofNViMXQ+43gJTTxaLNa4dPYhwNQkBSm21xmrP7Erao0bKW8Df9PhxpLq9tEIeiWWvz3UeFTQJ5Sd234bc25+Op3oBnpkJXwV06fQ7uUYPmov3r87/OhVSm9yWlgbNxdP3XGg4dOylNhFtpIDkekPOmt/0/3eWOhmX1CisKER4bx85KlWSDNHXPc3yjwuIG5ey2+nm8gko65103mElzebxJXsYGq+Rfbnf/RXlX2pV8w+Cby/zCxWl4y2zerSlmysefeGYQ0gXYugIwhuGd8MzFGlnLU1d5yDjpQuJ/YhnhCb+bebS0JjZkb9CJB3QXzqcSiR22lEaw/u2udyv1NwUdAJx+EPg8zadAopO2OnL0wiUuSIZg2qc+ojZ/4Vls7TNIb/GpiyXpz/YKqu+hgHSrbrOOsF1edDBvjK3YxnYOiviljFc6YegGPyjD0j7mi+GJsRTPAa7VErDdB02WEuQMPthpljzt8ObvuZV1pjIQSihW7hoZn5qFhfd78WtH7sSy74vLwguRjjLcbhU12HBfm/zlimNieZ/7cLKRZAU823i4BD3mZUKqsN5aVUBaFroxOH1aftDEK4jSKQ/9Spy4AFMb1PvRgxkacf0NYWPafaSLu920C+ZIm44CAqrZlj/bjBpMKjuO4dIV8+rCMhGpCpv3nfb28PhaMSsJt92nox368aOZYlB1kwzckbb4ae7TJkF/lYKT65EgzEA9uuHpHHxG2rnm9msp2uHvCkT+HpHQ4LlGTLK5wWZsPwAToMTNi4E7BHVmZCs+CvVFFz1oYDOKFK4VOu8DOZGUtI+VC7hqmql92af5BzRY9+ay74O+qRNK6OS9C/BW2w93EvsBMKamtayHzCkYBkoWSfpTjbUbvUEk17MuFTDSSv4DX6XNBTyUsh7GDFW0wsJktN5gvW4iSpM45kWxw6xxO3mvsHSeQY3Zh0DR2u3DpVO26P01eKlRb2lKIYM7tnm+iNP2pSyh0q71rioUM98Z1rzfZ4EIDAfnujk07bi+G52N0aFTwlbR02knkNUd+9Ta15tsFlZ8SOcsIe9dqZREBgg4yuIt/YeKlIRlDKGZGmGe5GNmm/m1N/smpmWAfHjPLY1hsCpKMfObRrKLx8VnU6z9LzQQrELbXOpXXgfxqoZnQANCaHMaC9BcR4HwNBJIkZBmOPkxeGqMYIfVXs/ixQS+sDDsR6cujj560O/FRpcETurEfzrivmT68+IGTgKRTwpBzieXmvzJWlxrhoH9hgJFor4AN7NnoxMRFXBXTUniUXj51z69xasC6pp1dwhb48qcSkK3L9WVYgi+86h8aRBJU6AqZlD3Q25vSAPKmRad0w1jyCkwE6BUydzundgKfF/Xn5UsGKIlorVKTvqWZ2oIj0+QYDGs3KHVuArNDgHYPahh5xHS13bPGPmZ/vPE5VhLJXRYDPXvWjZA2KgqgG/oV6EU6Pr9sfCnPoWyU7Y1tKKG6xd+RApXz9s0Pk1DGl/MkA9eKXobAssC+92sNI6Evi+iBMlNvmsddGMjesUJ5OYRRX+s3YlESISEzkvo8eLF+97UBlSaIcHUyH44b1g2eTbsA4NxqGb7HImPHsolgrrQsZWcH7FhoKTpi5jrZDJdBpxT76ijBhUoYaXSrrSWWFPZC4j0vkaaJi8CdC401xRhq2ztqEFhjibkun4uu8pYayrjY0VsReoJX4FwhxiXhYj5d6/cCLfwIwVuLnxsuvmgwOIwK9qFqoT+Ul0rpDbx+NZRjxCipRxO/NwyKn+N3ExhJOgNCoh8MiALe6nOGHII3UJQSea8MUrp+iLJCTwu6Xkm/S0oeh7MtbvtorFItQgikPQlyhLq8PucsTtl2Qb0nrrBLq+SK28wo3OuAFVktlJM4tB8FrhdnroTdzTmpQ7OBHoNfHCEJ+HOJzn0t1Yzcq0eDVZZJDWcPAXWLjiySAjB5qYN5UbFVVyUGRvtZi1pc2k/ykj5t1hHo8ZQDPz9ZkYRGPZVFV28UBi8HfyQyaVsRCN9KQGLJXE0w1bfshf9GJQDt38G0yRxxSi/AB9F73sTSOZ6h33sMxaAlnhIQe+atchbJkX1QY3sW5oIqTIVnuxFX0MHw8Tr5U7jfSYprxXgz7NrksLJQIl3tw6ABURMhOfhJxFeoEK/AlTamU3xDjdeRxl8W0zf/dz0GNjVQY2B5eN/uzWkRXdtGD2wPTbcwHV+vMTi1acwusICrXRb88rwjVnQuUP0dbZGiTliCrukL09TneyJMNNSBIv76mQ0nwQdyp37rH/BIwcr9k1ewfIrV1w7icUMBDuzvWXV43Ayr4oo711fv7J6ZkMnjLmpL7NIiSNrcOSnUEw4EtUlPMmBRUFnIezK/X2BjZ3/TO8AbO7B4jrqvgDF0CG0m7EaOudwG0D41zYYZTmX3JBAT4ekmg0hJ0ggQsg84ZvR2zfJLDrLG6ZhR38X/LBJNzaq92Upd9pu0TyuNcC63TLBVIE5YAGGPDLU9TWPcnDQr9bKCxAHpXO0m0MreP9qVDQkPTlmWRqEV3x8y+JXRqs7KdVzr2PleewWuO2HFDxWL313gmARgAjCKCgvV7GwGH9DbXsqvUSaq1/EhTIeYOHcj00wyNPnjNa4lem5LEe70y2QLfRIN/zhuPVDUwBBT2JJkvKCMiCqTTGgXxgPNHAdg/wtJipQAb3NUartT/rfnPElAjWV1XJD36kI3/Dtnf1aowKN2GVPNFWVlBbrwmd8RQ7uGqos10ze27rsqWSxQsckjJAFuyqT7po2I/cMyrFC73n3lZtpLCb2eB0VyeQpUZsLjJWtdKjjBybUy5bxg7/9Rgz24vM1S6pVdmBg411ucpVVTOO5ytVkMuTY1YoX/Fe7X+JUHd6rxocXYh47iBTJIo6TDDqw+Hcw6DDEdakcmDcf1SjiNVcWkOQYIu2+fPzKYUhF0pDabD/DV5C4nLyXvLuPoLzMmB4R13qklYHP6O/TTQ3BZDL+pI4a0+w0tm5gpnkw507ZDTLuPqsTHbZ/v0m5DDJ76W7aqoLoBQAHkdLJ690myPx6BDdATA1zGY2Gq4MkAdWnXWYlvlNq5mJPYvQlzan5LqWHJxMdr7Dj2ftCJV5sSvTiG65/piXNmwhsFdMiQbZVDYK8fZA8oP99cG+dgDCzzty/jXSvv1WurXZCdjNYgfXOxFGBU7AnDE3hdUvqOx/TCffFPLpQS/2wmhSNyLWE1IdElg9ukIB70nxqJl4/Wl8mcfMjYyIA1cUF4CoH+R6t1y7V0fIPWzPRZB8BKtXNO6Zh23CtK9DiDt4srH5wVCGvmbtE9HeO6U6Nk423zpQmYkeBQ8MYduC+/XGBMMUXDziyDCIHLFhssUNkCcIYYqmnlS93paArX40Ia6s63WZLfiv//OQbgLvXHRdo7MMy4Dsedn4VOCj7uLtjZWixHtA+0Hax6znFlnV/C2/BZW0xezQXjTCv0heMiBRa3rYMx+nZFP6CvsMvKwtuyVO0erEPcHAlBK8YEcJikPj+qUJbaBedDyr/aFgxSOcySgO/PpbmHkUMLoTUC3ij+dX8w7XkFc8ZWfNRJgOYt+PIeRK3ehquX/9PfqlMKsEDP9YD+XlcXz2c5+VBzuyeu5QnD5lkZYgWosNOWwR7es1zJfVqnLLKF8PpiOdzrBTX0BFby3NlbHtX+QWZTU2sINJVJ9XB0HYF3VkSVFdCtaOcyCyq3+0N6CMxOXhp7/hWeZyZvW1TlB434ywn6VxnzT/FQdBzU6sNgkyizSa1qy5+5f31zlhGdQouVNdL/xcLulOV14qb3e8SOapvGuahLzfL79JiUk8DhHcDHS9cD4cHXev4UdoeypMr1eCsXTfNJCte9fnOsSIP6dlIMzFOXPyy1JdxrnIaKP32UbUoqPRvGG53avpvoE+zedp/XO99y+LpOs59C7uRQy7Gt4sU+b0wse5cicdvV/pKxWYoXg/jhj+gO9IqLCf6SYX3c/p7PJl5FlCQRfBnLw6gS6qSvYrVZmyTk1euiaeFkz0LChi8LOQ7MrAcQpB95pN4x1X3RKD0uL9s3VObEWA0f+G/9Gq5x6FzCrm4aDuCcrsP92u34gqqIUNItidwJxhsNWsfSdXYPs0YiFmXQl+pnBsClEgZHAkvRonrbm3tcmZkr9XHDYeo/6LbpjehzyRCIiNovId2YTt5z5kTi5o0eI49aRXsOt3EO7Ud2Uc299zCg7AGoRrTzdeeYjWNP6Umo6IPQRmZQogfxYSi8nPmLbD/TXNbjLCj16fzodEomsGaxP5x/ZXDtaICup8havXVAj0Y1ip107v/QBX9ZLTb7G/yG96iikRBnoGpArWrAATcSRqX0Cyo761bfaeUWWniZpRxZg5umX1+Obq5wyrsOLbZwXo4egF0Jk8MkzkIS2Cva2BvWy4qYkP85Ey4Qj3nmKl/LwMps2aMCUjvh8xkb2hy7B+vLQccI9tWF0c8unQIGQO7TimKmv3j0m/m5RHU2sSLPSLakyJtoALhabhZTlDEBh9e9VDE0hP/6Zb0tPmjid4GNbsJ5bb8lug20dZ9kEP5gBepmwFjMT9SmtiSkQJPQWq2MqOOXiF8NDKXZiznf9vUR0liv9lg4mV1wfVWijKnkuLIW0LXOFjTqzshmiCj/eWsc3AW4Vk+OcK0F+IOKdEzowcdzstXupIXElyBfryQoM0+S9ofLbfWJaMpG3Nk04IznyDErdpi1SQNn4oJzNW+wo2qIOQJaXL111FWZcsQ0W2aKMF/MP+Vex6VnyV8E/w9GdSPs1wXH8VrW7sW8/B4ZEsBfvRmM1ShyH5tonAsC5Elr5N0ln/DCEoZiam4J5/hAaoE9CTmJZSesYQWbbT7fx+uRHZnWMhFhA51afoUmr7qes3ek2FKREeVx8UJmwfep2Z3Ery6/qKc6/7vOGOr8IQotZnyJK03azvcmLmQtr3MZhmGwr4BFmTM7Vt6qrMLi6mfRBskUFoslL18JiRYuozVIX44ThA4mVtmdz9Ykgd1AgU6T3WQuNuZJTGtDroCZTmHn7SE7GZjSKg6RkIxau0koVUb5EBCz7k611QsAyR/9EJzyK/X/dcKcySdFD8A8HZZucOZBOJpKa9RDpBd98SlqIjkEfcWTSi00Yuze/y6J1jb8DR2xIBTzLwC1zXMPjpTn9gV5uVuV0dL3gmkj2nouMO5Hheo6MwMITtCkMlfyg82q2qKW41pjZM6vL2igrz98laJc2utfkGeRzPQ3uYOknRR3a42fYWZyUHgQDufsDbS1iBJ58GCK5Co0mBKwkW6bw/A5o+LRFSz0y+3QSdy3BlWFMRivNuKgo3I5FPcfFMIaGK/kL4EH4DStC4QIRkJBneU3Go6qOvRsOBe0vFDWUDB9NM3YWh3ip5SGcSJe1/SmzsOy5BreNI5F1AeaW8naBBNig4is3Bso4xunBflTGPd6ubjGz+WlaIeu2Dqs2JUV8y0KGhrjqH4n/KQEr05TOeFm1q5XiFYZPhzj6dSbaHdl7ABtuY1eLI8Wf/2y9vOrIAHoF+a6lswWu5wZkNK8YRVKXeiWDo32WYNkKfOzJAqaCjIO/YeZ/3GKvv+kRvmUPUt8sTg/vGUoArXtHxlhcSnDjRCqMrOIRS0CihXYRwm7Q+FoelUfRcfyWyDcWqRCbr+0FoCt7YRafRPqCOQJQ2/Ftwg46OPt3+B5+bhM9fAjHL6z2r0DkyEHzyieDsCFxr1zt8dmrnfg7pTLlWHIK3r1GVT7F+604L2CGYgOxYkP8LsP+c5Ec9Ww7PuXNLhRzpMBh9JTzWW0/I2oMAfTkrC/REXpyENhpKPAsNiYfiGup0Fa1wv+9JNR9henIa57Sq3Ia4al4FIrHABMznNBHHFFrvte9ca82anulIDgoQ/8sfzx0qRk97D0azUicp8R/TtvpuC8yWrIhnLWNrqKXPezDmONdGZh5UhoTbD9PXcO9OEApYpvrqHJJDfBLFz+faKyqLXLsFJflRmUAYCQ6Hoo7b+mZwiVCeAxGInaVh5d0mzOF1vME1k8GtcWquYzULMWlVEqoW2VbGJFaxZcWWRK72bgI0gC7YsTI5zPbfaBs69MagsFEBj5IHNjBPkre0AGVwKniIiIoPsu2jXnkKe4OyGx/2vLyX3TdtX+HsA+NLj4Fp1l5qLV4kQlx/HY/bwz9whM2BiAUFspBsogN6tD3Bm6lPj0/oqzUPGCQNKIgv0e8O/9zdjh+Q1SLzXQD/McdDvehh4BZjLPtbPy68kvLRNKEwCNquuC3GjLvKlrzIGBrHxd8eNTHU3DqRoguy1oRRnxdKkE/qTRHLYhfn5mCNaWOsUUJm963XNODYBN9k2wIhlh4PnyE9pUuNgJLg40As+YX4sTlwNL6rh8QbvB5xPQL9JIV0w2BrmPtdNAXr4/QoKBYYBOGvS6iHIGeA2jikhkO8L/BhsLwopF70waHwb86zDnGZbRbb9g1Vv+0L49gcTg07rnCHnhRax3GhxF7wKgMbtidw/LZ5EEu6JFcZ+n2Pf1/jiCVHCl4UPkfSlBjlNt/mlLWOgYNZAamrvU8aNH1OUeXoY5VIl+fUSPbESRgW6LbePolD9M6XtmSeZl/1N0zZE/u3X509BppUvcoq/TY2BQrDH3/tRJY1V45DlJ2pm7gRw/fFXz58JTSlJm3/0tifncSoWsfDIOrbfWGY8dkEvWFH8hgIj0yjQk5jBywCReyCiZjAlnyYAecyGbZgKRKN4iQowjozNCSB2Fb39wxWrRgLcxQTo0n4R/222wr9NPKXvBhFCXyLqwgchlQ6KW1Mz70or924X1tzAXA0gAe4202yVl9z8y/tYJjC0axDhQIf60fL/Dx5NSdnN9ag5giuLRfuUzbDScxHOainaGVuLIQ5UGf1KABFa/nVMdANqJSKSzRxyF89NyMQWjmaG4Rkc80LSTmqLAORYMOdyvUPubjmYqM+vBWXeSZ8Ivo5cFdSslQ6xotTdEGZ1lDfeX15YMp8zc3tgk8LBwZdcDC8alW4NVx0I9btxCijdd0vbNsgf9HK4o+X/4Rfv+UGXliceVVBvvejkRUqZGcbdHaG8zf9dIIzufHiCsISjqk5gdxF+jQWjOTF6rrOU2cGqMV1zydkZKMqMTxlAu7/PV0+NYq/7tByl9FAgI81pyq60dPjLMwRrUrguECk3/gz+7j5Z7qH4sBSpJ1LuDI1pkQlvLp0TwTXv7IjZomVndCGec8IaFh1C5Rlwoiar2Isk9gV6ncxGDrfFvHsaVoNbMmWpz7GIi3IbQd72lH3glENQIlfDVFCYBF7c3L5q63ogHwUjYW8mN+jmZMz1C3i9PIwHoU043ZqqeGO87Bbn8mFuo3meJ9d28tzipK4UZCt42DosDimKA5IEh7Xmeve38w1PH6QN/84gTMcmwmDtliDYqIa9kaPQNtLRaP1gtBMPSqwK0EvfsKQRfD+VuZH0IWaqv053TS3UAqRBNkNhhgBuY+9p/Qmm6cikQUZK8HlQirsf6KwwyjtkWFtx8rzDLRNtVf6EIBcYa3dURTVvU1zb9Mrn1bg8EgprfM8xJOwDbjTOqQUMLotthJ3Q71xYEPjWQiKwMPLP1qOcQxGaZO6fcayILvndDM39niUStASyyhNR7FvTZyXeN3nWyQkYRDGFBP7pZd0+kdDDh6UqIYitY2zo/kQ/yAlriB8EnftZPaBV4WnmCiGQ9CIsGETAXYABaq+p4ZOn6g2Go2nBtTZdF3NmEdnoa8MlOJF9uSMSFP24na67AcnT6XP7efrEvVaFJn2MPKPp3x+g45myuE4F0wI2N3NyrD1yInmjdiRWkDJZDrGtZznKqUf01WluapgF02C+yH7OJcQNyzxQ7djhR7+cXEZGJZfEEArfJERmL7pzz1qk6zL/TofLO1/VSlm6eDhvvfL/JZJp0WpqLYDVHgVbJyl5PaIrLRGn1657ASwj8w6ke4Ath+3ItdtiYdI4sB40HG0//pOXCBS4J1R7FfGh+jvtdygO3WArtw/enepLmUnEMkdUQy4RnsyB5fa6VVzgUxYTfDqp2i9CQHdlj1z+uB1jWSFOmp2Sf0c1aqoHvZWqtYm1C/fnS96S8RVvWqzEGCR188s8qJLhwYLKsrfkvkLI277dNV7HuEDSwnmzK7KZo0/Pai+Q1UJn8sMG4Gxjv1tR2D1vFRgjA3r/M0Khi3Gu9tYmxIxt9K0IjnWO4Jmvx15lvWZxltP22rrrsQ8GqHk0uNV6ihYXsg+5DsgTLNYrdlG/rNC52mVP6r66V1x+DjPXRRzo2I8qVMbjfVMmHEzrVuFWDOXz3bBWZNcBQsMJ5n+ACCURB/LIRV0ZpQrk+caM5gQGEiT0j6+03beigUMU8/KPRJheyLDmf1viEB2fdmWQ6ANMdOTFUp4pO2vHprSNJeyY6F1fjKWKqDQ7a9l0rgFvo+U1cTaDO/lmT/jVEeOYjPCpS4ebzA2BUE6Z80iPxRI7D+PvbrguNzcocLUnrdJplsiNTzo/zSA61/xyYd/jBHxpDssTs/1cbETcEN41ceD/Dd6+yBC5oa4MeatJb5ZJztjmUobr8vy/TqFXIzgChlD17A12iK04wy3cfjV5HNeDuBypRHois0OiXRfM9McTaU0oHZiKlbNcA/8dTgv2ZQpaWXyCRl+v3mtLP9yg/rJEUOh2XkJTXa/6S/4YSfIbYCc5MK/YyPw372IplwsVOY0CkwohQTFY8sWz2aMlgKjlgtztDdaKytNxZuCIdYEnXdDk9MB+N46KWlWeBoTsjf4AxP2cQcThfRpvisPXJO7qambrhwdkm6sCkJ0TLf4XawXkWuFfU4O+FRqobg6ABUkO1daK7ma2TlfmBHb+dLIEUFtk12lVCJl+geaW23Elp037MB/69yFE+rXJvQPAKFezHl8gOYxwQ0bhAU4Mb1O6qHtQEbLEmaZdxgP145xpiJVTcAJeuEOI6fDmokJgnQuRmaYxh9TMORYULTn4ru85RsIaX93SnIlD0VwgqDg4a9C2a6jrJhJmN05Ic2Jfpt0vauEYSe6Dl5FBFgaYrXNoJLMlRzH81PGWQCjxUK4xhAYAwIY+Top9Z31d5HzYbfEbJCVsBkGTwoKCJ4X/gbL6Ag+rSnNRpsSZTuT1jO8dq6/fK6wZfyBSoL3ePl7VbypAlrpfMymgvqFRqgeia1NW8p3R19yOLR9aDWACbv/AA3gMcoMT0HpwHkVyGCR0zrAVvD9lHiUbd+soK40sjuzm4u/NCgToV67nNHrW8cgZWhypC3Ba0YnCOM/SyCoH0vuM+1ojMIy0Gtfvvubj44xeH61CbQQQ4qxB2HcUlzDT82RMAfubifFhoYetOqhAyicoknsy/KeKnlRM2NJlYSgpWcoxXdgop/sWztEoQbp83q+lmB0+UWRqFmkme88co2BqVXRN4xuVITS27dXaBdQdczKLFgf3rDkv0WGUUn8/EBKVYS5oJYiPHCUeKlRoTwT7zCICh9lWr/pdWKCjPbZruq28y5X2lMluXh1IACU/EUkwQVvkarAEmJ8mVWjAePdO1sX5LrvKlnGJ156nQuoChX8bYAP5d0d51iJBNNPPSmflpIlD+fQN+36QyjjCUdt1e4RvbmL3nVJvudq5lDV11nXSS83hPdLFNkHhaqUmkEby2ruQbNXibw1yLWbo2GPKhAA58Y/aMfMWnahvGb5D+dQm4osLD9ZciKWJSawTwi0kAwxUN2TzEYm5B7x2Bt9zoxJ2ah07r0PQgFE83z9tsr75KLrEN4jY8bvsNH+QJyJUUw9wQZq1zHqjRTU+Rpu1V2GnAROaBeEWrjpWw5GbBMaIEcBOwoulNa6SJ5ZEnYFQsoJRsh5T8jAkDHQ2rLug9luTBkwxHar+FrODNPrsPnrHadPiYZDw/ad8defk+zlJh1sXGJlqG0XS0YPFxXKzGThNcDI8KblD3a/G4qJj3FK+6jNRwd1yILgZeC/Orvq9nKS79KGhK1Vng9VavKC7kC3fbDncOXTotY4zofYQG5eJp5eqCMAnleiFebpsgvMCNy1pCJw4HSIsCU9LV4yKgyagdz8l/LuTOIXLISHRjl++ScfRIeOUypjwFx8V/3LSrpbs6JAsZ8JDaA+d6Jn2HirTeTy1QUbI3njHHixZ41UmxxylTQcorWHUgTylc8jiSBntF383s7IFSCitMyCbPVm1xv4CDASHx+r4enENFYSMcFDnOEa8OLiSNnkGSP6SjcCOhXYI7fD2yZC+iy5ltTioutjMcoudlScQ0S7CF7cnAjYSM4gPCI9Kz5x4SDG7YAHWhNBvcmM9kBWyZSwNaZQAAWQH4Y4/KHTPSsjckkPbxwx9OSQ1Eo4y0SwlyLWaToEUpMjVBdn96+F/fORHQf2CPml3fEE+UdLpuCN6ySvT+5h4SHszkCmaMedxUXQwd37cf3BndPu/EMQba8irJ9aE+NeWpZdxE88DG5cugnY0eDOiIrNjsQqMmMh7PFWCqDDqX/RykbE5tSPMBTDPty2zbs9squ9laQA=="},"externalVideoId":"PuZeeWRqSYI","adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgWShMIu8HVvcXgkQMVQoevAR1HDjEbUgYQAUgBWAFoAXAs"},"layoutId":"MNlGMXcyGjz7h0BA"}}}},{"playerBytesAdLayoutRenderer":{"adLayoutMetadata":{"layoutId":"FzrMLJiW4sTTGFjG","layoutType":"LAYOUT_TYPE_MEDIA_BREAK","adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgWShMIu8HVvcXgkQMVQoevAR1HDjEbUgYQAUgBWAFoAXAq"}},"renderingContent":{"adActionInterstitialRenderer":{"durationMilliseconds":7000,"completionCommands":[{"clickTrackingParams":"CIMBEOXQAiITCJuG1L3F4JEDFdyF6QUdtPw4xMoBBOxNbzI=","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_COLLAPSED"}}],"trackingParams":"CIMBEOXQAiITCJuG1L3F4JEDFdyF6QUdtPw4xA==","abandonCommands":{"commands":[{"clickTrackingParams":"CIMBEOXQAiITCJuG1L3F4JEDFdyF6QUdtPw4xMoBBOxNbzI=","loggingUrls":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_abandon\u0026ad_mt=%5BAD_MT%5D\u0026ad_tos=%5BAD_TOS%5D\u0026ad_wat=%5BAD_WAT%5D\u0026final=%5BFINAL%5D\u0026ad_cpn=%5BAD_CPN%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"pingingEndpoint":{"hack":true}}]},"skipPings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=videoskipped\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D\u0026ad_cpn=%5BAD_CPN%5D"}],"layoutId":"FzrMLJiW4sTTGFjG"}}}},{"playerBytesAdLayoutRenderer":{"adLayoutMetadata":{"layoutId":"UG6uWzLEXnMlvRUD","layoutType":"LAYOUT_TYPE_MEDIA","adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgEShMIu8HVvcXgkQMVQoevAR1HDjEbUggQAUACSAFYAVgCaAFwLA=="}},"renderingContent":{"instreamVideoAdRenderer":{"skipOffsetMilliseconds":5000,"pings":{"impressionPings":[{"baseUrl":"https://www.youtube.com/pagead/adview?ai=CetDtTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBIAET9C8hPpVyAgSut6E0p5_IqZKYfNrrUjltEKD0yAjBi0eo_9W0pODw50NhoiTFfvfT7_Kcz-R_IBi9ythO0d6b3mV4hPEPcjCVNtxDVJOMvu9Rd7YoWSf0tyB22vNkkcdkM6dMgvf4hquaxdB-hJRwu7fjxxAMjCqJ_xoaTQaJoP4vNGUDZo34Gwx7CGhaPLHaeDEziqDOCUxr_xvyVpS6rfrBA8Yf1Fz3HbJ-sLOAXz-DpgyQUrZA_Aj98z1eu11mOgFsDxkap4sUW_SVvn-iPP8FrPgUgWZi5ugj4FP1grHtehKXpr_rar6Txwnf1hcnxv1CJbGVOzk8rNPQ0ri5mjEJ4Tb-bI_7wGUqGXmLy6otEsHIRkgN6YbPhBjF6pAC47E1lm78RgT6iGmJAKBdISVhroeoHVI7Maasa-wbH56-iomMqCDjou1Ha0vPqb4fqlQQVtcnxiMqieyuGrYZGSUABoN_SJHHSpE_i7HQ1HkwpB24wtb2SsdXWIeWAo04moxlbIUtA1u2A_rU86uSYFLind5pyetx_vTJC-CTUi3kU19901k8Qr6Ym3V6YKR7BHzPOE3wOYsUBj8PvFfQWfLPAqtOSJwU-TAOJIBCy741e-f4Kq1ug0s2bqq2Sq9yGKe0uFlTNBBXYeaS-KgIIJLK83fQHyL53L9f1jwCg_ABKLW28CGBYgFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgHq8UbqAfj2RuoB7epsQKoB5e6sQKoB-mrsQKSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLeAgBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgWoAgC1AuPHGUDdAhbzDzugAwC6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA0hcKEgLwWRihASIBAA\u0026sigh=Kx2SDAeB2Gk\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026lact=%5BLACT%5D"},{"baseUrl":"https://www.youtube.com/api/stats/ads?ver=2\u0026ns=1\u0026event=2\u0026device=1\u0026content_v=_FHqOHJefI8\u0026el=detailpage\u0026ei=TUVRadurC9yLpt8PtPnjoQw\u0026devicever=2.20251222.04.00\u0026bti=9477942\u0026format=15_2_1\u0026break_type=1\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=0\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=h.3.0.0\u0026slot_pos=1\u0026slot_len=2\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]\u0026ad_cpn=[AD_CPN]\u0026ad_id=%2C733762687807\u0026ad_len=35000\u0026ad_mt=[AD_MT]\u0026ad_sys=YT%3AAdSense-Viral%2CAdSense-Viral\u0026ad_v=EC018ZtNXaA\u0026aqi=TUVRafvmDMKOvr0Px5zE2QE\u0026ad_rmp=1\u0026sli=1\u0026slfs=1\u0026loginael=1"}],"errorPings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=videoplayfailed%5BERRORCODE%5D"}],"mutePings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=admute\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"unmutePings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=adunmute\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"pausePings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=adpause\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"rewindPings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=adrewind\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"resumePings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=adresume\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"skipPings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=videoskipped\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D\u0026ad_cpn=%5BAD_CPN%5D"}],"closePings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=adclose\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"progressPings":[{"baseUrl":"https://www.google.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026label=video_10s_engaged_view\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D","offsetMilliseconds":10000},{"baseUrl":"https://www.google.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_engaged_view\u0026ctype=110\u0026ms=%5BCLICK_MS%5D","offsetMilliseconds":30000}],"activeViewViewablePings":[{"baseUrl":"https://www.youtube.com/pcs/activeview?xai=AKAOjsvh8ILNwBXgv9C52ZfokabBfRkCfH-YFrDKMUUuLxirBvrTvpExdQ8Ybi1WVvgz3FDFqKQjhJeij1B1VVxqjuLZXLfFHtHfpmTGWQoW01GYzjdNqrvLH49sc_B6bI_AMQDRTysAV1rtAJslqs40uANYYEY\u0026sig=Cg0ArKJSzNNPGh06ixX2EAE\u0026ad_cpn=%5BAD_CPN%5D\u0026id=lidarv\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"activeViewMeasurablePings":[{"baseUrl":"https://www.youtube.com/pcs/activeview?xai=AKAOjsvh8ILNwBXgv9C52ZfokabBfRkCfH-YFrDKMUUuLxirBvrTvpExdQ8Ybi1WVvgz3FDFqKQjhJeij1B1VVxqjuLZXLfFHtHfpmTGWQoW01GYzjdNqrvLH49sc_B6bI_AMQDRTysAV1rtAJslqs40uANYYEY\u0026sig=Cg0ArKJSzNNPGh06ixX2EAE\u0026ad_cpn=%5BAD_CPN%5D\u0026id=lidarv\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D\u0026avm=1"}],"abandonPings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_abandon\u0026ad_mt=%5BAD_MT%5D\u0026ad_tos=%5BAD_TOS%5D\u0026ad_wat=%5BAD_WAT%5D\u0026final=%5BFINAL%5D\u0026ad_cpn=%5BAD_CPN%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"activeViewFullyViewableAudibleHalfDurationPings":[{"baseUrl":"https://www.youtube.com/pcs/activeview?xai=AKAOjsvh8ILNwBXgv9C52ZfokabBfRkCfH-YFrDKMUUuLxirBvrTvpExdQ8Ybi1WVvgz3FDFqKQjhJeij1B1VVxqjuLZXLfFHtHfpmTGWQoW01GYzjdNqrvLH49sc_B6bI_AMQDRTysAV1rtAJslqs40uANYYEY\u0026sig=Cg0ArKJSzNNPGh06ixX2EAE\u0026ad_cpn=%5BAD_CPN%5D\u0026id=lidarv\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D\u0026avgm=1"}],"completePings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=videoplaytime100\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D\u0026ad_cpn=%5BAD_CPN%5D"}],"activeViewTracking":{"trafficType":"ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO","identifier":"c2724464-be87-4f16-a5bf-fab3263eabf9"}},"clickthroughEndpoint":{"clickTrackingParams":"CIIBEPn3ASITCJuG1L3F4JEDFdyF6QUdtPw4xMoBBOxNbzI=","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026adclksrc=%5BCLICK_SOURCE%5D\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026adclksrc=%5BCLICK_SOURCE%5D\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D","target":"TARGET_NEW_WINDOW"}},"csiParameters":[{"key":"ad_at","value":"15_2_1"}],"playerVars":"suppress_creator_endscreen=1\u0026is_trueview_action=1\u0026length_seconds=35\u0026video_id=EC018ZtNXaA\u0026encoded_ad_playback_context=CA8QAhgBKgtfRkhxT0hKZWZJOEIXVFVWUmFmdm1ETUtPdnIwUHg1ekUyUUVYAWABdfnfdj-AAbiRAooDKyAQMAE4BEoTCLvB1b3F4JEDFUKHrwEdRw4xG1IIEAFAAkgBWAFYAmgBcCyQA7-mqL2tFQ%253D%253D\u0026ad_query_id=TUVRafvmDMKOvr0Px5zE2QE\u0026break_type=1\u0026adformat=15_2_1\u0026player_response=%7B%22responseContext%22%3A%7B%22serviceTrackingParams%22%3A%5B%7B%22service%22%3A%22GFEEDBACK%22%2C%22params%22%3A%5B%7B%22key%22%3A%22is_alc_surface%22%2C%22value%22%3A%22false%22%7D%2C%7B%22key%22%3A%22is_viewed_live%22%2C%22value%22%3A%22False%22%7D%2C%7B%22key%22%3A%22ipcc%22%2C%22value%22%3A%220%22%7D%2C%7B%22key%22%3A%22wh_paused%22%2C%22value%22%3A%220%22%7D%2C%7B%22key%22%3A%22logged_in%22%2C%22value%22%3A%221%22%7D%5D%7D%2C%7B%22service%22%3A%22CSI%22%2C%22params%22%3A%5B%7B%22key%22%3A%22c%22%2C%22value%22%3A%22WEB%22%7D%2C%7B%22key%22%3A%22cver%22%2C%22value%22%3A%222.20251222.04.00%22%7D%2C%7B%22key%22%3A%22yt_li%22%2C%22value%22%3A%221%22%7D%2C%7B%22key%22%3A%22GetPlayer_rid%22%2C%22value%22%3A%220xa20b027020d27683%22%7D%5D%7D%2C%7B%22service%22%3A%22GUIDED_HELP%22%2C%22params%22%3A%5B%7B%22key%22%3A%22logged_in%22%2C%22value%22%3A%221%22%7D%5D%7D%2C%7B%22service%22%3A%22ECATCHER%22%2C%22params%22%3A%5B%7B%22key%22%3A%22client.version%22%2C%22value%22%3A%222.20251222%22%7D%2C%7B%22key%22%3A%22client.name%22%2C%22value%22%3A%22WEB%22%7D%5D%7D%5D%2C%22maxAgeSeconds%22%3A21540%2C%22mainAppWebResponseContext%22%3A%7B%22datasyncId%22%3A%22115922182847223597940%7C%7C%22%2C%22loggedOut%22%3Afalse%2C%22trackingParam%22%3A%22kx_fmPxhoPZRDPbqIWHdzCFSse57byjtrrgckMmyHL4YsbzRgkuMsNLBwOcCE59TDtslLKPQ-SS%22%7D%2C%22webResponseContextExtensionData%22%3A%7B%22webResponseContextPreloadData%22%3A%7B%22preloadMessageNames%22%3A%5B%22miniplayerRenderer%22%2C%22offlineabilityRenderer%22%2C%22playerCaptionsTracklistRenderer%22%2C%22playerMicroformatRenderer%22%2C%22cardCollectionRenderer%22%2C%22cardRenderer%22%2C%22simpleCardTeaserRenderer%22%2C%22infoCardIconRenderer%22%5D%7D%2C%22hasDecorated%22%3Atrue%7D%7D%2C%22playabilityStatus%22%3A%7B%22status%22%3A%22OK%22%2C%22playableInEmbed%22%3Atrue%2C%22offlineability%22%3A%7B%22offlineabilityRenderer%22%3A%7B%22offlineable%22%3Atrue%2C%22formats%22%3A%5B%7B%22name%22%3A%7B%22runs%22%3A%5B%7B%22text%22%3A%22Full+HD+%281080p%29%22%7D%5D%7D%2C%22formatType%22%3A%22HD_1080%22%2C%22availabilityType%22%3A%22OFFLINEABILITY_AVAILABILITY_TYPE_PREMIUM_LOCKED%22%2C%22savedSettingShouldExpire%22%3Afalse%7D%2C%7B%22name%22%3A%7B%22runs%22%3A%5B%7B%22text%22%3A%22High+%28720p%29%22%7D%5D%7D%2C%22formatType%22%3A%22HD%22%2C%22availabilityType%22%3A%22OFFLINEABILITY_AVAILABILITY_TYPE_PREMIUM_LOCKED%22%2C%22savedSettingShouldExpire%22%3Afalse%7D%2C%7B%22name%22%3A%7B%22runs%22%3A%5B%7B%22text%22%3A%22Medium+%28360p%29%22%7D%5D%7D%2C%22formatType%22%3A%22SD%22%2C%22availabilityType%22%3A%22OFFLINEABILITY_AVAILABILITY_TYPE_FREE%22%2C%22savedSettingShouldExpire%22%3Atrue%7D%2C%7B%22name%22%3A%7B%22runs%22%3A%5B%7B%22text%22%3A%22Low+%28144p%29%22%7D%5D%7D%2C%22formatType%22%3A%22LD%22%2C%22availabilityType%22%3A%22OFFLINEABILITY_AVAILABILITY_TYPE_FREE%22%2C%22savedSettingShouldExpire%22%3Atrue%7D%5D%2C%22clickTrackingParams%22%3A%22CAcQxzciEwiayum9xeCRAxXchekFHbT8OMQyC29mZmxpbmVsaXN0ygEE7E1vMg%3D%3D%22%7D%7D%2C%22miniplayer%22%3A%7B%22miniplayerRenderer%22%3A%7B%22playbackMode%22%3A%22PLAYBACK_MODE_ALLOW%22%7D%7D%2C%22contextParams%22%3A%22Q0FFU0FnZ0M%3D%22%7D%2C%22streamingData%22%3A%7B%22expiresInSeconds%22%3A21540%2C%22formats%22%3A%5B%7B%22itag%22%3A18%2C%22url%22%3A%22https%3A%2F%2Frr2---sn-1p2oxucq-q5js.googlevideo.com%2Fvideoplayback%3Fexpire%3D1766955437%5Cu0026ei%3DTUVRadrvINyLpt8PtPnjoQw%5Cu0026ip%3D137.59.180.209%5Cu0026id%3Do-ABzMy3i_FihMXecJ8uHOBQvg69kU8N1C58bmoSfx_ttV%5Cu0026itag%3D18%5Cu0026source%3Dyoutube%5Cu0026requiressl%3Dyes%5Cu0026xpc%3DEgVo2aDSNQ%253D%253D%5Cu0026cps%3D63%5Cu0026met%3D1766933837%252C%5Cu0026mh%3D63%5Cu0026mm%3D31%252C29%5Cu0026mn%3Dsn-1p2oxucq-q5js%252Csn-h557sn66%5Cu0026ms%3Dau%252Crdu%5Cu0026mv%3Dm%5Cu0026mvi%3D2%5Cu0026pl%3D24%5Cu0026rms%3Dau%252Cau%5Cu0026ctier%3DL%5Cu0026initcwndbps%3D700000%5Cu0026siu%3D1%5Cu0026bui%3DAYUSA3AghNRTuemanUDUTMJnyNYtMQcW_7CQfOjGLkeuVbORVPlTO055aMl74UWCLzsXMWx7Og%5Cu0026spc%3DwH4QqzassC4gfw9r8EOGuUhSiGlmYXYIykZmyOLkj8Bxo7w96LUNugRO4Q%5Cu0026vprv%3D1%5Cu0026svpuc%3D1%5Cu0026mime%3Dvideo%252Fmp4%5Cu0026ns%3D63rf5iIAh5spZ6SI3UEgpnMR%5Cu0026rqh%3D1%5Cu0026gir%3Dyes%5Cu0026clen%3D2705409%5Cu0026ratebypass%3Dyes%5Cu0026dur%3D35.136%5Cu0026lmt%3D1760318912119607%5Cu0026mt%3D1766933352%5Cu0026fvip%3D1%5Cu0026fexp%3D51355912%252C51552689%252C51565115%252C51565682%252C51580968%5Cu0026c%3DWEB%5Cu0026sefc%3D1%5Cu0026txp%3D4530534%5Cu0026n%3DKk1X7z-uQJN5j7tG7N%5Cu0026sparams%3Dexpire%252Cei%252Cip%252Cid%252Citag%252Csource%252Crequiressl%252Cxpc%252Cctier%252Csiu%252Cbui%252Cspc%252Cvprv%252Csvpuc%252Cmime%252Cns%252Crqh%252Cgir%252Cclen%252Cratebypass%252Cdur%252Clmt%5Cu0026sig%3DAJfQdSswRQIgP4AG3owiz9zPZylIk0xX_rhNsXHMNUIv5AA1VVtR7zcCIQDmg6KSgiWhhcAo2TQ7APZS6EIdL7aLi-xbcyqdA-92cg%253D%253D%5Cu0026lsparams%3Dcps%252Cmet%252Cmh%252Cmm%252Cmn%252Cms%252Cmv%252Cmvi%252Cpl%252Crms%252Cinitcwndbps%5Cu0026lsig%3DAPaTxxMwRgIhAKVfguC5rCOoKCpujJP6h8GkU4u9OtW0tFh6q7O8pgctAiEA-FztyU0ATCvjfw0VlF3-48GMezhsaYPfBOURc-PmTqo%253D%22%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22avc1.42001E%2C+mp4a.40.2%5C%22%22%2C%22bitrate%22%3A617039%2C%22width%22%3A640%2C%22height%22%3A360%2C%22lastModified%22%3A1760318912119607%2C%22contentLength%22%3A2705409%2C%22quality%22%3A%22medium%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22360p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A615985%2C%22audioQuality%22%3A%22AUDIO_QUALITY_LOW%22%2C%22approxDurationMs%22%3A35136%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_360P%22%7D%5D%2C%22adaptiveFormats%22%3A%5B%7B%22itag%22%3A313%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A17809347%2C%22width%22%3A3840%2C%22height%22%3A2160%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A219%7D%2C%22indexRange%22%3A%7B%22start%22%3A220%2C%22end%22%3A338%7D%2C%22lastModified%22%3A1760326120249410%2C%22contentLength%22%3A67877729%2C%22quality%22%3A%22hd2160%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%222160p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A15481292%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_2160P%22%7D%2C%7B%22itag%22%3A401%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22av01.0.12M.08%5C%22%22%2C%22bitrate%22%3A19822595%2C%22width%22%3A3840%2C%22height%22%3A2160%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A700%7D%2C%22indexRange%22%3A%7B%22start%22%3A701%2C%22end%22%3A816%7D%2C%22lastModified%22%3A1760320699871886%2C%22contentLength%22%3A52578831%2C%22quality%22%3A%22hd2160%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%222160p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A11991978%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_2160P%22%7D%2C%7B%22itag%22%3A271%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A8798524%2C%22width%22%3A2560%2C%22height%22%3A1440%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A219%7D%2C%22indexRange%22%3A%7B%22start%22%3A220%2C%22end%22%3A336%7D%2C%22lastModified%22%3A1760320227856882%2C%22contentLength%22%3A31772091%2C%22quality%22%3A%22hd1440%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%221440p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A7246457%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_1440P%22%7D%2C%7B%22itag%22%3A400%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22av01.0.12M.08%5C%22%22%2C%22bitrate%22%3A7043538%2C%22width%22%3A2560%2C%22height%22%3A1440%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A700%7D%2C%22indexRange%22%3A%7B%22start%22%3A701%2C%22end%22%3A816%7D%2C%22lastModified%22%3A1760319198451251%2C%22contentLength%22%3A25241665%2C%22quality%22%3A%22hd1440%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%221440p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A5757022%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_1440P%22%7D%2C%7B%22itag%22%3A137%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22avc1.640028%5C%22%22%2C%22bitrate%22%3A4389741%2C%22width%22%3A1920%2C%22height%22%3A1080%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A740%7D%2C%22indexRange%22%3A%7B%22start%22%3A741%2C%22end%22%3A856%7D%2C%22lastModified%22%3A1760319534429716%2C%22contentLength%22%3A15364254%2C%22quality%22%3A%22hd1080%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%221080p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A3504220%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_1080P%22%7D%2C%7B%22itag%22%3A248%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A2840366%2C%22width%22%3A1920%2C%22height%22%3A1080%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A219%7D%2C%22indexRange%22%3A%7B%22start%22%3A220%2C%22end%22%3A334%7D%2C%22lastModified%22%3A1760320616325336%2C%22contentLength%22%3A10764659%2C%22quality%22%3A%22hd1080%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%221080p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A2455162%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_1080P%22%7D%2C%7B%22itag%22%3A399%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22av01.0.08M.08%5C%22%22%2C%22bitrate%22%3A2167024%2C%22width%22%3A1920%2C%22height%22%3A1080%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A699%7D%2C%22indexRange%22%3A%7B%22start%22%3A700%2C%22end%22%3A815%7D%2C%22lastModified%22%3A1760320420857801%2C%22contentLength%22%3A8232401%2C%22quality%22%3A%22hd1080%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%221080p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A1877614%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_1080P%22%7D%2C%7B%22itag%22%3A136%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22avc1.4d401f%5C%22%22%2C%22bitrate%22%3A1809711%2C%22width%22%3A1280%2C%22height%22%3A720%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A738%7D%2C%22indexRange%22%3A%7B%22start%22%3A739%2C%22end%22%3A854%7D%2C%22lastModified%22%3A1760319371831415%2C%22contentLength%22%3A5432732%2C%22quality%22%3A%22hd720%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22720p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A1239076%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_720P%22%7D%2C%7B%22itag%22%3A247%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A1627047%2C%22width%22%3A1280%2C%22height%22%3A720%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A219%7D%2C%22indexRange%22%3A%7B%22start%22%3A220%2C%22end%22%3A334%7D%2C%22lastModified%22%3A1760321802583143%2C%22contentLength%22%3A6356438%2C%22quality%22%3A%22hd720%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22720p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A1449752%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_720P%22%7D%2C%7B%22itag%22%3A398%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22av01.0.05M.08%5C%22%22%2C%22bitrate%22%3A1171130%2C%22width%22%3A1280%2C%22height%22%3A720%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A699%7D%2C%22indexRange%22%3A%7B%22start%22%3A700%2C%22end%22%3A815%7D%2C%22lastModified%22%3A1760318866620777%2C%22contentLength%22%3A4683018%2C%22quality%22%3A%22hd720%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22720p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A1068084%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_720P%22%7D%2C%7B%22itag%22%3A779%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A696061%2C%22width%22%3A1080%2C%22height%22%3A608%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A219%7D%2C%22indexRange%22%3A%7B%22start%22%3A220%2C%22end%22%3A334%7D%2C%22lastModified%22%3A1760319174785226%2C%22contentLength%22%3A2304395%2C%22quality%22%3A%22large%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22480p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A525577%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_608P_SAVER%22%7D%2C%7B%22itag%22%3A780%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A983180%2C%22width%22%3A1080%2C%22height%22%3A608%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A219%7D%2C%22indexRange%22%3A%7B%22start%22%3A220%2C%22end%22%3A334%7D%2C%22lastModified%22%3A1760318941184684%2C%22contentLength%22%3A3803573%2C%22quality%22%3A%22large%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22480p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A867504%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_608P%22%7D%2C%7B%22itag%22%3A788%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22av01.0.04M.08%5C%22%22%2C%22bitrate%22%3A722486%2C%22width%22%3A1080%2C%22height%22%3A608%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A699%7D%2C%22indexRange%22%3A%7B%22start%22%3A700%2C%22end%22%3A815%7D%2C%22lastModified%22%3A1760319096720090%2C%22contentLength%22%3A2596776%2C%22quality%22%3A%22large%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22480p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A592262%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_608P%22%7D%2C%7B%22itag%22%3A135%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22avc1.4d401e%5C%22%22%2C%22bitrate%22%3A1164358%2C%22width%22%3A854%2C%22height%22%3A480%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A738%7D%2C%22indexRange%22%3A%7B%22start%22%3A739%2C%22end%22%3A854%7D%2C%22lastModified%22%3A1760319096903895%2C%22contentLength%22%3A3682181%2C%22quality%22%3A%22large%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22480p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A839817%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_480P%22%7D%2C%7B%22itag%22%3A244%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A904465%2C%22width%22%3A854%2C%22height%22%3A480%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A219%7D%2C%22indexRange%22%3A%7B%22start%22%3A220%2C%22end%22%3A334%7D%2C%22lastModified%22%3A1760321798232750%2C%22contentLength%22%3A3626656%2C%22quality%22%3A%22large%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22480p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A827153%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_480P%22%7D%2C%7B%22itag%22%3A397%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22av01.0.04M.08%5C%22%22%2C%22bitrate%22%3A733288%2C%22width%22%3A854%2C%22height%22%3A480%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A699%7D%2C%22indexRange%22%3A%7B%22start%22%3A700%2C%22end%22%3A815%7D%2C%22lastModified%22%3A1760320098775702%2C%22contentLength%22%3A2452049%2C%22quality%22%3A%22large%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22480p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A559253%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_480P%22%7D%2C%7B%22itag%22%3A134%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22avc1.4d401e%5C%22%22%2C%22bitrate%22%3A639029%2C%22width%22%3A640%2C%22height%22%3A360%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A738%7D%2C%22indexRange%22%3A%7B%22start%22%3A739%2C%22end%22%3A854%7D%2C%22lastModified%22%3A1760318986716464%2C%22contentLength%22%3A2236809%2C%22quality%22%3A%22medium%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22360p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A510162%2C%22highReplication%22%3Atrue%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_360P%22%7D%2C%7B%22itag%22%3A243%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A333415%2C%22width%22%3A640%2C%22height%22%3A360%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A218%7D%2C%22indexRange%22%3A%7B%22start%22%3A219%2C%22end%22%3A333%7D%2C%22lastModified%22%3A1760321797823259%2C%22contentLength%22%3A935823%2C%22quality%22%3A%22medium%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22360p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A213438%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_360P_SAVER%22%7D%2C%7B%22itag%22%3A396%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22av01.0.01M.08%5C%22%22%2C%22bitrate%22%3A405269%2C%22width%22%3A640%2C%22height%22%3A360%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A699%7D%2C%22indexRange%22%3A%7B%22start%22%3A700%2C%22end%22%3A815%7D%2C%22lastModified%22%3A1760318769497622%2C%22contentLength%22%3A1354030%2C%22quality%22%3A%22medium%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22360p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A308821%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_360P%22%7D%2C%7B%22itag%22%3A133%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22avc1.4d4015%5C%22%22%2C%22bitrate%22%3A248891%2C%22width%22%3A426%2C%22height%22%3A240%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A738%7D%2C%22indexRange%22%3A%7B%22start%22%3A739%2C%22end%22%3A854%7D%2C%22lastModified%22%3A1760319366367335%2C%22contentLength%22%3A961782%2C%22quality%22%3A%22small%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22240p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A219359%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_240P%22%7D%2C%7B%22itag%22%3A242%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A117857%2C%22width%22%3A426%2C%22height%22%3A240%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A217%7D%2C%22indexRange%22%3A%7B%22start%22%3A218%2C%22end%22%3A331%7D%2C%22lastModified%22%3A1760321800828240%2C%22contentLength%22%3A436200%2C%22quality%22%3A%22small%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22240p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A99486%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_240P_SAVER%22%7D%2C%7B%22itag%22%3A395%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22av01.0.00M.08%5C%22%22%2C%22bitrate%22%3A112750%2C%22width%22%3A426%2C%22height%22%3A240%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A699%7D%2C%22indexRange%22%3A%7B%22start%22%3A700%2C%22end%22%3A815%7D%2C%22lastModified%22%3A1760319708241104%2C%22contentLength%22%3A414928%2C%22quality%22%3A%22small%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22240p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A94635%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_240P%22%7D%2C%7B%22itag%22%3A160%2C%22mimeType%22%3A%22video%2Fmp4%3B+codecs%3D%5C%22avc1.4d400c%5C%22%22%2C%22bitrate%22%3A114018%2C%22width%22%3A256%2C%22height%22%3A144%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A737%7D%2C%22indexRange%22%3A%7B%22start%22%3A738%2C%22end%22%3A853%7D%2C%22lastModified%22%3A1760319230721109%2C%22contentLength%22%3A436666%2C%22quality%22%3A%22tiny%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22144p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A99593%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_144P%22%7D%2C%7B%22itag%22%3A278%2C%22mimeType%22%3A%22video%2Fwebm%3B+codecs%3D%5C%22vp9%5C%22%22%2C%22bitrate%22%3A88714%2C%22width%22%3A256%2C%22height%22%3A144%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A217%7D%2C%22indexRange%22%3A%7B%22start%22%3A218%2C%22end%22%3A331%7D%2C%22lastModified%22%3A1760321798598432%2C%22contentLength%22%3A359107%2C%22quality%22%3A%22tiny%22%2C%22fps%22%3A24%2C%22qualityLabel%22%3A%22144p%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A81903%2C%22colorInfo%22%3A%7B%22primaries%22%3A%22COLOR_PRIMARIES_BT709%22%2C%22transferCharacteristics%22%3A%22COLOR_TRANSFER_CHARACTERISTICS_BT709%22%2C%22matrixCoefficients%22%3A%22COLOR_MATRIX_COEFFICIENTS_BT709%22%7D%2C%22approxDurationMs%22%3A35076%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_144P%22%7D%2C%7B%22itag%22%3A140%2C%22mimeType%22%3A%22audio%2Fmp4%3B+codecs%3D%5C%22mp4a.40.2%5C%22%22%2C%22bitrate%22%3A130237%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A722%7D%2C%22indexRange%22%3A%7B%22start%22%3A723%2C%22end%22%3A802%7D%2C%22lastModified%22%3A1760317619557126%2C%22contentLength%22%3A569466%2C%22quality%22%3A%22tiny%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A129678%2C%22highReplication%22%3Atrue%2C%22audioQuality%22%3A%22AUDIO_QUALITY_MEDIUM%22%2C%22approxDurationMs%22%3A35131%2C%22audioSampleRate%22%3A44100%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A3.2200003%2C%22trackAbsoluteLoudnessLkfs%22%3A-15.78%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A140%2C%22mimeType%22%3A%22audio%2Fmp4%3B+codecs%3D%5C%22mp4a.40.2%5C%22%22%2C%22bitrate%22%3A130228%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A722%7D%2C%22indexRange%22%3A%7B%22start%22%3A723%2C%22end%22%3A802%7D%2C%22lastModified%22%3A1760317626307614%2C%22contentLength%22%3A569480%2C%22quality%22%3A%22tiny%22%2C%22xtags%22%3A%22CggKA2RyYxIBMQ%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A129681%2C%22highReplication%22%3Atrue%2C%22audioQuality%22%3A%22AUDIO_QUALITY_MEDIUM%22%2C%22approxDurationMs%22%3A35131%2C%22audioSampleRate%22%3A44100%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A5%2C%22isDrc%22%3Atrue%2C%22trackAbsoluteLoudnessLkfs%22%3A-14%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A140%2C%22mimeType%22%3A%22audio%2Fmp4%3B+codecs%3D%5C%22mp4a.40.2%5C%22%22%2C%22bitrate%22%3A130237%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A722%7D%2C%22indexRange%22%3A%7B%22start%22%3A723%2C%22end%22%3A802%7D%2C%22lastModified%22%3A1760317647165325%2C%22contentLength%22%3A569719%2C%22quality%22%3A%22tiny%22%2C%22xtags%22%3A%22CgcKAnZiEgEx%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A129735%2C%22highReplication%22%3Atrue%2C%22audioQuality%22%3A%22AUDIO_QUALITY_MEDIUM%22%2C%22approxDurationMs%22%3A35131%2C%22audioSampleRate%22%3A44100%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A5.3599997%2C%22trackAbsoluteLoudnessLkfs%22%3A-13.64%2C%22isVb%22%3Atrue%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A249%2C%22mimeType%22%3A%22audio%2Fwebm%3B+codecs%3D%5C%22opus%5C%22%22%2C%22bitrate%22%3A52160%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A265%7D%2C%22indexRange%22%3A%7B%22start%22%3A266%2C%22end%22%3A331%7D%2C%22lastModified%22%3A1760317621896544%2C%22contentLength%22%3A218517%2C%22quality%22%3A%22tiny%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A49803%2C%22audioQuality%22%3A%22AUDIO_QUALITY_LOW%22%2C%22approxDurationMs%22%3A35101%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A3.21%2C%22trackAbsoluteLoudnessLkfs%22%3A-15.79%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A249%2C%22mimeType%22%3A%22audio%2Fwebm%3B+codecs%3D%5C%22opus%5C%22%22%2C%22bitrate%22%3A52142%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A265%7D%2C%22indexRange%22%3A%7B%22start%22%3A266%2C%22end%22%3A331%7D%2C%22lastModified%22%3A1760317623999784%2C%22contentLength%22%3A218881%2C%22quality%22%3A%22tiny%22%2C%22xtags%22%3A%22CggKA2RyYxIBMQ%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A49885%2C%22audioQuality%22%3A%22AUDIO_QUALITY_LOW%22%2C%22approxDurationMs%22%3A35101%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A5%2C%22isDrc%22%3Atrue%2C%22trackAbsoluteLoudnessLkfs%22%3A-14%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A249%2C%22mimeType%22%3A%22audio%2Fwebm%3B+codecs%3D%5C%22opus%5C%22%22%2C%22bitrate%22%3A50772%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A258%7D%2C%22indexRange%22%3A%7B%22start%22%3A259%2C%22end%22%3A324%7D%2C%22lastModified%22%3A1760317667012937%2C%22contentLength%22%3A222063%2C%22quality%22%3A%22tiny%22%2C%22xtags%22%3A%22CgcKAnZiEgEx%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A50611%2C%22audioQuality%22%3A%22AUDIO_QUALITY_LOW%22%2C%22approxDurationMs%22%3A35101%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A5.3500004%2C%22trackAbsoluteLoudnessLkfs%22%3A-13.65%2C%22isVb%22%3Atrue%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A250%2C%22mimeType%22%3A%22audio%2Fwebm%3B+codecs%3D%5C%22opus%5C%22%22%2C%22bitrate%22%3A64228%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A265%7D%2C%22indexRange%22%3A%7B%22start%22%3A266%2C%22end%22%3A332%7D%2C%22lastModified%22%3A1760317621963477%2C%22contentLength%22%3A267659%2C%22quality%22%3A%22tiny%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A61003%2C%22audioQuality%22%3A%22AUDIO_QUALITY_LOW%22%2C%22approxDurationMs%22%3A35101%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A3.21%2C%22trackAbsoluteLoudnessLkfs%22%3A-15.79%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A250%2C%22mimeType%22%3A%22audio%2Fwebm%3B+codecs%3D%5C%22opus%5C%22%22%2C%22bitrate%22%3A64255%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A265%7D%2C%22indexRange%22%3A%7B%22start%22%3A266%2C%22end%22%3A332%7D%2C%22lastModified%22%3A1760317623692914%2C%22contentLength%22%3A267838%2C%22quality%22%3A%22tiny%22%2C%22xtags%22%3A%22CggKA2RyYxIBMQ%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A61043%2C%22audioQuality%22%3A%22AUDIO_QUALITY_LOW%22%2C%22approxDurationMs%22%3A35101%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A5%2C%22isDrc%22%3Atrue%2C%22trackAbsoluteLoudnessLkfs%22%3A-14%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A250%2C%22mimeType%22%3A%22audio%2Fwebm%3B+codecs%3D%5C%22opus%5C%22%22%2C%22bitrate%22%3A63565%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A258%7D%2C%22indexRange%22%3A%7B%22start%22%3A259%2C%22end%22%3A325%7D%2C%22lastModified%22%3A1760317665406516%2C%22contentLength%22%3A265856%2C%22quality%22%3A%22tiny%22%2C%22xtags%22%3A%22CgcKAnZiEgEx%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A60592%2C%22audioQuality%22%3A%22AUDIO_QUALITY_LOW%22%2C%22approxDurationMs%22%3A35101%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A5.3500004%2C%22trackAbsoluteLoudnessLkfs%22%3A-13.65%2C%22isVb%22%3Atrue%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A251%2C%22mimeType%22%3A%22audio%2Fwebm%3B+codecs%3D%5C%22opus%5C%22%22%2C%22bitrate%22%3A121494%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A265%7D%2C%22indexRange%22%3A%7B%22start%22%3A266%2C%22end%22%3A332%7D%2C%22lastModified%22%3A1760317622776614%2C%22contentLength%22%3A506276%2C%22quality%22%3A%22tiny%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A115387%2C%22audioQuality%22%3A%22AUDIO_QUALITY_MEDIUM%22%2C%22approxDurationMs%22%3A35101%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A3.21%2C%22trackAbsoluteLoudnessLkfs%22%3A-15.79%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A251%2C%22mimeType%22%3A%22audio%2Fwebm%3B+codecs%3D%5C%22opus%5C%22%22%2C%22bitrate%22%3A121520%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A265%7D%2C%22indexRange%22%3A%7B%22start%22%3A266%2C%22end%22%3A332%7D%2C%22lastModified%22%3A1760317623927303%2C%22contentLength%22%3A506340%2C%22quality%22%3A%22tiny%22%2C%22xtags%22%3A%22CggKA2RyYxIBMQ%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A115401%2C%22audioQuality%22%3A%22AUDIO_QUALITY_MEDIUM%22%2C%22approxDurationMs%22%3A35101%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A5%2C%22isDrc%22%3Atrue%2C%22trackAbsoluteLoudnessLkfs%22%3A-14%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%2C%7B%22itag%22%3A251%2C%22mimeType%22%3A%22audio%2Fwebm%3B+codecs%3D%5C%22opus%5C%22%22%2C%22bitrate%22%3A121379%2C%22initRange%22%3A%7B%22start%22%3A0%2C%22end%22%3A258%7D%2C%22indexRange%22%3A%7B%22start%22%3A259%2C%22end%22%3A325%7D%2C%22lastModified%22%3A1760317665546992%2C%22contentLength%22%3A506241%2C%22quality%22%3A%22tiny%22%2C%22xtags%22%3A%22CgcKAnZiEgEx%22%2C%22projectionType%22%3A%22RECTANGULAR%22%2C%22averageBitrate%22%3A115379%2C%22audioQuality%22%3A%22AUDIO_QUALITY_MEDIUM%22%2C%22approxDurationMs%22%3A35101%2C%22audioSampleRate%22%3A48000%2C%22audioChannels%22%3A2%2C%22loudnessDb%22%3A5.3500004%2C%22trackAbsoluteLoudnessLkfs%22%3A-13.65%2C%22isVb%22%3Atrue%2C%22qualityOrdinal%22%3A%22QUALITY_ORDINAL_UNKNOWN%22%7D%5D%2C%22probeUrl%22%3A%22https%3A%2F%2Fr5---sn-gwpa-a3vl.googlevideo.com%2Fvideogoodput%3Fid%3Do-AH4g1ffaQskSkmQs5pjIEls4pb4_0OuuLL_NoQzTcENb%5Cu0026source%3Dgoodput%5Cu0026range%3D0-4999%5Cu0026expire%3D1766937437%5Cu0026ip%3D137.59.180.209%5Cu0026ms%3Dpm%5Cu0026mm%3D35%5Cu0026pl%3D24%5Cu0026sparams%3Did%2Csource%2Crange%2Cexpire%2Cip%2Cms%2Cmm%2Cpl%5Cu0026signature%3D3DA94252F8F16E06DABCB4E3C60B7617AD2F599E.45F805D2C2A1777E3EBD1CAF4D724F30DD48C582%5Cu0026key%3Dcms1%22%2C%22serverAbrStreamingUrl%22%3A%22https%3A%2F%2Frr2---sn-1p2oxucq-q5js.googlevideo.com%2Fvideoplayback%3Fexpire%3D1766955437%5Cu0026ei%3DTUVRadrvINyLpt8PtPnjoQw%5Cu0026ip%3D137.59.180.209%5Cu0026id%3Do-ABzMy3i_FihMXecJ8uHOBQvg69kU8N1C58bmoSfx_ttV%5Cu0026source%3Dyoutube%5Cu0026requiressl%3Dyes%5Cu0026xpc%3DEgVo2aDSNQ%253D%253D%5Cu0026cps%3D63%5Cu0026met%3D1766933837%252C%5Cu0026mh%3D63%5Cu0026mm%3D31%252C29%5Cu0026mn%3Dsn-1p2oxucq-q5js%252Csn-h557sn66%5Cu0026ms%3Dau%252Crdu%5Cu0026mv%3Dm%5Cu0026mvi%3D2%5Cu0026pl%3D24%5Cu0026rms%3Dau%252Cau%5Cu0026ctier%3DL%5Cu0026initcwndbps%3D700000%5Cu0026siu%3D1%5Cu0026spc%3DwH4QqzavsC4gfw9r8EOGuUhSiGlmYXYIykZmyOLkj8Bxo7wH7scOwgQ%5Cu0026svpuc%3D1%5Cu0026ns%3D29tBLpIB8kqXeYjR2CXgXBQR%5Cu0026sabr%3D1%5Cu0026rqh%3D1%5Cu0026mt%3D1766933352%5Cu0026fvip%3D1%5Cu0026keepalive%3Dyes%5Cu0026fexp%3D51355912%252C51552689%252C51565115%252C51565682%252C51580968%5Cu0026c%3DWEB%5Cu0026n%3Dr7eJxBL8qo6B-nzogw%5Cu0026sparams%3Dexpire%252Cei%252Cip%252Cid%252Csource%252Crequiressl%252Cxpc%252Cctier%252Csiu%252Cspc%252Csvpuc%252Cns%252Csabr%252Crqh%5Cu0026sig%3DAJfQdSswRgIhANMA9QfoxR0RKkwi3qezch0Gp3ecSU8kdIw6PC0sMnKAAiEAxoaJD6DQEOcy5M34UeP5Ua2Io431GWPa4qPCIQS8fFw%253D%5Cu0026lsparams%3Dcps%252Cmet%252Cmh%252Cmm%252Cmn%252Cms%252Cmv%252Cmvi%252Cpl%252Crms%252Cinitcwndbps%5Cu0026lsig%3DAPaTxxMwRgIhAKVfguC5rCOoKCpujJP6h8GkU4u9OtW0tFh6q7O8pgctAiEA-FztyU0ATCvjfw0VlF3-48GMezhsaYPfBOURc-PmTqo%253D%22%7D%2C%22playbackTracking%22%3A%7B%22videostatsPlaybackUrl%22%3A%7B%22baseUrl%22%3A%22https%3A%2F%2Fs.youtube.com%2Fapi%2Fstats%2Fplayback%3Fcl%3D847500619%5Cu0026docid%3DEC018ZtNXaA%5Cu0026ei%3DTUVRadrvINyLpt8PtPnjoQw%5Cu0026fexp%3D%5Cu0026ns%3Dyt%5Cu0026plid%3DAAZHBFe6pZsrvwdq%5Cu0026sdetail%3Df%253Ayoutu.be%252C%5Cu0026adcontext%3DCAESEwi7wdW9xeCRAxVCh68BHUcOMRsYAiABKAQwATgC%5Cu0026adformat%3D15_2_1%5Cu0026aqi%3DTUVRafvmDMKOvr0Px5zE2QE%5Cu0026autoplay%3D1%5Cu0026delay%3D28%5Cu0026el%3Ddetailpage%5Cu0026host_cpn%3D%5Cu0026len%3D36%5Cu0026of%3D1NAQ7FoKWbgcIJ4XpQv7vA%5Cu0026uga%3Dm20%5Cu0026vm%3DCAEQABgEOjJBSHFpSlRLZjBib21WTGNMUEhoNmRlT3lSRnhhTWhXcnQyci0wMTljRXQ1OHRUaGxkQWJYQUJFVEpNbFY5Um5ERXk2N0F6eGJvUVFwMkU4UTUyT1pJUkJFOGJMRXlQbF9RcmdObGQzWTd5ZTJ3OC1SV0lORXE2UmY0Q2JWQWFUSnFNV0N4VlZobGwwNQ%22%7D%2C%22videostatsDelayplayUrl%22%3A%7B%22baseUrl%22%3A%22https%3A%2F%2Fs.youtube.com%2Fapi%2Fstats%2Fdelayplay%3Fcl%3D847500619%5Cu0026docid%3DEC018ZtNXaA%5Cu0026ei%3DTUVRadrvINyLpt8PtPnjoQw%5Cu0026fexp%3D%5Cu0026ns%3Dyt%5Cu0026plid%3DAAZHBFe6pZsrvwdq%5Cu0026sdetail%3Df%253Ayoutu.be%252C%5Cu0026adformat%3D15_2_1%5Cu0026aqi%3DTUVRafvmDMKOvr0Px5zE2QE%5Cu0026autoplay%3D1%5Cu0026delay%3D28%5Cu0026el%3Ddetailpage%5Cu0026host_cpn%3D%5Cu0026is_ad%3D1%5Cu0026len%3D36%5Cu0026of%3D1NAQ7FoKWbgcIJ4XpQv7vA%5Cu0026uga%3Dm20%5Cu0026vm%3DCAEQABgEOjJBSHFpSlRLZjBib21WTGNMUEhoNmRlT3lSRnhhTWhXcnQyci0wMTljRXQ1OHRUaGxkQWJYQUJFVEpNbFY5Um5ERXk2N0F6eGJvUVFwMkU4UTUyT1pJUkJFOGJMRXlQbF9RcmdObGQzWTd5ZTJ3OC1SV0lORXE2UmY0Q2JWQWFUSnFNV0N4VlZobGwwNQ%22%2C%22elapsedMediaTimeSeconds%22%3A28%7D%2C%22videostatsWatchtimeUrl%22%3A%7B%22baseUrl%22%3A%22https%3A%2F%2Fs.youtube.com%2Fapi%2Fstats%2Fwatchtime%3Fcl%3D847500619%5Cu0026docid%3DEC018ZtNXaA%5Cu0026ei%3DTUVRadrvINyLpt8PtPnjoQw%5Cu0026fexp%3D%5Cu0026ns%3Dyt%5Cu0026plid%3DAAZHBFe6pZsrvwdq%5Cu0026sdetail%3Df%253Ayoutu.be%252C%5Cu0026adformat%3D15_2_1%5Cu0026aqi%3DTUVRafvmDMKOvr0Px5zE2QE%5Cu0026autoplay%3D1%5Cu0026el%3Ddetailpage%5Cu0026host_cpn%3D%5Cu0026is_ad%3D1%5Cu0026len%3D36%5Cu0026of%3D1NAQ7FoKWbgcIJ4XpQv7vA%5Cu0026uga%3Dm20%5Cu0026vm%3DCAEQABgEOjJBSHFpSlRLZjBib21WTGNMUEhoNmRlT3lSRnhhTWhXcnQyci0wMTljRXQ1OHRUaGxkQWJYQUJFVEpNbFY5Um5ERXk2N0F6eGJvUVFwMkU4UTUyT1pJUkJFOGJMRXlQbF9RcmdObGQzWTd5ZTJ3OC1SV0lORXE2UmY0Q2JWQWFUSnFNV0N4VlZobGwwNQ%22%7D%2C%22ptrackingUrl%22%3A%7B%22baseUrl%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fptracking%3Fcontent_v%3D_FHqOHJefI8%5Cu0026ei%3DTUVRadrvINyLpt8PtPnjoQw%5Cu0026plid%3DAAZHBFe6pZsrvwdq%5Cu0026pltype%3Dadhost%5Cu0026ptchn%3Dyoutube_host%5Cu0026ptk%3Dyoutube_host%5Cu0026video_id%3DEC018ZtNXaA%22%7D%2C%22qoeUrl%22%3A%7B%22baseUrl%22%3A%22https%3A%2F%2Fs.youtube.com%2Fapi%2Fstats%2Fqoe%3Fadcontext%3DCAESEwi7wdW9xeCRAxVCh68BHUcOMRsYAiABKAQwATgC%5Cu0026adformat%3D15_2_1%5Cu0026cl%3D847500619%5Cu0026docid%3DEC018ZtNXaA%5Cu0026ei%3DTUVRadrvINyLpt8PtPnjoQw%5Cu0026el%3Ddetailpage%5Cu0026event%3Dstreamingstats%5Cu0026fexp%3D%5Cu0026ns%3Dyt%5Cu0026plid%3DAAZHBFe6pZsrvwdq%5Cu0026sdetail%3Df%253Ayoutu.be%252C%5Cu0026stmp%3Dvb%253A1%22%7D%2C%22atrUrl%22%3A%7B%22baseUrl%22%3A%22https%3A%2F%2Fs.youtube.com%2Fapi%2Fstats%2Fatr%3Fc%3DWEB%5Cu0026docid%3DEC018ZtNXaA%5Cu0026ei%3DTUVRadrvINyLpt8PtPnjoQw%5Cu0026is_ad%3D1%5Cu0026len%3D36%5Cu0026ns%3Dyt%5Cu0026plid%3DAAZHBFe6pZsrvwdq%5Cu0026ver%3D2%5Cu0026vm%3DCAEQABgEOjJBSHFpSlRLZjBib21WTGNMUEhoNmRlT3lSRnhhTWhXcnQyci0wMTljRXQ1OHRUaGxkQWJYQUJFVEpNbFY5Um5ERXk2N0F6eGJvUVFwMkU4UTUyT1pJUkJFOGJMRXlQbF9RcmdObGQzWTd5ZTJ3OC1SV0lORXE2UmY0Q2JWQWFUSnFNV0N4VlZobGwwNQ%22%2C%22elapsedMediaTimeSeconds%22%3A5%7D%2C%22videostatsScheduledFlushWalltimeSeconds%22%3A%5B10%2C20%2C30%5D%2C%22videostatsDefaultFlushIntervalSeconds%22%3A40%2C%22googleRemarketingUrl%22%3A%7B%22baseUrl%22%3A%22https%3A%2F%2Fwww.google.com%2Fpagead%2F1p-user-list%2F962985656%2F%3Fbackend%3Dinnertube%5Cu0026cname%3D1%5Cu0026cver%3D2_20251222%5Cu0026data%3Dbackend%253Dinnertube%253Bcname%253D1%253Bcver%253D2_20251222%253Bel%253Dadunit%253Bptype%253Df_adview%253Btype%253Dview%253Butuid%253D4UDct7xQd0Ng6G_eMHnA1Q%253Butvid%253DEC018ZtNXaA%5Cu0026is_vtc%3D0%5Cu0026ptype%3Df_adview%5Cu0026random%3D416910454%5Cu0026utuid%3D4UDct7xQd0Ng6G_eMHnA1Q%22%2C%22elapsedMediaTimeSeconds%22%3A28%7D%7D%2C%22captions%22%3A%7B%22playerCaptionsTracklistRenderer%22%3A%7B%22captionTracks%22%3A%5B%7B%22baseUrl%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fapi%2Ftimedtext%3Fv%3DEC018ZtNXaA%5Cu0026ei%3DTUVRadrvINyLpt8PtPnjoQw%5Cu0026caps%3Dasr%5Cu0026opi%3D112496729%5Cu0026exp%3Dxpe%5Cu0026xoaf%3D5%5Cu0026xowf%3D1%5Cu0026xospf%3D1%5Cu0026hl%3Den%5Cu0026ip%3D0.0.0.0%5Cu0026ipbits%3D0%5Cu0026expire%3D1766959037%5Cu0026sparams%3Dip%2Cipbits%2Cexpire%2Cv%2Cei%2Ccaps%2Copi%2Cexp%2Cxoaf%5Cu0026signature%3DA0E5B95338E6A4AA9C630441768288BA692D1E58.AD4920FD072C9CD53EE82E0E64F498DEDAFBA857%5Cu0026key%3Dyt8%5Cu0026kind%3Dasr%5Cu0026lang%3Den%22%2C%22name%22%3A%7B%22simpleText%22%3A%22English+%28auto-generated%29%22%7D%2C%22vssId%22%3A%22a.en%22%2C%22languageCode%22%3A%22en%22%2C%22kind%22%3A%22asr%22%2C%22isTranslatable%22%3Atrue%2C%22trackName%22%3A%22%22%7D%5D%2C%22audioTracks%22%3A%5B%7B%22captionTrackIndices%22%3A%5B0%5D%7D%5D%2C%22translationLanguages%22%3A%5B%7B%22languageCode%22%3A%22ab%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Abkhazian%22%7D%7D%2C%7B%22languageCode%22%3A%22aa%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Afar%22%7D%7D%2C%7B%22languageCode%22%3A%22af%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Afrikaans%22%7D%7D%2C%7B%22languageCode%22%3A%22ak%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Akan%22%7D%7D%2C%7B%22languageCode%22%3A%22sq%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Albanian%22%7D%7D%2C%7B%22languageCode%22%3A%22am%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Amharic%22%7D%7D%2C%7B%22languageCode%22%3A%22ar%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Arabic%22%7D%7D%2C%7B%22languageCode%22%3A%22hy%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Armenian%22%7D%7D%2C%7B%22languageCode%22%3A%22as%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Assamese%22%7D%7D%2C%7B%22languageCode%22%3A%22ay%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Aymara%22%7D%7D%2C%7B%22languageCode%22%3A%22az%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Azerbaijani%22%7D%7D%2C%7B%22languageCode%22%3A%22bn%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Bangla%22%7D%7D%2C%7B%22languageCode%22%3A%22ba%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Bashkir%22%7D%7D%2C%7B%22languageCode%22%3A%22eu%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Basque%22%7D%7D%2C%7B%22languageCode%22%3A%22be%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Belarusian%22%7D%7D%2C%7B%22languageCode%22%3A%22bho%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Bhojpuri%22%7D%7D%2C%7B%22languageCode%22%3A%22bs%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Bosnian%22%7D%7D%2C%7B%22languageCode%22%3A%22br%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Breton%22%7D%7D%2C%7B%22languageCode%22%3A%22bg%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Bulgarian%22%7D%7D%2C%7B%22languageCode%22%3A%22my%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Burmese%22%7D%7D%2C%7B%22languageCode%22%3A%22ca%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Catalan%22%7D%7D%2C%7B%22languageCode%22%3A%22ceb%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Cebuano%22%7D%7D%2C%7B%22languageCode%22%3A%22zh-Hans%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Chinese+%28Simplified%29%22%7D%7D%2C%7B%22languageCode%22%3A%22zh-Hant%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Chinese+%28Traditional%29%22%7D%7D%2C%7B%22languageCode%22%3A%22co%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Corsican%22%7D%7D%2C%7B%22languageCode%22%3A%22hr%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Croatian%22%7D%7D%2C%7B%22languageCode%22%3A%22cs%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Czech%22%7D%7D%2C%7B%22languageCode%22%3A%22da%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Danish%22%7D%7D%2C%7B%22languageCode%22%3A%22dv%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Divehi%22%7D%7D%2C%7B%22languageCode%22%3A%22nl%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Dutch%22%7D%7D%2C%7B%22languageCode%22%3A%22dz%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Dzongkha%22%7D%7D%2C%7B%22languageCode%22%3A%22en%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22English%22%7D%7D%2C%7B%22languageCode%22%3A%22eo%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Esperanto%22%7D%7D%2C%7B%22languageCode%22%3A%22et%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Estonian%22%7D%7D%2C%7B%22languageCode%22%3A%22ee%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Ewe%22%7D%7D%2C%7B%22languageCode%22%3A%22fo%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Faroese%22%7D%7D%2C%7B%22languageCode%22%3A%22fj%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Fijian%22%7D%7D%2C%7B%22languageCode%22%3A%22fil%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Filipino%22%7D%7D%2C%7B%22languageCode%22%3A%22fi%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Finnish%22%7D%7D%2C%7B%22languageCode%22%3A%22fr%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22French%22%7D%7D%2C%7B%22languageCode%22%3A%22gaa%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Ga%22%7D%7D%2C%7B%22languageCode%22%3A%22gl%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Galician%22%7D%7D%2C%7B%22languageCode%22%3A%22lg%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Ganda%22%7D%7D%2C%7B%22languageCode%22%3A%22ka%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Georgian%22%7D%7D%2C%7B%22languageCode%22%3A%22de%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22German%22%7D%7D%2C%7B%22languageCode%22%3A%22el%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Greek%22%7D%7D%2C%7B%22languageCode%22%3A%22gn%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Guarani%22%7D%7D%2C%7B%22languageCode%22%3A%22gu%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Gujarati%22%7D%7D%2C%7B%22languageCode%22%3A%22ht%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Haitian+Creole%22%7D%7D%2C%7B%22languageCode%22%3A%22ha%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Hausa%22%7D%7D%2C%7B%22languageCode%22%3A%22haw%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Hawaiian%22%7D%7D%2C%7B%22languageCode%22%3A%22iw%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Hebrew%22%7D%7D%2C%7B%22languageCode%22%3A%22hi%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Hindi%22%7D%7D%2C%7B%22languageCode%22%3A%22hmn%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Hmong%22%7D%7D%2C%7B%22languageCode%22%3A%22hu%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Hungarian%22%7D%7D%2C%7B%22languageCode%22%3A%22is%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Icelandic%22%7D%7D%2C%7B%22languageCode%22%3A%22ig%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Igbo%22%7D%7D%2C%7B%22languageCode%22%3A%22id%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Indonesian%22%7D%7D%2C%7B%22languageCode%22%3A%22iu%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Inuktitut%22%7D%7D%2C%7B%22languageCode%22%3A%22ga%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Irish%22%7D%7D%2C%7B%22languageCode%22%3A%22it%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Italian%22%7D%7D%2C%7B%22languageCode%22%3A%22ja%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Japanese%22%7D%7D%2C%7B%22languageCode%22%3A%22jv%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Javanese%22%7D%7D%2C%7B%22languageCode%22%3A%22kl%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Kalaallisut%22%7D%7D%2C%7B%22languageCode%22%3A%22kn%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Kannada%22%7D%7D%2C%7B%22languageCode%22%3A%22kk%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Kazakh%22%7D%7D%2C%7B%22languageCode%22%3A%22kha%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Khasi%22%7D%7D%2C%7B%22languageCode%22%3A%22km%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Khmer%22%7D%7D%2C%7B%22languageCode%22%3A%22rw%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Kinyarwanda%22%7D%7D%2C%7B%22languageCode%22%3A%22ko%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Korean%22%7D%7D%2C%7B%22languageCode%22%3A%22kri%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Krio%22%7D%7D%2C%7B%22languageCode%22%3A%22ku%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Kurdish%22%7D%7D%2C%7B%22languageCode%22%3A%22ky%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Kyrgyz%22%7D%7D%2C%7B%22languageCode%22%3A%22lo%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Lao%22%7D%7D%2C%7B%22languageCode%22%3A%22la%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Latin%22%7D%7D%2C%7B%22languageCode%22%3A%22lv%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Latvian%22%7D%7D%2C%7B%22languageCode%22%3A%22ln%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Lingala%22%7D%7D%2C%7B%22languageCode%22%3A%22lt%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Lithuanian%22%7D%7D%2C%7B%22languageCode%22%3A%22lua%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Luba-Lulua%22%7D%7D%2C%7B%22languageCode%22%3A%22luo%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Luo%22%7D%7D%2C%7B%22languageCode%22%3A%22lb%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Luxembourgish%22%7D%7D%2C%7B%22languageCode%22%3A%22mk%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Macedonian%22%7D%7D%2C%7B%22languageCode%22%3A%22mg%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Malagasy%22%7D%7D%2C%7B%22languageCode%22%3A%22ms%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Malay%22%7D%7D%2C%7B%22languageCode%22%3A%22ml%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Malayalam%22%7D%7D%2C%7B%22languageCode%22%3A%22mt%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Maltese%22%7D%7D%2C%7B%22languageCode%22%3A%22gv%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Manx%22%7D%7D%2C%7B%22languageCode%22%3A%22mi%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22M%C4%81ori%22%7D%7D%2C%7B%22languageCode%22%3A%22mr%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Marathi%22%7D%7D%2C%7B%22languageCode%22%3A%22mn%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Mongolian%22%7D%7D%2C%7B%22languageCode%22%3A%22mfe%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Morisyen%22%7D%7D%2C%7B%22languageCode%22%3A%22ne%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Nepali%22%7D%7D%2C%7B%22languageCode%22%3A%22new%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Newari%22%7D%7D%2C%7B%22languageCode%22%3A%22nso%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Northern+Sotho%22%7D%7D%2C%7B%22languageCode%22%3A%22no%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Norwegian%22%7D%7D%2C%7B%22languageCode%22%3A%22ny%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Nyanja%22%7D%7D%2C%7B%22languageCode%22%3A%22oc%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Occitan%22%7D%7D%2C%7B%22languageCode%22%3A%22or%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Odia%22%7D%7D%2C%7B%22languageCode%22%3A%22om%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Oromo%22%7D%7D%2C%7B%22languageCode%22%3A%22os%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Ossetic%22%7D%7D%2C%7B%22languageCode%22%3A%22pam%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Pampanga%22%7D%7D%2C%7B%22languageCode%22%3A%22ps%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Pashto%22%7D%7D%2C%7B%22languageCode%22%3A%22fa%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Persian%22%7D%7D%2C%7B%22languageCode%22%3A%22pl%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Polish%22%7D%7D%2C%7B%22languageCode%22%3A%22pt%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Portuguese%22%7D%7D%2C%7B%22languageCode%22%3A%22pt-PT%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Portuguese+%28Portugal%29%22%7D%7D%2C%7B%22languageCode%22%3A%22pa%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Punjabi%22%7D%7D%2C%7B%22languageCode%22%3A%22qu%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Quechua%22%7D%7D%2C%7B%22languageCode%22%3A%22ro%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Romanian%22%7D%7D%2C%7B%22languageCode%22%3A%22rn%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Rundi%22%7D%7D%2C%7B%22languageCode%22%3A%22ru%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Russian%22%7D%7D%2C%7B%22languageCode%22%3A%22sm%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Samoan%22%7D%7D%2C%7B%22languageCode%22%3A%22sg%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Sango%22%7D%7D%2C%7B%22languageCode%22%3A%22sa%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Sanskrit%22%7D%7D%2C%7B%22languageCode%22%3A%22gd%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Scottish+Gaelic%22%7D%7D%2C%7B%22languageCode%22%3A%22sr%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Serbian%22%7D%7D%2C%7B%22languageCode%22%3A%22crs%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Seselwa+Creole+French%22%7D%7D%2C%7B%22languageCode%22%3A%22sn%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Shona%22%7D%7D%2C%7B%22languageCode%22%3A%22sd%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Sindhi%22%7D%7D%2C%7B%22languageCode%22%3A%22si%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Sinhala%22%7D%7D%2C%7B%22languageCode%22%3A%22sk%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Slovak%22%7D%7D%2C%7B%22languageCode%22%3A%22sl%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Slovenian%22%7D%7D%2C%7B%22languageCode%22%3A%22so%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Somali%22%7D%7D%2C%7B%22languageCode%22%3A%22st%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Southern+Sotho%22%7D%7D%2C%7B%22languageCode%22%3A%22es%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Spanish%22%7D%7D%2C%7B%22languageCode%22%3A%22su%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Sundanese%22%7D%7D%2C%7B%22languageCode%22%3A%22sw%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Swahili%22%7D%7D%2C%7B%22languageCode%22%3A%22ss%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Swati%22%7D%7D%2C%7B%22languageCode%22%3A%22sv%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Swedish%22%7D%7D%2C%7B%22languageCode%22%3A%22tg%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tajik%22%7D%7D%2C%7B%22languageCode%22%3A%22ta%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tamil%22%7D%7D%2C%7B%22languageCode%22%3A%22tt%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tatar%22%7D%7D%2C%7B%22languageCode%22%3A%22te%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Telugu%22%7D%7D%2C%7B%22languageCode%22%3A%22th%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Thai%22%7D%7D%2C%7B%22languageCode%22%3A%22bo%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tibetan%22%7D%7D%2C%7B%22languageCode%22%3A%22ti%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tigrinya%22%7D%7D%2C%7B%22languageCode%22%3A%22to%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tongan%22%7D%7D%2C%7B%22languageCode%22%3A%22ts%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tsonga%22%7D%7D%2C%7B%22languageCode%22%3A%22tn%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tswana%22%7D%7D%2C%7B%22languageCode%22%3A%22tum%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Tumbuka%22%7D%7D%2C%7B%22languageCode%22%3A%22tr%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Turkish%22%7D%7D%2C%7B%22languageCode%22%3A%22tk%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Turkmen%22%7D%7D%2C%7B%22languageCode%22%3A%22uk%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Ukrainian%22%7D%7D%2C%7B%22languageCode%22%3A%22ur%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Urdu%22%7D%7D%2C%7B%22languageCode%22%3A%22ug%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Uyghur%22%7D%7D%2C%7B%22languageCode%22%3A%22uz%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Uzbek%22%7D%7D%2C%7B%22languageCode%22%3A%22ve%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Venda%22%7D%7D%2C%7B%22languageCode%22%3A%22vi%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Vietnamese%22%7D%7D%2C%7B%22languageCode%22%3A%22war%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Waray%22%7D%7D%2C%7B%22languageCode%22%3A%22cy%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Welsh%22%7D%7D%2C%7B%22languageCode%22%3A%22fy%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Western+Frisian%22%7D%7D%2C%7B%22languageCode%22%3A%22wo%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Wolof%22%7D%7D%2C%7B%22languageCode%22%3A%22xh%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Xhosa%22%7D%7D%2C%7B%22languageCode%22%3A%22yi%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Yiddish%22%7D%7D%2C%7B%22languageCode%22%3A%22yo%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Yoruba%22%7D%7D%2C%7B%22languageCode%22%3A%22zu%22%2C%22languageName%22%3A%7B%22simpleText%22%3A%22Zulu%22%7D%7D%5D%2C%22defaultAudioTrackIndex%22%3A0%7D%7D%2C%22videoDetails%22%3A%7B%22videoId%22%3A%22EC018ZtNXaA%22%2C%22title%22%3A%22Secure%2C+inline+and+online+%7C+Hostinger.com%22%2C%22lengthSeconds%22%3A35%2C%22keywords%22%3A%5B%22hostinger%22%2C%22web+hosting%22%2C%22WordPress+hosting%22%2C%22domain+registration%22%2C%22WordPress%22%5D%2C%22channelId%22%3A%22UC4UDct7xQd0Ng6G_eMHnA1Q%22%2C%22isOwnerViewing%22%3Afalse%2C%22shortDescription%22%3A%22%22%2C%22isCrawlable%22%3Afalse%2C%22thumbnail%22%3A%7B%22thumbnails%22%3A%5B%7B%22url%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FEC018ZtNXaA%2Fhqdefault.jpg%3Fsqp%3D-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG%5Cu0026rs%3DAOn4CLBZ4_4qdUKoXGWGX9EWSyVf0PwYdA%22%2C%22width%22%3A168%2C%22height%22%3A94%7D%2C%7B%22url%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FEC018ZtNXaA%2Fhqdefault.jpg%3Fsqp%3D-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG%5Cu0026rs%3DAOn4CLB1_sMXUHhgtXpnOiy5NmADHV04cg%22%2C%22width%22%3A196%2C%22height%22%3A110%7D%2C%7B%22url%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FEC018ZtNXaA%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%5Cu0026rs%3DAOn4CLDj3HQ5Zw7T8w2skjqr02centyf7Q%22%2C%22width%22%3A246%2C%22height%22%3A138%7D%2C%7B%22url%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FEC018ZtNXaA%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%5Cu0026rs%3DAOn4CLABEntyzJ4h7qa3p9-yk9UNqGW_RA%22%2C%22width%22%3A336%2C%22height%22%3A188%7D%2C%7B%22url%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FEC018ZtNXaA%2Fmaxresdefault.jpg%22%2C%22width%22%3A1920%2C%22height%22%3A1080%7D%5D%7D%2C%22allowRatings%22%3Atrue%2C%22viewCount%22%3A%225340898%22%2C%22author%22%3A%22Hostinger%22%2C%22isPrivate%22%3Afalse%2C%22isUnpluggedCorpus%22%3Afalse%2C%22isLiveContent%22%3Afalse%7D%2C%22playerConfig%22%3A%7B%22granularVariableSpeedConfig%22%3A%7B%22minimumPlaybackRate%22%3A100%2C%22maximumPlaybackRate%22%3A100%7D%2C%22vssClientConfig%22%3A%7B%22vssUsePostRequest%22%3Afalse%7D%2C%22audioConfig%22%3A%7B%22loudnessDb%22%3A3.2200003%2C%22perceptualLoudnessDb%22%3A-15.78%2C%22enablePerFormatLoudness%22%3Atrue%2C%22trackAbsoluteLoudnessLkfs%22%3A-15.78%2C%22loudnessTargetLkfs%22%3A-19%7D%2C%22streamSelectionConfig%22%3A%7B%22maxBitrate%22%3A5600000%7D%2C%22mediaCommonConfig%22%3A%7B%22dynamicReadaheadConfig%22%3A%7B%22maxReadAheadMediaTimeMs%22%3A120000%2C%22minReadAheadMediaTimeMs%22%3A15000%2C%22readAheadGrowthRateMs%22%3A1000%7D%2C%22mediaUstreamerRequestConfig%22%3A%7B%22videoPlaybackUstreamerConfig%22%3A%22CpALCqkFCAAlAACAPy0zM3M%2FNT0Klz9YAWgBchoKFm1mczJfY21mc193ZWJfdjNfMl8wMDMYAKABAagBALgCANoChgEQsOoBGIDd2wEgoJwBKKCcATCYdXCIJ4AB9APgAQOYAgzQAgLoAgSAAwKIA4gnqAMDwAMByAMBgAQB0AQB2AQB%2BAQHgAV9wAUByAUB4AXQD%2BgFAfgF0A%2BQBgHQBgHwBgGAB9APwAcBgAgBiAgBnQjNzEw%2BoAjoB%2BAIAegI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FAfoClAEtAACgQjUAAKpCZQAAgEBowHCoAdCGA4UCmpkZP40CAACAP5UC%2Bu1rO7UCAACAP8AC3wP9As3MzD2QAwGdAwrXIz2gAwHVAwAAekSYBAHVBAAAIEHoBPAQoAYBtQa9N4Y1vQYzM4NAwAcByAcB5QcAgAlE8AcBgAgBoQgAAAAAAADwv6kIAAAAAAAA8L%2BwCN8DuAoBqAMBsAMD0AMB2AMBygQcChMIwKkHEJh1GOgHJQAAAAAoADAAEODUAxjQD9IEDwoICLAJELAJIAEgiCcoAdoEDQoGCPAuEPAuIPAuKAHwBQGYBgGoBoCAAtIGFAjoBxBkGg0IiCcVAAAAPx3NzEw%2F2AYB8AYBuAcBoAgB0ggGCAEQARgBqQkAAAAAAADwv7EJAAAAAAAA8L%2FQCQHaCSBMREZNU0VDVDZ2ZXAxS2ZCb0NnUWN2cllQemc2a3c9PZgK997JGKIKCPbeyRj33skYqAsB6gsEiwaMBoAMAagMkAHgDQHIDwHQDwHoEAGQEQGgEQGyERxDQU1TRHhVS3ViYkpEUFFBaWdhQ0FpRE1CUT090BIB4BIBgBMBsBMBkRQAAAAAAADwv5kUAAAAAAAA8L%2BwFAHKFADYFADoFAGBFQAAAAAAAPC%2FiKehygsBMgwIuQIQwrDY6J2gkAMyDAiRAxCO5YbQiaCQAzIMCI8CEPKj%2Fe6HoJADMgwIkAMQs6yPhISgkAMyDAiJARCU7KmkhaCQAzIMCPgBENjBm6iJoJADMgwIjwMQyY%2BBy4igkAMyDAiIARD30OXWhKCQAzIMCPcBEOf47t2NoJADMgwIjgMQ6YLy5YKgkAMyDAiLBhDK8er4g6CQAzIMCIwGEKyFuYmDoJADMgwIlAYQ2pXO04OgkAMyDAiHARDXsdnTg6CQAzIMCPQBEK615duNoJADMgwIjQMQluW2sYegkAMyDAiGARCwipSfg6CQAzIMCPMBEJu2zNuNoJADMgwIjAMQlozKt4KgkAMyDAiFARDnkJjUhKCQAzIMCPIBENDqg92NoJADMgwIiwMQ0Lma94WgkAMyDAigARDV%2BMCThKCQAzIMCJYCEKDe%2B9uNoJADMgwIjAEQhqafk%2F6fkAMyHAiMARCeqLuW%2Fp%2BQAxoOQ2dnS0EyUnlZeElCTVEyGgiMARCNr7Sg%2Fp%2BQAxoMQ2djS0FuWmlFZ0V4MgwI%2BQEQ4IqulP6fkAMyHAj5ARCouq6V%2Fp%2BQAxoOQ2dnS0EyUnlZeElCTVEyGgj5ARDJ4u%2Bp%2Fp%2BQAxoMQ2djS0FuWmlFZ0V4MgwI%2BgEQ1ZWylP6fkAMyHAj6ARDy3JuV%2Fp%2BQAxoOQ2dnS0EyUnlZeElCTVEyGgj6ARC03I2p%2Fp%2BQAxoMQ2djS0FuWmlFZ0V4MgwI%2BwEQpubjlP6fkAMyHAj7ARCHhKqV%2Fp%2BQAxoOQ2dnS0EyUnlZeElCTVEyGgj7ARDwpZap%2Fp%2BQAxoMQ2djS0FuWmlFZ0V4OgBSKhoAKAAyGFVDNFVEY3Q3eFFkME5nNkdfZU1IbkExUTgAQABYAGAAcAF4AJIBAggFmgEECgJlbqABAbABBboBAwQFMcIBCAECAwQFCDBeygEdChsKF1RVVlJhZHVyQzl5THB0OFB0UG5qb1F3EALQAQASSwD5XE0GMEQCICpXKKcvlCqmv2HTYVzuWk18bZ3%2FuvKwJCwxRCBw2h3ZAiAnUN7ndAtT%2FqRJyP7QDIfrfBw8efzxMr1xaCPBS9TpNxoCZWk%3D%22%7D%2C%22useServerDrivenAbr%22%3Atrue%2C%22serverPlaybackStartConfig%22%3A%7B%22enable%22%3Atrue%2C%22playbackStartPolicy%22%3A%7B%22startMinReadaheadPolicy%22%3A%5B%7B%22minReadaheadMs%22%3A1200%7D%5D%7D%7D%2C%22platypusUseEnvoyNetFetch%22%3Afalse%2C%22fixLivePlaybackModelDefaultPosition%22%3Afalse%7D%2C%22webPlayerConfig%22%3A%7B%22useCobaltTvosDash%22%3Atrue%2C%22webPlayerActionsPorting%22%3A%7B%22getSharePanelCommand%22%3A%7B%22clickTrackingParams%22%3A%22CAAQu2kiEwiayum9xeCRAxXchekFHbT8OMTKAQTsTW8y%22%2C%22commandMetadata%22%3A%7B%22webCommandMetadata%22%3A%7B%22sendPost%22%3Atrue%2C%22apiUrl%22%3A%22%2Fyoutubei%2Fv1%2Fshare%2Fget_web_player_share_panel%22%7D%7D%2C%22webPlayerShareEntityServiceEndpoint%22%3A%7B%22serializedShareEntity%22%3A%22CgtFQzAxOFp0TlhhQQ%253D%253D%22%7D%7D%2C%22subscribeCommand%22%3A%7B%22clickTrackingParams%22%3A%22CAAQu2kiEwiayum9xeCRAxXchekFHbT8OMTKAQTsTW8y%22%2C%22commandMetadata%22%3A%7B%22webCommandMetadata%22%3A%7B%22sendPost%22%3Atrue%2C%22apiUrl%22%3A%22%2Fyoutubei%2Fv1%2Fsubscription%2Fsubscribe%22%7D%7D%2C%22subscribeEndpoint%22%3A%7B%22channelIds%22%3A%5B%22UC4UDct7xQd0Ng6G_eMHnA1Q%22%5D%2C%22params%22%3A%22EgIIBxgA%22%7D%7D%2C%22unsubscribeCommand%22%3A%7B%22clickTrackingParams%22%3A%22CAAQu2kiEwiayum9xeCRAxXchekFHbT8OMTKAQTsTW8y%22%2C%22commandMetadata%22%3A%7B%22webCommandMetadata%22%3A%7B%22sendPost%22%3Atrue%2C%22apiUrl%22%3A%22%2Fyoutubei%2Fv1%2Fsubscription%2Funsubscribe%22%7D%7D%2C%22unsubscribeEndpoint%22%3A%7B%22channelIds%22%3A%5B%22UC4UDct7xQd0Ng6G_eMHnA1Q%22%5D%2C%22params%22%3A%22CgIIBxgA%22%7D%7D%2C%22addToWatchLaterCommand%22%3A%7B%22clickTrackingParams%22%3A%22CAAQu2kiEwiayum9xeCRAxXchekFHbT8OMTKAQTsTW8y%22%2C%22commandMetadata%22%3A%7B%22webCommandMetadata%22%3A%7B%22sendPost%22%3Atrue%2C%22apiUrl%22%3A%22%2Fyoutubei%2Fv1%2Fbrowse%2Fedit_playlist%22%7D%7D%2C%22playlistEditEndpoint%22%3A%7B%22playlistId%22%3A%22WL%22%2C%22actions%22%3A%5B%7B%22addedVideoId%22%3A%22EC018ZtNXaA%22%2C%22action%22%3A%22ACTION_ADD_VIDEO%22%7D%5D%7D%7D%2C%22removeFromWatchLaterCommand%22%3A%7B%22clickTrackingParams%22%3A%22CAAQu2kiEwiayum9xeCRAxXchekFHbT8OMTKAQTsTW8y%22%2C%22commandMetadata%22%3A%7B%22webCommandMetadata%22%3A%7B%22sendPost%22%3Atrue%2C%22apiUrl%22%3A%22%2Fyoutubei%2Fv1%2Fbrowse%2Fedit_playlist%22%7D%7D%2C%22playlistEditEndpoint%22%3A%7B%22playlistId%22%3A%22WL%22%2C%22actions%22%3A%5B%7B%22action%22%3A%22ACTION_REMOVE_VIDEO_BY_VIDEO_ID%22%2C%22removedVideoId%22%3A%22EC018ZtNXaA%22%7D%5D%7D%7D%7D%2C%22skippableAdProgressBarDuration%22%3A5000%7D%7D%2C%22microformat%22%3A%7B%22playerMicroformatRenderer%22%3A%7B%22thumbnail%22%3A%7B%22thumbnails%22%3A%5B%7B%22url%22%3A%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FEC018ZtNXaA%2Fmaxresdefault.jpg%22%2C%22width%22%3A1280%2C%22height%22%3A720%7D%5D%7D%2C%22embed%22%3A%7B%22iframeUrl%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fembed%2FEC018ZtNXaA%22%2C%22width%22%3A1280%2C%22height%22%3A720%7D%2C%22title%22%3A%7B%22simpleText%22%3A%22Secure%2C+inline+and+online+%7C+Hostinger.com%22%7D%2C%22lengthSeconds%22%3A36%2C%22ownerProfileUrl%22%3A%22http%3A%2F%2Fwww.youtube.com%2F%40Hostinger%22%2C%22externalChannelId%22%3A%22UC4UDct7xQd0Ng6G_eMHnA1Q%22%2C%22isFamilySafe%22%3Afalse%2C%22availableCountries%22%3A%5B%22AD%22%2C%22AE%22%2C%22AF%22%2C%22AG%22%2C%22AI%22%2C%22AL%22%2C%22AM%22%2C%22AO%22%2C%22AQ%22%2C%22AR%22%2C%22AS%22%2C%22AT%22%2C%22AU%22%2C%22AW%22%2C%22AX%22%2C%22AZ%22%2C%22BA%22%2C%22BB%22%2C%22BD%22%2C%22BE%22%2C%22BF%22%2C%22BG%22%2C%22BH%22%2C%22BI%22%2C%22BJ%22%2C%22BL%22%2C%22BM%22%2C%22BN%22%2C%22BO%22%2C%22BQ%22%2C%22BR%22%2C%22BS%22%2C%22BT%22%2C%22BV%22%2C%22BW%22%2C%22BY%22%2C%22BZ%22%2C%22CA%22%2C%22CC%22%2C%22CD%22%2C%22CF%22%2C%22CG%22%2C%22CH%22%2C%22CI%22%2C%22CK%22%2C%22CL%22%2C%22CM%22%2C%22CN%22%2C%22CO%22%2C%22CR%22%2C%22CU%22%2C%22CV%22%2C%22CW%22%2C%22CX%22%2C%22CY%22%2C%22CZ%22%2C%22DE%22%2C%22DJ%22%2C%22DK%22%2C%22DM%22%2C%22DO%22%2C%22DZ%22%2C%22EC%22%2C%22EE%22%2C%22EG%22%2C%22EH%22%2C%22ER%22%2C%22ES%22%2C%22ET%22%2C%22FI%22%2C%22FJ%22%2C%22FK%22%2C%22FM%22%2C%22FO%22%2C%22FR%22%2C%22GA%22%2C%22GB%22%2C%22GD%22%2C%22GE%22%2C%22GF%22%2C%22GG%22%2C%22GH%22%2C%22GI%22%2C%22GL%22%2C%22GM%22%2C%22GN%22%2C%22GP%22%2C%22GQ%22%2C%22GR%22%2C%22GS%22%2C%22GT%22%2C%22GU%22%2C%22GW%22%2C%22GY%22%2C%22HK%22%2C%22HM%22%2C%22HN%22%2C%22HR%22%2C%22HT%22%2C%22HU%22%2C%22ID%22%2C%22IE%22%2C%22IL%22%2C%22IM%22%2C%22IN%22%2C%22IO%22%2C%22IQ%22%2C%22IR%22%2C%22IS%22%2C%22IT%22%2C%22JE%22%2C%22JM%22%2C%22JO%22%2C%22JP%22%2C%22KE%22%2C%22KG%22%2C%22KH%22%2C%22KI%22%2C%22KM%22%2C%22KN%22%2C%22KP%22%2C%22KR%22%2C%22KW%22%2C%22KY%22%2C%22KZ%22%2C%22LA%22%2C%22LB%22%2C%22LC%22%2C%22LI%22%2C%22LK%22%2C%22LR%22%2C%22LS%22%2C%22LT%22%2C%22LU%22%2C%22LV%22%2C%22LY%22%2C%22MA%22%2C%22MC%22%2C%22MD%22%2C%22ME%22%2C%22MF%22%2C%22MG%22%2C%22MH%22%2C%22MK%22%2C%22ML%22%2C%22MM%22%2C%22MN%22%2C%22MO%22%2C%22MP%22%2C%22MQ%22%2C%22MR%22%2C%22MS%22%2C%22MT%22%2C%22MU%22%2C%22MV%22%2C%22MW%22%2C%22MX%22%2C%22MY%22%2C%22MZ%22%2C%22NA%22%2C%22NC%22%2C%22NE%22%2C%22NF%22%2C%22NG%22%2C%22NI%22%2C%22NL%22%2C%22NO%22%2C%22NP%22%2C%22NR%22%2C%22NU%22%2C%22NZ%22%2C%22OM%22%2C%22PA%22%2C%22PE%22%2C%22PF%22%2C%22PG%22%2C%22PH%22%2C%22PK%22%2C%22PL%22%2C%22PM%22%2C%22PN%22%2C%22PR%22%2C%22PS%22%2C%22PT%22%2C%22PW%22%2C%22PY%22%2C%22QA%22%2C%22RE%22%2C%22RO%22%2C%22RS%22%2C%22RU%22%2C%22RW%22%2C%22SA%22%2C%22SB%22%2C%22SC%22%2C%22SD%22%2C%22SE%22%2C%22SG%22%2C%22SH%22%2C%22SI%22%2C%22SJ%22%2C%22SK%22%2C%22SL%22%2C%22SM%22%2C%22SN%22%2C%22SO%22%2C%22SR%22%2C%22SS%22%2C%22ST%22%2C%22SV%22%2C%22SX%22%2C%22SY%22%2C%22SZ%22%2C%22TC%22%2C%22TD%22%2C%22TF%22%2C%22TG%22%2C%22TH%22%2C%22TJ%22%2C%22TK%22%2C%22TL%22%2C%22TM%22%2C%22TN%22%2C%22TO%22%2C%22TR%22%2C%22TT%22%2C%22TV%22%2C%22TW%22%2C%22TZ%22%2C%22UA%22%2C%22UG%22%2C%22UM%22%2C%22US%22%2C%22UY%22%2C%22UZ%22%2C%22VA%22%2C%22VC%22%2C%22VE%22%2C%22VG%22%2C%22VI%22%2C%22VN%22%2C%22VU%22%2C%22WF%22%2C%22WS%22%2C%22YE%22%2C%22YT%22%2C%22ZA%22%2C%22ZM%22%2C%22ZW%22%5D%2C%22isUnlisted%22%3Atrue%2C%22hasYpcMetadata%22%3Afalse%2C%22viewCount%22%3A%225340898%22%2C%22category%22%3A%22Science+%5Cu0026+Technology%22%2C%22publishDate%22%3A%222025-09-22T03%3A50%3A03-07%3A00%22%2C%22ownerChannelName%22%3A%22Hostinger%22%2C%22uploadDate%22%3A%222025-09-22T03%3A50%3A03-07%3A00%22%2C%22isShortsEligible%22%3Afalse%2C%22externalVideoId%22%3A%22EC018ZtNXaA%22%2C%22likeCount%22%3A%2210%22%2C%22canonicalUrl%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEC018ZtNXaA%22%7D%7D%2C%22cards%22%3A%7B%22cardCollectionRenderer%22%3A%7B%22cards%22%3A%5B%7B%22cardRenderer%22%3A%7B%22teaser%22%3A%7B%22simpleCardTeaserRenderer%22%3A%7B%22message%22%3A%7B%22simpleText%22%3A%22View+corrections%22%7D%2C%22trackingParams%22%3A%22CAYQ0DYiEwiayum9xeCRAxXchekFHbT8OMQ%3D%22%2C%22impressionLoggingUrlsV2s%22%3A%5B%7B%22baseUrl%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fpagead%2Finteraction%2F%3Fai%3DCQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA%5Cu0026sigh%3DlpFQF-hsiEY%5Cu0026cid%3DCAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg%5Cu0026label%3Dvideo_card_impression%22%7D%5D%2C%22clickLoggingUrlsV2s%22%3A%5B%7B%22baseUrl%22%3A%22https%3A%2F%2Fwww.googleadservices.com%2Fpagead%2Faclk%3Fsa%3DL%5Cu0026ai%3DCB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB%5Cu0026gclid%3DCj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB%5Cu0026num%3D2%5Cu0026cid%3DCAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg%5Cu0026ad_cpn%3D%255BAD_CPN%255D%5Cu0026sig%3DAOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A%5Cu0026ctype%3D110%5Cu0026ms%3D%255BCLICK_MS%255D%5Cu0026label%3Dvideo_card_expand%22%7D%5D%2C%22iconClickLoggingUrlsV2s%22%3A%5B%7B%22baseUrl%22%3A%22https%3A%2F%2Fwww.googleadservices.com%2Fpagead%2Faclk%3Fsa%3DL%5Cu0026ai%3DCB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB%5Cu0026gclid%3DCj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB%5Cu0026num%3D2%5Cu0026cid%3DCAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg%5Cu0026ad_cpn%3D%255BAD_CPN%255D%5Cu0026sig%3DAOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A%5Cu0026ctype%3D110%5Cu0026ms%3D%255BCLICK_MS%255D%5Cu0026label%3Dvideo_card_expand%22%7D%5D%2C%22prominent%22%3Atrue%2C%22logVisibilityUpdates%22%3Atrue%2C%22onTapCommand%22%3A%7B%22clickTrackingParams%22%3A%22CAYQ0DYiEwiayum9xeCRAxXchekFHbT8OMTKAQTsTW8y%22%2C%22changeEngagementPanelVisibilityAction%22%3A%7B%22targetId%22%3A%22engagement-panel-error-corrections%22%2C%22visibility%22%3A%22ENGAGEMENT_PANEL_VISIBILITY_EXPANDED%22%7D%7D%7D%7D%2C%22cueRanges%22%3A%5B%7B%22startCardActiveMs%22%3A0%2C%22endCardActiveMs%22%3A5000%2C%22teaserDurationMs%22%3A6000%2C%22iconAfterTeaserMs%22%3A5000%7D%5D%2C%22trackingParams%22%3A%22CAUQtZcBGAAiEwiayum9xeCRAxXchekFHbT8OMQ%3D%22%7D%7D%5D%2C%22drawerIconClickLoggingUrlsV2s%22%3A%5B%7B%22baseUrl%22%3A%22https%3A%2F%2Fwww.googleadservices.com%2Fpagead%2Faclk%3Fsa%3DL%5Cu0026ai%3DCB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB%5Cu0026gclid%3DCj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB%5Cu0026num%3D2%5Cu0026cid%3DCAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg%5Cu0026ad_cpn%3D%255BAD_CPN%255D%5Cu0026sig%3DAOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A%5Cu0026ctype%3D110%5Cu0026ms%3D%255BCLICK_MS%255D%5Cu0026label%3Dvideo_card_expand%22%7D%5D%2C%22drawerCloseLoggingUrlsV2s%22%3A%5B%7B%22baseUrl%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fpagead%2Finteraction%2F%3Fai%3DCQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA%5Cu0026sigh%3DlpFQF-hsiEY%5Cu0026cid%3DCAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg%5Cu0026label%3Dvideo_card_dismiss%22%7D%5D%2C%22headerText%22%3A%7B%22simpleText%22%3A%22From+Hostinger%22%7D%2C%22icon%22%3A%7B%22infoCardIconRenderer%22%3A%7B%22trackingParams%22%3A%22CAQQsJcBIhMImsrpvcXgkQMV3IXpBR20%2FDjE%22%7D%7D%2C%22closeButton%22%3A%7B%22infoCardIconRenderer%22%3A%7B%22trackingParams%22%3A%22CAMQsZcBIhMImsrpvcXgkQMV3IXpBR20%2FDjE%22%7D%7D%2C%22trackingParams%22%3A%22CAIQwjciEwiayum9xeCRAxXchekFHbT8OMQ%3D%22%2C%22allowTeaserDismiss%22%3Atrue%2C%22logIconVisibilityUpdates%22%3Atrue%7D%7D%2C%22trackingParams%22%3A%22CAAQu2kiEwiayum9xeCRAxXchekFHbT8OMQ%3D%22%2C%22adBreakHeartbeatParams%22%3A%22Q0FBJTNE%22%2C%22frameworkUpdates%22%3A%7B%22entityBatchUpdate%22%3A%7B%22mutations%22%3A%5B%7B%22entityKey%22%3A%22Eg0KC0VDMDE4WnROWGFBIPYBKAE%253D%22%2C%22type%22%3A%22ENTITY_MUTATION_TYPE_REPLACE%22%2C%22payload%22%3A%7B%22offlineabilityEntity%22%3A%7B%22key%22%3A%22Eg0KC0VDMDE4WnROWGFBIPYBKAE%253D%22%2C%22offlineabilityRenderer%22%3A%22CAEaGwoTChEKD0Z1bGwgSEQgKDEwODBwKRgHIAIoABoXCg8KDQoLSGlnaCAoNzIwcCkYAiACKAAaGQoRCg8KDU1lZGl1bSAoMzYwcCkYASABKAEaFgoOCgwKCkxvdyAoMTQ0cCkYBCABKAEiDTILb2ZmbGluZWxpc3Q%3D%22%2C%22addToOfflineButtonState%22%3A%22ADD_TO_OFFLINE_BUTTON_STATE_ENABLED%22%2C%22contentCheckOk%22%3Afalse%2C%22racyCheckOk%22%3Afalse%2C%22loggingDirectives%22%3A%7B%22trackingParams%22%3A%22CAEQxzciEwiayum9xeCRAxXchekFHbT8OMQ%3D%22%2C%22visibility%22%3A%7B%22types%22%3A4%7D%7D%7D%7D%7D%5D%2C%22timestamp%22%3A%7B%22seconds%22%3A1766933837%2C%22nanos%22%3A559129890%7D%7D%7D%7D","elementId":"UG6uWzLEXnMlvRUD","trackingParams":"CIIBEPn3ASITCJuG1L3F4JEDFdyF6QUdtPw4xA==","legacyInfoCardVastExtension":"EvcSCAIS8hJodHRwczovL3d3dy5nb29nbGVhZHNlcnZpY2VzLmNvbS9wYWdlYWQvYWNsaz9zYT1MJmFpPUNCMVlDVFVWUmFmdm1ETUtPdnIwUHg1ekUyUUhmM1lqX2d3R19wcWk5clJYaTNLUDlya0lRQWlBQVlMT1FXb0lCRjJOaExYQjFZaTAyTWpFNU9ERXhOelEzTURRNU16Y3hvQUdIbnNfaUFxa0M0Rzl5Y3VDX3N6Nm9Bd1RJQXdxcUJQd0RUOUM4aFBwVnlQcjc1WEE1Y1BxaFNqb3FXOGtvNmhTMl9uaTVrR2RfVldja21iOFhqTnUweXJCTDJ0elpMOEdmQXUtQ1JEYTh1dEE0dlJGYmVnb2tKMDZjejFTVWFZTDRicDB3VDJkS0xORGdFNVRpbXlQWmdwUzIwa2FNeVIxWHF2VFhjVktYNGhDU0RFOGZqZ05XeHRTYmdDVkdERDZoZi1sOGVnb2VZNW42dnAtR0JjTW84MjVGN1NHaWFfTEdRcm5ZeXdDRU9HQXhyX3h2eVZwUTZyZnJCQTRDS0NVLW5CLWNvSjZoREg3NENwSTZRa1RYR0x0dW1KS2pJTEFubGNNM3Z6Rk5jdEZvSlhqSmJhLS0wYnZnUGVhdVhSaWVpN0w0eDUxTjF4M3U3cVVkR00yNHc2cm1Ud0lsZmtkZW5RS2lUTWVFTzdpcV82WkRRMlhuNUhtT041emI2NG8tb1I1UzJSbk9QRHpnZnlWOUloczFmUEVYSkFuTWRORUdISlhaTm5lSzdoc1F0R0xtZmdHRFljX0NpcUFILW1GRXBzQ2E4NnBHQnh1SGxfd0RjcUNIM291ZnM2cXRPZDc1WGF4bFFsZ1puLWdvV0tWR1RtbllaR1pnOWhrTl9TS3c2eWxFX2k0eXRWTGt3cENERlFoYjJTdm9xMkVlV0FyQkZHa3hsYkxoUWc1dTJBNGVwYzJ1U1lHX2ZIUjVweWRZTWZqVEJDOTN1MHUza1cySUFVNWs4UW9QbEc3VjZZSmtHaEx6UE9IQ051WHNVQmdjelUzaVR2cktQQXVxVDNyQ253eFcxTnFvX092eXhMS25UQ2dtQzd3bTNFQl9aNlpGcVFVaVBrS1VielZmZFFPZmNYMTVpM2JvMEdvemNrWWNINEpiODRnRnFJaXUxbE9nQnFFQmdBZmg0YkNkQVlnSEFaQUhBcWdIOHNDeEFxZ0h1TVN4QXFnSDRiYXhBcWdIcGMteEFxZ0g1NTJ4QXFnSDZKMnhBcWdINzdXeEFxZ0g4TFd4QXFnSC1kT3hBcWdIaEFpb0I2YlVzUUtvQjZqU0c2Z0h0Z2VvQjdDYnNRS29CNjZ4c1FLb0ItYThzUUtvQjhxNnNRS29CXzJ5c1FLb0JfZTRzUUtvQl9pNHNRS29COGpQc1FLb0I4blBzUUtvQjgzSHNRS29CX0hSc1FLb0JfelZzUUtvQl92VnNRS29CNHpXc1FLb0I0dldzUUtvQjUzWHNRS29CNTNVc1FLb0I0SEdHNmdIX0steEFxZ0hfUWVvQjZ2Rkc2Z0huTndicUFlM29iRUNxQWZWcWJFQ3FBZm4yckVDcUFmZXRiRUNrZ2dMUlVNd01UaGFkRTVZWVVHb0NBSFNDQ3dJQUJBQ0dGb3lBUUE2RVlfUWdJQ0FnQVNBd0lDQWdJQ0FnQUlxU05tZzBqVlFGRmpZcTlXOXhlQ1JBX0lJSDJOaExYbDBMV2h2YzNRdGNIVmlMVGd4TlRjek5qVTBNVE15TmpNeU1qT2FDU3RvZEhSd2N6b3ZMM2QzZHk1b2IzTjBhVzVuWlhJdVkyOXRMM2R2Y21Sd2NtVnpjeTFvYjNOMGFXNW5zUWszekRjSmQ2Z2dxOGdKQThnSkdNZ0pqd0hJQ2NJQm1Bc0JvUXVJWVF5X1JkMTZCYm9MWmdnQkVBRVlCQ0FCS0FFd0VFQUJTQUZnQUdnQWNBS0lBUUNZQVFLaUFUTUtIaUFEMnJnRUdESVdPaFFLRWlnd1NLbnV3dHV1R3BnWGdZMm5QWmdaQUJnQUlBQllBV0FBY0FIUUFRR29BZ1hBQWdLb0FRSFlBUUdBQWdHSUFnVzZBd1YyYVhSd1pkQUxFdElNQWhBQm1nMEJFcW9OQWtKRXlBMEIwZzJwQVdoMGRIQnpPaTh2ZDNkM0xtaHZjM1JwYm1kbGNpNWpiMjB2ZDI5eVpIQnlaWE56TFdodmMzUnBibWNfZFhSdFgyTmhiWEJoYVdkdVBWSk5TMVF0VmtGRExVUmxiV0Z1WkVkbGJpMVhiM0prVUhKbGMzTXRWMjl2UTI5dGJXVnlZMlY4VGxRNldXOTFWSFZpWlh4TVR6cENSQ1oxZEcxZmJXVmthWFZ0UFhCd1l5Wm5ZV1JmYzI5MWNtTmxQVEltWjJGa1gyTmhiWEJoYVdkdWFXUTlNakkwTmpFeU5USTJORGk0RV9fX19fX19fX19fX3dHd0ZBSEFGY21BZ0VEUUZRSFlGUUdRRmdHWUZnSGlGZ0lJQVlBWEFZb1hGZ2dER0FFZ0FTZ0JNQUU0QVVBQlNBRlFBVmdCWUFLZ0Z3R3BGek9MaDR5QUdYMDd1aGNHS0FBd0FEZ0IwQmdCOEJnQnNoa0JOOElaQWdnQiZnY2xpZD1DajBLQ1FpQXg4UEtCaEQxQVJJc0FLc21HYmNkY1VxaWxBUFM2UVpQN3pBa3hBVDZNWnlqLXJsc3MycnA0VWktZUFsRlpXNFVXN2tjSUc4YUFvMVFFQUx3X3djQiZudW09MiZjaWQ9Q0FFU3BRSGc5Z3pCVVhjWlNERl9MX3pKeDZuZjBVMEduUk9iY3M0WXhicnlNNUwxZTR3UWNqc0VtRUJVN2Q5RGJ1OFBZTWd4MVd0MWd1aFhPS0F4dHBVVXM5NWctcFAzWV94WjQ1am9RVmMzOUtPak1CcHhxZHRCMXI0aG1ISmZPdXlOUXExUW51TjNUSjkwMnQxQTZTemRPUzVJTjZqY3c1VlEzLXdVckNlSFByUkYzSTRVcnBuR3VDb3RnUmlPN2ZhNy1fNWdFaVlQa1RPdkhtRFFJaFlPUXhaRUZ0eHNzRmcmYWRfY3BuPSU1QkFEX0NQTiU1RCZzaWc9QU9ENjRfMFdZNnM0c0xxTUlVNHRobVYteTZka1B0a082QSZjdHlwZT0xMTAmbXM9JTVCQ0xJQ0tfTVMlNUQmbGFiZWw9dmlkZW9fY2FyZF9leHBhbmQS-hIIBhL1Emh0dHBzOi8vd3d3Lmdvb2dsZWFkc2VydmljZXMuY29tL3BhZ2VhZC9hY2xrP3NhPUwmYWk9Q0IxWUNUVVZSYWZ2bURNS092cjBQeDV6RTJRSGYzWWpfZ3dHX3BxaTlyUlhpM0tQOXJrSVFBaUFBWUxPUVdvSUJGMk5oTFhCMVlpMDJNakU1T0RFeE56UTNNRFE1TXpjeG9BR0huc19pQXFrQzRHOXljdUNfc3o2b0F3VElBd3FxQlB3RFQ5QzhoUHBWeVByNzVYQTVjUHFoU2pvcVc4a282aFMyX25pNWtHZF9WV2NrbWI4WGpOdTB5ckJMMnR6Wkw4R2ZBdS1DUkRhOHV0QTR2UkZiZWdva0owNmN6MVNVYVlMNGJwMHdUMmRLTE5EZ0U1VGlteVBaZ3BTMjBrYU15UjFYcXZUWGNWS1g0aENTREU4ZmpnTld4dFNiZ0NWR0RENmhmLWw4ZWdvZVk1bjZ2cC1HQmNNbzgyNUY3U0dpYV9MR1Fybll5d0NFT0dBeHJfeHZ5VnBRNnJmckJBNENLQ1UtbkItY29KNmhESDc0Q3BJNlFrVFhHTHR1bUpLaklMQW5sY00zdnpGTmN0Rm9KWGpKYmEtLTBidmdQZWF1WFJpZWk3TDR4NTFOMXgzdTdxVWRHTTI0dzZybVR3SWxma2RlblFLaVRNZUVPN2lxXzZaRFEyWG41SG1PTjV6YjY0by1vUjVTMlJuT1BEemdmeVY5SWhzMWZQRVhKQW5NZE5FR0hKWFpObmVLN2hzUXRHTG1mZ0dEWWNfQ2lxQUgtbUZFcHNDYTg2cEdCeHVIbF93RGNxQ0gzb3VmczZxdE9kNzVYYXhsUWxnWm4tZ29XS1ZHVG1uWVpHWmc5aGtOX1NLdzZ5bEVfaTR5dFZMa3dwQ0RGUWhiMlN2b3EyRWVXQXJCRkdreGxiTGhRZzV1MkE0ZXBjMnVTWUdfZkhSNXB5ZFlNZmpUQkM5M3UwdTNrVzJJQVU1azhRb1BsRzdWNllKa0doTHpQT0hDTnVYc1VCZ2N6VTNpVHZyS1BBdXFUM3JDbnd4VzFOcW9fT3Z5eExLblRDZ21DN3dtM0VCX1o2WkZxUVVpUGtLVWJ6VmZkUU9mY1gxNWkzYm8wR296Y2tZY0g0SmI4NGdGcUlpdTFsT2dCcUVCZ0FmaDRiQ2RBWWdIQVpBSEFxZ0g4c0N4QXFnSHVNU3hBcWdINGJheEFxZ0hwYy14QXFnSDU1MnhBcWdINkoyeEFxZ0g3N1d4QXFnSDhMV3hBcWdILWRPeEFxZ0hoQWlvQjZiVXNRS29CNmpTRzZnSHRnZW9CN0Nic1FLb0I2NnhzUUtvQi1hOHNRS29COHE2c1FLb0JfMnlzUUtvQl9lNHNRS29CX2k0c1FLb0I4alBzUUtvQjhuUHNRS29CODNIc1FLb0JfSFJzUUtvQl96VnNRS29CX3ZWc1FLb0I0eldzUUtvQjR2V3NRS29CNTNYc1FLb0I1M1VzUUtvQjRIR0c2Z0hfSy14QXFnSF9RZW9CNnZGRzZnSG5Od2JxQWUzb2JFQ3FBZlZxYkVDcUFmbjJyRUNxQWZldGJFQ2tnZ0xSVU13TVRoYWRFNVlZVUdvQ0FIU0NDd0lBQkFDR0ZveUFRQTZFWV9RZ0lDQWdBU0F3SUNBZ0lDQWdBSXFTTm1nMGpWUUZGallxOVc5eGVDUkFfSUlIMk5oTFhsMExXaHZjM1F0Y0hWaUxUZ3hOVGN6TmpVME1UTXlOak15TWpPYUNTdG9kSFJ3Y3pvdkwzZDNkeTVvYjNOMGFXNW5aWEl1WTI5dEwzZHZjbVJ3Y21WemN5MW9iM04wYVc1bnNRazN6RGNKZDZnZ3E4Z0pBOGdKR01nSmp3SElDY0lCbUFzQm9RdUlZUXlfUmQxNkJib0xaZ2dCRUFFWUJDQUJLQUV3RUVBQlNBRmdBR2dBY0FLSUFRQ1lBUUtpQVRNS0hpQUQycmdFR0RJV09oUUtFaWd3U0tudXd0dXVHcGdYZ1kyblBaZ1pBQmdBSUFCWUFXQUFjQUhRQVFHb0FnWEFBZ0tvQVFIWUFRR0FBZ0dJQWdXNkF3VjJhWFJ3WmRBTEV0SU1BaEFCbWcwQkVxb05Ba0pFeUEwQjBnMnBBV2gwZEhCek9pOHZkM2QzTG1odmMzUnBibWRsY2k1amIyMHZkMjl5WkhCeVpYTnpMV2h2YzNScGJtY19kWFJ0WDJOaGJYQmhhV2R1UFZKTlMxUXRWa0ZETFVSbGJXRnVaRWRsYmkxWGIzSmtVSEpsYzNNdFYyOXZRMjl0YldWeVkyVjhUbFE2V1c5MVZIVmlaWHhNVHpwQ1JDWjFkRzFmYldWa2FYVnRQWEJ3WXlabllXUmZjMjkxY21ObFBUSW1aMkZrWDJOaGJYQmhhV2R1YVdROU1qSTBOakV5TlRJMk5EaTRFX19fX19fX19fX19fd0d3RkFIQUZjbUFnRURRRlFIWUZRR1FGZ0dZRmdIaUZnSUlBWUFYQVlvWEZnZ0RHQUVnQVNnQk1BRTRBVUFCU0FGUUFWZ0JZQUtnRndHcEZ6T0xoNHlBR1gwN3VoY0dLQUF3QURnQjBCZ0I4QmdCc2hrQk44SVpBZ2dCJmdjbGlkPUNqMEtDUWlBeDhQS0JoRDFBUklzQUtzbUdiY2RjVXFpbEFQUzZRWlA3ekFreEFUNk1aeWotcmxzczJycDRVaS1lQWxGWlc0VVc3a2NJRzhhQW8xUUVBTHdfd2NCJm51bT0yJmNpZD1DQUVTcFFIZzlnekJVWGNaU0RGX0xfekp4Nm5mMFUwR25ST2JjczRZeGJyeU01TDFlNHdRY2pzRW1FQlU3ZDlEYnU4UFlNZ3gxV3QxZ3VoWE9LQXh0cFVVczk1Zy1wUDNZX3haNDVqb1FWYzM5S09qTUJweHFkdEIxcjRobUhKZk91eU5RcTFRbnVOM1RKOTAydDFBNlN6ZE9TNUlONmpjdzVWUTMtd1VyQ2VIUHJSRjNJNFVycG5HdUNvdGdSaU83ZmE3LV81Z0VpWVBrVE92SG1EUUloWU9ReFpFRnR4c3NGZyZhZF9jcG49JTVCQURfQ1BOJTVEJnNpZz1BT0Q2NF8wV1k2czRzTHFNSVU0dGhtVi15NmRrUHRrTzZBJmN0eXBlPTExMCZtcz0lNUJDTElDS19NUyU1RCZsYWJlbD12aWRlb19jYXJkX1tBQ1RUWVBFXRKWDggBEpEOaHR0cHM6Ly93d3cueW91dHViZS5jb20vcGFnZWFkL2ludGVyYWN0aW9uLz9haT1DUWtMMVRVVlJhZnZtRE1LT3ZyMFB4NXpFMlFIZjNZal9nd0dfcHFpOXJSWGkzS1A5cmtJUUFpQUFZTE9RV29JQkYyTmhMWEIxWWkwMk1qRTVPREV4TnpRM01EUTVNemN4b0FHSG5zX2lBcWtDNEc5eWN1Q19zejZvQXdUSUF3cXFCUGtEVDlDOGhQcFZ5UHI3NVhBNWNQcWhTam9xVzhrbzZoUzJfbmk1a0dkX1ZXY2ttYjhYak51MHlyQkwydHpaTDhHZkF1LUNSRGE4dXRBNHZSRmJlZ29rSjA2Y3oxU1VhWUw0YnAwd1QyZEtMTkRnRTVUaW15UFpncFMyMGthTXlSMVhxdlRYY1ZLWDRoQ1NERThmamdOV3h0U2JnQ1ZHREQ2aGYtbDhlZ29lWTVuNnZwLUdCY01vODI1RjdTR2lhX0xHUXJuWXl3Q0VPR0F4cl94dnlWcFE2cmZyQkE0Q0tDVS1uQi1jb0o2aERINzRDcEk2UWtUWEdMdHVtSktqSUxBbmxjTTN2ekZOY3RGb0pYakpiYS0tMGJ2Z1BlYXVYUmllaTdMNHg1MU4xeDN1N3FVZEdNMjR3NnJtVHdJbGZrZGVuUUtpVE1lRU83aXFfNlpEUTJYbjVIbU9ONXpiNjRvLW9SNVMyUm5PUER6Z2Z5VjlJaHMxZlBFWEpBbk1kTkVHSEpYWk5uZUs3aHNRdEdMbWZnR0RZY19DaXFBSC1tRkVwc0NhODZwR0J4dUhsX3dEY3FDSDNvdWZzNnF0T2Q3NVhheGxRbGdabi1nb1dLVkdUbW5ZWkdaZzloa05fU0t3NnlsRV9pNHl0Vkxrd3BDREZRaGIyU3ZvcTJFZVdBckJGR2t4bGJMaFFnNXUyQTRlcGMydVNZR19mSFI1cHlkWU1malRCQzkzdTB1M2tXMklBVTVrOFFvUGxHN1Y2WUprR2hMelBPSENOdVhzVUJnY3pVM2lUdnJLUEF1cVQzckNud3hXMU5xb3BPcEwxcm1HMUFtMG5tX1k5YU9CUm1UaTJ1Q3RWbmVlNnp4eGJaeEt6ZzZjRHByVV9IS2toS0ExX0tBR29RR0FCLUhoc0owQmlBY0JrQWNDcUFmeXdMRUNxQWU0eExFQ3FBZmh0ckVDcUFlbHo3RUNxQWZubmJFQ3FBZm9uYkVDcUFmdnRiRUNxQWZ3dGJFQ3FBZjUwN0VDcUFlRUNLZ0hwdFN4QXFnSHFOSWJxQWUyQjZnSHNKdXhBcWdIcnJHeEFxZ0g1cnl4QXFnSHlycXhBcWdIX2JLeEFxZ0g5N2l4QXFnSC1MaXhBcWdIeU0teEFxZ0h5Yy14QXFnSHpjZXhBcWdIOGRHeEFxZ0hfTld4QXFnSC05V3hBcWdIak5heEFxZ0hpOWF4QXFnSG5kZXhBcWdIbmRTeEFxZ0hnY1licUFmOHI3RUNxQWZqMlJ1U0NBdEZRekF4T0ZwMFRsaGhRYWdJQWRJSUxBZ0FFQUlZV2pJQkFEb1JqOUNBZ0lDQUJJREFnSUNBZ0lDQUFpcEkyYURTTlZBVVdOaXIxYjNGNEpFRDhnZ2ZZMkV0ZVhRdGFHOXpkQzF3ZFdJdE9ERTFOek0yTlRReE16STJNekl5TThnSkE4Z0pHTWdKandISUNjSUJvUXVJWVF5X1JkMTZCYm9MWmdnQkVBRVlCQ0FCS0FFd0VFQUJTQUZnQUdnQWNBS0lBUUNZQVFLaUFUTUtIaUFEMnJnRUdESVdPaFFLRWlnd1NLbnV3dHV1R3BnWGdZMm5QWmdaQUJnQUlBQllBV0FBY0FIUUFRR29BZ1hBQWdLb0FRSFlBUUdBQWdHSUFnVzZBd1YyYVhSd1pkSU1BaEFCdUJQX19fX19fX19fX184QnNCUUJ3QlhKZ0lCQWtCWUJpaGNXQ0FNWUFTQUJLQUV3QVRnQlFBRklBVkFCV0FGZ0FxQVhBYWtYTTR1SGpJQVpmVHU2RndRb0FEQUEmc2lnaD1scEZRRi1oc2lFWSZjaWQ9Q0FFU3BRSGc5Z3pCVVhjWlNERl9MX3pKeDZuZjBVMEduUk9iY3M0WXhicnlNNUwxZTR3UWNqc0VtRUJVN2Q5RGJ1OFBZTWd4MVd0MWd1aFhPS0F4dHBVVXM5NWctcFAzWV94WjQ1am9RVmMzOUtPak1CcHhxZHRCMXI0aG1ISmZPdXlOUXExUW51TjNUSjkwMnQxQTZTemRPUzVJTjZqY3c1VlEzLXdVckNlSFByUkYzSTRVcnBuR3VDb3RnUmlPN2ZhNy1fNWdFaVlQa1RPdkhtRFFJaFlPUXhaRUZ0eHNzRmcmbGFiZWw9dmlkZW9fY2FyZF9pbXByZXNzaW9uEpMOCAQSjg5odHRwczovL3d3dy55b3V0dWJlLmNvbS9wYWdlYWQvaW50ZXJhY3Rpb24vP2FpPUNRa0wxVFVWUmFmdm1ETUtPdnIwUHg1ekUyUUhmM1lqX2d3R19wcWk5clJYaTNLUDlya0lRQWlBQVlMT1FXb0lCRjJOaExYQjFZaTAyTWpFNU9ERXhOelEzTURRNU16Y3hvQUdIbnNfaUFxa0M0Rzl5Y3VDX3N6Nm9Bd1RJQXdxcUJQa0RUOUM4aFBwVnlQcjc1WEE1Y1BxaFNqb3FXOGtvNmhTMl9uaTVrR2RfVldja21iOFhqTnUweXJCTDJ0elpMOEdmQXUtQ1JEYTh1dEE0dlJGYmVnb2tKMDZjejFTVWFZTDRicDB3VDJkS0xORGdFNVRpbXlQWmdwUzIwa2FNeVIxWHF2VFhjVktYNGhDU0RFOGZqZ05XeHRTYmdDVkdERDZoZi1sOGVnb2VZNW42dnAtR0JjTW84MjVGN1NHaWFfTEdRcm5ZeXdDRU9HQXhyX3h2eVZwUTZyZnJCQTRDS0NVLW5CLWNvSjZoREg3NENwSTZRa1RYR0x0dW1KS2pJTEFubGNNM3Z6Rk5jdEZvSlhqSmJhLS0wYnZnUGVhdVhSaWVpN0w0eDUxTjF4M3U3cVVkR00yNHc2cm1Ud0lsZmtkZW5RS2lUTWVFTzdpcV82WkRRMlhuNUhtT041emI2NG8tb1I1UzJSbk9QRHpnZnlWOUloczFmUEVYSkFuTWRORUdISlhaTm5lSzdoc1F0R0xtZmdHRFljX0NpcUFILW1GRXBzQ2E4NnBHQnh1SGxfd0RjcUNIM291ZnM2cXRPZDc1WGF4bFFsZ1puLWdvV0tWR1RtbllaR1pnOWhrTl9TS3c2eWxFX2k0eXRWTGt3cENERlFoYjJTdm9xMkVlV0FyQkZHa3hsYkxoUWc1dTJBNGVwYzJ1U1lHX2ZIUjVweWRZTWZqVEJDOTN1MHUza1cySUFVNWs4UW9QbEc3VjZZSmtHaEx6UE9IQ051WHNVQmdjelUzaVR2cktQQXVxVDNyQ253eFcxTnFvcE9wTDFybUcxQW0wbm1fWTlhT0JSbVRpMnVDdFZuZWU2enh4Ylp4S3pnNmNEcHJVX0hLa2hLQTFfS0FHb1FHQUItSGhzSjBCaUFjQmtBY0NxQWZ5d0xFQ3FBZTR4TEVDcUFmaHRyRUNxQWVsejdFQ3FBZm5uYkVDcUFmb25iRUNxQWZ2dGJFQ3FBZnd0YkVDcUFmNTA3RUNxQWVFQ0tnSHB0U3hBcWdIcU5JYnFBZTJCNmdIc0p1eEFxZ0hyckd4QXFnSDVyeXhBcWdIeXJxeEFxZ0hfYkt4QXFnSDk3aXhBcWdILUxpeEFxZ0h5TS14QXFnSHljLXhBcWdIemNleEFxZ0g4ZEd4QXFnSF9OV3hBcWdILTlXeEFxZ0hqTmF4QXFnSGk5YXhBcWdIbmRleEFxZ0huZFN4QXFnSGdjWWJxQWY4cjdFQ3FBZmoyUnVTQ0F0RlF6QXhPRnAwVGxoaFFhZ0lBZElJTEFnQUVBSVlXaklCQURvUmo5Q0FnSUNBQklEQWdJQ0FnSUNBQWlwSTJhRFNOVkFVV05pcjFiM0Y0SkVEOGdnZlkyRXRlWFF0YUc5emRDMXdkV0l0T0RFMU56TTJOVFF4TXpJMk16SXlNOGdKQThnSkdNZ0pqd0hJQ2NJQm9RdUlZUXlfUmQxNkJib0xaZ2dCRUFFWUJDQUJLQUV3RUVBQlNBRmdBR2dBY0FLSUFRQ1lBUUtpQVRNS0hpQUQycmdFR0RJV09oUUtFaWd3U0tudXd0dXVHcGdYZ1kyblBaZ1pBQmdBSUFCWUFXQUFjQUhRQVFHb0FnWEFBZ0tvQVFIWUFRR0FBZ0dJQWdXNkF3VjJhWFJ3WmRJTUFoQUJ1QlBfX19fX19fX19fXzhCc0JRQndCWEpnSUJBa0JZQmloY1dDQU1ZQVNBQktBRXdBVGdCUUFGSUFWQUJXQUZnQXFBWEFha1hNNHVIaklBWmZUdTZGd1FvQURBQSZzaWdoPWxwRlFGLWhzaUVZJmNpZD1DQUVTcFFIZzlnekJVWGNaU0RGX0xfekp4Nm5mMFUwR25ST2JjczRZeGJyeU01TDFlNHdRY2pzRW1FQlU3ZDlEYnU4UFlNZ3gxV3QxZ3VoWE9LQXh0cFVVczk1Zy1wUDNZX3haNDVqb1FWYzM5S09qTUJweHFkdEIxcjRobUhKZk91eU5RcTFRbnVOM1RKOTAydDFBNlN6ZE9TNUlONmpjdzVWUTMtd1VyQ2VIUHJSRjNJNFVycG5HdUNvdGdSaU83ZmE3LV81Z0VpWVBrVE92SG1EUUloWU9ReFpFRnR4c3NGZyZsYWJlbD12aWRlb19jYXJkX2Rpc21pc3MSmg4IBRKVDmh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BhZ2VhZC9pbnRlcmFjdGlvbi8_YWk9Q1FrTDFUVVZSYWZ2bURNS092cjBQeDV6RTJRSGYzWWpfZ3dHX3BxaTlyUlhpM0tQOXJrSVFBaUFBWUxPUVdvSUJGMk5oTFhCMVlpMDJNakU1T0RFeE56UTNNRFE1TXpjeG9BR0huc19pQXFrQzRHOXljdUNfc3o2b0F3VElBd3FxQlBrRFQ5QzhoUHBWeVByNzVYQTVjUHFoU2pvcVc4a282aFMyX25pNWtHZF9WV2NrbWI4WGpOdTB5ckJMMnR6Wkw4R2ZBdS1DUkRhOHV0QTR2UkZiZWdva0owNmN6MVNVYVlMNGJwMHdUMmRLTE5EZ0U1VGlteVBaZ3BTMjBrYU15UjFYcXZUWGNWS1g0aENTREU4ZmpnTld4dFNiZ0NWR0RENmhmLWw4ZWdvZVk1bjZ2cC1HQmNNbzgyNUY3U0dpYV9MR1Fybll5d0NFT0dBeHJfeHZ5VnBRNnJmckJBNENLQ1UtbkItY29KNmhESDc0Q3BJNlFrVFhHTHR1bUpLaklMQW5sY00zdnpGTmN0Rm9KWGpKYmEtLTBidmdQZWF1WFJpZWk3TDR4NTFOMXgzdTdxVWRHTTI0dzZybVR3SWxma2RlblFLaVRNZUVPN2lxXzZaRFEyWG41SG1PTjV6YjY0by1vUjVTMlJuT1BEemdmeVY5SWhzMWZQRVhKQW5NZE5FR0hKWFpObmVLN2hzUXRHTG1mZ0dEWWNfQ2lxQUgtbUZFcHNDYTg2cEdCeHVIbF93RGNxQ0gzb3VmczZxdE9kNzVYYXhsUWxnWm4tZ29XS1ZHVG1uWVpHWmc5aGtOX1NLdzZ5bEVfaTR5dFZMa3dwQ0RGUWhiMlN2b3EyRWVXQXJCRkdreGxiTGhRZzV1MkE0ZXBjMnVTWUdfZkhSNXB5ZFlNZmpUQkM5M3UwdTNrVzJJQVU1azhRb1BsRzdWNllKa0doTHpQT0hDTnVYc1VCZ2N6VTNpVHZyS1BBdXFUM3JDbnd4VzFOcW9wT3BMMXJtRzFBbTBubV9ZOWFPQlJtVGkydUN0Vm5lZTZ6eHhiWnhLemc2Y0RwclVfSEtraEtBMV9LQUdvUUdBQi1IaHNKMEJpQWNCa0FjQ3FBZnl3TEVDcUFlNHhMRUNxQWZodHJFQ3FBZWx6N0VDcUFmbm5iRUNxQWZvbmJFQ3FBZnZ0YkVDcUFmd3RiRUNxQWY1MDdFQ3FBZUVDS2dIcHRTeEFxZ0hxTklicUFlMkI2Z0hzSnV4QXFnSHJyR3hBcWdINXJ5eEFxZ0h5cnF4QXFnSF9iS3hBcWdIOTdpeEFxZ0gtTGl4QXFnSHlNLXhBcWdIeWMteEFxZ0h6Y2V4QXFnSDhkR3hBcWdIX05XeEFxZ0gtOVd4QXFnSGpOYXhBcWdIaTlheEFxZ0huZGV4QXFnSG5kU3hBcWdIZ2NZYnFBZjhyN0VDcUFmajJSdVNDQXRGUXpBeE9GcDBUbGhoUWFnSUFkSUlMQWdBRUFJWVdqSUJBRG9SajlDQWdJQ0FCSURBZ0lDQWdJQ0FBaXBJMmFEU05WQVVXTmlyMWIzRjRKRUQ4Z2dmWTJFdGVYUXRhRzl6ZEMxd2RXSXRPREUxTnpNMk5UUXhNekkyTXpJeU04Z0pBOGdKR01nSmp3SElDY0lCb1F1SVlReV9SZDE2QmJvTFpnZ0JFQUVZQkNBQktBRXdFRUFCU0FGZ0FHZ0FjQUtJQVFDWUFRS2lBVE1LSGlBRDJyZ0VHRElXT2hRS0VpZ3dTS251d3R1dUdwZ1hnWTJuUFpnWkFCZ0FJQUJZQVdBQWNBSFFBUUdvQWdYQUFnS29BUUhZQVFHQUFnR0lBZ1c2QXdWMmFYUndaZElNQWhBQnVCUF9fX19fX19fX19fOEJzQlFCd0JYSmdJQkFrQllCaWhjV0NBTVlBU0FCS0FFd0FUZ0JRQUZJQVZBQldBRmdBcUFYQWFrWE00dUhqSUFaZlR1NkZ3UW9BREFBJnNpZ2g9bHBGUUYtaHNpRVkmY2lkPUNBRVNwUUhnOWd6QlVYY1pTREZfTF96Sng2bmYwVTBHblJPYmNzNFl4YnJ5TTVMMWU0d1FjanNFbUVCVTdkOURidThQWU1neDFXdDFndWhYT0tBeHRwVVVzOTVnLXBQM1lfeFo0NWpvUVZjMzlLT2pNQnB4cWR0QjFyNGhtSEpmT3V5TlFxMVFudU4zVEo5MDJ0MUE2U3pkT1M1SU42amN3NVZRMy13VXJDZUhQclJGM0k0VXJwbkd1Q290Z1JpTzdmYTctXzVnRWlZUGtUT3ZIbURRSWhZT1F4WkVGdHhzc0ZnJmxhYmVsPXZpZGVvX2NhcmRfaGVhZGxpbmVfY2xpY2sSng4IBxKZDmh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BhZ2VhZC9pbnRlcmFjdGlvbi8_YWk9Q1FrTDFUVVZSYWZ2bURNS092cjBQeDV6RTJRSGYzWWpfZ3dHX3BxaTlyUlhpM0tQOXJrSVFBaUFBWUxPUVdvSUJGMk5oTFhCMVlpMDJNakU1T0RFeE56UTNNRFE1TXpjeG9BR0huc19pQXFrQzRHOXljdUNfc3o2b0F3VElBd3FxQlBrRFQ5QzhoUHBWeVByNzVYQTVjUHFoU2pvcVc4a282aFMyX25pNWtHZF9WV2NrbWI4WGpOdTB5ckJMMnR6Wkw4R2ZBdS1DUkRhOHV0QTR2UkZiZWdva0owNmN6MVNVYVlMNGJwMHdUMmRLTE5EZ0U1VGlteVBaZ3BTMjBrYU15UjFYcXZUWGNWS1g0aENTREU4ZmpnTld4dFNiZ0NWR0RENmhmLWw4ZWdvZVk1bjZ2cC1HQmNNbzgyNUY3U0dpYV9MR1Fybll5d0NFT0dBeHJfeHZ5VnBRNnJmckJBNENLQ1UtbkItY29KNmhESDc0Q3BJNlFrVFhHTHR1bUpLaklMQW5sY00zdnpGTmN0Rm9KWGpKYmEtLTBidmdQZWF1WFJpZWk3TDR4NTFOMXgzdTdxVWRHTTI0dzZybVR3SWxma2RlblFLaVRNZUVPN2lxXzZaRFEyWG41SG1PTjV6YjY0by1vUjVTMlJuT1BEemdmeVY5SWhzMWZQRVhKQW5NZE5FR0hKWFpObmVLN2hzUXRHTG1mZ0dEWWNfQ2lxQUgtbUZFcHNDYTg2cEdCeHVIbF93RGNxQ0gzb3VmczZxdE9kNzVYYXhsUWxnWm4tZ29XS1ZHVG1uWVpHWmc5aGtOX1NLdzZ5bEVfaTR5dFZMa3dwQ0RGUWhiMlN2b3EyRWVXQXJCRkdreGxiTGhRZzV1MkE0ZXBjMnVTWUdfZkhSNXB5ZFlNZmpUQkM5M3UwdTNrVzJJQVU1azhRb1BsRzdWNllKa0doTHpQT0hDTnVYc1VCZ2N6VTNpVHZyS1BBdXFUM3JDbnd4VzFOcW9wT3BMMXJtRzFBbTBubV9ZOWFPQlJtVGkydUN0Vm5lZTZ6eHhiWnhLemc2Y0RwclVfSEtraEtBMV9LQUdvUUdBQi1IaHNKMEJpQWNCa0FjQ3FBZnl3TEVDcUFlNHhMRUNxQWZodHJFQ3FBZWx6N0VDcUFmbm5iRUNxQWZvbmJFQ3FBZnZ0YkVDcUFmd3RiRUNxQWY1MDdFQ3FBZUVDS2dIcHRTeEFxZ0hxTklicUFlMkI2Z0hzSnV4QXFnSHJyR3hBcWdINXJ5eEFxZ0h5cnF4QXFnSF9iS3hBcWdIOTdpeEFxZ0gtTGl4QXFnSHlNLXhBcWdIeWMteEFxZ0h6Y2V4QXFnSDhkR3hBcWdIX05XeEFxZ0gtOVd4QXFnSGpOYXhBcWdIaTlheEFxZ0huZGV4QXFnSG5kU3hBcWdIZ2NZYnFBZjhyN0VDcUFmajJSdVNDQXRGUXpBeE9GcDBUbGhoUWFnSUFkSUlMQWdBRUFJWVdqSUJBRG9SajlDQWdJQ0FCSURBZ0lDQWdJQ0FBaXBJMmFEU05WQVVXTmlyMWIzRjRKRUQ4Z2dmWTJFdGVYUXRhRzl6ZEMxd2RXSXRPREUxTnpNMk5UUXhNekkyTXpJeU04Z0pBOGdKR01nSmp3SElDY0lCb1F1SVlReV9SZDE2QmJvTFpnZ0JFQUVZQkNBQktBRXdFRUFCU0FGZ0FHZ0FjQUtJQVFDWUFRS2lBVE1LSGlBRDJyZ0VHRElXT2hRS0VpZ3dTS251d3R1dUdwZ1hnWTJuUFpnWkFCZ0FJQUJZQVdBQWNBSFFBUUdvQWdYQUFnS29BUUhZQVFHQUFnR0lBZ1c2QXdWMmFYUndaZElNQWhBQnVCUF9fX19fX19fX19fOEJzQlFCd0JYSmdJQkFrQllCaWhjV0NBTVlBU0FCS0FFd0FUZ0JRQUZJQVZBQldBRmdBcUFYQWFrWE00dUhqSUFaZlR1NkZ3UW9BREFBJnNpZ2g9bHBGUUYtaHNpRVkmY2lkPUNBRVNwUUhnOWd6QlVYY1pTREZfTF96Sng2bmYwVTBHblJPYmNzNFl4YnJ5TTVMMWU0d1FjanNFbUVCVTdkOURidThQWU1neDFXdDFndWhYT0tBeHRwVVVzOTVnLXBQM1lfeFo0NWpvUVZjMzlLT2pNQnB4cWR0QjFyNGhtSEpmT3V5TlFxMVFudU4zVEo5MDJ0MUE2U3pkT1M1SU42amN3NVZRMy13VXJDZUhQclJGM0k0VXJwbkd1Q290Z1JpTzdmYTctXzVnRWlZUGtUT3ZIbURRSWhZT1F4WkVGdHhzc0ZnJmxhYmVsPXZpZGVvX2NhcmRfaW1wcmVzc2lvbl9nYWxsZXJ5EpwOCAkSlw5odHRwczovL3d3dy55b3V0dWJlLmNvbS9wYWdlYWQvaW50ZXJhY3Rpb24vP2FpPUNRa0wxVFVWUmFmdm1ETUtPdnIwUHg1ekUyUUhmM1lqX2d3R19wcWk5clJYaTNLUDlya0lRQWlBQVlMT1FXb0lCRjJOaExYQjFZaTAyTWpFNU9ERXhOelEzTURRNU16Y3hvQUdIbnNfaUFxa0M0Rzl5Y3VDX3N6Nm9Bd1RJQXdxcUJQa0RUOUM4aFBwVnlQcjc1WEE1Y1BxaFNqb3FXOGtvNmhTMl9uaTVrR2RfVldja21iOFhqTnUweXJCTDJ0elpMOEdmQXUtQ1JEYTh1dEE0dlJGYmVnb2tKMDZjejFTVWFZTDRicDB3VDJkS0xORGdFNVRpbXlQWmdwUzIwa2FNeVIxWHF2VFhjVktYNGhDU0RFOGZqZ05XeHRTYmdDVkdERDZoZi1sOGVnb2VZNW42dnAtR0JjTW84MjVGN1NHaWFfTEdRcm5ZeXdDRU9HQXhyX3h2eVZwUTZyZnJCQTRDS0NVLW5CLWNvSjZoREg3NENwSTZRa1RYR0x0dW1KS2pJTEFubGNNM3Z6Rk5jdEZvSlhqSmJhLS0wYnZnUGVhdVhSaWVpN0w0eDUxTjF4M3U3cVVkR00yNHc2cm1Ud0lsZmtkZW5RS2lUTWVFTzdpcV82WkRRMlhuNUhtT041emI2NG8tb1I1UzJSbk9QRHpnZnlWOUloczFmUEVYSkFuTWRORUdISlhaTm5lSzdoc1F0R0xtZmdHRFljX0NpcUFILW1GRXBzQ2E4NnBHQnh1SGxfd0RjcUNIM291ZnM2cXRPZDc1WGF4bFFsZ1puLWdvV0tWR1RtbllaR1pnOWhrTl9TS3c2eWxFX2k0eXRWTGt3cENERlFoYjJTdm9xMkVlV0FyQkZHa3hsYkxoUWc1dTJBNGVwYzJ1U1lHX2ZIUjVweWRZTWZqVEJDOTN1MHUza1cySUFVNWs4UW9QbEc3VjZZSmtHaEx6UE9IQ051WHNVQmdjelUzaVR2cktQQXVxVDNyQ253eFcxTnFvcE9wTDFybUcxQW0wbm1fWTlhT0JSbVRpMnVDdFZuZWU2enh4Ylp4S3pnNmNEcHJVX0hLa2hLQTFfS0FHb1FHQUItSGhzSjBCaUFjQmtBY0NxQWZ5d0xFQ3FBZTR4TEVDcUFmaHRyRUNxQWVsejdFQ3FBZm5uYkVDcUFmb25iRUNxQWZ2dGJFQ3FBZnd0YkVDcUFmNTA3RUNxQWVFQ0tnSHB0U3hBcWdIcU5JYnFBZTJCNmdIc0p1eEFxZ0hyckd4QXFnSDVyeXhBcWdIeXJxeEFxZ0hfYkt4QXFnSDk3aXhBcWdILUxpeEFxZ0h5TS14QXFnSHljLXhBcWdIemNleEFxZ0g4ZEd4QXFnSF9OV3hBcWdILTlXeEFxZ0hqTmF4QXFnSGk5YXhBcWdIbmRleEFxZ0huZFN4QXFnSGdjWWJxQWY4cjdFQ3FBZmoyUnVTQ0F0RlF6QXhPRnAwVGxoaFFhZ0lBZElJTEFnQUVBSVlXaklCQURvUmo5Q0FnSUNBQklEQWdJQ0FnSUNBQWlwSTJhRFNOVkFVV05pcjFiM0Y0SkVEOGdnZlkyRXRlWFF0YUc5emRDMXdkV0l0T0RFMU56TTJOVFF4TXpJMk16SXlNOGdKQThnSkdNZ0pqd0hJQ2NJQm9RdUlZUXlfUmQxNkJib0xaZ2dCRUFFWUJDQUJLQUV3RUVBQlNBRmdBR2dBY0FLSUFRQ1lBUUtpQVRNS0hpQUQycmdFR0RJV09oUUtFaWd3U0tudXd0dXVHcGdYZ1kyblBaZ1pBQmdBSUFCWUFXQUFjQUhRQVFHb0FnWEFBZ0tvQVFIWUFRR0FBZ0dJQWdXNkF3VjJhWFJ3WmRJTUFoQUJ1QlBfX19fX19fX19fXzhCc0JRQndCWEpnSUJBa0JZQmloY1dDQU1ZQVNBQktBRXdBVGdCUUFGSUFWQUJXQUZnQXFBWEFha1hNNHVIaklBWmZUdTZGd1FvQURBQSZzaWdoPWxwRlFGLWhzaUVZJmNpZD1DQUVTcFFIZzlnekJVWGNaU0RGX0xfekp4Nm5mMFUwR25ST2JjczRZeGJyeU01TDFlNHdRY2pzRW1FQlU3ZDlEYnU4UFlNZ3gxV3QxZ3VoWE9LQXh0cFVVczk1Zy1wUDNZX3haNDVqb1FWYzM5S09qTUJweHFkdEIxcjRobUhKZk91eU5RcTFRbnVOM1RKOTAydDFBNlN6ZE9TNUlONmpjdzVWUTMtd1VyQ2VIUHJSRjNJNFVycG5HdUNvdGdSaU83ZmE3LV81Z0VpWVBrVE92SG1EUUloWU9ReFpFRnR4c3NGZyZsYWJlbD12aWRlb19jYXJkX2VuZGNhcF9bQUNUVFlQRV0SnQ4ICBKYDmh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BhZ2VhZC9pbnRlcmFjdGlvbi8_YWk9Q1FrTDFUVVZSYWZ2bURNS092cjBQeDV6RTJRSGYzWWpfZ3dHX3BxaTlyUlhpM0tQOXJrSVFBaUFBWUxPUVdvSUJGMk5oTFhCMVlpMDJNakU1T0RFeE56UTNNRFE1TXpjeG9BR0huc19pQXFrQzRHOXljdUNfc3o2b0F3VElBd3FxQlBrRFQ5QzhoUHBWeVByNzVYQTVjUHFoU2pvcVc4a282aFMyX25pNWtHZF9WV2NrbWI4WGpOdTB5ckJMMnR6Wkw4R2ZBdS1DUkRhOHV0QTR2UkZiZWdva0owNmN6MVNVYVlMNGJwMHdUMmRLTE5EZ0U1VGlteVBaZ3BTMjBrYU15UjFYcXZUWGNWS1g0aENTREU4ZmpnTld4dFNiZ0NWR0RENmhmLWw4ZWdvZVk1bjZ2cC1HQmNNbzgyNUY3U0dpYV9MR1Fybll5d0NFT0dBeHJfeHZ5VnBRNnJmckJBNENLQ1UtbkItY29KNmhESDc0Q3BJNlFrVFhHTHR1bUpLaklMQW5sY00zdnpGTmN0Rm9KWGpKYmEtLTBidmdQZWF1WFJpZWk3TDR4NTFOMXgzdTdxVWRHTTI0dzZybVR3SWxma2RlblFLaVRNZUVPN2lxXzZaRFEyWG41SG1PTjV6YjY0by1vUjVTMlJuT1BEemdmeVY5SWhzMWZQRVhKQW5NZE5FR0hKWFpObmVLN2hzUXRHTG1mZ0dEWWNfQ2lxQUgtbUZFcHNDYTg2cEdCeHVIbF93RGNxQ0gzb3VmczZxdE9kNzVYYXhsUWxnWm4tZ29XS1ZHVG1uWVpHWmc5aGtOX1NLdzZ5bEVfaTR5dFZMa3dwQ0RGUWhiMlN2b3EyRWVXQXJCRkdreGxiTGhRZzV1MkE0ZXBjMnVTWUdfZkhSNXB5ZFlNZmpUQkM5M3UwdTNrVzJJQVU1azhRb1BsRzdWNllKa0doTHpQT0hDTnVYc1VCZ2N6VTNpVHZyS1BBdXFUM3JDbnd4VzFOcW9wT3BMMXJtRzFBbTBubV9ZOWFPQlJtVGkydUN0Vm5lZTZ6eHhiWnhLemc2Y0RwclVfSEtraEtBMV9LQUdvUUdBQi1IaHNKMEJpQWNCa0FjQ3FBZnl3TEVDcUFlNHhMRUNxQWZodHJFQ3FBZWx6N0VDcUFmbm5iRUNxQWZvbmJFQ3FBZnZ0YkVDcUFmd3RiRUNxQWY1MDdFQ3FBZUVDS2dIcHRTeEFxZ0hxTklicUFlMkI2Z0hzSnV4QXFnSHJyR3hBcWdINXJ5eEFxZ0h5cnF4QXFnSF9iS3hBcWdIOTdpeEFxZ0gtTGl4QXFnSHlNLXhBcWdIeWMteEFxZ0h6Y2V4QXFnSDhkR3hBcWdIX05XeEFxZ0gtOVd4QXFnSGpOYXhBcWdIaTlheEFxZ0huZGV4QXFnSG5kU3hBcWdIZ2NZYnFBZjhyN0VDcUFmajJSdVNDQXRGUXpBeE9GcDBUbGhoUWFnSUFkSUlMQWdBRUFJWVdqSUJBRG9SajlDQWdJQ0FCSURBZ0lDQWdJQ0FBaXBJMmFEU05WQVVXTmlyMWIzRjRKRUQ4Z2dmWTJFdGVYUXRhRzl6ZEMxd2RXSXRPREUxTnpNMk5UUXhNekkyTXpJeU04Z0pBOGdKR01nSmp3SElDY0lCb1F1SVlReV9SZDE2QmJvTFpnZ0JFQUVZQkNBQktBRXdFRUFCU0FGZ0FHZ0FjQUtJQVFDWUFRS2lBVE1LSGlBRDJyZ0VHRElXT2hRS0VpZ3dTS251d3R1dUdwZ1hnWTJuUFpnWkFCZ0FJQUJZQVdBQWNBSFFBUUdvQWdYQUFnS29BUUhZQVFHQUFnR0lBZ1c2QXdWMmFYUndaZElNQWhBQnVCUF9fX19fX19fX19fOEJzQlFCd0JYSmdJQkFrQllCaWhjV0NBTVlBU0FCS0FFd0FUZ0JRQUZJQVZBQldBRmdBcUFYQWFrWE00dUhqSUFaZlR1NkZ3UW9BREFBJnNpZ2g9bHBGUUYtaHNpRVkmY2lkPUNBRVNwUUhnOWd6QlVYY1pTREZfTF96Sng2bmYwVTBHblJPYmNzNFl4YnJ5TTVMMWU0d1FjanNFbUVCVTdkOURidThQWU1neDFXdDFndWhYT0tBeHRwVVVzOTVnLXBQM1lfeFo0NWpvUVZjMzlLT2pNQnB4cWR0QjFyNGhtSEpmT3V5TlFxMVFudU4zVEo5MDJ0MUE2U3pkT1M1SU42amN3NVZRMy13VXJDZUhQclJGM0k0VXJwbkd1Q290Z1JpTzdmYTctXzVnRWlZUGtUT3ZIbURRSWhZT1F4WkVGdHhzc0ZnJmxhYmVsPXZpZGVvX2NhcmRfZW5kY2FwX2ltcHJlc3Npb24=","sodarExtensionData":{"siub":"56-y-0RG","bgub":"FF1-5JtC2VBc7GSN7irVwHzw27djPdnk41iTcQ2F4lQ","scs":"BeDBBTUVRafvmDMKOvr0Px5zE2QEAAAAAOAE","bgp":"dcZSRxLQ6qX5uk3C58qT1JcWQBqXE4oWwp3RCJ4w+VMwMM+4oSq8pzHyEFj4tsqeXfy2LkphwKWfGsW9aIiKmbhhDmjKnGwyBYnbR9DrUuKk6CVZegd5857cE1GiiDHmZrLO0Vfz/eDCIw9cKt7/5dezTklxBGxRkygdoeYbYNC2PBQy/NVzDMsvb9oLwHjinydz3homp9Sb2b/CHPdbQMvfZEzWge22DUV1fpguImIKueAYW5PBzIbv7kC14DXwTB/7Af0saygJEctn7w3tw3BMXKEBK9j1jUl2Vo14dQvLx1lUZjE561TVxjy0omQB7GdSuZzGI/Eg5SeeJfh2iWtJamkLdEhCnzKEM6bly43wYhxbuHy/GvXZv1/aIQBBIwl1Efonv2HeU3U5UlZud5vFstfQ+n9TVJ1hgiUJOb2jzCfeajdisGrDP7cKVWoNhCCcEnqwU0KoTEefrTsZp7WtkXiTE4gfMPGB/79WFD6cBhEpTyQcbtrB4U10bqi8xpXEtvCNTVQ44xrzF3UpTAT4hTrnv5Nz6b9TyFqISnuyy5Yo6O/n2sXk8ljH/bAKztm7Kr5+YiAnekjISv1IPDZSTUBOwYv4/dH9qW/a3C99sKVDV/aEAz1T0p7QUZrr9YHz5bVdK1/rlk8pIlztOahcV0htdU0/zHzCouHN0LGKq54Gp4zxxtNPj8hP5FINzgJT7By4kCbqda3dklaGmeBGCBwKfgQh5ZQYlIBpwHfAB3mWulkiEdS9hE4F4QbIFXqWoKAf7rqVUWN9ysLZedMMvnmIgNzZpiue20NngVp8/LyajhKdMYfYsTAe5IFUu5YoG97GZJe9G1Uxbtf4MKvaCZUwl/RX0kuPW7poMrGWR0eaOOF27FjM4PxtcwYTBnHCEmf63/KczC+iEDZvA1jvw/Q/4L3oZa4fLU4YXyO4ykdhwRrFEM0LeBpYKwYoT1VfjpZuX1JnqiH44wDAzdtH0JAwI58kBNoVIuR2gGKmT5bRvoQu7FSVIeUTeRuZsjWMhe264D5nJYctgL+v74BpkTK4tbFCB4VPxQYotm+w6ydXlzJvshlHDJMyvRgE0arPlOi9cTnv39v7wpILsed37uZgIfXHFgR51FyZlSgJd3nb3mA88HK174+mvGAnf3LotlY/qbAtLvm3AyLlHPkN/iQIuX1h5bU+Cj6OONt/PZIbE75UxHALeXmF1HjKvBjnkI3geO9vSx7Kh5PRARfmOy2u7KbCNOpDf5P2a5ES2DIKAtW2B5WkXLI7Ktd+nrvlFgkho/Qt3uxnhrATOKZdhnc6ZNQiAFaaxOsQt4EnkN5oYH5rr5bknFgHXFlfVLrLkLq4kb0U5yYExL2WqWzaT/iE84gL7YysXuyTSMH/DJXrW+V/2D6ALDlKz6du3nrlpJ/vFcof4E2J/rsVKy59NSHEPeIqbHaR6wpUlGpiMOJi0hfeysiqYkqiHQdullc+G8Nuva6ocrVQAmPxp7RFpT5xTut93fb0bsIr4g2fYgpvFWQoJAGCPBSGKjdipldjXbN0jMWSvtFXfhV5x+ZTYYcelSRfqoDLFKDs9mm0nn52Ujd5kbRSSpNzs7M8GyMhljLO47aCQLC/OP0ryKRgPKJFbDT08VeIufzq+CfW9/oLBk3memfyDe0nLkrCS2Jt7VD9ulGtohl+g8xJJvU68n23kn15E8odZAHe8ZxSaWI5JbD7sMVM26xu8yyEFvI2DqK8B3CUT0G3cESihI3ah6r2t3JI7h72I3/wpBVAJgAbcHZE16pP6Pk97fk2yJUj3G3aBTba6dUn0tUV7iwgRBU+2iUDCKM1USp5QILE35DL83/u7DtUcjVkMlykR3DcaER9Pql4E8z595Bxt9OLk8INcxCUCjdzPszyO32r1xvmO5XaRklleRuqABjpCFvVhMr1cP1yfthYJ9A4svemAQZc9nJ+MaeYXgrHJJgO3Ot1SULpIWeuYl16yv+8BpnzfbmH8seJ78AOt5ZaV7LJbEss9JQixaxXoHMo541JLoMFJwoH3Wc+Mqg7lgzZjxDdiaG0sKSGitCr5ktWmVvHjqTvk/WOYXueUl+jDho7ncD80gNBtWai/eXyab6+L8wxRogZZ+u/HbmVCK1BVxS4eSLpeGTo50UsBSBblfVrkF0O9/ObnDfZu7clog5/4S1K2PvRU+u2Xx/28RQdOu6BV0FTW4OPyAPwACVo/iAR6kd9wPRaOzdXZLulDXfgTiMIPsNKnyah9ydhd+2i5ggT8ZAADrKJguDhYv8GfTE0pZ6dOXtkZO4EqmLxm+1DctM0c3camq+LSnCRCILJPwly9c5TYTGR8R8M5P16IvushqBALEsgZNldq5v2rLk++HJ6seQ1D9Gx126KZQAibuev8O2bG7t3OpXaMxrXT1MH8TLKfg4TEhhDZ+QuHp1BIOnLRbxU8UnrlRshAlaOM6OsIrWOX3TUCS5pawT8y8ptJMPIQH0UWBv1Vs9zSueHnrMzSM8mJrhXIqS7pwJFNLXM42FwH17FisNYzO9ar75mV+b8f7JCxlZZYdsrfzRmGe3P0ASDyEV9sbIF8lB9W1y4VvSatuV51XSuLxiGufDGquqG4hINr451QT5Vm9XY0KghW8zEnfvJY1vJpdU90w9cQzNRXlugU8klBLl4X4t9n/tETeki2ghizdDOf579qVGtrnCx62VP6aj7+6R2KH2DFRMKz62INkySaDzR+m2y086rW+UGI4BvojifcuWHZVMp7Oo8jv1cNnE0wXqLqo/djTdvIsV9kWiCGdU6Sgj2e9TYw0C5+Nvgn3qKDb1HLFYkCBo0tlbZmtOsuAZNKxkG6yQbt8h1kzmr1QQTx+sehB7R7PFU1NOif6FjO+wJi3jRAnsFpJlNmY9fN/R5aNZ7AKCLyhSUGdo28BlRtCcquc5SRjdUtIB1wTgDMoAgQ/9/wrhjD6ZgWdVE3Gu78qaBX7GHU+R/o5x6IZi9HmIl7DsVAKyrrb39Bil0fq/LNd//Bc7KTHMOwT9C8/pdPIZthsX6bDSZ1BZX3DBU44xO/PTBcSOk8wuPTuD/3ZnWScw44hljE8dgTSnb7kAzmVoIMJWZ08pBqQGPNuEQlTpMi2pqHm7ZIsgo7TX8lNEXkVMaCMNae4kEjIZw3eHZwUHMJtJYU4cFkNfvNKFpVk32ZaQgr7QS9FuPEskcLMm0w3a5v5nApwFot35eyaiExxx7Jax+YLdAsCSafZcx1mtB1zF1ixe4yoRGy/5icBDuIKTK7DBq/PC5yAsOHX0frrgqpTuYPJG9lfe7FJrGFFP2qaUTJOzbUzunutgGfKjtmq70cdDf+NilS9pe7btBe/DJRXKIFFGCwcSY2bIusWns6UugQTyQkpfCtJMP5MalxzYU/XFkmjnpeRYYj6Jp30g5sgInXeJ250zjUvqdPP8/S4XxAfzGVuF0jL13J2JroViAigHDdecmPloItZ6phEY9w8/Gy/+J/OK6TGbiiY5FShrwl3v70TYzXrGkfR3pS6YocP2udedYaCdpzrrHRx0FiQb97ol5Ftpj0uKg6ZkZwPKlh7DrThv4BjtoQRnPjEFLMD+HGi/uMhL4mqssw9GbUBeoOExfnAK0Y+rDcrIIsGCmH2nO7s4HNCh0771r7s8TyjeLds2fQnPm7D3MR0txVS8oD5dsxrVfKgG0xkDllv9dHaSLQHpHtNTz3dd5yCa8KsALQ99pezINi6L8EqgOkwhk26/ge+L7GL2KjR7TitrAyAEMcU6S/wd5QstieAt+MnW26DNoLgWzwKwb0/xL2SYSJ4csq/K2aZwrbnghLn2GQoQj3dhj2eIanEP22P21gMUF8aulC8IJnmVU04vyRt5ZcO4YvMRunoKdd12/W4nHSoYtJ8d2t5mW8oW1KaWXYtM+Z4XHnm+4F1rRvEXtYPH+CFpJSHZ10aN3Ytq2ozdBuvJxmq9Zg8n0bHH0iE9o2lnpjHfFF3DXsoSvKYBGY/4F6QPaD6An+MVGiDEv02obB8Xy6DLXJb6TTXqjuloMjRBpWV7Wx35m/TvfQNRGJr9qnuwv7c+a3AFnVww7r1dPPRb6gd/NUzW6aryLfY1jSySjgt0e7Ed6r+W3BVIiwdTiH5ytoHzEa1injbBkn9K8EctYkDOnPiWrF7U2suLNFKLTxCBJUe5ypMsV+XpLVwoi7tpawWo0DsmqNQn02qO82vyT4vdiQLO/WM0xaxL3cRNnosL2RAPAg/4ZiOQ5DYZRD3qNkQHWsiZmE8/xXXlgtC1Y8uH/+wAKj/Vj6/z/3Z44hezH3+Fwd4zyr7Od4uwuKPzTfN7UHGFZNBNPOLzAcGmQ344x+cqemdHW1EBKV9DzqiwtNYlUM4D0YVivycu0OONA+3bSL6KZrVPQrnEY+okcTRG4Gf/Y8J0lxJP7g4Q+FgRp7QxuCZKtLkeCfmgnjw4CvrOz3UQT3hY3xF/43yWRNCnAl70clVwPen68eGSaoDueq2Gyfp2b+Yb/fl5V5Fs6QgsxoC5eA58CxORqQb3WC4RKnVnxfNKTydg6WFuTazHdA3ioqIwEPS9IPV/xj4IIxq0Ur3p3QConw/5Jzz1lzia/1zVgX7LZcoAYVWAzsN2kTehhGqZ9NgP98pdaKmZ+qbvnQAS3poYVNlzdWfVeS0yOZBRSMc6tjxpgygIpwZBF5jTiyJXBcz4lMX7mdgCGe8ncyEZwl9vNdeVe7zjodgtU53GWRpEn+q2+wq8z7j64brqvPYHhO49tfl1YLOVMb4nqtvBYHR+/L+Sj15OaGQcn59jKg4KOdaBANhiEPgoOF6N+R4m6cMxQRynrOU1KtouDDrS0v2kdDLzSk2KaDb1hJJDwoLOu6LnrIEvz8xUntP9aYezGVLG0MQFp1T36NaY1w/KpQTyCyscx8c/xmdhf5H35CTX11V6GUwBOqt8T3Fex5YupkJB9B2+6OwyYlvWEttKWXS3ilsHhwDkng0OOtygZ+ytWc55nrxLhd/Gx1sNfSr3cP1b0f5yb6QopcixY75XMdEYJQV/0KC4kHwj7pEkio4S4wN9sgsbFRWs7Yy5wzXIW4OQV0PdiyzFCjP3LR0fv4XEbQ/m/odUzAVd7qivhBSeMFKFMOgOsWbhdbdsdutNgXEV9d7KfszpijcLYYdmFianYqI5uwPFtv/lwtDeHyMK1i+6hvEwIj9JVzes7skXKN+5Wpk36Aniz9ug5YMOMlCGgEqJncCrA7GE65G1NV0sBHhTh0DecTI8XJpqW9W2TmlYsfiqfZMHKEKC/N6jGnlp8TJdiRcADnacSFyOGzSNdal5DdblvvmusLdKkEcLrThCn91OSlWz1GL4Z+PTiQfTeiez8V2BO2gGb1y+LmBDPrfbu4rr4bxkBOFpAVM8OFVor52uLUj8/wSChgwIi2MzG2mofWt1Z5TpKRL/KQ15y12oE/jXVeaVRPkBxp65nPY3QyfU5lcC9ebJdaXlr9Xf3FQeLdty2wv808rO9bQ5SkYEM6dkcxubmDtC0/QzlV4Qb6Qhm+paGhUZ166/SL5C06S2Hr9qoHUOJhpf8sk4EO8FBkdkiWZt+MS+obNFAlHnMkUO2o1+cVfNYFiUPkXKlhlVX2cfkoTmuzTUzFd8fUnNuYCgeT3QfSTdBpgpaR8u1QlucB15rtHEfL5N5vAcAD/uuERY2UPiGtl27wl8GCZ3se8AtPj4PsrSuF4+CVtHS6piXZgbLYhqZ1Girzf1Afr3B0LXi2sFk0kMQ99l0OwmO8kPvoZPquEmtv9J3MXO8sHz6hmidxK2QSZWMF7oJVbPQQePGUTrX2jnfHxkA3fsnKNSqgerzwH9PYcG4LeF3A6BDgdnubDlmhsc+87/SFfMy2BTb0ZiGAOx5ORnOBZHppdKJJNJ4KCUHAnev4O8vH+nIgxw6rVQe2xtIlelMGkK89f3M7IXj0EmEmUWhfepcgfsMK8oO7fsXC/374WF9Cvdri6NsllhkQ1S31GerXwalYrQfM7Gx1ncAZsBULzbpalmZnDsbAl1t9FjHOXcda9JayDj1L5GDQWofeNPEehxzbAnTEZk5LrFwp7WSntCIPmJzNuAFvv6RELKki6BsYClURzGGwTP2WLRGvaZSHA20yj9wrLqr+oZWK9yhhhLiZbw1Fkmv2ymtD6at4KTAyUw0mlvxcnsJG07HVkySnKjkVHv2X739xF3/zk/EjMrDvSC04dW1GiBRpQYyUtBOEaEuuaZbUY44lCIaX0JlbV9Qp7SQcoQ31L59AEAj1fSU88uxsCLgGBPkieDOpv1kVp/Ub/nWWB/Dz11TxhTFf08IBc+eyCwTvbTFDTDGKP6sgG7XX/fVwk8tlvFlP1Onn1oTchm0d4X1LrqL6Xys3t5pRIkpHextyHhxQLtz1a1ebmgnHmGlEmqsHpYoZrygJkm4avT1JsxY0mKBCxRh8KaZKJMlomLmAtnwZ7mKBGdHcf6u7p8EkNiHqNivTKj1OsnCeakb+XEmstDQlrcm+ifhmvZsRa7MtDghMxjYtWyeSwxklCcBadIqwQA8kjXwUXCybfXIphr3/dLOJcBB+YURjH3y9M99NzeJaDPDOep8ZsV7dD6J258yjHqzHUP61IusexcbWGxisAX8e6JfMRyJvzLQgx3T++AcD8ySzYRM/6DP1GmJBgrzdUcRT5rSW1iz7gqbqVI/lJV1OF8v6DwGfE4yMddHyb65oxh2DntkPvghKczIy5tu1N1PUM9ghYRpmUuksGvAtdD+zd1CHPuM2SesFDUcYqGptcoRlxTfUlsuZXxehMd3lEgqWstOk3vejY1M6LN3pUdCNvuyGgdbxSXShCH9k5H55gysZZG6rqh5HZhQSpz0zHbvt6UgNQ0QkjAWZAVjOl5fLfAIK2ojlFb3rHyXregMQaZakeuJ3pbaspnta3q4cTwcAlS5JVw+Lat9tatOObgGOERCZMEhulbEjkW4mis47p5PeAhZ4DWo7GEuhFy2sDYtuHLKjZsMYASqrIaVc5DHzaHrDwBfMawnKXBSD8JtLpy+FiP/g0jwLJx+E6TiU21NvmewO931wnx2fUeZZDK5R0ff016vKGaAUc7Rf1VcR5T63re/P4UHyuQJ2W2oFmHJwXyFraPGC9C6Gvb5VtYn1pjA/3vqlvvu7A8O70sI6mzzufJ4GFqVf26griGVkoxSRdN8AmBeH+RdNFF+GYq5HFTKn4nOOS+PmWYRrmvk+ItGEynP7wQzB9ljRznaQSC1L2vVZ5pPn/YjPBaL/eKoUvL0IeYjjV5SZccKFd3WayIQ6HgSpMApJLHdPFU1E6b4UOgw5NQWA91O/5fMDb/cRPIK18i24D5cfbPS6Ohasvp0NDonB9Wy3N5od4AUQv555nUUbV2gkX8PT6ham2Sl/9uWgEDMBCj3+2igr8fNmImn6lu7N2PV9esl2MYHOSS7pPpjGWdDHSjmqCX2WYO5Hef0umIhMdByPZjmKs1q8Jb790NkKUQPVDNr/XqqQko7aT2POj3ix/Ep6e/jxbMSfa7nZ4FVDVHMc5oXAd8MbSyjzuDgtyY0uzMw951A7fFvEhI/DcEzPccC+0EcLBQfsvri29RYcm6qwAkSJbL+80DoeFSREYzw5iog3voCs/d+d+bs267vLMAzMgukMnEXhvJs4PT1V5+ZJuF9gdot5dMWpscCTfAMcZ+yjlM+Vc+2FwgvZFQyxd3Jl9NqsdqYdG7JRpvXVwoOqlOce17duKuMqUpOSMMBGvsQWEYXP5aPEmsogCt7s+LqOo0s5VmgGBF3VOuJNXGx8YzS5KhJaovsHRzuAAYAr0qBxSGtJ5+vWn3KyvKT/J6+byeQkwZyYIGhe5dtdqavreJu7AgSHKQF4VrhbPAosj2KPchb/QHIXMs91J93MkXOSrpo36T7i3xfNoagW1By3hOC5cfmm7putUSlBo37rFOGmYYhMOrLLL9IL8aOck4Y4yZef4thCuVo8LVjm9pL4swCNLcS90NF9SCRf1gbBrtaNir2Q2DQq8QL7qU+k4A1ZpzGbqUe2wy21U6L3F+wRsIvaXzo66IHZU5EXK8EXUSktVXOuVEU34EHQo0jY+OBprGdA8aNARllt0IDRRCkw4FjB7tuzGnuw7wYV/RoKXFqglGKrJZfp0rtmX3N6f5Pa49QmPcGmbqT1xgMnC2gI2X30S1uyzBxccMielYligHOrau8xShywmErIYjgNvXcFht2SP1r0J8V/KjdhLOSjsqOq5ABVl+RfUjkW/npYpYheV7HpTWtfqM+RnoIS3guYaz9Flrn0c5HmnX0i31LzY/G7IcWbgkOjPm48eH2lCN3t7IsRH3GUj21Nhov31PfSWUf7qIzvYWlO0ucF37+dDLcauhjdOlD0SYgOWphfIpFfyN1NChNxEn7JNxclK/iYD/W6GOSWGs2L7qUFznhfXDxOrr89I+H+Tyy9qLOJJCuugVhaCT5mUmBzpUyPy/2/800uIEJOuyvxmKF/+pzhjuNpMwNfvvQoHVV93wA7OS5sz8Hv3BMT7JZE4xHLhzhhUcS8EdbXOscuTH1LgHXUi6VDkMcXPzO0lRj/Tkyx4imi1U+Epe3RyXwgcPL7X+ejrREeYdHJzWYrl4ka7x5I/1iIGcQBgVNGtVcutJqx4yDpaZ4lU55B/IM719fKWOuPljg2DiNLVFFN/DZ4teUjDgBoq4bsNT6e/VwnuHUzT5Zwh0LEDiDXem2cX/dEGGuJNnKA9yN9Upj7xyaDjCjb6LES8yqgvY2cl3UsL7CzDRMS5d/yAJ1AMaZ3yIsaj5fV5Bz8JEfe2WAD43cfSwDyKEaMl9J/2fk479DbggmfDKhnROa5dhUnHvMudgFpqt0Ke6uZwg+6zMIo6a0+WltTbQ0Gdnvhb3l+U/ltf+w/PP8ByaYuXLWAW+P8zHCxk6mRwjX7jgyLynCABmQTc8ZbMdQ18vjmy98chLxhQr8d50DkBpmQNuswZF05H4wZr98Q6/vflm5ZSjrPlNpcO5VT7Q+u58EFBWisfcUxXWUWupyngcoCB/tihQaOuZ8GMXSyinmBNpf0aP+8Bv5M1YW4AyG/ryMGtZROsQZfyqS5+3V8FFho0uzk21oCRZYPtUDRP1g3XSqc215+ZhG+kYx5LLa1R1ZemEzHjWDDu1BIYBlii+m3rg7ZlU66SRLWDQyVjOPNTXG9i+rNXq9RlqJNRzT4hRnKvr92jzL6buYoIlYBfwbZ7cGnHzG9d3kB6Svt3LaVoBXVuDo12XrujD7FZqJYZZsT2BROpSdHyiaj0sgGYmHkIJJMVqApenb3Ul4ikK2JH3/zVn7dWml+6zQWqELmeTXY+1ffZFR8nrLyIpIeSQOhlimfK0Nuc8uY+X/UI/1+QcrXdw69KKuFC4F3NiguoY2CcJ7tMxOLrw7kJgj49nabjIU4w3KZsYLm1Tta/p6V1+h2dBUAbRyVM8u92HVLllmyV8QX+dZ4lljxcb0BMcWfnkMbDj0cTVIk8GDEytSyJEAM1hcmLDkUp0rC5kbBIVIcWi/02XuC3R9oWCaP0dpxTkBoCovR9qI9pO/TSapjOvuyIn+8jANc2jFmu41lQ2SN1P3aQOaud+pTHsnWD62wQ+o+OWZkHjoDb2mBLdeLnXN+awJ8A/XKCRWrEMfY1pJiUStMzehcZoMVXO5SLMpFeIFVE5OSqSdH6w0Yj8PQL2poSaDWdSMOPQsMI8/jtILJwXgzFxOP0ch2K6E3kpumeuv5ax352/t5uoApDdv2K6Xk9Cj/BiaVNMcN9t8rAyfyChgQC6xoeRbau2qCxuP9mfvmhsT2w52bE0xWGbETO+DBv9PquKC10Aob+QOgosSk20sixP2jbXN0Le+c/DQ0t8lcmqy2IbtUCg07TWtxXNrrYnOrlWIpmoC+aKDDcZofRiSlmckkuI8zsciFC5LC92xLz1pEE0SvjAE8FMUlx1G+1n0/lWzw8WNQA7ySocMuwNjmfJvpEYoHUto+p5sUX15HWQDaLDMZn5L5eFHFAShuPgXDxBDxIvja/d+yDp4ZiG3EjoTK7qftGdM/M3+tglNFf4iP0vWyu8Le41ZonYmCY6SOAR9B6jJ07KTZjNL0TrQ1NYienbfZ2oElyF41emtUwCAP7jLqZ967mnb9sPE4SMd4OpDQtptYBYGIV4duUQGRt9dy3HHzFvceHWFdGNlViFoOedbI5Nk00Adp+Zjc1Brb4kB8n1eG/jt/uCx++Djcgt/rmdDsXGkDRehwXkNJC/Ux3SJaLvvTfx6/Ng5lg+VMFFmKsVVFUR3mVI7tYcK3l1gePkdvAVVclCSAtTFH3AJAIA2HR68KAPoRy92ehhzAP9rrOUxZWDc1X+F1HjlHtWWEGNGwGVuhTQWAkFPQR+pS546cFT/TPYzp/iOrw3qP9BXWpyAf8F2hdRqgrvE7/RrVLpUoXHhv2L2QW41oXhI6apRPC5sWrFMu4Hrg7WKuyGeOe9AaOF8dgRVDsN35mltdZdiIMr9M1ihIIV0Mo4Q+1rRsclUIKy/qgOiZZE2pZDXeFAx3PprE15ACqq6zJx9URT3csWGP9T5LC8ENODMa5AcWNjOnEY62jqizxC0ohi5jQcb9VSJ91n6E55lTWqHvW6XK26BkKi9qyzGN4dNr2c0h6yFtXVq29XScE5jwH5Gvxyiieqwvlyq+rFpxb6BLUZ1P2YJ4jM6P82MxkL9yhuW24kclfTtqGzlecz5IL/ukBrqQjfJd2XMx5uswCq9ycBkNekD+OcekEXvUxTozCO8L9/05TWEke01QzvIsT6Ym8lBEKBoQ5aq6CewXuWBgeEPewlnqGR6al5dyfntYTNyhwCGLsgyM6o/kH9ebByKHJ+YSrNL3BBRalSKIz5zw5vZ+XmNu77vECLUWEZmHfxz/FK0C8IamYaowEMb10gtUM40PCpiykel3N98w4piFs9Rr/PUohKO3BNOBTnMbSKlYSQwqjyKXVRSwwstE22wC1JU4PAq9K1Epjksi8+42+5PoU10mwqs5lZ37nymKv13XjsttcWoDrCLAZRLw9gwLfo6jUhEHM3wn4BKma4VueTrkUytQgqXH/d71APFKtYM7HB41EBQ7o4prXp9TW/FjBYBmK2X4M1bpfIYR5ynBf6YEPOj8r72u+nGMpGFjoFh79IBMUS6bmt6V1jP1Z4/bZ8e3gSzDdV14yLbUQ2UxvMg3cqCLyQOeA6iLt0x9ItLbxdh82MVno3/LNZ9o8x9wmQJVTrQhkY9RVEbwGkUub71PQ+mOmVXrjumpm02Y+uKA6fLj/5N09rS5h+iz8IASHKdtXKyOcFaAZ7d1lk6KI6+KfNV+pipS8kw9efzR4BpNeNcZ9BMCQ998tRaWv3T+844GmPKihhS6BbOUelVcSfwe++JVZcrcl5zjrU4nBCIajXClr8oNjCusMBc4ZRy+odN3zSD7PElomVLztZi9WIfWcRpZ57r7aEN4uXpMtZJqKzGzgWV3p1mPPJGu/sBvmGPlhiLe2XCqAKkxkV/JJ7lf0jTPu83T85l8PwPVFJvtoHAvWw8eqBao8c4NNVVuqL74JagtNCEqRtbNp3EiJpHM2Jz9pzxtDQUX6IkLVckW78Y35TJ9lWao10Dv4o/xeKeJcgKUFyAkdnzgg1G4VTAOCJwwXRCeRZQbBeO9POnCKLVuvVcBA4FxWmUmp69f/jNl8nz2A3aUuY1HIo+AZXFAXUgaFRlCKLTh/C2GktnmKPWLPQueyKmLp9SRQYw8cx9ZNwU2gJyct6kJWW8yFproENGLHE8KwoMvIUVAnb9K6ziAgP0gfMZavMGVR46W6BrrgMTQV0ANJ3pvJXYHJS37bW8oQp/XYzvA+Qc0V84SXhhP4ZWsfXz2ktAR6AylH4xH5k+lKF8UG56S50X/fe6gmlejqDxU04k31RrpN+YnDF4QYpUxXLJJFM3+ERT9Hz07SEdRg16jtaw2S/8EkaDZ2n3htozpZTGvUQthP3jNyRZGR4mHzjMrSio553/+krs3qrpb7qAyoa4L5v89CE+GYCAWtjCC99k5nyo+tGtFZnBctgs6u8KJMCNEkz2hY1k8KhZnwENblFDiiUcDyKnF7G5kPFWHFLSAoYyVPMW81IEXu+qUOfgE6pGwM+RxLKmvVojj7+416PjKu/t8SjXnUqvtuONS8uVJgTokK/EeUj6T5aauRo2dlkGYXeDfe61VcjtxoTAUrKs8aDr6lI2q6l3b46cPA+3QTsjI9dBryjqtbmdJMoyS3P2yUXODPvpMSIGnUn3rN9t3F0jixZ5paT2kWFVKXaHJ29mm0tk6gi0empFL/aI2R79NGHfGgdio9Mmj1CvIaOW1duPvmZgcijl2aAXwY4LC1ajzuCJdSxyD88kiinCh3rlGy+1knBDRBXRKg+GRG7qZK7NYai6iSnUFATN087nAz+7x9FLt8DNIe0PybXY8JDH02qm8RyE32av1ANM/dVAMA1oJampt2amWTgPGwCV+5IpwaT6ZvwKiwzNhRcDcRgJgeRHH2UGM1Exon2/t1us3q/wyMLx5mxe45lrwSWNwDedj9CfnIu5xuqBiBauzQwlLSC0Ijhj+nZ7MCGkg7yap55kP6IXKbCuuMsT08v+zSWvd+ac2SduAb9sne3NaemPCrfFHZFIX2STE/mwBXDNiOQpmGSUiJG7ZswfozG8sQi8MUwlA3rJF5KZYwqW4UT6wbZoJVK6ce79NalhsBSDVj0vUVw/7bzYhgMCu7/j9AoW9/YfCh8lleYQG3eZQAjzy6t/pdDwbpLwCtwRYKrtJjpMKKWMcsgpYG9LKcGT3XA+aPW66MWyyQ+lBqCNXAh8p3OcfElj3tR3KrShK50qge1pgfCtoVcUGY5EeL7neIg/zpsiZ7NBfbF87PWBRReWcPNoPPKZ49rGg86wrmGFFOeCJa1SxiPoRDKfPkhPr/c4BzkfDHoVXCvmFGA16ygO3ZkzOYWivd3BQVLaLAoV02y9ZieLrs7nyQewv+KJdsDMgf3lBf9WvaNzYaA+CgMuiwmOdQ7Q7V7BC3/vcyy7Cv0GJjTfcamtdYAGI9zyDp32tfvPisk0AJ31Lis19H8VBLhMZ1qeDQs9hfDQ4dxMR71isRmaeVB3ezbsU66OUPk9XGbeFfQN7skbmDo68EQyXCV7uKmyQAdPWwCoJXS9d8CAAiKGdgDaMhVTzyYuOZMvIi9fCKtcIpAqzjQEypLZqdQzJJ9HyTIELtbRSzd6rbghYZrxwsvq9a3hILOwilmY0q7CglfZXi2geU8pHVluNHLutX5RNpBlcuNoyUFnWZUZpG4CatxKsr7NDSK6SIlmJ+ARWEyPoGx++nUrmDkC2dQk+ml1PcGlQPgffdoaWTRQrMLg57E5cedhmZJ7iZgQY9n5C7g/SqJChA+p8rfp24D7+RrWQ5tXUtbT1Zg5TlQh8CDdDG3Zfh6B3Fqr+EI8JyGwF8i4clwHNFIKpkQqOMS4xRhSJc1XMc8Qv5WhYJou8sj0EtD2YZFMNONPxHw8NtX9lP1giVuM5YqaXXl2hnIIWLpB5wrWrRJFLmX1ki53IPnZhzjrnvTBhgUIuAKZo1LAzWyMGR5Rb2Ps74P2ETXvxNnQk1IkiHyo48u0MPgHfe1IJv3WRHPq5+95R0Z6S0hvPiJjZlEXHFuHKuoJPKlKQMHwPq7JTPCpwsaXHkurwq/xKhdvo4rP9jF1K6sieAzGydjJEink+XzSFvMpA9ALhDG/W41LRuI0vASwkd+E7gLvqfcn3KH3dnDOfvKqT1CqfkWLuXQSA=="},"externalVideoId":"EC018ZtNXaA","adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgEShMIu8HVvcXgkQMVQoevAR1HDjEbUggQAUACSAFYAVgCaAFwLA=="},"layoutId":"UG6uWzLEXnMlvRUD"}}}},{"playerBytesAdLayoutRenderer":{"adLayoutMetadata":{"layoutId":"VhuOyMeA4sOpbRTD","layoutType":"LAYOUT_TYPE_MEDIA_BREAK","adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgEShMIu8HVvcXgkQMVQoevAR1HDjEbUggQAUACSAFYAVgCaAFwKg=="}},"renderingContent":{"adActionInterstitialRenderer":{"durationMilliseconds":7000,"completionCommands":[{"clickTrackingParams":"CIEBEOXQAiITCJuG1L3F4JEDFdyF6QUdtPw4xMoBBOxNbzI=","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_COLLAPSED"}}],"trackingParams":"CIEBEOXQAiITCJuG1L3F4JEDFdyF6QUdtPw4xA==","abandonCommands":{"commands":[{"clickTrackingParams":"CIEBEOXQAiITCJuG1L3F4JEDFdyF6QUdtPw4xMoBBOxNbzI=","loggingUrls":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_abandon\u0026ad_mt=%5BAD_MT%5D\u0026ad_tos=%5BAD_TOS%5D\u0026ad_wat=%5BAD_WAT%5D\u0026final=%5BFINAL%5D\u0026ad_cpn=%5BAD_CPN%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D"}],"pingingEndpoint":{"hack":true}}]},"skipPings":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=videoskipped\u0026ad_mt=%5BAD_MT%5D\u0026acvw=%5BVIEWABILITY%5D\u0026gv=%5BGOOGLE_VIEWABILITY%5D\u0026ad_cpn=%5BAD_CPN%5D"}],"layoutId":"VhuOyMeA4sOpbRTD"}}}}]}},"layoutExitNormalTriggers":[{"id":"6acff610-0000-2cb4-bfb1-582429ce4dd0","onLayoutSelfExitRequestedTrigger":{"triggeringLayoutId":"NXGDnmPOV48RioBd"}}],"layoutExitSkipTriggers":[{"id":"6acff611-0000-2cb4-bfb1-582429ce4dd0","skipRequestedTrigger":{"triggeringLayoutId":"Z0p01NDhLyRZZm6H"}},{"id":"6acff612-0000-2cb4-bfb1-582429ce4dd0","skipRequestedTrigger":{"triggeringLayoutId":"g3IP9014RXvZAgye"}},{"id":"6acff613-0000-2cb4-bfb1-582429ce4dd0","skipRequestedTrigger":{"triggeringLayoutId":"j1jvFWxXEMz7sfsR"}},{"id":"6acff614-0000-2cb4-bfb1-582429ce4dd0","skipRequestedTrigger":{"triggeringLayoutId":"j6LGxL0s5yoX2c0J"}}],"layoutExitMuteTriggers":[{"id":"6acff615-0000-2cb4-bfb1-582429ce4dd0","skipRequestedTrigger":{"triggeringLayoutId":"Z0p01NDhLyRZZm6H"}},{"id":"6acff616-0000-2cb4-bfb1-582429ce4dd0","skipRequestedTrigger":{"triggeringLayoutId":"j1jvFWxXEMz7sfsR"}}]}}},"slotEntryTrigger":{"id":"6acff617-0000-2cb4-bfb1-582429ce4dd0","mediaTimeRangeTrigger":{"offsetStartMilliseconds":"0","offsetEndMilliseconds":"65700","hideCueRangeMarker":true}},"slotFulfillmentTriggers":[{"id":"6acff618-0000-2cb4-bfb1-582429ce4dd0","slotIdEnteredTrigger":{"triggeringSlotId":"P53VzgUlrq4BTqpc"}}],"slotExpirationTriggers":[{"id":"6acff619-0000-2cb4-bfb1-582429ce4dd0","slotIdExitedTrigger":{"triggeringSlotId":"P53VzgUlrq4BTqpc"}},{"id":"6acff61a-0000-2cb4-bfb1-582429ce4dd0","onNewPlaybackAfterContentVideoIdTrigger":{}}],"trackingParams":"CIABEMzoDRgEIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},{"adSlotRenderer":{"adSlotMetadata":{"slotId":"6acff634-0000-2cb4-bfb1-582429ce4dd0","slotType":"SLOT_TYPE_ABOVE_FEED","adSlotLoggingData":{"serializedSlotAdServingDataEntry":"ChMIu8HVvcXgkQMVQoevAR1HDjEbGggIAxABSAFYAg=="},"triggerEvent":"SLOT_TRIGGER_EVENT_LAYOUT_ID_ENTERED","triggeringSourceLayoutId":"MNlGMXcyGjz7h0BA"},"fulfillmentContent":{"fulfilledLayout":{"aboveFeedAdLayoutRenderer":{"adLayoutMetadata":{"layoutId":"ezTGL7XyLu4v0ENr","layoutType":"LAYOUT_TYPE_PANEL","adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgWShMIu8HVvcXgkQMVQoevAR1HDjEbUggIAxABSAFYAmgBcCl6AghS"}},"renderingContent":{"adsEngagementPanelLayoutViewModel":{"addAction":{"innertubeCommand":{"clickTrackingParams":"CGkQjP4FIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","updateEngagementPanelAction":{"targetId":"engagement-panel-ads","header":{"panelAdHeaderImageLockupViewModel":{"interaction":{},"adImage":{"adImageViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CH8Q-a0CIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"imageSources":[{"url":"https://yt3.ggpht.com/WZVbRvQtV2dWKY4ETR7YIsyUAu7FI3fCa12h5ZA7boad48ifX0DPVksgA25CMQM7O7Ir207n=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}],"loggingDirectives":{"trackingParams":"CH8Q-a0CIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adAvatarLockup":{"adAvatarLockupViewModel":{"interaction":{"accessibility":{"label":"Sponsored - Affordable Cloud Power for You\ncontabo.com"}},"style":"AD_AVATAR_LOCKUP_STYLE_COMPACT","adAvatar":{"adAvatarViewModel":{"interaction":{},"style":"AD_AVATAR_STYLE_CIRCULAR","image":{"sources":[{"url":"https://yt3.ggpht.com/proxy/dkXggpvSBzmslmOs_KgrAQ_DrfWw5gqk71GJ8zqzIlsPdlvPvZ5j2lV1w3P-Kqfjg_-NbWAyD7ptsNJNH_51CcuRW0_tmg-_5Qmhhv9joh7HFV_hnKh6SiTnHrCbOtL2vOismI090TE5yWSOHa80QBuO3WJfs5AiDlCZxZtz_tdWBOPIbbX5fvnir2NyNE7PXsTycQFbAtuaSghnNTwKPGzqmXpJ6Xs_LeUq6ozZyvAmO526n5_CGfKkVN39fO95QEEQ=w1200-h1200-nd","width":1200,"height":1200}]},"size":"AD_AVATAR_SIZE_M","trackingParams":"CH4Q5JoJIhMIm4bUvcXgkQMV3IXpBR20_DjE","rendererContext":{"accessibilityContext":{"label":"Contabo"}},"loggingDirectives":{"trackingParams":"CH4Q5JoJIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"headline":{"content":"Affordable Cloud Power for You"},"adBadge":{"adBadgeViewModel":{"interaction":{},"style":"AD_BADGE_STYLE_STARK","label":{"content":"Sponsored"},"loggingDirectives":{"trackingParams":"CH0QnOcKIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"primaryDetailsLine":{"adDetailsLineViewModel":{"style":"AD_DETAILS_LINE_STYLE_STANDARD","attributes":[{"text":{"content":"contabo.com"}}]}},"loggingDirectives":{"trackingParams":"CHwQpqUJIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":"Learn more"},"onTap":{"innertubeCommand":{"clickTrackingParams":"CHsQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_MONO_TONAL","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":"Learn more"},"trackingParams":"CHsQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","loggingDirectives":{"trackingParams":"CHsQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"menu":{"buttonViewModel":{"iconName":"MORE_VERT","onTap":{"innertubeCommand":{"clickTrackingParams":"CHkQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","openPopupAction":{"popup":{"aboutThisAdRenderer":{"url":{"privateDoNotAccessOrElseTrustedResourceUrlWrappedValue":"https://www.youtube.com/aboutthisad?pf=web\u0026source=youtube\u0026reasons=AUJjZ_7-E_1wAhuQnNak23coCk31gGzD9WE0LFPTnWYrs82__TdtEs1SaMgbJ3Q88MDBSjpnxMbX6KB4FiDtdnErsOcjvbbedXriXcambB8sWWOc_bO9n5a1ogS3ZkZpw9yTn-TOH4JsoGJ6FGT7eH_3oJBV1lW8RnxzUi6-dbsc4klCMNIOvjJWriatQVB84DzXHOUbPhXrz5My7ySUlAEJ8HOnTBwWPgN0TOcjYAAAh1plE6DHwe_QFysyjz2zmk5DaF0DlYU7ATj1TtHgIrDo3DVNnKRlLncZ0WVUtQ-0pPq0OpuAHcHUngAQfafPwJo68Upd-a4VYZ4wmUuTaSaOXxf7VoT3YyzX6iQZa7pFAQbbGEFZFZmDW3uPUVN38K9xalcAaGaUq9ugvs5o2Z4MOV5Lp5VG6_RIDwZwgUSmfeNFIBaR7wA2l_xyd-Fo6Bi4fSnw43hy_PD2dvILsJOnK-iocPuDPGvKI4OEKhuYnQZmGzO5TdMlt8yxtPqLvTqF7v_kseqMbTdRp3mDTkEw-EQWbXTl4IH155HnMnyysQ161GCW9csSPERBP95usWsyu3QU0plZIZ_S0nAefZWM9pp7vEmamt_B3l7oRVh7oT2GbnCxca-5mrjMpKU4Nh-EWQz0e0yBp5C344RSNEIQ3NDdPOJ9wMVcTZCDAe7NxEJGS5jEDOcEz9TBAhOiRWoOrKVs03VWbNGhrB0QWjpy34iidDamR1lxSw5j6HHmn_0ffaCprirj8RuNIODsDDdgo0BQjO7UprwAy9CYc3nlxGtoI22mbWxA9TCf5aVEl5VmIMT0cJ_871Jtn7elwG4F9zJJsjyCQMALci3vDzqDZ0ed8D_uhpbvSNDDEmiJqVsQJ0WIvYcUQTBVxslizqGOQc0gaYfmgvL_lp2O4Lhy1CXm5LSEDGlEzp6BGAvmxL4pRdqFZ8XpF75xSIH8Qea6iVh2JqfrniWrpRzHBYRNoUoKbdiUAI7mbqvxzMWxJ6wVGYs0KLWwI9tPD8bT_Aj5i8ysa3IaeN3ozGyJoqiD5G8k05UBgMpgk2WDgp1o9Jvxd27-D9RlyZcY9O2WV8ypU_2jJusiIBQko-gHQLabwSlIZbAadWJwGI9XurOYr_URlv3IkhnCRERIHxGQ2ZttVT5OcQ2PUN8LDU8_o3S31JGfeuJB7fEL52kcMsvpG1MfvZWaEKJg_JRhlTXkJ3aYdBFSs-Mgy7_jo7Q3xmiNNdCX10wTDLHw2-LsEk3CPnuTHdD3MAw9VFHu-YqPFHreuZEVEYQ_fisKfIxwu09r9AugWtLnl0xYMh5kQtScgAMFRC8XB8khJeZQiWKoJIrMntNLLTMgmOozhHXMrDJe88arno-yVNIlW4THvsYNnXEXz2KUjzGIvu5g4vXoKbz8lhMq6aDMG1FOo0afBCKvli2JZzsi2gRXGPHvIFt8unWzr3dkO4JpS_srbuXMxB0aiKMLkUAD-r2EVPRx7t4JY0CKTgfR7qjCvKCvR2Raa5XHDFqOr2EA12f13ZQC2ZEmFwTbn_BFl8eAFU-V6I8jytnhXMqh_F1CsFtoD-1Wb9Iwv8gNltBUkusKjQxZJxfNhaD-Wp9xQ1W2wlikuztY2V_y0VEb3H54fmqYwyCNqoeaFfU0VDTLmt9jfXz84OmRQh4IzKFn6KH4ZzvYddxyIkjqxYuVgL1RmxCWqiqBONO-EuXmj2J4an7roLKG2zICtnr93TbKVe_JWO5WvL_B2KPWUD51UAcdp0W8H4otyCgVS5wgG1lEf2C5TP6m89t1iOJIf3oU8h-iTLhDioyvMwgS345trsMRc-G3vN6I4s1OsJrzq1rhWHq6FPyslfhjrKEyiktKFxJMR7Z5JJtkjoMeMrWIdqYWP2bQ-dM_sdzbHJU0sAMU2yOrk85BaSW6br2VQJY8NM4NB1fy36sbBkDZWue0HCaTprnlajF1bfnyIJZb8GtlZkycFeJBYBA_MT82tqZ6AmZl8jwJtl0daXZDEmTurtIj-HldZXRZpoUZrrLnMhtRvQjgnvaPglhYJeJZdCOD_ORtpMDSZvz4Av_CrsVvJRmeAhHPPPM8DvzJB-7DwXvHMRBaNie_Csyg6g8kWOIvuvJVlKX5QLnVgqPuEVqWBlvc3YUkum9hyuWFZZUFQ2oCJXwhY5_SSwEP4WeGCq9p3uOxN4wyw4tos2eEbA4CjcRMUvoXjtU24Fmj02YYXtdopNZlRppdZjhQUDHuWK1K15_yQZxDX7uImuG4KQ830VD1Ur1MFG2ITFHY5PqgomlyeC5eCKZ8ocaUwps6NDmqF9f0fN3eQa3L2Kq_m8kA2Z9Mpa2i4zwU1-pQs63VJKKjBklQA5u9FZjakpLrU7ZUUa-SSYepngHAzowL3-6yPxAcQdl_imDkJv9RrE2ZrMXv2UvUx8eJfHYsvs5i7WSHZcaKPenRELX-3jCfFdOxvXVcdTAiM1ahCTlPPN7aVkDR-zYt2P8xFNxi-uqEb4xxcUU0FpmRXdRADTL1pyiiksushnEWQittnzis5z5RLWYhZjVGvd0S6VtOU05YuEWNQRS3p2XYKgmjvcYQ2YjaMdsCAxOaloeIkfmoZa1dJp6WbuqfYVl_mMgy4ADTa0sEfsJ2RMw7rk0Fk3_WILt5nZ6BxVatS2sLzumTUykVMTfXrHMFxDpMjwqrbw9ZFoJpwXRTVcalCCm8YcpLpxUGf9cHDsVLejg6YAhAaI8xU1v76sSAj8FWp7KJI2xgXwwqzqkR2uaUm4qUO_vLP73Fh2aqy33shsRTadXtIw1WC1agLaVom-pY2cTclCFF3KacCZHgfYuz1joq2zNPXq0DYgfN_HZLlfJl5f9ISSxFzMGouhvT73srY0f95zCyfJrYmUk-Mg\u0026hl=en\u0026origin=www.youtube.com\u0026opi=112496729\u0026ata_theme=dark"},"trackingParams":"CHoQl98KIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"popupType":"DIALOG","accessibilityData":{"accessibilityData":{"label":"My Ad Center"}}}}},"accessibilityText":"My Ad Center","style":"BUTTON_VIEW_MODEL_STYLE_UNKNOWN","trackingParams":"CHkQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjE","buttonSize":"BUTTON_VIEW_MODEL_SIZE_DEFAULT","state":"BUTTON_VIEW_MODEL_STATE_ACTIVE","tooltip":"My Ad Center","loggingDirectives":{"trackingParams":"CHkQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"},"attentionLogging":"ATTENTION_LOGGING_SCROLL"}}},"toggleButton":{"toggleButtonViewModel":{"defaultButtonViewModel":{"buttonViewModel":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CHgQ8FsiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_COLLAPSED"}}},"style":"BUTTON_VIEW_MODEL_STYLE_MONO","trackingParams":"CHgQ8FsiEwibhtS9xeCRAxXchekFHbT8OMQ=","type":"BUTTON_VIEW_MODEL_TYPE_TEXT","buttonSize":"BUTTON_VIEW_MODEL_SIZE_DEFAULT","state":"BUTTON_VIEW_MODEL_STATE_ACTIVE","iconImage":{"clientResource":{"imageName":"EXPAND_LESS"}}}},"toggledButtonViewModel":{"buttonViewModel":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CHcQ8FsiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"}}},"style":"BUTTON_VIEW_MODEL_STYLE_MONO","trackingParams":"CHcQ8FsiEwibhtS9xeCRAxXchekFHbT8OMQ=","type":"BUTTON_VIEW_MODEL_TYPE_TEXT","buttonSize":"BUTTON_VIEW_MODEL_SIZE_DEFAULT","state":"BUTTON_VIEW_MODEL_STATE_ACTIVE","iconImage":{"clientResource":{"imageName":"EXPAND_MORE"}}}},"isToggled":false,"trackingParams":"CHYQ2KsFIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"loggingDirectives":{"trackingParams":"CHUQ39AFIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"content":{"adsEngagementPanelContentRenderer":{"contentRenderer":{"panelTextIconTextGridCardsSubLayoutContentViewModel":{"interaction":{"onFirstVisible":{"performOnceCommand":{"identifier":"6acff631-0000-2cb4-bfb1-582429ce4dd0","command":{"innertubeCommand":{"loggingUrls":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_companion_impression_tracking"}],"pingingEndpoint":{"hack":true}}}}}},"adButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":"Learn more"},"onTap":{"innertubeCommand":{"clickTrackingParams":"CHQQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_MONO_TONAL","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":"Learn more"},"trackingParams":"CHQQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","loggingDirectives":{"trackingParams":"CHQQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adGridCardCollection":{"adGridCardCollectionViewModel":{"interaction":{},"gridCards":[{"adGridCardTextViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CHIQ9rINGAAiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CTAjyTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJpd3CI7lELFm5CXMJXY8a9KJryAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q16OVyKYHGAHSDAIQAZoNARKqDQJCRMgNAdINqgFodHRwczovL2NvbnRhYm8uY29tL2VuL2xpbnV4LXZwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_3T_rXQsqI-Z2YGgD5OtqJkIL7kLQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CTAjyTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJpd3CI7lELFm5CXMJXY8a9KJryAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q16OVyKYHGAHSDAIQAZoNARKqDQJCRMgNAdINqgFodHRwczovL2NvbnRhYm8uY29tL2VuL2xpbnV4LXZwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_3T_rXQsqI-Z2YGgD5OtqJkIL7kLQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","target":"TARGET_NEW_WINDOW"}}}},"title":{"content":"Linux VPS Hosting"},"descriptions":[{"content":"Fast, affordable VPS hosting"},{"content":"with flexible Linux plans."}],"moreInfoButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":""},"onTap":{"innertubeCommand":{"clickTrackingParams":"CHMQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CTAjyTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJpd3CI7lELFm5CXMJXY8a9KJryAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q16OVyKYHGAHSDAIQAZoNARKqDQJCRMgNAdINqgFodHRwczovL2NvbnRhYm8uY29tL2VuL2xpbnV4LXZwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_3T_rXQsqI-Z2YGgD5OtqJkIL7kLQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CTAjyTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJpd3CI7lELFm5CXMJXY8a9KJryAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q16OVyKYHGAHSDAIQAZoNARKqDQJCRMgNAdINqgFodHRwczovL2NvbnRhYm8uY29tL2VuL2xpbnV4LXZwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_3T_rXQsqI-Z2YGgD5OtqJkIL7kLQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_TRANSPARENT","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":""},"trackingParams":"CHMQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","iconImage":{"sources":[{"clientResource":{"imageName":"ARROW_DIAGONAL_UP_RIGHT_FILLED"}}]},"loggingDirectives":{"trackingParams":"CHMQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"loggingDirectives":{"trackingParams":"CHIQ9rINGAAiEwibhtS9xeCRAxXchekFHbT8OMQ=","visibility":{"types":"12"}}}},{"adGridCardTextViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CHAQ9rINGAEiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C9NreTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJ9SvPH2hHAHm5CYeK9DNAsZ5xyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q2Kfmn6UHGAHSDAIQAZoNARKqDQJCRMgNAdINsgFodHRwczovL2NvbnRhYm8uY29tL2VuL2NwYW5lbC12cHMtc2VydmVyLz91dG1fc291cmNlPWdvb2dsZSZ1dG1fbWVkaXVtPWNwYyZ1dG1fY2FtcGFpZ249Y29yZS1wcm9zcGVjdGluZy1pbmRpYS1wbWF4JnV0bV90ZXJtPSZ1dG1fY29udGVudD0mZ2FkX3NvdXJjZT0yJmdhZF9jYW1wYWlnbmlkPTIyNTk5MjM5NDA2uBP___________8BiBQBsBQBwBXJgIBA0BUB2BUBkBYB4hYCCAGAFwGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBigAMAA4AdAYAfAYAbIZATfCGQIIAQ\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1I-KcvkN1jBvSzN_-EOQb6S93wpg\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C9NreTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJ9SvPH2hHAHm5CYeK9DNAsZ5xyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q2Kfmn6UHGAHSDAIQAZoNARKqDQJCRMgNAdINsgFodHRwczovL2NvbnRhYm8uY29tL2VuL2NwYW5lbC12cHMtc2VydmVyLz91dG1fc291cmNlPWdvb2dsZSZ1dG1fbWVkaXVtPWNwYyZ1dG1fY2FtcGFpZ249Y29yZS1wcm9zcGVjdGluZy1pbmRpYS1wbWF4JnV0bV90ZXJtPSZ1dG1fY29udGVudD0mZ2FkX3NvdXJjZT0yJmdhZF9jYW1wYWlnbmlkPTIyNTk5MjM5NDA2uBP___________8BiBQBsBQBwBXJgIBA0BUB2BUBkBYB4hYCCAGAFwGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBigAMAA4AdAYAfAYAbIZATfCGQIIAQ\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1I-KcvkN1jBvSzN_-EOQb6S93wpg\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","target":"TARGET_NEW_WINDOW"}}}},"title":{"content":"cPanel VPS Hosting"},"descriptions":[{"content":"Optimize your cloud hosting with"},{"content":"a cPanel license for your VPS"}],"moreInfoButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":""},"onTap":{"innertubeCommand":{"clickTrackingParams":"CHEQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C9NreTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJ9SvPH2hHAHm5CYeK9DNAsZ5xyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q2Kfmn6UHGAHSDAIQAZoNARKqDQJCRMgNAdINsgFodHRwczovL2NvbnRhYm8uY29tL2VuL2NwYW5lbC12cHMtc2VydmVyLz91dG1fc291cmNlPWdvb2dsZSZ1dG1fbWVkaXVtPWNwYyZ1dG1fY2FtcGFpZ249Y29yZS1wcm9zcGVjdGluZy1pbmRpYS1wbWF4JnV0bV90ZXJtPSZ1dG1fY29udGVudD0mZ2FkX3NvdXJjZT0yJmdhZF9jYW1wYWlnbmlkPTIyNTk5MjM5NDA2uBP___________8BiBQBsBQBwBXJgIBA0BUB2BUBkBYB4hYCCAGAFwGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBigAMAA4AdAYAfAYAbIZATfCGQIIAQ\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1I-KcvkN1jBvSzN_-EOQb6S93wpg\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C9NreTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJ9SvPH2hHAHm5CYeK9DNAsZ5xyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q2Kfmn6UHGAHSDAIQAZoNARKqDQJCRMgNAdINsgFodHRwczovL2NvbnRhYm8uY29tL2VuL2NwYW5lbC12cHMtc2VydmVyLz91dG1fc291cmNlPWdvb2dsZSZ1dG1fbWVkaXVtPWNwYyZ1dG1fY2FtcGFpZ249Y29yZS1wcm9zcGVjdGluZy1pbmRpYS1wbWF4JnV0bV90ZXJtPSZ1dG1fY29udGVudD0mZ2FkX3NvdXJjZT0yJmdhZF9jYW1wYWlnbmlkPTIyNTk5MjM5NDA2uBP___________8BiBQBsBQBwBXJgIBA0BUB2BUBkBYB4hYCCAGAFwGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBigAMAA4AdAYAfAYAbIZATfCGQIIAQ\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1I-KcvkN1jBvSzN_-EOQb6S93wpg\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_TRANSPARENT","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":""},"trackingParams":"CHEQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","iconImage":{"sources":[{"clientResource":{"imageName":"ARROW_DIAGONAL_UP_RIGHT_FILLED"}}]},"loggingDirectives":{"trackingParams":"CHEQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"loggingDirectives":{"trackingParams":"CHAQ9rINGAEiEwibhtS9xeCRAxXchekFHbT8OMQ=","visibility":{"types":"12"}}}},{"adGridCardTextViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CG4Q9rINGAIiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CPk6DTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJ1Kuqs8mIGb25CQpOhBwd6dFbyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q26fmn6UHGADSDAIQAZoNARKqDQJCRMgNAdINtwFodHRwczovL2NvbnRhYm8uY29tL2VuL3BsZXNrLXNlcnZlcnMvP3V0bV9zb3VyY2U9Z29vZ2xlJnV0bV9tZWRpdW09Y3BjJnV0bV9jYW1wYWlnbj1jb3JlLXByb3NwZWN0aW5nLWluZGlhLXBtYXgmdXRtX3Rlcm09c2l0ZWxpbmtzJnV0bV9jb250ZW50PSZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI1OTkyMzk0MDa4E____________wGIFAGwFAHAFcmAgEDQFQHYFQGQFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF_6H3r_0F8XRuhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0FPBcgE8O_1jLo9BugdQPOeL2JJA\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CPk6DTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJ1Kuqs8mIGb25CQpOhBwd6dFbyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q26fmn6UHGADSDAIQAZoNARKqDQJCRMgNAdINtwFodHRwczovL2NvbnRhYm8uY29tL2VuL3BsZXNrLXNlcnZlcnMvP3V0bV9zb3VyY2U9Z29vZ2xlJnV0bV9tZWRpdW09Y3BjJnV0bV9jYW1wYWlnbj1jb3JlLXByb3NwZWN0aW5nLWluZGlhLXBtYXgmdXRtX3Rlcm09c2l0ZWxpbmtzJnV0bV9jb250ZW50PSZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI1OTkyMzk0MDa4E____________wGIFAGwFAHAFcmAgEDQFQHYFQGQFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF_6H3r_0F8XRuhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0FPBcgE8O_1jLo9BugdQPOeL2JJA\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","target":"TARGET_NEW_WINDOW"}}}},"title":{"content":"Plesk Server and VPS"},"descriptions":[{"content":"Get your own instance optimized"},{"content":"for Plesk Obsidian"}],"moreInfoButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":""},"onTap":{"innertubeCommand":{"clickTrackingParams":"CG8Q2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CPk6DTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJ1Kuqs8mIGb25CQpOhBwd6dFbyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q26fmn6UHGADSDAIQAZoNARKqDQJCRMgNAdINtwFodHRwczovL2NvbnRhYm8uY29tL2VuL3BsZXNrLXNlcnZlcnMvP3V0bV9zb3VyY2U9Z29vZ2xlJnV0bV9tZWRpdW09Y3BjJnV0bV9jYW1wYWlnbj1jb3JlLXByb3NwZWN0aW5nLWluZGlhLXBtYXgmdXRtX3Rlcm09c2l0ZWxpbmtzJnV0bV9jb250ZW50PSZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI1OTkyMzk0MDa4E____________wGIFAGwFAHAFcmAgEDQFQHYFQGQFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF_6H3r_0F8XRuhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0FPBcgE8O_1jLo9BugdQPOeL2JJA\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CPk6DTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJ1Kuqs8mIGb25CQpOhBwd6dFbyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q26fmn6UHGADSDAIQAZoNARKqDQJCRMgNAdINtwFodHRwczovL2NvbnRhYm8uY29tL2VuL3BsZXNrLXNlcnZlcnMvP3V0bV9zb3VyY2U9Z29vZ2xlJnV0bV9tZWRpdW09Y3BjJnV0bV9jYW1wYWlnbj1jb3JlLXByb3NwZWN0aW5nLWluZGlhLXBtYXgmdXRtX3Rlcm09c2l0ZWxpbmtzJnV0bV9jb250ZW50PSZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI1OTkyMzk0MDa4E____________wGIFAGwFAHAFcmAgEDQFQHYFQGQFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF_6H3r_0F8XRuhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0FPBcgE8O_1jLo9BugdQPOeL2JJA\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_TRANSPARENT","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":""},"trackingParams":"CG8Q2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","iconImage":{"sources":[{"clientResource":{"imageName":"ARROW_DIAGONAL_UP_RIGHT_FILLED"}}]},"loggingDirectives":{"trackingParams":"CG8Q2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"loggingDirectives":{"trackingParams":"CG4Q9rINGAIiEwibhtS9xeCRAxXchekFHbT8OMQ=","visibility":{"types":"12"}}}},{"adGridCardTextViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CGwQ9rINGAMiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CKQ7kTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJAk0AKe-YChC5CcNlEs7v9r1JyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Qsr-qleYGGAHSDAIQAZoNARKqDQJCRMgNAdINtAFodHRwczovL2NvbnRhYm8uY29tL2VuL3dpbmRvd3Mtc2VydmVycy12cHMvP3V0bV9zb3VyY2U9Z29vZ2xlJnV0bV9tZWRpdW09Y3BjJnV0bV9jYW1wYWlnbj1jb3JlLXByb3NwZWN0aW5nLWluZGlhLXBtYXgmdXRtX3Rlcm09JnV0bV9jb250ZW50PSZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI1OTkyMzk0MDa4E____________wGIFAGwFAHAFcmAgEDQFQHYFQGQFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF_6H3r_0F8XRuhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_20EtuUhe43lYt92VKjaMuymntNxQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CKQ7kTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJAk0AKe-YChC5CcNlEs7v9r1JyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Qsr-qleYGGAHSDAIQAZoNARKqDQJCRMgNAdINtAFodHRwczovL2NvbnRhYm8uY29tL2VuL3dpbmRvd3Mtc2VydmVycy12cHMvP3V0bV9zb3VyY2U9Z29vZ2xlJnV0bV9tZWRpdW09Y3BjJnV0bV9jYW1wYWlnbj1jb3JlLXByb3NwZWN0aW5nLWluZGlhLXBtYXgmdXRtX3Rlcm09JnV0bV9jb250ZW50PSZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI1OTkyMzk0MDa4E____________wGIFAGwFAHAFcmAgEDQFQHYFQGQFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF_6H3r_0F8XRuhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_20EtuUhe43lYt92VKjaMuymntNxQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","target":"TARGET_NEW_WINDOW"}}}},"title":{"content":"Windows VPS Server"},"descriptions":[{"content":"Affordable, Fast, and Flexible."},{"content":"Scalable Windows VPS hosting"}],"moreInfoButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":""},"onTap":{"innertubeCommand":{"clickTrackingParams":"CG0Q2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CKQ7kTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJAk0AKe-YChC5CcNlEs7v9r1JyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Qsr-qleYGGAHSDAIQAZoNARKqDQJCRMgNAdINtAFodHRwczovL2NvbnRhYm8uY29tL2VuL3dpbmRvd3Mtc2VydmVycy12cHMvP3V0bV9zb3VyY2U9Z29vZ2xlJnV0bV9tZWRpdW09Y3BjJnV0bV9jYW1wYWlnbj1jb3JlLXByb3NwZWN0aW5nLWluZGlhLXBtYXgmdXRtX3Rlcm09JnV0bV9jb250ZW50PSZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI1OTkyMzk0MDa4E____________wGIFAGwFAHAFcmAgEDQFQHYFQGQFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF_6H3r_0F8XRuhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_20EtuUhe43lYt92VKjaMuymntNxQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CKQ7kTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJAk0AKe-YChC5CcNlEs7v9r1JyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Qsr-qleYGGAHSDAIQAZoNARKqDQJCRMgNAdINtAFodHRwczovL2NvbnRhYm8uY29tL2VuL3dpbmRvd3Mtc2VydmVycy12cHMvP3V0bV9zb3VyY2U9Z29vZ2xlJnV0bV9tZWRpdW09Y3BjJnV0bV9jYW1wYWlnbj1jb3JlLXByb3NwZWN0aW5nLWluZGlhLXBtYXgmdXRtX3Rlcm09JnV0bV9jb250ZW50PSZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI1OTkyMzk0MDa4E____________wGIFAGwFAHAFcmAgEDQFQHYFQGQFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF_6H3r_0F8XRuhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_20EtuUhe43lYt92VKjaMuymntNxQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_TRANSPARENT","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":""},"trackingParams":"CG0Q2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","iconImage":{"sources":[{"clientResource":{"imageName":"ARROW_DIAGONAL_UP_RIGHT_FILLED"}}]},"loggingDirectives":{"trackingParams":"CG0Q2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"loggingDirectives":{"trackingParams":"CGwQ9rINGAMiEwibhtS9xeCRAxXchekFHbT8OMQ=","visibility":{"types":"12"}}}}],"style":"AD_GRID_CARD_COLLECTION_STYLE_FIXED_ONE_COLUMN","loggingDirectives":{"trackingParams":"CGsQ4cMLIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"loggingDirectives":{"trackingParams":"CGoQ5rANIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"},"attentionLogging":"ATTENTION_LOGGING_SCROLL"}}}}}}}},"expandAction":{"innertubeCommand":{"clickTrackingParams":"CGkQjP4FIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"}}},"hideAction":{"innertubeCommand":{"clickTrackingParams":"CGkQjP4FIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_HIDDEN"}}},"removeAction":{"innertubeCommand":{"clickTrackingParams":"CGkQjP4FIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","updateEngagementPanelAction":{"targetId":"engagement-panel-ads","header":{},"content":{"adsEngagementPanelContentRenderer":{"hack":true}}}}},"adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgWShMIu8HVvcXgkQMVQoevAR1HDjEbUggIAxABSAFYAmgBcCl6AghS"},"adVideoId":"PuZeeWRqSYI","loggingDirectives":{"trackingParams":"CGkQjP4FIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"},"attentionLogging":"ATTENTION_LOGGING_SCROLL"}}},"layoutExitNormalTriggers":[{"id":"6acff632-0000-2cb4-bfb1-582429ce4dd0","layoutExitedForReasonTrigger":{"triggeringLayoutId":"NXGDnmPOV48RioBd","layoutExitReason":"LAYOUT_EXIT_REASON_NORMAL"}},{"id":"6acff633-0000-2cb4-bfb1-582429ce4dd0","onDifferentLayoutIdEnteredTrigger":{"triggeringLayoutId":"MNlGMXcyGjz7h0BA","slotType":"SLOT_TYPE_PLAYER_BYTES","layoutType":"LAYOUT_TYPE_MEDIA"}}]}}},"slotEntryTrigger":{"id":"6acff635-0000-2cb4-bfb1-582429ce4dd0","layoutIdEnteredTrigger":{"triggeringLayoutId":"MNlGMXcyGjz7h0BA"}},"slotFulfillmentTriggers":[{"id":"6acff636-0000-2cb4-bfb1-582429ce4dd0","slotIdScheduledTrigger":{"triggeringSlotId":"6acff634-0000-2cb4-bfb1-582429ce4dd0"}}],"slotExpirationTriggers":[{"id":"6acff637-0000-2cb4-bfb1-582429ce4dd0","onNewPlaybackAfterContentVideoIdTrigger":{}},{"id":"6acff638-0000-2cb4-bfb1-582429ce4dd0","slotIdExitedTrigger":{"triggeringSlotId":"6acff634-0000-2cb4-bfb1-582429ce4dd0"}},{"id":"6acff639-0000-2cb4-bfb1-582429ce4dd0","layoutExitedForReasonTrigger":{"triggeringLayoutId":"MNlGMXcyGjz7h0BA","layoutExitReason":"LAYOUT_EXIT_REASON_ERROR"}}],"trackingParams":"CGgQzOgNGAUiEwibhtS9xeCRAxXchekFHbT8OMQ="}},{"adSlotRenderer":{"adSlotMetadata":{"slotId":"6acff63d-0000-2cb4-bfb1-582429ce4dd0","slotType":"SLOT_TYPE_ABOVE_FEED","adSlotLoggingData":{"serializedSlotAdServingDataEntry":"ChMIu8HVvcXgkQMVQoevAR1HDjEbGggIAxABSAFYAg=="},"triggerEvent":"SLOT_TRIGGER_EVENT_LAYOUT_ID_ENTERED","triggeringSourceLayoutId":"UG6uWzLEXnMlvRUD"},"fulfillmentContent":{"fulfilledLayout":{"aboveFeedAdLayoutRenderer":{"adLayoutMetadata":{"layoutId":"lZemWAc5rPqaAtSe","layoutType":"LAYOUT_TYPE_PANEL","adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgEShMIu8HVvcXgkQMVQoevAR1HDjEbUgoIAxABQAJIAVgCWAJoAXApegIIUg=="}},"renderingContent":{"adsEngagementPanelLayoutViewModel":{"addAction":{"innertubeCommand":{"clickTrackingParams":"CFEQjP4FIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","updateEngagementPanelAction":{"targetId":"engagement-panel-ads","header":{"panelAdHeaderImageLockupViewModel":{"interaction":{},"adImage":{"adImageViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CGcQ-a0CIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"imageSources":[{"url":"https://tpc.googlesyndication.com/pagead/imgad?id=CICAgJDiqviCNxCsAhg8Mghy1ugPkcB2vA","width":300,"height":60}],"loggingDirectives":{"trackingParams":"CGcQ-a0CIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adAvatarLockup":{"adAvatarLockupViewModel":{"interaction":{"accessibility":{"label":"Sponsored - Safe and secure\nhostinger.com"}},"style":"AD_AVATAR_LOCKUP_STYLE_COMPACT","adAvatar":{"adAvatarViewModel":{"interaction":{},"style":"AD_AVATAR_STYLE_CIRCULAR","image":{"sources":[{"url":"https://yt3.ggpht.com/proxy/WPVaI2h25VHQTyfGpW3K8b9-JrOCr9Tj5cqA02QHO0QXmF0CGA1unUXbNJ9Aq0GEvI7igSVqOY4xWpYGUCIVXwxEYmd2DqQWetAn6n-ME3jFXH8x-a1Uo2BE4bhGr_qkl_pHZHQCkQ0VqvH5etZYmRbW5-yhv7NeWEgApz03sRLWTEre7eNZp0fynfRvSi9QF1a-GmxWG2FireYInSwVLOG87_9-HGtZz21zLXf9u1D-OBAwQRjwaFj4nCQvkO-fogZi=w1201-h1201-nd","width":1201,"height":1201}]},"size":"AD_AVATAR_SIZE_M","trackingParams":"CGYQ5JoJIhMIm4bUvcXgkQMV3IXpBR20_DjE","rendererContext":{"accessibilityContext":{"label":"Hostinger"}},"loggingDirectives":{"trackingParams":"CGYQ5JoJIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"headline":{"content":"Safe and secure"},"adBadge":{"adBadgeViewModel":{"interaction":{},"style":"AD_BADGE_STYLE_STARK","label":{"content":"Sponsored"},"loggingDirectives":{"trackingParams":"CGUQnOcKIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"primaryDetailsLine":{"adDetailsLineViewModel":{"style":"AD_DETAILS_LINE_STYLE_STANDARD","attributes":[{"text":{"content":"hostinger.com"}}]}},"loggingDirectives":{"trackingParams":"CGQQpqUJIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":"Start now"},"onTap":{"innertubeCommand":{"clickTrackingParams":"CGMQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_MONO_TONAL","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":"Start now"},"trackingParams":"CGMQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","loggingDirectives":{"trackingParams":"CGMQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"menu":{"buttonViewModel":{"iconName":"MORE_VERT","onTap":{"innertubeCommand":{"clickTrackingParams":"CGEQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","openPopupAction":{"popup":{"aboutThisAdRenderer":{"url":{"privateDoNotAccessOrElseTrustedResourceUrlWrappedValue":"https://www.youtube.com/aboutthisad?pf=web\u0026source=youtube\u0026reasons=AUJjZ_6gRhUo7svcVWbhxAn9uKOwzbU4HT5QqjHZSou1weuxYcW9-qAZbLgW0eq7yYTGApTBQE5mZPH0Q0ezK2JVJSTSQGyxvvQ8nC-kX7wo2h8duCCvtTi-9TsaHWevMbSCA7bbg_aPGeIlQ4odui6dAXd8DPW4uYdHiA5oqCRXBhEMJI2jInj3Oa3bVUXS6aSUpqhNq4c-UrdqLXw9QmHKLU7OIFjKTFaFcltIIDS-5nuwb0pOLvVldUk22hWhvt5VXUK4wJuslIUBtCwUZbMajmdm5fmBRhTnkv9cEj3gHeIQ1g7A1WDuMOkbUqxYMZE6thBeBV1CnNVciGEiZ7ozlPRCvsSfdz4SEM4BQ8B7p1m09bllHQyuYj0UGQG5p9t6zD2oXD5YxpnwZleCpYBrOmPe6neFXUP3U1e9BDtcA95YzI5GspNF_7bZOLeYFgQBlCZiSmAR_jl7Vv3B1z2uNq95Vi22D92h6rrkG2_gyDSv-WucdKJE519vCoy-YW6WA4g9HxmjOhgjWrTvxai-ZFmf41XJOP0EdRkyFmmPVEyLPmLxHfxPSc0Xgxd7_Xjq7NBRpdmSDAYRsN9aPhlI5T8TFmK3j4s00KRsS9C_zFQHvN9ELRwu-roUKSutHIjTJBWm79dUrtITjR86082o1bHrk8q4Z6ppsBVgepx3wMKLz9j6FpThYpiTW3jx50NRujwBtlAitWT5swwPkqgxj8yDkRW0N1PFDDxnuqjcDaarsGrdby1464QhMZI7iC0-2wz6YHfHrsD6l20cPZdKx3kEqzRIoD3qss2QFHSr-gRTdSxQvSV-fX-ErNaYrBltENrdRqLlQF752ubLx_lw3yGgFTD_nWFYYiflInTSrMF9iDw6oM1nTRMHmhTJlk-Lu98q72t_1gMT2g93HlDhW97R-OJ30SQkBYLCbRSDc7-aVACsBJrVC13rfB9Ctdi_V7pdhBI8EWa5z0a4IBNPpFxKPQ9kfQNHxj13VbQxPbX6ql1epZbZyAXwXbjQSnTe_QCRBfeU4gifuR6xP87KqWAvmwxIvIRVWr9C5wDvtJ8wFbXn9flpTwB3Td10L4pdkjENS97ng-VyBIpr8XTLjz_E5pJJ6PSZDCvktuPXajU_JnXZACmSjDPNeDtOpMLA2kJaSOGGG5sD10AP6PdOhVp0atQawWoKqHpbHflz_Dw1b6eWH6tYGQ6JlX_12pQKhrQhqrhfy-cKZ1KqGXmvXXP78F-di8xcioqhgZdQ_Z5PadsPzwc8gsE47txPugbvF6SsEqOgnroTwu9gOx-sIEAj1TTYsrhDSUDJEKsx6Unv1jgD9NsvHQgBpL3QSQCVgDybxYCE2NiuMKipa6LSf93Dj0RAYSDMv9Wc21CXWNya2Ye79IXd6xrmBjnyLxrSaPnHLUHSuUoNniFnhwHz9WjrttDUlw_QmGq88tke2GfGtlgpsw7ZfwNAQ1L4NLseXWmMZGYNCfrGPoDAXewlSbyRfunr6eiHI9YUOfW-hlR4SHRQYecTMzMBFxGegOWFXSCihqzJzj64kXz1MDtyh8lVR_YDFUMAhFBh0-ZkLgkahUsNF3Ad4ud1JY8dVjb4SskYT0WVKh4tMypLBI3PTLYCR3eXKUk4G5-GieXnicGUwOwcuF9YbZ3ieUluZ_huhY93QnFKdHa_vU2TuW35_HqSRYw23VrUm0JJYdE8ehUl-S35kuSWjPsPdECPUeJeU1XMt2Cw8JKqstZz24yZbEOpRKUWvqLpfquWddD1s0Y2hEvd-W_vSbdMtk9T6bhe0vfT7y57iSO6JW5E7N-rIabSux1Pip1zTSiWOLXl0Gtu5fGCsWIb15JoH-efYQRoIquHPxprtk1ITmACQ6r-CKxD0pTlEUR6bobNtGQBUrlGCLvGrH8KEfHpndX3dpnCPsK5uNBv1RN_Dp464GSY6VXliHXn4SGnzQplIJw9YqJ8yLHBWZCPJp-J0sKE7dxRpwHh9cQq8zrn_DuVpB0wSZfAOgA8hYCOtDQ3RqSUvFXtECUvXNR2RJO1jf3k7DBo8zPV3cZpX1XIjBpMTBBBF6rcEfo54llQWyy4BKIifYkx8nm8xwllkYlG2S0WogqlY3kuh3OVfTq94XfCaRv2xLUsXN7nv78PsR56mWpVXKp3tUyJW1L-nHmQhlFqjrnSaLp23CLMcUcbU_gN1PRjhEmhkvoVOCU32Yf7n9CrBATBYeiH9JXmPASNzhVtbS70MgD1_LhA9-F4JekF_Ppe-OZlUJRbTixM0RqtZjQB0Fq-cFEuqp-cDIrhDu-6l_4mLj40mc6ARaLNNY5pzJN8iuHQ9kNh7vmeDSKWZW_8-KmqGcrOtnvkcMn_hR0K5qAuD6b006xnyqSTEJ5-ZrMjxa7tAf7ufAd7zkNyvKOrxJLhsStFYlwFqkvAMXdCtQ5qOs2WNHNwAqYd2nYexWqvNbFHgTuNCS0Fb4KigwKHUbH8ZA6wvSM7vnwTStumq6GrN2TSXUjUOiHGEOJbKTRikdJQPkarFPTYFDQYtLC3sy9umE5BzSYeaDWcWCFtmY3VMWIEWEzPKKom8bKpNOE-t-GsA7QC3T_pQplA22BxWeagwBbFZ_W0Uf7EskO3YicXEyYbht58N6rRW5QkJRXWqb2AbHQlOhQ7Cwqy0xjtrU_yqxCtrfI2Q9r_nH_GmXZm70cZiwlfQE4fWupSwiS6Nkl34gaaHZ5BzLw6iafafUsISqQiPTXToWGMiSwrG4L3h_f5G9tewwIJSTHWGcjcGEXZTCLUJBg5o3Vf1caLISvFeh2R_XfLiAyLxfp-fi6t5Z5_H_GtoVDc8qxJOBYdxTzFH_-8bRbO6Mm83crWTizmg45KMjw_DMo2Ni-1z25ZQzW1DWVJ1DjXq6fpVgAsX6fCErg10np-hmvi8kdZ99PHnYOII35h\u0026hl=en\u0026origin=www.youtube.com\u0026opi=112496729\u0026ata_theme=dark"},"trackingParams":"CGIQl98KIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"popupType":"DIALOG","accessibilityData":{"accessibilityData":{"label":"My Ad Center"}}}}},"accessibilityText":"My Ad Center","style":"BUTTON_VIEW_MODEL_STYLE_UNKNOWN","trackingParams":"CGEQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjE","buttonSize":"BUTTON_VIEW_MODEL_SIZE_DEFAULT","state":"BUTTON_VIEW_MODEL_STATE_ACTIVE","tooltip":"My Ad Center","loggingDirectives":{"trackingParams":"CGEQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"},"attentionLogging":"ATTENTION_LOGGING_SCROLL"}}},"toggleButton":{"toggleButtonViewModel":{"defaultButtonViewModel":{"buttonViewModel":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CGAQ8FsiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_COLLAPSED"}}},"style":"BUTTON_VIEW_MODEL_STYLE_MONO","trackingParams":"CGAQ8FsiEwibhtS9xeCRAxXchekFHbT8OMQ=","type":"BUTTON_VIEW_MODEL_TYPE_TEXT","buttonSize":"BUTTON_VIEW_MODEL_SIZE_DEFAULT","state":"BUTTON_VIEW_MODEL_STATE_ACTIVE","iconImage":{"clientResource":{"imageName":"EXPAND_LESS"}}}},"toggledButtonViewModel":{"buttonViewModel":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CF8Q8FsiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"}}},"style":"BUTTON_VIEW_MODEL_STYLE_MONO","trackingParams":"CF8Q8FsiEwibhtS9xeCRAxXchekFHbT8OMQ=","type":"BUTTON_VIEW_MODEL_TYPE_TEXT","buttonSize":"BUTTON_VIEW_MODEL_SIZE_DEFAULT","state":"BUTTON_VIEW_MODEL_STATE_ACTIVE","iconImage":{"clientResource":{"imageName":"EXPAND_MORE"}}}},"isToggled":false,"trackingParams":"CF4Q2KsFIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"loggingDirectives":{"trackingParams":"CF0Q39AFIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"content":{"adsEngagementPanelContentRenderer":{"contentRenderer":{"panelTextIconTextGridCardsSubLayoutContentViewModel":{"interaction":{"onFirstVisible":{"performOnceCommand":{"identifier":"6acff63a-0000-2cb4-bfb1-582429ce4dd0","command":{"innertubeCommand":{"loggingUrls":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_companion_impression_tracking"}],"pingingEndpoint":{"hack":true}}}}}},"adButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":"Start now"},"onTap":{"innertubeCommand":{"clickTrackingParams":"CFwQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_MONO_TONAL","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":"Start now"},"trackingParams":"CFwQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","loggingDirectives":{"trackingParams":"CFwQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adGridCardCollection":{"adGridCardCollectionViewModel":{"interaction":{},"gridCards":[{"adGridCardTextViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CFoQ9rINGAAiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CbFxXTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECqAe_07ECqAfn17ECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQkt4ITjUSZT7LkJs6sphDt2yizICQPICRjICY8ByAnCAaELiGEMv0XdegW6C2YIARABGAQgASgBMBBAAUgBYABoAHACiAEAmAECogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYACAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIFugMFdml0cGXQCxLaCwsIHxDBkKnd5wMYANIMAhABmg0BEqoNAkJEyA0B0g2jAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vZnJlZS1kb21haW4_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1zshFrmelj8LPIraGYOKa9EiIQcQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CbFxXTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECqAe_07ECqAfn17ECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQkt4ITjUSZT7LkJs6sphDt2yizICQPICRjICY8ByAnCAaELiGEMv0XdegW6C2YIARABGAQgASgBMBBAAUgBYABoAHACiAEAmAECogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYACAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIFugMFdml0cGXQCxLaCwsIHxDBkKnd5wMYANIMAhABmg0BEqoNAkJEyA0B0g2jAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vZnJlZS1kb21haW4_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1zshFrmelj8LPIraGYOKa9EiIQcQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","target":"TARGET_NEW_WINDOW"}}}},"title":{"content":"Get a Free Domain"},"descriptions":[{"content":"Free Domain With Hosting Plans."},{"content":"Claim Your Free Domain Now."}],"moreInfoButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":""},"onTap":{"innertubeCommand":{"clickTrackingParams":"CFsQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CbFxXTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECqAe_07ECqAfn17ECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQkt4ITjUSZT7LkJs6sphDt2yizICQPICRjICY8ByAnCAaELiGEMv0XdegW6C2YIARABGAQgASgBMBBAAUgBYABoAHACiAEAmAECogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYACAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIFugMFdml0cGXQCxLaCwsIHxDBkKnd5wMYANIMAhABmg0BEqoNAkJEyA0B0g2jAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vZnJlZS1kb21haW4_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1zshFrmelj8LPIraGYOKa9EiIQcQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CbFxXTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECqAe_07ECqAfn17ECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQkt4ITjUSZT7LkJs6sphDt2yizICQPICRjICY8ByAnCAaELiGEMv0XdegW6C2YIARABGAQgASgBMBBAAUgBYABoAHACiAEAmAECogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYACAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIFugMFdml0cGXQCxLaCwsIHxDBkKnd5wMYANIMAhABmg0BEqoNAkJEyA0B0g2jAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vZnJlZS1kb21haW4_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1zshFrmelj8LPIraGYOKa9EiIQcQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_TRANSPARENT","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":""},"trackingParams":"CFsQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","iconImage":{"sources":[{"clientResource":{"imageName":"ARROW_DIAGONAL_UP_RIGHT_FILLED"}}]},"loggingDirectives":{"trackingParams":"CFsQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"loggingDirectives":{"trackingParams":"CFoQ9rINGAAiEwibhtS9xeCRAxXchekFHbT8OMQ=","visibility":{"types":"12"}}}},{"adGridCardTextViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CFgQ9rINGAEiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CbpSUTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECqAe_07ECqAfn17ECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQl-OTrj3S68RbkJWBvLjl_DSs7ICQPICRjICY8ByAnCAaELiGEMv0XdegW6C2YIARABGAQgASgBMBBAAUgBYABoAHACiAEAmAECogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYACAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIFugMFdml0cGXQCxLaCwsIHxC-kKnd5wMYANIMAhABmg0BEqoNAkJEyA0B0g2sAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vZnJlZS1zc2wtY2VydGlmaWNhdGU_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_22JWMdsNVwvtqKNG8egCM4AO08PA\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CbpSUTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECqAe_07ECqAfn17ECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQl-OTrj3S68RbkJWBvLjl_DSs7ICQPICRjICY8ByAnCAaELiGEMv0XdegW6C2YIARABGAQgASgBMBBAAUgBYABoAHACiAEAmAECogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYACAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIFugMFdml0cGXQCxLaCwsIHxC-kKnd5wMYANIMAhABmg0BEqoNAkJEyA0B0g2sAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vZnJlZS1zc2wtY2VydGlmaWNhdGU_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_22JWMdsNVwvtqKNG8egCM4AO08PA\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","target":"TARGET_NEW_WINDOW"}}}},"title":{"content":"Free SSL Certificate"},"descriptions":[{"content":"Get a Free SSL Certificate."},{"content":"Secure Your Website Now."}],"moreInfoButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":""},"onTap":{"innertubeCommand":{"clickTrackingParams":"CFkQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CbpSUTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECqAe_07ECqAfn17ECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQl-OTrj3S68RbkJWBvLjl_DSs7ICQPICRjICY8ByAnCAaELiGEMv0XdegW6C2YIARABGAQgASgBMBBAAUgBYABoAHACiAEAmAECogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYACAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIFugMFdml0cGXQCxLaCwsIHxC-kKnd5wMYANIMAhABmg0BEqoNAkJEyA0B0g2sAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vZnJlZS1zc2wtY2VydGlmaWNhdGU_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_22JWMdsNVwvtqKNG8egCM4AO08PA\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CbpSUTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECqAe_07ECqAfn17ECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQl-OTrj3S68RbkJWBvLjl_DSs7ICQPICRjICY8ByAnCAaELiGEMv0XdegW6C2YIARABGAQgASgBMBBAAUgBYABoAHACiAEAmAECogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYACAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIFugMFdml0cGXQCxLaCwsIHxC-kKnd5wMYANIMAhABmg0BEqoNAkJEyA0B0g2sAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vZnJlZS1zc2wtY2VydGlmaWNhdGU_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_22JWMdsNVwvtqKNG8egCM4AO08PA\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_TRANSPARENT","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":""},"trackingParams":"CFkQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","iconImage":{"sources":[{"clientResource":{"imageName":"ARROW_DIAGONAL_UP_RIGHT_FILLED"}}]},"loggingDirectives":{"trackingParams":"CFkQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"loggingDirectives":{"trackingParams":"CFgQ9rINGAEiEwibhtS9xeCRAxXchekFHbT8OMQ=","visibility":{"types":"12"}}}},{"adGridCardTextViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CFYQ9rINGAIiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CmCwgTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECqAe_07ECqAfn17ECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQl3PXsV7r0ES7kJpTXGyW5f-rXICQPICRjICY8ByAnCAaELiGEMv0XdegW6C2YIARABGAQgASgBMBBAAUgBYABoAHACiAEAmAECogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYACAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIFugMFdml0cGXQCxLaCwsIHxC1kKnd5wMYANIMAhABmg0BEqoNAkJEyA0B0g2bAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vcHJvP3V0bV9jYW1wYWlnbj1STUtULVZBQy1EZW1hbmRHZW4tV29yZFByZXNzLVdvb0NvbW1lcmNlfE5UOllvdVR1YmV8TE86QkQmdXRtX21lZGl1bT1wcGMmZ2FkX3NvdXJjZT0yJmdhZF9jYW1wYWlnbmlkPTIyNDYxMjUyNjQ4uBP___________8BsBQBwBXJgIBA0BUB2BUBkBYBmBYB4hYCCAGAFwGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRczi4eMgBl9O7oXBigAMAA4AdAYAfAYAbIZATfCGQIIAQ\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0vUJgkOnwtHKcRd7wnTKRy2nyJYA\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CmCwgTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECqAe_07ECqAfn17ECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQl3PXsV7r0ES7kJpTXGyW5f-rXICQPICRjICY8ByAnCAaELiGEMv0XdegW6C2YIARABGAQgASgBMBBAAUgBYABoAHACiAEAmAECogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYACAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIFugMFdml0cGXQCxLaCwsIHxC1kKnd5wMYANIMAhABmg0BEqoNAkJEyA0B0g2bAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vcHJvP3V0bV9jYW1wYWlnbj1STUtULVZBQy1EZW1hbmRHZW4tV29yZFByZXNzLVdvb0NvbW1lcmNlfE5UOllvdVR1YmV8TE86QkQmdXRtX21lZGl1bT1wcGMmZ2FkX3NvdXJjZT0yJmdhZF9jYW1wYWlnbmlkPTIyNDYxMjUyNjQ4uBP___________8BsBQBwBXJgIBA0BUB2BUBkBYBmBYB4hYCCAGAFwGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRczi4eMgBl9O7oXBigAMAA4AdAYAfAYAbIZATfCGQIIAQ\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0vUJgkOnwtHKcRd7wnTKRy2nyJYA\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","target":"TARGET_NEW_WINDOW"}}}},"title":{"content":"Web Hosting for Pros"},"descriptions":[{"content":"Web Hosting for Professionals."},{"content":"Scale Your Business With Pro."}],"moreInfoButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":""},"onTap":{"innertubeCommand":{"clickTrackingParams":"CFcQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CmCwgTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECqAe_07ECqAfn17ECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQl3PXsV7r0ES7kJpTXGyW5f-rXICQPICRjICY8ByAnCAaELiGEMv0XdegW6C2YIARABGAQgASgBMBBAAUgBYABoAHACiAEAmAECogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYACAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIFugMFdml0cGXQCxLaCwsIHxC1kKnd5wMYANIMAhABmg0BEqoNAkJEyA0B0g2bAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vcHJvP3V0bV9jYW1wYWlnbj1STUtULVZBQy1EZW1hbmRHZW4tV29yZFByZXNzLVdvb0NvbW1lcmNlfE5UOllvdVR1YmV8TE86QkQmdXRtX21lZGl1bT1wcGMmZ2FkX3NvdXJjZT0yJmdhZF9jYW1wYWlnbmlkPTIyNDYxMjUyNjQ4uBP___________8BsBQBwBXJgIBA0BUB2BUBkBYBmBYB4hYCCAGAFwGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRczi4eMgBl9O7oXBigAMAA4AdAYAfAYAbIZATfCGQIIAQ\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0vUJgkOnwtHKcRd7wnTKRy2nyJYA\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CmCwgTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECqAe_07ECqAfn17ECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQl3PXsV7r0ES7kJpTXGyW5f-rXICQPICRjICY8ByAnCAaELiGEMv0XdegW6C2YIARABGAQgASgBMBBAAUgBYABoAHACiAEAmAECogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYACAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIFugMFdml0cGXQCxLaCwsIHxC1kKnd5wMYANIMAhABmg0BEqoNAkJEyA0B0g2bAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vcHJvP3V0bV9jYW1wYWlnbj1STUtULVZBQy1EZW1hbmRHZW4tV29yZFByZXNzLVdvb0NvbW1lcmNlfE5UOllvdVR1YmV8TE86QkQmdXRtX21lZGl1bT1wcGMmZ2FkX3NvdXJjZT0yJmdhZF9jYW1wYWlnbmlkPTIyNDYxMjUyNjQ4uBP___________8BsBQBwBXJgIBA0BUB2BUBkBYBmBYB4hYCCAGAFwGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRczi4eMgBl9O7oXBigAMAA4AdAYAfAYAbIZATfCGQIIAQ\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0vUJgkOnwtHKcRd7wnTKRy2nyJYA\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_TRANSPARENT","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":""},"trackingParams":"CFcQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","iconImage":{"sources":[{"clientResource":{"imageName":"ARROW_DIAGONAL_UP_RIGHT_FILLED"}}]},"loggingDirectives":{"trackingParams":"CFcQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"loggingDirectives":{"trackingParams":"CFYQ9rINGAIiEwibhtS9xeCRAxXchekFHbT8OMQ=","visibility":{"types":"12"}}}},{"adGridCardTextViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CFQQ9rINGAMiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CI3WSTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECqAe_07ECqAfn17ECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQlWhuFUtMrC47kJU1kCl5k6i03ICQPICRjICY8ByAnCAaELiGEMv0XdegW6C2YIARABGAQgASgBMBBAAUgBYABoAHACiAEAmAECogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYACAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIFugMFdml0cGXQCxLaCwsIHxCskKnd5wMYANIMAhABmg0BEqoNAkJEyA0B0g2jAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd2ViLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1rbPbqOPGyWcTkErRBWp4Dl1r4ZQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CI3WSTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECqAe_07ECqAfn17ECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQlWhuFUtMrC47kJU1kCl5k6i03ICQPICRjICY8ByAnCAaELiGEMv0XdegW6C2YIARABGAQgASgBMBBAAUgBYABoAHACiAEAmAECogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYACAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIFugMFdml0cGXQCxLaCwsIHxCskKnd5wMYANIMAhABmg0BEqoNAkJEyA0B0g2jAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd2ViLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1rbPbqOPGyWcTkErRBWp4Dl1r4ZQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","target":"TARGET_NEW_WINDOW"}}}},"title":{"content":"Hostinger Web Hosting"},"descriptions":[{"content":"Fast and Reliable Web Hosting."},{"content":"Get a Free Domain, Email and SSL."}],"moreInfoButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":""},"onTap":{"innertubeCommand":{"clickTrackingParams":"CFUQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CI3WSTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECqAe_07ECqAfn17ECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQlWhuFUtMrC47kJU1kCl5k6i03ICQPICRjICY8ByAnCAaELiGEMv0XdegW6C2YIARABGAQgASgBMBBAAUgBYABoAHACiAEAmAECogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYACAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIFugMFdml0cGXQCxLaCwsIHxCskKnd5wMYANIMAhABmg0BEqoNAkJEyA0B0g2jAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd2ViLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1rbPbqOPGyWcTkErRBWp4Dl1r4ZQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CI3WSTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECqAe_07ECqAfn17ECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQlWhuFUtMrC47kJU1kCl5k6i03ICQPICRjICY8ByAnCAaELiGEMv0XdegW6C2YIARABGAQgASgBMBBAAUgBYABoAHACiAEAmAECogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYACAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIFugMFdml0cGXQCxLaCwsIHxCskKnd5wMYANIMAhABmg0BEqoNAkJEyA0B0g2jAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd2ViLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1rbPbqOPGyWcTkErRBWp4Dl1r4ZQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_TRANSPARENT","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":""},"trackingParams":"CFUQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","iconImage":{"sources":[{"clientResource":{"imageName":"ARROW_DIAGONAL_UP_RIGHT_FILLED"}}]},"loggingDirectives":{"trackingParams":"CFUQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"loggingDirectives":{"trackingParams":"CFQQ9rINGAMiEwibhtS9xeCRAxXchekFHbT8OMQ=","visibility":{"types":"12"}}}}],"style":"AD_GRID_CARD_COLLECTION_STYLE_FIXED_ONE_COLUMN","loggingDirectives":{"trackingParams":"CFMQ4cMLIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"loggingDirectives":{"trackingParams":"CFIQ5rANIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"},"attentionLogging":"ATTENTION_LOGGING_SCROLL"}}}}}}}},"expandAction":{"innertubeCommand":{"clickTrackingParams":"CFEQjP4FIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"}}},"hideAction":{"innertubeCommand":{"clickTrackingParams":"CFEQjP4FIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_HIDDEN"}}},"removeAction":{"innertubeCommand":{"clickTrackingParams":"CFEQjP4FIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","updateEngagementPanelAction":{"targetId":"engagement-panel-ads","header":{},"content":{"adsEngagementPanelContentRenderer":{"hack":true}}}}},"adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgEShMIu8HVvcXgkQMVQoevAR1HDjEbUgoIAxABQAJIAVgCWAJoAXApegIIUg=="},"adVideoId":"EC018ZtNXaA","loggingDirectives":{"trackingParams":"CFEQjP4FIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"},"attentionLogging":"ATTENTION_LOGGING_SCROLL"}}},"layoutExitNormalTriggers":[{"id":"6acff63b-0000-2cb4-bfb1-582429ce4dd0","layoutExitedForReasonTrigger":{"triggeringLayoutId":"NXGDnmPOV48RioBd","layoutExitReason":"LAYOUT_EXIT_REASON_NORMAL"}},{"id":"6acff63c-0000-2cb4-bfb1-582429ce4dd0","onDifferentLayoutIdEnteredTrigger":{"triggeringLayoutId":"UG6uWzLEXnMlvRUD","slotType":"SLOT_TYPE_PLAYER_BYTES","layoutType":"LAYOUT_TYPE_MEDIA"}}]}}},"slotEntryTrigger":{"id":"6acff63e-0000-2cb4-bfb1-582429ce4dd0","layoutIdEnteredTrigger":{"triggeringLayoutId":"UG6uWzLEXnMlvRUD"}},"slotFulfillmentTriggers":[{"id":"6acff63f-0000-2cb4-bfb1-582429ce4dd0","slotIdScheduledTrigger":{"triggeringSlotId":"6acff63d-0000-2cb4-bfb1-582429ce4dd0"}}],"slotExpirationTriggers":[{"id":"6acff640-0000-2cb4-bfb1-582429ce4dd0","onNewPlaybackAfterContentVideoIdTrigger":{}},{"id":"6acff641-0000-2cb4-bfb1-582429ce4dd0","slotIdExitedTrigger":{"triggeringSlotId":"6acff63d-0000-2cb4-bfb1-582429ce4dd0"}},{"id":"6acff642-0000-2cb4-bfb1-582429ce4dd0","layoutExitedForReasonTrigger":{"triggeringLayoutId":"UG6uWzLEXnMlvRUD","layoutExitReason":"LAYOUT_EXIT_REASON_ERROR"}}],"trackingParams":"CFAQzOgNGAYiEwibhtS9xeCRAxXchekFHbT8OMQ="}},{"adSlotRenderer":{"adSlotMetadata":{"slotId":"6acff645-0000-2cb4-bfb1-582429ce4dd0","slotType":"SLOT_TYPE_ABOVE_FEED","adSlotLoggingData":{"serializedSlotAdServingDataEntry":"ChMIu8HVvcXgkQMVQoevAR1HDjEbGggIAxABSAFYAg=="},"triggerEvent":"SLOT_TRIGGER_EVENT_LAYOUT_ID_EXITED_NORMAL","triggeringSourceLayoutId":"NXGDnmPOV48RioBd"},"fulfillmentContent":{"fulfilledLayout":{"aboveFeedAdLayoutRenderer":{"adLayoutMetadata":{"layoutId":"ynQVZoB9RUkIRsKY","layoutType":"LAYOUT_TYPE_PANEL","adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgWShMIu8HVvcXgkQMVQoevAR1HDjEbUggIAxABSAFYAmgBcCl6AghS"}},"renderingContent":{"adsEngagementPanelLayoutViewModel":{"addAction":{"innertubeCommand":{"clickTrackingParams":"CDkQjP4FIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","updateEngagementPanelAction":{"targetId":"engagement-panel-ads","header":{"panelAdHeaderImageLockupViewModel":{"interaction":{},"adImage":{"adImageViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CE8Q-a0CIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"imageSources":[{"url":"https://yt3.ggpht.com/WZVbRvQtV2dWKY4ETR7YIsyUAu7FI3fCa12h5ZA7boad48ifX0DPVksgA25CMQM7O7Ir207n=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}],"loggingDirectives":{"trackingParams":"CE8Q-a0CIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adAvatarLockup":{"adAvatarLockupViewModel":{"interaction":{"accessibility":{"label":"Sponsored - Affordable Cloud Power for You\ncontabo.com"}},"style":"AD_AVATAR_LOCKUP_STYLE_COMPACT","adAvatar":{"adAvatarViewModel":{"interaction":{},"style":"AD_AVATAR_STYLE_CIRCULAR","image":{"sources":[{"url":"https://yt3.ggpht.com/proxy/dkXggpvSBzmslmOs_KgrAQ_DrfWw5gqk71GJ8zqzIlsPdlvPvZ5j2lV1w3P-Kqfjg_-NbWAyD7ptsNJNH_51CcuRW0_tmg-_5Qmhhv9joh7HFV_hnKh6SiTnHrCbOtL2vOismI090TE5yWSOHa80QBuO3WJfs5AiDlCZxZtz_tdWBOPIbbX5fvnir2NyNE7PXsTycQFbAtuaSghnNTwKPGzqmXpJ6Xs_LeUq6ozZyvAmO526n5_CGfKkVN39fO95QEEQ=w1200-h1200-nd","width":1200,"height":1200}]},"size":"AD_AVATAR_SIZE_M","trackingParams":"CE4Q5JoJIhMIm4bUvcXgkQMV3IXpBR20_DjE","rendererContext":{"accessibilityContext":{"label":"Contabo"}},"loggingDirectives":{"trackingParams":"CE4Q5JoJIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"headline":{"content":"Affordable Cloud Power for You"},"adBadge":{"adBadgeViewModel":{"interaction":{},"style":"AD_BADGE_STYLE_STARK","label":{"content":"Sponsored"},"loggingDirectives":{"trackingParams":"CE0QnOcKIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"primaryDetailsLine":{"adDetailsLineViewModel":{"style":"AD_DETAILS_LINE_STYLE_STANDARD","attributes":[{"text":{"content":"contabo.com"}}]}},"loggingDirectives":{"trackingParams":"CEwQpqUJIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":"Learn more"},"onTap":{"innertubeCommand":{"clickTrackingParams":"CEsQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_MONO_TONAL","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":"Learn more"},"trackingParams":"CEsQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","loggingDirectives":{"trackingParams":"CEsQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"menu":{"buttonViewModel":{"iconName":"MORE_VERT","onTap":{"innertubeCommand":{"clickTrackingParams":"CEkQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","openPopupAction":{"popup":{"aboutThisAdRenderer":{"url":{"privateDoNotAccessOrElseTrustedResourceUrlWrappedValue":"https://www.youtube.com/aboutthisad?pf=web\u0026source=youtube\u0026reasons=AUJjZ_7-E_1wAhuQnNak23coCk31gGzD9WE0LFPTnWYrs82__TdtEs1SaMgbJ3Q88MDBSjpnxMbX6KB4FiDtdnErsOcjvbbedXriXcambB8sWWOc_bO9n5a1ogS3ZkZpw9yTn-TOH4JsoGJ6FGT7eH_3oJBV1lW8RnxzUi6-dbsc4klCMNIOvjJWriatQVB84DzXHOUbPhXrz5My7ySUlAEJ8HOnTBwWPgN0TOcjYAAAh1plE6DHwe_QFysyjz2zmk5DaF0DlYU7ATj1TtHgIrDo3DVNnKRlLncZ0WVUtQ-0pPq0OpuAHcHUngAQfafPwJo68Upd-a4VYZ4wmUuTaSaOXxf7VoT3YyzX6iQZa7pFAQbbGEFZFZmDW3uPUVN38K9xalcAaGaUq9ugvs5o2Z4MOV5Lp5VG6_RIDwZwgUSmfeNFIBaR7wA2l_xyd-Fo6Bi4fSnw43hy_PD2dvILsJOnK-iocPuDPGvKI4OEKhuYnQZmGzO5TdMlt8yxtPqLvTqF7v_kseqMbTdRp3mDTkEw-EQWbXTl4IH155HnMnyysQ161GCW9csSPERBP95usWsyu3QU0plZIZ_S0nAefZWM9pp7vEmamt_B3l7oRVh7oT2GbnCxca-5mrjMpKU4Nh-EWQz0e0yBp5C344RSNEIQ3NDdPOJ9wMVcTZCDAe7NxEJGS5jEDOcEz9TBAhOiRWoOrKVs03VWbNGhrB0QWjpy34iidDamR1lxSw5j6HHmn_0ffaCprirj8RuNIODsDDdgo0BQjO7UprwAy9CYc3nlxGtoI22mbWxA9TCf5aVEl5VmIMT0cJ_871Jtn7elwG4F9zJJsjyCQMALci3vDzqDZ0ed8D_uhpbvSNDDEmiJqVsQJ0WIvYcUQTBVxslizqGOQc0gaYfmgvL_lp2O4Lhy1CXm5LSEDGlEzp6BGAvmxL4pRdqFZ8XpF75xSIH8Qea6iVh2JqfrniWrpRzHBYRNoUoKbdiUAI7mbqvxzMWxJ6wVGYs0KLWwI9tPD8bT_Aj5i8ysa3IaeN3ozGyJoqiD5G8k05UBgMpgk2WDgp1o9Jvxd27-D9RlyZcY9O2WV8ypU_2jJusiIBQko-gHQLabwSlIZbAadWJwGI9XurOYr_URlv3IkhnCRERIHxGQ2ZttVT5OcQ2PUN8LDU8_o3S31JGfeuJB7fEL52kcMsvpG1MfvZWaEKJg_JRhlTXkJ3aYdBFSs-Mgy7_jo7Q3xmiNNdCX10wTDLHw2-LsEk3CPnuTHdD3MAw9VFHu-YqPFHreuZEVEYQ_fisKfIxwu09r9AugWtLnl0xYMh5kQtScgAMFRC8XB8khJeZQiWKoJIrMntNLLTMgmOozhHXMrDJe88arno-yVNIlW4THvsYNnXEXz2KUjzGIvu5g4vXoKbz8lhMq6aDMG1FOo0afBCKvli2JZzsi2gRXGPHvIFt8unWzr3dkO4JpS_srbuXMxB0aiKMLkUAD-r2EVPRx7t4JY0CKTgfR7qjCvKCvR2Raa5XHDFqOr2EA12f13ZQC2ZEmFwTbn_BFl8eAFU-V6I8jytnhXMqh_F1CsFtoD-1Wb9Iwv8gNltBUkusKjQxZJxfNhaD-Wp9xQ1W2wlikuztY2V_y0VEb3H54fmqYwyCNqoeaFfU0VDTLmt9jfXz84OmRQh4IzKFn6KH4ZzvYddxyIkjqxYuVgL1RmxCWqiqBONO-EuXmj2J4an7roLKG2zICtnr93TbKVe_JWO5WvL_B2KPWUD51UAcdp0W8H4otyCgVS5wgG1lEf2C5TP6m89t1iOJIf3oU8h-iTLhDioyvMwgS345trsMRc-G3vN6I4s1OsJrzq1rhWHq6FPyslfhjrKEyiktKFxJMR7Z5JJtkjoMeMrWIdqYWP2bQ-dM_sdzbHJU0sAMU2yOrk85BaSW6br2VQJY8NM4NB1fy36sbBkDZWue0HCaTprnlajF1bfnyIJZb8GtlZkycFeJBYBA_MT82tqZ6AmZl8jwJtl0daXZDEmTurtIj-HldZXRZpoUZrrLnMhtRvQjgnvaPglhYJeJZdCOD_ORtpMDSZvz4Av_CrsVvJRmeAhHPPPM8DvzJB-7DwXvHMRBaNie_Csyg6g8kWOIvuvJVlKX5QLnVgqPuEVqWBlvc3YUkum9hyuWFZZUFQ2oCJXwhY5_SSwEP4WeGCq9p3uOxN4wyw4tos2eEbA4CjcRMUvoXjtU24Fmj02YYXtdopNZlRppdZjhQUDHuWK1K15_yQZxDX7uImuG4KQ830VD1Ur1MFG2ITFHY5PqgomlyeC5eCKZ8ocaUwps6NDmqF9f0fN3eQa3L2Kq_m8kA2Z9Mpa2i4zwU1-pQs63VJKKjBklQA5u9FZjakpLrU7ZUUa-SSYepngHAzowL3-6yPxAcQdl_imDkJv9RrE2ZrMXv2UvUx8eJfHYsvs5i7WSHZcaKPenRELX-3jCfFdOxvXVcdTAiM1ahCTlPPN7aVkDR-zYt2P8xFNxi-uqEb4xxcUU0FpmRXdRADTL1pyiiksushnEWQittnzis5z5RLWYhZjVGvd0S6VtOU05YuEWNQRS3p2XYKgmjvcYQ2YjaMdsCAxOaloeIkfmoZa1dJp6WbuqfYVl_mMgy4ADTa0sEfsJ2RMw7rk0Fk3_WILt5nZ6BxVatS2sLzumTUykVMTfXrHMFxDpMjwqrbw9ZFoJpwXRTVcalCCm8YcpLpxUGf9cHDsVLejg6YAhAaI8xU1v76sSAj8FWp7KJI2xgXwwqzqkR2uaUm4qUO_vLP73Fh2aqy33shsRTadXtIw1WC1agLaVom-pY2cTclCFF3KacCZHgfYuz1joq2zNPXq0DYgfN_HZLlfJl5f9ISSxFzMGouhvT73srY0f95zCyfJrYmUk-Mg\u0026hl=en\u0026origin=www.youtube.com\u0026opi=112496729\u0026ata_theme=dark"},"trackingParams":"CEoQl98KIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"popupType":"DIALOG","accessibilityData":{"accessibilityData":{"label":"My Ad Center"}}}}},"accessibilityText":"My Ad Center","style":"BUTTON_VIEW_MODEL_STYLE_UNKNOWN","trackingParams":"CEkQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjE","buttonSize":"BUTTON_VIEW_MODEL_SIZE_DEFAULT","state":"BUTTON_VIEW_MODEL_STATE_ACTIVE","tooltip":"My Ad Center","loggingDirectives":{"trackingParams":"CEkQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"},"attentionLogging":"ATTENTION_LOGGING_SCROLL"}}},"toggleButton":{"toggleButtonViewModel":{"defaultButtonViewModel":{"buttonViewModel":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CEgQ8FsiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_COLLAPSED"}}},"style":"BUTTON_VIEW_MODEL_STYLE_MONO","trackingParams":"CEgQ8FsiEwibhtS9xeCRAxXchekFHbT8OMQ=","type":"BUTTON_VIEW_MODEL_TYPE_TEXT","buttonSize":"BUTTON_VIEW_MODEL_SIZE_DEFAULT","state":"BUTTON_VIEW_MODEL_STATE_ACTIVE","iconImage":{"clientResource":{"imageName":"EXPAND_LESS"}}}},"toggledButtonViewModel":{"buttonViewModel":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CEcQ8FsiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"}}},"style":"BUTTON_VIEW_MODEL_STYLE_MONO","trackingParams":"CEcQ8FsiEwibhtS9xeCRAxXchekFHbT8OMQ=","type":"BUTTON_VIEW_MODEL_TYPE_TEXT","buttonSize":"BUTTON_VIEW_MODEL_SIZE_DEFAULT","state":"BUTTON_VIEW_MODEL_STATE_ACTIVE","iconImage":{"clientResource":{"imageName":"EXPAND_MORE"}}}},"isToggled":false,"trackingParams":"CEYQ2KsFIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"loggingDirectives":{"trackingParams":"CEUQ39AFIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"content":{"adsEngagementPanelContentRenderer":{"contentRenderer":{"panelTextIconTextGridCardsSubLayoutContentViewModel":{"interaction":{"onFirstVisible":{"performOnceCommand":{"identifier":"6acff643-0000-2cb4-bfb1-582429ce4dd0","command":{"innertubeCommand":{"loggingUrls":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_companion_reshow_tracking"}],"pingingEndpoint":{"hack":true}}}}}},"adButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":"Learn more"},"onTap":{"innertubeCommand":{"clickTrackingParams":"CEQQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_MONO_TONAL","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":"Learn more"},"trackingParams":"CEQQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","loggingDirectives":{"trackingParams":"CEQQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adGridCardCollection":{"adGridCardCollectionViewModel":{"interaction":{},"gridCards":[{"adGridCardTextViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CEIQ9rINGAAiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CTAjyTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJpd3CI7lELFm5CXMJXY8a9KJryAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q16OVyKYHGAHSDAIQAZoNARKqDQJCRMgNAdINqgFodHRwczovL2NvbnRhYm8uY29tL2VuL2xpbnV4LXZwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_3T_rXQsqI-Z2YGgD5OtqJkIL7kLQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CTAjyTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJpd3CI7lELFm5CXMJXY8a9KJryAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q16OVyKYHGAHSDAIQAZoNARKqDQJCRMgNAdINqgFodHRwczovL2NvbnRhYm8uY29tL2VuL2xpbnV4LXZwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_3T_rXQsqI-Z2YGgD5OtqJkIL7kLQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","target":"TARGET_NEW_WINDOW"}}}},"title":{"content":"Linux VPS Hosting"},"descriptions":[{"content":"Fast, affordable VPS hosting"},{"content":"with flexible Linux plans."}],"moreInfoButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":""},"onTap":{"innertubeCommand":{"clickTrackingParams":"CEMQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CTAjyTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJpd3CI7lELFm5CXMJXY8a9KJryAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q16OVyKYHGAHSDAIQAZoNARKqDQJCRMgNAdINqgFodHRwczovL2NvbnRhYm8uY29tL2VuL2xpbnV4LXZwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_3T_rXQsqI-Z2YGgD5OtqJkIL7kLQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CTAjyTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJpd3CI7lELFm5CXMJXY8a9KJryAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q16OVyKYHGAHSDAIQAZoNARKqDQJCRMgNAdINqgFodHRwczovL2NvbnRhYm8uY29tL2VuL2xpbnV4LXZwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_3T_rXQsqI-Z2YGgD5OtqJkIL7kLQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_TRANSPARENT","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":""},"trackingParams":"CEMQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","iconImage":{"sources":[{"clientResource":{"imageName":"ARROW_DIAGONAL_UP_RIGHT_FILLED"}}]},"loggingDirectives":{"trackingParams":"CEMQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"loggingDirectives":{"trackingParams":"CEIQ9rINGAAiEwibhtS9xeCRAxXchekFHbT8OMQ=","visibility":{"types":"12"}}}},{"adGridCardTextViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CEAQ9rINGAEiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C9NreTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJ9SvPH2hHAHm5CYeK9DNAsZ5xyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q2Kfmn6UHGAHSDAIQAZoNARKqDQJCRMgNAdINsgFodHRwczovL2NvbnRhYm8uY29tL2VuL2NwYW5lbC12cHMtc2VydmVyLz91dG1fc291cmNlPWdvb2dsZSZ1dG1fbWVkaXVtPWNwYyZ1dG1fY2FtcGFpZ249Y29yZS1wcm9zcGVjdGluZy1pbmRpYS1wbWF4JnV0bV90ZXJtPSZ1dG1fY29udGVudD0mZ2FkX3NvdXJjZT0yJmdhZF9jYW1wYWlnbmlkPTIyNTk5MjM5NDA2uBP___________8BiBQBsBQBwBXJgIBA0BUB2BUBkBYB4hYCCAGAFwGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBigAMAA4AdAYAfAYAbIZATfCGQIIAQ\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1I-KcvkN1jBvSzN_-EOQb6S93wpg\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C9NreTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJ9SvPH2hHAHm5CYeK9DNAsZ5xyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q2Kfmn6UHGAHSDAIQAZoNARKqDQJCRMgNAdINsgFodHRwczovL2NvbnRhYm8uY29tL2VuL2NwYW5lbC12cHMtc2VydmVyLz91dG1fc291cmNlPWdvb2dsZSZ1dG1fbWVkaXVtPWNwYyZ1dG1fY2FtcGFpZ249Y29yZS1wcm9zcGVjdGluZy1pbmRpYS1wbWF4JnV0bV90ZXJtPSZ1dG1fY29udGVudD0mZ2FkX3NvdXJjZT0yJmdhZF9jYW1wYWlnbmlkPTIyNTk5MjM5NDA2uBP___________8BiBQBsBQBwBXJgIBA0BUB2BUBkBYB4hYCCAGAFwGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBigAMAA4AdAYAfAYAbIZATfCGQIIAQ\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1I-KcvkN1jBvSzN_-EOQb6S93wpg\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","target":"TARGET_NEW_WINDOW"}}}},"title":{"content":"cPanel VPS Hosting"},"descriptions":[{"content":"Optimize your cloud hosting with"},{"content":"a cPanel license for your VPS"}],"moreInfoButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":""},"onTap":{"innertubeCommand":{"clickTrackingParams":"CEEQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C9NreTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJ9SvPH2hHAHm5CYeK9DNAsZ5xyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q2Kfmn6UHGAHSDAIQAZoNARKqDQJCRMgNAdINsgFodHRwczovL2NvbnRhYm8uY29tL2VuL2NwYW5lbC12cHMtc2VydmVyLz91dG1fc291cmNlPWdvb2dsZSZ1dG1fbWVkaXVtPWNwYyZ1dG1fY2FtcGFpZ249Y29yZS1wcm9zcGVjdGluZy1pbmRpYS1wbWF4JnV0bV90ZXJtPSZ1dG1fY29udGVudD0mZ2FkX3NvdXJjZT0yJmdhZF9jYW1wYWlnbmlkPTIyNTk5MjM5NDA2uBP___________8BiBQBsBQBwBXJgIBA0BUB2BUBkBYB4hYCCAGAFwGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBigAMAA4AdAYAfAYAbIZATfCGQIIAQ\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1I-KcvkN1jBvSzN_-EOQb6S93wpg\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C9NreTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJ9SvPH2hHAHm5CYeK9DNAsZ5xyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q2Kfmn6UHGAHSDAIQAZoNARKqDQJCRMgNAdINsgFodHRwczovL2NvbnRhYm8uY29tL2VuL2NwYW5lbC12cHMtc2VydmVyLz91dG1fc291cmNlPWdvb2dsZSZ1dG1fbWVkaXVtPWNwYyZ1dG1fY2FtcGFpZ249Y29yZS1wcm9zcGVjdGluZy1pbmRpYS1wbWF4JnV0bV90ZXJtPSZ1dG1fY29udGVudD0mZ2FkX3NvdXJjZT0yJmdhZF9jYW1wYWlnbmlkPTIyNTk5MjM5NDA2uBP___________8BiBQBsBQBwBXJgIBA0BUB2BUBkBYB4hYCCAGAFwGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBigAMAA4AdAYAfAYAbIZATfCGQIIAQ\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1I-KcvkN1jBvSzN_-EOQb6S93wpg\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_TRANSPARENT","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":""},"trackingParams":"CEEQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","iconImage":{"sources":[{"clientResource":{"imageName":"ARROW_DIAGONAL_UP_RIGHT_FILLED"}}]},"loggingDirectives":{"trackingParams":"CEEQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"loggingDirectives":{"trackingParams":"CEAQ9rINGAEiEwibhtS9xeCRAxXchekFHbT8OMQ=","visibility":{"types":"12"}}}},{"adGridCardTextViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CD4Q9rINGAIiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CPk6DTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJ1Kuqs8mIGb25CQpOhBwd6dFbyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q26fmn6UHGADSDAIQAZoNARKqDQJCRMgNAdINtwFodHRwczovL2NvbnRhYm8uY29tL2VuL3BsZXNrLXNlcnZlcnMvP3V0bV9zb3VyY2U9Z29vZ2xlJnV0bV9tZWRpdW09Y3BjJnV0bV9jYW1wYWlnbj1jb3JlLXByb3NwZWN0aW5nLWluZGlhLXBtYXgmdXRtX3Rlcm09c2l0ZWxpbmtzJnV0bV9jb250ZW50PSZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI1OTkyMzk0MDa4E____________wGIFAGwFAHAFcmAgEDQFQHYFQGQFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF_6H3r_0F8XRuhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0FPBcgE8O_1jLo9BugdQPOeL2JJA\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CPk6DTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJ1Kuqs8mIGb25CQpOhBwd6dFbyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q26fmn6UHGADSDAIQAZoNARKqDQJCRMgNAdINtwFodHRwczovL2NvbnRhYm8uY29tL2VuL3BsZXNrLXNlcnZlcnMvP3V0bV9zb3VyY2U9Z29vZ2xlJnV0bV9tZWRpdW09Y3BjJnV0bV9jYW1wYWlnbj1jb3JlLXByb3NwZWN0aW5nLWluZGlhLXBtYXgmdXRtX3Rlcm09c2l0ZWxpbmtzJnV0bV9jb250ZW50PSZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI1OTkyMzk0MDa4E____________wGIFAGwFAHAFcmAgEDQFQHYFQGQFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF_6H3r_0F8XRuhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0FPBcgE8O_1jLo9BugdQPOeL2JJA\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","target":"TARGET_NEW_WINDOW"}}}},"title":{"content":"Plesk Server and VPS"},"descriptions":[{"content":"Get your own instance optimized"},{"content":"for Plesk Obsidian"}],"moreInfoButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":""},"onTap":{"innertubeCommand":{"clickTrackingParams":"CD8Q2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CPk6DTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJ1Kuqs8mIGb25CQpOhBwd6dFbyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q26fmn6UHGADSDAIQAZoNARKqDQJCRMgNAdINtwFodHRwczovL2NvbnRhYm8uY29tL2VuL3BsZXNrLXNlcnZlcnMvP3V0bV9zb3VyY2U9Z29vZ2xlJnV0bV9tZWRpdW09Y3BjJnV0bV9jYW1wYWlnbj1jb3JlLXByb3NwZWN0aW5nLWluZGlhLXBtYXgmdXRtX3Rlcm09c2l0ZWxpbmtzJnV0bV9jb250ZW50PSZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI1OTkyMzk0MDa4E____________wGIFAGwFAHAFcmAgEDQFQHYFQGQFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF_6H3r_0F8XRuhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0FPBcgE8O_1jLo9BugdQPOeL2JJA\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CPk6DTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJ1Kuqs8mIGb25CQpOhBwd6dFbyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Q26fmn6UHGADSDAIQAZoNARKqDQJCRMgNAdINtwFodHRwczovL2NvbnRhYm8uY29tL2VuL3BsZXNrLXNlcnZlcnMvP3V0bV9zb3VyY2U9Z29vZ2xlJnV0bV9tZWRpdW09Y3BjJnV0bV9jYW1wYWlnbj1jb3JlLXByb3NwZWN0aW5nLWluZGlhLXBtYXgmdXRtX3Rlcm09c2l0ZWxpbmtzJnV0bV9jb250ZW50PSZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI1OTkyMzk0MDa4E____________wGIFAGwFAHAFcmAgEDQFQHYFQGQFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF_6H3r_0F8XRuhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0FPBcgE8O_1jLo9BugdQPOeL2JJA\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_TRANSPARENT","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":""},"trackingParams":"CD8Q2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","iconImage":{"sources":[{"clientResource":{"imageName":"ARROW_DIAGONAL_UP_RIGHT_FILLED"}}]},"loggingDirectives":{"trackingParams":"CD8Q2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"loggingDirectives":{"trackingParams":"CD4Q9rINGAIiEwibhtS9xeCRAxXchekFHbT8OMQ=","visibility":{"types":"12"}}}},{"adGridCardTextViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CDwQ9rINGAMiEwibhtS9xeCRAxXchekFHbT8OMTKAQTsTW8y","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CKQ7kTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJAk0AKe-YChC5CcNlEs7v9r1JyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Qsr-qleYGGAHSDAIQAZoNARKqDQJCRMgNAdINtAFodHRwczovL2NvbnRhYm8uY29tL2VuL3dpbmRvd3Mtc2VydmVycy12cHMvP3V0bV9zb3VyY2U9Z29vZ2xlJnV0bV9tZWRpdW09Y3BjJnV0bV9jYW1wYWlnbj1jb3JlLXByb3NwZWN0aW5nLWluZGlhLXBtYXgmdXRtX3Rlcm09JnV0bV9jb250ZW50PSZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI1OTkyMzk0MDa4E____________wGIFAGwFAHAFcmAgEDQFQHYFQGQFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF_6H3r_0F8XRuhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_20EtuUhe43lYt92VKjaMuymntNxQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CKQ7kTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJAk0AKe-YChC5CcNlEs7v9r1JyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Qsr-qleYGGAHSDAIQAZoNARKqDQJCRMgNAdINtAFodHRwczovL2NvbnRhYm8uY29tL2VuL3dpbmRvd3Mtc2VydmVycy12cHMvP3V0bV9zb3VyY2U9Z29vZ2xlJnV0bV9tZWRpdW09Y3BjJnV0bV9jYW1wYWlnbj1jb3JlLXByb3NwZWN0aW5nLWluZGlhLXBtYXgmdXRtX3Rlcm09JnV0bV9jb250ZW50PSZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI1OTkyMzk0MDa4E____________wGIFAGwFAHAFcmAgEDQFQHYFQGQFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF_6H3r_0F8XRuhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_20EtuUhe43lYt92VKjaMuymntNxQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=34","target":"TARGET_NEW_WINDOW"}}}},"title":{"content":"Windows VPS Server"},"descriptions":[{"content":"Affordable, Fast, and Flexible."},{"content":"Scalable Windows VPS hosting"}],"moreInfoButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":""},"onTap":{"innertubeCommand":{"clickTrackingParams":"CD0Q2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CKQ7kTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJAk0AKe-YChC5CcNlEs7v9r1JyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Qsr-qleYGGAHSDAIQAZoNARKqDQJCRMgNAdINtAFodHRwczovL2NvbnRhYm8uY29tL2VuL3dpbmRvd3Mtc2VydmVycy12cHMvP3V0bV9zb3VyY2U9Z29vZ2xlJnV0bV9tZWRpdW09Y3BjJnV0bV9jYW1wYWlnbj1jb3JlLXByb3NwZWN0aW5nLWluZGlhLXBtYXgmdXRtX3Rlcm09JnV0bV9jb250ZW50PSZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI1OTkyMzk0MDa4E____________wGIFAGwFAHAFcmAgEDQFQHYFQGQFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF_6H3r_0F8XRuhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_20EtuUhe43lYt92VKjaMuymntNxQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CKQ7kTUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKoB7_TsQKoB-fXsQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJAk0AKe-YChC5CcNlEs7v9r1JyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0AsS2gsLCB8Qsr-qleYGGAHSDAIQAZoNARKqDQJCRMgNAdINtAFodHRwczovL2NvbnRhYm8uY29tL2VuL3dpbmRvd3Mtc2VydmVycy12cHMvP3V0bV9zb3VyY2U9Z29vZ2xlJnV0bV9tZWRpdW09Y3BjJnV0bV9jYW1wYWlnbj1jb3JlLXByb3NwZWN0aW5nLWluZGlhLXBtYXgmdXRtX3Rlcm09JnV0bV9jb250ZW50PSZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI1OTkyMzk0MDa4E____________wGIFAGwFAHAFcmAgEDQFQHYFQGQFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpF_6H3r_0F8XRuhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_20EtuUhe43lYt92VKjaMuymntNxQ\u0026label=video_sitelink_click\u0026ctype=110\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_TRANSPARENT","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":""},"trackingParams":"CD0Q2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","iconImage":{"sources":[{"clientResource":{"imageName":"ARROW_DIAGONAL_UP_RIGHT_FILLED"}}]},"loggingDirectives":{"trackingParams":"CD0Q2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"loggingDirectives":{"trackingParams":"CDwQ9rINGAMiEwibhtS9xeCRAxXchekFHbT8OMQ=","visibility":{"types":"12"}}}}],"style":"AD_GRID_CARD_COLLECTION_STYLE_FIXED_ONE_COLUMN","loggingDirectives":{"trackingParams":"CDsQ4cMLIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"loggingDirectives":{"trackingParams":"CDoQ5rANIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"},"attentionLogging":"ATTENTION_LOGGING_SCROLL"}}}}}}}},"expandAction":{"innertubeCommand":{"clickTrackingParams":"CDkQjP4FIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"}}},"hideAction":{"innertubeCommand":{"clickTrackingParams":"CDkQjP4FIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_HIDDEN"}}},"removeAction":{"innertubeCommand":{"clickTrackingParams":"CDkQjP4FIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","updateEngagementPanelAction":{"targetId":"engagement-panel-ads","header":{},"content":{"adsEngagementPanelContentRenderer":{"hack":true}}}}},"adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgWShMIu8HVvcXgkQMVQoevAR1HDjEbUggIAxABSAFYAmgBcCl6AghS"},"adVideoId":"PuZeeWRqSYI","loggingDirectives":{"trackingParams":"CDkQjP4FIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"},"attentionLogging":"ATTENTION_LOGGING_SCROLL"}}},"layoutExitNormalTriggers":[{"id":"6acff644-0000-2cb4-bfb1-582429ce4dd0","onDifferentLayoutIdEnteredTrigger":{"triggeringLayoutId":"MNlGMXcyGjz7h0BA","slotType":"SLOT_TYPE_PLAYER_BYTES","layoutType":"LAYOUT_TYPE_MEDIA"}}]}}},"slotEntryTrigger":{"id":"6acff646-0000-2cb4-bfb1-582429ce4dd0","layoutExitedForReasonTrigger":{"triggeringLayoutId":"NXGDnmPOV48RioBd","layoutExitReason":"LAYOUT_EXIT_REASON_NORMAL"}},"slotFulfillmentTriggers":[{"id":"6acff647-0000-2cb4-bfb1-582429ce4dd0","slotIdScheduledTrigger":{"triggeringSlotId":"6acff645-0000-2cb4-bfb1-582429ce4dd0"}}],"slotExpirationTriggers":[{"id":"6acff648-0000-2cb4-bfb1-582429ce4dd0","onNewPlaybackAfterContentVideoIdTrigger":{}},{"id":"6acff649-0000-2cb4-bfb1-582429ce4dd0","slotIdExitedTrigger":{"triggeringSlotId":"6acff645-0000-2cb4-bfb1-582429ce4dd0"}},{"id":"6acff64a-0000-2cb4-bfb1-582429ce4dd0","layoutExitedForReasonTrigger":{"triggeringLayoutId":"MNlGMXcyGjz7h0BA","layoutExitReason":"LAYOUT_EXIT_REASON_ERROR"}}],"trackingParams":"CDgQzOgNGAciEwibhtS9xeCRAxXchekFHbT8OMQ="}},{"adSlotRenderer":{"adSlotMetadata":{"slotId":"xgUnLtbc5bmU7Qs8","slotType":"SLOT_TYPE_IN_PLAYER","adSlotLoggingData":{"serializedSlotAdServingDataEntry":"ChMIu8HVvcXgkQMVQoevAR1HDjEbGhgQAUgBWAFiEHhnVW5MdGJjNWJtVTdRczg="},"triggerEvent":"SLOT_TRIGGER_EVENT_LAYOUT_ID_ENTERED","triggeringSourceLayoutId":"VhuOyMeA4sOpbRTD"},"fulfillmentContent":{"fulfilledLayout":{"inPlayerAdLayoutRenderer":{"adLayoutMetadata":{"layoutId":"j6LGxL0s5yoX2c0J","layoutType":"LAYOUT_TYPE_ENDCAP","adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgEShMIu8HVvcXgkQMVQoevAR1HDjEbUggQAUACSAFYAVgCaAFwKg=="}},"renderingContent":{"videoInterstitialButtonedCenteredLayoutRenderer":{"interaction":{"onFirstVisible":{"performOnceCommand":{"identifier":"6acff626-0000-2cb4-bfb1-582429ce4dd0","command":{"innertubeCommand":{"loggingUrls":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_card_endcap_impression"}],"pingingEndpoint":{"hack":true}}}}}},"adAvatar":{"adAvatarViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CDcQ5JoJIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","loggingUrls":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_card_endcap_action_headline_click"},{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_card_endcap_action_headline_click"}],"commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_AVATAR_STYLE_CIRCULAR","image":{"sources":[{"url":"https://yt3.ggpht.com/proxy/WPVaI2h25VHQTyfGpW3K8b9-JrOCr9Tj5cqA02QHO0QXmF0CGA1unUXbNJ9Aq0GEvI7igSVqOY4xWpYGUCIVXwxEYmd2DqQWetAn6n-ME3jFXH8x-a1Uo2BE4bhGr_qkl_pHZHQCkQ0VqvH5etZYmRbW5-yhv7NeWEgApz03sRLWTEre7eNZp0fynfRvSi9QF1a-GmxWG2FireYInSwVLOG87_9-HGtZz21zLXf9u1D-OBAwQRjwaFj4nCQvkO-fogZi=w176-h176-nd","width":176,"height":176}]},"size":"AD_AVATAR_SIZE_RESPONSIVE","trackingParams":"CDcQ5JoJIhMIm4bUvcXgkQMV3IXpBR20_DjE","loggingDirectives":{"trackingParams":"CDcQ5JoJIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"headline":{"content":"Safe and secure","commandRuns":[{"loggingDirectives":{"trackingParams":"CDYQyrwJGAAiEwibhtS9xeCRAxXchekFHbT8OMQ="}},{"onTap":{"innertubeCommand":{"clickTrackingParams":"CCwQzL8OIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","loggingUrls":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_card_endcap_action_headline_click"},{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_card_endcap_action_headline_click"}],"commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}}]},"adDetailsLine":{"adDetailsLineViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CDUQvJoJIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","loggingUrls":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_card_endcap_action_headline_click"},{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=CQkL1TUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPkDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1NqopOpL1rmG1Am0nm_Y9aOBRmTi2uCtVnee6zxxbZxKzg6cDprU_HKkhKA1_KAGoQGAB-HhsJ0BiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAfj2RuSCAtFQzAxOFp0TlhhQagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM8gJA8gJGMgJjwHICcIBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdIMAhABuBP___________8BsBQBwBXJgIBAkBYBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakXM4uHjIAZfTu6FwQoADAA\u0026sigh=lpFQF-hsiEY\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_card_endcap_action_headline_click"}],"commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_DETAILS_LINE_STYLE_RESPONSIVE","attributes":[{"text":{"content":"hostinger.com"}}],"loggingDirectives":{"trackingParams":"CDUQvJoJIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":"Start now"},"onTap":{"innertubeCommand":{"clickTrackingParams":"CDQQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=26","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=26","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_FILLED_WHITE","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":"Start now"},"trackingParams":"CDQQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","loggingDirectives":{"trackingParams":"CDQQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adBadge":{"adBadgeViewModel":{"interaction":{},"style":"AD_BADGE_STYLE_STARK","label":{"content":"Sponsored"},"loggingDirectives":{"trackingParams":"CDMQnOcKIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adInfoRenderer":{"adHoverTextButtonRenderer":{"button":{"buttonRenderer":{"style":"STYLE_UNKNOWN","size":"SIZE_DEFAULT","isDisabled":false,"icon":{"iconType":"INFO_OUTLINE"},"navigationEndpoint":{"clickTrackingParams":"CDEQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","openPopupAction":{"popup":{"aboutThisAdRenderer":{"url":{"privateDoNotAccessOrElseTrustedResourceUrlWrappedValue":"https://www.youtube.com/aboutthisad?pf=web\u0026source=youtube\u0026reasons=AUJjZ_6gRhUo7svcVWbhxAn9uKOwzbU4HT5QqjHZSou1weuxYcW9-qAZbLgW0eq7yYTGApTBQE5mZPH0Q0ezK2JVJSTSQGyxvvQ8nC-kX7wo2h8duCCvtTi-9TsaHWevMbSCA7bbg_aPGeIlQ4odui6dAXd8DPW4uYdHiA5oqCRXBhEMJI2jInj3Oa3bVUXS6aSUpqhNq4c-UrdqLXw9QmHKLU7OIFjKTFaFcltIIDS-5nuwb0pOLvVldUk22hWhvt5VXUK4wJuslIUBtCwUZbMajmdm5fmBRhTnkv9cEj3gHeIQ1g7A1WDuMOkbUqxYMZE6thBeBV1CnNVciGEiZ7ozlPRCvsSfdz4SEM4BQ8B7p1m09bllHQyuYj0UGQG5p9t6zD2oXD5YxpnwZleCpYBrOmPe6neFXUP3U1e9BDtcA95YzI5GspNF_7bZOLeYFgQBlCZiSmAR_jl7Vv3B1z2uNq95Vi22D92h6rrkG2_gyDSv-WucdKJE519vCoy-YW6WA4g9HxmjOhgjWrTvxai-ZFmf41XJOP0EdRkyFmmPVEyLPmLxHfxPSc0Xgxd7_Xjq7NBRpdmSDAYRsN9aPhlI5T8TFmK3j4s00KRsS9C_zFQHvN9ELRwu-roUKSutHIjTJBWm79dUrtITjR86082o1bHrk8q4Z6ppsBVgepx3wMKLz9j6FpThYpiTW3jx50NRujwBtlAitWT5swwPkqgxj8yDkRW0N1PFDDxnuqjcDaarsGrdby1464QhMZI7iC0-2wz6YHfHrsD6l20cPZdKx3kEqzRIoD3qss2QFHSr-gRTdSxQvSV-fX-ErNaYrBltENrdRqLlQF752ubLx_lw3yGgFTD_nWFYYiflInTSrMF9iDw6oM1nTRMHmhTJlk-Lu98q72t_1gMT2g93HlDhW97R-OJ30SQkBYLCbRSDc7-aVACsBJrVC13rfB9Ctdi_V7pdhBI8EWa5z0a4IBNPpFxKPQ9kfQNHxj13VbQxPbX6ql1epZbZyAXwXbjQSnTe_QCRBfeU4gifuR6xP87KqWAvmwxIvIRVWr9C5wDvtJ8wFbXn9flpTwB3Td10L4pdkjENS97ng-VyBIpr8XTLjz_E5pJJ6PSZDCvktuPXajU_JnXZACmSjDPNeDtOpMLA2kJaSOGGG5sD10AP6PdOhVp0atQawWoKqHpbHflz_Dw1b6eWH6tYGQ6JlX_12pQKhrQhqrhfy-cKZ1KqGXmvXXP78F-di8xcioqhgZdQ_Z5PadsPzwc8gsE47txPugbvF6SsEqOgnroTwu9gOx-sIEAj1TTYsrhDSUDJEKsx6Unv1jgD9NsvHQgBpL3QSQCVgDybxYCE2NiuMKipa6LSf93Dj0RAYSDMv9Wc21CXWNya2Ye79IXd6xrmBjnyLxrSaPnHLUHSuUoNniFnhwHz9WjrttDUlw_QmGq88tke2GfGtlgpsw7ZfwNAQ1L4NLseXWmMZGYNCfrGPoDAXewlSbyRfunr6eiHI9YUOfW-hlR4SHRQYecTMzMBFxGegOWFXSCihqzJzj64kXz1MDtyh8lVR_YDFUMAhFBh0-ZkLgkahUsNF3Ad4ud1JY8dVjb4SskYT0WVKh4tMypLBI3PTLYCR3eXKUk4G5-GieXnicGUwOwcuF9YbZ3ieUluZ_huhY93QnFKdHa_vU2TuW35_HqSRYw23VrUm0JJYdE8ehUl-S35kuSWjPsPdECPUeJeU1XMt2Cw8JKqstZz24yZbEOpRKUWvqLpfquWddD1s0Y2hEvd-W_vSbdMtk9T6bhe0vfT7y57iSO6JW5E7N-rIabSux1Pip1zTSiWOLXl0Gtu5fGCsWIb15JoH-efYQRoIquHPxprtk1ITmACQ6r-CKxD0pTlEUR6bobNtGQBUrlGCLvGrH8KEfHpndX3dpnCPsK5uNBv1RN_Dp464GSY6VXliHXn4SGnzQplIJw9YqJ8yLHBWZCPJp-J0sKE7dxRpwHh9cQq8zrn_DuVpB0wSZfAOgA8hYCOtDQ3RqSUvFXtECUvXNR2RJO1jf3k7DBo8zPV3cZpX1XIjBpMTBBBF6rcEfo54llQWyy4BKIifYkx8nm8xwllkYlG2S0WogqlY3kuh3OVfTq94XfCaRv2xLUsXN7nv78PsR56mWpVXKp3tUyJW1L-nHmQhlFqjrnSaLp23CLMcUcbU_gN1PRjhEmhkvoVOCU32Yf7n9CrBATBYeiH9JXmPASNzhVtbS70MgD1_LhA9-F4JekF_Ppe-OZlUJRbTixM0RqtZjQB0Fq-cFEuqp-cDIrhDu-6l_4mLj40mc6ARaLNNY5pzJN8iuHQ9kNh7vmeDSKWZW_8-KmqGcrOtnvkcMn_hR0K5qAuD6b006xnyqSTEJ5-ZrMjxa7tAf7ufAd7zkNyvKOrxJLhsStFYlwFqkvAMXdCtQ5qOs2WNHNwAqYd2nYexWqvNbFHgTuNCS0Fb4KigwKHUbH8ZA6wvSM7vnwTStumq6GrN2TSXUjUOiHGEOJbKTRikdJQPkarFPTYFDQYtLC3sy9umE5BzSYeaDWcWCFtmY3VMWIEWEzPKKom8bKpNOE-t-GsA7QC3T_pQplA22BxWeagwBbFZ_W0Uf7EskO3YicXEyYbht58N6rRW5QkJRXWqb2AbHQlOhQ7Cwqy0xjtrU_yqxCtrfI2Q9r_nH_GmXZm70cZiwlfQE4fWupSwiS6Nkl34gaaHZ5BzLw6iafafUsISqQiPTXToWGMiSwrG4L3h_f5G9tewwIJSTHWGcjcGEXZTCLUJBg5o3Vf1caLISvFeh2R_XfLiAyLxfp-fi6t5Z5_H_GtoVDc8qxJOBYdxTzFH_-8bRbO6Mm83crWTizmg45KMjw_DMo2Ni-1z25ZQzW1DWVJ1DjXq6fpVgAsX6fCErg10np-hmvi8kdZ99PHnYOII35h\u0026hl=en\u0026origin=www.youtube.com\u0026opi=112496729\u0026ata_theme=dark"},"trackingParams":"CDIQl98KIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"popupType":"DIALOG","accessibilityData":{"accessibilityData":{"label":"My Ad Center"}}}},"trackingParams":"CDEQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjE","accessibilityData":{"accessibilityData":{"label":"My Ad Center"}},"loggingDirectives":{"trackingParams":"CDEQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"},"attentionLogging":"ATTENTION_LOGGING_SCROLL"}}},"hoverText":{"simpleText":"My Ad Center"},"trackingParams":"CDAQs-4CIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"skipAdButton":{"skipAdButtonViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CC8Q6NEMIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_COLLAPSED"}}}},"label":"Skip","loggingDirectives":{"trackingParams":"CC8Q6NEMIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"imageBackground":{"imageBackgroundViewModel":{"image":{"sources":[{"url":"https://i.ytimg.com/vi/EC018ZtNXaA/hqdefault.jpg","width":0,"height":0}]},"blurLevel":70,"gradient":"IMAGE_BACKGROUND_GRADIENT_VERTICAL","rendererContext":{"loggingContext":{"loggingDirectives":{"trackingParams":"CC4Q0c8OIhMIm4bUvcXgkQMV3IXpBR20_DjE"}}}}},"countdownViewModel":{"timedPieCountdownViewModel":{"interaction":{},"loggingDirectives":{"trackingParams":"CC0Qzb8OIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"durationMilliseconds":7000,"rendererContext":{"loggingContext":{"loggingDirectives":{"trackingParams":"CCwQzL8OIhMIm4bUvcXgkQMV3IXpBR20_DjE","attentionLogging":"ATTENTION_LOGGING_SCROLL"}}}}},"layoutExitNormalTriggers":[{"id":"6acff627-0000-2cb4-bfb1-582429ce4dd0","layoutIdExitedTrigger":{"triggeringLayoutId":"VhuOyMeA4sOpbRTD"}}]}}},"slotEntryTrigger":{"id":"6acff628-0000-2cb4-bfb1-582429ce4dd0","layoutIdEnteredTrigger":{"triggeringLayoutId":"VhuOyMeA4sOpbRTD"}},"slotFulfillmentTriggers":[{"id":"6acff629-0000-2cb4-bfb1-582429ce4dd0","slotIdEnteredTrigger":{"triggeringSlotId":"xgUnLtbc5bmU7Qs8"}}],"slotExpirationTriggers":[{"id":"6acff62a-0000-2cb4-bfb1-582429ce4dd0","slotIdExitedTrigger":{"triggeringSlotId":"xgUnLtbc5bmU7Qs8"}},{"id":"6acff62b-0000-2cb4-bfb1-582429ce4dd0","onNewPlaybackAfterContentVideoIdTrigger":{}}],"trackingParams":"CCsQzOgNGAgiEwibhtS9xeCRAxXchekFHbT8OMQ="}},{"adSlotRenderer":{"adSlotMetadata":{"slotId":"huAZ3xs9rFXOXdOB","slotType":"SLOT_TYPE_IN_PLAYER","adSlotLoggingData":{"serializedSlotAdServingDataEntry":"ChMIu8HVvcXgkQMVQoevAR1HDjEbGhgQAUgBWAFiEGh1QVozeHM5ckZYT1hkT0I="},"triggerEvent":"SLOT_TRIGGER_EVENT_LAYOUT_ID_ENTERED","triggeringSourceLayoutId":"FzrMLJiW4sTTGFjG"},"fulfillmentContent":{"fulfilledLayout":{"inPlayerAdLayoutRenderer":{"adLayoutMetadata":{"layoutId":"g3IP9014RXvZAgye","layoutType":"LAYOUT_TYPE_ENDCAP","adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgWShMIu8HVvcXgkQMVQoevAR1HDjEbUgYQAUgBWAFoAXAq"}},"renderingContent":{"videoInterstitialButtonedCenteredLayoutRenderer":{"interaction":{"onFirstVisible":{"performOnceCommand":{"identifier":"6acff61b-0000-2cb4-bfb1-582429ce4dd0","command":{"innertubeCommand":{"loggingUrls":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_card_endcap_impression"}],"pingingEndpoint":{"hack":true}}}}}},"adAvatar":{"adAvatarViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CCoQ5JoJIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","loggingUrls":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_card_endcap_action_headline_click"},{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_card_endcap_action_headline_click"}],"commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_AVATAR_STYLE_CIRCULAR","image":{"sources":[{"url":"https://yt3.ggpht.com/proxy/dkXggpvSBzmslmOs_KgrAQ_DrfWw5gqk71GJ8zqzIlsPdlvPvZ5j2lV1w3P-Kqfjg_-NbWAyD7ptsNJNH_51CcuRW0_tmg-_5Qmhhv9joh7HFV_hnKh6SiTnHrCbOtL2vOismI090TE5yWSOHa80QBuO3WJfs5AiDlCZxZtz_tdWBOPIbbX5fvnir2NyNE7PXsTycQFbAtuaSghnNTwKPGzqmXpJ6Xs_LeUq6ozZyvAmO526n5_CGfKkVN39fO95QEEQ=w176-h176-nd","width":176,"height":176}]},"size":"AD_AVATAR_SIZE_RESPONSIVE","trackingParams":"CCoQ5JoJIhMIm4bUvcXgkQMV3IXpBR20_DjE","loggingDirectives":{"trackingParams":"CCoQ5JoJIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"headline":{"content":"Affordable Cloud Power for You","commandRuns":[{"loggingDirectives":{"trackingParams":"CCkQyrwJGAAiEwibhtS9xeCRAxXchekFHbT8OMQ="}},{"onTap":{"innertubeCommand":{"clickTrackingParams":"CB8QzL8OIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","loggingUrls":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_card_endcap_action_headline_click"},{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_card_endcap_action_headline_click"}],"commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}}]},"adDetailsLine":{"adDetailsLineViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CCgQvJoJIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","loggingUrls":[{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_card_endcap_action_headline_click"},{"baseUrl":"https://www.youtube.com/pagead/interaction/?ai=Co_y0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBPoDT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZWP5giUdRCCfCVKT2EKb2VPDz1G4-tO2yTx9eRt97xstEbjU8mQruesYHWagBlSAB4HovAGIBwGQBwKoB_LAsQKoB7jEsQKoB-G2sQKoB6XPsQKoB-edsQKoB-idsQKoB--1sQKoB_C1sQKoB_nTsQKoB4QIqAem1LECqAeo0huoB7YHqAewm7ECqAeusbECqAfmvLECqAfKurECqAf9srECqAf3uLECqAf4uLECqAfIz7ECqAfJz7ECqAfNx7ECqAfx0bECqAf81bECqAf71bECqAeM1rECqAeL1rECqAed17ECqAed1LECqAeBxhuoB_yvsQKoB-PZG5IIC1B1WmVlV1JxU1lJqAgB0ggsCAAQAhhaMgEAOhGP0ICAgIAEgMCAgICAgIACKkjZoNI1UBRY2KvVvcXgkQPyCB9jYS15dC1ob3N0LXB1Yi04MTU3MzY1NDEzMjYzMjIzyAkDyAkYyAmPAcgJkAGhC4hhDL9F3XoFugtmCAEQARgWIAEoATAQQAFIAWAAaABwAogBAJgBAaIBMwoeIAPauAQYMhY6FAoSKDBIqe7C264amBeBjac9mBkAGAEgAFgBYABwAdABAagCBcACAqgBAdgBAYACAYgCEboDBXZpdHBl0gwCEAG4E____________wGIFAGwFAHAFcmAgECQFgGKFxYIAxgBIAEoATABOAFAAUgBUAFYAWACoBcBqRf-h96_9BfF0boXBCgAMAA\u0026sigh=5TGV3Bv5TJo\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026label=video_card_endcap_action_headline_click"}],"commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=%5BCLICK_SOURCE%5D","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_DETAILS_LINE_STYLE_RESPONSIVE","attributes":[{"text":{"content":"contabo.com"}}],"loggingDirectives":{"trackingParams":"CCgQvJoJIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adButton":{"adButtonViewModel":{"interaction":{"accessibility":{"label":"Learn more"},"onTap":{"innertubeCommand":{"clickTrackingParams":"CCcQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=26","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=26","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_FILLED_WHITE","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":"Learn more"},"trackingParams":"CCcQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","loggingDirectives":{"trackingParams":"CCcQ2-4JIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adBadge":{"adBadgeViewModel":{"interaction":{},"style":"AD_BADGE_STYLE_STARK","label":{"content":"Sponsored"},"loggingDirectives":{"trackingParams":"CCYQnOcKIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adInfoRenderer":{"adHoverTextButtonRenderer":{"button":{"buttonRenderer":{"style":"STYLE_UNKNOWN","size":"SIZE_DEFAULT","isDisabled":false,"icon":{"iconType":"INFO_OUTLINE"},"navigationEndpoint":{"clickTrackingParams":"CCQQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","openPopupAction":{"popup":{"aboutThisAdRenderer":{"url":{"privateDoNotAccessOrElseTrustedResourceUrlWrappedValue":"https://www.youtube.com/aboutthisad?pf=web\u0026source=youtube\u0026reasons=AUJjZ_7-E_1wAhuQnNak23coCk31gGzD9WE0LFPTnWYrs82__TdtEs1SaMgbJ3Q88MDBSjpnxMbX6KB4FiDtdnErsOcjvbbedXriXcambB8sWWOc_bO9n5a1ogS3ZkZpw9yTn-TOH4JsoGJ6FGT7eH_3oJBV1lW8RnxzUi6-dbsc4klCMNIOvjJWriatQVB84DzXHOUbPhXrz5My7ySUlAEJ8HOnTBwWPgN0TOcjYAAAh1plE6DHwe_QFysyjz2zmk5DaF0DlYU7ATj1TtHgIrDo3DVNnKRlLncZ0WVUtQ-0pPq0OpuAHcHUngAQfafPwJo68Upd-a4VYZ4wmUuTaSaOXxf7VoT3YyzX6iQZa7pFAQbbGEFZFZmDW3uPUVN38K9xalcAaGaUq9ugvs5o2Z4MOV5Lp5VG6_RIDwZwgUSmfeNFIBaR7wA2l_xyd-Fo6Bi4fSnw43hy_PD2dvILsJOnK-iocPuDPGvKI4OEKhuYnQZmGzO5TdMlt8yxtPqLvTqF7v_kseqMbTdRp3mDTkEw-EQWbXTl4IH155HnMnyysQ161GCW9csSPERBP95usWsyu3QU0plZIZ_S0nAefZWM9pp7vEmamt_B3l7oRVh7oT2GbnCxca-5mrjMpKU4Nh-EWQz0e0yBp5C344RSNEIQ3NDdPOJ9wMVcTZCDAe7NxEJGS5jEDOcEz9TBAhOiRWoOrKVs03VWbNGhrB0QWjpy34iidDamR1lxSw5j6HHmn_0ffaCprirj8RuNIODsDDdgo0BQjO7UprwAy9CYc3nlxGtoI22mbWxA9TCf5aVEl5VmIMT0cJ_871Jtn7elwG4F9zJJsjyCQMALci3vDzqDZ0ed8D_uhpbvSNDDEmiJqVsQJ0WIvYcUQTBVxslizqGOQc0gaYfmgvL_lp2O4Lhy1CXm5LSEDGlEzp6BGAvmxL4pRdqFZ8XpF75xSIH8Qea6iVh2JqfrniWrpRzHBYRNoUoKbdiUAI7mbqvxzMWxJ6wVGYs0KLWwI9tPD8bT_Aj5i8ysa3IaeN3ozGyJoqiD5G8k05UBgMpgk2WDgp1o9Jvxd27-D9RlyZcY9O2WV8ypU_2jJusiIBQko-gHQLabwSlIZbAadWJwGI9XurOYr_URlv3IkhnCRERIHxGQ2ZttVT5OcQ2PUN8LDU8_o3S31JGfeuJB7fEL52kcMsvpG1MfvZWaEKJg_JRhlTXkJ3aYdBFSs-Mgy7_jo7Q3xmiNNdCX10wTDLHw2-LsEk3CPnuTHdD3MAw9VFHu-YqPFHreuZEVEYQ_fisKfIxwu09r9AugWtLnl0xYMh5kQtScgAMFRC8XB8khJeZQiWKoJIrMntNLLTMgmOozhHXMrDJe88arno-yVNIlW4THvsYNnXEXz2KUjzGIvu5g4vXoKbz8lhMq6aDMG1FOo0afBCKvli2JZzsi2gRXGPHvIFt8unWzr3dkO4JpS_srbuXMxB0aiKMLkUAD-r2EVPRx7t4JY0CKTgfR7qjCvKCvR2Raa5XHDFqOr2EA12f13ZQC2ZEmFwTbn_BFl8eAFU-V6I8jytnhXMqh_F1CsFtoD-1Wb9Iwv8gNltBUkusKjQxZJxfNhaD-Wp9xQ1W2wlikuztY2V_y0VEb3H54fmqYwyCNqoeaFfU0VDTLmt9jfXz84OmRQh4IzKFn6KH4ZzvYddxyIkjqxYuVgL1RmxCWqiqBONO-EuXmj2J4an7roLKG2zICtnr93TbKVe_JWO5WvL_B2KPWUD51UAcdp0W8H4otyCgVS5wgG1lEf2C5TP6m89t1iOJIf3oU8h-iTLhDioyvMwgS345trsMRc-G3vN6I4s1OsJrzq1rhWHq6FPyslfhjrKEyiktKFxJMR7Z5JJtkjoMeMrWIdqYWP2bQ-dM_sdzbHJU0sAMU2yOrk85BaSW6br2VQJY8NM4NB1fy36sbBkDZWue0HCaTprnlajF1bfnyIJZb8GtlZkycFeJBYBA_MT82tqZ6AmZl8jwJtl0daXZDEmTurtIj-HldZXRZpoUZrrLnMhtRvQjgnvaPglhYJeJZdCOD_ORtpMDSZvz4Av_CrsVvJRmeAhHPPPM8DvzJB-7DwXvHMRBaNie_Csyg6g8kWOIvuvJVlKX5QLnVgqPuEVqWBlvc3YUkum9hyuWFZZUFQ2oCJXwhY5_SSwEP4WeGCq9p3uOxN4wyw4tos2eEbA4CjcRMUvoXjtU24Fmj02YYXtdopNZlRppdZjhQUDHuWK1K15_yQZxDX7uImuG4KQ830VD1Ur1MFG2ITFHY5PqgomlyeC5eCKZ8ocaUwps6NDmqF9f0fN3eQa3L2Kq_m8kA2Z9Mpa2i4zwU1-pQs63VJKKjBklQA5u9FZjakpLrU7ZUUa-SSYepngHAzowL3-6yPxAcQdl_imDkJv9RrE2ZrMXv2UvUx8eJfHYsvs5i7WSHZcaKPenRELX-3jCfFdOxvXVcdTAiM1ahCTlPPN7aVkDR-zYt2P8xFNxi-uqEb4xxcUU0FpmRXdRADTL1pyiiksushnEWQittnzis5z5RLWYhZjVGvd0S6VtOU05YuEWNQRS3p2XYKgmjvcYQ2YjaMdsCAxOaloeIkfmoZa1dJp6WbuqfYVl_mMgy4ADTa0sEfsJ2RMw7rk0Fk3_WILt5nZ6BxVatS2sLzumTUykVMTfXrHMFxDpMjwqrbw9ZFoJpwXRTVcalCCm8YcpLpxUGf9cHDsVLejg6YAhAaI8xU1v76sSAj8FWp7KJI2xgXwwqzqkR2uaUm4qUO_vLP73Fh2aqy33shsRTadXtIw1WC1agLaVom-pY2cTclCFF3KacCZHgfYuz1joq2zNPXq0DYgfN_HZLlfJl5f9ISSxFzMGouhvT73srY0f95zCyfJrYmUk-Mg\u0026hl=en\u0026origin=www.youtube.com\u0026opi=112496729\u0026ata_theme=dark"},"trackingParams":"CCUQl98KIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"popupType":"DIALOG","accessibilityData":{"accessibilityData":{"label":"My Ad Center"}}}},"trackingParams":"CCQQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjE","accessibilityData":{"accessibilityData":{"label":"My Ad Center"}},"loggingDirectives":{"trackingParams":"CCQQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"},"attentionLogging":"ATTENTION_LOGGING_SCROLL"}}},"hoverText":{"simpleText":"My Ad Center"},"trackingParams":"CCMQs-4CIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"skipAdButton":{"skipAdButtonViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CCIQ6NEMIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_COLLAPSED"}}}},"label":"Skip","loggingDirectives":{"trackingParams":"CCIQ6NEMIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"imageBackground":{"imageBackgroundViewModel":{"image":{"sources":[{"url":"https://i.ytimg.com/vi/PuZeeWRqSYI/hqdefault.jpg","width":0,"height":0}]},"blurLevel":70,"gradient":"IMAGE_BACKGROUND_GRADIENT_VERTICAL","rendererContext":{"loggingContext":{"loggingDirectives":{"trackingParams":"CCEQ0c8OIhMIm4bUvcXgkQMV3IXpBR20_DjE"}}}}},"countdownViewModel":{"timedPieCountdownViewModel":{"interaction":{},"loggingDirectives":{"trackingParams":"CCAQzb8OIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"durationMilliseconds":7000,"rendererContext":{"loggingContext":{"loggingDirectives":{"trackingParams":"CB8QzL8OIhMIm4bUvcXgkQMV3IXpBR20_DjE","attentionLogging":"ATTENTION_LOGGING_SCROLL"}}}}},"layoutExitNormalTriggers":[{"id":"6acff61c-0000-2cb4-bfb1-582429ce4dd0","layoutIdExitedTrigger":{"triggeringLayoutId":"FzrMLJiW4sTTGFjG"}}]}}},"slotEntryTrigger":{"id":"6acff61d-0000-2cb4-bfb1-582429ce4dd0","layoutIdEnteredTrigger":{"triggeringLayoutId":"FzrMLJiW4sTTGFjG"}},"slotFulfillmentTriggers":[{"id":"6acff61e-0000-2cb4-bfb1-582429ce4dd0","slotIdEnteredTrigger":{"triggeringSlotId":"huAZ3xs9rFXOXdOB"}}],"slotExpirationTriggers":[{"id":"6acff61f-0000-2cb4-bfb1-582429ce4dd0","slotIdExitedTrigger":{"triggeringSlotId":"huAZ3xs9rFXOXdOB"}},{"id":"6acff620-0000-2cb4-bfb1-582429ce4dd0","onNewPlaybackAfterContentVideoIdTrigger":{}}],"trackingParams":"CB4QzOgNGAkiEwibhtS9xeCRAxXchekFHbT8OMQ="}},{"adSlotRenderer":{"adSlotMetadata":{"slotId":"KUeaHWAgLRhFWHJX","slotType":"SLOT_TYPE_IN_PLAYER","adSlotLoggingData":{"serializedSlotAdServingDataEntry":"ChMIu8HVvcXgkQMVQoevAR1HDjEbGhgQAUgBWAFiEEtVZWFIV0FnTFJoRldISlg="},"triggerEvent":"SLOT_TRIGGER_EVENT_LAYOUT_ID_ENTERED","triggeringSourceLayoutId":"MNlGMXcyGjz7h0BA"},"fulfillmentContent":{"fulfilledLayout":{"inPlayerAdLayoutRenderer":{"adLayoutMetadata":{"layoutId":"Z0p01NDhLyRZZm6H","layoutType":"LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY","adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgWShMIu8HVvcXgkQMVQoevAR1HDjEbUggIBhABSAFYAWgBcBg="}},"renderingContent":{"playerOverlayLayoutRenderer":{"interaction":{},"skipOrPreview":{"skipAdViewModel":{"interaction":{},"preskipState":{"adPreviewViewModel":{"interaction":{},"previewText":{"text":"{TIME_REMAINING}","isTemplated":true},"previewImage":{"sources":[{"url":"https://i.ytimg.com/vi/_FHqOHJefI8/mqdefault.jpg","width":320,"height":180}]},"durationMilliseconds":5000,"loggingDirectives":{"trackingParams":"CB0Q59EMIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"skippableState":{"skipAdButtonViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CBwQ6NEMIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_COLLAPSED"}}}},"label":"Skip","loggingDirectives":{"trackingParams":"CBwQ6NEMIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"skipOffsetMilliseconds":5000,"loggingDirectives":{"trackingParams":"CBsQ2fsMIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"playerAdCard":{"playerAdAvatarLockupCardButtonedViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CBgQ888MIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=23","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=23","target":"TARGET_NEW_WINDOW"}}}},"avatar":{"adAvatarViewModel":{"interaction":{},"style":"AD_AVATAR_STYLE_CIRCULAR","image":{"sources":[{"url":"https://yt3.ggpht.com/proxy/dkXggpvSBzmslmOs_KgrAQ_DrfWw5gqk71GJ8zqzIlsPdlvPvZ5j2lV1w3P-Kqfjg_-NbWAyD7ptsNJNH_51CcuRW0_tmg-_5Qmhhv9joh7HFV_hnKh6SiTnHrCbOtL2vOismI090TE5yWSOHa80QBuO3WJfs5AiDlCZxZtz_tdWBOPIbbX5fvnir2NyNE7PXsTycQFbAtuaSghnNTwKPGzqmXpJ6Xs_LeUq6ozZyvAmO526n5_CGfKkVN39fO95QEEQ=w1200-h1200-nd","width":1200,"height":1200}]},"size":"AD_AVATAR_SIZE_M","trackingParams":"CBoQ5JoJIhMIm4bUvcXgkQMV3IXpBR20_DjE","loggingDirectives":{"trackingParams":"CBoQ5JoJIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"headline":{"content":"Affordable Cloud Power for You"},"description":{"content":"contabo.com"},"button":{"adButtonViewModel":{"interaction":{"accessibility":{"label":"Learn more"},"onTap":{"innertubeCommand":{"clickTrackingParams":"CBkQ6ocIIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=24","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=24","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_MONO_FILLED","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":"Learn more"},"trackingParams":"CBkQ6ocIIhMIm4bUvcXgkQMV3IXpBR20_DjE","loggingDirectives":{"trackingParams":"CBkQ6ocIIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"startMs":1,"loggingDirectives":{"trackingParams":"CBgQ888MIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"visitAdvertiserLink":{"visitAdvertiserLinkViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CBcQ5LwDIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026adclksrc=22\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=C2Vc0TUVRafvmDMKOvr0Px5zE2QGL67GkhAG2x4n7kRSwkB8QASAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHnl8P-A6kC4G9ycuC_sz6oAwSqBP0DT9C8hPlVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl5wZCqCO1otQ2m_diJo3rLiUMf0eH-ndW6SzTWgtZ2SV9Rv4_iJF6Cmx_S7HtlIRwZB2Fgiu2isdqGHrWwo0F2nElrIUQQ6b2w_rpsxbSoFKf3SMpCetMvgmJy-CmEtCkm19Ak6R8gr6l24g6oKRGRIGP-E3NeXZUxg8y_K_h9p9p-wVPCZ6fcnPgFm2ZTv4RjsVGLS9m5UNS300SkdfNjIDK_OBw5F3VwOTZfpOqmNZz0gzfFCTIsl2ErqIBe6NlJhUoAZUgAeB6LwBiAcBkAcCqAfywLECqAe4xLECqAfhtrECqAelz7ECqAfnnbECqAfonbECqAfvtbECqAfwtbECqAf507ECqAeECKgHptSxAqgHqNIbqAe2B6gHsJuxAqgHrrGxAqgH5ryxAqgHyrqxAqgH_bKxAqgH97ixAqgH-LixAqgHyM-xAqgHyc-xAqgHzcexAqgH8dGxAqgH_NWxAqgH-9WxAqgHjNaxAqgHi9axAqgHndexAqgHndSxAqgHgcYbqAf8r7ECqAf9B6gHq8UbqAec3BuoB7ehsQKoB9WpsQKoB-fasQKoB961sQKSCAtQdVplZVdScVNZSagIAdIILAgAEAIYWjIBADoRj9CAgICABIDAgICAgICAAipI2aDSNVAUWNir1b3F4JED8ggfY2EteXQtaG9zdC1wdWItODE1NzM2NTQxMzI2MzIyM5oJG2h0dHBzOi8vY29udGFiby5jb20vZW4vdnBzL7EJA047A7VBzW_ICQPICRjICY8ByAmQAZgLAaELiGEMv0XdegW6C2YIARABGBYgASgBMBBAAUgBYABoAHACiAEAmAEBogEzCh4gA9q4BBgyFjoUChIoMEip7sLbrhqYF4GNpz2YGQAYASAAWAFgAHAB0AEBqAIFwAICqAEB2AEBgAIBiAIRugMFdml0cGXQCxLSDAIQAZoNARKqDQJCRMgNAdINpAFodHRwczovL2NvbnRhYm8uY29tL2VuL3Zwcy8_dXRtX3NvdXJjZT1nb29nbGUmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPWNvcmUtcHJvc3BlY3RpbmctaW5kaWEtcG1heCZ1dG1fdGVybT0mdXRtX2NvbnRlbnQ9JmdhZF9zb3VyY2U9MiZnYWRfY2FtcGFpZ25pZD0yMjU5OTIzOTQwNrgT____________AYgUAbAUAcAVyYCAQNAVAdgVAZAWAeIWAggBgBcBihcWCAMYASABKAEwATgBQAFIAVABWAFgAqAXAakX_ofev_QXxdG6FwYoADAAOAHQGAHwGAGyGQE3whkCCAE\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbdKBd4RirYsbTBF3jFjRqq4ePOGmlkscECRMbKIBYvwVeiQAVw7nggaAqF5EALw_wcB\u0026num=1\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_1a2yzxjA-wgg3wQjvNT0ohM7U5cg\u0026adclksrc=22\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D","target":"TARGET_NEW_WINDOW"}}}},"label":{"content":"contabo.com"},"trackingParams":"CBcQ5LwDIhMIm4bUvcXgkQMV3IXpBR20_DjE","loggingDirectives":{"trackingParams":"CBcQ5LwDIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adBadgeRenderer":{"adBadgeViewModel":{"interaction":{},"style":"AD_BADGE_STYLE_STARK","label":{"content":"Sponsored"},"loggingDirectives":{"trackingParams":"CBYQnOcKIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adDurationRemaining":{"adDurationRemainingRenderer":{"templatedCountdown":{"templatedAdText":{"text":"{FORMATTED_AD_DURATION_REMAINING}","isTemplated":true,"trackingParams":"CBUQzr8CIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"trackingParams":"CBUQzr8CIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"adInfoRenderer":{"adHoverTextButtonRenderer":{"button":{"buttonRenderer":{"style":"STYLE_UNKNOWN","size":"SIZE_DEFAULT","isDisabled":false,"icon":{"iconType":"INFO_OUTLINE"},"navigationEndpoint":{"clickTrackingParams":"CBMQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","openPopupAction":{"popup":{"aboutThisAdRenderer":{"url":{"privateDoNotAccessOrElseTrustedResourceUrlWrappedValue":"https://www.youtube.com/aboutthisad?pf=web\u0026source=youtube\u0026reasons=AUJjZ_7-E_1wAhuQnNak23coCk31gGzD9WE0LFPTnWYrs82__TdtEs1SaMgbJ3Q88MDBSjpnxMbX6KB4FiDtdnErsOcjvbbedXriXcambB8sWWOc_bO9n5a1ogS3ZkZpw9yTn-TOH4JsoGJ6FGT7eH_3oJBV1lW8RnxzUi6-dbsc4klCMNIOvjJWriatQVB84DzXHOUbPhXrz5My7ySUlAEJ8HOnTBwWPgN0TOcjYAAAh1plE6DHwe_QFysyjz2zmk5DaF0DlYU7ATj1TtHgIrDo3DVNnKRlLncZ0WVUtQ-0pPq0OpuAHcHUngAQfafPwJo68Upd-a4VYZ4wmUuTaSaOXxf7VoT3YyzX6iQZa7pFAQbbGEFZFZmDW3uPUVN38K9xalcAaGaUq9ugvs5o2Z4MOV5Lp5VG6_RIDwZwgUSmfeNFIBaR7wA2l_xyd-Fo6Bi4fSnw43hy_PD2dvILsJOnK-iocPuDPGvKI4OEKhuYnQZmGzO5TdMlt8yxtPqLvTqF7v_kseqMbTdRp3mDTkEw-EQWbXTl4IH155HnMnyysQ161GCW9csSPERBP95usWsyu3QU0plZIZ_S0nAefZWM9pp7vEmamt_B3l7oRVh7oT2GbnCxca-5mrjMpKU4Nh-EWQz0e0yBp5C344RSNEIQ3NDdPOJ9wMVcTZCDAe7NxEJGS5jEDOcEz9TBAhOiRWoOrKVs03VWbNGhrB0QWjpy34iidDamR1lxSw5j6HHmn_0ffaCprirj8RuNIODsDDdgo0BQjO7UprwAy9CYc3nlxGtoI22mbWxA9TCf5aVEl5VmIMT0cJ_871Jtn7elwG4F9zJJsjyCQMALci3vDzqDZ0ed8D_uhpbvSNDDEmiJqVsQJ0WIvYcUQTBVxslizqGOQc0gaYfmgvL_lp2O4Lhy1CXm5LSEDGlEzp6BGAvmxL4pRdqFZ8XpF75xSIH8Qea6iVh2JqfrniWrpRzHBYRNoUoKbdiUAI7mbqvxzMWxJ6wVGYs0KLWwI9tPD8bT_Aj5i8ysa3IaeN3ozGyJoqiD5G8k05UBgMpgk2WDgp1o9Jvxd27-D9RlyZcY9O2WV8ypU_2jJusiIBQko-gHQLabwSlIZbAadWJwGI9XurOYr_URlv3IkhnCRERIHxGQ2ZttVT5OcQ2PUN8LDU8_o3S31JGfeuJB7fEL52kcMsvpG1MfvZWaEKJg_JRhlTXkJ3aYdBFSs-Mgy7_jo7Q3xmiNNdCX10wTDLHw2-LsEk3CPnuTHdD3MAw9VFHu-YqPFHreuZEVEYQ_fisKfIxwu09r9AugWtLnl0xYMh5kQtScgAMFRC8XB8khJeZQiWKoJIrMntNLLTMgmOozhHXMrDJe88arno-yVNIlW4THvsYNnXEXz2KUjzGIvu5g4vXoKbz8lhMq6aDMG1FOo0afBCKvli2JZzsi2gRXGPHvIFt8unWzr3dkO4JpS_srbuXMxB0aiKMLkUAD-r2EVPRx7t4JY0CKTgfR7qjCvKCvR2Raa5XHDFqOr2EA12f13ZQC2ZEmFwTbn_BFl8eAFU-V6I8jytnhXMqh_F1CsFtoD-1Wb9Iwv8gNltBUkusKjQxZJxfNhaD-Wp9xQ1W2wlikuztY2V_y0VEb3H54fmqYwyCNqoeaFfU0VDTLmt9jfXz84OmRQh4IzKFn6KH4ZzvYddxyIkjqxYuVgL1RmxCWqiqBONO-EuXmj2J4an7roLKG2zICtnr93TbKVe_JWO5WvL_B2KPWUD51UAcdp0W8H4otyCgVS5wgG1lEf2C5TP6m89t1iOJIf3oU8h-iTLhDioyvMwgS345trsMRc-G3vN6I4s1OsJrzq1rhWHq6FPyslfhjrKEyiktKFxJMR7Z5JJtkjoMeMrWIdqYWP2bQ-dM_sdzbHJU0sAMU2yOrk85BaSW6br2VQJY8NM4NB1fy36sbBkDZWue0HCaTprnlajF1bfnyIJZb8GtlZkycFeJBYBA_MT82tqZ6AmZl8jwJtl0daXZDEmTurtIj-HldZXRZpoUZrrLnMhtRvQjgnvaPglhYJeJZdCOD_ORtpMDSZvz4Av_CrsVvJRmeAhHPPPM8DvzJB-7DwXvHMRBaNie_Csyg6g8kWOIvuvJVlKX5QLnVgqPuEVqWBlvc3YUkum9hyuWFZZUFQ2oCJXwhY5_SSwEP4WeGCq9p3uOxN4wyw4tos2eEbA4CjcRMUvoXjtU24Fmj02YYXtdopNZlRppdZjhQUDHuWK1K15_yQZxDX7uImuG4KQ830VD1Ur1MFG2ITFHY5PqgomlyeC5eCKZ8ocaUwps6NDmqF9f0fN3eQa3L2Kq_m8kA2Z9Mpa2i4zwU1-pQs63VJKKjBklQA5u9FZjakpLrU7ZUUa-SSYepngHAzowL3-6yPxAcQdl_imDkJv9RrE2ZrMXv2UvUx8eJfHYsvs5i7WSHZcaKPenRELX-3jCfFdOxvXVcdTAiM1ahCTlPPN7aVkDR-zYt2P8xFNxi-uqEb4xxcUU0FpmRXdRADTL1pyiiksushnEWQittnzis5z5RLWYhZjVGvd0S6VtOU05YuEWNQRS3p2XYKgmjvcYQ2YjaMdsCAxOaloeIkfmoZa1dJp6WbuqfYVl_mMgy4ADTa0sEfsJ2RMw7rk0Fk3_WILt5nZ6BxVatS2sLzumTUykVMTfXrHMFxDpMjwqrbw9ZFoJpwXRTVcalCCm8YcpLpxUGf9cHDsVLejg6YAhAaI8xU1v76sSAj8FWp7KJI2xgXwwqzqkR2uaUm4qUO_vLP73Fh2aqy33shsRTadXtIw1WC1agLaVom-pY2cTclCFF3KacCZHgfYuz1joq2zNPXq0DYgfN_HZLlfJl5f9ISSxFzMGouhvT73srY0f95zCyfJrYmUk-Mg\u0026hl=en\u0026origin=www.youtube.com\u0026opi=112496729\u0026ata_theme=dark"},"trackingParams":"CBQQl98KIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"popupType":"DIALOG","accessibilityData":{"accessibilityData":{"label":"My Ad Center"}}}},"trackingParams":"CBMQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjE","accessibilityData":{"accessibilityData":{"label":"My Ad Center"}},"loggingDirectives":{"trackingParams":"CBMQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"},"attentionLogging":"ATTENTION_LOGGING_SCROLL"}}},"hoverText":{"simpleText":"My Ad Center"},"trackingParams":"CBIQs-4CIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgWShMIu8HVvcXgkQMVQoevAR1HDjEbUggIBhABSAFYAWgBcBg="},"layoutId":"Z0p01NDhLyRZZm6H","inPlayerLayoutId":"Z0p01NDhLyRZZm6H","adPodIndex":{"adPodIndexViewModel":{"adPodIndex":{"content":"1 of 2"},"visibilityCondition":"AD_POD_INDEX_VISIBILITY_CONDITION_AUTOHIDE"}},"loggingDirectives":{"trackingParams":"CBEQ8s8MIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"},"attentionLogging":"ATTENTION_LOGGING_SCROLL"}}},"layoutExitNormalTriggers":[{"id":"6acff621-0000-2cb4-bfb1-582429ce4dd0","layoutIdExitedTrigger":{"triggeringLayoutId":"MNlGMXcyGjz7h0BA"}}]}}},"slotEntryTrigger":{"id":"6acff622-0000-2cb4-bfb1-582429ce4dd0","layoutIdEnteredTrigger":{"triggeringLayoutId":"MNlGMXcyGjz7h0BA"}},"slotFulfillmentTriggers":[{"id":"6acff623-0000-2cb4-bfb1-582429ce4dd0","slotIdEnteredTrigger":{"triggeringSlotId":"KUeaHWAgLRhFWHJX"}}],"slotExpirationTriggers":[{"id":"6acff624-0000-2cb4-bfb1-582429ce4dd0","slotIdExitedTrigger":{"triggeringSlotId":"KUeaHWAgLRhFWHJX"}},{"id":"6acff625-0000-2cb4-bfb1-582429ce4dd0","onNewPlaybackAfterContentVideoIdTrigger":{}}],"trackingParams":"CBAQzOgNGAoiEwibhtS9xeCRAxXchekFHbT8OMQ="}},{"adSlotRenderer":{"adSlotMetadata":{"slotId":"FoWYLZnZYaVQuniI","slotType":"SLOT_TYPE_IN_PLAYER","adSlotLoggingData":{"serializedSlotAdServingDataEntry":"ChMIu8HVvcXgkQMVQoevAR1HDjEbGhgQAUgBWAFiEEZvV1lMWm5aWWFWUXVuaUk="},"triggerEvent":"SLOT_TRIGGER_EVENT_LAYOUT_ID_ENTERED","triggeringSourceLayoutId":"UG6uWzLEXnMlvRUD"},"fulfillmentContent":{"fulfilledLayout":{"inPlayerAdLayoutRenderer":{"adLayoutMetadata":{"layoutId":"j1jvFWxXEMz7sfsR","layoutType":"LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY","adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgEShMIu8HVvcXgkQMVQoevAR1HDjEbUgoIBhABQAJIAVgBWAJoAXAY"}},"renderingContent":{"playerOverlayLayoutRenderer":{"interaction":{},"skipOrPreview":{"skipAdViewModel":{"interaction":{},"preskipState":{"adPreviewViewModel":{"interaction":{},"previewText":{"text":"{TIME_REMAINING}","isTemplated":true},"previewImage":{"sources":[{"url":"https://i.ytimg.com/vi/_FHqOHJefI8/mqdefault.jpg","width":320,"height":180}]},"durationMilliseconds":5000,"loggingDirectives":{"trackingParams":"CA8Q59EMIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"skippableState":{"skipAdButtonViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CA4Q6NEMIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","changeEngagementPanelVisibilityAction":{"targetId":"engagement-panel-ads","visibility":"ENGAGEMENT_PANEL_VISIBILITY_COLLAPSED"}}}},"label":"Skip","loggingDirectives":{"trackingParams":"CA4Q6NEMIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"skipOffsetMilliseconds":5000,"loggingDirectives":{"trackingParams":"CA0Q2fsMIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"playerAdCard":{"playerAdAvatarLockupCardButtonedViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CAoQ888MIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=23","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=23","target":"TARGET_NEW_WINDOW"}}}},"avatar":{"adAvatarViewModel":{"interaction":{},"style":"AD_AVATAR_STYLE_CIRCULAR","image":{"sources":[{"url":"https://yt3.ggpht.com/proxy/WPVaI2h25VHQTyfGpW3K8b9-JrOCr9Tj5cqA02QHO0QXmF0CGA1unUXbNJ9Aq0GEvI7igSVqOY4xWpYGUCIVXwxEYmd2DqQWetAn6n-ME3jFXH8x-a1Uo2BE4bhGr_qkl_pHZHQCkQ0VqvH5etZYmRbW5-yhv7NeWEgApz03sRLWTEre7eNZp0fynfRvSi9QF1a-GmxWG2FireYInSwVLOG87_9-HGtZz21zLXf9u1D-OBAwQRjwaFj4nCQvkO-fogZi=w1201-h1201-nd","width":1201,"height":1201}]},"size":"AD_AVATAR_SIZE_M","trackingParams":"CAwQ5JoJIhMIm4bUvcXgkQMV3IXpBR20_DjE","loggingDirectives":{"trackingParams":"CAwQ5JoJIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"headline":{"content":"Safe and secure"},"description":{"content":"hostinger.com"},"button":{"adButtonViewModel":{"interaction":{"accessibility":{"label":"Start now"},"onTap":{"innertubeCommand":{"clickTrackingParams":"CAsQ6ocIIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=24","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D\u0026adclksrc=24","target":"TARGET_NEW_WINDOW"}}}},"style":"AD_BUTTON_STYLE_MONO_FILLED","size":"AD_BUTTON_SIZE_DEFAULT","label":{"content":"Start now"},"trackingParams":"CAsQ6ocIIhMIm4bUvcXgkQMV3IXpBR20_DjE","loggingDirectives":{"trackingParams":"CAsQ6ocIIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"startMs":1,"loggingDirectives":{"trackingParams":"CAoQ888MIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"visitAdvertiserLink":{"visitAdvertiserLinkViewModel":{"interaction":{"onTap":{"innertubeCommand":{"clickTrackingParams":"CAkQ5LwDIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","commandMetadata":{"webCommandMetadata":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026adclksrc=22\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D","webPageType":"WEB_PAGE_TYPE_UNKNOWN","rootVe":83769}},"urlEndpoint":{"url":"https://www.googleadservices.com/pagead/aclk?sa=L\u0026ai=CB1YCTUVRafvmDMKOvr0Px5zE2QHf3Yj_gwG_pqi9rRXi3KP9rkIQAiAAYLOQWoIBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAGHns_iAqkC4G9ycuC_sz6oAwTIAwqqBPwDT9C8hPpVyPr75XA5cPqhSjoqW8ko6hS2_ni5kGd_VWckmb8XjNu0yrBL2tzZL8GfAu-CRDa8utA4vRFbegokJ06cz1SUaYL4bp0wT2dKLNDgE5TimyPZgpS20kaMyR1XqvTXcVKX4hCSDE8fjgNWxtSbgCVGDD6hf-l8egoeY5n6vp-GBcMo825F7SGia_LGQrnYywCEOGAxr_xvyVpQ6rfrBA4CKCU-nB-coJ6hDH74CpI6QkTXGLtumJKjILAnlcM3vzFNctFoJXjJba--0bvgPeauXRiei7L4x51N1x3u7qUdGM24w6rmTwIlfkdenQKiTMeEO7iq_6ZDQ2Xn5HmON5zb64o-oR5S2RnOPDzgfyV9Ihs1fPEXJAnMdNEGHJXZNneK7hsQtGLmfgGDYc_CiqAH-mFEpsCa86pGBxuHl_wDcqCH3oufs6qtOd75XaxlQlgZn-goWKVGTmnYZGZg9hkN_SKw6ylE_i4ytVLkwpCDFQhb2Svoq2EeWArBFGkxlbLhQg5u2A4epc2uSYG_fHR5pydYMfjTBC93u0u3kW2IAU5k8QoPlG7V6YJkGhLzPOHCNuXsUBgczU3iTvrKPAuqT3rCnwxW1Nqo_OvyxLKnTCgmC7wm3EB_Z6ZFqQUiPkKUbzVfdQOfcX15i3bo0GozckYcH4Jb84gFqIiu1lOgBqEBgAfh4bCdAYgHAZAHAqgH8sCxAqgHuMSxAqgH4baxAqgHpc-xAqgH552xAqgH6J2xAqgH77WxAqgH8LWxAqgH-dOxAqgHhAioB6bUsQKoB6jSG6gHtgeoB7CbsQKoB66xsQKoB-a8sQKoB8q6sQKoB_2ysQKoB_e4sQKoB_i4sQKoB8jPsQKoB8nPsQKoB83HsQKoB_HRsQKoB_zVsQKoB_vVsQKoB4zWsQKoB4vWsQKoB53XsQKoB53UsQKoB4HGG6gH_K-xAqgH_QeoB6vFG6gHnNwbqAe3obECqAfVqbECqAfn2rECqAfetbECkggLRUMwMThadE5YYUGoCAHSCCwIABACGFoyAQA6EY_QgICAgASAwICAgICAgAIqSNmg0jVQFFjYq9W9xeCRA_IIH2NhLXl0LWhvc3QtcHViLTgxNTczNjU0MTMyNjMyMjOaCStodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3dvcmRwcmVzcy1ob3N0aW5nsQk3zDcJd6ggq8gJA8gJGMgJjwHICcIBmAsBoQuIYQy_Rd16BboLZggBEAEYBCABKAEwEEABSAFgAGgAcAKIAQCYAQKiATMKHiAD2rgEGDIWOhQKEigwSKnuwtuuGpgXgY2nPZgZABgAIABYAWAAcAHQAQGoAgXAAgKoAQHYAQGAAgGIAgW6AwV2aXRwZdALEtIMAhABmg0BEqoNAkJEyA0B0g2pAWh0dHBzOi8vd3d3Lmhvc3Rpbmdlci5jb20vd29yZHByZXNzLWhvc3Rpbmc_dXRtX2NhbXBhaWduPVJNS1QtVkFDLURlbWFuZEdlbi1Xb3JkUHJlc3MtV29vQ29tbWVyY2V8TlQ6WW91VHViZXxMTzpCRCZ1dG1fbWVkaXVtPXBwYyZnYWRfc291cmNlPTImZ2FkX2NhbXBhaWduaWQ9MjI0NjEyNTI2NDi4E____________wGwFAHAFcmAgEDQFQHYFQGQFgGYFgHiFgIIAYAXAYoXFggDGAEgASgBMAE4AUABSAFQAVgBYAKgFwGpFzOLh4yAGX07uhcGKAAwADgB0BgB8BgBshkBN8IZAggB\u0026gclid=Cj0KCQiAx8PKBhD1ARIsAKsmGbcdcUqilAPS6QZP7zAkxAT6MZyj-rlss2rp4Ui-eAlFZW4UW7kcIG8aAo1QEALw_wcB\u0026num=2\u0026cid=CAESpQHg9gzBUXcZSDF_L_zJx6nf0U0GnRObcs4YxbryM5L1e4wQcjsEmEBU7d9Dbu8PYMgx1Wt1guhXOKAxtpUUs95g-pP3Y_xZ45joQVc39KOjMBpxqdtB1r4hmHJfOuyNQq1QnuN3TJ902t1A6SzdOS5IN6jcw5VQ3-wUrCeHPrRF3I4UrpnGuCotgRiO7fa7-_5gEiYPkTOvHmDQIhYOQxZEFtxssFg\u0026ad_cpn=%5BAD_CPN%5D\u0026sig=AOD64_0WY6s4sLqMIU4thmV-y6dkPtkO6A\u0026adclksrc=22\u0026label=video_click_to_advertiser_site\u0026ctype=110\u0026ms=%5BCLICK_MS%5D","target":"TARGET_NEW_WINDOW"}}}},"label":{"content":"hostinger.com"},"trackingParams":"CAkQ5LwDIhMIm4bUvcXgkQMV3IXpBR20_DjE","loggingDirectives":{"trackingParams":"CAkQ5LwDIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adBadgeRenderer":{"adBadgeViewModel":{"interaction":{},"style":"AD_BADGE_STYLE_STARK","label":{"content":"Sponsored"},"loggingDirectives":{"trackingParams":"CAgQnOcKIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"}}}},"adDurationRemaining":{"adDurationRemainingRenderer":{"templatedCountdown":{"templatedAdText":{"text":"{FORMATTED_AD_DURATION_REMAINING}","isTemplated":true,"trackingParams":"CAcQzr8CIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"trackingParams":"CAcQzr8CIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"adInfoRenderer":{"adHoverTextButtonRenderer":{"button":{"buttonRenderer":{"style":"STYLE_UNKNOWN","size":"SIZE_DEFAULT","isDisabled":false,"icon":{"iconType":"INFO_OUTLINE"},"navigationEndpoint":{"clickTrackingParams":"CAUQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjEygEE7E1vMg==","openPopupAction":{"popup":{"aboutThisAdRenderer":{"url":{"privateDoNotAccessOrElseTrustedResourceUrlWrappedValue":"https://www.youtube.com/aboutthisad?pf=web\u0026source=youtube\u0026reasons=AUJjZ_6gRhUo7svcVWbhxAn9uKOwzbU4HT5QqjHZSou1weuxYcW9-qAZbLgW0eq7yYTGApTBQE5mZPH0Q0ezK2JVJSTSQGyxvvQ8nC-kX7wo2h8duCCvtTi-9TsaHWevMbSCA7bbg_aPGeIlQ4odui6dAXd8DPW4uYdHiA5oqCRXBhEMJI2jInj3Oa3bVUXS6aSUpqhNq4c-UrdqLXw9QmHKLU7OIFjKTFaFcltIIDS-5nuwb0pOLvVldUk22hWhvt5VXUK4wJuslIUBtCwUZbMajmdm5fmBRhTnkv9cEj3gHeIQ1g7A1WDuMOkbUqxYMZE6thBeBV1CnNVciGEiZ7ozlPRCvsSfdz4SEM4BQ8B7p1m09bllHQyuYj0UGQG5p9t6zD2oXD5YxpnwZleCpYBrOmPe6neFXUP3U1e9BDtcA95YzI5GspNF_7bZOLeYFgQBlCZiSmAR_jl7Vv3B1z2uNq95Vi22D92h6rrkG2_gyDSv-WucdKJE519vCoy-YW6WA4g9HxmjOhgjWrTvxai-ZFmf41XJOP0EdRkyFmmPVEyLPmLxHfxPSc0Xgxd7_Xjq7NBRpdmSDAYRsN9aPhlI5T8TFmK3j4s00KRsS9C_zFQHvN9ELRwu-roUKSutHIjTJBWm79dUrtITjR86082o1bHrk8q4Z6ppsBVgepx3wMKLz9j6FpThYpiTW3jx50NRujwBtlAitWT5swwPkqgxj8yDkRW0N1PFDDxnuqjcDaarsGrdby1464QhMZI7iC0-2wz6YHfHrsD6l20cPZdKx3kEqzRIoD3qss2QFHSr-gRTdSxQvSV-fX-ErNaYrBltENrdRqLlQF752ubLx_lw3yGgFTD_nWFYYiflInTSrMF9iDw6oM1nTRMHmhTJlk-Lu98q72t_1gMT2g93HlDhW97R-OJ30SQkBYLCbRSDc7-aVACsBJrVC13rfB9Ctdi_V7pdhBI8EWa5z0a4IBNPpFxKPQ9kfQNHxj13VbQxPbX6ql1epZbZyAXwXbjQSnTe_QCRBfeU4gifuR6xP87KqWAvmwxIvIRVWr9C5wDvtJ8wFbXn9flpTwB3Td10L4pdkjENS97ng-VyBIpr8XTLjz_E5pJJ6PSZDCvktuPXajU_JnXZACmSjDPNeDtOpMLA2kJaSOGGG5sD10AP6PdOhVp0atQawWoKqHpbHflz_Dw1b6eWH6tYGQ6JlX_12pQKhrQhqrhfy-cKZ1KqGXmvXXP78F-di8xcioqhgZdQ_Z5PadsPzwc8gsE47txPugbvF6SsEqOgnroTwu9gOx-sIEAj1TTYsrhDSUDJEKsx6Unv1jgD9NsvHQgBpL3QSQCVgDybxYCE2NiuMKipa6LSf93Dj0RAYSDMv9Wc21CXWNya2Ye79IXd6xrmBjnyLxrSaPnHLUHSuUoNniFnhwHz9WjrttDUlw_QmGq88tke2GfGtlgpsw7ZfwNAQ1L4NLseXWmMZGYNCfrGPoDAXewlSbyRfunr6eiHI9YUOfW-hlR4SHRQYecTMzMBFxGegOWFXSCihqzJzj64kXz1MDtyh8lVR_YDFUMAhFBh0-ZkLgkahUsNF3Ad4ud1JY8dVjb4SskYT0WVKh4tMypLBI3PTLYCR3eXKUk4G5-GieXnicGUwOwcuF9YbZ3ieUluZ_huhY93QnFKdHa_vU2TuW35_HqSRYw23VrUm0JJYdE8ehUl-S35kuSWjPsPdECPUeJeU1XMt2Cw8JKqstZz24yZbEOpRKUWvqLpfquWddD1s0Y2hEvd-W_vSbdMtk9T6bhe0vfT7y57iSO6JW5E7N-rIabSux1Pip1zTSiWOLXl0Gtu5fGCsWIb15JoH-efYQRoIquHPxprtk1ITmACQ6r-CKxD0pTlEUR6bobNtGQBUrlGCLvGrH8KEfHpndX3dpnCPsK5uNBv1RN_Dp464GSY6VXliHXn4SGnzQplIJw9YqJ8yLHBWZCPJp-J0sKE7dxRpwHh9cQq8zrn_DuVpB0wSZfAOgA8hYCOtDQ3RqSUvFXtECUvXNR2RJO1jf3k7DBo8zPV3cZpX1XIjBpMTBBBF6rcEfo54llQWyy4BKIifYkx8nm8xwllkYlG2S0WogqlY3kuh3OVfTq94XfCaRv2xLUsXN7nv78PsR56mWpVXKp3tUyJW1L-nHmQhlFqjrnSaLp23CLMcUcbU_gN1PRjhEmhkvoVOCU32Yf7n9CrBATBYeiH9JXmPASNzhVtbS70MgD1_LhA9-F4JekF_Ppe-OZlUJRbTixM0RqtZjQB0Fq-cFEuqp-cDIrhDu-6l_4mLj40mc6ARaLNNY5pzJN8iuHQ9kNh7vmeDSKWZW_8-KmqGcrOtnvkcMn_hR0K5qAuD6b006xnyqSTEJ5-ZrMjxa7tAf7ufAd7zkNyvKOrxJLhsStFYlwFqkvAMXdCtQ5qOs2WNHNwAqYd2nYexWqvNbFHgTuNCS0Fb4KigwKHUbH8ZA6wvSM7vnwTStumq6GrN2TSXUjUOiHGEOJbKTRikdJQPkarFPTYFDQYtLC3sy9umE5BzSYeaDWcWCFtmY3VMWIEWEzPKKom8bKpNOE-t-GsA7QC3T_pQplA22BxWeagwBbFZ_W0Uf7EskO3YicXEyYbht58N6rRW5QkJRXWqb2AbHQlOhQ7Cwqy0xjtrU_yqxCtrfI2Q9r_nH_GmXZm70cZiwlfQE4fWupSwiS6Nkl34gaaHZ5BzLw6iafafUsISqQiPTXToWGMiSwrG4L3h_f5G9tewwIJSTHWGcjcGEXZTCLUJBg5o3Vf1caLISvFeh2R_XfLiAyLxfp-fi6t5Z5_H_GtoVDc8qxJOBYdxTzFH_-8bRbO6Mm83crWTizmg45KMjw_DMo2Ni-1z25ZQzW1DWVJ1DjXq6fpVgAsX6fCErg10np-hmvi8kdZ99PHnYOII35h\u0026hl=en\u0026origin=www.youtube.com\u0026opi=112496729\u0026ata_theme=dark"},"trackingParams":"CAYQl98KIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"popupType":"DIALOG","accessibilityData":{"accessibilityData":{"label":"My Ad Center"}}}},"trackingParams":"CAUQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjE","accessibilityData":{"accessibilityData":{"label":"My Ad Center"}},"loggingDirectives":{"trackingParams":"CAUQsewNIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"},"attentionLogging":"ATTENTION_LOGGING_SCROLL"}}},"hoverText":{"simpleText":"My Ad Center"},"trackingParams":"CAQQs-4CIhMIm4bUvcXgkQMV3IXpBR20_DjE"}},"adLayoutLoggingData":{"serializedAdServingDataEntry":"IBAwATgEShMIu8HVvcXgkQMVQoevAR1HDjEbUgoIBhABQAJIAVgBWAJoAXAY"},"layoutId":"j1jvFWxXEMz7sfsR","inPlayerLayoutId":"j1jvFWxXEMz7sfsR","adPodIndex":{"adPodIndexViewModel":{"adPodIndex":{"content":"2 of 2"},"visibilityCondition":"AD_POD_INDEX_VISIBILITY_CONDITION_AUTOHIDE"}},"loggingDirectives":{"trackingParams":"CAMQ8s8MIhMIm4bUvcXgkQMV3IXpBR20_DjE","visibility":{"types":"12"},"attentionLogging":"ATTENTION_LOGGING_SCROLL"}}},"layoutExitNormalTriggers":[{"id":"6acff62c-0000-2cb4-bfb1-582429ce4dd0","layoutIdExitedTrigger":{"triggeringLayoutId":"UG6uWzLEXnMlvRUD"}}]}}},"slotEntryTrigger":{"id":"6acff62d-0000-2cb4-bfb1-582429ce4dd0","layoutIdEnteredTrigger":{"triggeringLayoutId":"UG6uWzLEXnMlvRUD"}},"slotFulfillmentTriggers":[{"id":"6acff62e-0000-2cb4-bfb1-582429ce4dd0","slotIdEnteredTrigger":{"triggeringSlotId":"FoWYLZnZYaVQuniI"}}],"slotExpirationTriggers":[{"id":"6acff62f-0000-2cb4-bfb1-582429ce4dd0","slotIdExitedTrigger":{"triggeringSlotId":"FoWYLZnZYaVQuniI"}},{"id":"6acff630-0000-2cb4-bfb1-582429ce4dd0","onNewPlaybackAfterContentVideoIdTrigger":{}}],"trackingParams":"CAIQzOgNGAsiEwibhtS9xeCRAxXchekFHbT8OMQ="}}],"adBreakHeartbeatParams":"Q0FBJTNE","frameworkUpdates":{"entityBatchUpdate":{"mutations":[{"entityKey":"Eg0KC19GSHFPSEplZkk4IPYBKAE%3D","type":"ENTITY_MUTATION_TYPE_REPLACE","payload":{"offlineabilityEntity":{"key":"Eg0KC19GSHFPSEplZkk4IPYBKAE%3D","offlineabilityRenderer":"CAEaGwoTChEKD0Z1bGwgSEQgKDEwODBwKRgHIAIoABoXCg8KDQoLSGlnaCAoNzIwcCkYAiACKAAaGQoRCg8KDU1lZGl1bSAoMzYwcCkYASABKAEaFgoOCgwKCkxvdyAoMTQ0cCkYBCABKAEiDTILb2ZmbGluZWxpc3Q=","addToOfflineButtonState":"ADD_TO_OFFLINE_BUTTON_STATE_ENABLED","contentCheckOk":false,"racyCheckOk":false,"loggingDirectives":{"trackingParams":"CAEQxzciEwibhtS9xeCRAxXchekFHbT8OMQ=","visibility":{"types":"4"}}}}}],"timestamp":{"seconds":"1766933837","nanos":575403694}}}};var meta = document.createElement('meta'); meta.name = 'referrer'; meta.content = 'origin-when-cross-origin'; document.getElementsByTagName('head')[0].appendChild(meta);</script><script nonce="">(function(){'use strict';var m=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function n(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var q=n(this);function r(a,b){if(b)a:{var c=q;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&m(c,a,{configurable:!0,writable:!0,value:b})}}
function t(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function u(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:t(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function v(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
function w(a){retur/div>
