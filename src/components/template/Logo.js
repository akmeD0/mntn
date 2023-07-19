import React from 'react';
import logo from '../../img/Logo.svg'

const Logo = () => {
    return (
        <a className='logo' href='/'>
            <img src={logo} alt='MNTN' />
        </a>
    );
}

export default Logo;
