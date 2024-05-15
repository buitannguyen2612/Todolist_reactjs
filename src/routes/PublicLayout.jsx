import useShallowEquelSelector from "hooks/userShallowEquelSelector.js";
import { Navigate, Outlet } from "react-router-dom";

function PublicLayout() {
  const { isLogin } = useShallowEquelSelector((state) => state.authLogin);

  if (isLogin) {
    return <Navigate to="/todo" />;
  }

  return <Outlet />;
}

export default PublicLayout;
