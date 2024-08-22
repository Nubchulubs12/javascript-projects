const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator
// that ensures input starts with "a"
let isValidInput = function(letter) {
 
let vowel = ["a", "e", "i", "o","u"];
 
  return vowel.includes(letter[0]);

}






console.log(getValidInput( `enter name here that starts with an "A" : `, isValidInput));


// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code!
