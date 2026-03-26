const escapeVelocityCalc = document.getElementById('EscapeVelocityCalc');
const surfaceGravityCalc = document.getElementById('SurfaceGravityCalc');
var translate = window.VITSPACE_I18N.t;

if (escapeVelocityCalc) {
    escapeVelocityCalc.addEventListener('submit', handleEscapeVelocity);
}

if (surfaceGravityCalc) {
    surfaceGravityCalc.addEventListener('submit', handleSurfaceGravity);
}

function scientificValue(baseId, exponentId) {
    const base = Number(document.getElementById(baseId).value);
    const exponent = Number(document.getElementById(exponentId).value);
    return base * (10 ** exponent);
}

function formatScientific(value, unit) {
    return `${value.toExponential(4)} ${unit}`;
}

function handleEscapeVelocity(event) {
    event.preventDefault();

    const gravitationalConstant = scientificValue('evG', 'evGe');
    const mass = scientificValue('evM', 'evMe');
    const radius = scientificValue('evR', 'evRe');
    const escapeVelocity = Math.sqrt((2 * gravitationalConstant * mass) / radius);

    document.getElementById('escapeVelocityRes').innerHTML = `${translate('escape.escapeVelocityResult')} ${formatScientific(escapeVelocity, 'm s<sup>-1</sup>')}`;
}

function handleSurfaceGravity(event) {
    event.preventDefault();

    const gravitationalConstant = scientificValue('sgG', 'sgGe');
    const mass = scientificValue('sgM', 'sgMe');
    const radius = scientificValue('sgR', 'sgRe');
    const surfaceGravity = (gravitationalConstant * mass) / (radius ** 2);

    document.getElementById('surfaceGravityRes').innerHTML = `${translate('escape.surfaceGravityResult')} ${formatScientific(surfaceGravity, 'm s<sup>-2</sup>')}`;
}
