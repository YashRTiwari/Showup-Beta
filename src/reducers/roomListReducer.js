const initialRoomItem = {
    title : "Bill Gates - How to Avoid a Climate Disaster",
    desc: "In this livestream event, Bill Gates sets out a wide-ranging, practical—and accessible—plan for how the world can get to zero greenhouse gas emissions in time to avoid a climate catastrophe.\n \n"
            + "Bill has spent a decade investigating the causes and effects of climate change. With the help of experts in the fields of physics, chemistry, biology, engineering, political science, and finance, he has focused on what must be done in order to stop the planet’s slide toward certain environmental disaster.\n\n"
            + "He will explain not only why we need to work toward net-zero emissions of greenhouse gases, but also details what we need to do to achieve this profoundly important goal.\n\n"
            + "All tickets to this livestream event include a copy of Bill’s urgent, authoritative new book, How to Avoid a Climate Disaster.\n\n"
            + "This livestream event is held in partnership with Penguin Live and Waterstones.",
    img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F122181047%2F332018043511%2F1%2Foriginal.20210104-175344?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2552%2C1276&s=2ddccc6ea266d1b4baf1783fd213c25a",
    startDate: "2021-02-17T13:00",
    endDate: "2021-02-17T14:00",
    numOfParticipants: 4,
    tags : [
        { name :"Online Event"},
        { name :"Online Seminars"},
        { name :"Online Community Seminars"},
        { name :"#health"},
        { name :"#organization"},
    ],
    cueCards: [{
        title: "Question 1",
        desc : "Is the world actually getting warmer?"
    },
    {
        title: "Question 2",
        desc : "What is the difference between greenhouse effect and global warming? \n What are the greenhouse gases and why are they important to us?"
    },
    {
        title: "Question 3",
        desc : "Should we be concerned about global warming?"
    },
    {
        title: "Question 4",
        desc : "Is ozone depletion a genuine threat?"
    },
    {
        title: "Question 5",
        desc : "Should the Environmental Protection Agency have the authority to regulate carbon dioxide and other greenhouse gases from motor vehicles and power plants?"
    },
    
],
    inviteParticipants: []
};

const roomListReducer = (state = [initialRoomItem], action) => {
    switch(action.type) {
        case 'get':
            return state;
        case 'add':
            const nstate = state.concat(action.data);
            return nstate;
        default:
            return [initialRoomItem];
    }
}

export default roomListReducer;