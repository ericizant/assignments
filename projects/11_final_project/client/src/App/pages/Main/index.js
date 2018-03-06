import React from 'react';

import './Main.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CoinData from '../../CoinData';

import bitcoinPic from '../../pictures/bitcoin_symbol.png';

const Main = (props) => {
    return (
        <div className='main-wrapper'>
            <Header />
            <img className='bitcoin-pic' src={bitcoinPic} alt='Bitcoin Symbol' />
            <h2>Enter your crypto currencies:</h2>
            <h3>Add a coin: </h3>
            <div className='coin-layout'>
                <CoinData />
                <Footer />
            </div>
        </div>
    )
}

export default Main;