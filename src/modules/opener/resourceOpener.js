//w: ╭──────────── Block Start ────────────╮
//w: ╰───────────── Block End ─────────────╯

const openGDrive = () => {
  if (window.location.hostname.includes("drive")) {
    window.location.href =
      "https://drive.google.com/drive/u/0/folders/1zjnO2RfqwIhV_95-7nMnTPi1-2q5m1Cp";
  } else {
    window.open(
      "https://drive.google.com/drive/u/0/folders/1zjnO2RfqwIhV_95-7nMnTPi1-2q5m1Cp",
      "_blank",
    );
  }
};
api.mapkey("ord", "open GDrive Resource", openGDrive);

const openImgbb = () => {
  if (
    window.location.hostname.includes("imgbb") ||
    window.location.hostname.includes("ibb")
  ) {
    window.location.href = "https://md-shahjalal.imgbb.com/";
  } else {
    window.open("https://md-shahjalal.imgbb.com/", "_blank");
  }
};
api.mapkey("ori", "open imgbb Resource", openImgbb);

const openJpSheet = () => {
  if (window.location.hostname.includes("docs")) {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1OA2UGMcqJc6zST3BVR70qUqyMnjftBuFHLGP7sHR0z8/edit?gid=2099620628#gid=2099620628";
  } else {
    window.open(
      "https://docs.google.com/spreadsheets/d/1OA2UGMcqJc6zST3BVR70qUqyMnjftBuFHLGP7sHR0z8/edit?gid=2099620628#gid=2099620628",
      "_blank",
    );
  }
};
api.mapkey("ors", "open Jp Sheet", openJpSheet);

const openJpMasumVaiSheet = () => {
  if (window.location.hostname.includes("docs")) {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1MVvvT7qvJZEmejn9vdfPyOnjLFCxMpqUT92eClzV9PE/edit?gid=0#gid=0";
  } else {
    window.open(
      "https://docs.google.com/spreadsheets/d/1MVvvT7qvJZEmejn9vdfPyOnjLFCxMpqUT92eClzV9PE/edit?gid=0#gid=0",
      "_blank",
    );
  }
};
api.mapkey("orm", "open Jp Masum Vai Sheet", openJpMasumVaiSheet);
