import React from 'react';

import './index.css';

import { Switch, Route } from 'react-router-dom';

import CoinLinks from './CoinLinks';
import CoinInfo from './CoinInfo';

function App(props) {
    return (
        <div className='app-wrapper'>
            <CoinLinks></CoinLinks>
            <Switch>
                <Route path='/coins/:id' component={CoinInfo}></Route>
            </Switch>
        </div>
    )
}

export default App;