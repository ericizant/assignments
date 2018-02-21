const mongoose = require('mongoose');

const coinsSchema = new mongoose.Schema({
    coin: {
        type: String,
        required: true
    },
    price_usd: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('coins', coinsSchema);