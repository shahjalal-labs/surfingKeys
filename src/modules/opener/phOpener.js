//w: ╭──────────── Block Start ────────────╮
//t: ph scribble l1b10
api.mapkey("pso", "scribble l1b10", () => {
  api.tabOpenLink(
    "https://web.programming-hero.com/update-1/video/update-1-42-1-scribbles-cafe-project-overview-and-tailwind-setup"
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
api.mapkey("pwh", "HELP DESK", function () {
  api.tabOpenLink("https://helpdesk.programming-hero.com/");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t:L2B4Web
api.mapkey("si", "L2B4Web", function () {
  api.tabOpenLink(
    "https://web.programming-hero.com/level2-batch-4-frontend-track/video/level2-batch-4-frontend-track-36-11-displaying-blogs-and-handling-loading-with-rtk-query-module-summary"
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t: outline L2B4
api.mapkey("sk", "outline L2B4", function () {
  api.tabOpenLink(
    "https://web.programming-hero.com/676fa61320dff5186afcd780/course-outline"
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//p: coceptual level1 batch 10
api.mapkey("ae", "Conceptual Level1 Batch 10", function () {
  api.tabOpenLink("https://web.programming-hero.com/conceptual-session");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//p: coceptual level1 batch 11
api.mapkey("acd", "Conceptual Level1 Batch 11", function () {
  api.tabOpenLink("https://web.programming-hero.com/conceptual-session");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t:redux
api.mapkey("sr", "redux", function () {
  api.tabOpenLink(
    "https://web.programming-hero.com/level2-batch-1/video/level2-batch-1-21-1-project-initialization-and-redux-store-setup-recap"
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t: pre requisite
api.mapkey("sp", "pre requisite level2", function () {
  api.tabOpenLink(
    "https://web.programming-hero.com/next-level-prerequisites-batch4/video/next-level-prerequisites-batch4-45-8-active-route-loading-spinner-uselocation-usenavigation"
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t:L2B4
api.mapkey("s4", "L2B4 typescript module 2", function () {
  api.tabOpenLink(
    "https://web.programming-hero.com/level2-batch-4/video/level2-batch-4-2-1-type-assertion-type-narrowing"
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//p: level1 batch 11
api.mapkey("pwj", "Level1 Batch 11", function () {
  api.tabOpenLink(
    "https://web.programming-hero.com/web-11/video/web-11-15-9-module-summary-legal-system-practice-task-"
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t: open ph podcast
api.mapkey("php", "open ph podcast", function () {
  const url = "https://www.youtube.com/@ProgrammingHeroCommunity/podcasts";
  if (
    window.location.hostname.includes("youtube.com") &&
    window.location.pathname
      .toLowerCase()
      .includes("@programmingherocommunity/podcasts")
  ) {
    window.location.href = url;
  } else {
    api.tabOpenLink(url);
  }
});
//w: ╰───────────── Block End ─────────────╯
