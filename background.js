chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'showDownloadPrompt') {
        chrome.action.openPopup();
    }
});