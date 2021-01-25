import React from 'react'

const initialCreateRoomData = {
    title : '',
    desc : '',
    tags : [],
    startDate: '', 
    endDate: '',
    noOfParticipants: 0,
    cueCards: [],
    inviteParticipants: []
}


export default function CreateRoomReducer(state = initialCreateRoomData, action) {
    if(action.type === 'addRoomDetails'){
        console.log("Data in reduceer -> " + action.payload);
    }
    return(state);
}
