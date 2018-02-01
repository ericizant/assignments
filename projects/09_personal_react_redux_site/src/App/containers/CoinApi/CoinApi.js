import React, { Component } from 'react';
import axios from 'axios';

const marketURL = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';

//life-cycle procress
//1)when the component mounts, make GET request
//2)when the data comes back, set state to contain data
//3)display the data

class CoinApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: [],
            loading: true,
            err: false,
            errMsg: ''
        }
    }
    componentDidMount() {
        axios.get(marketURL)
            .then((response) => {
                let { results } = response.data;
                this.setState({
                    characters: results,
                    loading: false,
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({
                    loading: false,
                    errMsg: err.message,
                    err: true
                })
            })
    }

    render() {
        let { coins, loading, err, errMsg } = this.state;
        return (
            loading ?
                <div>
                    <h1>LOADING...</h1>
                </div>
                :
                err ?
                    <div>
                        <p>Sorry, your data is unavailable. </p>
                        <p>{errMsg}</p>
                    </div>
                    :
                    <div>
                        {coins.map((coin, i) => {
                            let { name, price_usd } = coin;
                            return <CoinApi key={i} name={name} price_usd={price_usd}></CoinApi>
                        })}
                    </div>
        )
    }
}

export default CoinApi;