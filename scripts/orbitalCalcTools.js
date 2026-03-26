const orbitSpeedCalc = document.getElementById('OrbitalSpeedCalc');
const orbitPeriodCalc = document.getElementById('OrbitalPeriodCalc');
var translate = window.VITSPACE_I18N.t;

if (orbitSpeedCalc) {
    orbitSpeedCalc.addEventListener('submit', function (event) {
        handleSpeed(event);
    });
}

if (orbitPeriodCalc) {
    orbitPeriodCalc.addEventListener('submit', function (event) {
        handlePeriod(event);
    });
}

function handleSpeed(event) {
    event.preventDefault();
    const height = document.getElementById('scH').value;
    const hExp = document.getElementById('scHe').value;
    const gravitationalConstant = document.getElementById('scG').value;
    const gExp = document.getElementById('scGe').value;
    const mass = document.getElementById('scM').value;
    const massExp = document.getElementById('scMe').value;
    const radius = document.getElementById('scR').value;
    const radiusExp = document.getElementById('scRe').value;

    const heightValue = height * (10 ** hExp);
    const gValue = gravitationalConstant * (10 ** gExp);
    const massValue = mass * (10 ** massExp);
    const radiusValue = radius * (10 ** radiusExp);
    const speed = Math.sqrt((gValue * massValue) / (radiusValue + heightValue));

    document.getElementById('speedCalcRes').innerHTML = `${translate('orbital.speedResult')} ${speed} m s<sup>-1</sup>`;
}

function handlePeriod(event) {
    event.preventDefault();
    const height = document.getElementById('pcH').value;
    const hExp = document.getElementById('pcHe').value;
    const gravitationalConstant = document.getElementById('pcG').value;
    const gExp = document.getElementById('pcGe').value;
    const mass = document.getElementById('pcM').value;
    const massExp = document.getElementById('pcMe').value;
    const radius = document.getElementById('pcR').value;
    const radiusExp = document.getElementById('pcRe').value;

    const heightValue = height * (10 ** hExp);
    const gValue = gravitationalConstant * (10 ** gExp);
    const massValue = mass * (10 ** massExp);
    const radiusValue = radius * (10 ** radiusExp);
    const period = 2 * Math.PI * Math.sqrt((radiusValue + heightValue) ** 3 / (gValue * massValue));

    document.getElementById('periodCalcRes').innerHTML = `${translate('orbital.periodResult')} ${period} s`;
}
