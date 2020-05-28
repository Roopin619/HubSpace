import React, { Component } from 'react';
import { Dropdown, Icon, Input } from 'semantic-ui-react';
import './styles/Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'English',
            languageMenu: false,
        };
    }

    handleClick = (evt, { value }) => {
        this.setState({ language: value });
    }

    handleMenu = (value) => {
        this.setState({ languageMenu: value });
    }

    render() {
        const { language, languageMenu } = this.state;
        return (
            <div className="Header">
                <div className="Header-box">
                    <div className="Header-box-left">
                        <div
                            className="language"
                            onMouseEnter={() => this.handleMenu(true)}
                            onMouseLeave={() => this.handleMenu(false)}
                        >
                            <span class='globe'><Icon name='globe' size='small' /></span>
                            <Dropdown
                                open={languageMenu}
                                text={language}
                                pointing
                                className='lang-dropdown'
                            >
                                <Dropdown.Menu>
                                    <Dropdown.Item value='日本語' onClick={this.handleClick}>日本語</Dropdown.Item>
                                    <Dropdown.Item value='Deutsch' onClick={this.handleClick}>Deutsch</Dropdown.Item>
                                    <Dropdown.Item value='English' onClick={this.handleClick}>English</Dropdown.Item>
                                    <Dropdown.Item value='Español' onClick={this.handleClick}>Español</Dropdown.Item>
                                    <Dropdown.Item value='Português' onClick={this.handleClick}>Português</Dropdown.Item>
                                    <Dropdown.Item value='Français' onClick={this.handleClick}>Français</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <span class="sales">Contact Sales</span>
                    </div>
                    <div className="Header-box-right">
                        <Input size='mini' icon='search' iconPosition='left' placeholder='Search...' />
                        <button className='btn-login'>Log in</button>
                        <button className='btn-get'>Get HubSpace free</button>
                    </div>
                </div>
            </div>
        )
    }
}
