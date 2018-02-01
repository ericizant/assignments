Stringify URL
-------------
Part 1:

Write a function that takes a query object and an HTTP endpoint and then returns a URL with a query string.

Example:

let endpoint = "http://localhost:8080/monkeys";
let query = {  
    color: "black",
    species: "howler"
    };

stringifyUrl(endpoint, query);

//returns "http://localhost:8080/monkeys?color=black&species=howler"

Part 2:

Write a function that does the opposite from above. Return an object from a query string.