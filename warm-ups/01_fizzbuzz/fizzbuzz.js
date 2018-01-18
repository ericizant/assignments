function fizzBuzz(n) {
    var numArray = [];
    for (var i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            numArray.push("fizzbuzz")
        } else if (i % 3 === 0) {
            numArray.push("fizz")
        } else if (i % 5 === 0) {
            numArray.push("buzz")
        } else {
            numArray.push(String(i));
        }
    }
    return numArray;
}

console.log(fizzBuzz(100));
