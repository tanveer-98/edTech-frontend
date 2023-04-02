import { ActionReducerMapBuilder, createAsyncThunk, createSlice, isRejected, isRejectedWithValue } from "@reduxjs/toolkit";
import { AnyIfEmpty } from "react-redux";
import { RootState } from "../../index";
// import { toggleScrollbar } from "../members/membersSlice";

interface IState{
    toggleNav: boolean; 
}

const initialState = {
    toggleNav: false
} as IState

const globalsSlice = createSlice({
    name: 'globals',
    initialState,
    reducers : {
        toggleToggleNav: (state) : void => {
           state.toggleNav = !state.toggleNav
           
    // console.log(state.toggleNav)
        }
    }
})

export const {toggleToggleNav} =  globalsSlice.actions;
export const selecttoggleNav = (state : RootState) => state.globals.toggleNav;
export default globalsSlice.reducer;
