//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuel = 0;
let numAstronauts = 0;
let shipAltitude = 0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
const input = require("readline-sync");

while (fuel <= 5000 || fuel >= 30000 ) {
  fuel = input.question("Enter starting fuel level here.");
}





//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
while (numAstronauts <= 0 || numAstronauts >= 8) {
  numAstronauts = input.question("Enter the amount of Astronauts on the space shuttle.");
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (fuel-100*numAstronauts >= 0) {
  shipAltitude += 50;
  fuel -= 100*numAstronauts;
  
  }
 
/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
let output = (`The shuttle gained an altitude of ${shipAltitude}km.`);

if (shipAltitude >= 2000){
  output += " Orbit achieved!!";
} else {
  output += " Failed to reach orbit.";
}
console.log(output);