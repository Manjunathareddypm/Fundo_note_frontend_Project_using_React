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
import { createNote } from '../../Services/dataservices';
import ColorPopper from '../colorpopper/Colorpopper';


// let a = 12
// let a = {}
// b =a 

 function TakeNoteTwo(props) {

  const[note,setNote] = React.useState({title:"",description:"",archive:false, color:"" })
  const submited =async() => {
    props.listenTakeNoteTwo()
    let response = await createNote(note)
    console.log(response)
  }

  const takeTitle = (event)=> {
    setNote((prevState)=>({...prevState, title : event.target.value}))
  }
  const takeDescription = (event)=> {
    setNote((prevState)=>({...prevState, description : event.target.value}))
  }

  const getArchive = () => {
    setNote((prevState) => ({...prevState, archive:true}))
  }

  return (
    <div className='takenotetwo' style={{backgroundColor:note.color}} >
    <div className='takenotetwo1'>
            <div className='takenotetwo11'><input style={{backgroundColor:note.color}} onChange={takeTitle} className='takenotetwo111' type="text" placeholder="title" /></div>
            <div className='takenotetwo12'><PushPinOutlinedIcon /></div>
    </div>
    <div className='takenotetwo2'><input style={{backgroundColor:note.color}} onChange={takeDescription} className='takenotetwo21' type="text" placeholder="Take a note..." /></div>
    <div className='takenotetwo3'>
            <div className='takenotetwo31'>
                <div><AddAlertOutlinedIcon /></div>
                <div><PersonAddAlt1Icon /></div>
                <div><ColorPopper action="create" setNote={setNote}/></div>
                <div><InsertPhotoIcon /></div>
                <div><ArchiveIcon  onClick={getArchive}/></div>
                <div><MoreVertIcon /></div>
                <div><UndoIcon /></div>
                <div><RedoIcon /></div>
            </div>
            <div className='takenotetwo32' onClick={submited}> close</div>
        </div>
    </div>
  )
}

export default TakeNoteTwo;

