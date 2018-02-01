const express = require('express');
const bountyRoutes = express.Router();
const Bounties = require('../models/bounties');

bountyRoutes.get('/', (req, res) => {
    const query = {};
    if (req.query.isLiving) {
        query.isLiving = req.query.isLiving;
    }
    Bounties.find(query, (err, bounties) => {
        if (err) return res.status(500).send(err);
        return res.send(bounties);
    });
});

bountyRoutes.post('/', (req, res) => {
    const newBounty = new Bounties(req.body);
    newBounty.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newBounty);
    });
});

bountyRoutes.get('/:id', (req, res) => {
    Bounties.findById(req.params.id, (err, bounty) => {
        if (err) return res.status(500).send(err);
        return res.send(bounty);
    });
});

bountyRoutes.put('/:id', (req, res) => {
    Bounties.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBounty) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedBounty);
    });
});

bountyRoutes.delete('/:id', (req, res) => {
    Bounties.findByIdAndRemove(req.params.id, (err, deletedBounty) => {
        if (err) return res.status(500).send(err);
        return res.send(deletedBounty);
    });
});

module.exports = bountyRoutes;