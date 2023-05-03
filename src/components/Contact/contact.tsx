import React, { useRef, useState, useEffect } from "react";
import { sendMessageEmail } from "./service";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Box from '../Box/Box'
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";
import { FiSend } from "react-icons/fi";
const styles = {
  formcontainer: "flex flex-col justify-center items-center",
  label: "block text-white text-sm font-bold pt-2 pb-1 dark:text-white w-full",
  field:
    "bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none focus:bg-gray-200",
  button:
    " bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600",
  errorMsg: "text-red-500 text-sm",
  textarea:
    "bg-gray-100  focus:shadow-outline rounded block w-full appearance-none focus:bg-gray-200 p-5",
};

import ReCAPTCHA from "react-recaptcha";
import CustomPrimaryButton from "../CustomPrimaryButton/CustomPrimaryButton";

// import grecaptcha from 'grecaptcha';
const MyTextArea = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className={styles.label} htmlFor={props.id || props.name}>
        {label}
        <span className={styles.errorMsg}>*</span>
      </label>
      <textarea className="w-full " {...field} {...props}></textarea>
      {/* {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */}
    </>
  );
};

const Contact = () => {
  const Variants1 = {
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
    hidden: { x: -120, y: 0, scale: 1, opacity: 0 },
  };

  const Variants2 = {
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
    hidden: { x: 120, y: 0, scale: 1, opacity: 0 },
  };

  function LeftSection() {
    const controls = useAnimation();
    const [refHeading, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="w-full  relative md:w-1/2 flex flex-col justify-start items-center"
        ref={refHeading}
        initial="hidden"
        animate={controls}
        variants={Variants1}
      >
        {/* <Box/> */}
        <h3 className="  "> WRITE TO US</h3>
        <div className="text-left mb-4"> 
        <span className="text-2xl text-slate-500 ">
          FEEL FREE TO CONNECT
        </span> 
          </div>
        <p className="text-center px-10"> Join our coaching classes today and experience a comprehensive and well-rounded education that will help you achieve your academic goals. Contact us to learn more about our course or curriculum and to schedule your first session.</p>
      </motion.div>
    );
  }

  function RightSection() {
    const controls = useAnimation();
    const [refHeading, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        id="contactus"
        className="w-full md:w-[50%]  flex justify-center items-center"
        ref={refHeading}
        initial="hidden"
        animate={controls}
        variants={Variants2}
      >
        <Formik
          initialValues={formInitialValues}
          validate={(values) => {
            const errors: any = {};
            if (!values.fName) {
              errors.fName = "First Name is Required";
            } else if (!/^[A-Za-z]{3,30}$/.test(values.fName)) {
              errors.fName =
                "First Name should not contain special characters or numbers.";
            }

            if (!values.lName) {
              errors.lName = "Last Name is Required";
            } else if (!/^[A-Za-z]{3,30}$/.test(values.lName)) {
              errors.lName =
                "Last Name should not contain special characters or numbers.";
            }

            if (
              values.email &&
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.mobile) {
              errors.mobile = "Mobile is Required";
            } else if (!/^[1-9][0-9]{9}$/i.test(values.mobile)) {
              errors.mobile = "Invalid mobile number provided";
            }

            if (!values.message) {
              errors.message = "Message is Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            if (isVerified) {
              // alert('Successfully Verified')
              // alert(JSON.stringify(values, null, 2));
              try {
                sendMessageEmail(JSON.stringify(values))
                  .then(() => {
                    alert("Message Successfully Sent");
                  })
                  .catch((err: any) => {
                    throw new Error(err);
                  });
                // grecaptcha.reset();
              } catch (err) {
                alert("Form submit unsuccessful" + (err as Error).message);
              }
              resetForm();
              resetCaptcha();
            } else {
              alert("Invalid Captcha");
            }
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
            <div
              className={`w-[90%] md:w-full flex justify-center items-center`}
            >
              <Form className={`w-[90%] md:w-full`}>
                <div className="form-group row py-sm-1 px-sm-3">
                  <label className={styles.label} htmlFor="fName">
                    First Name<span className={styles.errorMsg}>*</span>
                  </label>
                  <Field
                    className={`${styles.field} ${
                      touched.fName && errors.fName ? "is-invalid" : ""
                    }`}
                    type="text"
                    name="fName"
                    placeholder="First Name"
                  />
                  <ErrorMessage
                    name="fName"
                    component="span"
                    className={styles.errorMsg}
                  />
                </div>
                <div className="form-group row py-sm-1 px-sm-3">
                  <label className={styles.label} htmlFor="lName">
                    Last Name<span className={styles.errorMsg}>*</span>
                  </label>
                  <Field
                    className={`${styles.field} ${
                      touched.lName && errors.lName ? "is-invalid" : ""
                    }`}
                    type="text"
                    name="lName"
                    placeholder="Last Name"
                  />
                  <ErrorMessage
                    name="lName"
                    component="span"
                    className={styles.errorMsg}
                  />
                </div>
                <div className="form-group row py-sm-2 px-sm-3">
                  <label className={styles.label} htmlFor="email">
                    Email<span className={styles.errorMsg}>*</span>
                  </label>
                  <Field
                    className={`${styles.field} ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                    type="text"
                    name="email"
                    placeholder="Email (Optional)"
                  />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles.errorMsg}
                  />
                </div>
                <div className="form-group row py-sm-2 px-sm-3">
                  <label className={styles.label} htmlFor="mobile">
                    Mobile<span className={styles.errorMsg}>*</span>
                  </label>
                  <Field
                    className={`${styles.field} ${
                      touched.mobile && errors.mobile ? "is-invalid" : ""
                    } `}
                    type="text"
                    rows="4"
                    name="mobile"
                    placeholder="Mobile"
                  />

                  <ErrorMessage
                    name="mobile"
                    component="div"
                    className={styles.errorMsg}
                  />
                </div>

                <MyTextArea
                  label="Message"
                  name="message"
                  rows="6"
                  placeholder="Enter your message here"
                  className={`${styles.textarea}`}
                />

                <ErrorMessage
                  name="message"
                  component="div"
                  className={styles.errorMsg}
                />

                <div>
                  {/* SYNTAX 1 - USE REF  */}
                  {/* <ReCAPTCHA

                ref = {capRef}
                className="my-10"
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                verifyCallback={onChange}
          
              /> */}
                  {/* SYNTAX -2  */}
                  {/* @ts-ignore */}
                  <ReCAPTCHA
                    ref={(e: any) => (recaptchaInstance = e)}
                    className="my-10"
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    verifyCallback={onChange}
                  />
                </div>

                {/* 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI is for testing only , create one for your own site  */}

                <div className=" flex justify-center flex-wrap items-center p-4 border-t border-gray-200 rounded-b-md">
                  {/* <button
                  type="submit"
                  className="px-6
                  py-2.5
                  bg-gradient-to-r
                  from-softBlue
                  to-veryDarkBlue
          
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-purple-700 hover:shadow-lg
                  focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-purple-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                  ml-1"
                  disabled={isSubmitting}
                  style={{
                    color: "white",
                  }}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <div className="flex flex-row gap-1">
                    {" "}
                    SEND <FiSend />
                  </div>
                </button>
                */}
  
                  <CustomPrimaryButton type="submit">
                    <div className="flex flex-row gap-1 ">
                      SEND <span className="flex justify-center items-center"><FiSend /></span> 
                    </div>
                  </CustomPrimaryButton>

                  {/* <Button type="submit">
                    <div className="flex flex-row gap-1">
                      {" "}
                      SEND <FiSend />
                    </div>
                  </Button> */}
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </motion.div>
    );
  }

  const capRef = useRef<any>(null);
  const [isVerified, setVerified] = useState(false);
  function onChange(response: any) {
    if (response) {
      setVerified(true);
    }
  }

  let recaptchaInstance: any;

  const formInitialValues = {
    fName: "",
    lName: "",
    email: "",
    mobile: "",
    message: "",
  };

  const resetCaptcha = () => {
    // capRef.current.reset(); // syntax -1
    recaptchaInstance.reset(); // syntax -2
  };
  const captchaSubmit = (e: any) => {
    e.preventDefault();
    // document.getElementById("demo-form").submit();
  };
  return (
    <div
      id="contact"
      className=" w-[90%] overflow-x-hidden mx-auto flex pt-10 flex-col md:flex-row md:justify-center md:items-center justify-center items-center "
    >
      {/* <div className="w-[50%] mr-5">
        <h3 className=" font-bold text-center text-softBlue text-4xl md:text-6xl ">
          {" "}
          WRITE TO US
        </h3>
        <p className=" text-gray-600 myyarn add -2 text-center text-2xl dark:text-white">
          {" "}
          Feel Free to Connect
        </p>
      </div> */}
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Contact;
