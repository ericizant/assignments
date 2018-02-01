const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");

let coins = require("./database.js");

const app = express();
let port = 8080;

app.use(bodyParser.json());

app.get("/coins", (req, res) => {
    let query = req.query;
    console.log(req.query)
    let filteredCoins = coins.filter((coin) => {
        let found = true;
        for (let key in query) {
            if (coin[key] != query[key]) {
                found = false;
                break;
            }
        }
        return found;
    })
    res.send(filteredCoins);
});

app.post("/coins", (req, res) => {
    let newCoin = req.body;
    newCoin._id = uuid();
    coins.push(newCoin);
    res.send({
        msg: "Data added successfully",
        data: newCoin
    });
});

app.get("/coins/:id/", (req, res) => {
    let { id } = req.params;
    let found = false;
    let foundCoin;
    for (let i = 0; i < coins.length; i++) {
        if (coins[i]._id === id) {
            found = true;
            foundCoin = coins[i];
            break;
        }
    }
    if (found) {
        res.send({
            msg: `Item ${id} was found!`,
            data: foundCoin
        })
    } else {
        res.send({
            msg: `Item ${id} not found!`
        })
    }
});

app.delete("/coins/:id", (req, res) => {
    let { id } = req.params;
    let found = false;
    for (let i = 0; i < coins.length; i++) {
        if (coins[i]._id === id) {
            coins.splice(i, 1);
            found = true;
            break;
        }
    }
    if (found) {
        res.send({
            msg: `Item ${id} was successfully removed!`
        });
    } else {
        res.send({
            msg: `Item ${id} was not found!`
        })
    }
});

app.put("/coins/:id", (req, res) => {
    let { id } = req.params;
    let updatedCoin = req.body;
    let found = false;
    for (let i = 0; i < coins.length; i++) {
        if (coins[i]._id === id) {
            coins[i] = Object.assign(coins[i], updatedCoin);
            updatedCoin = coins[i];
            found = true;
            break;
        }
    }
    if (found) {
        res.send({
            msg: `Item ${id} was updated!`,
            data: updatedCoin
        });
    } else {
        res.send({
            msg: `Item ${id} not found!`
        })
    }
})

app.listen(port, () => {
    console.log("Listening on port " + port);
});
