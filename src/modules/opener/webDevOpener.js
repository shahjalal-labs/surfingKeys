const { mapkey } = api;

// Helper function – reuse for all simple URL openers
const urlOpener = (key, desc, url) => {
  mapkey(key, desc, function () {
    const host = new URL(url).hostname;
    if (window.location.hostname === host) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  });
};

// ── Replaced blocks ─────────────────────────────────────────

// open mongodb
urlOpener("ocm", "open mongodb", "https://cloud.mongodb.com");

// open tailwind vite
urlOpener(
  "oct",
  "open tailwind vite",
  "https://tailwindcss.com/docs/installation/using-vite",
);

// open daisyUI (key remains "ocd")
urlOpener("ocd", "open daisyUI", "https://daisyui.com/docs/install/vite/");

// open nextjs Docs
urlOpener("ocn", "open nextjs Docs", "https://nextjs.org/docs");

// open temp mail
urlOpener("oce", "open temp mail", "https://tempmail.plus/en/#!");

// open postman web
urlOpener(
  "ocp",
  "open postman web",
  "https://shahjalal-backend-9458759.postman.co/workspaces",
);

// open DNS checker (renamed to "ocdn" to avoid conflict)
urlOpener("ocdn", "open dns checker org", "https://dnschecker.org/");

// open ip info
urlOpener("ocii", "open ip info", "https://ipinfo.io/");

// open ip2 location
urlOpener("ocil", "open ip2 location", "https://www.ip2location.com/demo");

urlOpener(
  "ocr",
  "Fiverr safe message Rewriter",
  "https://safemessage.vercel.app/",
);

urlOpener("ocf", "Fiverr message Rewriter", "https://rewrite.smtsigma.com/");

urlOpener("ocg", "SMT Collaborate", "http://collaborate.smtsigma.com/");

// ── Special case: localhost with port logic (cannot be replaced) ──

//t:localhost
api.mapkey("ocl", "open localhost", function () {
  if (window.location.hostname.includes("localhost")) {
    window.open("http://localhost:5174/", "_blank");
  } else {
    window.open("http://localhost:5173/", "_blank");
  }
});
