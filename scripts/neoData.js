const neoWindow = document.getElementById('neoWindow');
const neoCount = document.getElementById('neoCount');
const neoHazards = document.getElementById('neoHazards');
const neoStatus = document.getElementById('neoStatus');
const neoList = document.getElementById('neoList');
const refreshNeoButton = document.getElementById('refreshNeo');
const neoPagination = document.getElementById('neoPagination');
const neoPrevPageButton = document.getElementById('neoPrevPage');
const neoNextPageButton = document.getElementById('neoNextPage');
const neoPageInfo = document.getElementById('neoPageInfo');
var translate = window.VITSPACE_I18N.t;

const NEO_PAGE_SIZE = 10;

let neoObjects = [];
let neoCurrentPage = 1;

function formatDate(date) {
    return date.toISOString().slice(0, 10);
}

function formatNumber(value) {
    return Number(value).toLocaleString('en-US', {
        maximumFractionDigits: 2
    });
}

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

function setListMessage(message) {
    clearElement(neoList);
    const item = document.createElement('li');
    item.innerText = message;
    neoList.appendChild(item);
}

function updatePagination(totalObjects) {
    const totalPages = Math.max(1, Math.ceil(totalObjects / NEO_PAGE_SIZE));
    const hasPages = totalObjects > 0;

    if (neoPagination) {
        neoPagination.hidden = !hasPages;
    }

    if (neoPageInfo) {
        neoPageInfo.innerText = hasPages ? translate('neo.pageInfo', {
            current: neoCurrentPage,
            total: totalPages
        }) : translate('neo.emptyPageInfo');
    }

    if (neoPrevPageButton) {
        neoPrevPageButton.disabled = !hasPages || neoCurrentPage <= 1;
    }

    if (neoNextPageButton) {
        neoNextPageButton.disabled = !hasPages || neoCurrentPage >= totalPages;
    }
}

function renderNeoPage() {
    clearElement(neoList);

    if (!neoObjects.length) {
        setListMessage(translate('neo.noData'));
        updatePagination(0);
        return;
    }

    const startIndex = (neoCurrentPage - 1) * NEO_PAGE_SIZE;
    const pageObjects = neoObjects.slice(startIndex, startIndex + NEO_PAGE_SIZE);

    pageObjects.forEach(function (object) {
        const approach = object.close_approach_data[0];
        const diameter = object.estimated_diameter.kilometers;
        const card = document.createElement('li');
        card.className = 'data-card';
        appendParagraph(card, object.name);
        appendParagraph(card, `${translate('neo.closeApproach')}: ${approach.close_approach_date_full || approach.close_approach_date}`);
        appendParagraph(card, `${translate('neo.velocity')}: ${formatNumber(approach.relative_velocity.kilometers_per_second)} km/s`);
        appendParagraph(card, `${translate('neo.missDistance')}: ${formatNumber(approach.miss_distance.kilometers)} km`);
        appendParagraph(card, `${translate('neo.estimatedDiameter')}: ${translate('neo.rangeBetween', {
            min: formatNumber(diameter.estimated_diameter_min),
            max: formatNumber(diameter.estimated_diameter_max)
        })}`);
        appendParagraph(card, `${translate('neo.hazardStatus')}: ${object.is_potentially_hazardous_asteroid ? translate('neo.hazardPotential') : translate('neo.hazardLow')}`);
        neoList.appendChild(card);
    });

    updatePagination(neoObjects.length);
}

function buildWindow() {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + 2);

    return {
        start: formatDate(startDate),
        end: formatDate(endDate)
    };
}

async function loadNeoFeed() {
    const windowRange = buildWindow();
    neoWindow.innerText = translate('neo.windowRange', {
        start: windowRange.start,
        end: windowRange.end
    });
    neoStatus.innerText = translate('neo.fetching');

    try {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${windowRange.start}&end_date=${windowRange.end}&api_key=DEMO_KEY`);

        if (!response.ok) {
            throw new Error('Unable to load feed');
        }

        const data = await response.json();
        renderNeoFeed(data);
        neoStatus.innerText = translate('neo.feedOnline');
    } catch (error) {
        neoCount.innerText = '-';
        neoHazards.innerText = '-';
        setListMessage(translate('neo.unavailable'));
        neoStatus.innerText = translate('neo.requestFailed');
    }
}

function renderNeoFeed(data) {
    const groups = Object.values(data.near_earth_objects || {});
    const objects = groups.flat().sort(function (firstObject, secondObject) {
        const firstTime = firstObject.close_approach_data[0].epoch_date_close_approach;
        const secondTime = secondObject.close_approach_data[0].epoch_date_close_approach;
        return firstTime - secondTime;
    });

    const hazardCount = objects.filter(function (object) {
        return object.is_potentially_hazardous_asteroid;
    }).length;

    neoCount.innerText = String(objects.length);
    neoHazards.innerText = String(hazardCount);
    neoObjects = objects;
    neoCurrentPage = 1;
    renderNeoPage();
}

if (refreshNeoButton) {
    refreshNeoButton.addEventListener('click', loadNeoFeed);
}

if (neoPrevPageButton) {
    neoPrevPageButton.addEventListener('click', function () {
        if (neoCurrentPage > 1) {
            neoCurrentPage -= 1;
            renderNeoPage();
        }
    });
}

if (neoNextPageButton) {
    neoNextPageButton.addEventListener('click', function () {
        const totalPages = Math.ceil(neoObjects.length / NEO_PAGE_SIZE);
        if (neoCurrentPage < totalPages) {
            neoCurrentPage += 1;
            renderNeoPage();
        }
    });
}

loadNeoFeed();

document.addEventListener('vitspace:languagechange', function () {
    loadNeoFeed();
});
