const axios = require('axios');
const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');
const config = require('./config');

app.use(cors());
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
});

server.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
});

const getCoinDataAndEmit = async client => {
    const url = 'https://api.coinmarketcap.com/v1/ticker/';
    try {
        const response = await axios.get(url);
        client.emit('COIN_DATA', response.data);
        console.log('Coin data sent');
    } catch (err) {
        console.error(err.code);
    }
}

io.on('connection', (client) => {
    console.log('New client connected');
    let interval;
    interval = setInterval(() => {
        getCoinDataAndEmit(client);
    }, 300000);
});cd