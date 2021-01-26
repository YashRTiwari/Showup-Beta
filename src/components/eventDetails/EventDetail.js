import { Button, TextField } from '@material-ui/core'
import React, { useRef } from 'react'
import './EventDetail.css'
import Tag from '../tags/Tag'
import {useSelector, useDispatch } from 'react-redux'
import {updateTempRoomDetails, 
    addTagToTempRoomDetail,
    addTitleToTempRoomDetail,
    addDescToTempRoomDetail,
    addStartDateToTempRoomDetail,
    addEndDateToTempRoomDetail,
    addNOPToTempRoomDetail
} from '../../actions'
import { useParams } from 'react-router-dom'


function EventDetail({
    readOnly, 
}) {

    const titleRef = useRef(null);    
    const descRef = useRef(null);
    const tagRef = useRef(null);
    const numOfParticipantsRef = useRef(null);    
    const startDateRef = useRef(null);    
    const endDateRef = useRef(null);

    const params = useParams()
    
    const eventData = useSelector(state => readOnly ? state.roomListReducer[params.index] : state.tempRoomDetailReducer) 
    console.log(eventData);
    const dispatch = useDispatch();
    const userTags = []

    // const moveToCueCards = () => {
       
    //     const title = titleRef.current.value;
    //     const desc = descRef.current.value;
    //     const startDate = startDateRef.current.value
    //     const endDate = endDate.current.value;
    //     const numOfParticipants = numOfParticipantsRef.current.value;
    //     dispatch(updateTempRoomDetails(
    //         titleRef.current.value,
    //         descRef.current.value,
    //         startDateRef.current.value,
    //         endDateRef.current.value,
    //         numOfParticipantsRef.current.value,
    //     ))
    //     if(title.length > 0 && 
    //         desc.length > 0 &&
    //         startDate.length > 0 &&
    //         endDate.length > 0 &&
    //         numOfParticipants > 0
    //         ){
    //         // handleGoToCueCards()
    //     }
    // }

    const handleTitleChange = (e) => {
        dispatch(addTitleToTempRoomDetail(e.target.value))
    }


    const handleDescChange = (e) => {
        dispatch(addDescToTempRoomDetail(e.target.value))
    }

    
    const handleStartDateChange = (e) => {
        dispatch(addStartDateToTempRoomDetail(e.target.value))
    }

    
    const handleEndDateChange = (e) => {
        dispatch(addEndDateToTempRoomDetail(e.target.value))
    }


    
    const handleNOPChange = (e) => {
        dispatch(addNOPToTempRoomDetail(e.target.value))
    }

    const keyPress = (e) => {
        if(e.keyCode == 13){
            dispatch(addTagToTempRoomDetail(tagRef.current.value))
            tagRef.current.value = ''
        }
     }

    return (
        <div className="EventDetail">
            
            <img className="event-image" src={eventData && eventData.img}/>

            <div className="event-info">

                <TextField 
                    className="event-input" 
                    defaultValue={eventData && eventData.title} 
                    label="Title"
                    variant="outlined"
                    inputRef={titleRef}
                    onChange={handleTitleChange}
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
                    onChange={handleDescChange}

                    inputRef={descRef}
                    InputProps={{
                        readOnly: readOnly 
                    }}
                    label="Description"
                    defaultValue={eventData && eventData.desc} 
                    variant="outlined" />

                {
                    !readOnly 
                    
                    &&  
                    
                    <TextField className="event-tag-header" 
                    label="Tags" variant="outlined"
                    inputRef={tagRef} InputLabelProps={{ shrink: true, }} 
                    onKeyDown={keyPress}
                    InputProps={{ readOnly: readOnly  }} 
                     />
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
                        onChange={handleStartDateChange}
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
                        onChange={handleEndDateChange}
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
                        onChange={handleNOPChange}
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
        
            {/* <button onClick={moveToCueCards}>Add Cue</button> */}
            {/* <Link to='/create-room/add-cue-cards'><button onClick={moveToCueCards}>Add Cue</button></Link>  */}
        </div>
    )
}



export default EventDetail;