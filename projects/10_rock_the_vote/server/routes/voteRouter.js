const express = require('express');
const voteRouter = express.Router();
const voteModel = require('../models/voteModel.js');

voteRouter.route('/')
    .get((req, res) => {
        voteModel.find(req.query, (err, foundVotes) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundVotes);
            }
        });
    })
    .post((req, res) => {
        let newVote = new voteModel(req.body);
        newVote.save((err, savedVote) => {
            if (err) {
                console.error(err);
            } else {
                res.send(savedVote);
            }
        });
    });

voteRouter.route('/:id')
    .get((req, res) => {
        let { id } = req.params;
        voteModel.findOne({ _id: id }, (err, foundVote) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundVote);
            }
        });
    })
    .delete((req, res) => {
        let { id } = req.params;
        voteModel.findByIdAndRemove({ _id: id }, (err, removedVote) => {
            if (err) {
                console.error(err);
            } else {
                res.send(removedVote);
            }
        });
    })
    .put((req, res) => {
        let { id } = req.params;
        voteModel.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedVote) => {
            if (err) {
                console.error(err);
            } else {
                res.send(updatedVote);
            }
        });
    });

module.exports = voteRouter;