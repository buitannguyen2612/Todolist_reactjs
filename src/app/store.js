import authSlice from "../redux/authenSlice.js";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { authLogin: authSlice },
});
