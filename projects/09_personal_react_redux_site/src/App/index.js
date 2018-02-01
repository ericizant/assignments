import React from 'react';

//webpage features
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
//styling
import './index.css';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            Home Page
            <Footer />
        </div>
    )
}

export default App;