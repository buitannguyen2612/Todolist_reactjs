import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: null,
};

const authenSlice = createSlice({
  name: "authLogin",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isLogin = false;
    },
    login: (state) => {
      state.isLogin = true;
    },
    clearAuthen: (state) => {
      state.isLogin = initialState.isLogin;
    },
  },
});

// Action creators are generated for each case reducer function
export const authenAction = authenSlice.actions;

export default authenSlice.reducer;
