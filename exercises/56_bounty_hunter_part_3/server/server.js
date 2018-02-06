//dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bountyRouter = require('./routes/bounties.js');
const config = require('./config');

const app = express();

mongoose.connect('mongodb://localhost/bounties', (err) => {
    if (err) throw err;
    console.log('Connected to the database.');
});

//middleware
app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/bounties', bountyRouter);

app.listen(config.port, () => {
    console.log('Listening on port ' + config.port);
});