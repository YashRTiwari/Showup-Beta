import React from 'react'
import {JitsiRoom} from '../../components/jitsiRoom/JitsiRoom.js'
import './JoinRoom.css';
import {useParams, useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import CueCard from '../../components/cueCards/CueCards'

export default function JoinRoom() {

    const params = useParams();
    const history = useHistory();

    const roomData = useSelector(state => state.roomListReducer[params.index])

    const onMeetingEnd = () => {
        history.push(`/room-detail/${params.index}/${roomData.title}`)
    }
    
    return (
            <div className="JoinRoom">
                        <JitsiRoom onMeetingEnd={onMeetingEnd} className="j" roomName={params.title}/>
                        <div className="con">

                            <div className="join-room-cues">
                                {
                                    roomData && roomData.cueCards && roomData.cueCards.map((item, index) => {
                                        return(<CueCard readOnly={true}  key={index} data={item} />);
                                    })
                                }
                            </div>
                        </div>
            </div>

        
    )
}
