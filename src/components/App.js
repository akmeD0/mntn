import React, { Component } from 'react';
import Main from './main/Main';
import bg from '../img/bg.jpg'
import Header from './header/Header';

class App extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Header />
                <Main />
                <img className='bg' alt='mountains' src={bg} />
            </div>
        );
    }
}

export default App;
