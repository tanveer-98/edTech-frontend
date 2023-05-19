import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
const photos = ["photo1.jpeg", "photo2.jpeg", "photo3.jpeg", "photo4.jpeg"];
import { toggleScrollbar } from "../functions/toggleScrollbar";
import { AiOutlineClose } from "react-icons/ai";

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [current, setCurrent] = useState<string | undefined>(undefined);

  const toggleModal = (photo: string = "https://picsum.photos/200/300") => {
    setModal(!modal);
    setCurrent(photo);
    toggleScrollbar();
  };
  return (
    <>
      <div
        // className="w-screen h-screen flex justify-center items-center"
        onClick ={()=>toggleModal("null")}
        className={`fixed flex justify-center items-center backdrop-blur-lg top-0 left-0 right-0 z-50  w-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${
          modal ? "flex" : "hidden"
        }`}
      >
        <div className="backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-[#414040f8] rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                  onClick={()=>toggleModal("happy")}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-6 space-y-6">
              <img className="h-[100px] w-[100px] md:h-[500px] md:w-[500px] object-cover" src={current} />
              </div>
{/* 
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  I accept
                </button>
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Decline
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="flex justify-center items-center">
          <h3>Gallery</h3>
        </div>
        <div className="flex min-h-screen w-full flex-wrap content-center justify-center p-2 bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {photos.map((photo) => {
              return (
                <>
                  <Tilt>
                    <div
                      onClick={() => toggleModal(photo)}
                      className="w-60 md:w-80 hover:scale-110 hover:cursor-pointer  transition-all duration-200 ease-linear bg-transparent p-3"
                    >
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
