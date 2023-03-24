import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header.jsx'
import TakeNoteOne from '../../components/takenoteone/takenoteone.jsx'
import TakeNoteTwo from '../../components/takenotetwo/takenotetwo.jsx'
import TakeNoteThree from '../../components/takenotethree/takenotethree';
import { getNote } from '../../Services/dataservices.js';

 function Dashboard() {
    const [toggle, settoggle] = useState(true)
    const [note, setnote] = useState([])

   const listenTakeNoteOne = () => {
        settoggle(false)
    }
    const listenTakeNoteTwo = () => {
        settoggle(true)
    }
   const getAllNote = async () => {
    let response =  await getNote()
    console.log(response);
    setnote(response.data.data)
   }
    useEffect(  () =>  {
     getAllNote()
    }, [])
  return (
    <div>
        <Header /> 
        <div >
        {
            toggle?<TakeNoteOne listenTakeNoteOne = {listenTakeNoteOne}/>:<TakeNoteTwo listenTakeNoteTwo = {listenTakeNoteTwo}  />
        }
        </div>
        
            {/* {
              note.map(a => (<TakeNoteThree/>))
            } */}
            <div style={{width :"80vw", marginLeft:"200px", display:"flex", flexDirection:"row", flexWrap:"wrap", marginTop:40}}>
{
              note.map(noteObj => (<TakeNoteThree noteObj={noteObj} />))
            }
            </div>

    </div>
  )
}
export default Dashboard