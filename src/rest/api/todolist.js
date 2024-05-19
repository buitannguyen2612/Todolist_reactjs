import Client from "../baseClient.js";

const http = new Client();

export const getAll = async () => {
  return http.get("todo/getall");
};

export const dlTodo = async (id) => {
  return http.delete(`todo/delete/${id}`);
};

export const update = async (id, payload) => {
  return http.patch(`todo/update/${id}`, payload);
};

export const addNew = async (payload) => {
  return http.post("todo/addnew", payload);
};
