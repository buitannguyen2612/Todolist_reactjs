import { createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "constant/index.js";
import { clearCookie, createCookie, readCookie } from "utils/cookies.js";
import { parseDiffDays } from "utils/index.js";
import { jwtDecode } from "jwt-decode";

const initialState = () => {
  let access_token = readCookie(ACCESS_TOKEN);
  return {
    isLogin: Boolean(access_token),
    infoUser: access_token ? jwtDecode(access_token) : null,
  };
};

const authenSlice = createSlice({
  name: "authLogin",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isLogin = false;
      clearCookie(ACCESS_TOKEN);
      clearCookie(REFRESH_TOKEN);
    },
    login: (state, action) => {
      const { accessToken, refreshToken, tokenLifespan } = action.payload;
      const day = parseDiffDays(tokenLifespan);
      createCookie(ACCESS_TOKEN, accessToken, day);
      createCookie(REFRESH_TOKEN, refreshToken, day);
      state.isLogin = true;
      state.infoUser = jwtDecode(accessToken) || null;
    },
    clearAuthen: (state) => {
      state.isLogin = initialState.isLogin;
    },
  },
});

// Action creators are generated for each case reducer function
export const authenAction = authenSlice.actions;

export default authenSlice.reducer;
