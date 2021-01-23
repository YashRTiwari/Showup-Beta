import React from 'react'
import EventDetail from '../eventDetails/EventDetail';
import Sidebar from '../sidebar/Sidebar';
import  './Home.css'
import data from '../dummyData/Data.js'
import CreateCueCard from '../createCueCards/CreateCueCard';

export default function Home() {
    return (
        <div className="Home">
            <Sidebar />
            <div className="home-content">
                <CreateCueCard />
            </div>
        </div>
    )
}
