document.getElementById('toggleButton').addEventListener('click', async function () {
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, { type: "getText" }, function (response) {
    //         // displayResult(response)
    //         window.alert(response);
    //     });
    // });
    // (async () => {
    //     const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    //     const response = await chrome.tabs.sendMessage(tab.id, { type: "getText" });
    //     // do something with response here, not outside the function
    //     console.log(response);
    // })();
    await openNewTab('https://facebook.com');
});

async function openNewTab(url) {
    await chrome.tabs.create({ url });
}

function displayResult(msg) {
    var errorMsg = document.createElement("p");
    errorMsg.innerHTML = 'Error occurred ' + msg.message.toString();
    document.getElementById("container").appendChild(errorMsg);
}