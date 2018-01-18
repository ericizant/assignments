// Goomba Section:

var goombaCaught = document.getElementById("goombaCaught");
var goombaValue = document.getElementById("goombaValue");
var addGoomba = document.getElementById("addGoomba");

addGoomba.onclick = function () {
    var numberOneGoomba = Number(goombaCaught.value);
    var numberTwoGoomba = Number(goombaValue.value);
    goombaSubtotal.innerHTML = "Goombas: " + (numberOneGoomba * numberTwoGoomba);
}
clearGoombaInputs();

function clearGoombaInputs() {
    goombaCaught.value = "";
    goombaValue.value = "";
}

// Bob-omb Section:

var bobombCaught = document.getElementById("bobombCaught");
var bobombValue = document.getElementById("bobombValue");
var addBobomb = document.getElementById("addBobomb");

addBobomb.onclick = function () {
    var numberOneBobomb = Number(bobombCaught.value);
    var numberTwoBobomb = Number(bobombValue.value);
    bobombSubtotal.innerHTML = "Bob-ombs: " + numberOneBobomb * numberTwoBobomb;
}
clearBobombInputs();

function clearBobombInputs() {
    bobombCaught.value = "";
    bobombValue.value = "";
}

// Cheep-cheep Section:

var cheepCheepCaught = document.getElementById("cheepCheepCaught");
var cheepCheepValue = document.getElementById("cheepCheepValue");
var addCheepCheep = document.getElementById("addCheepCheep");

addCheepCheep.onclick = function () {
    var numberOneCheepCheep = Number(cheepCheepCaught.value);
    var numberTwoCheepCheep = Number(cheepCheepValue.value);
    cheepCheepSubtotal.innerHTML = "Cheep-Cheeps: " + numberOneCheepCheep * numberTwoCheepCheep;
}
clearCheepCheepInputs();

function clearCheepCheepInputs() {
    cheepCheepCaught.value = "";
    cheepCheepValue.value = "";
}

// Totals:

addTotals.onclick = function() {
    var goombaOne = Number(goombaCaught.value);
    var goombaTwo = Number(goombaValue.value);
    var bobombOne = Number(bobombCaught.value);
    var bobombTwo = Number(bobombValue.value);
    var cheepCheepOne = Number(cheepCheepCaught.value);
    var cheepCheepTwo = Number(cheepCheepValue.value);

    totalCaught.innerHTML = "Total Caught: " + (goombaOne + bobombOne + cheepCheepOne);

    totalPrice.innerHTML = "Total Price: " + ((goombaOne * goombaTwo) + (bobombOne * bobombTwo) + (cheepCheepOne * cheepCheepTwo));
}