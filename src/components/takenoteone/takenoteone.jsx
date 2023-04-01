import React from 'react'
import './takenoteone.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

 function TakeNoteOne(props) {
 const submit = () => {
    props.listenTakeNoteOne()
  }
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            
            width: 600,
            height: 40,
          },
        }}
      >
        
    <div className='takenoteone' onClick={submit}>
    <Paper elevation={3}>
        <div className='takenote1'><input className='takenote11' type="text" size = '75' placeholder="Take a note..." />
        <div className='takenote2'>
            <div className='icon'><CheckBoxOutlinedIcon /></div>
            <div className='icon'><BrushOutlinedIcon /></div>
            <div className='icon'><ImageOutlinedIcon /></div>
        </div>
        </div>
        </Paper>
       </div> 
       </Box>
       </div>

  )
}

export default TakeNoteOne;
