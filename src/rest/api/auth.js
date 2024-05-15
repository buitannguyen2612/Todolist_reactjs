import Client from "../baseClient.js";
const http = new Client();

export const loginApi = async (payload) => {
  return http.post("user/login", payload);
};
