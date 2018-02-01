const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const voteRouter = require('./routes/voteRouter.js');

const app = express();

app.use(bodyParser.json());
app.use('/votes', voteRouter);

mongoose.connect('mongodb://localhost:27017', () => {
    console.log('Connected to MongoDB');
});

app.listen(8080, () => {
    console.log('Connected to port 8080');
});