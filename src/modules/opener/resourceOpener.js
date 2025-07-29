// https://md-shahjalal.imgbb.com/
const openGDrive = () => {
  if (window.location.hostname.includes("drive")) {
    window.location.href =
      "https://drive.google.com/drive/u/0/folders/1FD0nX0xdN64zZX_LgV_bZvz7b7Yq30J4";
  } else {
    window.open(
      "https://drive.google.com/drive/u/0/folders/1FD0nX0xdN64zZX_LgV_bZvz7b7Yq30J4",
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
