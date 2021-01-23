import {React, useState, useRef} from 'react'
import './CreateCueCard.css';
import { TextField, Button } from '@material-ui/core'
import CueCard from '../cueCards/CueCards.js';


export default function CreateCueCard() {

    const [cues, setCues] =  useState(null)
    const titleRef = useRef(null)
    const descRef = useRef(null)

    const addCueCard = (e) => {
        e.preventDefault();
        const cue = {
            "title" : titleRef.current.value,
            "desc" : descRef.current.value
        };
        let newCues = Array({cue})
        if(cues){
            newCues = newCues.concat(cues)
        }
        setCues(newCues)
        console.log(cues)
    }


    return (
        <div className="CreateCueCard">
            <h3>Cue Cards</h3>
            
            <div className="add-cue-cards">
                <form  onSubmit={addCueCard}>
                    <TextField 
                        label="Title"
                        variant="outlined"
                        inputRef={titleRef}
                        InputLabelProps={{
                            shrink: true,
                            }} 
                        />

                    <TextField className="add-cue-input" 
                        label="Description"
                        variant="outlined"
                        inputRef={descRef}
                        InputLabelProps={{
                            shrink: true,
                            }} 
                        />

                    <Button 
                        type="submit"
                        className="add-cue-btn"
                        variant="contained" color="primary" >
                        Add
                    </Button>
                </form>
                    
            </div>

            <div className="add-cue-list">
                {
                    cues && cues.map((item, index) => {
                        console.log(item)
                        return(<CueCard  key={index} title={item.cue.title} desc={item.cue.desc}/>);
                    })
                }
            </div>

        </div>
    )
}
