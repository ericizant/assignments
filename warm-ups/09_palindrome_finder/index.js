let isPalindrome = function (str) {
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
