//w: (start)╭──────────── githubUrlOpener ────────────╮
const githubUrlOpener = (key, desc, url) => {
  api.mapkey(key, desc, function () {
    const repoUrl = url + "?tab=repositories";

    if (window.location.href.startsWith(repoUrl)) {
      // On repositories page → switch to profile
      window.location.href = url;
    } else if (window.location.href.startsWith(url)) {
      // On profile (or subpage under profile) → switch to repositories
      window.location.href = repoUrl;
    } else {
      // Anywhere else → open repositories in a new tab
      window.open(repoUrl, "_blank");
    }
  });
};
//w: (end)  ╰──────────── githubUrlOpener ────────────╯

//w: 1╭──────────── Block Start ────────────╮
//t: github repository page opening
api.mapkey("gro", "Github own Repositories", function () {
  window.open("https://github.com/shahjalal-labs?tab=repositories", "_blank");
});

//w: github Ruhul vai
githubUrlOpener(
  "grr",
  "github Ruhul vai",
  "https://github.com/ruhulamin-programming",
);

//w: github Mirhasankhan vai
githubUrlOpener(
  "grm",
  "github Mirhasankhan vai",
  "https://github.com/Mirhasankhan",
);

// w: github SMTech24-official
githubUrlOpener(
  "grs",
  "github SMTech24-official",
  "https://github.com/SMTech24-official",
);

//w: (start)╭──────────── create new github repo────────────╮
api.mapkey("grn", "create new github repo", function () {
  window.open("https://github.com/new", "_blank");
});
//w: (end)  ╰───────────── create new github repo───────────╯

module.exports = {
  githubUrlOpener,
};
