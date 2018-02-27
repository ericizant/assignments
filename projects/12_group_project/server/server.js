const app = express();

const bodyParser = require('body-parser');
const express = require('express');
const expressJwt = require('express-jwt');
const mongoose = require('mongoose');
const morgan = require('morgan');

require('dotenv').config();

const PORT = process.env.PORT || 3040;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log('from index' + req.body);
    next();
})

// app.use('/api', expressJwt({ secret: process.env.SECRET }));
//app.use('/api/profile', require('./routes/profile'));
app.use('/auth', require('./routes/auth.js'));


//connect to db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/scrap',
    // {useMongoClient: true},  // helps get rid of deprecation warnings
    (err) => {
        if (err) throw err;
        console.log('Connected to the database');
    }
);

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});