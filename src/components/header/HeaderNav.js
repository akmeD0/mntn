import React from 'react';

const HeaderNav = () => {
    return (
        <nav className='header__nav'>
            <a className='header__nav--link' href='/'>Equipment</a>
            <a className='header__nav--link' href='/'>About us</a>
            <a className='header__nav--link' href='/'>Blog</a>
        </nav>
    );
}

export default HeaderNav;
