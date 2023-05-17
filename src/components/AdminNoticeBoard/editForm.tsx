import React, { useState ,useEffect} from "react";
// import { getMembersUploadSign } from "../../services/members";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";
import { FiSend } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PasswordShowHide from "../shared/PasswordShowHide";
import { useAppDispatch, useAppSelector } from "../../store";
import {editMembers_, fetchMember, postMembers_ } from "../../store/members/membersSlice";
import MyTextArea from "./shared/TextArea";
import { Button } from "./shared/Button";
import { INotice, INoticeEdit } from "../../types/types";
import {selectMembers,selectCurrentMemberId,selectCurrentMember} from '../../store/members/membersSlice'
const styles = {
  label: "block text-gray-700 text-sm font-bold pt-2 pb-1",
  field:
    "bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none focus:bg-gray-200",
  button:
    " bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600",
  errorMsg: "text-red-500 text-sm",
  textarea:
    "bg-gray-100 w-[300px] sm:w-[600px] lg:w-[800px] focus:shadow-outline rounded block w-full appearance-none focus:bg-gray-200 p-5",
};
import { useCloudinary } from "../../hooks/cloudinary"; // CUSTOM CLOUDINARY HOOK
import {toggleEditModal} from '../../store/members/membersSlice'
const MembersModal = () => {
  const currentMemberId = useAppSelector<string|null>(selectCurrentMemberId)
  const currentMember = useAppSelector(selectCurrentMember)
  const dispatch = useAppDispatch();


  const navigate = useNavigate();
  const redirectLogin = () => {
    navigate("/login");
  };
  const formInitialValues = {
    constituency: currentMember.constituency,
    candidateName: currentMember.candidateName,
    phone: currentMember.phone,
    symbol: currentMember.symbol,
    photo: currentMember.photo,
  } as IMember;
  
  // // console.log("VITE CLOUD NAME: " + import.meta.env.VITE_CLOUD_NAME);
  // // console.log("VITE CLOUD API KEY: " + import.meta.env.VITE_CLOUD_API_KEY);

  useEffect(()=>{
    // console.log("inside use effect of edit form1 ")
    // console.log()
  },[])
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className=" fixed top-0 left-0 w-screen  h-screen right-0 modal overflow-y-hidden overflow-x-hidden p-4  "
    >
      <div className="relative flex justify-center items-center h-screen w-full ">
        <div className="relative rounded-lg  bg-white shadow dark:bg-gray-700">
          <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              EDIT MEMBER
            </h3>
            <button
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick = {()=>dispatch(toggleEditModal())}
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="flex h-full w-full items-center justify-center">
            <div className="flex  w-[500px] items-center justify-center rounded-lg bg-white shadow-lg sm:w-[700px] lg:w-[900px]">
              <Formik
                initialValues={formInitialValues}
                validate={(values) => {
                  const errors: any = {};
                  if (!values.phone) {
                    errors.phone = "Phone Number is Required";
                  } else if (!/^[0-9]{10,10}$/.test(values.phone)) {
                    errors.phone =
                      "Phone should not contain special characters and should be of length 10";
                  }
        
                  if (!values.constituency) {
                    errors.constituency = "Constituency Name is Required";
                  } else if (!/^[A-Za-z]{1,30}$/.test(values.constituency)) {
                    errors.constituency =
                      "Constituency Name should not contain special characters or numbers.";
                  }
        
                  if (!values.candidateName) {
                    errors.candidateName = "Candidate Name is required";
                  } else if (
                    !/^[A-Za-z]{1,30}$/.test(values.candidateName)
                  ) {
                    errors.candidateName = "Invalid candidateName Name";
                  }
        
                 
                  return errors;
                }}

                
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setSubmitting(false);
                  const requiredData = {
                    id: currentMemberId ,
                    constituency: values.constituency,
                    candidateName: values.candidateName,
                    phone: values.phone,
                    symbol: url1,
                    photo: url2,
                  } as IMemberEdit;
                  // console.log("REQUIRED DATA: ", requiredData);
                  dispatch(
                    editMembers_(requiredData)
                  )
                    .then(() => {
      
                      alert("successfully updated profile");
                      dispatch(toggleEditModal());
                    })
                    .catch((err:Error) => {
                      alert("Unsuccessful update" + (err).message);
                    });
                  resetForm();
                }}
              >
                {({
                  values,
                  isSubmitting,
                  isValid,
                  errors,
                  touched,
                  setFieldValue,
                }) => (
                  <div className=" my-10 flex w-[400px] justify-center sm:w-[600px] lg:w-[800px] ">
                    <Form className=" form-training w-[300px] sm:w-[600px] lg:w-[800px]">
                      <div className="form-group row py-sm-1 px-sm-3">
                        <label className={styles.label} htmlFor="constituency">
                          CONSTITUENCY
                          {errors.constituency ? (
                            <span className={styles.errorMsg}>*</span>
                          ) : (
                            ""
                          )}
                        </label>
                        <Field
                          className={`${styles.field} ${
                            touched.constituency && errors.constituency
                              ? "is-invalid"
                              : ""
                          }`}
                          type="text"
                          name="constituency"
                          placeholder="Enter Constituency"
                        />
                        <ErrorMessage
                          name="constituency"
                          component="span"
                          className={styles.errorMsg}
                        />
                      </div>
                      <div className="form-group row py-sm-1 px-sm-3">
                        <label className={styles.label} htmlFor="candidateName">
                          CANDIDATE NAME
                          {errors.candidateName ? (
                            <span className={styles.errorMsg}>*</span>
                          ) : (
                            ""
                          )}
                        </label>
                        <Field
                          className={`${styles.field} ${
                            touched.candidateName && errors.candidateName
                              ? "is-invalid"
                              : ""
                          }`}
                          type="text"
                          name="candidateName"
                          placeholder="Candidate Name"
                        />
                        <ErrorMessage
                          name="candidateName"
                          component="span"
                          className={styles.errorMsg}
                        />
                      </div>
                      <div className="form-group row py-sm-2 px-sm-3">
                        <label className={styles.label} htmlFor="phone">
                          PHONE
                          {errors.phone ? (
                            <span className={styles.errorMsg}>*</span>
                          ) : (
                            ""
                          )}
                        </label>
                        <Field
                          className={`${styles.field} ${
                            touched.phone && errors.phone ? "is-invalid" : ""
                          }`}
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                        />

                        <ErrorMessage
                          name="phone"
                          component="div"
                          className={styles.errorMsg}
                        />
                      </div>
                      <div className="form-group row py-sm-2  px-sm-3 my-2 pb-5">
                        <label className={styles.label} htmlFor="profileurl">
                          Upload Symbol
                        </label>
                        <Field
                          className={`${styles.field} ${
                            touched.symbol && errors.symbol ? "is-invalid" : ""
                          }`}
                          type="text"
                          name="symbol"
                          value={url1}
                          
                          disabled
                        />
                        <Button
                          onClick={(
                            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                          ) => {
                            e.preventDefault();
                            upload1();
                          }}
                          type="button"
                        >
                          UPLOAD
                        </Button>

                        {/* {bookingUploadedFilename!=''?<span className=" overflow-x-auto max-w-[400px] h-full">{bookingUploadedFilename}</span>:""} */}

                        {/* <MyTextArea
                    label="About Me"
                    name="aboutme"
                    rows="6"
                    cols=""
                    styles={styles}
                    placeholder="Enter Something About You"
                    className={`${styles.textarea}`}
                  /> */}
                      </div>
                      <div className="form-group row py-sm-2  px-sm-3 my-2 pb-5">
                        <label className={styles.label} htmlFor="profileurl">
                          Upload Photo
                        </label>
                        <Field
                          className={`${styles.field} ${
                            touched.photo && errors.photo ? "is-invalid" : ""
                          }`}
                          type="text"
                          name="photo"
                          value={url2}
                          disabled
                        />
                        <Button
                          onClick={(
                            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                          ) => {
                            e.preventDefault();
                            upload2();
                          }}
                          type="button"
                        >
                          UPLOAD
                        </Button>

                        {/* {bookingUploadedFilename!=''?<span className=" overflow-x-auto max-w-[400px] h-full">{bookingUploadedFilename}</span>:""} */}

                        {/* <MyTextArea
                    label="About Me"
                    name="aboutme"
                    rows="6"
                    cols=""
                    styles={styles}
                    placeholder="Enter Something About You"
                    className={`${styles.textarea}`}
                  /> */}
                      </div>

                      <div className=" flex flex-wrap items-center justify-center rounded-b-md border-t border-gray-200 p-4">
                        <Button
                          type="submit"
                          className=""
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                  
                        >
                          <div className="flex items-center justify-center">
                            EDIT
                            <span className="ml-1 flex items-center">
                              <FiSend />
                            </span>
                          </div>
                        </Button>
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>
              {/* <span>Already Have an Account ? <button className="bg-transparent text-orange-400 hover:cursor-pointer hover:text-orange-600 " onClick={redirectLogin} >Login</button> </span> */}
            </div>
          </div>
{/* 
          <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
            >
              Decline
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MembersModal;
