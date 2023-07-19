import React from 'react';

const Slider = () => {
    return (
        <div className='slider'>
            <div className='slider__text'>
                <p className='slider__text--text'>Start</p>
                <p className='slider__text--text'>01</p>
                <p className='slider__text--text'>02</p>
                <p className='slider__text--text'>03</p>
            </div>
            <div className='slider__bar'>
                <div className='slider__indicator'></div>
                <div className='slider__bg'></div>
            </div>
        </div>
    );
}

export default Slider;
