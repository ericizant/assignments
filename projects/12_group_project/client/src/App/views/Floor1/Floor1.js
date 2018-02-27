// App/views/Floor1/Floor1.js

//dependenciess
import React from 'react';

//styling
import './Floor1.css';

//components
import Game from '../../shared/Game';

//images
import background1 from './background1.jpg';
import character from './character.png';
import evilDolphin from './evilDolphin.png';
import bob from './bob.jpg';
import luke from './luke.jpg';


let stats = {
    player: {
        name: 'Bob',
        hp: 100,
        weapon: 'HTML Blade',
    },
    enemy: {
        name: 'Luke',
        hp: 100,
        weapon: 'Dolphin Whip',
    },
    message: 'Ready to attack!',
    attack: 15
};

const Floor1 = () => (
    <div className='floor1-wrapper'>
        <h1 className='level-name'>V School: 1st Floor</h1>
        <img className='background1' src={background1} alt='Level 1' />
        <img className='character' src={character} alt='Character' />
        <img className='evil-dolphin' src={evilDolphin} alt='Evil Dolphin' />
        <img className='bob' src={bob} alt='Bob' />
        <img className='luke' src={luke} alt='Luke' />
        <Game stats={stats}></Game>
    </div>
)

export default Floor1;