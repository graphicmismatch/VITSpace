const apodTitle = document.getElementById('apodTitle');
const apodDate = document.getElementById('apodDate');
const apodCopyright = document.getElementById('apodCopyright');
const apodStatus = document.getElementById('apodStatus');
const apodExplanation = document.getElementById('apodExplanation');
const apodMedia = document.getElementById('apodMedia');
const refreshApodButton = document.getElementById('refreshApod');
var translate = window.VITSPACE_I18N.t;

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function setMediaFallback(message) {
    clearElement(apodMedia);
    const fallback = document.createElement('p');
    fallback.innerText = message;
    apodMedia.appendChild(fallback);
}

async function loadApod() {
    apodStatus.innerText = translate('apod.fetching');

    try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&thumbs=true');

        if (!response.ok) {
            throw new Error('Unable to load feed');
        }

        const data = await response.json();
        renderApod(data);
        apodStatus.innerText = translate('apod.feedOnline');
    } catch (error) {
        apodTitle.innerText = translate('apod.feedUnavailable');
        apodDate.innerText = '-';
        apodCopyright.innerText = '-';
        apodExplanation.innerText = translate('apod.descriptionUnavailable');
        setMediaFallback(translate('apod.mediaUnavailable'));
        apodStatus.innerText = translate('apod.requestFailed');
    }
}

function renderApod(data) {
    apodTitle.innerText = data.title;
    apodDate.innerText = data.date;
    apodCopyright.innerText = data.copyright || translate('apod.publicDomain');
    apodExplanation.innerText = data.explanation;
    clearElement(apodMedia);

    if (data.media_type === 'image') {
        const image = document.createElement('img');
        image.src = data.url;
        image.alt = data.title;
        apodMedia.appendChild(image);
        return;
    }

    const frame = document.createElement('iframe');
    frame.src = data.url;
    frame.title = data.title;
    frame.allowFullscreen = true;
    apodMedia.appendChild(frame);
}

if (refreshApodButton) {
    refreshApodButton.addEventListener('click', loadApod);
}

loadApod();

document.addEventListener('vitspace:languagechange', function () {
    loadApod();
});
