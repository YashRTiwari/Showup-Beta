import React from 'react'
import RoomCard from '../roomCard/RoomCard';
import Sidebar from '../sidebar/Sidebar';
import  './Home.css'

export default function Home() {
    return (
        <div className="Home">
            <Sidebar />
            <div className="home-content">

            <h1>Opening Soon</h1>

                <div className="temp">
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
                </div>
                
                <h1>Opening Soon</h1>
                <div className="temp">
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
                </div>

            </div>
        </div>
    )
}
