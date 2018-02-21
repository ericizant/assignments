import React from 'react';
import { Link } from 'react-router-dom';

import './StartScreen.css';

const StartScreen = () => (
    <div className='startScreen-wrapper'>
        <h1 className='startScreen-logo'>WARRIOR<br />CODE</h1>
        <h4 className='startScreen-playGame'>Press <span>
            <Link className='startScreen-link' to='/Floor1'>START</Link>
        </span> to play!</h4>
    </div>
)

export default StartScreen;