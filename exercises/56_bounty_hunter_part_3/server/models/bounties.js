const mongoose = require('mongoose');

const bountySchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    bountyPrice: Number,
    forceType: String,
    living: String
});

module.exports = mongoose.model('Bounty', bountySchema);