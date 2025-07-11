api.mapkey("ocm", "open mongodb", function () {
  if (window.location.hostname.includes("mongodb")) {
    window.location.href =
      "https://cloud.mongodb.com/v2/68216ab8964d5b3dffeb6a42#/overview?connectCluster=Cluster0";
  } else {
    window.open(
      "https://cloud.mongodb.com/v2/68216ab8964d5b3dffeb6a42#/overview?connectCluster=Cluster0",
      "_blank",
    );
  }
});

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

api.mapkey("ocd", "open daisyUI", function () {
  if (window.location.hostname.includes("daisyui")) {
    window.location.href = "https://daisyui.com/docs/install/vite/";
  } else {
    window.open("https://daisyui.com/docs/install/vite/", "_blank");
  }
});

//t:localhost

api.mapkey("ocl", "open localhost", function () {
  if (window.location.hostname.includes("localhost")) {
    window.open("http://localhost:5174/", "_blank");
  } else {
    window.open("http://localhost:5173/", "_blank");
  }
});
