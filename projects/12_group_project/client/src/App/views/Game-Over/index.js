// App/views/Game-Over/index.js

//dependencies
import React from 'react';
import { Link } from 'react-router-dom';

//styling
import './Game-Over.css';

const GameOver = () => (
    <div className='gameOver-wrapper'>
        <h1 className='gameOver-logo'>WARRIOR<br />CODE</h1>
        <h2 className='gameOver-title'>***Game Over***</h2>
        <h4 className='gameOver-replayGame'>Press <span>
            <Link className='gameOver-link' to='/Floor1'>RESTART</Link>
        </span> to play again!</h4>
    </div>
)

export default GameOver;