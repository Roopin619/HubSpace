import React from 'react';
import './styles/CommunityBox.css';

export default function CommunityBox(props) {
    return (
        <div className='CommunityBox'>
            {props.data.icon}
            <h1>{props.data.figure}</h1>
            <p>{props.data.text}</p>
        </div>
    )
}
