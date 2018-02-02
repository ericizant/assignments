import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CoinApi from '../../api/CoinApi.js';
import './Home.css';

import bitcoinPic from './bitcoin_symbol.png';


const Home = (props) => {
    return (
        <div className='home-wrapper'>
            <Header />
            <img className='bitcoin-pic' src={bitcoinPic} alt='Bitcoin Symbol' />
            <h2>Enter your crypto currencies:</h2>
            <div>
                <h1>Add a coin</h1>
                
            </div>
            <CoinApi />
            <Footer />
        </div>
    )
}

export default Home;