import React from 'react';

import './Header.css';

import Login from './Login';
import Navbar from './Navbar';

const Header = (props) => {
    return (
        <div className='header-wrapper'>
            <h1>BitClock</h1>
            <Navbar />
            <Login />
        </div>
    )
}

export default Header;