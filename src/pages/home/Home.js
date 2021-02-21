import { React, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar.js";
import "./Home.css";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import AvailableRooms from "../availableRooms/AvailableRooms.js";
import UserRooms from "../yourRooms/UserRooms.js";
import CreateRoom from "../createRooms/CreateRoom.js";
import JoinRoom from "../joinRoom/JoinRoom.js";
import RoomDetail from "../roomDetail/RoomDetail.js";
import { useDispatch } from "react-redux";
import { getLiveRooms } from "../../actions/liveRoomActions";
import PrivateRoute from "../../components/privateRoute/PrivateRoute.js";

export default function Home() {
	const dispatch = useDispatch();
	dispatch(getLiveRooms());
	return (
		<div className='Home'>
			<Sidebar />
			<div className='home-content'>
				<Switch>
					<Route exact path={`/`}>
						<AvailableRooms />
					</Route>
					<Route path={`/user-rooms`}>
						<UserRooms />
					</Route>
					<Route path={`/create-room`}>
						<CreateRoom />
					</Route>
					<Route path={`/join-room/:index/:title`}>
						<JoinRoom />
					</Route>
					<Route path={`/room-detail/:index/:title`}>
						<RoomDetail />
					</Route>
				</Switch>
			</div>
		</div>
	);
}
