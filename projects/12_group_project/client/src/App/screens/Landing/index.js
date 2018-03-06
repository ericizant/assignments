// App/views/Landing/index.js

//dependencies
import React from 'react'

//components
import Login from './Login';
import SignUp from './SignUp';

//styling
import './Landing.css';

const Landing = () => (
    <div className='landing-body'>
        <h1>Landing Page</h1>
        <Login />
        <SignUp />
    </div>
)

export default Landing;