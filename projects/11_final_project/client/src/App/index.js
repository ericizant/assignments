import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './index.css';

import Landing from './pages/Landing';
import Main from './pages/Main';
import Edit from './pages/Edit';

const App = (props) => {
    return (
        <div className='application-body'>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/Main' component={Main} />
                <Route path='/Edit' component={Edit} />
            </Switch>
        </div>
    )
}

export default App;