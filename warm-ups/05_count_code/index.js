function countCode(str) {
    str = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "c") {
            if (/(co([a-z])e)/.test(str.slice(i, i + 4))) {
                count++;
                i += 3;
            }
        }
    }
    return count;
}

console.log(countCode("aaacodebbb"));
console.log(countCode("codexxcode"));
console.log(countCode("cozexxcope"));

//more elegant solution:

function countCode2(str) {
    return str.match(/co[a-z]e/g).length;
}

console.log(countCode2("aaacodebbb"));
console.log(countCode2("codexxcode"));
console.log(countCode2("cozexxcope"));
