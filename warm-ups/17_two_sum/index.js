// Two Sum

// Given an array of integers and a target integer, return the indices of the two numbers which add up to the target.

// Assume there is exactly one solution, and that the same element may not be used twice.

// twoSum([1,2,3], 4);
//returns [0, 2] because 1 + 3 equals 4


twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([1, 2, 3], 4));