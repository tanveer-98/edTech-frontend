/// <reference types="vite/client" />


declare type AnyFunction = (...args: any[]) => any
interface ImportMetaEnv {
  readonly VITE_SERVER: string
  // more env variables...
}
 