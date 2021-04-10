import { LIVE_ROOM_ACTION_TYPE } from "../actions/liveRoomActions";

const roomListReducer = (state = [], action) => {
	switch (action.type) {
		case LIVE_ROOM_ACTION_TYPE.GET_LIVE_ROOMS:
			return action.data;
		case "get":
			return state;
		case "add":
			return [action.data, ...state];
		default:
			return state;
	}
};

export default roomListReducer;
