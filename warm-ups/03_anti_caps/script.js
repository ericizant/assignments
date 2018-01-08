function isCaps(letter) {
    return letter === letter.toUpperCase();
}

function antiCaps(str) {
    var output = "";
    for (var i = 0; i < str.length; i++) {
        if (isCaps(str[i])) {
            output += str[i].toLowerCase();
        } else {
            output += str[i].toUpperCase();
        }
    }
    return output;
}

console.log(antiCaps("stRing"));