chrome.runtime.onInstalled.addListener(() => {
    window.alert('FB Executor Installed');
});

chrome.tabs.onActivated.addListener((tab) => {

});

chrome.tabs.onUpdated.addListener((tabId, tab) => {
    // if (tab.url && tab.url.includes('facebook.com')) {
    //     const query = tab.url.split('/')[1];
    //     window.alert(tab.url);
    // }
})