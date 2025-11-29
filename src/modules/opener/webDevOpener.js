//w: ╭──────────── Block Start ────────────╮
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
api.mapkey("ocm", "open mongodb", function () {
  if (window.location.hostname.includes("mongodb")) {
    window.location.href = "https://cloud.mongodb.com";
  } else {
    window.open("https://cloud.mongodb.com", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
api.mapkey("oct", "open tailwind vite ", function () {
  if (window.location.hostname.includes("tailwindcss")) {
    window.location.href =
      "https://tailwindcss.com/docs/installation/using-vite";
  } else {
    window.open(
      "https://tailwindcss.com/docs/installation/using-vite",
      "_blank",
    );
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
api.mapkey("ocd", "open daisyUI", function () {
  if (window.location.hostname.includes("daisyui")) {
    window.location.href = "https://daisyui.com/docs/install/vite/";
  } else {
    window.open("https://daisyui.com/docs/install/vite/", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
//t:localhost
api.mapkey("ocl", "open localhost", function () {
  if (window.location.hostname.includes("localhost")) {
    window.open("http://localhost:5174/", "_blank");
  } else {
    window.open("http://localhost:5173/", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯

//
//w: ╭──────────── Block Start ────────────╮
api.mapkey("ocn", "open nextjs Docs", function () {
  if (window.location.hostname.includes("nextjs.org")) {
    window.location.href = "https://nextjs.org/docs";
  } else {
    window.open("https://nextjs.org/docs", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯
//

//w: (start)╭──────────── Fiverr Message Rewriter ────────────╮
api.mapkey("ocf", "Fiverr Message Rewriter", function () {
  if (window.location.hostname.includes("relevance-phi.vercel.app")) {
    window.location.href = "https://relevance-phi.vercel.app/";
  } else {
    window.open("https://relevance-phi.vercel.app/", "_blank");
  }
});
//w: (end)  ╰──────────── Fiverr Message Rewriter ────────────╯
