import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./RoomCard.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

export default function RoomCard({ roomData, index: id }) {
	const simplifiedRoomData = {
		title: trimTitle(roomData.title),
		desc: trimDescription(roomData.desc),
	};

	function trimTitle(title) {
		if (title.length >= 36) {
			return title.substring(0, 36) + " ...";
		} else return title;
	}

	function trimDescription(desc) {
		if (desc.length > 100) {
			return desc.substring(0, 100) + "...";
		} else return desc;
	}

	return (
		<>
			<div className='RoomCard'>
				<div className='room-img'/>
				<div className='room-name'>{simplifiedRoomData.title}</div>
				<div className="room-join">
					<Link to={`/join-room/${roomData.id}/${roomData.title}`}>
						<h3> Join</h3>
					</Link>
				</div>
			</div>

		</>

	);
}
