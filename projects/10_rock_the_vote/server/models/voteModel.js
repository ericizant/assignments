const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    voteCount: Number
});

module.exports = mongoose.model('Votes', voteSchema);