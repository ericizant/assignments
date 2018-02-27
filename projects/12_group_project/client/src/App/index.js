// App/index.js

//dependencies
import React from 'react';

//styling
import './index.css';

//views
import Header from './shared/Header';
import ScreenRouter from './views/ScreenRouter';

const App = () => (
    <div>
        <Header />
        <ScreenRouter />
    </div>
)

export default App;