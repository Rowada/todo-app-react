import React from "react";
import useStore from "../../store";
import deleteIcon from "../../assets/images/icon-cross.svg";
import checkIcon from "../../assets/images/icon-check.svg";

export const TodoItem = ({ todo, id }) => {
  const { toggleTodo, removeTodo } = useStore();

  return (
    <div className="w-full py-5 ps-4 border-b border-accent text-text flex items-center justify-between">
      <div className="inset-y-0 flex items-center">
        <span
          onClick={() => toggleTodo(id)}
          className="w-5 h-5 rounded-full border border-secondary"
        ></span>

        <p className="ps-4">{todo.text}</p>
      </div>

      <button className="pe-4" onClick={() => removeTodo(id)}>
        <img className="w-4 h-4" src={deleteIcon} alt="delete icon" />
      </button>
    </div>
  );
};
