import React, { Component } from 'react';
import axios from 'axios';

// import CoinList from './CoinList';

// const marketURL = 'https://api.coinmarketcap.com/v1/ticker/';

class CoinData extends Component {
    constructor() {
        super();
        this.state = {
            coins: []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    // componentWillMount() {
    //     axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/')
    //     .then(response => this.setState({coins: response.data}))
    // }

    handleClick() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/')
        .then(response => this.setState({coins: response.data}))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                {this.state.coins.map((coin, i) => {
                    return (
                        <div>
                            <p>name={coin.name} price={coin.price_usd}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
    
export default CoinData;