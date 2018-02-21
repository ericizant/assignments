import React, { Component } from 'react';

import './CommandButtons.css';

class CommandButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: ''
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState(prevState => ({
  //     output: data
  //   }));
  // }

  render() {
    return (
      <div className='commandButtons-wrapper'>
        <button onClick={this.handleClick} className='magic-button' id='magic'>run script</button>
        <button className='attack-button' id='fight' onClick='fight(id)'>execute code</button>
        <button className='item-button' id='item' onClick='item(id)'>[items]</button>
      </div>
    )
  }
}

export default CommandButtons;