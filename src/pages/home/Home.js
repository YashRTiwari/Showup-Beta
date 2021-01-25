import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar.js';
import  './Home.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import AvailableRooms from '../availableRooms/AvailableRooms.js';
import UserRooms from '../yourRooms/UserRooms.js';
import CreateRoom from '../createRooms/CreateRoom.js';
import JoinRoom from '../joinRoom/JoinRoom.js';
import RoomDetail from '../roomDetail/RoomDetail.js';

export default function Home() {
    return (
        <div className="Home">
            <Sidebar />
            <div className="home-content">
                <Switch>
                    <Route path="/rooms"><AvailableRooms /></Route>
                    <Route path="/user-rooms"><UserRooms /></Route>
                    <Route path="/create-room"><CreateRoom/></Route>
                    <Route path="/join-room"><JoinRoom/></Route>
                    <Route path="/room-detail/:data"><RoomDetail/></Route>
                </Switch>
            </div>
        </div>
    )
}
