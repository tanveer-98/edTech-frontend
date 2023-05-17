import axios from "axios";
import { INotice } from "../types/types";

const VITE_SERVERURL = `${import.meta.env.VITE_SERVER}`;
const baseUrl = `${VITE_SERVERURL}/notice`;

//  Get All Notices

export const getNotices = () => {
  return axios.get(`${baseUrl}/`);
};

export const getNotice = (id: string) => {
  return axios.get(`${baseUrl}/${id}`);
};

export const postNotice = (data: INotice) => {
  // console.log("inside post" + data);
  return axios.post(`${baseUrl}/`, data, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer" + sessionStorage.getItem('token')
    },
  });
};

export const updateNotice = (data: INotice) => {
    // console.log("inside post" + data);
    return axios.post(`${baseUrl}/`, data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer" + sessionStorage.getItem('token')
      },
    });
  };
  

//
