//  ,,o,v => ,Open ,Visual => => visual means figma design which help us to visual view

const { urlOpener } = require("../aiOpener");

//w: (start)╭──────────── ashmaster  ────────────╮
// open ashmaster
api.mapkey("ova", "ashmaster figma", function () {
  const url = "https://www.figma.com/design/zQdcO8yAzu6RBqaWAHY5Qt/ash_master_Bridge-Network-App?node-id=28320-2244&t=SAlFLJ39wHSWPOjA-1";
  if (window.location.hostname.includes("www.figma.com")) {
    window.location.href = url;
  } else {
    api.tabOpenLink(url);
  }
});

//open ashmaster docs
api.mapkey("ovda", "ashmaster docs", function () {
  const url = "https://docs.google.com/spreadsheets/d/1QUT4qSbz6graO9wLbTLk5rrr37AMKlN09dOIG5dUCTg/edit?gid=0#gid=0";
  if (window.location.hostname.includes("docs.google.com")) {
    window.location.href = url;
  } else {
    api.tabOpenLink(url);
  }
});
//w: (end)  ╰──────────── ashmaster  ────────────╯

// open habib050505 figma
//w: (start)╭──────────── habib050505 ────────────╮
urlOpener(
  "ovh",
  "open habib050505 figma",
  "https://www.figma.com/design/G0pU3jlT4NMwC3OYJp2ruW/habib050505_azmabiomed.com_Website?node-id=42432-498&t=UA5pLMtzMBhkbqFy-0",
);
//w: (end)  ╰──────────── habib050505 ────────────╯

//w: (start)╭──────────── habib050505 document ────────────╮
urlOpener(
  "ovdh",
  "open habib050505 document",
  "https://docs.google.com/document/d/1Ld_X2fC4a5W0Xf2kGz-XG1L_pLqZ5dE3r7T_7lP5yQ/edit",
);
//w: (end)  ╰──────────── habib050505 document ────────────╯
