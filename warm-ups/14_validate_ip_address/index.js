const validateIp = str => {
    let arr = str.split(".");
    if (arr.length !== 4) return false;
    return arr.every((num) => {
        if (num.length > 3)
            return false;
        num = Number(num);
        if (!(num < 256 && num >= 0))
            return false;
        return true;
    });
}

console.log(validateIp("192.168.0.1"));
