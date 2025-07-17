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
  personal: "https://drive.google.com/drive/u/0/folders/PERSONAL_FOLDER_ID",
};

api.mapkey("org", "📂 Open a Google Drive folder from list", function () {
  const folderList = Object.entries(gdriveFolders).map(([name, url]) => {
    return {
      title: name,
      url: url,
    };
  });

  api.Front.openOmnibar({
    type: "UserURLs",
    extra: folderList,
    callback: function (selected) {
      if (selected && selected.url) {
        window.open(selected.url, "_blank");
        api.Front.showBanner(`✅ Opened "${selected.title}"`);
      } else {
        api.Front.showBanner("❌ Nothing selected");
      }
    },
  });
});
