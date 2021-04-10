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

export const _getLiveRoomData = (data) => {
	return {
		type: LIVE_ROOM_ACTION_TYPE.GET_LIVE_ROOM_DATA,
		data,
	};
}

export const getLiveRooms = () => async (dispatch, getState) => {
	await firestore
		.collection("rooms")
		.get()
		.then((querySnapshot) => {
			let list = [];
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

export const getLiveRoomData = (id) => async (dispatch, getState) => {
	dispatch(_getLiveRoomData({}));
	let response = await firestore
		.collection("rooms")
		.doc(id)
		.get();
	dispatch(_getLiveRoomData(response.data()));
};

export const LIVE_ROOM_ACTION_TYPE = {
	GET_LIVE_ROOMS: "GET_LIVE_ROOMS",
	GET_LIVE_ROOM_DATA: "GET_LIVE_ROOM_DATA"
};
