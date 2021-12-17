import React from 'react';
import './ModelSpin.css';

const ModelSpin = () => {
    let i1 = "--i:0";
    let i2 = "--i:1";
    let i3 = "--i:2";
    let i4 = "--i:3";

    return (
        <div className='container'>
            <h1>Model Spin</h1>
            <div className='cube'>
                <div className='top'></div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default ModelSpin;
