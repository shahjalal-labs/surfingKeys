// Helper to open link in current tab if already on matching site, or new tab via SurfingKeys API
function openTabOrRedirect(targetUrl, hostMatch) {
  if (hostMatch && window.location.hostname.includes(hostMatch)) {
    window.location.href = targetUrl;
  } else {
    api.tabOpenLink(targetUrl);
  }
}

//w: ╭──────────── Block Start ────────────╮
// p: open gContacts
api.mapkey("ouc", "open gContacts", function () {
  openTabOrRedirect("https://contacts.google.com/new", "contacts");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
api.mapkey("oux", "open twitter @shahjalal_labs", function () {
  openTabOrRedirect("https://x.com/shahjalal_labs", "x.com");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t: facebook
api.mapkey("ouf", "Open Facebook", function () {
  api.tabOpenLink("https://www.facebook.com");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
api.mapkey("oue", "email inbox opening", function () {
  api.tabOpenLink("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t: open whatsApp
api.mapkey("ouw", "whatsApp", function () {
  api.tabOpenLink("https://web.whatsapp.com/");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
// p: open linkedin
api.mapkey("oul", "open linkedin", function () {
  openTabOrRedirect("https://www.linkedin.com/in/shahjalal-labs/", "linkedin");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
// p: open discord session announcement
api.mapkey("oud", "open ejp discord sesssion announcement", function () {
  openTabOrRedirect(
    "https://discord.com/channels/1391805056957026364/1391809512100462592",
    "discord"
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
// p: open zoom session
api.mapkey("anz", "open ejp discord sesssion announcement", function () {
  openTabOrRedirect("https://www.zoom.us/profile", "zoom");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t: open youtube @shahjalal-labs
api.mapkey("ouy", "open yt @shahjalal-labs", function () {
  openTabOrRedirect("https://www.youtube.com/@shahjalal-labs", "youtube");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t: open portfolio shahjalal-labs
api.mapkey("oup", "open portfolio shahjalal-labs", function () {
  openTabOrRedirect("https://shahjalal-labs.surge.sh", "shahjalal-labs.surge.sh");
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
//t: open resume shahjalal-labs
api.mapkey("our", "open resume root", function () {
  openTabOrRedirect(
    "https://drive.google.com/file/d/1eKx1OO7p2tvSIxPKD1aDHu6sgPkVcJwN/view",
    "drive.google.com"
  );
});
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
// open ms team live
api.mapkey("out", "open ms team live", function () {
  openTabOrRedirect("https://teams.live.com/v2/", "teams.live.com");
});
//w: ╰───────────── Block End ─────────────╯

//w: (start)╭──────────── open telegram ────────────╮
api.mapkey("oua", "open telegram", function () {
  openTabOrRedirect("https://web.telegram.org/a/#5772149609", "web.telegram.org");
});
//w: (end) ╰──────────── api ────────────╯
