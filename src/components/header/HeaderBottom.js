import React, { Component } from 'react';
import inst from '../../img/instagram.svg'
import twit from '../../img/twitter.svg'
import Slider from './Slider';

class HeaderBottom extends Component {
    render() {
        return (
            <div className='header__bottom'>
                <div className='header__soc'>
                    <p className='header__soc--title'>Follow Us</p>
                    <a href='/' className='header__soc--img'>
                        <img alt='instagram' src={inst} className='header__soc--img' />
                    </a>
                    <a href='/' className='header__soc--img'>
                        <img alt='twitter' src={twit} className='header__soc--img' />
                    </a>
                </div>
                <Slider />
            </div>
        );
    }
}

export default HeaderBottom;
