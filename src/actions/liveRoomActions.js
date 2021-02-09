import { firestore } from "../config/firebase-config";

export const addLiveRoom = (room) => {
	return {
		type: "add",
		data: room,
	};
};

export const _getLiveRooms = (data) => {
	return {
		type: LIVE_ROOM_ACTION_TYPE.GET_LIVE_ROOMS,
		data: data,
	};
};

export const getLiveRooms = () => async (dispatch, getState) => {
	await firestore
		.collection("rooms")
		.get()
		.then((querySnapshot) => {
			var list = [];
			querySnapshot.forEach((doc) => {
				const data = doc.data();
				list = [...list, data];
			});
			dispatch(_getLiveRooms(list));
		})
		.catch((err) => {
			console.log(err);
		});
};

export const LIVE_ROOM_ACTION_TYPE = {
	GET_LIVE_ROOMS: "GET_LIVE_ROOMS",
};
