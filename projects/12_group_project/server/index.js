const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 3040;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log("from index" +req.body);
    next();
})

// app.use("/api", expressJwt({ secret: process.env.SECRET }));
//app.use("/api/profile", require("./routes/profile"));
app.use("/auth", require("./routes/auth.js"));


//connect to db
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/scrap",
    // {useMongoClient: true},  // helps get rid of deprecation warnings
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});
