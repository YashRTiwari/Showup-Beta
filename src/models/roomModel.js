class RoomData {
	constructor(
		id,
		title,
		desc,
		tags,
		startDate,
		endDate,
		numOfParticipants,
		cueCards,
		inviteParticipants,
		img
	) {
		this.id = id;
		this.title = title;
		this.desc = desc;
		this.tags = tags;
		this.startDate = startDate;
		this.endDate = endDate;
		this.numOfParticipants = numOfParticipants;
		this.cueCards = cueCards;
		this.inviteParticipants = inviteParticipants;
		this.img = img;
	}
	toString() {
		return this.title;
	}
}
