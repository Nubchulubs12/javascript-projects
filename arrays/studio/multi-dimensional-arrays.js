let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
const input = require('readline-sync');
//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinet = food.split(",").sort();
// console.log(cabinet);

let cab2 = equipment.split(",").sort();
let cab3 = pets.split(",").sort();
let cab4 = sleepAids.split(",").sort();




//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinet, cab2, cab3, cab4];
// console.log(cargoHold[1]);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
userInput = input.question("Pick a cabinet 0-3. ");

if(userInput <= 3){
    console.log(`heres you cabinet you have chosen. ${cargoHold[userInput]}`);
} else {
    console.log("error cabinet not available!")
}
userInput2 = input.question("now pick an item ")
if (!cargoHold[userInput].includes(userInput2)){
    return console.log("that is not in the cabinet.")
} else {
    console.log(`Heres what you have picked: ${userInput2}`);
}
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number
//, print an error message.

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' 
//method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
