import React from "react";
import "./Sidebar.css";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import IconButton from "@material-ui/core/IconButton";

export default function Sidebar() {
	const firebase = useFirebase();
	const history = useHistory();

	const logout = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				history.push("/");
			});
	};

	return (
		<div className='Sidebar'>
			<div className='menu-item'>
				<Link exact to={`/`}>
					<HomeRoundedIcon className='sidebar-icons' />
				</Link>

				<Link to={`/user-rooms`}>
					<VideocamRoundedIcon className='sidebar-icons' />
				</Link>
			</div>
			<div className='menu-bottom'>
				<IconButton onClick={logout}>
					<ExitToAppIcon />
				</IconButton>
			</div>
		</div>
	);
}
