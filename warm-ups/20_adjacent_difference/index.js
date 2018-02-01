let inputArray = ["this", "is", "an", "array"];

const arrayComparer = arr => {
    let combinedArray = arr[0] + ',' + arr[1] + ',' + arr[2];
    for (let i = 0; i < arr.length - 2; i++) {
        let newArray = arr[i] + ',' + arr[i + 1] + arr[i + 2];
        if (combinedArray.length < newArray.length) {
            combinedArray = newArray;
        }
    }
    return combinedArray.split(',');
}

console.log(arrayComparer(inputArray));