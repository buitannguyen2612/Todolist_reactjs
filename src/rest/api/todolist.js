import Client from "../baseClient.js";

const http = new Client();

export const getAll = async (idUser) => {
  return http.get(`todo/getall/${idUser}`);
};

export const dlTodo = async (id) => {
  return http.delete(`todo/delete/${id}`);
};
