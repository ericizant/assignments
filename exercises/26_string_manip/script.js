var ask = require("readline-sync");  

console.log("Hello! My name is Betty. Help me get to know you!\n");  

var firstName = ask.question("What is your first name?");

console.log("Hello " + firstName.toUpperCase() + "!");

var lastName = ask.question("What is your last name?");

console.log("Your last name, " + lastName + ", has " + lastName.length + " characters in it.");

var response = ask.keyInYN("Aren't I smart?");

if (response === true) {
    console.log("Thank you, " + firstName + ". You are very kind.");
} else {
    console.log("You are a fucking jerk, " + firstName + ".");
}

var fullName = firstName.concat(" ", lastName);

console.log("\nSo, your full name is: " + fullName);

var about = ask.question("Tell me a little bit about yourself!");

function checkLength(str) {
    if (str.length > 20) {
        return str.slice(Math.floor(about.length / 2));
    } else {
        return str;
    }
}

console.log(("So, just to make sure I understood everything you wrote, you said: ") + about.slice(Math.floor(about.length / 2)));

var response2 = ask.keyInYN("Did I get your entire answer right?");

if (response2 === true) {
    console.log("\Thank you for your kindness. I may be a computer but sometimes I have BAD MEMORY.");
} else {
    console.log("\nMy apologies. I may be a computer but sometimes I have BAD MEMORY. I will check your answer again.")
    var response3 = ask.keyInYN("\nIs this correct?: " + about);
}

var about2 = ask.question("Wow, that answer is a little too long for my BAD MEMORY.\nHow about I shorten it for you? Where would you like me to begin your response (give me a number beween 1 and " + about.length + ".");

console.log("Okay, here is your shortened message: " + about.slice(about2-1));