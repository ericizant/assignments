//dependencies
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const coinRouter = require('./routes/coinRouter.js');
const config = require('./config');

//middleware
app.use(bodyParser.json());
app.use('/coins', coinRouter);
app.use(cors());

//routes
app.use('/coins', coinRouter);

//mongoose
mongoose.connect('mongodb://localhost/coins', (err) => {
    console.log('Connected to the database');
});

app.listen(config.port, () => {
    console.log('Listening on port ' + config.port);
});