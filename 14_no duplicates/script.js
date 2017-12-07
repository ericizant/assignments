// Given a string, your task is to remove any duplicated letters from it. Any letters you remove should be added to another string called "duplicates".

// Here's an example:

// var input = "bookkeeper larry";

// No duplicates: "bokepr lay"
// The Extras: "okeerr"

// var removeDups = function(str) {
//     var output = {
//         noDups: "bokepr lay",
//         dups: "okeerr" // The Extras: "okeerr"
//     }
//     return output;
// }

// // console.log(removeDups("bookkeeper larry"));

var removeDups = function(str) {
    var output = {
        noDups: "",
        dups: "",
    };
    for (var i = 0; i < str.length; i++) {
        if (output.noDups.indexOf(str[i]) === -1) {
            output.noDups += str[i];
        } else {
            output.dups += str[i];
        }
    }
    return output;
}

console.log(removeDups("bookkeeper larry"));