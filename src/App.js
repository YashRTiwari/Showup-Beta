import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { firebase } from "./config/firebase-config";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

function App() {
	const store = createStore(
		rootReducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	const rrfConfig = {
		userProfile: "users",
		useFireastoreForProfile: true,
	};

	const rrfProps = {
		firebase,
		config: rrfConfig,
		dispatch: store.dispatch,
		createFirestoreInstance,
	};

	return (
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<Router>
					<div className='App'>
						<Home />
					</div>
				</Router>
			</ReactReduxFirebaseProvider>
		</Provider>
	);
}

export default App;
