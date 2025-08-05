api.mapkey("phg", "PH b11 github repositories", function () {
  window.open("https://github.com/ProgrammingHero1?tab=repositories", "_blank");
});

//t: fbLevel1
api.mapkey("phc", "fbLevel1", function () {
  window.open("https://www.facebook.com/groups/programmingHero", "_blank");
});

//t: fbLevel2
api.mapkey("ph2", "fbLevel2", function () {
  window.open("https://www.facebook.com/groups/phapollo4", "_blank");
});

//p: level1 batch 11 fb suport group
api.mapkey("phf", "fb  Level1 Batch 11 support group", function () {
  window.open("https://www.facebook.com/groups/targetwebdevcareer", "_blank");
});

api.mapkey("phs", "SCIC", function () {
  if (window.location.pathname.includes("/groups/scic11/announcements")) {
    console.log(window.location.pathname, "pathname");
    window.location.href = "https://www.facebook.com/groups/scic11/";
  } else {
    window.open(
      "https://www.facebook.com/groups/scic11/announcements",

      "_blank",
    );
  }
});
