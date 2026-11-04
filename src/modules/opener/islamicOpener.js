//t: Open Wedding Nasheed
api.mapkey("sj", "Open Wedding Nasheed", function () {
  api.tabOpenLink("https://www.youtube.com/watch?v=dWBgNHT4ipE&ab_channel=HuzaifahNasheeds");
});

//t: Open Quran
api.mapkey("opq", "Open Quran", function () {
  api.tabOpenLink("https://quran.com");
});

//w: ╭──────────── Block Start ────────────╮
//t: open shariyah solution ahmadullah
api.mapkey("ops", "open shariyah solution ahmadullah", function () {
  const url = "https://www.youtube.com/@sheikhahmadullahofficial/streams";
  if (
    window.location.hostname.includes("youtube.com") &&
    window.location.pathname.toLowerCase().includes("@sheikhahmadullahofficial")
  ) {
    window.location.href = url;
  } else {
    api.tabOpenLink(url);
  }
});
//w: ╰───────────── Block End ─────────────╯
