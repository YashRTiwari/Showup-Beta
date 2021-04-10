import { Button, Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { addRoomToDb, addUIDToRoomDetail } from "../../actions/createRoomActions.js";
import CreateCueCard from "../../components/createCueCards/CreateCueCard.js";
import Error from "../../components/error/Error.js";
import EventDetail from "../../components/eventDetails/EventDetail.js";
import "./CreateRoom.css";

function CreateRoom() {
	let { path, url } = useRouteMatch();
	let history = useHistory();

	const state = useSelector((state) => state.tempRoomDetailReducer);
	const dispatch = useDispatch();
	const [error, setError] = useState(null);
	const user = useSelector((state) => state.firebaseReducer.auth);

	useEffect(() => {
		//dispatch(addRoomBasicDetails(user.uid));
	}, []);

	const goBack = () => {
		history.push("/user-rooms");
	};

	const goToCueCards = () => {
		history.push(`${path}/add-cue-cards`);
	};

	const goToRoomDetails = () => {
		history.push(`${path}/`);
	};

	const goToInviteParticipants = () => {
		history.push(`${path}/invite-participants`);
	};

	const submitRoomToDb = () => {
		dispatch(addRoomToDb(state));
		history.push("/user-rooms");
	};

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
					<Step3 path={path} goBack={goToCueCards} goNext={submitRoomToDb} />
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
