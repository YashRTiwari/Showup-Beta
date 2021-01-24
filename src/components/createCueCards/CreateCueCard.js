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
        let newCues = Array({
            "title" : titleRef.current.value,
            "desc" : descRef.current.value
        })
        if(cues){
            newCues = newCues.concat(cues)
        }
        setCues(newCues)
        console.log(cues)
    }

    const handleDelete = (itemToRemove) => {
        console.log(itemToRemove)
        const newList = cues.filter((item) => item !== itemToRemove);
        setCues(newList)
    }


    return (
        <div className="CreateCueCard">
            <h3>Cue Cards</h3>
                <form  onSubmit={addCueCard}  className="add-cue-cards">
                    <TextField 
                        label="Title"
                        variant="outlined"
                        inputRef={titleRef}
                        />

                    <TextField className="add-cue-input" 
                        label="Description"
                        variant="outlined"
                        inputRef={descRef}
                        />

                    <Button 
                        type="submit"
                        className="add-cue-btn"
                        variant="contained" color="primary" >
                        Add
                    </Button>
                </form>
                    

            <div className="add-cue-list">
                {
                    cues && cues.map((item, index) => {
                        return(<CueCard  key={index} data={item} handleDelete={handleDelete}/>);
                    })
                }
            </div>

        </div>
    )
}
