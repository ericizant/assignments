import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import './index.css';

const App = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
            </Switch>
        </div>
    )
}

export default App;