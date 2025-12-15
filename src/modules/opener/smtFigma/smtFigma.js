// open visual => ov => visual means figma design which help us to visual view

//w: (start)╭──────────── ashmaster  ────────────╮
// open ashmaster
api.mapkey("ova", "ashmaster figma", function () {
  if (window.location.hostname.includes("www.figma.com")) {
    window.location.href =
      "https://www.figma.com/design/zQdcO8yAzu6RBqaWAHY5Qt/ash_master_Bridge-Network-App?node-id=28320-2244&t=SAlFLJ39wHSWPOjA-1";
  } else {
    window.open(
      "https://www.figma.com/design/zQdcO8yAzu6RBqaWAHY5Qt/ash_master_Bridge-Network-App?node-id=28320-2244&t=SAlFLJ39wHSWPOjA-1",
      "_blank",
    );
  }
});

//open ashmaster docs
api.mapkey("ovda", "ashmaster docs", function () {
  if (window.location.hostname.includes("docs.google.com")) {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1QUT4qSbz6graO9wLbTLk5rrr37AMKlN09dOIG5dUCTg/edit?gid=0#gid=0";
  } else {
    window.open(
      "https://docs.google.com/spreadsheets/d/1QUT4qSbz6graO9wLbTLk5rrr37AMKlN09dOIG5dUCTg/edit?gid=0#gid=0",
      "_blank",
    );
  }
});
//w: (end)  ╰──────────── ashmaster  ────────────╯
