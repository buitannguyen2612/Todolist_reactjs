import useShallowEquelSelector from "hooks/userShallowEquelSelector.js";
import React, { useEffect } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";

// Dưới đây là các điều kiện xử lý chặn chuyển trang đối với các trang đã được truy cập sau khi đăng nhập
function PrivateLayout() {
  const { isLogin } = useShallowEquelSelector((state) => state.authLogin);
  const location = useLocation();
  const navToLogin =
    location.pathname === "/" || location.pathname === "/register";
  const notLogPath = location.pathname === "/todo";
  if (isLogin && navToLogin) {
    return <Navigate to="/todo" />;
  } else if (!isLogin && notLogPath) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
export default PrivateLayout;
