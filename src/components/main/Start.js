import React from 'react';
import arrow from '../../img/arrow.svg';

const Start = () => {
    return (
        <div className='start'>
            <div className='start__toper'>
                <div className='start__toper--line'></div>
                <h2 className='start__toper--title'>A Hiking guide</h2>
            </div>
            <h1 className='start__title'>Be prepared for the Mountains and beyond!</h1>
            <button className='start__btn'>
                scroll down
                <img src={arrow} alt='arrow' className='start__btn--arrow' />
            </button>
        </div>
    );
}

export default Start;
