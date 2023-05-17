import React from 'react'


export function Button({ children, className,type, ...rest }:any) {
  return (
    <button
      type={type}
      className={`${className} inline-flex border-black px-4 py-2 border-2 my-4 active:border-white hover:bg-gray-800 hover:text-white text-sm font-medium rounded-md  text-center transition-all duration-200
      text-black bg-white `}
      {...rest}
    >
      {children}
    </button>
  )
}