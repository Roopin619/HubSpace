import React from 'react';
import profile from './images/profile-pic.png';
import './styles/Testimonial.css';

export default function Testimonial() {
    return (
        <div className='Testimonial'>
            <div className='Testimonial-box'>
                <div className='Testimonial-content'>
                    <h1>Start Growing With HubSpace Today</h1>
                    <p className='description'>With tools to make every part of your process more human and a support team excited to help you, getting started with inbound has never been easier.</p>
                    <button className='btn-get'>Get HubSpace free</button>
                    <p className='mini'>Get started with FREE tools, or get more with our premium software.</p>
                </div>
                <div className='Testimonial-image-container'>
                    <img className='Testimonial-image' src={profile} alt='profile-pic' />
                </div>
            </div>
        </div>
    )
}
