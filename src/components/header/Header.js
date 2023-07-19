import React, { Component } from 'react';
import Logo from '../template/Logo'
import HeaderNav from './HeaderNav';
import HeaderBottom from './HeaderBottom';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='header__cont cont'>
                    <div className='header__top'>
                        <Logo />
                        <HeaderNav />
                        <a href='/' className='header__account'>
                            <p className='header__account--text'>Account</p>
                        </a>
                    </div>
                    <HeaderBottom />
                </div>
            </header>
        );
    }
}

export default Header;
