import React from 'react'
import {Outlet} from 'react-router-dom';

const AdminHome = () => {
  return (
    <div
    className="
    w-screen 
    h-screen flex 
    justify-center 
    items-center 
    text-white">
        <Outlet/>
    </div>
  )
}

export default AdminHome