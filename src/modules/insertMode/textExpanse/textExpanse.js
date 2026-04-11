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

//resume
textPaster(
  ",rr",
  "Insert resume",
  "https://drive.google.com/file/d/1eKx1OO7p2tvSIxPKD1aDHu6sgPkVcJwN/view",
);

// portfolio

textPaster(",rp", "Insert portfolio", "https://shahjalal-labs.surge.sh");

// github
textPaster(",rg", "Insert github", "https://github.com/shahjalal-labs");

// linkedin
textPaster(
  ",rl",
  "Insert linkedin",
  "https://www.linkedin.com/in/shahjalal-labs",
);

// facebook
textPaster(",rf", "Insert fb url", "https://www.facebook.com/shahjalal.labs");

// insert fullname
textPaster(",nn", "Insert Fullname: Md. Shahjalal", "Md. Shahjalal");

// insert firstname:
textPaster(",nf", "Insert Firstname: Md.", "Md. ");

textPaster(",nl", "Insert Lastname: ", "Shahjalal");

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
textPaster(",pb", "Insert BL Phn: 01989", "+8801989763775");

// Insert TEL Phn: 01540
textPaster(",pt", "Insert TEL Phn: 01540", "+8801540325659");

// Insert Salam
textPaster(",is", "Insert Salam", "Assalamu Alaikum,");

// ,,re,g,po,l,e (regpol)

//paste all
textPaster(
  ",ra",
  "Insert formatted profile bundle",
  `Resume: https://drive.google.com/file/d/1eKx1OO7p2tvSIxPKD1aDHu6sgPkVcJwN/view

Portfolio: https://shahjalal-labs.surge.sh
Github: https://github.com/shahjalal-labs

LinkedIn: https://www.linkedin.com/in/shahjalal-labs
Facebook: https://www.facebook.com/shahjalal.labs

I’d appreciate it if you review my profile—a quick review could be worth your time.
`,
);
