import React from 'react';
import './styles/SoftwareMenu.css';

export default function SoftwareMenu() {
    return (
        <div className='SoftwareMenu'>
            <div className='row1'>
                <div className='SoftwareMenu-row'>
                    <div className='SoftwareMenu-icon'>
                        <i class="far fa-dot-circle fa-2x"></i>
                    </div>
                    <div className='SoftwareMenu-content'>
                        <h4>Free HubSpace CRM</h4>
                        <p>All your contacts and companies, 100% free.</p>
                    </div>
                </div>
            </div>
            <div className='row2'>
                <div className='SoftwareMenu-row'>
                    <div className='SoftwareMenu-icon'>
                        <i class="fas fa-bolt fa-2x"></i>
                    </div>
                    <div className='SoftwareMenu-content'>
                        <h4>Marketing Hub</h4>
                        <p>Marketing software to increase traffic and leads. Free and premium plans.</p>
                    </div>
                </div>
                <div className='SoftwareMenu-row'>
                    <div className='SoftwareMenu-icon'>
                        <i class="fas fa-star fa-2x"></i>
                    </div>
                    <div className='SoftwareMenu-content'>
                        <h4>Sales Hub</h4>
                        <p>Sales software for closing more deals, faster. Free and premium plans.</p>
                    </div>
                </div>
                <div className='SoftwareMenu-row'>
                    <div className='SoftwareMenu-icon'>
                        <i class="fas fa-heart fa-2x"></i>
                    </div>
                    <div className='SoftwareMenu-content'>
                        <h4>Service Hub</h4>
                        <p>Software for providing first-class customer service. Free and premium plans.</p>
                    </div>
                </div>
                <div className='SoftwareMenu-row'>
                    <div className='SoftwareMenu-icon'>
                        <i class="fas fa-book-open fa-2x"></i>
                    </div>
                    <div className='SoftwareMenu-content'>
                        <h4>CMS Hub <a class="ui mini teal label" href='/'>NEW</a></h4>
                        <p>Content management software to power websites. Premium plans and free trial.</p>
                    </div>
                </div>
            </div>
            <div className='row3'>
                <div className='SoftwareMenu-row row6'>
                    <div className='SoftwareMenu-content'>
                        <h4>App Marketplace</h4>
                        <p>Find HubSpace apps for the tools and software you use to run your business.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
