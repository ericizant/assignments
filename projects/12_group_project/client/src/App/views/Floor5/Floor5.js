// App/views/Floor5/Floor5.js

//dependencies
import React from 'react';

//styling
import './Floor5.css'

//components
import Game from '../../shared/Game';

//images
import background5 from './background5.jpg';
import character from './character.png';
import dolphinPants from './dolphinPants.jpg';
import bob from './bob.jpg';
import ben from './ben.jpg';


let stats = {
    player: {
        name: 'Bob',
        hp: 100,
        weapon: 'React Enemy-Router'
    },
    enemy: {
        name: 'Ben the Dolphin King',
        hp: 100,
        weapon: 'Dolphin Pants'
    },
    message: 'Ready to attack!',
    attack: 15
};

const Floor5 = () => (
    <div className='floor5-wrapper'>
        <h1 className='level-name'>V School: 5th Floor</h1>
        <img className='background5' src={background5} alt='Level 5' />
        <img className='character' src={character} alt='Character' />
        <img className='dolphinPants' src={dolphinPants} alt='Dolphin Pants' />
        <img className='bob' src={bob} alt='Bob' />
        <img className='ben' src={ben} alt='Ben' />
        <Game stats={stats}></Game>
    </div>
)

export default Floor5;