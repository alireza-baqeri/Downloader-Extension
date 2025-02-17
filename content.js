document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('td.link2');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.getAttribute('onclick').match(/OpenLink\('(.+?)'\)/)[1];
            chrome.runtime.sendMessage({ action: 'showDownloadPrompt', url: url });
        });
    });
});