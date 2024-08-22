const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str2 = str.substring(3) + str.substring(0,3);
console.log(str2);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`we can take ${str} and make it into ${str2}.`);
//console.log(`I can take ${str} and make it into ${str2}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Enter a number here.")
let numchan = str.substring(userInput) + str.substring(0,userInput);
console.log(numchan);
if (userInput > str.length){
    console.log(`you have enterd a number thats to big ${str.substring(3) + str.substring(0,3)}`);
    
} else {
    str.substring(userInput) + str.substring(0,userInput);
}
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters.
// Also, the template literal should note the error.
// if (userInput < str.length){
//     console.log(str.substring(userInput) + str.substring(0,userInput));
// } else {
//     console.log(`You enered a number that doesnt work with the word. ${str2}`);
// }