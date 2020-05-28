import React from 'react';
import './styles/Card.css';

export default function Card(props) {
    return (
        <div className='Card'>
            <div className='Card-title'>
                {props.data.icon}
                <h4>{props.data.heading}</h4>
            </div>
            <p>{props.data.content}</p>
            <div className='Card-features'>
                <h5>POPULAR FEATURES</h5>
                <div className='Card-features-row'>
                    <i class="fas fa-check-circle"></i>
                    <p>{props.data.features[0]}</p>
                </div>
                <div className='Card-features-row'>
                    <i class="fas fa-check-circle"></i>
                    <p>{props.data.features[1]}</p>
                </div>
                <div className='Card-features-row'>
                    <i class="fas fa-check-circle"></i>
                    <p>{props.data.features[2]}</p>
                </div>
                <button className='Card-features-button btn-get'>
                    {props.data.buttonText}
                </button>
            </div>
        </div>
    )
}
