// Write a function that takes two non-negative integers as arguments. Return whether they share the same last digit.

function shareDigits(int1, int2) {
    return int1 % 10 === int2 % 10;
}

console.log(shareDigits(27, 57));