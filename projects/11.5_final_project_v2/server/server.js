//dependencies
const app = express();
const bodyParser = require('body-parser');
const coinRouter = require('./routes/coinRouter.js');
const config = require('./config');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

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