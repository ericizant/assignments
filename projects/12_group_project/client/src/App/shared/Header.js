// App/shared/Header.js

//dependenies
import React from 'react';

//styling
import './Shared.css';

//compoents
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <Navbar />
            <h1>Warrior Code</h1>
        </div>
    )
}

export default Header;