import { React, useRef } from "react";
import "./SignIn.css";
import { useFirebase } from "react-redux-firebase";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Button, Divider, TextField } from "@material-ui/core";

export default function SignIn() {
	const firebase = useFirebase();
	const history = useHistory();
	const auth = useSelector((state) => state.firebaseReducer.auth);
	const location = useLocation();

	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const signInWithGoogle = () => {
		firebase
			.login({
				provider: "google",
				type: "popup",
			})
			.then((cred) => {
				history.push("/");
			});
	};

	const signInWithEmailPassword = () => {
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				history.push("/");
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorMessage);
			});
	};

	const openSignUp = () => {
		history.push("/sign-up");
	};

	return isLoaded(auth) && !isEmpty(auth) ? (
		<Redirect
			to={{
				pathname: "/",
				state: { from: location },
			}}
		/>
	) : (
		<div className='SignIn'>
			<h3>Login</h3>
			<Box m={1} />

			<div className='sign-in-inputs'>
				<TextField
					size='small'
					classname='si-input'
					label='Email'
					type='email'
					variant='outlined'
					inputRef={emailRef}
				/>
				<Box m={0.75} />
				<TextField
					size='small'
					margin='10px'
					classname='si-input'
					label='Password'
					type='Password'
					variant='outlined'
					inputRef={passwordRef}
				/>
				<Box m={0.5} />

				<div className='si-btns'>
					<Button
						className='si-btn'
						width='50%'
						variant='contained'
						color='secondary'
						onClick={openSignUp}
					>
						Sign Up
					</Button>
					<Box m={1} />
					<Button
						className='si-btn'
						width='1'
						variant='contained'
						color='primary'
						onClick={signInWithEmailPassword}
					>
						Sign In
					</Button>
				</div>

				<Box m={1} />

				<Divider />

				<Box m={1} />

				<Button variant='outlined' color='primary' size='medium' onClick={signInWithGoogle}>
					<img
						class='google-icon'
						src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
						width='16px'
						height='16px'
					/>
					<Box m={0.5} />
					Login with Google
				</Button>
			</div>
		</div>
	);
}
