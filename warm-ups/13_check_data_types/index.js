//Method:
//loop through the first layer
//check whether each array's contents all share the same data type WITHIN that array
//check whether each array's contents all share the same data type ACROSS the arrays

//use "typeof" operator
console.log(typeof "this is a string");
//returns "string"

//try ".every" array method
console.log([1, 2, 3].every((num) => {
    return num > 10;
}))
//returns false

const multiD1 = [[1, 2, 3], ["a", "b", "c"], [true, true, true]];
//returns false (inner arrays aren't consistent with each other's data types)
const multiD2 = [[true, false, true], [false, false, true]];
//returns true (each inner array contains the same data type as the others)

function checkTypes(arr) {
    let initial = arr[0][0];
    return arr.every(subArr =>
        subArr.every(value =>
            typeof (value) === typeof (initial)
        )
    )
}

console.log(checkTypes(multiD1));
console.log(checkTypes(multiD2));
