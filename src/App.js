import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { store, rrfProps } from "./store.js";

function App() {
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
