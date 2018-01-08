// Count Code

// Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the "d", so "cope" and "cooe" would also count.

function countCode(string) {
    var count = (string.match(/co.*?e/g)).length;
    console.log(count);
}

countCode("aaacodebbb"); // 1
countCode("codexxcode"); // 2
countCode("cozexxcope"); // 2