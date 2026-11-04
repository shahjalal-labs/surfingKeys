api.mapkey("pws", "SCIC", function () {
  const url = "https://web.programming-hero.com/scic-11/video/scic-11-0-2-tips-to-get-the-best-out-of-scic";
  if (window.location.pathname.includes("/groups/scic11/announcements")) {
    window.location.href = url;
  } else {
    api.tabOpenLink(url);
  }
});

//p: outline SCIC
api.mapkey("pwo", "outline SCIC", function () {
  api.tabOpenLink(
    "https://web.programming-hero.com/688f7b564965ce7350b23f35/course-outline"
  );
});
