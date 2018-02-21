import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Game from './Game';

ReactDOM.render(
    <BrowserRouter>
        <Game />
    </BrowserRouter>
    , document.getElementById('root'));