function openResourceTab(url, hostMatch) {
  if (hostMatch && window.location.hostname.includes(hostMatch)) {
    window.location.href = url;
  } else {
    api.tabOpenLink(url);
  }
}

//w: ╭──────────── Block Start ────────────╮
const openGDrive = () => {
  openResourceTab(
    "https://drive.google.com/drive/u/0/folders/1zjnO2RfqwIhV_95-7nMnTPi1-2q5m1Cp",
    "drive"
  );
};
api.mapkey("ord", "open GDrive Resource", openGDrive);
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openImgbb = () => {
  if (
    window.location.hostname.includes("imgbb") ||
    window.location.hostname.includes("ibb")
  ) {
    window.location.href = "https://md-shahjalal.imgbb.com/";
  } else {
    api.tabOpenLink("https://md-shahjalal.imgbb.com/");
  }
};
api.mapkey("ori", "open imgbb Resource", openImgbb);
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openJpSheet = () => {
  openResourceTab(
    "https://docs.google.com/spreadsheets/d/1OA2UGMcqJc6zST3BVR70qUqyMnjftBuFHLGP7sHR0z8/edit?gid=2099620628#gid=2099620628",
    "docs"
  );
};
api.mapkey("ors", "open Jp Sheet", openJpSheet);
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openJpMasumVaiSheet = () => {
  openResourceTab(
    "https://docs.google.com/spreadsheets/d/1MVvvT7qvJZEmejn9vdfPyOnjLFCxMpqUT92eClzV9PE/edit?gid=0#gid=0",
    "docs"
  );
};
api.mapkey("orm", "open Jp Masum Vai Sheet", openJpMasumVaiSheet);
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openJpMahinVaiSheet = () => {
  openResourceTab(
    "https://docs.google.com/spreadsheets/d/1d9wPS0-rstt0TY23AR1LP4SpCQfULYHItmUZZoI5Ww4/edit?gid=0#gid=0",
    "docs"
  );
};
api.mapkey("ork", "open Jp Mahin Vai Sheet", openJpMahinVaiSheet);
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openPeopleDesk = () => {
  openResourceTab(
    "https://app.peopledesk.io/dashboard/employee",
    "app.peopledesk.io"
  );
};
api.mapkey("orp", "openPeopleDesk", openPeopleDesk);
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── Block Start ────────────╮
const openBetopiaErp = () => {
  openResourceTab(
    "https://erp.betopiagroup.com/",
    "erp.betopiagroup.com"
  );
};
api.mapkey("ore", "open betopia erp", openBetopiaErp);
//w: ╰───────────── Block End ─────────────╯

//w: ╭──────────── openTeamUnitySheets ────────────╮
const openTeamUnitySheets = () => {
  openResourceTab(
    "https://docs.google.com/spreadsheets/d/1Nknt_IAy5ZaRPWfFiN-8XqlNZ-N50Y_JLJ_e1AQIjtE/edit?gid=1280894611#gid=1280894611",
    "docs"
  );
};
api.mapkey("oru", "open Team Unity Sheets", openTeamUnitySheets);
//w: ╰───────────── openTeamUnitySheets ─────────────╯

//w: ╭──────────── openTeamUnityUpdateStatusSheets ────────────╮
const openTeamUnityUpdateStatusSheets = () => {
  openResourceTab(
    "https://docs.google.com/spreadsheets/d/1Olck6WYQ-lRHvnApmjVAb9DxXaBDJeOsiqvJJqrkTZ4/edit?gid=1080140336#gid=1080140336",
    "docs"
  );
};
api.mapkey("orU", "open Team Unity Update Status Sheets", openTeamUnityUpdateStatusSheets);
//w: ╰───────────── openTeamUnityUpdateStatusSheets ─────────────╯
