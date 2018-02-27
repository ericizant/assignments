import React, { Component } from 'react';

import './index.css';

import Loading from '../shared/Loading';
import { Line } from 'react-chartjs-2';

import { connect } from 'react-redux';

class CoinInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCoin: {},
            loading: true
        }
    }

    componentWillReceiveProps(nextProps) {
        let nextId = nextProps.match.params.id;
        this.setState(prevState => {
            let nextCoin = nextProps.data.filter(coin => coin.id === nextId)[0];
            return {
                currentCoin: nextCoin,
                loading: false
            };
        })
    }

    genLineData() {
        let { currentCoin } = this.state;
        let labels = currentCoin.timeStamps.map((time) => time.toLocaleTimeString())
        const lineData = {
            labels,
            datasets: [
                {
                    label: 'Recent Prices',
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: currentCoin.prices
                }
            ]
        };
        return lineData;
    }

    render() {
        let { currentCoin, loading } = this.state;
        return (
            loading ?
                <Loading></Loading>
                :
                <div className='coin-info'>
                    <div className='coin-info-header'>
                        <h1>{currentCoin.name} <span className='highlight'>{currentCoin.symbol}</span></h1>
                        <h2>Current Price: ${Number(currentCoin.price_usd).toLocaleString('en-us', { currency: 'USD', minimumFractionDigits: 2 })}</h2>
                        <h3>Rank: #{currentCoin.rank}</h3>
                    </div>
                    <Line data={this.genLineData()}></Line>
                </div>
        )
    }
}

export default connect(state => state.coins, {})(CoinInfo);