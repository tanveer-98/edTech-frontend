import axios from "axios";
const SERVER = import.meta.env.VITE_SERVER;

let userDetails,
  token: string | null = null;

if (window.localStorage.getItem("userdetails") !== null) {
  userDetails = JSON.parse(
    window.localStorage.getItem("userdetails")!
  ).userDetails;
  if (userDetails?.token !== undefined) {
    token = userDetails.token;
  } else token = "";
}

export const api = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

interface IUserData {
  mail: string;
  password: string;
}
export const login = (data: IUserData) =>
  axios.post(`${SERVER}/auth/login/`, data);

export const verifyToken = () => {
  console.log("inside verify token");
  console.log(token);
  return api.get(`${SERVER}/auth/test`);
};
