// @ts-nocheck

import useStore from "../../store";

export const TodoClearButton = () => {
  const removeCompletedTodos = useStore((state) => state.removeCompletedTodos);

  const handleClick = () => {
    removeCompletedTodos();
  };

  return (
    <button
      onClick={handleClick}
      className="focus-outline:none hover:text-text"
    >
      Clear Completed
    </button>
  );
};
