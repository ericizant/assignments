// If Statement Olympics
// The exercise will get progressively harder and hard. You at least should get one medal, but feel free to go the extra mile!
// Also, feel free to practice using ternary statements for extra credit too!

// Preliminaries

// 1. Write an if statement that prints "is greater than" if 5 is greater than 3.

if (5 > 3) {
    console.log("is greater than");
}

// 2. Write an if statement that prints "is the length" if the length of "cat" is 3.

    // Easy Solution:

if ("cat" === 3) {
    console.log("is the length of");
} else {
    console.log("no")
}

    // Hard Solution:

var str = "cat";

if (str.length === 3) {
    console.log("is the length of");
} else {
    console.log("no")
}

// 3. Write an if/else statement that checks if "cat"  is equal to "dog" and prints, "not the same" when they are not equal.

if ("cat" === "dog") {
    console.log("the same");
} else {
    console.log("not the same");
}

    // Alternative Solution with a Ternary Operator:

("cat" === "dog") ? console.log("the same") : console.log("not the same"); 

// Bronse Medal

// 1. Write an if statement that prints <theNameOfThePerson> + is allowed to go to the movie if they are old enough, and the opposite if they are not older than 18.

var person = {  
    name: "Bobby",
    age: 12
}

if (person.age < 18) {
    console.log(person.name + " is not allowed to go to the movie.");
} else {
    console.log(person.name + " is allowed to go to the movie.");
}

// 2. Using that same object, only allow them into the movie if their name starts with "B".

if (person.name.charAt(0) === "B") {
    console.log(person.name + " is allowed into the movie.");
} else {
    console.log(person.name + " is not allowed into the movie.");
}

// 3. Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.

if (person.age > 18 && person.name.charAt(0) === "B") {
    console.log(person.name + " is allowed into the movie.");
} else {
    console.log(person.name + " is not allowed into the movie.");
}

// Silver Medal

// 1. Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.

if (1 === "1") {
    console.log("strict");
} else if (1 == "1") {
    console.log("loose");
} else {
    console.log("not equal at all");
}

// 2. Write an if statement that prints "yes" if 1 is less than or equal to 2 and 2 is equal to 4.
// OR!!! 3 * 4 is greater than 10 and 5 plus 10 is greater than 10.

if (1 <= 2 && 2 === 4 || 3 * 4 > 10 && 5 + 10 > 10) {
    console.log("yes");
}

// Gold Medal
// Gold may take some googling!

// 1. Write an if statement that checks to see if "dog" is a string.

if (typeof "dog" === "string") {
    console.log("yes");
} else {
    console.log("no");
}

// 2. Write an if statement that checks to see if "true" is a boolean.

if (typeof true === 'boolean') {
    console.log("yes");
} else {
    console.log("no");
}

// 3. Write an if statement that checks to see if a variable has been defined or not.

if (typeof undefined === "person") {
    console.log("yes");
} else {
    console.log("no");
}

    // Alternative Solution #1:

if (person.speak !== undefined) {  
    console.log("value is defined");
}

console.log(person.speak);

    // Alternative Solution #2:

if (person.speak && person.speak()) {
    console.log("value is defined");
}

console.log(person.speak);

// 4. Write an if statement comparing letters to numbers using < and >. Try to figure out what letters are going to be "greater than" other numbers or letters.

var alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet.charCodeAt("a"));

if (alphabet.charCodeAt("a") > 100) {
    console.log("yes");
} else {
    console.log("no");
} 

// 5. Write a switch statement that returns a number spelled out ("seven" vs 7) for the numbers one through ten.

var convertNumber = function(number) {
switch (number) {  
    case 0:
        return "zero";
    case 1:
        return "one";
    case 2:
        return "two";
    case 3:
        return "three";
    case 4:
        return "four";
    case 5:
        return "five";
    case 6:
        return "six";
    case 7:
        return "seven";
    case 8:
        return "eight";
    case 9:
        return "nine";
    case 10:
       return "ten";
    default:
        return "Invalid number!";
    };
};

console.log(convertNumber(1));