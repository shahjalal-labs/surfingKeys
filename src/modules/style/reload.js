// Reload all tabs from the current one
const { mapkey, RUNTIME, Front } = api;

// Reload all tabs from current to the right safely
mapkey("<Space>rl", "Reload all tabs from current → right", () => {
  RUNTIME("getTabs", null, function (tabs) {
    RUNTIME("getCurrentTab", null, function (current) {
      let found = false;
      tabs.forEach((tab) => {
        if (tab.id === current.id) found = true;
        if (found) {
          RUNTIME("reloadTab", { tabId: tab.id });
        }
      });
      Front.showBanner(
        `🔄 Reloaded tabs from ${current.index + 1}/${tabs.length}`,
      );
    });
  });
});
