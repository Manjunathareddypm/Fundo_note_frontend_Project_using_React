import React from 'react'
import './takenoteone.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

 function TakeNoteOne() {
  return (
    <div className='takenoteone'>
        
        <div className='takenote1'><input className='takenote11' type="text" placeholder="Take a note..." /></div>
        <div className='takenote2'>
            <div><CheckBoxOutlinedIcon /></div>
            <div><BrushOutlinedIcon /></div>
            <div><ImageOutlinedIcon /></div>
        </div>
       
    </div>
  )
}

export default TakeNoteOne;
