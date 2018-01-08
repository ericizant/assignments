var shopper = {
    name: "Eric Izant",
    age: 38,
    time: new Date(),
    basket: false,
    groceryCart: [
        "milk", "fruit", "bread", "cookies", "soda", "cheese", "almond butter"
        ],
    shoppingList: function() {
        return("Here is my shopping list: " + shopper.groceryCart + ".");
    },
    shoppingSchedule: function() {
    }
}

console.log(shopper.shoppingList());
console.log(shopper.time.toLocaleTimeString());