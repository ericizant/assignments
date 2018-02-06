import React from 'react';
import Form from './shared/Form';
import BountyList from './BountyList';
import './index.css';

const App = () => (
    <div>
        <div className='title'>
            <h1>Star Wars: Episode X</h1>
            <h2>The Original Bounty Hunter - Part 3</h2>
        </div>
        <Form add clear />
        <BountyList />
    </div>
)

export default App;