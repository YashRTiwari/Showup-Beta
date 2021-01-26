import React from 'react'
import './Tag.css';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

export default function Tag({tag, readOnly}) {
    return (
        <div className="Tag">
            <div className="tag-title">{tag}</div> 
            {!readOnly && <IconButton className="tag-remove"><CloseIcon  fontSize="small"/></IconButton>}
        </div>
    )
}
