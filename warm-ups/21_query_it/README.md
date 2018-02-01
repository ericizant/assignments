Query It
--------
Given a query object and an array of objects, write a function that returns an array of items that match the query.

*If the query object is empty, return the entire array.
*If the array contains no matches, return an empty array.

Example:

let database = [
    {a: 1, b: 1, c: 2},
    {a: 0, b: 0, c: 2},
    {a: 0, b: 1, c: 0},
    {a: 1, b: 2, c: 2}
];

filterDatabase({}, database);  
    //returns entire database array

filterDatabase({dolphin: "squeak!"});  
    //returns empty array

filterDatabase({a: 1, c: 2});  
    //returns
    [
        {a: 1, b: 1, c: 2},
        {a: 1, b: 2, c: 2}
    ]
