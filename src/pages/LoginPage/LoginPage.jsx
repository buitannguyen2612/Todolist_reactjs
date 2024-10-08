import useActions from "hooks/useAction.js";
import peopleImg from "images/peopleWork.jpg";
import { useState } from "react";
import { loginApi } from "rest/api/auth.js";
import { authenAction } from "../../redux/authenSlice.js";
import { Link } from "react-router-dom";
import { SNACKBAR_SEVERITY, snackBarAction } from "../../redux/snackbar.js";

function LoginPage() {
  const { login } = useActions(authenAction);
  const { show } = useActions(snackBarAction);

  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const authLogin = (e) => {
    if (userName === "" || password === "") {
      show({
        message: "Don't leave the input empty!!!",
        severity: SNACKBAR_SEVERITY.ERROR,
        autoHideDuration: 10000,
      });
      return;
    }
    fetchLogin(userName, password);
  };

  const fetchLogin = async (uername, password) => {
    try {
      const res = await loginApi({ userName: uername, password: password });
      login(res.data);
      show({
        message: "Login successfull",
        severity: SNACKBAR_SEVERITY.SUCCESS,
        autoHideDuration: 10000,
      });
    } catch (error) {
      show({
        message: "Password or username is wrong!!",
        severity: SNACKBAR_SEVERITY.ERROR,
        autoHideDuration: 10000,
      });
    }
  };

  return (
    <div className="w-full h-screen relative flex flex-row items-center justify-center">
      <div
        className="h-full w-full bg-cover bg-center absolute left-0 top-0 blur-lg z-[-1]"
        style={{ backgroundImage: `url(${peopleImg})` }}
      />
      <div className="w-1/2 h-4/6 flex flex-row shadow-xl">
        <div
          className="flex-[1_0_0%]  bg-cover bg-center"
          style={{ backgroundImage: `url(${peopleImg})` }}
        ></div>
        <div className="flex-[1_0_0%] flex flex-col items-center gap-3 pt-28 bg-[#F3CA52] font-mono">
          <h1 className="font-semibold text-[#fff] text-2xl">Login</h1>
          {/* Tên đăng nhập */}
          <form action="none" className="flex flex-col gap-4">
            <div className="w-64 h-8 rounded-xl">
              <input
                className="h-full w-full outline-none border-none pl-2 rounded-xl"
                type="text"
                placeholder="User name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            {/* Mật khẩu người dùng */}
            <div className="w-64 h-8 rounded-xl">
              <input
                className="h-full w-full outline-none border-none pl-2 rounded-xl"
                type="password"
                placeholder="Password"
                autoComplete="new password"
                value={password}
                onChange={(e) => setPassWord(e.target.value)}
              />
            </div>
          </form>
          <div className="flex flex-row items-center justify-center gap-10">
            <button
              onClick={(e) => authLogin(e)}
              className="p-1 px-2 rounded-xl bg-[#F4538A] text-[#FFF] font-semibold hover:bg-[#FFB5DA] transition-colors duration-75 active:bg-[#FF3EA5]"
            >
              Login
            </button>
            <Link className="underline text-[#fff]" to="/register">
              register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
