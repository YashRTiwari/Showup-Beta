import React, { useState } from "react";
import "./CreateRoom.css";
import { Link, Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import EventDetail from "../../components/eventDetails/EventDetail.js";
import CreateCueCard from "../../components/createCueCards/CreateCueCard.js";
import { Button, Divider } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addUserRoom } from "../../actions";
import Error from "../../components/error/Error.js";

function CreateRoom() {
	let { path, url } = useRouteMatch();
	let history = useHistory();

	const state = useSelector((state) => state.tempRoomDetailReducer);
	const dispatch = useDispatch();
	const [error, setError] = useState(null);

	function goBack() {
		history.push("/user-rooms");
	}

	function goToCueCards() {
		// setError(null);
		// var e = null;
		// const startDate = new Date(state.startDate);
		// const endDate = new Date(state.endDate);
		// const nowDate = new Date();
		// if (state.title.length === 0) {
		// 	e = "Please enter title";
		// } else if (state.desc.length === 0) {
		// 	e = "Please enter description";
		// } else if (state.tags.length === 0) {
		// 	e = "Please add tags";
		// } else if (startDate - nowDate < 0) {
		// 	e = "Invalid Start Date";
		// } else if (startDate - endDate > 0) {
		// 	e = "Invalid End Date";
		// } else if (state.numOfParticipants == 0) {
		// 	e = "Please add minimum <b>number of participants</b>";
		// } else if (state.numOfParticipants > 8) {
		// 	e = "Please add minimum <b>number of participants</b>";
		// }
		// setError(e);
		// if (!e) {
		// 	history.push(`${path}/add-cue-cards`);
		// }
		history.push(`${path}/add-cue-cards`);
	}

	function goToRoomDetails() {
		history.push(`${path}/`);
	}

	function goToInviteParticipants() {
		history.push(`${path}/invite-participants`);
	}

	function addRoomToDb() {
		history.push("/user-rooms");
		dispatch(addUserRoom(state));
	}

	const showError = () => {
		return <Error title='Error' message={error} />;
	};

	return (
		<div className='CreateRoom'>
			{error && showError()}

			<Switch>
				<Route exact path={`${path}/`}>
					<Step1 path={path} goBack={goBack} goNext={goToCueCards} />
				</Route>

				<Route path={`${path}/add-cue-cards`}>
					<Step2 path={path} goBack={goToRoomDetails} goNext={goToInviteParticipants} />
				</Route>

				<Route path={`${path}/invite-participants`}>
					<Step3 path={path} goBack={goToCueCards} goNext={addRoomToDb} />
				</Route>
			</Switch>
		</div>
	);
}

const Step1 = ({ goBack, goNext, path }) => {
	return (
		<div className='create-room-step'>
			<div className='creat-room-header'>
				<h1>Create Room : 1 of 3</h1>
				<div>
					<Button className='create-room-btn' onClick={goBack} color='default' variant='outlined'>
						Cancel
					</Button>
					<Button
						className='create-room-btn next'
						type='button'
						onClick={goNext}
						color='secondary'
						variant='contained'
					>
						Next
					</Button>
				</div>
			</div>

			<div className='create-room-navigator'>
				<Link to={`${path}/`}>
					<div className='create-room-links'>Create Room</div>
				</Link>
				<Divider width='200px' />

				<div className='create-room-links'>Cue Cards</div>
				<Divider width='200px' />
				<div className='create-room-links'>Invite Participants</div>
			</div>
			<EventDetail readOnly={false} />
		</div>
	);
};

function Step2({ path, goBack, goNext }) {
	return (
		<div className='create-room-step'>
			<div className='creat-room-header'>
				<h1>Create Room : 2 of 3</h1>
				<div>
					<Button className='create-room-btn' color='default' onClick={goBack} variant='outlined'>
						Back
					</Button>
					<Button
						className='create-room-btn next'
						onClick={goNext}
						color='secondary'
						variant='contained'
					>
						Next
					</Button>
				</div>
			</div>

			<div className='create-room-navigator'>
				<Link to={`${path}/`}>
					<div className='create-room-links'>Create Room</div>
				</Link>
				<Divider width='200px' />
				<Link to={`${path}/add-cue-cards`}>
					<div className='create-room-links'>Cue Cards</div>
				</Link>
				<Divider width='200px' />
				<div className='create-room-links'>Invite Participants</div>
			</div>

			<CreateCueCard />
		</div>
	);
}

function Step3({ path, goBack, goNext }) {
	return (
		<div className='create-room-step'>
			<div className='creat-room-header'>
				<h1>Create Room : 3 of 3</h1>
				<div>
					<Button className='create-room-btn' color='default' onClick={goBack} variant='outlined'>
						Back
					</Button>
					<Button
						className='create-room-btn next'
						color='secondary'
						onClick={goNext}
						variant='contained'
					>
						Finish
					</Button>
				</div>
			</div>

			<div className='user-avail'>No users available</div>
		</div>
	);
}

export default CreateRoom;
