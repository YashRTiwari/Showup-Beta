import { TextField } from '@material-ui/core'
import React, { useRef } from 'react'
import './EventDetail.css'
import Tag from '../tags/Tag'
import {useSelector, useDispatch } from 'react-redux'
import {updateTempRoomDetails} from '../../actions'


function EventDetail({
    readOnly,
}) {

    const titleRef = useRef(null);    
    const descRef = useRef(null);    
    const numOfParticipantsRef = useRef(null);    
    const startDateRef = useRef(null);    
    const endDateRef = useRef(null);
    
    const eventData = useSelector(state => readOnly ? state.roomDetailReducer : state.tempRoomDetailReducer) 
    console.log(eventData);
    const dispatch = useDispatch();

    const moveToCueCards = () => {
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
        
        dispatch(updateTempRoomDetails(
            titleRef.current.value,
            descRef.current.value,
            ['hello world'],
            startDateRef.current.value,
            endDateRef.current.value,
            numOfParticipantsRef.current.value,
        ))
    }

    return (
        <div className="EventDetail">
            <div className="event-image"/>
            <div className="event-info">

                <TextField 
                    className="event-input" 
                    defaultValue={eventData && eventData.title} 
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

                {
                    !readOnly &&  <TextField className="event-tag-header" 
                    label="Tags" 
                    variant="outlined"
                    InputLabelProps={{
                     shrink: true,
                     }} 
                     InputProps={{
                         readOnly: readOnly 
                     }} />
                }

                <div className="event-tags">
                    { eventData && eventData.tags && eventData.tags.map((item, index) => {
                        return(<Tag tag={item["name"]} readOnly={readOnly}/>)
                    })}
                </div>

                <div className="event-dates">
                    <TextField
                        className="event-datetime"
                        label="Start Date"
                        type="datetime-local"
                        defaultValue={eventData && eventData.startDate}
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
                        defaultValue={eventData && eventData.endDate}
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
                        defaultValue={eventData && eventData.numOfParticipants}
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



export default EventDetail;