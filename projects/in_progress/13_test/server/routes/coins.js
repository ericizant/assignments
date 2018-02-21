const express = require('express');
const coinRouter = express.Router();
const coins = require('../models/coinModel.js');

coinRouter.route('/')
    .get((req, res) => {
        coins.find(req.query, (err, foundCoins) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundCoins);
            }
        });
    })

    .post((req, res) => {
        let newCoin = new coins(req.body);
        newCoin.save((err, savedCoin) => {
            if (err) {
                console.error(err);
            } else {
                res.send(savedCoin);
            }
        });
    });

coinRouter.route('/:id')
    .get((req, res) => {
        let { id } = req.params;
        coins.findOne({ _id: id }, (err, foundCoin) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundCoin);
            }
        });
    })

    .delete((req, res) => {
        let { id } = req.params;
        coins.findByIdAndRemove({ _id: id }, (err, removedCoin) => {
            if (err) {
                console.error(err);
            } else {
                res.send(removedCoin);
            }
        });
    })

    .put((req, res) => {
        let { id } = req.params;
        coins.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedCoin) => {
            if (err) {
                console.error(err);
            } else {
                res.send(updatedCoin);
            }
        });
    });

module.exports = coinRouter;