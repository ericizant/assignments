import React from 'react';

import './Game.css';

import Header from './shared/Header';
import ScreenRouter from './screens/ScreenRouter';
import Menu from './shared/Menu/Menu';

const Game = () => (
    <div>
        <Header />
        <ScreenRouter />
        <Menu />
    </div>
)

export default Game;