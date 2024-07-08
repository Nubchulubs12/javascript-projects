let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {return Math.floor(Math.random()*11)}
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 3,
   move: function() {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Dj",
   species: "Chimpanzee",
   mass: 10,
   age: 7,
   astronautID: 4,
   move: function() {return Math.floor(Math.random()*11)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 5,
   move: function() {return Math.floor(Math.random()*11)}
};
// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];
// Print out the relevant information about each animal.
function crewReports(array){
   for(item in array){
      console.log(`${array[item].name} is a ${array[item].species}. They are ${array[item].age} years old and ${array[item].mass} kilograms. Their ID is ${array[item].astronautID}.`)
   }
}
//crewReports(crew);
//console.log(crewReports(crew));
// Start an animal race!
function fitnessTest(animal){
   let results = [], numStep, turns;
   for(i = 0; i < animal.length; i++){
      turns = 0;
      numStep = 0;
      while(numStep < 20){
         numStep += animal[i].move();
         turns++;
      }
      results.push(`${animal[i].name} took ${turns} turns to take 20 steps.`);
   }

   return results;
}
console.log(fitnessTest(crew));