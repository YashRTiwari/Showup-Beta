import React, { useState } from "react";
import { JitsiRoom } from "../../components/jitsiRoom/JitsiRoom.js";
import "./JoinRoom.css";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import CueCard from "../../components/cueCards/CueCards";
import MoveUpIcon from "@material-ui/icons/ExpandLess";
import MoveDownIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import EventDetail from "../../components/eventDetails/EventDetail.js";
import { Button } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

export default function JoinRoom() {
	const params = useParams();
	const history = useHistory();

	const roomData = useSelector((state) => state.roomListReducer[params.index]);

	const [selectedCueIndex, setSelectedCueIndex] = useState(0);

	const onMeetingEnd = () => {
		history.push(`/room-detail/${params.index}/${roomData.title}`);
	};

	const handleCueUpDown = (offset) => {
		if (offset > 0) {
			if (selectedCueIndex + 1 < roomData.cueCards.length) {
				setSelectedCueIndex(selectedCueIndex + 1);
			} else {
				setSelectedCueIndex(0);
			}
		} else {
			if (selectedCueIndex - 1 >= 0) {
				setSelectedCueIndex(selectedCueIndex - 1);
			} else {
				setSelectedCueIndex(roomData.cueCards.length - 1);
			}
		}
	};

	return (
		<>
			<div className='join-room-header'>
				<h1>Room : {roomData.title}</h1>
				<Button variant='contained' color='secondary' onClick={onMeetingEnd}>
					Exit
				</Button>
			</div>

			<div className='JoinRoom'>
				<JitsiRoom onMeetingEnd={onMeetingEnd} className='j' roomName={params.title} />
				<div className='join-room-cues'>
					<IconButton
						onClick={(e) => handleCueUpDown(-1)}
						size='small'
						style={{ backgroundColor: "#4682B4" }}
						color='primary'
						aria-label='upload picture'
						component='span'
					>
						<MoveUpIcon htmlColor='#fff' />
					</IconButton>

					<CueCard readOnly={true} data={roomData.cueCards[selectedCueIndex]} />

					<IconButton
						onClick={(e) => handleCueUpDown(1)}
						size='small'
						style={{ backgroundColor: "#4682B4" }}
						color='primary'
					>
						<MoveDownIcon htmlColor='#fff' />
					</IconButton>
				</div>
			</div>
		</>
	);
}
