import React from 'react'

export function Button({ children, className, ...rest }:any) {
  return (
    <button
      type="button"
      className={`inline-block items-center px-4 py-2 border  text-sm font-medium rounded-md  transition-all ease-in-out duration-150 ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
