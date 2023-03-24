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
import ColorPopper from '../colorpopper/Colorpopper';
import { updateNote } from '../../Services/dataservices';

 function TakeNoteThree({noteObj}) {

 const updateArchive = async() => {
  noteObj.archive = true
  let response = await updateNote(noteObj)
  console.log(response)

 }
  return (
    <div className='takenotethree' style={{backgroundColor:noteObj.color}}>
    <div className='takenotethree1'>
            <div className='takenotethree11'>{noteObj.title}</div>
            <div className='takenotethree12'><PushPinOutlinedIcon /></div>
    </div>
    <div className='takenotethree2'>{noteObj.description}</div>
    <div className='takenotethree3'>
            <div className='takenotethree31'>
                <div><AddAlertOutlinedIcon /></div>
                <div><PersonAddAlt1Icon /></div>
                <div><ColorPopper action ="edit" noteObj={noteObj}/></div>
                <div><InsertPhotoIcon /></div>
                <div><ArchiveIcon  onClick={updateArchive}/></div>
                <div><MoreVertIcon /></div>
            </div>
            {/* <div className='takenotethree32'> close</div> */}
        </div>
    </div>
  )
}

export default TakeNoteThree;

