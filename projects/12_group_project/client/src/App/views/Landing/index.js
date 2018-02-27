// App/views/Landing/index.js

//dependencies
import React from 'react'

//styling
import './Landing.css';

//components
import Login from './Login';
import SignUp from './SignUp';

const Landing = () => (
    <div className='landing-body'>
        <h1>Landing Page</h1>
        <Login />
        <SignUp />
    </div>
)

export default Landing;