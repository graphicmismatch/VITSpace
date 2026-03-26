const schwarzschildRadiusCalc = document.getElementById('SchwarzschildRadiusCalc');
const specialRelativityCalc = document.getElementById('SpecialRelativityCalc');
const gravitationalTimeDilationCalc = document.getElementById('GravitationalTimeDilationCalc');
var translate = window.VITSPACE_I18N.t;

const SPEED_OF_LIGHT = 299792458;

if (schwarzschildRadiusCalc) {
    schwarzschildRadiusCalc.addEventListener('submit', handleSchwarzschildRadius);
}

if (specialRelativityCalc) {
    specialRelativityCalc.addEventListener('submit', handleSpecialRelativity);
}

if (gravitationalTimeDilationCalc) {
    gravitationalTimeDilationCalc.addEventListener('submit', handleGravitationalTimeDilation);
}

function scientificValue(baseId, exponentId) {
    const base = Number(document.getElementById(baseId).value);
    const exponent = Number(document.getElementById(exponentId).value);
    return base * (10 ** exponent);
}

function validPositive(values) {
    return values.every((value) => Number.isFinite(value) && value > 0);
}

function formatScientific(value, digits = 4) {
    return value.toExponential(digits);
}

function handleSchwarzschildRadius(event) {
    event.preventDefault();

    const gravitationalConstant = scientificValue('srG', 'srGe');
    const mass = scientificValue('srM', 'srMe');

    if (!validPositive([gravitationalConstant, mass])) {
        document.getElementById('schwarzschildRadiusRes').innerText = translate('relativity.schwarzschildError');
        return;
    }

    const radius = (2 * gravitationalConstant * mass) / (SPEED_OF_LIGHT ** 2);
    document.getElementById('schwarzschildRadiusRes').innerHTML = `${translate('relativity.schwarzschildResult')} ${formatScientific(radius)} m`;
}

function handleSpecialRelativity(event) {
    event.preventDefault();

    const beta = Number(document.getElementById('tdBeta').value);
    const properTime = Number(document.getElementById('tdProper').value);

    if (!Number.isFinite(beta) || beta < 0 || beta >= 1 || !validPositive([properTime])) {
        document.getElementById('specialRelativityRes').innerText = translate('relativity.specialError');
        return;
    }

    const gamma = 1 / Math.sqrt(1 - (beta ** 2));
    const dilatedTime = gamma * properTime;

    document.getElementById('specialRelativityRes').innerText = `${translate('relativity.specialResult')} ${dilatedTime.toFixed(6)} s | ${translate('relativity.lorentzFactor')}: ${gamma.toFixed(6)}`;
}

function handleGravitationalTimeDilation(event) {
    event.preventDefault();

    const gravitationalConstant = scientificValue('gtG', 'gtGe');
    const mass = scientificValue('gtM', 'gtMe');
    const radius = scientificValue('gtR', 'gtRe');
    const coordinateTime = Number(document.getElementById('gtT').value);

    if (!validPositive([gravitationalConstant, mass, radius, coordinateTime])) {
        document.getElementById('gravitationalTimeDilationRes').innerText = translate('relativity.gravitationalError');
        return;
    }

    const schwarzschildFactor = 1 - ((2 * gravitationalConstant * mass) / (radius * (SPEED_OF_LIGHT ** 2)));

    if (schwarzschildFactor <= 0) {
        document.getElementById('gravitationalTimeDilationRes').innerText = translate('relativity.gravitationalRadiusError');
        return;
    }

    const properTime = coordinateTime * Math.sqrt(schwarzschildFactor);
    const rate = properTime / coordinateTime;

    document.getElementById('gravitationalTimeDilationRes').innerText = `${translate('relativity.gravitationalResult')} ${properTime.toFixed(6)} s | ${translate('relativity.clockRate')}: ${rate.toFixed(9)}x`;
}
