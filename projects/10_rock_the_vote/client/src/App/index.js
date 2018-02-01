import React from 'react';

import Issues from './Issues';

import './index.css';

const App = (props) => {
    return (
        <div>
            <header className='main-wrapper'>
                <h1>Rock the Vote!!!</h1>
            </header>
            <Issues />
            <footer className='main-wrapper'>
                <h5>&copy;2018</h5>
            </footer>
        </div>
    )

}

export default App;