import { React } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../../components/privateRoute/PrivateRoute.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import AvailableRooms from "../availableRooms/AvailableRooms.js";
import CreateRoom from "../createRooms/CreateRoom.js";
import JoinRoom from "../joinRoom/JoinRoom.js";
import RoomDetail from "../roomDetail/RoomDetail.js";
import UserRooms from "../yourRooms/UserRooms.js";
import "./Home.css";

export default function Home() {
	return (
		<div className='Home'>
			<Sidebar />
			<div className='home-content'>
				<Switch>
					<PrivateRoute exact path={`/`}>
						<AvailableRooms />
					</PrivateRoute>
					<PrivateRoute path={`/user-rooms`}>
						<UserRooms />
					</PrivateRoute>
					<PrivateRoute path={`/create-room`}>
						<CreateRoom />
					</PrivateRoute>
					<PrivateRoute path={`/join-room/:id/:title`}>
						<JoinRoom />
					</PrivateRoute>
					<PrivateRoute path={`/room-detail/:id/:title`}>
						<RoomDetail />
					</PrivateRoute>
				</Switch>
			</div>
		</div>
	);
}
