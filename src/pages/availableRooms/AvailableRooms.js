import React from 'react'
import Header from '../../components/header/Header.js';
import RoomCard from '../../components/roomCard/RoomCard.js'
import {liveRoomData, commingSoonRoomData} from '../../dummyData/Data.js'
import  './AvailableRooms.css';
import {
    Link
  } from "react-router-dom";

export default function AvailableRooms() {

    return (
        <div className="AvailableRooms">
            <Header className="room-header" title="Live Rooms"/>
            <div className="avail-room-live">
                {
                            liveRoomData.map((item, index) =>{ 
                                return(
                                    <Link to={`/room-detail/${index}`}>
                                        <RoomCard roomData={item} key={index}/>
                                    </Link>)
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
