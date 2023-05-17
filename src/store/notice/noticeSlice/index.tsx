import { RootState } from "../../index";
import { INotice, INoticeEdit } from "../../../types/types";
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { getNotices, getNotice } from "../../../services/notice";
// import { VerifyJWT, AdminLogin } from "../../services/auth";
interface IAdminNotice {
  notice: INotice;
  noticeAll: [INotice] | [];
  loading: "pending" | "idle" | "succeded" | "rejected";
}

export const fetchNotices = createAsyncThunk(
  "admin/fetchNotices",
  async () => {
    try {
      const res = await getNotices();
      return res.data;
    } catch (err: any) {
      return err.message; 
    }
  }
);
export const fetchNotice = createAsyncThunk(
  "admin/fetchNotice",
  async (id: any, { rejectWithValue }) => {
    try {
      const res = await getNotice(id);
      return res.data;
    } catch (err: any) {
      return rejectWithValue("");
    }
  }
);




const initialState = {
  loading: "idle",
  notice: {},
  noticeAll: [],
} as IAdminNotice;

const noticeSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IAdminNotice>) => {
    builder
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.noticeAll = action.payload;
        state.loading = "succeded";
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        // state.verified = false;
        state.loading = "rejected";
      })
      .addCase(fetchNotices.pending, (state: any) => {
        state.loading = "pending";
        // state.verified = false;
      })
      .addCase(fetchNotice.fulfilled, (state, action) => {
        state.notice = action.payload;
        state.loading = "succeded";
      })
      .addCase(fetchNotice.rejected, (state, action) => {
        // state.verified = false;
        state.loading = "rejected";
      })
      .addCase(fetchNotice.pending, (state: any) => {
        state.loading = "pending";
        // state.verified = false;
      });
  },
});

export const {} = noticeSlice.actions;

export const selectNotices = (state: RootState) => state.notice.noticeAll;
export const selectUser = (state: RootState) => state.notice.notice;
export const selectLoadingLogin = (state: RootState) => state.notice.loading;

//default export

export default noticeSlice.reducer;
