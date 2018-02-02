import React, { Component } from 'react';

import './VoteCounter.css';

class VoteCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voteCount: 0,
            index: 0
        }
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.counter !== nextState.counter;
    }

    up() {
        this.setState((prevState) => ({ index: prevState.index + 1 }));
    }

    down() {
        this.setState((prevState) => ({ index: prevState.index - 1 }));
    }

    reset() {
        this.setState({
            voteCount: 0
        })
    }

    render() {
        let { voteCount } = this.state.index;
        return (
            <div className='voteCounter-wrapper'>
                <h3>Vote Count: {voteCount}</h3>
                <button onClick={this.up}>Vote For</button>
                <button onClick={this.down}>Vote Against</button>
            </div>
        )
    }
}

export default VoteCounter;