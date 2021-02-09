export const CREATE_ROOM_ACTION_TYPE = {
	ADD_TITLE: "ADD_TITLE",
	ADD_DESC: "ADD_DESC",
	ADD_TAG: "ADD_TAG",
	ADD_START_DATE: "ADD_START_DATE",
	ADD_END_DATE: "ADD_END_DATE",
	ADD_NOP: "ADD_NOP",
	ADD_CUE_CARDS: "ADD_CUE_CARDS",
	ADD_PARTICIPANTS: "ADD_PARTICIPANTS",
	ADD_IMAGE: "ADD_IMAGE",

	REMOVE_CUE_CARDS: "REMOVE_CUE_CARDS",
	REMOVE_TAG: "REMOVE_TAG",

	CLEAR_ROOM_DATA: "CLEAR_ROOM_DATA",
	UPDATE_ROOM_DATA: "UPDATE_ROOM_DATA",
};

export const addTitleToRoomDetail = (title) => {
	return {
		type: CREATE_ROOM_ACTION_TYPE.ADD_TITLE,
		data: title,
	};
};

export const addDescToRoomDetail = (desc) => {
	return {
		type: CREATE_ROOM_ACTION_TYPE.ADD_DESC,
		data: desc,
	};
};

export const addTagToRoomDetail = (tag) => {
	return {
		type: CREATE_ROOM_ACTION_TYPE.ADD_TAG,
		data: tag,
	};
};

export const addStartDateToRoomDetail = (sD) => {
	return {
		type: CREATE_ROOM_ACTION_TYPE.ADD_START_DATE,
		data: sD,
	};
};

export const addEndDateToRoomDetail = (eD) => {
	return {
		type: CREATE_ROOM_ACTION_TYPE.ADD_END_DATE,
		data: eD,
	};
};

export const addNOPToRoomDetail = (nop) => {
	return {
		type: CREATE_ROOM_ACTION_TYPE.ADD_NOP,
		data: nop,
	};
};

export const addCueCardsToRoomDetail = (title, desc) => {
	return {
		type: CREATE_ROOM_ACTION_TYPE.ADD_CUE_CARDS,
		data: {
			title,
			desc,
		},
	};
};

export const removeCueCardsFromRoomDetail = (d) => {
	return {
		type: CREATE_ROOM_ACTION_TYPE.REMOVE_CUE_CARDS,
		data: d,
	};
};

export const removeTagFromRoomDetail = (tag, index) => {
	return {
		type: CREATE_ROOM_ACTION_TYPE.REMOVE_TAG,
		data: {
			tag,
			index,
		},
	};
};

export const addParticipantsToRoomDetail = (ap) => {
	return {
		type: CREATE_ROOM_ACTION_TYPE.ADD_PARTICIPANTS,
		data: ap,
	};
};

export const addImageToRoomDetail = (imgFile) => {
	return {
		type: CREATE_ROOM_ACTION_TYPE.ADD_IMAGE,
		data: imgFile,
	};
};

export const updateRoomDetail = (
	title,
	desc,
	tags,
	startDate,
	endDate,
	imgFile,
	numOfParticipants
) => {
	return {
		type: CREATE_ROOM_ACTION_TYPE.UPDATE_ROOM_DATA,
		data: {
			title,
			desc,
			tags,
			endDate,
			startDate,
			imgFile,
			numOfParticipants,
		},
	};
};

export const clearRoomDetail = () => {
	return {
		type: CREATE_ROOM_ACTION_TYPE.CLEAR_ROOM_DATA,
	};
};
