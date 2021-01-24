import React from 'react';
import './Header.css';

export default function Header({title}) {
    return (
        <div className="Header">
            <div className="header-title">{title}</div>
        </div>
    );
}
