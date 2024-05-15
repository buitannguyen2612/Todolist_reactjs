import TodoList from "pages/HomePage/TodoList.jsx";
import LoginPage from "pages/LoginPage/LoginPage.jsx";
import Register from "pages/RegisterPage/Register.jsx";

const publicPage = [
  {
    path: "/",
    page: LoginPage,
  },
  {
    path: "/register",
    page: Register,
  },
];

const privatePage = [
  {
    path: "/todo",
    page: TodoList,
  },
];

export { publicPage, privatePage };
