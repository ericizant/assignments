import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
    return (
        <div className='header-wrapper'>
            <h1>Crypto Counter</h1>
            <nav className='navbar-wrapper'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    )
}

export default Header;