import { TextField } from '@material-ui/core'
import React, { useRef } from 'react'
import './EventDetail.css'
import Tag from '../tags/Tag'
import {connect} from 'react-redux';
import {
    Link,
  } from "react-router-dom";

function EventDetail({
    eventData, readOnly, addRoomDetails
}) {

    const titleRef = useRef(null);    
    const descRef = useRef(null);    
    const numOfParticipantsRef = useRef(null);    
    const startDateRef = useRef(null);    
    const endDateRef = useRef(null);    


    const moveToCueCards = (e) => {
        // console.log(
        //     titleRef.current.value+ " " +
        //     descRef.current.value + " " +
        //     numOfParticipantsRef.current.value +" " +
        //     startDateRef.current.value +" " +
        //     endDateRef.current.value + " "
        // )
        const roomDetails = {
            title: titleRef.current.value,
            desc : descRef.current.value,
            numOfParticipants : numOfParticipantsRef.current.value,
            startDate : startDateRef.current.value,
            endDate : endDateRef.current.value 
        }

        addRoomDetails(roomDetails);
    }

    return (
        <div className="EventDetail">
            <div className="event-image"/>
            <div className="event-info">

                <TextField 
                    className="event-input" 
                    value={eventData && eventData.title} 
                    label="Title"
                    variant="outlined"
                    inputRef={titleRef}
                    InputLabelProps={{
                        shrink: true,
                        }} 
                    InputProps={{
                        readOnly: readOnly 
                    }} />

                <TextField className="event-input" 
                    multiline
                    InputLabelProps={{
                        shrink: true,
                    }} 
                    inputRef={descRef}
                    InputProps={{
                        readOnly: readOnly 
                    }}
                    label="Description"
                    defaultValue={eventData && eventData.desc} 
                    variant="outlined" />

                <TextField className="event-tag-header" 
                   label="Tags" 
                   variant="outlined"
                   InputLabelProps={{
                    shrink: true,
                    }} 
                    InputProps={{
                        readOnly: readOnly 
                    }} />

                <div className="event-tags">
                    { eventData && eventData.tags && eventData.tags.map((item, index) => {
                        return(<Tag tag={item["name"]}/>)
                    })}
                </div>

                <div className="event-dates">
                    <TextField
                        className="event-datetime"
                        label="Start Date"
                        type="datetime-local"
                        value={eventData && eventData.startDate}
                        inputRef={startDateRef}
                        InputLabelProps={{
                            shrink: true,
                        }} 
                        InputProps={{
                            readOnly: readOnly 
                        }}
                    />

                    <h4 className="to">to</h4>

                    <TextField 
                        className="event-datetime"
                        label="End Date"
                        type="datetime-local"
                        inputRef={endDateRef}
                        value={eventData && eventData.endDate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            readOnly: readOnly 
                        }}
                    />

                </div>

                <div>
                <TextField
                    className="event-n-part"
                    label="Number of participants"
                    value={eventData && eventData.numOfParticipants}
                    inputRef={numOfParticipantsRef}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        readOnly: readOnly 
                    }}/>

                </div>

            </div>
        
            <button onClick={moveToCueCards}>Add Cue</button>
            {/* <Link to='/create-room/add-cue-cards'><button onClick={moveToCueCards}>Add Cue</button></Link>  */}
        </div>
    )
}

const MapStateToProp = (state) => {
    return  {
        title : state.title,
        desc : state.desc,
        tags : [],
        startDate: state.startDate, 
        endDate: state.endDate,
        noOfParticipants: state.noOfParticipants,
    }
}

const MapDispatchToProp = (dispatch) => {
    return{
        addRoomDetails: (data) => 
        {   
            // console.log(data)
            dispatch({ type: "addRoomDetails", payload: data })
        }
    }
}

export default connect(MapStateToProp, MapDispatchToProp)(EventDetail);