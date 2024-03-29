import React from "react";
import useStore from "../../store";
import deleteIcon from "../../assets/images/icon-cross.svg";
import checkIcon from "../../assets/images/icon-check.svg";

export const TodoItem = ({ todo, id }) => {
  const { toggleTodo, removeTodo } = useStore();

  return (
    <div className="w-full py-5 ps-4 border-b border-accent text-text flex items-center justify-between">
      <div className="inset-y-0 flex items-center">
        {/* <span
          onClick={() => toggleTodo(id)}
          className="w-5 h-5 rounded-full border border-secondary"
        ></span> */}

        <input
          type="checkbox"
          id="checkbox"
          className="peer rounded-full w-5 h-5 appearance-none focus:outline-none border border-secondary checked:bg-secondary hover:ring hover:ring-primary after:content-['']
          after:w-full
          after-h-full
          after:absolute
          after:left-0
          after:top-0
          after:bg-no-repeat
          after:bg-center
          after:bg-[lenght:40px]


          after:bg-[url('../../assets/images/icon-check.svg')]
          "
        />

        <p className="ps-4 peer-checked:line-through peer-checked:text-secondary">
          {todo.text}
        </p>
      </div>

      <button className="pe-4" onClick={() => removeTodo(id)}>
        <img className="w-4 h-4" src={deleteIcon} alt="delete icon" />
      </button>
    </div>
  );
};
