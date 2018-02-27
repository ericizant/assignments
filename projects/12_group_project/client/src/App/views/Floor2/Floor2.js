// App/views/Floor2/Floor2.js

//dependencies
import React from 'react';

//styling
import './Floor2.css'

//components
import Game from '../../shared/Game';

//images
import background2 from './background2.jpg';
import character from './character.png';
import evilDolphin from './evilDolphin.png';
import bob from './bob.jpg';
import celeste from './celeste.jpg';


let stats = {
    player: {
        name: 'Bob',
        hp: 100,
        weapon: 'CSS Daggers'
    },
    enemy: {
        name: 'Celeste',
        hp: 100,
        weapon: 'Dolphina Axe'
    },
    message: 'Ready to attack!',
    attack: 15
};

const Floor2 = () => (
    <div className='floor2-wrapper'>
        <h1 className='level-name'>V School: 2nd Floor</h1>
        <img className='background2' src={background2} alt='Level 2' />
        <img className='character' src={character} alt='Character' />
        <img className='evil-dolphin' src={evilDolphin} alt='Evil Dolphin' />
        <img className='bob' src={bob} alt='Bob' />
        <img className='celeste' src={celeste} alt='Celeste' />
        <Game stats={stats}></Game>
    </div>
)

export default Floor2;