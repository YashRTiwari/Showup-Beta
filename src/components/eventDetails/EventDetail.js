import { TextField } from '@material-ui/core'
import React from 'react'
import './EventDetail.css'
import Tag from '../tags/Tag'

export default function EventDetail({
    eventData, readOnly
}) {

    return (
        <div className="EventDetail">
            <div className="event-image"/>
            <div className="event-info">
                <TextField className="event-input" 
                    value={eventData.title} 
                    label="Title"
                    variant="outlined"
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
                    InputProps={{
                        readOnly: readOnly 
                    }}
                    label="Description"
                    defaultValue={eventData.desc} 
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
                        value={eventData.startDate}
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
                        value={eventData.endDate}
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
                    value={eventData.numOfParticipants}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        readOnly: readOnly 
                    }}
                    />
                </div>

            </div>
        </div>
    )
}
