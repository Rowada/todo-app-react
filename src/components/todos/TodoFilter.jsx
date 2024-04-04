// @ts-nocheck
/* eslint-disable react/prop-types */

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-3.5">
      <button
        className={`focus-outline:none ${
          filter === "all" ? "text-primary" : "text-secondary"
        } hover:text-text`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`focus-outline:none ${
          filter === "active" ? "text-primary" : "text-secondary"
        } hover:text-text`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className={`focus-outline:none ${
          filter === "completed" ? "text-primary" : "text-secondary"
        } hover:text-text`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
