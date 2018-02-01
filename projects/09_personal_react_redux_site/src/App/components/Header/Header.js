import React from 'react';

import Navbar from './Navbar/Navbar';
import './Header.css';

const Header = (props) => {
    return (
        <div className='header-wrapper'>
            <h1>Crypto Counter</h1>
            <Navbar />
        </div>
    )
}

export default Header;