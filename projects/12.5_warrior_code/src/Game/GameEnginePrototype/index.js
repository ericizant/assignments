import React, { Component } from 'react';

class NewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: { //put character first to match layout in game
        name: name,
        weapon: weapon,
        items: [],
        hp: hp,
        mp: mp,
        isAlive: true
      },
      enemy: { // removed enemy weapon property
        enemyName: EnemyName,
        enemyHp: enemyHp,
        enemyMp: enemyMp,
        enemyWeapon: enemyWeapon,
        isAlive: true
      },
      console: message, //changed 'message property key to 'console' to match game window
      gameState: gamePlay //added... probably wrong
    };
    this.handleAttack = this.handleAttack.bind(this);
  }
  //attack function 
  handleAttack(attackWeapon, characterHP, enemeyHP) {
    let attackMishit = Math.floor(Math.random() * 10); //changed 'misChance' to 'attackMishit'
    if (attackMishit < 3) {
      let message = "Sorry, your attack missed!";
    } else {
      let attackDamage = Math.floor(Math.random(this.props.weapon.damage) * this.props.weapon.damage); //changed 'damage' to 'attackDamage' for clarification
      let newEnemyHP = this.props.enemyHp - damage; //changed 'newHP' to 'newEnemeyHp' for clarity
      let message = "You have attacked the enemy for " + attackDamage + " damage!";
      if (newEnemyHP <= 0) {
        let message = "You have killed the enemy! You WIN!";
        this.state.gameState = endgame //do we need to declare a this.state property for the default game state?
      } else {
        let message = "Now the enemy attacks!";
        EnemyAttack() //do we need to write this as a seperate function?
      }
    }
  }

  //magic function
  handleMagicAttack(magicPoints, magicAttack, enemyHitPoints) {
    if (magicPoints <= 0) {
      let message = "Sorry, you do not have any magic points.";
    } else {
      let magicMishit = Math.floor(Math.random() * 10); //changed 'mishit' to 'magicMishit'
      if (magicMishit < 3) {
        let message = "Sorry, your magic spell misfired!";
      } else {
        let magicDamage = (this.floor(Math.random(magicAttack) * magicAttack) + 5); //changed 'damage' to 'magicDamage'
        let newEnemyHP = enemyHitPoints - damage; //changed 'newHP' to 'newEnemyHP';
        let message = "Your spell hit the enemey for " + magicDamage + " damage!";
        if (newEnemyHP <= 0) {
          let message = "You have killed the enemy! You WIN!";
          this.state.gamestate = endgame
        } else {
          let message = "Now the enemy attacks!"
          EnemyAttack() //write?
        }
      }
    }
  }

  render() {
    return (
      <div>
        <div className="characterStats">
          <span> {this.state.character.name} </span>
          <span> {this.state.character.hp} </span>
          <span> {this.state.character.mp} </span>
          <span> {this.state.character.weapon} </span>
        </div>
        {/* added 'character' to this.state object */}
        <div className="attack">
          <button onClick={this.handleAttack(this.state.character.weapon, this.state.enemey.enemyHp)}>Attack</button>
          <button>Magic</button>
        </div>
        <div>
          <span> {this.state.enemy.enemyName} </span>
          <span> {this.state.enemy.enemyHp} </span>
          <span> {this.state.enemy.enemyMp} </span>
          <span> {this.state.enemy.enemyWeapon} </span>
        </div>
      </div>
    )
  }
}

export default NewGame;