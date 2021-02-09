import addRoomDetailsReducer from "./addRoomDetailsReducer.js";
import tempRoomDetailReducer from "./tempRoomDetailReducer";
import roomListReducer from "./roomListReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
	addRoomDetailsReducer,
	tempRoomDetailReducer,
	roomListReducer,
	firebaseReducer,
	firestoreReducer,
});

export default rootReducer;
