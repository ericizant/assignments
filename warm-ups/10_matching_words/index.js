// Method:
//seperate all of the words into an array
//loop through the array
//for each string, check if it appears elsewhere in the array
//if so, check if it's not already in the ouput array, and push it there

let matchWords = (str) => {
    let output = [];
    let arr = str.toLowerCase().split(" ");
    for (let i = 0; i < arr.length; i++) {
        let currentWord = arr.splice(i, 1)[0];
        currentWord = currentWord.replace(/[^\w/]/g, "");
        for (let j = 0; j < arr.length; j++) {
        }
    }
}

matchWords("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.")
