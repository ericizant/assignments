// Exercise - Functions

// Functions are important building blocks in any language. They help ensure that your code follows the DRY principle and that you follow a design principle called Separation of Concerns. Your functions should “do one thing and do it well” (McIlroy). These exercises will help strengthen your function know-how.

// For each step of the exercise, alternate between the two different types of function declarations when you are defining your functions.

// Write a function that accepts two numbers as parameters, and returns the sum.

function myFunction(a, b) {
    return a + b;
}

console.log(myFunction(1, 2));

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function myFunction(a, b, c) {
    if (a > b, a > c) {
        return a;
    } else {
        if (b > c) {
            return b;
        } else {
            return c;
        }
    }
 }

console.log(myFunction(100, 200, 300));
console.log(myFunction(300, 200, 100));
console.log(myFunction(200, 300, 100));

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd")

function myFunction(a, b) {
    if (a % 2 === 1) {
        return b = "odd";
    } else {
        return b = "even";
    }
}

console.log(myFunction(10));
console.log(myFunction(15));

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

function myFunction(a) {
    if (a.length <= "20") {
        return a.concat(a);
    } else {
        return a;
    }
}

console.log(myFunction("Hello there! "));
console.log(myFunction("Hello there! I'm a talking parrot. "));

// Optional Challenge

// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.

var recursive = function(n) {
    if(n <= 2) {
        return 1;
    } else {
        return recursive(n - 1) + recursive(n - 2);
    }
};

console.log(recursive(7));
    
// Write a function to solve the quadratic equation. (It should accept three numbers as parameters, and then return an array with the resulting x values.)

function quadEq(a, b, c) {
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return result + "<br>" + result2;
}

console.log(quadEq(1, 1, -1));

// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.

var string  = "Woohoo",
counter = {};

for (var i = 0, len = string.length; i < len; i += 1) {
    counter[string[i]] = (counter[string[i]] || 0) + 1;
}

var biggest = -1, number;

for (var key in counter) {
    if (counter[key] > biggest) {
        biggest = counter[key];
        number = key;
    }
}

console.log(number);