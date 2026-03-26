const clockElement = document.getElementById('clock');

function renderClock() {
    if (!clockElement) {
        return;
    }

    clockElement.innerText = new Date().toLocaleTimeString('en-US');
}

renderClock();
setInterval(renderClock, 1000);
document.addEventListener('vitspace:languagechange', renderClock);
