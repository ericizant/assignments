import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar-wrapper'>
                <Link to="/">Landing</Link>
                <Link to="/main">Main</Link>
                <Link to="/edit">Edit</Link>
            </nav>
        </div>
    )
}

export default Navbar;