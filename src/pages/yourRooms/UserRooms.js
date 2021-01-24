import React from 'react'
import './UserRooms.css'
import Header from '../../components/header/Header.js';
import RoomCard from '../../components/roomCard/RoomCard.js'
import {liveRoomData, commingSoonRoomData} from '../../dummyData/Data.js'
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";

export default function UserRooms() {
    return (
        <div className="UserRooms">
            <div className="user-rooms-header">
                <Header className="room-header" title="Your Rooms"/>
                <Link to="/create-room"><Button variant="contained" color="primary">Add Room</Button></Link>
            </div>
            
            <div className="user-rooms">
                
                {
                    liveRoomData.map((item, index) =>{
                        return(<RoomCard roomData={item} />)
                    })
                }
            </div>
        </div>
    )
}
