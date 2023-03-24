import axios from 'axios'
const url = "http://localhost:4000/api/v1/";

export const signup = async(obj1) => {
    // console.log(obj1);
    let response = await axios.post (url +"users",obj1)
    console.log(response)
    }

export const siginin = async(obj) => {
// console.log(obj);
let response = await axios.post (url +"users/login",obj)
console.log(response)
return response
}