import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const links = [
  {
    description: "View Add Delete Drive Links for Subjects and Chapters",
    image: "gallery.png",
    imageAlt: "content",
    name: "Content Admin",
    redirectLink: "/admin/content",
  },
  {
    description: "View, Add, Edit and Delete Posts",
    image: "gallery.png",
    imageAlt: "noticeboard",
    name: " Notice Board Admin",
    redirectLink: "/admin/noticeboard",
  },
];

const LoadingComponent = () => {
  return <div className="text-white bg-red w-screen h-screen">Loading...</div>;
};
const AdminHome = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    console.log(token);
    if (token == null || token === undefined) {
      navigate("/admin/login");
    }

    // this part will fix the issue of the Admin Home getting rendered even before it's checked that if the user is already logged in or not
  }, []);

  return (
    <>
      <div className="grid justify-center ">
        <div className="m-10 grid grid-cols-1 justify-items-center gap-2 lg:gap-16 sm:grid-cols-2">
          {links.map((link) => {
            return (
              <div className="m-3 w-[200px] rounded-lg  bg-[#202220] p-3 shadow-md">
                <div className="flex flex-col items-center">  
                  <button className="p-4">
                    <img
                      className="rounded-t-lg"
                      src={link.image}
                      alt={link.imageAlt}
                    />
                  </button>
                </div>  
                <div className="p-5">
                  <button>
                    <h5 className="mb-2 text-[18px] font-montserrat text-left tracking-tight text-[#f2f0ff] dark:text-white">
                      {link.name}
                    </h5>
                  </button>
                  <p className="mb-3 font-montserrat text-[14px] text-left text-[#efedf7] dark:text-gray-400">
                    {link.description}
                  </p>
                  <Link
                    to={link.redirectLink}
                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3   text-center text-xs text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:text-sm"
                  >
                    Redirect
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AdminHome;
