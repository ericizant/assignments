import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

//linked pages
import AboutPage from '../../../containers/AboutPage/About';
import HomePage from '../../../containers/HomePage/Home';
import TopCoinsPage from '../../../containers/TopCoinsPage/TopCoins';
import './Navbar.css';

const Navbar = function (props) {
    return (
            <div className='navbar-wrapper'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/TopCoins">Top Coins</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/About" component={AboutPage} />
                    <Route path="/TopCoins" component={TopCoinsPage} />
                </Switch>
            </div>
    )
}

export default Navbar;