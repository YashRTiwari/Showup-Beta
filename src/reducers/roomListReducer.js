const initialRoomItem = {
    title : "THE MILLENNIUM TOUR 2021",
    desc: "The Millennium Tour with Omarion, Bow Wow and more was rescheduled to April 8, 2021. Ticketholders should hold on to their tickets, which will be honored on the new date. We are pleased to announced that The Millennium Tour has been rescheduled  and will now take place on THURSDAY, APRIL 8th, 2021. All previously purchased tickets will be honored for the new date. If you have any questions about the status of rescheduled dates, please check with your original place of purchase or email boxoffice@wcd.org.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNAaxtRCiihEAjoG3p7wgDzo2z0F06ec61Q&usqp=CAU",
    startDate: "2017-05-24T10:30",
    endDate: "2017-05-24T10:30",
    numOfParticipants: 10,
    tags : [
        { name :"Marketing"},
        { name :"Networking"},
        { name :"Internet"},
        { name :"Marketing"},
        { name :"Networking"},
    ],
    cueCards: [{
        title: "Hello World",
        desc : "The Millennium Tour with Omarion"
    },
    {
        title: "Hello World",
        desc : "The Millennium Tour with Omarion"
    },
    {
        title: "Hello World",
        desc : "The Millennium Tour with Omarion"
    },
    {
        title: "Hello World",
        desc : "The Millennium Tour with Omarion"
    },
    {
        title: "Hello World",
        desc : "The Millennium Tour with Omarion"
    },
    {
        title: "Hello World",
        desc : "The Millennium Tour with Omarion"
    },
    {
        title: "Hello World",
        desc : "The Millennium Tour with Omarion"
    },
    {
        title: "Hello World",
        desc : "The Millennium Tour with Omarion"
    }
],
    inviteParticipants: []
};

const roomListReducer = (state = [initialRoomItem], action) => {
    switch(action.type) {
        case 'get':
            return state;
        case 'add':
            console.log(action.data)
            const nstate = state.concat(action.data);
            return nstate;
        default:
            return [initialRoomItem];
    }
}

export default roomListReducer;