import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { store, rrfProps } from "./store.js";
import PrivateRoute from "./components/privateRoute/PrivateRoute.js";
import SignIn from "./pages/signin/SignIn.js";
import SignUp from "./pages/signUp/SignUp";

function App() {
	return (
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<Router>
					<div className='App'>
						<Switch>
							<Route path='/sign-in'>
								<SignIn />
							</Route>
							<Route path='/sign-up'>
								<SignUp />
							</Route>
							<PrivateRoute path='/'>
								<Home />
							</PrivateRoute>
						</Switch>
					</div>
				</Router>
			</ReactReduxFirebaseProvider>
		</Provider>
	);
}

export default App;
