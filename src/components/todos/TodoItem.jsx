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
          style={{ "--image-url": `url(${checkIcon})` }}
          type="checkbox"
          id="checkbox"
          className="peer relative rounded-full w-5 h-5 appearance-none focus:outline-none border border-secondary checked:bg-secondary hover:ring hover:ring-primary shrink-0 after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-[image:var(--image-url)] cursor-pointer"
        />
      </div>
      <p className="ps-4 peer-checked:line-through peer-checked:text-secondary">
        {todo.text}
      </p>

      <button className="pe-4" onClick={() => removeTodo(id)}>
        <img className="w-4 h-4" src={deleteIcon} alt="delete icon" />
      </button>
    </div>
  );
};
