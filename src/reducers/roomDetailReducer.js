import { LIVE_ROOM_ACTION_TYPE } from "../actions/liveRoomActions";

const initialState = {
};

const roomDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIVE_ROOM_ACTION_TYPE.GET_LIVE_ROOM_DATA:
            return action.data;
        default:
            return state;
    }
};

export default roomDetailReducer;
