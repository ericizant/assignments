import React from 'react';

import './MenuBoxes.css';

// let { characterName, characterClass, characterWeapon, itemsList } = this.props.character;

const MenuBoxes = () => (
    <div className='menuBoxes-container'>
        <div className='menuBox-characterInfo'>
            <h3 className='menuBox-header'>CHARACTER INFO</h3>
            <div className='menuBox-body'>
                <h5>
                    <span className='characterInfo-category1'>Name: </span>
                    <span className='characterInfo-category2'>Spells:</span>
                    <br />
                    <span className='characterInfo-category2'>Weapon: </span>
                    <span className='characterInfo-category4'>Items: </span>
                </h5>
                <div id='playerHealth-container'>
                    <div id='playerHealth-status'>
                        hp: 100
                    </div>
                </div>
                <div id='playerMagic-container'>
                    <div id='playerMagic-status'>
                        mp: 100
                    </div>
                </div>
            </div>
        </div>
        <div className='menuBox-console'>
            <h3 className='menuBox-header'>CONSOLE</h3>
            <div className='menuBox-body'>
                <div id='console-messages'></div>
            </div>
        </div>
        <div className='menuBox-enemyInfo'>
            <h3 className='menuBox-header'>ENEMY INFO</h3>
            <div className='menuBox-body'>
                <h5>
                    <span className='enemeyName'>Enemey Name: </span>
                    <br />
                </h5>
                <div id='enemyHealth-container'>
                    <div id='enemyHealth-status'>
                        hp: 100
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default MenuBoxes;