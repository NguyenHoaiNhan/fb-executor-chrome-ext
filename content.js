var text = "hello";
chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        switch (message.type) {
            case "getText":
                sendResponse({ result: 'text' });
                break;
        }
    }
);