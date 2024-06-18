// Initialize Variables below
let date = "Monday 2019-03-18";
console.log(date);
let time = ("10:05:34");
console.log(time);
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = ("100%");
let weatherStatus = "clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7){
    console.log("Astronaut Count: " + astronautCount);
} else {
    console.log("Launch operations shut down.");
} 
// add logic below to verify all astronauts are ready
if (astronautStatus !== "ready"){
    preparedForLiftOff == false
} 
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit){
    preparedForLiftOff == true
} else {
    preparedForLiftOff == false
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > -300 || fuelTempCelsius < -150){
    preparedForLiftOff == true
} else {
    preparedForLiftOff == false
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel = "100%"){
    preparedForLiftOff == true
} else {
    preparedForLiftOff == false
}
// add logic below to verify the weather status is clear
if (weatherStatus = "clear"){
    preparedForLiftOff == true
} else {
    preparedForLiftOff == false
}
// Verify shuttle launch can proceed based on above conditions


console.log("Crew Mass: " + crewMassKg +" kg");
console.log("Fuel Mass: " + fuelMassKg + " kg");
console.log("Shuttle Mass: " + shuttleMassKg + " kg");
console.log("Total Mass: " + totalMassKg + " kg");
console.log("Fuel Temperature: " + fuelTempCelsius + " °C");
console.log("Weather Status: " + weatherStatus)
if (preparedForLiftOff == true){
    console.log("Have a safe trip astronauts! ☺☻");
} else{
console.log("Launch operations shut down!");
}
