import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import firebase from "firebase";
import firebaseConfig from "./config/firebase-config.js";
// Initialize Firebase

function App() {
	const store = createStore(
		rootReducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	if (!firebase.apps.length) {
		firebase.initializeApp({});
		firebase.analytics();
	} else {
		firebase.app(); // if already initialized, use that one
	}

	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
					<Home />
				</div>
			</Router>
		</Provider>
	);
}

export default App;
