const audio = new Audio(browser.runtime.getURL('elevator.mp3'));
audio.loop = true;

// when page fully loads
browser.webNavigation.onCompleted.addListener(details => {
    // pause audio when page fully loads
    if (details.frameId === 0) {
        audio.pause();
        const ding = new Audio(browser.runtime.getURL('bell.wav'));
        ding.play();
    }
});

// play audio when page navigation starts
browser.webNavigation.onBeforeNavigate.addListener(details => {
    if (details.frameId === 0) {
        // restart audio
        audio.currentTime = 0.1;
        audio.play();
    }
});
