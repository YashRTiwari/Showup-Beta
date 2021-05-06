import { CREATE_ROOM_ACTION_TYPE } from "../actions/createRoomActions.js";

const initialState = {
	createdUserUID: "",
	title: "",
	desc: "",
	tags: [],
	startDate: "",
	endDate: "",
	numOfParticipants: 0,
	cueCards: [],
	inviteParticipants: [],
	img: null,
	imgFile: null,
};

const tempRoomDetailReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_ROOM_ACTION_TYPE.ADD_CREATEUSER_UID:
			return {
				...state,
				createdUserUID: action.data,
			};
		case CREATE_ROOM_ACTION_TYPE.UPDATE_ROOM_DATA:
			const data = action.data;
			return {
				title: data.title,
				desc: data.desc,
				startDate: data.startDate,
				endData: data.endDate,
				numOfParticipants: data.numOfParticipants,
			};
		case CREATE_ROOM_ACTION_TYPE.ADD_TITLE:
			return {
				...state,
				title: action.data,
			};
		case CREATE_ROOM_ACTION_TYPE.ADD_DESC:
			return {
				...state,
				desc: action.data,
			};
		case CREATE_ROOM_ACTION_TYPE.ADD_TAG:
			const newTags = state.tags.concat({ name: action.data });
			return {
				...state,
				tags: newTags,
			};
		case CREATE_ROOM_ACTION_TYPE.ADD_START_DATE:
			return {
				...state,
				startDate: action.data,
			};
		case CREATE_ROOM_ACTION_TYPE.ADD_END_DATE:
			return {
				...state,
				endDate: action.data,
			};
		case CREATE_ROOM_ACTION_TYPE.ADD_NOP:
			return {
				...state,
				numOfParticipants: action.data,
			};
		case CREATE_ROOM_ACTION_TYPE.ADD_CUE_CARDS:
			const newcueCard = {
				title: action.data.title,
				desc: action.data.desc,
			};
			const newCues = state.cueCards.concat([newcueCard]);
			return {
				...state,
				cueCards: newCues,
			};
		case CREATE_ROOM_ACTION_TYPE.ADD_IMAGE:
			return {
				...state,
				img: action.data,
				imgFile: action.file,
			};
		case CREATE_ROOM_ACTION_TYPE.REMOVE_CUE_CARDS:
			const itemToRemove = action.data;
			return {
				...state,
				cueCards: state.cueCards.filter((item) => item !== itemToRemove),
			};
		case CREATE_ROOM_ACTION_TYPE.REMOVE_TAG:
			const tagText = action.data.tag;
			const tagIndex = action.data.index;
			return {
				...state,
				tags: state.tags.filter((item, index) => item.name !== tagText),
			};
		case CREATE_ROOM_ACTION_TYPE.ADD_PARTICIPANTS:
			return {
				...state,
				inviteParticipants: action.data,
			};
		case CREATE_ROOM_ACTION_TYPE.CLEAR_ROOM_DATA:
			return initialState;
		default:
			return initialState;
	}
};

export default tempRoomDetailReducer;
