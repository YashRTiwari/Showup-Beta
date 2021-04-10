import { Box, Button, Divider, TextField } from "@material-ui/core";
import { React, useRef } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
	const firebase = useFirebase();
	const history = useHistory();
	const auth = useSelector((state) => state.firebaseReducer.auth);

	const nameRef = useRef(null);
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

	const signUpUser = () => {
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				history.push("/");
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
			});
	};

	return (
		<div className='SignIn'>
			<h3>Sign Up</h3>
			<Box m={1} />

			<div className='sign-in-inputs'>
				<TextField
					size='small'
					classname='si-input'
					label='Name'
					type='text'
					variant='outlined'
					inputRef={nameRef}
				/>
				<Box m={0.75} />
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

				<Button
					className='si-btn'
					width='50%'
					variant='contained'
					color='secondary'
					onClick={signUpUser}
				>
					Sign Up
				</Button>

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
					Sign Up with Google
				</Button>
			</div>
		</div>
	);
}
