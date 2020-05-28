import React from 'react';
import './styles/AboutMenu.css';

export default function AboutMenu() {
    return (
        <div className='AboutMenu'>
            <div className='AboutMenu-box'>
                <h4>Company</h4>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Management Team</p>
                <p>Board of Directors</p>
                <p>Careers</p>
            </div>
            <div className='AboutMenu-box'>
                <h4>News</h4>
                <p>HubSpace News</p>
                <p>Press Resources</p>
                <p>Speakers</p>
            </div>
            <div className='AboutMenu-box'>
                <h4>Investors</h4>
                <p>Investor Relations</p>
            </div>
        </div>
    )
}
