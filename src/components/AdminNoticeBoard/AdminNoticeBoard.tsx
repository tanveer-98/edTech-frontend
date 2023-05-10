import React,
{useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

const AdminNoticeBoard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    console.log(token);
    if (token == null || token === undefined) {
      navigate("/admin/login");
    }

    // this part will fix the issue of the Admin Home getting rendered even before it's checked that if the user is already logged in or not
  }, []);

  return (
    <div className="text-white">AdminNoticeBoard</div>
  )
}

export default AdminNoticeBoard