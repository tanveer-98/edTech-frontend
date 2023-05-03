import React from 'react'
import {Outlet} from 'react-router-dom';
import { Link } from 'react-router-dom';
const AdminHome = () => {
  return (
    <div
    className="
    w-screen 
    h-screen flex 
    justify-center 
    items-center 
    text-white flex-col">

        <div className="flex flex-col justify-center items-center mb-28">
        WelCome to Admin Home 

        <Link className="text-blue-400 hover:text-blue-700"  to="/admin/home/content">Subjects</Link>
        <Link className="text-blue-400 hover:text-blue-700"   to="/admin/home/noticeboard">Notice</Link>

        </div>

        <Outlet/>
    </div>
  )
}

export default AdminHome