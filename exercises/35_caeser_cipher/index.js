function cipher(str, shift) {
    let output = "";
    shift = shift % 26;
    for (let i = 0; i < str.length; i++) {
        output += String.fromCharCode(((str.charCodeAt(i) + shift)));
    }
    return output;
}
console.log(cipher("abc", 1));