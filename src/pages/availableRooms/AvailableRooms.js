import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLiveRooms } from "../../actions/liveRoomActions";
import Header from "../../components/header/Header.js";
import RoomCard from "../../components/roomCard/RoomCard.js";
import "./AvailableRooms.css";

export default function AvailableRooms() {
	const liveRoomData = useSelector((state) => state.roomListReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLiveRooms());
	}, [dispatch]);

	return (
		<div className='AvailableRooms'>
			<Header className='room-header' title='Live Rooms' />
			<div className='avail-room-live'>
				{liveRoomData.map((item, index) => {
					return (
						<Link to={`/room-detail/${item.id}/${item.title}`}>
							<RoomCard roomData={item} key={item.id} id={item.id} />
						</Link>
					);
				})}
			</div>
		</div>
	);
}
