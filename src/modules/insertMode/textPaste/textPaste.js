// Method 1: Simple text expansion using imapkey
api.imapkey(",pn", "Insert name: Md. Shahjalal", function () {
  // This inserts text at the cursor position in any input/textarea
  document.execCommand("insertText", false, "md. shahjalal");
});
