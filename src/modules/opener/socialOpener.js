api.mapkey("osx", "open twitter @shahjalal_labs", function () {
  if (window.location.hostname.includes("discord")) {
    window.location.href =
      "https://discord.com/channels/1386609361345843211/1386636865842708550";
  } else {
    window.open(
      "https://discord.com/channels/1386609361345843211/1386636865842708550",
      "_blank",
    );
  }
});
//t: facebook
api.mapkey("sf", "Open Facebook", function () {
  window.open("https://www.facebook.com", "_blank");
});

api.mapkey("sa", "email inbox opening", function () {
  window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", "_blank");
});

//t: open whatsApp
api.mapkey("sm", "whatsApp", function () {
  window.open("https://web.whatsapp.com/", "_blank");
});
// p: open zoom session
api.mapkey("co", "open linkedin", function () {
  if (window.location.hostname.includes("linkedin")) {
    window.location.href = "https://www.linkedin.com/in/shahjalal-mern/";
  } else {
    window.open("https://www.linkedin.com/in/shahjalal-mern/", "_blank");
  }
});
// p: open discord session announcement
api.mapkey("and", "open ejp discord sesssion announcement", function () {
  if (window.location.hostname.includes("discord")) {
    window.location.href =
      "https://discord.com/channels/1386609361345843211/1386636865842708550";
  } else {
    window.open(
      "https://discord.com/channels/1386609361345843211/1386636865842708550",
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
