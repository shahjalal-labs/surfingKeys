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

const gdriveFolders = {
  work: "https://drive.google.com/drive/u/0/folders/WORK_FOLDER_ID",
  study: "https://drive.google.com/drive/u/0/folders/STUDY_FOLDER_ID",
};

api.mapkey("org", "Open GDrive folder by name", () => {
  const folderKey = window.prompt("Enter folder name (e.g., work, study):");
  if (!folderKey) return;

  const url = gdriveFolders[folderKey.trim()];
  if (url) {
    window.open(url, "_blank");
    api.Front.showBanner(`📂 Opening "${folderKey}" folder`, 3000);
  } else {
    api.Front.showBanner("❌ Folder not found", 3000);
  }
});
