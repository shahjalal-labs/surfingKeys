//  ,,o,v => ,Open ,Visual => => visual means figma design which help us to visual view

const { urlOpener } = require("../aiOpener");

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

const figmaAndDocs = [
  {
    key: "ovh",
    desc: "",
    url: "",
  },
];

// open habib050505 figma
//w: (start)╭──────────── habib050505 ────────────╮

figmaAndDocs.push(
  "ovdh",
  "open habib050505 docs",
  "https://docs.google.com/spreadsheets/d/1JLURTgXqxSvjM-JKxMXlQjBZtBUp3qV_RFnxwXLd0B8/edit?gid=0#gid=0",
);

urlOpener(
  "ovh",
  "open habib050505 figma",
  "https://www.figma.com/design/G0pU3jlT4NMwC3OYJp2ruW/habib050505_azmabiomed.com_Website?node-id=42432-498&t=UA5pLMtzMBhkbqFy-0",
);

urlOpener(
  "ovdh",
  "open habib050505 docs",
  "https://docs.google.com/spreadsheets/d/1JLURTgXqxSvjM-JKxMXlQjBZtBUp3qV_RFnxwXLd0B8/edit?gid=0#gid=0",
);
//w: (end)  ╰──────────── habib050505 ────────────╯

// open habib050505 figma
//w: (start)╭──────────── rkrazak ────────────╮
urlOpener(
  "ovr",
  "open rkrazak figma",
  "https://www.figma.com/design/Lfe9pK63CjmvnIn1NXTXsm/rkrazak---ABS-Fresh--Farming-mobile-app-?node-id=0-1&p=f&t=GMwTyB5T0BIDLVpO-0",
);

urlOpener(
  "ovdh",
  "open rkrazak docs",
  "https://docs.google.com/spreadsheets/d/1e84IK20ryP9PAnYRRZzKSDZ47hBr2ugAuMwIuVJe5ZI/edit?gid=0#gid=0",
);
//w: (end)  ╰──────────── rkrazak ────────────╯

figmaAndDocs.forEach((f) => urlOpener(f.key, f.desc, f.url));
