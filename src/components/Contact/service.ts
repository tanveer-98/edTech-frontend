import axios from "axios";

const VITE_SERVERURL = import.meta.env.VITE_SERVERURL;

const baseUrl = `${VITE_SERVERURL}/contact`;

export function sendMessageEmail(data:any){
    // console.log(data)
    return axios.post(baseUrl+"/sendEmail",data,{
        headers:{
            'Content-Type': 'application/json'
        }
    });
}
