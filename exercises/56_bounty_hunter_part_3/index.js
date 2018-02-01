const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const cors = require('cors');
const bountyRoute = require('./routes/bounties.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/bounties', bountyRoute);

app.listen(config.port, () => {
    console.log('Listening on port' + config.port);
});