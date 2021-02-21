import { LIVE_ROOM_ACTION_TYPE } from "../actions/liveRoomActions";

const roomListReducer = (state = [], action) => {
	switch (action.type) {
		case LIVE_ROOM_ACTION_TYPE.GET_LIVE_ROOMS:
			const nState = action.data;
			return nState;
		case "get":
			return state;
		case "add":
			const nstate = [action.data, ...state];
			return nstate;
		default:
			return state;
	}
};

export default roomListReducer;
