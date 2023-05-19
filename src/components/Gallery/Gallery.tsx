import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
const photos = ["photo1.jpeg", "photo2.jpeg", "photo3.jpeg", "photo4.jpeg"];
import { toggleScrollbar } from "../functions/toggleScrollbar";
const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [current, setCurrent] = useState<string|null>(null);

  const toggleModal = (photo: string )=>{
    setModal(!modal);
    setCurrent(photo)
    // toggleScrollbar();
  }
  return (
    <>
      <div
        className={`fixed hidden top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-5rem)] max-h-[80%] justify-center items-center bg-yellow-400 ${
          modal ? "hidden" : "hidden"
        }`}
      >
        <h3>Modal Active</h3>
      </div>
      <div className="mt-16">
        <div className="flex justify-center items-center">
          <h3>Gallery</h3>
        </div>
        <div className="flex min-h-screen w-full flex-wrap content-center justify-center p-5 bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {photos.map((photo) => {
              return (
                <>
                  <Tilt>
                    <div onClick ={()=>toggleModal(photo)} className="w-60 md:w-80 hover:scale-110 hover:cursor-pointer  transition-all duration-200 ease-linear bg-transparent p-3">
                      <img className="h-52 w-full object-cover" src={photo} />
                      {/* <ul className="mt-3 flex flex-wrap">
                        <li className="mr-auto">
                          <a
                            href="#"
                            className="flex text-gray-400 hover:text-gray-600"
                          >
                            <svg
                              className="mr-0.5"
                              style={{ width: "24px", height: "24px" }}
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z"
                              />
                            </svg>
                            1
                          </a>
                        </li>
                        <li className="mr-2">
                          <a
                            href="#"
                            className="flex text-gray-400 hover:text-gray-600"
                          >
                            <svg
                              className="mr-0.5"
                              style={{ width: "24px", height: "24px" }}
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                              />
                            </svg>
                            24
                          </a>
                        </li>
                        <li className="mr-2">
                          <a
                            href="#"
                            className="flex text-gray-400 hover:text-gray-600"
                          >
                            <svg
                              className="mr-0.5"
                              style={{ width: "24px", height: "24px" }}
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z"
                              />
                            </svg>
                            3
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex text-gray-400 hover:text-gray-600"
                          >
                            <svg
                              className="mr-0.5"
                              style={{ width: "24px", height: "24px" }}
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                              />
                            </svg>
                            3
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </Tilt>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
