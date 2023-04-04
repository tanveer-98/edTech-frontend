import React from "react";
import { register } from "../../services/register";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";
import { FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PasswordShowHide from "./PasswordShowHide";
import CustomPrimaryButton from "../CustomPrimaryButton/CustomPrimaryButton";
const styles = {
  label: "block text-yellow-400 text-sm font-bold pt-2 pb-1",
  field:
    "bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none focus:bg-gray-200",
  button:
    " bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600",
  errorMsg: "text-red-500 text-sm",
  textarea:
    "bg-gray-100 w-[300px] sm:w-[600px] lg:w-[800px] focus:shadow-outline rounded block w-full appearance-none focus:bg-gray-200 p-5",
};
const Login = () => {
  const navigate = useNavigate();
  const redirectRegister = () => {
    navigate("/register");
  };
  const formInitialValues = {
    email: "",
    password: "",
  };
  return (
    <div className="flex justify-center  h-full items-center w-full ">
      <div className=" bg-gradient-to-br from-yellow-100 to-yellow-400 flex flex-col p-6 justify-around  rounded-lg shadow-lg bg-white max-w-md">
        <Formik
          initialValues={formInitialValues}
          validate={(values) => {
            const errors: any = {};

            if (!values.email) {
              errors.email = "Email is Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            const requiredData = {
              email: values.email,
              password: values.password,
            };
            //console.log(requiredData)
            //   register(requiredData).then(()=>{
            //     alert('successfully registered , Please Login');
            //     navigate('/login')
            //   })
            //   .catch(err=>{
            //     //console.log(err)
            //     alert(`ERROR-${err.response.status} : ${err.response.data.message}`)
            //   });
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
            <div className="w-full flex justify-center my-10 ">
              <Form className=" form-training w-[300px] sm:w-[600px] lg:w-[800px]">
                <div className="form-group row py-sm-2 px-sm-3 ">
                  <label className={styles.label} htmlFor="email">
                    Email
                    {errors.email ? (
                      <span className={styles.errorMsg}>*</span>
                    ) : (
                      ""
                    )}
                  </label>
                  <Field
                    className={`${styles.field} ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                    type="text"
                    name="email"
                    placeholder="Email"
                  />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles.errorMsg}
                  />
                </div>

                <div className="form-group row py-sm-2 px-sm-3">
                  <label className={styles.label} htmlFor="password">
                    Confirm Password{" "}
                    {errors.password ? (
                      <span className={styles.errorMsg}>*</span>
                    ) : (
                      ""
                    )}
                  </label>
                  <Field
                    className={`${styles.field} ${
                      touched.password && errors.password
                        ? "is-invalid"
                        : ""
                    } `}
                    component={PasswordShowHide}
                    name="password"
                    placeholder="Enter a Password"
                  />

                  <ErrorMessage
                    name="password"
                    component="div"
                    className={styles.errorMsg}
                  />
                </div>

                <div className=" flex justify-center flex-wrap items-center p-4 border-t border-gray-200 rounded-b-md">
                <CustomPrimaryButton type="submit">
                    <div className="flex flex-row gap-1 ">
                      LOGIN <span className="flex justify-center items-center"><FiSend /></span> 
                    </div>
                  </CustomPrimaryButton>
                </div>
              </Form>
            </div>
          )}
        </Formik>
        <span>
          Already Have an Account ?{" "}
{/* 
          <CustomPrimaryButton
            className="bg-transparent text-orange-400 hover:cursor-pointer hover:text-orange-600 "
          
          onClick={redirectRegister}>
            Login

          </CustomPrimaryButton> */}
          <button
            className="bg-transparent text-orange-400 hover:cursor-pointer hover:text-orange-600 "
            onClick={redirectRegister}
          >
            Register
          </button>{" "}
        </span>
      </div>
    </div>
  );
};

export default Login;
