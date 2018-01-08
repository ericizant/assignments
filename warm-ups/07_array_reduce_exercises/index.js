// Array Reduce Exercises

// Use the built-in .reduce() method on arrays to solve all of these problems.

// 1) Turn an array of numbers into a total of all the numbers:

function total(arr) {
    return arr.reduce((sum, curr) => {
        return sum + curr;
    }, 0);
};

total([1, 2, 3]) // 6


// 2) Turn an array of numbers into a long string of all those numbers:

function stringConcat(arr) {
    return arr.reduce((total, curr) => {
        curr = String(curr);
        return total + curr;
    }, "")
}

stringConcat([1, 2, 3]) // "123"


// 3) Turn an array of voter objects into a count of how many people voted:

function totalVotes(arr) {
    return arr.reduce((total, curr) => {
        if(curr.voted){
            return total + 1;
        } else {
            return total;
        }
    }, 0)

}

var voters = [
    {name: "Bob", age: 30, voted: true},
    {name: "Jake", age: 32, voted: true},
    {name: "Kate", age: 25, voted: false},
    {name: "Sam", age: 20, voted: false},
    {name: "Phil", age: 21, voted: true},
    {name: "Ed",  age: 55, voted: true},
    {name: "Tami", age: 54, voted: true},
    {name: "Mary", age: 31, voted: false},
    {name: "Becky", age: 43, voted: false},
    {name: "Joey", age: 41, voted: true},
    {name: "Jeff", age: 30, voted: true},
    {name: "Zack", age: 19, voted: false}
];

totalVotes(voters) // 7

// Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once:

function shoppingSpree(arr) {
    return arr.reduce((total, curr) => {
        return total + curr.price;
    }, 0);
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

shoppingSpree(wishlist) // 227005


// 5) Given an array of arrays, flatten them into a single array:

function flatten(arr) {
    return arr.reduce((total, curr) => {
        return [...total, ...curr];
    });
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];

// Note: Take a look at Array.concat() to help with this one.


// 6) Given an array of potential voters, return an object representing the results of the vote, including how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties.

var voters = [
    {name: "Bob", age: 30, voted: true},
    {name: "Jake", age: 32, voted: true},
    {name: "Kate", age: 25, voted: false},
    {name: "Sam", age: 20, voted: false},
    {name: "Phil", age: 21, voted: true},
    {name: "Ed", age :55, voted:true},
    {name: "Tami", age: 54, voted:true},
    {name: "Mary", age: 31, voted: false},
    {name: "Becky", age: 43, voted: false},
    {name: "Joey", age: 41, voted: true},
    {name: "Jeff", age: 30, voted: true},
    {name: "Zack", age: 19, voted: false}
];

function voterResults(arr) {
    return arr.reduce((total, curr) => {
        if (curr.age < 26) {
            total.youth++;
            curr.voted ? total.youngVotes++ : null;
            return total;
        } else if (curr.age < 36) {
            total.mids++;
            if (curr.voted) {
                total.midVotes++;
            }
            return total;
        } else if (curr.age < 56) {
            total.olds++;
            if (curr.voted) {
                total.oldVotes++;
            }
            return total;
    }

    }, {
        youngVotes: 0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        oldVotes: 0,
        olds: 0 
      });
}

voterResults(voters) // Returned value shown below:  


// Extra Credit

// Using AJAX, do a GET request to your own Github repositories endpoint. The URL will be https://api.github.com/users/<YOUR GITHUB USERNAME HERE>/repos.

// Once you get the data, use .reduce() to figure out how many watchers you have across all of your repositories. Don't be too disappointed if the number is 0. You're still new at this. :)

// Note: If you've learned how to use the axios library, you can do this in node. Otherwise, you'll want to run this code in the browser's JavaScript context and either use XMLHttpRequest or jQuery's AJAX methods meaning you'll need an HTML page and an associated script tag for your JavaScript.

module.exports = {
    total,
    stringConcat,
    totalVotes,
    shoppingSpree,
    flatten,
    voterResults
};