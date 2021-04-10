import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
const PrivateRoute = ({ children, ...remainingProps }) => {
	const auth = useSelector((state) => state.firebaseReducer.auth);
	return (
		<Route
			{...remainingProps}
			render={({ location }) => children // TODO
				// isLoaded(auth) && !isEmpty(auth) ? (
				// 	children
				// ) : (
				// 	<Redirect
				// 		to={{
				// 			pathname: "/sign-in",
				// 			state: { from: location },
				// 		}}
				// 	/>
				// )
			}
		/>
	);
};

export default PrivateRoute;
