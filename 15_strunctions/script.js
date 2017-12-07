// "It's like a function but for strings!" - Dan Hitt

// Let's Practice String Methods.

// Implement all of the listed String Methods below using at least 3 unique Functions.

// String Methods

// .concat()

var str1 = "Hello "
var str2 = "World!"

var fullStr = str1.concat(str2);

console.log(fullStr);

// .indexOf()

var str = "Hello World!"

var letterIndex = str.indexOf("e");

console.log(letterIndex);

// .lastIndexOf()

var str = "Hello World!";

var revLetterIndex = str.lastIndexOf("e", "o");

console.log(revLetterIndex);

// .match()

var str = "Hello World!"

var matchStr = str.match("ll");

console.log(matchStr);

// .replace()

var matchRegex = function (inputStr, pattern) {
    return inputStr.match(pattern);
}

console.log(matchRegex("abcdefghijklmnopqrstuvwxyz", /abc/));

// .slice()

var str = "Hello World!";

var sliceStr = str.slice(1, 5);

console.log(sliceStr);

// // .split()

var str = "Hello there! I'm a talking parrot.";

var wordsStr = str.split(" ");

console.log(wordsStr);

// .toLowerCase()

var str = "HELLO THERE";

var lowerStr = str.toLowerCase();

console.log(lowerStr);

// .toUpperCase()

var str = "he's just a little fella";

var upperStr = str.toUpperCase();

console.log(upperStr);

// substr().

var str = "Goodbye!";

var someStr = str.substr(6, 7);

console.log(someStr);