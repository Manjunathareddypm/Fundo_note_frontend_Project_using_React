import React, {useState} from 'react'
import './takenotethree.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import ColorPopper from '../colorpopper/Colorpopper';
import { updateNote, updateNoteArchive, updateNotesTrash } from '../../Services/dataservices';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import Button from '@mui/material/Button';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import ImageIcon from "@mui/icons-material/Image";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 100, //
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius :'7px', //
  boxShadow: 24,
  p: 4,
};

 function TakeNoteThree({noteObj}) {
  const [open, setOpen] = useState(false);
  const [noteObj1, setNoteObj] = useState({
    _id: "",
    title: "",
    description: "",
  });
  const handleOpen = (obj) => {
    setOpen(true);
    setNoteObj({
      _id: obj._id,
      title: obj.title,
      description: obj.description,
    });
  };

  const handleClose = () => setOpen(false);

 const updateArchive = async() => {
  noteObj.archive = true
  let response = await updateNoteArchive(noteObj)
  console.log(response)
 }

 const updateTrash = async() => {
  noteObj.trash = true
  let response = await updateNotesTrash(noteObj)
  console.log(response)
 }

 const changeTitle = (e) => {
    setNoteObj((prev) => ({ ...prev, title: e.target.value }));
  };

  const changeDes = (e) => {
    setNoteObj((prev) => ({ ...prev, description: e.target.value }));
  };

  const closeButton = async () => {
    let obj = {
      title: noteObj1.title,
      description: noteObj1.description,
    };
    const response = await updateNote(noteObj1);
    console.log(response);
    setOpen(false)
  };

  return (
    <>
            <Card className="takenotethree" style={{ backgroundColor: noteObj.color }}>

                <CardContent onClick={() => handleOpen(noteObj)}>

                    <Typography variant="h6" flexWrap="wrap" gutterBottom >
                        {noteObj.title}
                    </Typography>
                    
                    <Typography component="div" color="text.secondary" paragraph="true" flexWrap="wrap" width="100" height="50%">
                        {noteObj.description}
                    </Typography>

                </CardContent>

                <CardActions>
                    <div className='note-icons' style={{ width: '250px', height: '15px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                       <Tooltip title='Alert'>
                        <AddAlertIcon />
                        </Tooltip>   

                        <Tooltip title='AddPerson'>  
                        <PersonAddAlt1Icon />
                        </Tooltip>

                        <Tooltip title='ColorPopper'>
                        <ColorPopper action='edit' id1={noteObj._id} />
                        </Tooltip>
                        
                        <Tooltip title='Archive'>
                        <ArchiveIcon onClick={updateArchive} />
                        </Tooltip>

                        <Tooltip title='Trash'>
                        <DeleteIcon onClick={updateTrash}/>
                        </Tooltip>
     
                        <Tooltip title='More'>
                        <MoreVertIcon />
                        </Tooltip>

                    </div>
                </CardActions>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ backgroundColor: noteObj.color, width: '300px', height: '150px', display: 'flex', flexDirection: 'column',  marginLeft: '8px', alignItems: 'center' }}>

                    <input type={'text'} defaultValue={noteObj1.title} onChange={changeTitle} style={{ width: '285px', height: '20px', border: 'none', display: 'flex', flexDirection: 'row', fontSize: '1em', marginLeft: '8px', alignItems: 'center', backgroundColor: noteObj.color }}/>
                    <br />

                    <input type={'text'} defaultValue={noteObj1.description}  onChange={changeDes} style={{ width: '285px', height: '20px', border: 'none', display: 'flex', flexDirection: 'row', fontSize: '1em', marginLeft: '8px', alignItems: 'center', backgroundColor: noteObj.color }} />
                    {/* <br /> */}
                    <div className='note-icons'style={{width: '300px', height: '10px', display: 'flex', flexDirection: 'row', marginTop: '30px', justifyContent: 'space-evenly', alignItems: 'center' }}>

                        <AddAlertIcon />

                        <PersonAddAlt1Icon />

                        <ColorPopper action='edit' id1={noteObj._id} />

                        <ImageIcon />

                        <ArchiveIcon onClick={updateArchive} />

                        <DeleteIcon onClick={updateTrash} />


                        <MoreVertIcon />
                        <Button onClick={closeButton} style={{ backgroundColor: noteObj1.color }}>Close</Button>
                    </div>

                </Box>
            </Modal>
 </>
  )
 }

export default TakeNoteThree;



{/* <div className='takenotethree' style={{backgroundColor:noteObj.color}}>
    // <div className='takenotethree1'>
    //         <div className='takenotethree11'onClick={() => handleOpen(noteObj)}>{noteObj.title}</div>
    //         <div className='takenotethree12'><PushPinOutlinedIcon /></div>
    // </div>
    // <div className='takenotethree2' onClick={() => handleOpen(noteObj)}>{noteObj.description}</div>
    // <div className='takenotethree3'>
    //         <div className='takenotethree31'>
    //             <div><AddAlertOutlinedIcon /></div>
    //             <div><PersonAddAlt1Icon /></div>
    //             <div><ColorPopper action ="edit" id1={noteObj._id}/></div>
    //             <div><RestoreFromTrashIcon onClick={updateTrash}/></div>
    //             <div><ArchiveIcon  onClick={updateArchive}/></div>
    //             <div><MoreVertIcon /></div>
    //         </div>
    //         {/* <div className='takenotethree32'> close</div> */}
    //     </div>
    //     <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <Box sx={style}>
    //       <input
    //         type="text"
    //         defaultValue={noteObj1.title}
    //         onChange={changeTitle}
    //       ></input>
    //       <input
    //         type="text"
    //         defaultValue={noteObj1.description}
    //         onChange={changeDes}
    //       ></input>
    //       <button onClick={closeButton}>Close</button>
    //     </Box>
    //   </Modal>
    // </div> */}
