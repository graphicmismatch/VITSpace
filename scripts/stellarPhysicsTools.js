const wienPeakCalc = document.getElementById('WienPeakCalc');
const stellarLuminosityCalc = document.getElementById('StellarLuminosityCalc');
const radiativeFluxCalc = document.getElementById('RadiativeFluxCalc');
var translate = window.VITSPACE_I18N.t;

const WIEN_DISPLACEMENT_CONSTANT = 2.897771955e-3;
const STEFAN_BOLTZMANN_CONSTANT = 5.670374419e-8;
const SOLAR_LUMINOSITY = 3.828e26;

if (wienPeakCalc) {
    wienPeakCalc.addEventListener('submit', handleWienPeak);
}

if (stellarLuminosityCalc) {
    stellarLuminosityCalc.addEventListener('submit', handleStellarLuminosity);
}

if (radiativeFluxCalc) {
    radiativeFluxCalc.addEventListener('submit', handleRadiativeFlux);
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

function handleWienPeak(event) {
    event.preventDefault();

    const temperature = Number(document.getElementById('wpT').value);

    if (!validPositive([temperature])) {
        document.getElementById('wienPeakRes').innerText = translate('stellar.wienError');
        return;
    }

    const peakWavelengthMeters = WIEN_DISPLACEMENT_CONSTANT / temperature;
    const peakWavelengthNanometers = peakWavelengthMeters * 1e9;

    document.getElementById('wienPeakRes').innerHTML = `${translate('stellar.peakResult')} ${peakWavelengthNanometers.toFixed(2)} nm | ${formatScientific(peakWavelengthMeters)} m`;
}

function handleStellarLuminosity(event) {
    event.preventDefault();

    const radius = scientificValue('slR', 'slRe');
    const temperature = Number(document.getElementById('slT').value);

    if (!validPositive([radius, temperature])) {
        document.getElementById('stellarLuminosityRes').innerText = translate('stellar.luminosityError');
        return;
    }

    const luminosity = 4 * Math.PI * (radius ** 2) * STEFAN_BOLTZMANN_CONSTANT * (temperature ** 4);
    const solarUnits = luminosity / SOLAR_LUMINOSITY;

    document.getElementById('stellarLuminosityRes').innerHTML = `${translate('stellar.luminosityResult')} ${formatScientific(luminosity)} W | ${solarUnits.toFixed(4)} L<sub>sun</sub>`;
}

function handleRadiativeFlux(event) {
    event.preventDefault();

    const luminosity = scientificValue('rfL', 'rfLe');
    const distance = scientificValue('rfD', 'rfDe');

    if (!validPositive([luminosity, distance])) {
        document.getElementById('radiativeFluxRes').innerText = translate('stellar.fluxError');
        return;
    }

    const flux = luminosity / (4 * Math.PI * (distance ** 2));
    document.getElementById('radiativeFluxRes').innerHTML = `${translate('stellar.fluxResult')} ${formatScientific(flux)} W m<sup>-2</sup>`;
}
