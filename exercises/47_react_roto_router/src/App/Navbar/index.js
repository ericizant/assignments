import React from 'react';
import { Link } from 'browser-router';

import './Navbar.css';

function Navbar(props) {
    return (
        <div className='navbar-wrapper'>
            <Link className='links' to='/'>HOME</Link>
            <Link className='links' to='/About'>ABOUT</Link>
            <Link className='links' to='/Services'>SERVICES</Link>
        </div>
    )
}

export default Navbar;
