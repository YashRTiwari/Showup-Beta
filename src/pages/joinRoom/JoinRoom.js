import React from 'react'
import {JitsiRoom} from '../../components/jitsiRoom/JitsiRoom.js'
import './JoinRoom.css';

export default function JoinRoom() {
    return (
        <div className="JoinRoom">
            <JitsiRoom roomName="Hello World"/>
        </div>
    )
}
