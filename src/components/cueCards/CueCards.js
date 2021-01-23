import React from 'react'
import './CueCard.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';


export default function CueCard({title, desc, handleDelete}) {

    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <div className="CueCard">
            <div className="cue-header">
                <div className="cue-title">{title}</div>
                <IconButton aria-controls="cue-menu" aria-haspopup="true" onClick={handleClick}>
                    <MoreVertIcon  className="cue-menu-icon"/>
                </IconButton>
                <Menu id="cure-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
                        <MenuItem onClick={handleClose}><DeleteIcon style={{marginRight : "4px"}}/> Delete</MenuItem>
                </Menu>
            </div>
            <div className="cue-desc">{desc}</div>
        </div>
    )
}
