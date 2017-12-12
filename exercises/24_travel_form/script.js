var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var age = document.getElementById("age");
var destination = document.getElementById("destination").value;
var gender = document.getElementsByName("gender").checked;
var dietary = document.getElementsByName("dietary").checked;
var form = document.getElementById("form");

var output = {};

function checkGender() {
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            return gender[i].value;
        }
        return ("Not Given");
    }
}

function getsMeal() {
    var output = [];
    for (var i = 0; i < dietary.length; i++); {
        if (dietary[i].checked) {
            output.push(dietary[i].value);
        }
    }
    return output;
}

function beautify() {
    return "First Name: " + fName.value + "\nLast Name: " + lName.value + "\nAge: " + age.value + "\nGender: " + output.gender + "\nDestination: " + destination.value + "\nDietary Restrictions: " + String(output.dietaryChoice)
}

function submit() {
    output.fname = fname.value;
    output.gender = checkGender();
    output.dietary = getsMeal();
    alert(beautiy());
}

form.onsubmit = submit();