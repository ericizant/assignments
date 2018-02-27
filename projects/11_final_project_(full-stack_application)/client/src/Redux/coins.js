import io from 'socket.io-client';
import axios from 'axios';

import { trackPrices, loadInitialData } from './utils';

let defaultState = {
    loading: true,
    data: []
}

let coins = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_COIN_DATA':
            return {
                loading: false,
                data: trackPrices(action.data, state.data)
            }
        default:
            return state;
    }
}

const coinUrl = "https://api.coinmarketcap.com/v1/ticker/";

export let getCoinData = () => {
    const socket = io('http://localhost:8080');
    return dispatch => {
        loadInitialData(dispatch, axios, coinUrl);
        socket.on('COIN_DATA', (data) => {
            dispatch({
                type: 'GET_COIN_DATA',
                data
            })
        });
        socket.on('LOAD_ERR', (err) => dispatch({
            type: 'LOAD_ERR',
            err
        }));
    }
}

export default coins;