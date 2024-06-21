import authSlice from "../redux/authenSlice.js";
import snackbarSlice from "../redux/snackbar.js";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { authLogin: authSlice, snackbarManage: snackbarSlice },
});
