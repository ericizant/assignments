// Matching Words

// You are a treasure hunter and you have found a cave that you believe holds the ultimate treasure. But there is a wall in your way. On it is inscribed this:

// "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

// And below it says:

// Show the repeats and you shall enter

// There are 5 levers next to the wall, and as an experienced adventurer you know if you pull the wrong one you'll meet your final demise.

// Since we are programming adventurers, write a program that returns an array of every word that appears more than once in the phrase. Your final array should have just one instance of the repeated words. So if you were to find a word multiple times, your final array should have it just once.

// seperate all of the words into an array
// loop through the array
// for each string, check if it appears elsewhere in the array
// if so, check if it's not already in the ouput array, and push it there

let matchWords = (str) => {
    let output = [];
    let arr = str.toLowerCase().split(" ");
    for (let i = 0; i < arr.length; i++) {
        let currentWord = arr.splice(i, 1) [0];
        currentWord = currentWord.replace(/[^\w/]/g, "");
        for (let j = 0; j < arr.length; j++) {
            
        }

    }
}

matchWords("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.")