import React from "react";
import useStore from "../../store";
import ToggleTheme from "../toggleTheme/ToggleTheme";

export const TodoList = () => {
  const todos = useStore((state) => state.todos);

  return (
    <section className="max-w-[750px] w-full m-auto px-8 relative mt-[-180px]">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-4xl uppercase tracking-[.80rem] font-semibold text-white">
          todo
        </h1>

        <ToggleTheme />
      </div>

      <form className="mt-10 mb-6">
        <div className="relative">
          <label htmlFor="todos"></label>

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-4">
              <span className="w-5 h-5 rounded-full border border-secondary"></span>
            </div>

            <input
              className="w-full py-5 rounded ps-12 bg-background placeholder:text-secondary"
              type="text"
              id="todos"
              placeholder="Create a new todo..."
            />
          </div>
        </div>
      </form>
    </section>
  );
};
