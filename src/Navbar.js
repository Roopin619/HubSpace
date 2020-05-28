import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import logo from './images/brand-logo.jpg';
import AboutMenu from './AboutMenu';
import PartnersMenu from './PartnersMenu';
import ResourcesMenu from './ResourcesMenu';
import SoftwareMenu from './SoftwareMenu';
import './styles/Navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partnersMenu: false,
            aboutMenu: false,
            resourcesMenu: false,
            softwareMenu: false
        };
    }

    handleMenu = (name, value) => {
        this.setState({ [name]: value });
    }

    render() {
        const { partnersMenu, aboutMenu, resourcesMenu, softwareMenu } = this.state;
        return (
            <div className="Navbar">
                <div className="Navbar-box">
                    <div className="logo">
                        <img src={logo} className='img' alt='HubSpace' />
                    </div>
                    <div className="options">
                        <ul className="option-group">
                            <li
                                className="option software"
                                onMouseEnter={() => this.handleMenu('softwareMenu', true)}
                                onMouseLeave={() => this.handleMenu('softwareMenu', false)}
                            >
                                Software <Icon name='dropdown' />
                                {softwareMenu && <SoftwareMenu />}
                            </li>
                            <li className="option pricing">Pricing</li>
                            <li
                                className="option resources"
                                onMouseEnter={() => this.handleMenu('resourcesMenu', true)}
                                onMouseLeave={() => this.handleMenu('resourcesMenu', false)}
                            >
                                Resources <Icon name='dropdown' />
                                {resourcesMenu && <ResourcesMenu />}
                            </li>
                            <li
                                className="option partners"
                                onMouseEnter={() => this.handleMenu('partnersMenu', true)}
                                onMouseLeave={() => this.handleMenu('partnersMenu', false)}
                            >
                                Partners <Icon name='dropdown' />
                                {partnersMenu && <PartnersMenu />}
                            </li>
                            <li
                                className="option about"
                                onMouseEnter={() => this.handleMenu('aboutMenu', true)}
                                onMouseLeave={() => this.handleMenu('aboutMenu', false)}
                            >
                                About <Icon name='dropdown' />
                                {aboutMenu && <AboutMenu />}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
