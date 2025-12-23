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
