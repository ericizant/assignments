import React from 'react';

import CoinData from '../CoinApi/index.js';
import './Home.css';

import bitcoinPic from './bitcoin_symbol.png';

const Home = (props) => {
    return (
        <div className='home-wrapper'>
            <CoinData>
                <img className='bitcoin-pic' src={bitcoinPic} alt='Bitcoin Symbol' />
                <h2>Enter your crypto currencies:</h2>
            </CoinData>
        </div>
    )
}

export default Home;