import Client from "../baseClient.js";
const http = new Client();

export const loginApi = async (payload) => {
  return http.post("user/login", payload);
};

export const registerApi = async (payload) => {
  return http.post("user/register", payload);
};

export const logout = async (payload) => {
  return http.delete("user/logout", payload);
};

export const refreshToken = async (payload) => {
  return http.post("user/refresh", payload);
};
