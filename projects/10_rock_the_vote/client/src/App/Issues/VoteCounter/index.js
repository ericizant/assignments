import React from "react";

import './VoteCounter.css';

class VoteCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            voteCount: 0,
            index: 0
        }
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
    }

    up() {
        this.setState((prevState) => ({ index: prevState.index + 1 }));
    }

    down() {
        this.setState((prevState) => ({ index: prevState.index - 1 }));
    }

    render() {
        return (
            <div className='voteCounter-wrapper'>
                <p>Vote Count: {this.state.index}</p>
                <button onClick={this.up}>Vote For</button>
                <button onClick={this.down}>Vote Against</button>
                <div>
                    {/* this is where I will map through the array and display a votes display with each iteration */}
                </div>
            </div>
        )
    }
}

export default VoteCounter;