import React from 'react';
import CommunityBox from './CommunityBox';
import './styles/CommunityPage.css';

const data = [
    {
        icon: <i class="fas fa-handshake fa-2x"></i>,
        figure: '150+',
        text: 'HubSpace user groups'
    },
    {
        icon: <i class="fas fa-blog fa-2x"></i>,
        figure: '7M+',
        text: 'monthly visits'
    },
    {
        icon: <i class="fas fa-graduation-cap fa-2x"></i>,
        figure: '248K+',
        text: 'certified professionals'
    },
    {
        icon: <i class="fas fa-users fa-2x"></i>,
        figure: '26K',
        text: 'registered attendees'
    },
    {
        icon: <i class="fas fa-network-wired fa-2x"></i>,
        figure: '400+',
        text: 'integrations'
    },
    {
        icon: <i class="fas fa-globe-americas fa-2x"></i>,
        figure: '6',
        text: 'languages'
    },
    {
        icon: <i class="fas fa-comments fa-2x"></i>,
        figure: '2.6M+',
        text: 'social followers'
    },
    {
        icon: <i class="fas fa-chart-line fa-2x"></i>,
        figure: '5K+',
        text: 'profiles and counting'
    }
]

export default function CommunityPage() {
    return (
        <div className='CommunityPage'>
            <div className='CommunityPage-text'>
                <h1>Learn and grow with award-winning support and a thriving community behind you.</h1>
                <p>You don't have to go it alone. Master the inbound methodology and get the most out of your tools with HubSpace's legendary customer support team and a community of thousands of marketing and sales pros just like you.</p>
            </div>
            <div className='CommunityPage-container'>
                <CommunityBox data={data[0]} />
                <CommunityBox data={data[1]} />
                <CommunityBox data={data[2]} />
                <CommunityBox data={data[3]} />
                <CommunityBox data={data[4]} />
                <CommunityBox data={data[5]} />
                <CommunityBox data={data[6]} />
                <CommunityBox data={data[7]} />
            </div>
        </div>
    )
}
