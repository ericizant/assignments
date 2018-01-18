let multTable = () => {
    let output = [];
    for (let i = 1; i < 11; i++) {
        let row = [];
        for (let j = 1; j < 11; j++) {
            row.push(j * i);
        }
        output.push(row);
    }
    return output
}

console.log(multTable());
