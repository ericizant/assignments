// Palindrome Finder

// Write a function that accepts a string as an argument and returns true if the string is a palindrome (the string is the same forward and backward), or false if it is not.

// A string is still considered a palindrome despite letter capitalization, spaces, or punctuation.

// E.g.:

// isPalindrome("Star Rats!");  // true
// isPalindrome("palindrome");  // false
// isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");  // true

let isPalindrome = function(str) {
    let re = /[^A-Za-z0-9]/g;
    let lowRegStr = str.toLowerCase().replace(re, "");
    let reverseStr = lowRegStr.split("").reverse().join("");
    return reverseStr === lowRegStr;
}

console.log(isPalindrome("race car"));
console.log(isPalindrome("not a palindrome"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("never odd or even"));
console.log(isPalindrome("nope"));
console.log(isPalindrome("My age is 0, 0 si ega ym"));
console.log(isPalindrome("1 eye for of 1 eye"));
console.log(isPalindrome("“0_0 (: /-\ :) 0–0”"));