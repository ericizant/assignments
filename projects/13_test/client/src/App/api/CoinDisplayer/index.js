import React from 'react';

import './api.css';

const CoinDisplayer = (props) => {
    let { name, price_usd } = props;
    return (
        <div className='coinDisplayter-wrapper'>
            <p>Currency Name: {props.name}</p>
            <p>Current Price: {props.price_usd}</p>
        </div>
    )
}

export default CoinDisplayer;