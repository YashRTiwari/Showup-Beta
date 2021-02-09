import React from "react";
import Header from "../../components/header/Header.js";
import RoomCard from "../../components/roomCard/RoomCard.js";
import "./AvailableRooms.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AvailableRooms() {
	const liveRoomData = useSelector((state) => state.roomListReducer);

	return (
		<div className='AvailableRooms'>
			<Header className='room-header' title='Live Rooms' />
			<div className='avail-room-live'>
				{liveRoomData.map((item, index) => {
					return (
						<Link to={`/room-detail/${index}/${item.title}`}>
							<RoomCard roomData={item} key={index} index={index} />
						</Link>
					);
				})}
			</div>
		</div>
	);
}
