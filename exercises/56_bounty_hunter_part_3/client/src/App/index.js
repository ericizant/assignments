import React, { Component } from 'react';

import Form from './Form';
import Bounties from './Bounties';

import './index.css';

class App extends Component {
    render() {
        return (
            <div className='app-wrapper'>
                <h1>Star Wars</h1>
                <h2>Episode X: The Original Bounty Hunter</h2>
                <Form />
                <Bounties />
            </div>
        )
    }
};

export default App;