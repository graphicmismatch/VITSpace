const deltaVCalc = document.getElementById('DeltaVCalc');
const propellantFractionCalc = document.getElementById('PropellantFractionCalc');
var translate = window.VITSPACE_I18N.t;

if (deltaVCalc) {
    deltaVCalc.addEventListener('submit', handleDeltaV);
}

if (propellantFractionCalc) {
    propellantFractionCalc.addEventListener('submit', handlePropellantFraction);
}

function handleDeltaV(event) {
    event.preventDefault();

    const specificImpulse = Number(document.getElementById('dvIsp').value);
    const standardGravity = Number(document.getElementById('dvG').value);
    const initialMass = Number(document.getElementById('dvM0').value);
    const finalMass = Number(document.getElementById('dvMf').value);

    if (initialMass <= finalMass || finalMass <= 0) {
        document.getElementById('deltaVRes').innerText = translate('rocket.deltaVError');
        return;
    }

    const deltaV = specificImpulse * standardGravity * Math.log(initialMass / finalMass);
    document.getElementById('deltaVRes').innerText = `${translate('rocket.deltaVResult')} ${deltaV.toFixed(2)} m/s`;
}

function handlePropellantFraction(event) {
    event.preventDefault();

    const wetMass = Number(document.getElementById('pfWet').value);
    const dryMass = Number(document.getElementById('pfDry').value);

    if (wetMass <= dryMass || dryMass <= 0) {
        document.getElementById('propellantFractionRes').innerText = translate('rocket.propellantFractionError');
        return;
    }

    const propellantMass = wetMass - dryMass;
    const propellantFraction = (propellantMass / wetMass) * 100;
    document.getElementById('propellantFractionRes').innerText = `${translate('rocket.propellantFractionResult')} ${propellantFraction.toFixed(2)}% | ${translate('rocket.propellantMass')}: ${propellantMass.toFixed(2)} kg`;
}
