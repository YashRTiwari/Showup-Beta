import tempRoomDetailReducer from "./tempRoomDetailReducer";
import roomListReducer from "./roomListReducer";
import roomDetailReducer from "./roomDetailReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
	tempRoomDetailReducer,
	roomListReducer,
	roomDetailReducer,
	firebaseReducer,
	firestoreReducer,
});

export default rootReducer;
