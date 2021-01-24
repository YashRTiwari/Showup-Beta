import React from 'react'
import Header from '../../components/header/Header.js';
import RoomCard from '../../components/roomCard/RoomCard.js'
import {liveRoomData, commingSoonRoomData} from '../../dummyData/Data.js'
import  './AvailableRooms.css';

export default function AvailableRooms() {

    return (
        <div className="AvailableRooms">
            <Header className="room-header" title="Live Rooms"/>
            <div className="avail-room-live">
                
                {
                    liveRoomData.map((item, index) =>{
                        return(<RoomCard roomData={item} />)
                    })
                }
            </div>

            <Header className="room-header" title="Upcoming Rooms"/>
            <div className="avail-room-live">
                {
                    liveRoomData.map((item, index) =>{
                        return(<RoomCard roomData={item} />)
                    })
                }
            </div>
            
        </div>
    )
}
