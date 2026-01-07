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

module.exports = {
  githubUrlOpener,
};
