import addRoomDetailsReducer from './addRoomDetailsReducer.js'
import roomDetailReducer from './roomDetailReducer';
import tempRoomDetailReducer from './tempRoomDetailReducer';


import {combineReducers} from 'redux'

const rootReducer = combineReducers(
    {
        addRoomDetailsReducer,
        roomDetailReducer,
        tempRoomDetailReducer
    });

export default rootReducer;

