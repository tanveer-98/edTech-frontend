import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Gradient1 from "../Gradients/Gradient1/Gradient1";
import { useAppDispatch ,useAppSelector} from "../../store";
import { fetchNotices, selectNotices } from "../../store/notice/noticeSlice";
const AdminNoticeBoard = () => {
  const dispatch = useAppDispatch();
  const notices = useAppSelector(selectNotices);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    console.log(token);
    if (token == null || token === undefined) {
      navigate("/admin/login");
    }
    dispatch(fetchNotices()).then((response)=>{

    })
    .catch((error: any )=>{

    })
    // this part will fix the issue of the Admin Home getting rendered even before it's checked that if the user is already logged in or not
  }, []);

  
  return (
    <div className="relative overflow-hidden z-0 text-white margin-[20px] flex justify-center items-center h-full">
       <Gradient1/>
      <div
        className="relative z-1 overflow-hidden flex justify-center items-center bg-[#242526] rounded-lg
       h-[90%] w-[90%] shadow-md shadow-gray-600"
      >
       
        Admin Nottice period
      </div>
    </div>
  );
};

export default AdminNoticeBoard;
