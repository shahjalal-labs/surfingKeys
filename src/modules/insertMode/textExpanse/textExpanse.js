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

textPaster(",ed", "insert mail dev.shah...", "dev.shahjalal@gmail.com");
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
