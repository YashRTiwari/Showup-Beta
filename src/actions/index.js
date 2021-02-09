import { firestore } from "../config/firebase-config";

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

export const addTitleToTempRoomDetail = (title) => {
	return {
		type: "addTitle",
		data: title,
	};
};

export const addDescToTempRoomDetail = (desc) => {
	return {
		type: "addDesc",
		data: desc,
	};
};

export const addTagToTempRoomDetail = (tag) => {
	return {
		type: "addTag",
		data: tag,
	};
};

export const addStartDateToTempRoomDetail = (sD) => {
	return {
		type: "addStartDate",
		data: sD,
	};
};

export const addEndDateToTempRoomDetail = (eD) => {
	return {
		type: "addEndDate",
		data: eD,
	};
};

export const addNOPToTempRoomDetail = (nop) => {
	return {
		type: "addNOP",
		data: nop,
	};
};

export const addCueCardsToTempRoomDetail = (title, desc) => {
	return {
		type: "addCueCards",
		data: {
			title,
			desc,
		},
	};
};

export const removeCueCardsToTempRoomDetail = (d) => {
	return {
		type: "removeCueCards",
		data: d,
	};
};

export const removeTagFromTempRoomDetail = (tag, index) => {
	return {
		type: "removeTag",
		data: {
			tag,
			index,
		},
	};
};

export const addParticipantsToTempRoomDetail = (ap) => {
	return {
		type: "addParticipants",
		data: ap,
	};
};

export const addImageToTempRoomDetail = (imgFile) => {
	return {
		type: "addImage",
		data: imgFile,
	};
};

export const updateTempRoomDetails = (title, desc, tags, startDate, endDate, numOfParticipants) => {
	firestore
		.collection("users")
		.add({
			first: "Ada",
			last: "Lovelace",
			born: 1815,
		})
		.then((docRef) => {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch((error) => {
			console.error("Error adding document: ", error);
		});

	return {
		type: "update",
		data: {
			title,
			desc,
			tags,
			endDate,
			startDate,
			numOfParticipants,
		},
	};
};

export const clearTempRoomDetails = () => {
	return {
		type: "clear",
	};
};
