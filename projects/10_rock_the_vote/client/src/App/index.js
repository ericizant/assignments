import React from 'react';

import IssueData from './IssueData';

import './index.css';

const App = (props) => {
    return (
        <div>
            <header className='main-wrapper'>
                <h1>Rock the Vote!!!</h1>
            </header>
            <IssueData />
            <footer className='main-wrapper'>
                <h5>&copy;2018</h5>
            </footer>
        </div>
    )

}

export default App;