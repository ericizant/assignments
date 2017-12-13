var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");
var output3 = document.getElementById("output3");

function clearInputs() {
    num1.value = "";
    num2.value = "";
    num3.value = "";
    num4.value = "";
    num5.value = "";
    num6.value = "";
}

add.onclick = function () {
    var firstNum = Number(num1.value);
    var secondNum = Number(num2.value);
    output1.innerHTML = firstNum + secondNum;
    clearInputs;
}

subtract.onclick = function () {
    var thirdNum = Number(num3.value);
    var fourthNum = Number(num4.value);
    output2.innerHTML = thirdNum - fourthNum;
    clearInputs;
}

multiply.onclick = function () {
    var fifthNum = Number(num5.value);
    var sixthNum = Number(num6.value);
    output3.innerHTML = fifthNum * sixthNum;
    clearInputs;
}