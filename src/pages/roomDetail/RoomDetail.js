import React from "react";
import EventDetail from "../../components/eventDetails/EventDetail";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./RoomDetails.css";
import { Button } from "@material-ui/core";

export default function RoomDetail() {
	const params = useParams();
	const eventDetail = useSelector((state) => state.roomListReducer[params.index]);
	return (
		<div className='RoomDetail'>
			<div className='room-detail-header'>
				<h1>Room : {eventDetail.title}</h1>
				<Link to={`/join-room/${params.index}/${params.title}`}>
					<Button variant='contained' color='secondary'>
						Join Now
					</Button>
				</Link>
			</div>
			<EventDetail readOnly={true} />
		</div>
	);
}
