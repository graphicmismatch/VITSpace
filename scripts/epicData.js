const epicDate = document.getElementById('epicDate');
const epicCount = document.getElementById('epicCount');
const epicLat = document.getElementById('epicLat');
const epicLon = document.getElementById('epicLon');
const epicStatus = document.getElementById('epicStatus');
const epicList = document.getElementById('epicList');
const refreshEpicButton = document.getElementById('refreshEpic');
var translate = window.VITSPACE_I18N.t;

const EPIC_METADATA_URL = 'https://epic.gsfc.nasa.gov/api/natural';

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function appendParagraph(parent, text) {
    const paragraph = document.createElement('p');
    paragraph.innerText = text;
    parent.appendChild(paragraph);
}

function setFeedMessage(message) {
    clearElement(epicList);
    const item = document.createElement('li');
    item.innerText = message;
    epicList.appendChild(item);
}

function formatNumber(value) {
    return Number(value).toFixed(2);
}

function buildEpicImageUrl(dateString, imageName) {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    return `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${imageName}.jpg`;
}

function appendFrameCard(frame) {
    const item = document.createElement('li');
    item.className = 'data-card';

    const image = document.createElement('img');
    image.src = buildEpicImageUrl(frame.date, frame.image);
    image.alt = frame.caption;
    image.className = 'thumb-image';
    image.addEventListener('error', function () {
        image.remove();
        appendParagraph(item, translate('epic.imageUnavailable'));
    });

    item.appendChild(image);
    appendParagraph(item, frame.caption);
    appendParagraph(item, `${translate('epic.identifier')}: ${frame.identifier}`);
    appendParagraph(item, `${translate('epic.time')}: ${frame.date}`);
    appendParagraph(item, `${translate('epic.centroid')}: ${formatNumber(frame.centroid_coordinates.lat)}°, ${formatNumber(frame.centroid_coordinates.lon)}°`);
    epicList.appendChild(item);
}

async function loadEpicFeed() {
    epicStatus.innerText = translate('epic.fetching');

    try {
        const response = await fetch(EPIC_METADATA_URL);

        if (!response.ok) {
            throw new Error('Unable to load feed');
        }

        const data = await response.json();
        renderEpicFeed(data);
        epicStatus.innerText = translate('epic.feedOnline');
    } catch (error) {
        epicDate.innerText = translate('epic.feedUnavailable');
        epicCount.innerText = '-';
        epicLat.innerText = '-';
        epicLon.innerText = '-';
        setFeedMessage(translate('epic.unavailable'));
        epicStatus.innerText = translate('epic.requestFailed');
    }
}

function renderEpicFeed(frames) {
    clearElement(epicList);

    if (!frames.length) {
        epicDate.innerText = translate('epic.noData');
        epicCount.innerText = '0';
        epicLat.innerText = '-';
        epicLon.innerText = '-';
        setFeedMessage(translate('epic.noFrames'));
        return;
    }

    const firstFrame = frames[0];
    epicDate.innerText = firstFrame.date;
    epicCount.innerText = String(frames.length);
    epicLat.innerText = formatNumber(firstFrame.centroid_coordinates.lat);
    epicLon.innerText = formatNumber(firstFrame.centroid_coordinates.lon);

    frames.forEach(appendFrameCard);
}

if (refreshEpicButton) {
    refreshEpicButton.addEventListener('click', loadEpicFeed);
}

loadEpicFeed();

document.addEventListener('vitspace:languagechange', loadEpicFeed);
