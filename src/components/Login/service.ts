import axios from 'axios';
const SERVER = import.meta.env.VITE_SERVER;

const token = window.localStorage.getItem('token');

export const api = axios.create({
    headers : {
        Authorization: `Bearer ${token}` 
    }
})

interface IUserData{
    mail : string ; 
    password : string ;
}
export const login  = (data : IUserData) => 
 axios.post(`${SERVER}/auth/login`, data)

export const verifyToken = () =>{
    console.log("inside verify token")
    console.log(token)
    return api.get(`${SERVER}/auth/test`)
}