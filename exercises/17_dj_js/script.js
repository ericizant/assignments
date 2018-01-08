// DJ JS

// You're starting your business as a strictly online DJ (DJ JS) and you want to start by creating a website where people can change the color of a square on the page by interacting with different HTML Events.

// The square's color will change as follows:

// Blue when the mouse hovers over the square.
// Red when the mouse button is held down over the square.
// Yellow when the mouse button is let go over the square.
// Green when the mouse is double clicked in the square.
// Orange when the mouse scroll is used somewhere in the window (not just over the square).
// You should also be able to press the first letter of the above colors and have the box change to that color.

var box = document.getElementById("box");

box.onmouseover = function() {
    box.style.backgroundColor = "blue";
}

box.onmousedown = function() {
    box.style.backgroundColor = "red";
}

box.onmouseup = function() {
    box.style.backgroundColor = "yellow";
}

box.onclick = function() {
    box.style.backgroundColor = "green";
}

window.onscroll = function() {
    box.style.backgroundColor = "orange";
}

window.onkeyup = function(event) {
    switch(event.key) {
        case "y":
        box.style.backgroundColor = "yellow"
        break;
        case "b":
        box.style.backgroundColor = "blue"
        break;
        case "r":
        box.style.backgroundColor = "red"
        break;
        case "g":
        box.style.backgroundColor = "green"
        break;
        case "o":
        box.style.backgroundColor = "orange"
        break;
        case "p":
        box.style.backgroundColor = "pink"
        case "t":
        box.style.backgroundColor = "turquoise"
    }
}