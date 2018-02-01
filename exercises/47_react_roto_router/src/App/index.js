import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

import './index.css';

function App(props) {
    return (
        <div className='app-wrapper'>
            <Navbar></Navbar>
            <Header></Header>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/About' component={About} />
                <Route path='/Services' component={Services} />
            </Switch>
            <Footer></Footer>
        </div>
    );
}

export default App;
