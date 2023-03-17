import React from 'react'
import './takenotethree.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';


 function TakeNoteThree() {
  return (
    <div className='takenotethree' >
    <div className='takenotethree1'>
            <div className='takenotethree11'><input className='takenotethree111' type="text" placeholder="title" /></div>
            <div className='takenotethree12'><PushPinOutlinedIcon /></div>
    </div>
    <div className='takenotethree2'><input className='takenotethree21' type="text" placeholder="Take a note..." /></div>
    <div className='takenotethree3'>
            <div className='takenotethree31'>
                <div><AddAlertOutlinedIcon /></div>
                <div><PersonAddAlt1Icon /></div>
                <div><ColorLensIcon /></div>
                <div><InsertPhotoIcon /></div>
                <div><ArchiveIcon /></div>
                <div><MoreVertIcon /></div>
                {/* <div><UndoIcon /></div>
                <div><RedoIcon /></div> */}
            </div>
            {/* <div className='takenotethree32'> close</div> */}
        </div>
    </div>
  )
}

export default TakeNoteThree;

