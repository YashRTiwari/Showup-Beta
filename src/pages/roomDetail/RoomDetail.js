import {Button} from "@material-ui/core";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import EventDetail from "../../components/eventDetails/EventDetail";
import "./RoomDetails.css";
import { getLiveRoomData } from "../../actions/liveRoomActions";


export default function RoomDetail() {
    const params = useParams();
    const dispatch = useDispatch();
    let eventDetail = useSelector((state) => state.roomDetailReducer);

    useEffect(() => {
        dispatch(getLiveRoomData(params.id));
    }, [dispatch, params.id]);

    return (
        <div className='RoomDetail'>
            <div className='room-detail-header'>
                <h1>Room : {eventDetail.title}</h1>
                <Link to={`/join-room/${params.id}/${params.title}`}>
                    <Button variant='contained' color='secondary'>
                        Join Now
                    </Button>
                </Link>
            </div>
            <EventDetail readOnly={true}/>
        </div>
    );
}
