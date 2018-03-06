import React from 'react';

import './Floor1.css';

import MenuBoxes from "../../shared/Menu/MenuBoxes/MenuBoxes.js";
import background1 from './background1.jpg';
import character from './character.png';
import dolphin from './evil_dolphin.png';
import bob from './bob.jpg';
import luke from './luke.jpg';


let stats = {
    player: { //put character first to match layout in game
        name: "Bob",
        hp: 100,
        weapon: "Sword",
    },
    enemy: { // removed enemy weapon property
        name: "Susan",
        hp: 100,
        weapon: "Whip",
    },
    message: "Ready to attack!", //changed 'message property key to 'console' to match game window
    attack: 15
};


const Floor1 = () => (
    <div className='floor1-wrapper'>
        <h1 className='level-name'>V School: 1st Floor</h1>
        <img className='background1' src={background1} alt='Level 1' />
        <img className='character' src={character} alt='Character' />
        <img className='dolphin' src={dolphin} alt='Evil Dolphin' />
        <img className='bob' src={bob} alt='Bob' />
        <img className='luke' src={luke} alt='Luke' />
        <MenuBoxes stats={stats}></MenuBoxes>
    </div>
)

export default Floor1;