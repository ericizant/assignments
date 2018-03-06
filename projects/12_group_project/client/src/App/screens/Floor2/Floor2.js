import React from 'react';

import './Floor2.css'

import MenuBoxes from "../../shared/Menu/MenuBoxes/MenuBoxes.js";
import background2 from './background2.jpg';
import character from './character.png';
import dolphin from './evil_dolphin.png';
import bob from './bob.jpg';
import celeste from './celeste.jpg';


let stats = {
    player: { //put character first to match layout in game
        name: " Bob",
        hp: 200,
        weapon: " Double Edged Sword",
    },
    enemy: { // removed enemy weapon property
        name: " Sam",
        hp: 200,
        weapon: " Hatchet ",
    },
    message: "Ready to attack!", //changed 'message property key to 'console' to match game window
    attack: 30
};


const Floor2 = () => (
    <div className='floor2-wrapper'>
        <h1 className='level-name'>V School: 2nd Floor</h1>
        <img className='background2' src={background2} alt='Level 2' />
        <img className='character' src={character} alt='Character' />
        <img className='dolphin' src={dolphin} alt='Evil Dolphin' />
        <img className='bob' src={bob} alt='Bob' />
        <img className='celeste' src={celeste} alt='Celeste' />
        <MenuBoxes stats={stats}></MenuBoxes>
    </div>
)

export default Floor2;