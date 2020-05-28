import React from 'react';
import hero from './images/hero.svg';
import './styles/HomePage.css';

export default function HomePage() {
    return (
        <div className='HomePage'>
            <div className='HomePage-box'>
                <div className='HomePage-content'>
                    <h1>There's a better way to grow.</h1>
                    <p className='description'>Marketing, sales, and service software that helps your business grow without compromise. Because “good for the business” should also mean “good for the customer.”</p>
                    <button className='btn-get'>Get HubSpace free</button>
                    <p className='mini'>Get started with FREE tools, and upgrade as you grow.</p>
                </div>
            </div>
            <div className='HomePage-image-container'>
                <img className='HomePage-image' src={hero} alt='HubSpace'/>
            </div>
            
        </div>
    )
}
