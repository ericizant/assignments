import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CoinApi from '../../api';
import './Home.css';

import bitcoinPic from './bitcoin_symbol.png';

const Home = (props) => {
    return (
        <div>
            <div className='home-wrapper'>
                <Header />
                <img className='bitcoin-pic' src={bitcoinPic} alt='Bitcoin Symbol' />
                <h2>Enter your crypto currencies:</h2>
                <h3>Add a coin</h3>
            </div>
            <div className='coin-displayer'>
                <CoinApi />
                <CoinApi />
                <CoinApi />
            </div>
            <Footer />
        </div>
    )
}

export default Home;