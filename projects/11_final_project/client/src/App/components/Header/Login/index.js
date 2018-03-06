import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className='login-form'>
                <form>
                    <label htmlFor='login-email'>Email: </label>
                    <input className='login-email' type='text' name='session_key' autoCapitalize='off' tabIndex='1' id='login-email' placeholder='Email' autoFocus='autoFocus' />
                    <label htmlFor='login-password'>Password: </label>
                    <input className='login-password' type='password' name='session_password' id='login-password' tabIndex='1' placeholder='Password' />
                    <input className='login-button' type='submit' id='login-submit' tabIndex='1' value='Sign in' />
                </form>
            </div>
        )
    }
}

export default Login;