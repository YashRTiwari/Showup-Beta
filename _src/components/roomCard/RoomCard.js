import React from 'react'
import './RoomCard.css'
import { Button } from '@material-ui/core';
import {Link, useParams} from 'react-router-dom';



export default function RoomCard({roomData, index}) {


    const simplifiedRoomData = {
        title : trimTitle(roomData.title),
        desc : trimDescription(roomData.desc)  ,
    }

    function trimTitle(title) {
        if(title.length >= 40 ){
            return(title.substring(0, 40)+" ...");
        } else 
            return(title);
    }

    function trimDescription(desc) {
        if(desc.length > 100 ){
            return(desc.substring(0, 100)+"...");
        } else 
            return(desc);
    }

    return (
        <div className="RoomCard">
            <img className="room-img" src={roomData.img} norepeat/>
            <div className="room-name">{simplifiedRoomData.title}</div>
            <div className="room-desc">{simplifiedRoomData.desc}</div>
            <div className="room-fun">
                
                <Link to={`/join-room/${index}/${roomData.title}`}><Button variant="contained" color="secondary">Join</Button></Link>

            </div>
        </div>
    )
}
