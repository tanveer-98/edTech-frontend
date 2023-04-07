import axios from 'axios';
const SERVER = import.meta.env.VITE_SERVER;

// const token = window.localStorage.getItem('token');

const api = axios.create()

interface IUserData{
    name : string; 
    mail : string ; 
    password : string ;
}
export const register  = (data : IUserData) => 
 axios.post(`${SERVER}/auth/register`, data)