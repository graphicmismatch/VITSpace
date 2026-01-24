const orbitSpeedCalc = document.getElementById('OrbitalSpeedCalc');
const orbitSpeedCalcOutputArea = document.getElementById('speedCalcRes');
 
const orbitPeriodCalc = document.getElementById('OrbitalPeriodCalc');
const orbitPeriodCalcOutputArea = document.getElementById('periodCalcRes');
 
orbitSpeedCalc.addEventListener('submit', function (event) {
    handleSpeed(event);
});
orbitPeriodCalc.addEventListener('submit', function (event) {
    handlePeriod(event);
});
 
function handleSpeed(event){
	event.preventDefault();
	const height = document.getElementById('spheight');
 
}