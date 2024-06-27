browser.browserAction.onClicked.addListener(() =>
    browser.tabs
      .query({ currentWindow: true, discarded: true })
      .then((tabs) => tabs.map((tab) => browser.tabs.remove(tab.id))),
  );
