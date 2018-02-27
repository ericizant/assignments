import React from 'react';

import './Landing.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Landing = (props) => {
    return (
        <div className='landing-main'>
            <Header />
            <div className='landing-body'>
                <form className='reg-form'>
                    <h2 className='reg-title'>Track Your Crypto Portfolio</h2>
                    <h3 className='reg-subtitle'>Join today -- it's free.</h3>
                    <div className='reg-inputs'>
                        <label for='reg-firstName'>First Name</label>
                        <input type='text' />
                        <label for='reg-lastName'>Last Name</label>
                        <input type='text' />
                        <label for='reg-email'>Email</label>
                        <input type='text' />
                        <label for='reg-password'>Password (8 or more characters)</label>
                        <input type='text' />
                        <span className='agreement'>By clicking Join now, you agree to the BitClock User Agreement, Privacy Policy, and Cookie Policy.</span>
                        <input className='reg-button' type='submit' value='Join Now' />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Landing;