import React from 'react'
import {register} from '../../services/register'
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    useField,
    useFormikContext,
  } from "formik";
  import {FiSend} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import PasswordShowHide from './PasswordShowHide';
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
const Register = () => {
    const navigate = useNavigate()
    const redirectLogin = () =>{
        navigate('/login')
    }
    const formInitialValues = {
        fName: "",
        lName: "",
        email: "",
        password: "",
        confirmPassword :""
      };
  return <div className="flex justify-center  h-full items-center w-full ">
<div className="flex flex-col p-6 justify-around  rounded-lg shadow-lg bg-white max-w-md">

 <Formik
        initialValues={formInitialValues}
        validate={(values) => {
          const errors: any = {};
          if (!values.fName) {
            errors.fName = "First Name is Required";
          } else if (!/^[A-Za-z]{2,30}$/.test(values.fName)) {
            errors.fName =
              "First Name should not contain special characters or numbers.";
          }

          if (!values.lName) {
            errors.lName = "Last Name is Required";
          } else if (!/^[A-Za-z]{2,30}$/.test(values.lName)) {
            errors.lName =
              "Last Name should not contain special characters or numbers.";
          }

          if (!values.email) {
            errors.email = "Email is Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Password is Required";
            // //console.log(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!#%*?&]{8,}$/i.test(values.password))
          } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(values.password)) {
            errors.password = "Password should contain Minimum eight characters, at least one letter, one number and one special character among @$!%*?&#";
          }

          if (!values.confirmPassword) {
            errors.confirmPassword = "Confirm Password is Required";
          }
          else if(values.confirmPassword && (values.confirmPassword != values.password)){
            errors.confirmPassword = "Passwords donot match"
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          const requiredData = {
            name : values.fName.concat(" ",values.lName),
            email : values.email, 
            password: values.password            
          }
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
          <div className="w-full flex justify-center my-10">
            <Form className=" form-training w-[300px] sm:w-[600px] lg:w-[800px]" >
              <div className="form-group row py-sm-1 px-sm-3">
                <label className={styles.label} htmlFor="fName">
                  First Name{errors.fName?<span className={styles.errorMsg}>*</span>:""}
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
                  Last Name{errors.lName?<span className={styles.errorMsg}>*</span>:""}
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
                  Email{errors.email?<span className={styles.errorMsg}>*</span>:""}
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
                  Password{errors.password?<span className={styles.errorMsg}>*</span>:""}
                </label>
                <Field
                  className={`${styles.field} ${
                    touched.password && errors.password ? "is-invalid" : ""
                  } `}
                  
                  name="password"
                  type = "text"
                  placeholder="Enter a Password"
                />

                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.errorMsg}
                />
              </div>
                
              {touched.password ? 
              <div className="form-group row py-sm-2 px-sm-3">
                <label className={styles.label} htmlFor="confirmPassword">
                  Confirm Password {errors.confirmPassword?<span className={styles.errorMsg}>*</span>:""}
                </label>
                <Field
                  className={`${styles.field} ${
                    touched.confirmPassword && errors.confirmPassword ? "is-invalid" : ""
                  } `}
                  component = {PasswordShowHide}
                
                  name="confirmPassword"
                  placeholder="Enter a Password"
                />

                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className={styles.errorMsg}
                />
              </div>:""}

              <div className=" flex justify-center flex-wrap items-center p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="submit"
                  className="px-6
                  py-2.5
                  bg-orange-400
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-orange-600 hover:shadow-lg
                  focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-orange-700 active:shadow-lg
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
                 <div className="flex gap-2">
                 REGISTER <FiSend />
                  
                 </div>
                    
                </button>
                
              </div>
            </Form>
            
          </div>
        )}
      </Formik>
      <span>Already Have an Account ? <button className="bg-transparent text-orange-400 hover:cursor-pointer hover:text-orange-600 " onClick={redirectLogin} >Login</button> </span>
</div>
  </div>
  
}

export default Register