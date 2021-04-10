import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AddIcon from '@material-ui/icons/Add';
import React from "react";
import { useFirebase } from "react-redux-firebase";
import { Link, useHistory } from "react-router-dom";
import "./Sidebar.css";

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

				<Link to={`/create-room`}>
					<AddIcon className='sidebar-icons' />
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
