import React, { Component } from 'react';

import './index.css';

import Loading from '../shared/Loading';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCoinData } from '../../Redux/coins';

class CoinLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                searchTerm: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.props.getCoinData();
    }
    handleChange(e) {
        let { value } = e.target;
        this.setState({
            inputs: {
                searchTerm: value
            }
        })
    }
    render() {
        let { loading, data } = this.props;
        let { searchTerm } = this.state.inputs;
        let links = data.filter(coin => {
            for (let key in coin) {
                if (typeof coin[key] === 'string')
                    if (coin[key].toLowerCase().includes(searchTerm)) return true;
            }
            return false;
        }).map((coin) => {
            return <Link key={coin.id} to={`/coins/${coin.id}`}>{`${coin.name}(${coin.symbol})`}</Link>
        })
        return (
            loading ?
                <Loading></Loading>
                :
                <nav>
                    <div className='search'>
                        <span className='fa fa-search'></span>
                        <input value={searchTerm} onChange={this.handleChange} type='text' />
                    </div>
                    <div className='links-wrapper'>
                        {links}
                    </div>
                </nav>
        )
    }
}

export default connect(state => state.coins, { getCoinData })(CoinLinks);