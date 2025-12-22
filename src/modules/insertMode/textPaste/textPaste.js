const { imapkey } = api;
function textPaster(keys, desc, text) {
  imapkey(keys, desc, function () {
    document.execCommand("insertText", false, text);
  });
}

// Usage examples:
textPaster(",nn", "Insert Fullname: Md. Shahjalal", "Md. Shahjalal");
textPaster(",nf", "Insert Firstname: Md.", "Md. ");
textPaster(
  ",eb",
  "Insert Backend Mail: shahjalal.backend@gmail.com",
  "shahjalal.backend@gmail.com",
);

/* api.imapkey(",nn", "Insert Fullname: Md. Shahjalal", function () {
  // This inserts text at the cursor position in any input/textarea
  document.execCommand("insertText", false, "Md. shahjalal");
});

api.imapkey(",nf", "Insert Firstname: Md.", function () {
  // This inserts text at the cursor position in any input/textarea
  document.execCommand("insertText", false, "Md. ");
});

api.imapkey(",nf", "Insert Firstname: Md.", function () {
  // This inserts text at the cursor position in any input/textarea
  document.execCommand("insertText", false, "Md. ");
});

api.imapkey(",eb", "Insert  Backend Mail: shahjal.backe...", function () {
  // This inserts text at the cursor position in any input/textarea
  document.execCommand("insertText", false, "shahjalal.backend@gmail.com");
}); */
