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
    "https://web.programming-hero.com/675439d776a088463223e16d/course-outline",
    "_blank",
  );
});
