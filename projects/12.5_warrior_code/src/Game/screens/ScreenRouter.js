import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StartScreen from './StartScreen/StartScreen';
import Floor1 from './Floor1/Floor1';
import Floor2 from './Floor2/Floor2';
import Floor3 from './Floor3/Floor3';
import Floor4 from './Floor4/Floor4';
import Floor5 from './Floor5/Floor5';
import GameOver from './GameOver/GameOver';

const ScreenRouter = () => (
    <div>
        <Switch>
            <Route exact path='/' component={StartScreen} />
            <Route path='/Floor1' component={Floor1} />
            <Route path='/Floor2' component={Floor2} />
            <Route path='/Floor3' component={Floor3} />
            <Route path='/Floor4' component={Floor4} />
            <Route path='/Floor5' component={Floor5} />
            <Route path='/GameOver' component={GameOver} />
        </Switch>
    </div>
)

export default ScreenRouter;