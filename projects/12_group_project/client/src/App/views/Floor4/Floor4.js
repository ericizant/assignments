// App/views/Floor4/Floor4.js

//dependencies
import React from 'react';

//styling
import './Floor4.css'

//components
import Game from '../../shared/Game';

//images
import background4 from './background4.jpg';
import character from './character.png';
import evilDolphin from './evilDolphin.png';
import bob from './bob.jpg';
import amy from './amy.jpg';


let stats = {
    player: {
        name: 'Bob',
        hp: 100,
        weapon: 'Express Shield'
    },
    enemy: {
        name: 'Amy',
        hp: 100,
        weapon: 'Dolphin Tail-Spin'
    },
    message: 'Ready to attack!',
    attack: 15
};


const Floor4 = () => (
    <div className='floor4-wrapper'>
        <h1 className='level-name'>V School: 4th Floor</h1>
        <img className='background4' src={background4} alt='Level 4' />
        <img className='character' src={character} alt='Character' />
        <img className='evil-dolphin' src={evilDolphin} alt='Evil Dolphin' />
        <img className='bob' src={bob} alt='Bob' />
        <img className='amy' src={amy} alt='Amy' />
        <Game stats={stats}></Game>
    </div>
)

export default Floor4;