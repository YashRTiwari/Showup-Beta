export const getRoomDetails = (index) => {
    return {
        type: "get",
        index : index,
    }
}

export const updateTempRoomDetails = (title, desc, tags, startDate, endDate,  numOfParticipants) => {
    return {
        type: 'update',
        data : {
            title, desc, tags, endDate, startDate, numOfParticipants
        }
    }
}

export const clearTempRoomDetails = () => {
    return {
        type: 'clear',
    }
}