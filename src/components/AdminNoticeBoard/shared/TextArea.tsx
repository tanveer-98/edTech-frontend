import React from 'react'
import {useField} from 'formik'

const MyTextArea = ({ label,styles, ...props }:any) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label className={styles.label} htmlFor={props.id || props.name}>
          {label}
          <span className={styles.errorMsg}>*</span>
        </label>
        <textarea
          className="w-[300px] sm:w-[600px] lg:w-[800px]"
          {...field}
          {...props}
        ></textarea>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
export default MyTextArea