import React from 'react';
import './styles/ResourcesMenu.css';

export default function ResourcesMenu() {
    return (
        <div className='ResourcesMenu'>
            <div className='ResourcesMenu-row row-1'>
                <div className='ResourcesMenu-col'>
                    <h4>Blog</h4>
                    <p>Read marketing, sales, agency, and customer success blog content.</p>
                </div>
                <div className='ResourcesMenu-col'>
                    <h4>Customer Stories</h4>
                    <p>Hear from the businesses that use HubSpace to grow better every day.</p>
                </div>
                <div className='ResourcesMenu-col'>
                    <h4>Developers</h4>
                    <p>Create apps and custom integrations for businesses using HubSpace.</p>
                </div>
            </div>
            <div className='ResourcesMenu-row row-2'>
                <div className='ResourcesMenu-col'>
                    <h4>Ebooks, Guides & More</h4>
                    <p>Get access to HubSpace’s most popular marketing resources.</p>
                </div>
                <div className='ResourcesMenu-col'>
                    <h4>Onboarding & Services</h4>
                    <p>Find training and consulting services to help you thrive with HubSpace.</p>
                </div>
                <div className='ResourcesMenu-col'>
                    <h4>Research & Reports</h4>
                    <p>Get up-to-date research and data on hot business trends.</p>
                </div>
            </div>
            <div className='ResourcesMenu-row row-3'>
                <div className='ResourcesMenu-col'>
                    <h4>Free Courses & Certifications</h4>
                    <p>Take courses on the latest business trends, taught by industry experts.</p>
                </div>
                <div className='ResourcesMenu-col'>
                    <h4>What Is Inbound?</h4>
                    <p>Get a primer on how inbound helps your business grow better.</p>
                </div>
                <div className='ResourcesMenu-col'>
                    <h4>Customer Support</h4>
                    <p>Get help if you have questions about using HubSpace software.</p>
                </div>
            </div>
        </div>
    )
}
