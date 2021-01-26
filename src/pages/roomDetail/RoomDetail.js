import React from 'react'
import EventDetail from '../../components/eventDetails/EventDetail'
import { useParams } from "react-router-dom";
import {liveRoomData} from '../../dummyData/Data.js';
import  {getRoomDetails} from '../../actions'
import {useDispatch} from 'react-redux'


export default function RoomDetail() {

    const params = useParams();
    const dispath = useDispatch();
    dispath(getRoomDetails(params.index));

    return (
        <div>
            <EventDetail readOnly={true} />
        </div>
    )
}
