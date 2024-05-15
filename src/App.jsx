import useShallowEquelSelector from "hooks/userShallowEquelSelector.js";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateLayout from "routes/PrivateLayout.jsx";
import PublicLayout from "routes/PublicLayout.jsx";
import { privatePage, publicPage } from "routes/route.js";

function App() {
  const { isLogin } = useShallowEquelSelector((state) => state.authLogin);
  useEffect(() => {
    console.log(isLogin);
  });

  return (
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
  );
}

export default App;
