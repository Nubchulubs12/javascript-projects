function reverse(str) {
   return str.split('').reverse().join('');
 }
 
 function isPalindrome(str) {
   return reverse(str) === str;
 }
 
 module.exports = isPalindrome;
 let oddNumbers = [1, 3, 5];
 let evenNumbers = oddNumbers.map(number => number * 2);