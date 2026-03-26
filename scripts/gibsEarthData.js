const gibsLayer = document.getElementById('gibsLayer');
const gibsDate = document.getElementById('gibsDate');
const gibsProjection = document.getElementById('gibsProjection');
const gibsCoverage = document.getElementById('gibsCoverage');
const gibsStatus = document.getElementById('gibsStatus');
const gibsMedia = document.getElementById('gibsMedia');
const refreshGibsButton = document.getElementById('refreshGibs');
var translate = window.VITSPACE_I18N.t;

const GIBS_LAYER = 'MODIS_Terra_CorrectedReflectance_TrueColor';
const GIBS_BASE_URL = 'https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi';

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function isoDateString(date) {
    return date.toISOString().slice(0, 10);
}

function buildGibsUrl(dateString) {
    const query = new URLSearchParams({
        service: 'WMS',
        request: 'GetMap',
        version: '1.1.1',
        layers: GIBS_LAYER,
        styles: '',
        format: 'image/jpeg',
        transparent: 'false',
        width: '1024',
        height: '512',
        srs: 'EPSG:4326',
        bbox: '-180,-90,180,90',
        time: dateString
    });

    return `${GIBS_BASE_URL}?${query.toString()}`;
}

function setFeedFallback(message) {
    clearElement(gibsMedia);
    const text = document.createElement('p');
    text.innerText = message;
    gibsMedia.appendChild(text);
}

function renderGibsImage(dateString) {
    gibsLayer.innerText = translate('gibs.layerValue');
    gibsDate.innerText = dateString;
    gibsProjection.innerText = 'EPSG:4326';
    gibsCoverage.innerText = translate('gibs.coverageValue');
    gibsStatus.innerText = translate('gibs.loadingImagery');

    clearElement(gibsMedia);

    const image = document.createElement('img');
    image.src = buildGibsUrl(dateString);
    image.alt = translate('gibs.alt', {
        date: dateString
    });

    image.addEventListener('load', function () {
        gibsStatus.innerText = translate('gibs.feedOnline');
    });

    image.addEventListener('error', function () {
        setFeedFallback(translate('gibs.unavailable'));
        gibsStatus.innerText = translate('gibs.requestFailed');
    });

    gibsMedia.appendChild(image);
}

function loadGibsFeed() {
    const imageryDate = new Date();
    imageryDate.setUTCDate(imageryDate.getUTCDate() - 1);
    renderGibsImage(isoDateString(imageryDate));
}

if (refreshGibsButton) {
    refreshGibsButton.addEventListener('click', loadGibsFeed);
}

loadGibsFeed();

document.addEventListener('vitspace:languagechange', loadGibsFeed);
