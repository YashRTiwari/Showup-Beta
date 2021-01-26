import React from 'react'
import './CreateRoom.css'
import {
    Link,
    Switch,
    Route,
    useRouteMatch, useHistory
  } from "react-router-dom";
import EventDetail from '../../components/eventDetails/EventDetail.js';
import CreateCueCard from '../../components/createCueCards/CreateCueCard.js'
import { Button, Divider } from '@material-ui/core';
import {useSelector, useDispatch } from 'react-redux'
import {addUserRoom} from '../../actions'



function CreateRoom() {

    let { path, url } = useRouteMatch();
    let history = useHistory();

    const state = useSelector(state => state.tempRoomDetailReducer);
    const dispatch = useDispatch();


    function goBack(){
        console.log("Called")
        history.push("/user-rooms");
    }

    function goToCueCards() {
        console.log("Called")

        history.push(`${path}/add-cue-cards`);
    }

    function goToRoomDetails() {
        console.log("Called")

        history.push(`${path}/`);
    }

    function goToInviteParticipants() {
        console.log("Called")
        history.push(`${path}/invite-participants`);
    }

    function addRoomToDb() {
        history.push("/user-rooms")
        dispatch(addUserRoom(state))
    }

    return (
            <div className="CreateRoom">

                <Switch>
                    <Route exact path={`${path}/`}>
                            <div className="creat-room-header">
                                <h1>Create Room : 1 of 3</h1>
                                <div>
                                    <Button className="create-room-btn" onClick={goBack} color="default" variant="outlined">Cancel</Button>
                                    <Button className="create-room-btn next" type="button" onClick={goToCueCards} color="secondary" variant="contained">Next</Button>
                                </div>
                            </div>

                            <div className="create-room-navigator">
                                    <Link to={`${path}/`}><div className="create-room-links">Create Room</div></Link>
                                    <Divider width="200px"/>

                                    <div className="create-room-links">Cue Cards</div>
                                    <Divider width="200px"/>
                                    <div className="create-room-links">Invite Participants</div>
                            </div>
                        <EventDetail readOnly={false}/>
                    </Route>

                    <Route path={`${path}/add-cue-cards`} >
                        
                            <div className="creat-room-header">
                                <h1>Create Room : 2 of 3</h1>
                                <div>
                                    <Button className="create-room-btn" color="default" onClick={goToRoomDetails} variant="outlined">Back</Button>
                                    <Button className="create-room-btn next" onClick={goToInviteParticipants} color="secondary" variant="contained">Next</Button>
                                </div>
                            </div>

                            <div className="create-room-navigator">
                                    <Link to={`${path}/`}><div className="create-room-links">Create Room</div></Link>
                                    <Divider width="200px"/>
                                    <Link to={`${path}/add-cue-cards`}><div className="create-room-links">Cue Cards</div></Link>
                                    <Divider width="200px"/>
                                    <div className="create-room-links">Invite Participants</div>
                            </div>
                        
                        <CreateCueCard />

                    </Route>

                    <Route path={`${path}/invite-participants`} >

                            <div className="creat-room-header">
                                <h1>Create Room : 3 of 3</h1>
                                <div>
                                    <Button className="create-room-btn" color="default" onClick={goToCueCards} variant="outlined">Back</Button>
                                    <Button className="create-room-btn next" color="secondary" onClick={addRoomToDb} variant="contained">Finish</Button>
                                </div>
                            </div>

                            <div className="user-avail">
                                No users available
                            </div>

                    </Route>



                </Switch>
            </div>
    )
}

export default CreateRoom;