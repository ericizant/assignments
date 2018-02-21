import React, { Component } from 'react';

import CoinDisplayer from './CoinDisplayer';

class CoinList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinList: [],
        };
    }

    render() {
        let { name, price_usd } = this.state;
        return (
            <div>
                <h1>Name={name}</h1>
                <h2>Price={price_usd}</h2>
                <CoinDisplayer />
            </div>
        )
    }
}

export default CoinList;