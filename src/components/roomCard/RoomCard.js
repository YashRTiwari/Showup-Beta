import React from 'react'
import './RoomCard.css'
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';


export default function RoomCard({roomData}) {

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
        if(desc.length > 250 ){
            return(desc.substring(0, 200)+" ...");
        } else 
            return(desc);
    }

    return (
        <div className="RoomCard">
            <img className="room-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNAaxtRCiihEAjoG3p7wgDzo2z0F06ec61Q&usqp=CAU" norepeat/>
            <div className="room-name">{simplifiedRoomData.title}</div>
            <div className="room-desc">{simplifiedRoomData.desc}</div>
            <div className="room-fun">
                
                <Link to="/join-room"><Button variant="contained" color="secondary">Join</Button></Link>

            </div>
        </div>
    )
}
