// App/shared/Menu/Navbar.js
// This shared component is currently displayed at all times in the header. Some links should be removed from final version (i.e., open access to all levels) but are helpful now for testing and navigation purposes.

//dependenies
import React from 'react';
import { Link } from 'react-router-dom';

//styling
import './Shared.css';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar-wrapper'>
                <Link to='landing'>Landing</Link>
                <Link to='/'>Start Screen</Link>
                <Link to='/floor1'>1st Floor</Link>
                <Link to='/floor2'>2nd Floor</Link>
                <Link to='/floor3'>3rd Floor</Link>
                <Link to='/floor4'>4th Floor</Link>
                <Link to='/floor5'>5th Floor</Link>
                <Link to='/game_over'>Game Over</Link>
            </nav>
        </div>
    )
}

export default Navbar;