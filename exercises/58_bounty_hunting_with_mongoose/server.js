const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const bountyRoutes = require('./routes/bounties');
const app = express();

mongoose.connect('mongodb://localhost/bounties', (err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

app.use(bodyParser.json());
app.use('/bounties', bountyRoutes);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});