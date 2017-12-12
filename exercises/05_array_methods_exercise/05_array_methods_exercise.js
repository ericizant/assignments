// 05_array_methods_exercise.js

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

vegetables.pop();

console.log("vegetables :", vegetables);

fruit.shift();

console.log("fruit :", fruit);

console.log(fruit.indexOf("orange"));

console.log(fruit[1]);

fruit.push(1);

console.log("fruit: ", fruit);

console.log(vegetables.length);

vegetables.push(vegetables.length);

console.log("vegetables :", vegetables);

var food = fruit.concat(vegetables);

console.log(food);

food.splice(4, 2);

console.log(food);

food.reverse();

console.log(food);