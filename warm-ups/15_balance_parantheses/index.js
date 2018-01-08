let test1 = "()()";
let test2 = "(())";
let test3 = "()))";
let test4 = ")()(";
let test5 = "())(";

function isBalanced(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "(") {
            count = count + 1;
        } else if (input[i] === ")") {
            count = count - 1;
            if (count < 0) {
                return false;
            }
        }
    }
    return count === 0;
}

console.log(isBalanced(test1)); // -> true
console.log(isBalanced(test2)); // -> true
console.log(isBalanced(test3)); // -> false
console.log(isBalanced(test4)); // -> false
console.log(isBalanced(test5)); // -> false