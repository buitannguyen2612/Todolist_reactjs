import SnackBarCustom from "components/customSnackbar/SnackBarCustom.jsx";
import useShallowEquelSelector from "hooks/userShallowEquelSelector.js";
import Header from "pages/Header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import PrivateLayout from "routes/PrivateLayout.jsx";
import PublicLayout from "routes/PublicLayout.jsx";
import { privatePage, publicPage } from "routes/route.js";

function App() {
  const { isLogin } = useShallowEquelSelector((state) => state.authLogin);
  return (
    <div className="flex flex-col w-full h-screen">
      <SnackBarCustom />
      {isLogin && <Header />}
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          {publicPage.map((val) => (
            <Route key={val.path} path={val.path} element={<val.page />} />
          ))}
        </Route>
        <Route path="/" element={<PrivateLayout />}>
          {privatePage.map((val) => (
            <Route key={val.path} path={val.path} element={<val.page />} />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
