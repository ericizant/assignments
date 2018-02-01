const express = require('express');
const inventoryRoutes = express.Router();
const Inventory = require('../models/inventory');

inventoryRoutes.get('/', (req, res) => {
    const query = {};
    if (req.query.isReturnable) {
        query.isReturnable = req.query.isReturnable;
    }
    Inventory.find(query, (err, inventoryItems) => {
        if (err) return res.status(500).send(err);
        return res.send(inventoryItems);
    });
});

inventoryRoutes.post('/', (req, res) => {
    const newInventory = new Inventory(req.body);
    newInventory.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newInventory);
    });
});

inventoryRoutes.get('/:id', (req, res) => {
    Inventory.findById(req.params.id, (err, inventory) => {
        if (err) return res.status(500).send(err);
        return res.send(inventory);
    });
});

inventoryRoutes.put('/:id', (req, res) => {
    Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedInventory) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedInventory);
    });
});

inventoryRoutes.delete('/:id', (req, res) => {
    Inventory.findByIdAndRemove(req.params.id, (err, deletedInventory) => {
        if (err) return res.status(500).send(err);
        return res.send(deletedInventory);
    });
});

module.exports = inventoryRoutes;