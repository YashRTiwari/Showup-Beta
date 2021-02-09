export const getRoomData = (index) => {
	return {
		type: "get",
		data: index,
	};
};

export const addUserRoom = (room) => {
	return {
		type: "add",
		data: room,
	};
};

export const addLiveRoom = (room) => {
	return {
		type: "add",
		data: room,
	};
};
