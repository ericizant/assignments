function genPassword(int) {
    var output = "";
    for (var i = 0; i < int; i++) {
        output += String.fromCharCode(Math.floor(Math.random() * 93) + 33);
    }
    return output;
}

console.log(genPassword(8));