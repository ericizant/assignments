import React from 'react';
import { Link } from 'react-router-dom';

import './GameOver.css';

const GameOver = () => (
    <div className='gameOver-wrapper'>
        <h1 className='gameOver-logo'>WARRIOR<br />CODE</h1>
        <h2 className='gameOver-title'>***Game Over***</h2>
        <h4 className='gameOver-replayGame'>Press <span>
            <Link className='gameOver-link' to='/Floor1'>START</Link>
        </span> to play again!</h4>
    </div>
)

export default GameOver;