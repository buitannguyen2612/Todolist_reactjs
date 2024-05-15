import React from "react";
import { faPenNib, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Popup } from "components/popup/Popup.jsx";

function TodoList() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [valueUpdate, setValUpdate] = useState({
    id: null,
    text: null,
  });

  const handlePopup = (id, txt) => {
    setValUpdate({
      id: id,
      text: txt,
    });
  };
  const addTodo = async () => {
    if (text.length > 100) return;
    try {
      await axios.post("http://127.0.0.1:8080/todo/addnew", {
        name: text,
        isComplete: false,
      });
      getTodoList();
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  const getTodoList = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8080/todo/getall");
      setTodoList((_) => res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async (id, txt) => {
    try {
      await axios.patch(`http://127.0.0.1:8080/todo/complete/${id}`, {
        name: txt,
      });
      getTodoList();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8080/todo/delete/${id}`);
      getTodoList();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <>
      <div className="h-screen w-full bg-lime-400 flex flex-row justify-center items-center relative">
        <div className="w-1/3 h-5/6 rounded-xl bg-lime-500 shadow-xl flex flex-col">
          <div className="flex-[1_0_0]  p-1 pt-3 flex flex-col items-center justify-center gap-2">
            <div className="h-2/4 w-11/12 rounded-xl border-solid border-2 border-[#69ad28]">
              <input
                type="text"
                value={text}
                className=" w-full h-full rounded-xl outline-none border-none pl-1"
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="flex-[1_0_0] flex flex-row gap-3 w-full justify-center">
              <button
                className="p-1 px-2 rounded-xl bg-[#F4538A] text-[#FFF] font-semibold hover:bg-[#FFB5DA] transition-colors duration-75 active:bg-[#FF3EA5]"
                onClick={addTodo}
              >
                Add
              </button>
            </div>
          </div>
          <div className="flex-[5_0_0] px-2 py-3 overflow-x-hidden overflow-y-scroll scrollbar">
            <div className="flex flex-col items-center justify-start gap-2 h-auto w-full">
              {todoList.length > 0
                ? todoList.map((vl, idx) => (
                    <div
                      key={vl._id}
                      className="shadow-xl rounded-xl cursor-pointer indent-1 py-1 px-2 w-full min-h-14 font-mono text-left bg-[#F3CA52] transition duration-1000 ease-in-out flex flex-row items-center"
                    >
                      <div className="flex-[3_0_0] h-auto overflow-hidden ">
                        <p className="overflow-hidden break-words">{vl.name}</p>
                      </div>
                      <div className="flex-[1_0_0] flex h-full flex-row items-center justify-around overflow-hidden">
                        <FontAwesomeIcon
                          icon={faPenNib}
                          onClick={() => handlePopup(vl._id, vl.name)}
                          className="transition duration-100 ease-linear text-[20px] text-[#F4538A] hover:text-[#fff] hover:scale-105 "
                        />
                        <FontAwesomeIcon
                          onClick={() => deleteTodo(vl._id)}
                          icon={faTrash}
                          className="transition duration-100 ease-linear text-[20px] text-[#F4538A] hover:text-[#fff] hover:scale-105"
                        />
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
        {valueUpdate?.id != null && (
          <Popup
            valUpdate={valueUpdate}
            setValUpdate={setValUpdate}
            updateTodo={updateTodo}
          />
        )}
      </div>
    </>
  );
}

export default TodoList;
