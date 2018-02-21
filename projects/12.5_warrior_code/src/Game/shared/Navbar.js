import React from 'react';
import { Link } from 'react-router-dom';

import './Shared.css';

const Navbar = () => (
    <div>
        <nav className='navbar-wrapper'>
            <Link to='/'>Start Game</Link>
            <Link to='/Floor1'>1st Floor</Link>
            <Link to='/Floor2'>2nd Floor</Link>
            <Link to='/Floor3'>3rd Floor</Link>
            <Link to='/Floor4'>4th Floor</Link>
            <Link to='/Floor5'>5th Floor</Link>
        </nav>
    </div>
)

export default Navbar;