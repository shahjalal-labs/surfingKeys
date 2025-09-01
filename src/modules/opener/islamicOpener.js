//t: isami music playlist
//
/* api.mapkey("su", "isami music playlist", function () {
  window.open(
    "https://www.youtube.com/watch?v=rL6qQ49hBlQ&list=PLXOE5SEv6NpDUSPNxCu1fFTfBi8HZDeJM",
    "_blank",
  );
}); */

//t: Open Wedding Nasheed
api.mapkey("sj", "Open Wedding Nasheed", function () {
  window.open(
    "https://www.youtube.com/watch?v=dWBgNHT4ipE&ab_channel=HuzaifahNasheeds",
    "_blank",
  );
});

//t: Open Quran
//
api.mapkey("opq", "Open Quran", function () {
  window.open("https://quran.com", "_blank");
});

//w: ╭──────────── Block Start ────────────╮
//t: open shariyah solution ahmadullah
api.mapkey("ops", "open shariyah solution ahmadullah", function () {
  if (
    window.location.hostname.includes("youtube.com") &&
    window.location.pathname.toLowerCase().includes("@sheikhahmadullahofficial")
  ) {
    window.location.href =
      "https://www.youtube.com/@sheikhahmadullahofficial/streams";
  } else {
    window.open(
      "https://www.youtube.com/@sheikhahmadullahofficial/streams",
      "_blank",
    );
  }
});
//w: ╰───────────── Block End ─────────────╯
