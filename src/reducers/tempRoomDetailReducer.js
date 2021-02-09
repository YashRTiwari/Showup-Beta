const initialState = {
	title: "",
	desc: "",
	tags: [],
	startDate: "",
	endDate: "",
	numOfParticipants: 0,
	cueCards: [],
	inviteParticipants: [],
	img: null,
};

const tempRoomDetailReducer = (state = initialState, action) => {
	switch (action.type) {
		case "update":
			const data = action.data;
			return {
				title: data.title,
				desc: data.desc,
				startDate: data.startDate,
				endData: data.endDate,
				numOfParticipants: data.numOfParticipants,
			};
		case "addTitle":
			return {
				...state,
				title: action.data,
			};
		case "addDesc":
			return {
				...state,
				desc: action.data,
			};
		case "addTag":
			const newTags = state.tags.concat({ name: action.data });
			return {
				...state,
				tags: newTags,
			};
		case "addStartDate":
			console.log(action.data);
			return {
				...state,
				startDate: action.data,
			};
		case "addEndDate":
			return {
				...state,
				endDate: action.data,
			};
		case "addNOP":
			return {
				...state,
				numOfParticipants: action.data,
			};
		case "addCueCards":
			const newcueCard = {
				title: action.data.title,
				desc: action.data.desc,
			};
			const newCues = state.cueCards.concat([newcueCard]);
			return {
				...state,
				cueCards: newCues,
			};
		case "addImage":
			return {
				...state,
				img: action.data,
			};
		case "removeCueCards":
			const itemToRemove = action.data;
			return {
				...state,
				cueCards: state.cueCards.filter((item) => item !== itemToRemove),
			};
		case "removeTag":
			const tagText = action.data.tag;
			const tagIndex = action.data.index;
			return {
				...state,
				tags: state.tags.filter((item, index) => item.name !== tagText),
			};
		case "addParticipants":
			return {
				...state,
				inviteParticipants: action.data,
			};
		case "clear":
			return initialState;
		default:
			return initialState;
	}
};

export default tempRoomDetailReducer;
