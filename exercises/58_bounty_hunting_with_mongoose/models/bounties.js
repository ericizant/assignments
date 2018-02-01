const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bountyPrice: Number,
    forceType: String,
    isLiving: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Inventory', inventorySchema);