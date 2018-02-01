const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    dimensions: {
        width: Number,
        height: Number,
        weight: Number
    },
    isReturnable: {
        type: Boolean,
        default: true
    },
    description: String
});

module.exports = mongoose.model('Inventory', inventorySchema);