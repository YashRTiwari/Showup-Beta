import addRoomDetailsReducer from './addRoomDetailsReducer.js'
import roomDetailReducer from './roomDetailReducer';
import tempRoomDetailReducer from './tempRoomDetailReducer';
import roomListReducer from './roomListReducer'


import {combineReducers} from 'redux'

const rootReducer = combineReducers(
    {
        addRoomDetailsReducer,
        roomDetailReducer,
        tempRoomDetailReducer,
        roomListReducer,
    });

export default rootReducer;

