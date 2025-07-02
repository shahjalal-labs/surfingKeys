//w: opening daisy ui
api.mapkey("cd", "daisy ui", function () {
  if (window.location.hostname.includes("daisy")) {
    window.location.href = "https://daisyui.com/docs/install/vite/";
  } else {
    window.open("https://daisyui.com/docs/install/vite/", "_blank");
  }
});

api.mapkey("at", "tailwind css v4 installation", function () {
  window.open("https://tailwindcss.com/docs/installation/using-vite", "_blank");
});

//t:localhost
api.mapkey("sl", "localhost", function () {
  window.open("http://localhost:5173/", "_blank");
});
