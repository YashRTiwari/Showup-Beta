import addRoomDetailsReducer from "./addRoomDetailsReducer.js";
import tempRoomDetailReducer from "./tempRoomDetailReducer";
import roomListReducer from "./roomListReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
	addRoomDetailsReducer,
	tempRoomDetailReducer,
	roomListReducer,
});

export default rootReducer;
