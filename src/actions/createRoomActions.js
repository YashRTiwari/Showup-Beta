export const addTitleToRoomDetail = (title) => {
	return {
		type: "addTitle",
		data: title,
	};
};

export const addDescToRoomDetail = (desc) => {
	return {
		type: "addDesc",
		data: desc,
	};
};

export const addTagToRoomDetail = (tag) => {
	return {
		type: "addTag",
		data: tag,
	};
};

export const addStartDateToRoomDetail = (sD) => {
	return {
		type: "addStartDate",
		data: sD,
	};
};

export const addEndDateToRoomDetail = (eD) => {
	return {
		type: "addEndDate",
		data: eD,
	};
};

export const addNOPToRoomDetail = (nop) => {
	return {
		type: "addNOP",
		data: nop,
	};
};

export const addCueCardsToRoomDetail = (title, desc) => {
	return {
		type: "addCueCards",
		data: {
			title,
			desc,
		},
	};
};

export const removeCueCardsToRoomDetail = (d) => {
	return {
		type: "removeCueCards",
		data: d,
	};
};

export const addParticipantsToRoomDetail = (ap) => {
	return {
		type: "addParticipants",
		data: ap,
	};
};

export const addImageToRoomDetail = (imgFile) => {
	return {
		type: "addImage",
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
		type: "update",
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
		type: "clear",
	};
};
