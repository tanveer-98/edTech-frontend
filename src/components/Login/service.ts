import axios from 'axios';
const server = SERVER;

const token = window.localStorage.getItem('token');

const api = axios.create({
    headers : {
        Authorization: `Bearer ${token}` 
    }
})

interface IUserData{
    mail : string ; 
    password : string ;
}
export const login  = (data : IUserData) => 
 axios.post('/api/login', data)