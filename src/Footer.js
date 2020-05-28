import React from 'react';
import './styles/Footer.css';
import logo from './images/brand-logo-footer.png';

export default function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer-box'>
                <div className='link-row'>
                    <div className='link-box'>
                        <h4>Increase Your Traffic</h4>
                        <p>Ad Software</p>
                        <p>Blog Software</p>
                        <p>SEO Software</p>
                        <p>Social Media Software</p>
                        <p>Content Management System</p>
                    </div>
                    <div className='link-box'>
                        <h4>Connect With Leads</h4>
                        <p>Find New Prospects</p>
                        <p>Email Tracking</p>
                        <p>Sales Email Templates</p>
                        <p>Click to Call Your Leads</p>
                        <p>Email Marketing</p>
                    </div>
                    <div className='link-box'>
                        <h4>Close and Manage Leads</h4>
                        <p>Document Tracking Tool</p>
                        <p>Meeting Schedule Tool</p>
                        <p>Sales Automation Tool</p>
                        <p>Lead Management Tool</p>
                        <p>Pipeline Management Tool</p>
                    </div>
                    <div className='link-box'>
                        <h4>Support and Tools</h4>
                        <p>HubSpace Partners</p>
                        <p>Join a Local User Group</p>
                        <p>PieSync Integrations</p>
                        <p>HubSpace Templates</p>
                        <p>Free Tools & Generators</p>
                        <button>Contact HubSpace Support</button>
                        <div className='social-icons-container'>
                            <i class="fab fa-facebook-f fa-2x"></i>
                            <i class="fab fa-instagram fa-2x"></i>
                            <i class="fab fa-youtube fa-2x"></i>
                            <i class="fab fa-twitter fa-2x"></i>
                        </div>
                    </div>
                </div>
                <div className='language-row'>
                    <p>English</p>
                    <p>Deutsch</p>
                    <p>日本語</p>
                    <p>Español</p>
                    <p>Português</p>
                    <p>Français</p>
                </div>
                <div className='footer-bottom'>
                    <div className='footer-bottom-left'>
                        <img src={logo} alt='HubSpace'/>
                        <p>Copyright © 2020 HubSpace, Inc.</p>
                    </div>
                    <div className='footer-bottom-right'>
                        <p>Legal Stuff</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
