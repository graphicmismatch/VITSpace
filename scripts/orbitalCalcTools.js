const orbitSpeedCalc = document.getElementById('OrbitalSpeedCalc');
 
const orbitPeriodCalc = document.getElementById('OrbitalPeriodCalc');
 
orbitSpeedCalc.addEventListener('submit', function (event) {
    handleSpeed(event);
});
orbitPeriodCalc.addEventListener('submit', function (event) {
    handlePeriod(event);
});
 
function handleSpeed(event){
    event.preventDefault();
    const height = document.getElementById('scH').value;
    const hExp = document.getElementById('scHe').value;
        const G = document.getElementById('scG').value;
        const GExp = document.getElementById('scGe').value;
    
        const mass = document.getElementById('scM').value;
        const massExp = document.getElementById('scMe').value;
 
    const radius = document.getElementById('scR').value;
        const radiusExp = document.getElementById('scRe').value;
    const hval = height * (10 ** hExp);
    const Gval = G * (10 ** GExp);
    const mval = mass * (10**massExp);
    const rval = radius* (10**radiusExp);
 
    const val = Math.sqrt((Gval*mval)/(rval+hval));
    const formatted = "Orbital Speed: "+ val+"m s<sup>-1</sup>";
    document.getElementById('speedCalcRes').innerHTML = formatted;
}
 
function handlePeriod(event){
        event.preventDefault();
        const height = document.getElementById('pcH').value;
        const hExp = document.getElementById('pcHe').value;
        const G = document.getElementById('pcG').value;
        const GExp = document.getElementById('pcGe').value;
 
        const mass = document.getElementById('pcM').value;
        const massExp = document.getElementById('pcMe').value;
 
        const radius = document.getElementById('pcR').value;
        const radiusExp = document.getElementById('pcRe').value;
        const hval = height * (10 ** hExp);
        const Gval = G * (10 ** GExp);
        const mval = mass * (10**massExp);
        const rval = radius* (10**radiusExp);
 
        const val = 2* Math.PI* Math.sqrt((rval+hval)**3/(gval*mval));
        const formatted = "Orbital Period: "+ val+"s";
        document.getElementById('periodCalcRes').innerHTML = formatted;
}
