import { RootState } from "./../index";
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { VerifyJWT, AdminLogin } from "../../services/auth";

interface IAdminState {
  jwtToken: string;
  user: Object;
  verified: Boolean;
  loading: "pending" | "idle" | "succeded" | "rejected";
}

export const loginAdminThunk = createAsyncThunk(
  "admin/loginAdminThunk",
  async (newData: any, { rejectWithValue }) => {
    try {
      const res = await AdminLogin(newData);
      return res.data;
    } catch (err: any) {
      return rejectWithValue("");
    }
  }
);

export const verifyAdminJWTThunk = createAsyncThunk(
  "admin/verifyAdminJWTThunk",
  async (jwtToken: string, { rejectWithValue }) => {
    try {
      const res = await VerifyJWT(jwtToken);
      return res.data;
    } catch (err: any) {
      return rejectWithValue("");
    }
  }
);

const initialState = {
  jwtToken: "",
  loading: "idle",
  user: {},
  verified: false,
} as IAdminState;

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    clearJWTToken: (state) => {
      state.jwtToken = "";
      sessionStorage.removeItem("jwtToken");
      state.verified = false;
    },
    clearUser: (state) => {
      state.user = {};
      sessionStorage.removeItem("user");
      state.verified = false;
    },
    signOut: (state) => {
      state.user = {};
      state.jwtToken = "";
      state.verified = false;
      sessionStorage.removeItem("jwtToken");
      sessionStorage.removeItem("user");
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IAdminState>) => {
    builder
      .addCase(loginAdminThunk.fulfilled, (state, action) => {
        state.jwtToken = action.payload.token;
        state.user = action.payload.user;
        state.verified = true;
        sessionStorage.setItem("jwtToken", action.payload.token);
        sessionStorage.setItem("user", JSON.stringify(action.payload.user));
        state.loading = "succeded";
      })
      .addCase(loginAdminThunk.rejected, (state, action) => {
        state.verified = false;
        state.loading = "rejected";
      })
      .addCase(loginAdminThunk.pending, (state: any) => {
        state.loading = "pending";
        state.verified = false;
      })
      .addCase(verifyAdminJWTThunk.fulfilled, (state, action) => {
        state.verified = true;
        state.loading = "succeded";
      })
      .addCase(verifyAdminJWTThunk.rejected, (state, action) => {
        state.verified = false;
        state.loading = "rejected";
      });
  },
});

export const { clearJWTToken, clearUser, signOut } = adminSlice.actions;

export const selectJWTToken = (state: RootState) => state.admin.jwtToken;
export const selectUser = (state: RootState) => state.admin.user;
export const selectVerified = (state: RootState) => state.admin.verified;
export const selectLoadingLogin = (state: RootState) => state.admin.loading;

//default export

export default adminSlice.reducer;
