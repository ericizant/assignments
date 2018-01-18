// Loop Olympics
// The exercise will get progressively harder and hard. You at least should get one medal, but feel free to go the extra mile!

// Preliminaries

// 1. Write a for loop that prints to the console the numbers 0 through 9.

for (i = 0; i <= 9; i++) {
    console.log(i);
}

// 2. Write a for loop that prints to the console 9 through 0.

for (i = 9; i >= 0; i--) {
    console.log(i);
}

// 3. Write a for loop that prints these fruits to the console.

var fruit = ["banana", "orange", "apple", "kiwi"]

for (i = 0; i <= 3; i++) {
    console.log(fruit[i]);
}

// Bronse Medal

// 1. Write a for loop that will push the numbers 0 through 9 to an array.

var arr = [];

for (i = 0; i <= 9; i++) {  
    (arr.push(i));
}

console.log(arr);

// 2. Write a for loop that prints to the console only even numbers 0 through 100.

for (i = 0; i <= 100; i += 2) {
    console.log(i);
}

// 3. Write a for loop that will push every other fruit to an array.

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var otherFruit = [];

for (var i = 0; i < fruit.length; i ++) {
    if (i % 2 === 0 ) {
        otherFruit.push(fruit[i]);
    }
}

console.log(otherFruit);

// Silver Medal

// Write a loop that will print out all the names of the people of the people array.

var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Beiber",
        occupation: "Singer"
    },
    {
        name: "Vladmir Putin",
        occupation: "Politition"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);
}

// Write a loop that pushes the names into a names array, and the occupations into an occupations array.

var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Beiber",
        occupation: "Singer"
    },
    {
        name: "Vladmir Putin",
        occupation: "Politition"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

var nameArr = [];
var occupationArr = [];

for (var i = 0; i < peopleArray.length; i ++) {
        nameArr.push(peopleArray[i].name);
        occupationArr.push(peopleArray[i].occupation);
}

console.log(nameArr, occupationArr);

// Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to an array starting with "Singer".

var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Beiber",
        occupation: "Singer"
    },
    {
        name: "Vladmir Putin",
        occupation: "Politition"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

var nameArr = [];
var occupationArr = [];

for (var i = 0; i < peopleArray.length; i ++) {
    if (i % 2 === 0 ) {
        nameArr.push(peopleArray[i].name);
    } else {
        occupationArr.push(peopleArray[i].occupation);
    }
}

console.log(nameArr, occupationArr);

// Gold Medal

// Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]

var grid = [[0, 0, 0]];

for (var i = 0; i < 2; i++) {
    grid.push([0, 0, 0]);
}

console.log(grid);

// 2.Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0],
// [1, 1, 1],
// [2, 2, 2]]

var grid = [[0, 0, 0]];

for (var i = 0; i < 2; i++) {
    grid.push([i + 1, i + 1, i + 1]);
}

console.log(grid);

// 3.Create an array that mimics a grid like the following using for loops:
// [[0, 1, 2],
// [0, 1, 2],
// [0, 1, 2]]

var grid = [[0, 1, 2]];

for (var i = 0; i < 2; i++) {
    grid.push([0, 1, 2]);
}

console.log(grid);

// 4. Given a grid like the previous ones, write a for loop that would change every number to an x.
// var grid = [[0, ...],
//             [0, ...],
//             [0,...], ...]

var grid = [[0, 1, 2]];
var x = ["x", "x", "x"];

for (var i = 0; i < 3; i++) {
    grid.splice(0, 3);
    grid.push(x, x, x);
}

console.log(grid);
