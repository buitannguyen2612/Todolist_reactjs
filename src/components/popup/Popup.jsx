import React, { useState } from "react";
import { motion } from "framer-motion";

export const Popup = ({ valUpdate, setValUpdate, updateTodo }) => {
  const [currentTxt, setCurrentTxt] = useState(valUpdate.text);

  const handleUpdate = (id, txt) => {
    if (txt.length === 0 || txt.length > 200) return;
    else {
      updateTodo(id, txt);
      setValUpdate(null);
    }
  };

  return (
    <div className="h-screen w-full bg-[#0000004F]  absolute top-0 left-0 flex flex-row items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="h-[20rem] w-[40rem] rounded-xl bg-[#F3CA52] flex flex-col items-center justify-center gap-2"
      >
        <div className="w-full font-mono text-[2rem] flex flex-row items-center justify-center font-semibold">
          <p>Update your todo list</p>
        </div>
        <div className="w-5/6 h-auto rounded-xl">
          <textarea
            className="w-full h-auto border-none outline-none rounded-xl px-4 resize-none"
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            onChange={(e) => setCurrentTxt(e.target.value)}
          >
            {valUpdate.text}
          </textarea>
        </div>
        <div className="flex flex-row items-center justify-center w-full h-10 gap-2">
          <button
            onClick={() => handleUpdate(valUpdate.id, currentTxt)}
            className="p-1 px-2 rounded-xl bg-[#F4538A] text-[#FFF] font-semibold hover:bg-[#FFB5DA] transition-colors duration-75 active:bg-[#FF3EA5]"
          >
            Save
          </button>
          <button
            onClick={() => setValUpdate({ id: null, text: null })}
            className="p-1 px-2 rounded-xl bg-[#F4538A] text-[#FFF] font-semibold hover:bg-[#FFB5DA] transition-colors duration-75 active:bg-[#FF3EA5]"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};
