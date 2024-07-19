const DEFAULT_COLOR = "dark";

browser.browserAction.onClicked.addListener(() =>
  browser.tabs
    .query({ currentWindow: true, discarded: true })
    .then((tabs) => tabs.map((tab) => browser.tabs.remove(tab.id))),
);

const setIcon = (color) =>
  browser.browserAction.setIcon({
    path: {
      48: `icons/trash-48-${color}.png`,
    },
  });

browser.storage.local
  .get("iconColor")
  .then(({ iconColor }) => setIcon(iconColor));

browser.storage.local.onChanged.addListener((changes) => {
  const iconColor = changes["iconColor"];
  if (iconColor) {
    setIcon(iconColor.newValue);
  }
});
