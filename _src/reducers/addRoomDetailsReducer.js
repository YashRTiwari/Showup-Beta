const initialState = {
    title: "",
    desc : "",
    tags : [],
    inviteParticipants: [],
    startDate: "",
    endDate : ""
}

const addRoomDetailsReducer = (state = initialState, action) => {
        switch(action.type){
            case 'roomInfo':
                return {...state, title: 'Yash'}
            default:
                return state;
        }
}

export default addRoomDetailsReducer;