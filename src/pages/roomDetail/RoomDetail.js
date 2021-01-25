import React from 'react'
import EventDetail from '../../components/eventDetails/EventDetail'


export default function RoomDetail({data}) {

    return (
        <div>
            <EventDetail eventData={data} />
        </div>
    )
}
