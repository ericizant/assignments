function javaCalc(firstNum, secondNum) {

    var ask = require("readline-sync")

    var firstNum = ask.question("What is your first number?");

    var secondNum = ask.question("What is your second number?");

    var o = ["Add", "Subtract", "Multiply", "Divide"];

    var opSec = ask.keyInSelect(o, "Please enter the operation to perform:");

    if (opSec === 0) {
        return "The result is: " + Number(firstNum) + Number(secondNum);
    } else if (opSec === 1) {
        return "The result is: " + Number(firstNum) - Number(secondNum);
    } else if (opSec === 2) {
        return "The result is: " + Number(firstNum) * Number(secondNum);
    } else if (opSec === 3) {
        return "The result is: " + Number(firstNum) / Number(secondNum);
    } else {
        return "You lose, loser!";
    }
}

console.log(javaCalc());