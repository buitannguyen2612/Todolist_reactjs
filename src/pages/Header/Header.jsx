import { REFRESH_TOKEN } from "constant/index.js";
import { motion } from "framer-motion";
import useActions from "hooks/useAction.js";
import useShallowEquelSelector from "hooks/userShallowEquelSelector.js";
import avataImage from "images/peopleWork.jpg";
import { useState } from "react";
import { authenAction } from "../../redux/authenSlice.js";
import { logout } from "rest/api/auth.js";
import { readCookie } from "utils/cookies.js";

function Header() {
  const { infoUser } = useShallowEquelSelector((state) => state.authLogin);
  const { logOut } = useActions(authenAction);
  const [showPopup, setShowPopup] = useState(false);

  const logoutTriger = async () => {
    try {
      const payload = { refreshToken: readCookie(REFRESH_TOKEN) };
      console.log(payload);
      await logout(payload);
      logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-[2_0_0%] bg-lime-500 w-full flex flex-row items-center justify-end pr-11 shadow-xl relative">
      <div
        className="h-10 w-10 rounded-full cursor-pointer"
        onClick={() => setShowPopup((prev) => !prev)}
      >
        <img
          src={avataImage}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      {showPopup && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute right-20 top-16 w-32 min-h-5 bg-[#F3CA52] z-10 shadow-2xl rounded-xl flex flex-col gap-3 py-3"
        >
          <div className="w-full min-h-1 p-0.5 font-mono font-semibold flex flex-row items-center justify-center">
            <p>{infoUser.name}</p>
          </div>
          <div className="w-full min-h-3 p-0.5 flex flex-row items-center justify-center">
            <button
              onClick={() => logoutTriger()}
              className="w-3/4 px-3 py-2 bg-[#F4538A] rounded-xl text-white font-semibold hover:bg-[#FFB5DA] transition-colors duration-75 active:bg-[#FF3EA5]"
            >
              Log out
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Header;
