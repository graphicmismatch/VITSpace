const coordsElement = document.getElementById('coords');
const signalStatusElement = document.getElementById('signalStatus');
const toolCountElement = document.getElementById('toolCount');
const dataCountElement = document.getElementById('dataCount');

const signalStates = ['LOCKED', 'TRACKING', 'SYNCED', 'NOMINAL'];
let signalIndex = 0;

function updateCoords() {
    if (!coordsElement) {
        return;
    }

    const lat = (Math.random() * 180 - 90).toFixed(4);
    const lon = (Math.random() * 360 - 180).toFixed(4);
    coordsElement.innerText = `${lat}, ${lon}`;
}

function updateSignalState() {
    if (!signalStatusElement) {
        return;
    }

    signalStatusElement.innerText = signalStates[signalIndex];
    signalIndex = (signalIndex + 1) % signalStates.length;
}

updateCoords();
updateSignalState();

if (toolCountElement) {
    toolCountElement.innerText = '06';
}

if (dataCountElement) {
    dataCountElement.innerText = '04';
}

setInterval(updateCoords, 2000);
setInterval(updateSignalState, 2500);
