const express = require('express');
const bodyParser = require('body-parser');

const bountyRoute = require('./routes/bounties.js');

const app = express();
let port = 8080;

//middleware
app.use(bodyParser.json());

//middleware
app.use('/bounties', bountyRoute);

app.listen(port, () => {
    console.log('Listening on port' + port);
});