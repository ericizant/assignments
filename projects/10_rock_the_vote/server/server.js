const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const issueRoutes = require('./routes/issues.js');


const app = express();
const config = require('./config');

let issue = require('./models/issues');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/issue', issueRoutes);

mongoose.connect('mongodb://localhost/issue', (err) => {
    console.log('Connected to the database');
});

app.listen(config.port, () => {
    console.log('Listening on port ' + config.port);
});