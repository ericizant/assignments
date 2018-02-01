import React from 'react';

import CoinApi from './CoinApi';
import './CoinApi.css';

const CoinData = (props) => {
    let { name, price_usd } = props;
    return (
        <div className='api-wrapper'>
            <CoinApi />
            <p>Currency Name: {name}</p>
            <p>Current Price: {price_usd}</p>
        </div>
    )
}

export default CoinData;