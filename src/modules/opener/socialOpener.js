// p: open discord session announcement
api.mapkey("ouc", "open gContacts", function () {
  if (window.location.hostname.includes("contacts")) {
    window.location.href = "https://contacts.google.com/new";
  } else {
    window.location.href = "https://contacts.google.com/";
    window.open("https://contacts.google.com/new", "_blank");
  }
});

api.mapkey("oux", "open twitter @shahjalal_labs", function () {
  if (window.location.hostname.includes("x.com")) {
    window.location.href = "https://x.com/shahjalal_labs ";
  } else {
    window.open("https://x.com/shahjalal_labs ", "_blank");
  }
});
//t: facebook
api.mapkey("ouf", "Open Facebook", function () {
  window.open("https://www.facebook.com", "_blank");
});

api.mapkey("oue", "email inbox opening", function () {
  window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", "_blank");
});

//t: open whatsApp
api.mapkey("ouw", "whatsApp", function () {
  window.open("https://web.whatsapp.com/", "_blank");
});
// p: open zoom session
api.mapkey("oul", "open linkedin", function () {
  if (window.location.hostname.includes("linkedin")) {
    window.location.href = "https://www.linkedin.com/in/shahjalal-labs/";
  } else {
    window.open("https://www.linkedin.com/in/shahjalal-labs/", "_blank");
  }
});
// p: open discord session announcement
api.mapkey("oud", "open ejp discord sesssion announcement", function () {
  if (window.location.hostname.includes("discord")) {
    window.location.href =
      "https://discord.com/channels/1391805056957026364/1391809512100462592";
  } else {
    window.open(
      "https://discord.com/channels/1391805056957026364/1391809512100462592",
      "_blank",
    );
  }
});

// p: open zoom session
api.mapkey("anz", "open ejp discord sesssion announcement", function () {
  if (window.location.hostname.includes("zoom")) {
    window.location.href = "https://www.zoom.us/join";
  } else {
    window.open("https://www.zoom.us/profile", "_blank");
  }
});

//t: open youtube @shahjalal-labs
api.mapkey("ouy", "open yt @shahjalal-labs", function () {
  if (window.location.hostname.includes("youtube")) {
    window.location.href = "https://www.youtube.com/@shahjalal-labs";
  } else {
    window.open("https://www.youtube.com/@shahjalal-labs", "_blank");
  }
});
//w: ╭──────────── Block Start ────────────╮
//t: open portfolio shahjalal-labs
api.mapkey("oup", "open portfolio shahjalal-labs", function () {
  if (window.location.hostname.includes("shahjalal-labs.surge.sh")) {
    window.location.href = "https://shahjalal-labs.surge.sh";
  } else {
    window.open("https://shahjalal-labs.surge.sh", "_blank");
  }
});
//w: ╰───────────── Block End ─────────────╯
