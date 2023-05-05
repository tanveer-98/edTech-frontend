import React from "react";
import { Link } from "react-router-dom";

import feedImage from "../../../public/rss.png";
import galleryImage from "../../../public/gallery.png";
import postsImage from "../../../public/blog.png";
import membersImage from "../../../public/user.png";
import aboutUsImage from "../../../public/info.png";
import membershipFormImage from "../../../public/membershipForm.png"

const links = [
  {
    description: "View, Add, Edit and Delete Feed",
    image: 'rss.png',
    imageAlt: "feed",
    name: "Feed Admin",
    redirectLink: "/admin/feed",
  },
  {
    description: "View, Add and Delete Gallery",
    image:'gallery.png',
    imageAlt: "gallery",
    name: "Gallery Admin",
    redirectLink: "/admin/gallery",
  },
  {
    description: "View, Add, Edit and Delete Posts",
    image: 'gallery.png',
    imageAlt: "posts",
    name: "Posts Admin",
    redirectLink: "/admin/posts",
  },
  {
    description: "View, Add, Edit and Delete Members",
    image:'users.png',
    imageAlt: "members",
    name: "Members Admin",
    redirectLink: "/admin/members",
  },
  {
    description: "View and Edit About Us Section",
    image: 'info.png',
    imageAlt: "about us icon",
    name: "About Us Admin",
    redirectLink: "/admin/aboutUs",
  },
  {
    description: "View and Edit Membership Form Fields",
    image:"membershipForm.png",
    imageAlt: "membership form icon",
    name: "Membership Form Admin",
    redirectLink: "/admin/membershipForm",
  },
];

const AdminHome = () => {
  return (
    <div className="grid justify-center ">
      <div className="m-10 grid grid-cols-1 justify-items-center gap-2 lg:gap-16 sm:grid-cols-2">
        {links.map((link) => {
          return (
            <div className="m-3 w-[200px] rounded-lg border border-gray-200 bg-white p-3 shadow-md dark:border-gray-700 dark:bg-gray-800">
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
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {link.name}
                  </h5>
                </button>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
  );
};

export default AdminHome;
