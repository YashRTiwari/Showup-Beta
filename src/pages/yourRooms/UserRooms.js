import React from "react";
import "./UserRooms.css";
import Header from "../../components/header/Header.js";
import RoomCard from "../../components/roomCard/RoomCard.js";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearRoomDetail } from "../../actions/createRoomActions";

export default function UserRooms() {
	const dispatch = useDispatch();
	const liveRoomData = useSelector((state) => state.roomListReducer);

	const addRoomClick = () => {
		dispatch(clearRoomDetail());
	};

	return (
		<div className='UserRooms'>
			<div className='user-rooms-header'>
				<Header className='room-header' title='Your Rooms' />
				<Link to='/create-room'>
					<Button type='button' onClick={addRoomClick} variant='contained' color='primary'>
						Add Room
					</Button>
				</Link>
			</div>

			<div className='user-rooms'>
				{liveRoomData.map((item, index) => {
					return (
						<Link key={index} to={`/room-detail/${index}/${item.title}`}>
							<RoomCard roomData={item} index={index} />
						</Link>
					);
				})}
			</div>
		</div>
	);
}
