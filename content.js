function contentScript() {
    console.log('running content script');
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        try {
            var query = '.btn.slide-button-1';
            var container = document.querySelector(query);

            if (!container) {
                throw new Error('Element with ' + query + ' is not found.');
            }

            container.click();

            sendResponse({
                type: 'Success',
                msg: 'Element with query ' + query + ' clicked successfully',
            });

            return true;
        } catch (err) {
            sendResponse({
                type: 'Error',
                msg: err.message,
            });
        }
    });
}

// Run the function when the page is fully loaded
window.addEventListener('load', contentScript);

