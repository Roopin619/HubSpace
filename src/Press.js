import React from 'react';
import G2CrowdLogo from './images/G2-Crowd-logo.png';
import DoorDashLogo from './images/DoorDash-logo.png';
import AtlassianLogo from './images/Atlassian-logo.png';
import SurveyMonkeyLogo from './images/SurveyMonkey-logo.png';
import SubaruLogo from './images/Subaru-logo.png';
import WistiaLogo from './images/Wistia-logo.png';
import ClasspassLogo from './images/Classpass-logo.png';
import VmwareLogo from './images/Vmware-logo.png';
import './styles/Press.css';

export default function Press() {
    return (
        <div className='Press'>
            <div className='Press-box'>
                <div className='Press-text'>
                    <h1>78,700</h1>
                    <p>customers in over <b>120</b> countries growing their businesses with HubSpace</p>
                </div>
                <div className='Press-icons-container'>
                    <div className='icon-box'>
                        <img src={AtlassianLogo} alt='AtlassianLogo' />
                    </div>
                    <div className='icon-box'>
                        <img src={DoorDashLogo} alt='DoorDashLogo' />
                    </div>
                    <div className='icon-box'>
                        <img src={G2CrowdLogo} alt='G2CrowdLogo' />
                    </div>
                    <div className='icon-box'>
                        <img src={SurveyMonkeyLogo} alt='SurveyMonkeyLogo' />
                    </div>
                    <div className='icon-box'>
                        <img src={SubaruLogo} alt='SubaruLogo' />
                    </div>
                    <div className='icon-box'>
                        <img src={WistiaLogo} alt='WistiaLogo' />
                    </div>
                    <div className='icon-box'>
                        <img src={ClasspassLogo} alt='ClasspassLogo' />
                    </div>
                    <div className='icon-box'>
                        <img src={VmwareLogo} alt='VmwareLogo' />
                    </div>
                </div>
            </div>
        </div>
    )
}
