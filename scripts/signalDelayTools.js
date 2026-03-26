const oneWaySignalDelayCalc = document.getElementById('OneWaySignalDelayCalc');
const roundTripSignalDelayCalc = document.getElementById('RoundTripSignalDelayCalc');
var translate = window.VITSPACE_I18N.t;

if (oneWaySignalDelayCalc) {
    oneWaySignalDelayCalc.addEventListener('submit', handleOneWaySignalDelay);
}

if (roundTripSignalDelayCalc) {
    roundTripSignalDelayCalc.addEventListener('submit', handleRoundTripSignalDelay);
}

function readScientificNumber(baseId, exponentId) {
    const base = Number(document.getElementById(baseId).value);
    const exponent = Number(document.getElementById(exponentId).value);
    return base * (10 ** exponent);
}

function formatSeconds(seconds) {
    if (seconds < 60) {
        return `${seconds.toFixed(2)} ${translate('signal.secondUnit')}`;
    }

    if (seconds < 3600) {
        return `${(seconds / 60).toFixed(2)} ${translate('signal.minuteUnit')}`;
    }

    if (seconds < 86400) {
        return `${(seconds / 3600).toFixed(2)} ${translate('signal.hourUnit')}`;
    }

    return `${(seconds / 86400).toFixed(2)} ${translate('signal.dayUnit')}`;
}

function handleOneWaySignalDelay(event) {
    event.preventDefault();

    const distance = readScientificNumber('owD', 'owDe');
    const signalSpeed = readScientificNumber('owC', 'owCe');
    const delay = distance / signalSpeed;

    document.getElementById('oneWayDelayRes').innerText = `${translate('signal.oneWayResult')} ${formatSeconds(delay)}`;
}

function handleRoundTripSignalDelay(event) {
    event.preventDefault();

    const distance = readScientificNumber('rtD', 'rtDe');
    const signalSpeed = readScientificNumber('rtC', 'rtCe');
    const delay = (distance / signalSpeed) * 2;

    document.getElementById('roundTripDelayRes').innerText = `${translate('signal.roundTripResult')} ${formatSeconds(delay)}`;
}
