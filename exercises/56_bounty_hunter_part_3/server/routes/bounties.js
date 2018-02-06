const express = require('express');
const Bounty = require('../models/bounties.js');
const bountyRouter = express.Router();

bountyRouter.route('/')
    .get((req, res) => {
        Bounty.find((err, bounties) => {
            if (err) return res.status(500).send(err);
            return res.send(bounties);
        })
    })

    .post((req, res) => {
        let newBounty = new Bounty(req.body);
        newBounty.save((err) => {
            if (err) return res.status(500).send(err);
            return res.send(newBounty);
        })
    })

bountyRouter.route('/:id')
    .get((req, res) => {
        Bounty.findById(req.params.id, (err, bounty) => {
            if (err) return res.status(500).send(err);
            return res.send(bounty);
        })
    })

    .delete((req, res) => {
        Bounty.findByIdAndRemove(req.params.id, (err, deletedBounty) => {
            if (err) return res.status(500).send(err);
            return res.send(deletedBounty);
        });
    })

    .put((req, res) => {
        Bounty.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBounty) => {
            if (err) return res.status(500).send(err);
            return res.send(updatedBounty);
        })
    })

module.exports = bountyRouter;