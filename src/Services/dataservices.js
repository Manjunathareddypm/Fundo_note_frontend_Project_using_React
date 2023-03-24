import axios from 'axios'
const url = "http://localhost:4000/api/v1";

const headerConfig = {
    headers:{
        // Authorization: "Bearer" + " "+ localStorage.getItem('token')
        authorization:`${localStorage.getItem('token')}`
    }
}
console.log(headerConfig);
export const createNote = async(obj) =>{
    let response = await axios.post(url+"/notes",obj,headerConfig)
    return response
}


export const getNote = async() =>{
    let response1 = await axios.get(url+"/notes",headerConfig)
    return response1
}

export const updateNote = async(obj) =>{
    let response1 = await axios.put(url+`/notes/${obj._id}`,obj,headerConfig)
    return response1
}
