import React from 'react';

import './Floor3.css';

import MenuBoxes from "../../shared/Menu/MenuBoxes/MenuBoxes.js";
import background3 from './background3.jpg';
import character from './character.png';
import dolphin from './evil_dolphin.png';
import bob from './bob.jpg';
import sam from './sam.jpg';


let stats = {
    player: { //put character first to match layout in game
        name: "Bob",
        hp: 300,
        weapon: " Long Sword",
    },
    enemy: { // removed enemy weapon property
        name: " Major Pain ",
        hp: 300,
        weapon: " Hostile Exercise ",
    },
    message: "Ready to attack!", //changed 'message property key to 'console' to match game window
    attack: 45
};


const Floor3 = () => (
    <div className='floor3-wrapper'>
        <h1>V School: 3rd Floor</h1>
        <img className='background3' src={background3} alt='Level 3' />
        <img className='character' src={character} alt='Character' />
        <img className='dolphin' src={dolphin} alt='Evil Dolphin' />
        <img className='bob' src={bob} alt='Bob' />
        <img className='sam' src={sam} alt='Sam' />
        <MenuBoxes stats={stats}></MenuBoxes>
    </div>
)

export default Floor3;