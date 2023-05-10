import axios from "axios";
const SERVER = import.meta.env.VITE_SERVER;

let token: string | null = null;

if (window.sessionStorage.getItem("token") !== undefined) {
  token = window.sessionStorage.getItem("token");
} else token = "";

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
  axios.post(`${SERVER}/auth/loginAdmin`, data);

export const verifyToken = () => {
  console.log("inside verify token");
  console.log(token);
  return api.get(`${SERVER}/auth/test`);
};
