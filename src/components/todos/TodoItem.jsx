/* eslint-disable react/prop-types */
// @ts-nocheck
import useStore from "../../store";
import deleteIcon from "../../assets/images/icon-cross.svg";
import checkIcon from "../../assets/images/icon-check.svg";

export const TodoItem = ({ todo, id }) => {
  const { toggleTodo, removeTodo } = useStore();

  return (
    <>
      <li className="inset-y-0 flex items-center">
        <input
          checked={todo.isCompleted}
          onChange={() => toggleTodo(id)}
          type="checkbox"
          id="checkbox"
          className="peer relative transition-all rounded-full w-5 h-5 appearance-none focus:outline-none border border-secondary checked:after:block after:hidden checked:bg-gradient-to-r from-gradientValue1 to-gradientValue2 checked:border-none hover:border-primary shrink-0 after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-check cursor-pointer"
        />

        <p className="ps-4 transition-colors peer-checked:line-through peer-checked:text-secondary text-xs md:text-base">
          {todo.text}
        </p>
      </li>

      <button className="pe-4" onClick={() => removeTodo(id)}>
        <img
          className="w-3 h-3 md:w-4 md:h-4"
          src={deleteIcon}
          alt="delete icon"
        />
      </button>
    </>
  );
};
