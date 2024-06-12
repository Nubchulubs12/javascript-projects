// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below
let spaceShuttle = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMars = 225000000;
let distanceToTheMoon = 384400;
const MilesPerKilometer = 0.621;
console.log(typeof(spaceShuttle));
console.log(typeof(shuttleSpeed));
console.log(typeof(distanceToMars));
console.log(typeof(distanceToTheMoon));
console.log(typeof(MilesPerKilometer));

let milesToMars = distanceToMars * MilesPerKilometer;
console.log(milesToMars);

let hoursToMars = milesToMars / shuttleSpeedMph;
console.log(hoursToMars);

let daysToMars = hoursToMars / 24;
console.log(daysToMars);

console.log((spaceShuttle) + " will take " + (daysToMars) + "days to reach Mars.");

let milesToTheMoon = distanceToTheMoon * MilesPerKilometer;
console.log(milesToTheMoon);

let hoursToMoon = milesToTheMoon / shuttleSpeedMph;
console.log(hoursToMoon);

let dayToMoon = hoursToMoon /24;
console.log(dayToMoon);

console.log((spaceShuttle) + " will take " + (dayToMoon) + "days to reach the Moon.");