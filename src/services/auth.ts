import axios from 'axios';
const VITE_SERVER = `${import.meta.env.VITE_SERVER}`;


export function VerifyJWT(jwtToken : string){

    // if jws token is null then send back a random Bearer token that will fail 
     
    if (jwtToken === null) {
        axios.post(`${VITE_SERVER}/auth/verify`,{}, {
          headers: {
            "Authorization": "Bearer "+ jwtToken,
          },
        });
      }
      return axios.post(`${VITE_SERVER}/auth/verify`, {},{
        headers: {
            "Authorization":  "Bearer "+ jwtToken,
        },
      });
}



//Route for Admin Login 
export function AdminLogin(formData: any) {
    return axios.post(`${VITE_SERVER}/login`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }