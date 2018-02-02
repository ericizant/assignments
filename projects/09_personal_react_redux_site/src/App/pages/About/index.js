import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './About.css';

const About = (props) => (
    <div className='about-wrapper'>
        <Header />
        <h1>About</h1>
        <p> This website offers an API service to keep track of your entire personalized crypto portfolio in real time.</p>
        <Footer />
    </div>
)

export default About;