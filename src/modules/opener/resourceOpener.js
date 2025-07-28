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

/* const openImgbb = () => {
  const path = "imgbb" || "ibb";
  if (window.location.hostname.includes(path)) {
    window.location.href = "https://md-shahjalal.imgbb.com/";
  } else {
    window.open("https://md-shahjalal.imgbb.com/", "_blank");
  }
};
api.mapkey("ori", "open imgbb Resource", openImgbb);
 */

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
const baseUrl = "https://drive.google.com/drive/u/0/folders/";
const gdriveFolders = {
  dorkaryKagoj: baseUrl + "10WgJY2dLqB4DulSuXvDpVK9c0G_ZOSIz",
  career: baseUrl + "path",
};

api.mapkey("org", "📂 Open GDrive folder by partial name", () => {
  const input = window.prompt("Enter folder name (e.g., work, stu):");
  if (!input) return;

  const normalizedInput = input.trim().toLowerCase();

  // Find partial match
  const matchedKey = Object.keys(gdriveFolders).find((key) =>
    key.toLowerCase().startsWith(normalizedInput),
  );

  if (matchedKey) {
    window.open(gdriveFolders[matchedKey], "_blank");
    api.Front.showBanner(`✅ Opened "${matchedKey}" folder`);
  } else {
    api.Front.showBanner("❌ Folder not found", 3000);
  }
});
