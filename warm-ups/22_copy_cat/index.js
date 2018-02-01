function copyCat(obj) {
    //...copy the object and return the copy
}
const person = { name: "Joe" }
const copy = copyCat(person);

console.log(person.name) //"Joe"
console.log(copy.name)  //"Joe"

person.name = "Jane"

console.log(person.name) //"Jane"
console.log(copy.name)  //"Joe" (remains unchanged because it is a "deep copy" of the original)
