// Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % 'mod' operator computes remainders,so 17 % 10 is 7.

function shareDigits(int1, int2) {
    return int1 % 10 === int2 % 10;
}

console.log(shareDigits(27, 57));