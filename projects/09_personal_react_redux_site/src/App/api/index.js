import React, { Component } from 'react';
import axios from 'axios';

import CoinDisplay from './index.js';

const marketURL = 'https://api.coinmarketcap.com/v1/ticker/'

//life-cycle procress
//1)when the component mounts, make GET request
//2)when the data comes back, set state to contain data
//3)display the data

class CoinApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            coins: [],
            loading: true,
            err: false,
            errMsg: ""
        };
    }

    componentDidMount() {
        axios.get(marketURL)
            .then((response) => {
                console.log(response);
                let { data } = response;
                this.setState({
                    coins: data,
                    loading: false
                });
            })

            .catch((err) => {
                console.error(err);
                this.setState({
                    loading: false,
                    errMsg: err.message,
                    err: true
                });
            })
    }

    render() {
        let { coins, loading, err, errMsg, searchTerm } = this.state;
        return (
            loading ?
                <div>
                    <h1>loading data...</h1>
                </div>
                :
                err ?
                    <div>
                        <p>Sorry, your data is currently unavailable. Please try your request again.</p>
                        <p>{errMsg}</p>
                    </div>
                    :
                    <div>
                        <form>
                            <input name='selectCoin' value={searchTerm} placeholder='Select a coin' />
                        </form>
                        {coins.filter(coin => {
                            console.log(coin);
                            for (let key in coin) {
                                let curVal = coin[key];
                                if (typeof curVal === "string")
                                    if (curVal.toLowerCase().includes(searchTerm))
                                        return true;
                            }
                            return false;
                        }).map((coin, i) => {
                            let { name, price_usd } = coin;
                            return <CoinDisplay key={i} name={name} price_usd={price_usd}></CoinDisplay>
                        })}
                    </div>
        );
    }
}

export default CoinApi;