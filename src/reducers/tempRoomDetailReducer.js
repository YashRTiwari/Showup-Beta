const initialState = {
    title: "",
    desc : "",
    tags : [],
    startDate: "",
    endDate : ""
}

const tempRoomDetailReducer = (state = initialState, action) => {
        switch(action.type){
            case 'update':
                console.log(action)
                const data = action.data
                console.log(data);
                return {
                    title: data.title,
                    desc : data.desc,
                    startDate: data.startDate,
                    endData: data.endDate,
                    tags: data.tags,
                    numOfParticipants : data.numOfParticipants
                };
            case 'clear':
                return initialState;
            default:
                return initialState;
        }
}

export default tempRoomDetailReducer;