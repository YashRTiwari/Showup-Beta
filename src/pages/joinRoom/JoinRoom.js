import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MoveUpIcon from "@material-ui/icons/ExpandLess";
import MoveDownIcon from "@material-ui/icons/ExpandMore";
import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import CueCard from "../../components/cueCards/CueCards";
import { JitsiRoom } from "../../components/jitsiRoom/JitsiRoom.js";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import "./JoinRoom.css";
import {getLiveRoomData} from "../../actions/liveRoomActions";

export default function JoinRoom() {
	const params = useParams();
	const history = useHistory();
	const dispatch = useDispatch();

	const roomData = useSelector((state) => state.roomDetailReducer);
	const [isCueVisible, setIsCueVisible] = useState("join-room-cues");

	const user = useSelector((state) => state.firebaseReducer.auth);

	const [selectedCueIndex, setSelectedCueIndex] = useState(0);

	const onMeetingEnd = () => {
		history.push(`/room-detail/${params.id}/${roomData.title}`);
	};

	useEffect(() => {
		dispatch(getLiveRoomData(params.id));
	}, [dispatch, params.id]);

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
	const handleCueVisibility = () => {
		if (isCueVisible === "join-room-cues") {
			setIsCueVisible("join-room-cues-hide");
		} else {
			setIsCueVisible("join-room-cues");
		}
	};

	return (
		<>
			<div className='join-room-header'>
				<h1> {roomData.title}</h1>
				<Button variant='contained' color='secondary' onClick={onMeetingEnd}>
					Exit
				</Button>
			</div>

			<div className='JoinRoom'>
				<JitsiRoom
					onMeetingEnd={onMeetingEnd}
					displayName={user.displayName}
					className='j'
					roomName={params.id}
				/>

				<Button onClick={handleCueVisibility}>
					{isCueVisible === "join-room-cues" ? <ArrowRightIcon/> : <ArrowLeftIcon/>}
				</Button>

				<div className={isCueVisible}>
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

					{roomData && roomData.cueCards  && <CueCard readOnly={true} data={roomData.cueCards[selectedCueIndex]}/>}

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
