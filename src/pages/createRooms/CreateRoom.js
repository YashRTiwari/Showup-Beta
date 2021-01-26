import React from 'react'
import './CreateRoom.css'
import {
    Link,
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import EventDetail from '../../components/eventDetails/EventDetail.js';
import CreateCueCard from '../../components/createCueCards/CreateCueCard.js'
import { Divider } from '@material-ui/core';


function CreateRoom() {

    let { path, url } = useRouteMatch();

    return (
            <div className="CreateRoom">
                <div className="create-room-navigator">
                        <Link to={`${path}/add-room-details`}><div className="create-room-links">Create Room</div></Link>
                        <Divider width="200px"/>
                        <Link to={`${path}/add-cue-cards`}><div className="create-room-links">Cue Cards</div></Link>
                        <Divider width="200px"/>
                        <Link><div className="create-room-links">Invite Participants</div></Link>
                </div>
                <Switch>
                    <Route path={`${path}/add-room-details`}>
                        <EventDetail readOnly={false}/>
                    </Route>

                    <Route path={`${path}/add-cue-cards`}>
                        <CreateCueCard />
                    </Route>
                </Switch>
            </div>
    )
}

export default CreateRoom;