import React from "react";

const TodoFilter = ({ setFilter }) => {
  return (
    <div className="flex gap-3.5">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
};

export default TodoFilter;
