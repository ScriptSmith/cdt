browser.browserAction.onClicked.addListener(() =>
    browser.tabs
      .query({ currentWindow: true, discarded: true })
      .then((tabs) => tabs.map((tab) => browser.tabs.remove(tab.id))),
  );

  browser.storage.local.onChanged.addListener((changes) => {
    const iconColor = changes["iconColor"];
    if (iconColor) {
      browser.browserAction.setIcon({
        path: {
          48: `icons/trash-48-${iconColor.newValue}.png`,
        },
      });
    }
  });
