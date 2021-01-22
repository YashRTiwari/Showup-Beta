import React from 'react'
import './Sidebar.css'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <HomeRoundedIcon className="sidebar-icons"/>
            <VideocamRoundedIcon className="sidebar-icons"/>
        </div>
    )
}
