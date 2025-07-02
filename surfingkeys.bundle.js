(() => {
  // modules/defaultRemapped.js
  api.map("gt", "t");
  api.map("w", "d");
  api.map("t", "T");
  api.map("ao", ";di");
  api.map("su", ";U");
  api.map("C-1", "g0");
  api.map("aa", "S");
  api.map("<Alt-j>", "l");
  api.map("<Alt-k>", "h");
  api.map("h", "E");
  api.map("gj", "G");
  api.map("gi", "yy", /.*youtube.*/i);
  api.map("l", "R");
  api.lmap("f", "<t>");
  api.map("as", ";fs");
  api.map("u", "<Ctrl-i>");
  api.map("Ctrl+d", "<Ctrl-f>");
  api.unmap("<ctrl-i>");
  api.map(",", "<Ctrl-6>");

  // modules/github.js
  api.mapkey("gr", "Repository Github", function() {
    window.open("https://github.com/shahjalal-labs?tab=repositories", "_blank");
  });
  api.mapkey("gn", "new repo github", function() {
    window.open("https://github.com/new", "_blank");
  });
})();
