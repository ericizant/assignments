// App/views/Floor3/Floor3.js

//dependencies
import React from 'react';

//styling
import './Floor3.css'

//components
import Game from '../../shared/Game';

//images
import background3 from './background3.jpg';
import character from './character.png';
import evilDolphin from './evilDolphin.png';
import bob from './bob.jpg';
import sam from './sam.jpg';


let stats = {
    player: {
        name: 'Bob',
        hp: 100,
        weapon: 'JavaScript Magic'
    },
    enemy: {
        name: 'Sam',
        hp: 100,
        weapon: 'Dolphin Bounce'
    },
    message: 'Ready to attack!',
    attack: 15
};

const Floor3 = () => (
    <div className='floor3-wrapper'>
        <h1>V School: 3rd Floor</h1>
        <img className='background3' src={background3} alt='Level 3' />
        <img className='character' src={character} alt='Character' />
        <img className='evil-dolphin' src={evilDolphin} alt='Evil Dolphin' />
        <img className='bob' src={bob} alt='Bob' />
        <img className='sam' src={sam} alt='Sam' />
        <Game stats={stats}></Game>
    </div>
)

export default Floor3;