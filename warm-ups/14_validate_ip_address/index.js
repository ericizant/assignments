// Validate IP Address

//An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

//IPv4 addresses are represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots, e.g., 172.16.254.1

//Given a string, write a function that determines whether it is a valid IP address.

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