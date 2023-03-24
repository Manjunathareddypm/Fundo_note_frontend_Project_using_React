import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { updateNote } from '../../Services/dataservices';
export default function ColorPopper({action,setNote,noteObj}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  
		 ];

  const handleClick = async(event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const takeColor = async(color)=> {
if(action === "create") {
    setNote((prev)=>({...prev,color:color}))

} else if (action === 'edit') {
    noteObj.color = color
    console.log(noteObj)
    let response = await updateNote(noteObj)
    console.log(response)

}

  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      {/* <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button> */}
      <ColorLensIcon onClick={handleClick} />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display:"flex" }}>
          {colorArray.map((color)=>(<div onClick={()=>takeColor(color)} style={{height : 35, width : 35, borderRadius:50,backgroundColor:color, margin: 10}}></div>))}
        </Box>
      </Popper>
    </div>
  );
}