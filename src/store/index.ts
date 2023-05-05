import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { docsApi } from "../services/docs";
import globalsReducer from "./globals/globalsSlice";
import adminReducer from './admin/adminSlice';



export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(docsApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    globals: globalsReducer,
    admin : adminReducer , 
 
    [docsApi.reducerPath]: docsApi.reducer,
  
  },
});
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
