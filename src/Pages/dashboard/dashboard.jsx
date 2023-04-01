import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header.jsx'
import TakeNoteOne from '../../components/takenoteone/takenoteone.jsx'
import TakeNoteTwo from '../../components/takenotetwo/takenotetwo.jsx'
import TakeNoteThree from '../../components/takenotethree/takenotethree';
import { getNote } from '../../Services/dataservices.js';
import { Drawer } from '@mui/material';
import MiniDrawer from '../../components/Drawer/drawer.jsx';
import { Container, Grid } from "@mui/material";

 function Dashboard() {
    const [toggle, settoggle] = useState(true)
    const [note, setnote] = useState([])

    const [drawertoggle, setDrawerToggle] = useState(false)

    const [choice, setChoice] = useState("notes")

   const listenTakeNoteOne = () => {
        settoggle(false)
    }
    const listenTakeNoteTwo = () => {
        settoggle(true)
    }
   const getAllNote = async () => {
    let response =  await getNote()
    let filter = []
    if(choice === "notes"){
      filter = response.data.data.filter((note) => {
        if(note.archive === false && note.trash === false){
            return note
        }
      })
    }else if(choice === "archive"){
      filter = response.data.data.filter((note) => {
        if(note.archive === true && note.trash === false){
            return note
        }
      })
    }else if(choice === "trash"){
      filter = response.data.data.filter((note) => {
        if(note.archive === false && note.trash === true){
            return note
        }
      })
    }
    console.log(response);
    setnote(filter)
   }
    useEffect(  () =>  {
     getAllNote()
    }, [choice])


    const listenToHeader = () => {
      console.log("hi");
      setDrawerToggle(!drawertoggle)
    }

    const listenToDrawer = (data) => {
      console.log(data);
      setChoice(data)
    }
  return (
    <div>
        <Header listenToHeader={listenToHeader} /> 
        <MiniDrawer drawertoggle={drawertoggle} listenToDrawer={listenToDrawer}/>
        <div >
        {
            toggle?<TakeNoteOne listenTakeNoteOne = {listenTakeNoteOne}/>:<TakeNoteTwo listenTakeNoteTwo = {listenTakeNoteTwo}  />
        }
        </div>
        
            {/* {
              note.map(a => (<TakeNoteThree/>))
            } */}
            <div> <Container
            className="containerbox"
            style={{width :"80vw", marginLeft:"200px", display:"flex", flexDirection:"row", flexWrap:"wrap", marginTop:40}}>
              <Grid className="gridbox" container spacing={3}>
            {note.map((noteObj, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <TakeNoteThree noteObj={noteObj} />
              </Grid>
            ))}
          </Grid>
            </Container>
            </div>
    </div>
  )
}
export default Dashboard