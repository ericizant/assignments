Copy Cat
--------
Write a function that takes an object as a parameter and returns a "deep copy" of the object.. A "deep copy" is where two objects have all the same properties and values as each other but live at different memory addresses. If one of them changes, the other is unaffected.

Therefore, the new object your function returns should have all the same properties and values of the original. But, in the spirit of 'Pure Functions', your new function should not modify the original object.

Example:

function copyCat(obj) {  
   //...copy the object and return the copy
}
const person = {name: "Joe"}
const copy = copyCat(person);

console.log(person.name) //"Joe"
console.log(copy.name)  //"Joe"

person.name = "Jane"

console.log(person.name) //"Jane"
console.log(copy.name)  //"Joe" (remains unchanged because it is a "deep copy" of the original)
