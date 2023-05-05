import axios from 'axios';
const VITE_SERVERURL = `${import.meta.env.VITE_SERVERURL}/api`;


export function VerifyJWT(jwtToken : string){

    // if jws token is null then send back a random Bearer token that will fail 
     
    if (jwtToken === null) {
        axios.get(`${VITE_SERVERURL}/login/verify`, {
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
          },
        });
      }
      return axios.get(`${VITE_SERVERURL}/login/verify`, {
        headers: {
            "Authorization": `Bearer ${jwtToken}`,
        },
      });
}



//Route for Admin Login 
export function AdminLogin(formData: any) {
    return axios.post(`${VITE_SERVERURL}/login`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }