document.getElementById('toggleButton').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "toggle" }, response => {
            window.alert(response.data.toString());
            if (chrome.runtime.lastError || re || response.data.type === 'Error') {
                displayResult(chrome.runtime.lastError.message || re)
                return;
            }

            if (response) {
                displayResult(response);
            }
        });
    });
});

function displayResult(msg) {
    var errorMsg = document.createElement("p");
    errorMsg.innerHTML = 'Error occurred ' + msg.message.toString();
    document.getElementById("container").appendChild(errorMsg);
}