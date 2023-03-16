import React from 'react'
import './takenotetwo.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';


 function TakeNoteTwo() {
  return (
    <div className='takenotetwo' >
    <div className='takenotetwo1'>
            <div className='takenotetwo11'><input className='takenotetwo111' type="text" placeholder="title" /></div>
            <div className='takenotetwo12'><PushPinOutlinedIcon /></div>
    </div>
    <div className='takenotetwo2'><input className='takenotetwo21' type="text" placeholder="Take a note..." /></div>
    <div className='takenotetwo3'>
            <div className='takenotetwo31'>
                <div><AddAlertOutlinedIcon /></div>
                <div><PersonAddAlt1Icon /></div>
                <div><ColorLensIcon /></div>
                <div><InsertPhotoIcon /></div>
                <div><ArchiveIcon /></div>
                <div><MoreVertIcon /></div>
                <div><UndoIcon /></div>
                <div><RedoIcon /></div>
            </div>
            <div className='takenotetwo32'> close</div>
        </div>
    </div>
  )
}

export default TakeNoteTwo;

