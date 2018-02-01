let url = "http://localhost:8080/monkeys";
let query = {
    color: "black",
    species: "howler"
};

//Stack Overflow Method:
// let stringifyUrl = (url, query) => {
//     return url + '?' + Object.keys(query)
//         .reduce(function (a, k) {
//             a.push(k + '=' + encodeURIComponent(query[k]));
//             return a
//         }, []).join('&');
// }

//Stack Overflow ES6 Method:
// let stringifyUrl = (url, query) => {
//     return url + '?' + Object.keys(query).map(k =>
//         `${encodeURIComponent(k)}=${encodeURIComponent(query[k])}`).join('&');
// }

// Ben's Method:
let stringifyUrl = (url, query) => {
    for (let key in query) {
        url += '?' + `${key}=${query[key]}`;
    }
    return url;
}

console.log(stringifyUrl(url, query));
//returns "http://localhost:8080/monkeys?color=black&species=howler"