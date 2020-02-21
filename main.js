browser.browserAction.onClicked.addListener(async () => {
    (await browser.tabs.query({currentWindow: true, discarded: true}))
        .map(tab => browser.tabs.remove(tab.id));
})
