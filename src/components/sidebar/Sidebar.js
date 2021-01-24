import React from 'react'
import './Sidebar.css'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <Link to="/rooms"><HomeRoundedIcon className="sidebar-icons"/></Link>
            <Link to="/user-rooms"><VideocamRoundedIcon className="sidebar-icons"/></Link>
        </div>
    )
}
