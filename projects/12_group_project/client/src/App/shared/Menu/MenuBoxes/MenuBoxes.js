
import React, { Component } from 'react';
import './MenuBoxes.css';
import './CommandButtons.css';
import GameOver from "../../../screens/GameOver/GameOver.js";


// let { characterName, characterClass, characterWeapon, itemsList } = this.props.character;
// This file can be moved and is a work-in-progress. It has not been tested or integrated.



class MenuBoxes extends Component {
  constructor(props) {
    super(props);
    console.log(props);
   
    this.state = {
      player: { //put character first to match layout in game
        name: props.stats.player.name,
        hp: props.stats.player.hp,
        weapon: props.stats.player.weapon,
      },
      enemy: { // removed enemy weapon property
        name: props.stats.enemy.name,
        hp: props.stats.enemy.hp,
        weapon: props.stats.enemy.weapon,
      },
      message: props.stats.message, //changed 'message property key to 'console' to match game window
      attack: props.stats.attack
    };
    this.handleAttack = this.handleAttack.bind(this);
  }
  //attack function 
  handleAttack() {
    let attackMishit = Math.floor(Math.random() * 10); //changed 'misChance' to 'attackMishit'
    if (attackMishit < 3) {
      let message = "Sorry, your attack missed!";
      this.setState({
        message: message
      })
    }
    else {
      let attackDamage = Math.floor(Math.random() * this.state.attack) + 1; //changed 'damage' to 'attackDamage' for clarification
      this.setState(prevState => {
        return {
          enemy: {
            ...prevState.enemy,
            hp: prevState.enemy.hp - attackDamage
          },
          message: "You have attacked the enemy for " + attackDamage + " damage!"
        }
      });
    }
    setTimeout(() => {
        let enemyMishit = Math.floor(Math.random() * 10); //changed 'misChance' to 'attackMishit'
        if (enemyMishit < 3) {
        let message = "HA! the enemy attack missed! You are spotted dancing!";
        this.setState({
            message: message
        })
        }
        else {
        let playerDamage = Math.floor(Math.random() * this.state.attack) + 1; //changed 'damage' to 'attackDamage' for clarification
        this.setState(prevState => {
            return {
                player: {
                ...prevState.player,
                hp: prevState.player.hp - playerDamage
            },
            message: this.state.enemy.name + " attacked you for " + playerDamage + " damage, with their mighty " + this.state.enemy.weapon + "! OUCH!!!"
            }
            });
        }
    }, 3000);
  }
    render(){
        let {enemy, player, message} = this.state; 
        return (
            enemy.hp < 1 || player.hp < 1 ?
            <div>
                <GameOver />
            </div>
              :
            <div className="menu-wrapper">
                <div className='commandButtons-wrapper'>
                    <button onClick={this.handleClick} className='magic-button' id='magic'>run script</button>
                    <button className='attack-button' id='fight' onClick={this.handleAttack}>execute code</button>
                    <button className='item-button' id='item' onClick='item(id)'>[items]</button>
                </div>
                <div className='menuBoxes-container'>
                    <div className='menuBox-characterInfo'>
                        <h3 className='menuBox-header'>CHARACTER INFO</h3>
                        <div className='menuBox-body'>
                            <h5>
                                <span className='characterInfo-category1'>Name: {player.name}</span>
                                <br />
                                <span className='characterInfo-category2'>Weapon: {player.weapon}</span>
                            </h5>
                            <div id='playerHealth-container'>
                                <div id='playerHealth-status'>
                                    hp: {player.hp}
                                </div>
                            </div>
                            {/* <div id='playerMagic-container'>
                                <div id='playerMagic-status'>
                                    mp: 100
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className='menuBox-console'>
                        <h3 className='menuBox-header'>CONSOLE</h3>
                        <div className='menuBox-body'>
                            <div id='console-messages'> {message}</div>
                        </div>
                    </div>
                    <div className='menuBox-enemyInfo'>
                        <h3 className='menuBox-header'>ENEMY INFO</h3>
                        <div className='menuBox-body'>
                            <h5>
                                <span className='enemeyName'>Enemey Name: {enemy.name}</span>
                                <br />
                                <span className='characterInfo-category2'>Weapon: {enemy.weapon}</span>
                            </h5>
                            <div id='enemyHealth-container'>
                                <div id='enemyHealth-status'>
                                    hp: {enemy.hp}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MenuBoxes;