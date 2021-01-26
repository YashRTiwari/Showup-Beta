import {liveRoomData} from '../dummyData/Data'

const initialState = null

const roomDetailReducer = (state = initialState, action) => {
        switch(action.type){
            case 'get':
                return liveRoomData[action.index] ;
            default:
                return initialState;
        }
}

export default roomDetailReducer;