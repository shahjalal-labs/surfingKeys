api.mapkey("phg", "PH b11 github repositories", function () {
  api.tabOpenLink("https://github.com/ProgrammingHero1?tab=repositories");
});

//t: fbLevel1
api.mapkey("phc", "fbLevel1", function () {
  api.tabOpenLink("https://www.facebook.com/groups/programmingHero");
});

//t: fbLevel2
api.mapkey("ph2", "fbLevel2", function () {
  api.tabOpenLink("https://www.facebook.com/groups/phapollo4");
});

//p: level1 batch 11 fb suport group
api.mapkey("phf", "fb Level1 Batch 11 support group", function () {
  api.tabOpenLink("https://www.facebook.com/groups/targetwebdevcareer");
});

api.mapkey("phs", "SCIC", function () {
  const url = "https://www.facebook.com/groups/scic11/announcements";
  if (window.location.pathname.includes("/groups/scic11/announcements")) {
    window.location.href = "https://www.facebook.com/groups/scic11/";
  } else {
    api.tabOpenLink(url);
  }
});
