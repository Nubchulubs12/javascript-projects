// const { describe } = require("node:test");
// const { default: test } = require('node:test');
const isPalindrome = require('../palindrome.js');

describe("testing isPalindrome", function(){
test("Should return false for a single letter.", function() {
    expect(isPalindrome("ab")).toBe(false);
});
test("should return false for a simple non-palindrome", function(){
    expect(isPalindrome("lauchcode")).toBe(false);
});
test("should be case-sensitive", function(){
    expect(isPalindrome("abA")).toBe(false);
});
test("should consider a whitespace", function() {
    expect(isPalindrome("so many dynamos")).toBe(false);
});
test("should consider the empty string a palindrome", function() {
    expect(isPalindrome("")).toBe(true);
});
});