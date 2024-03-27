import React from "react";
import useStore from "../../store";
import ToggleTheme from "../toggleTheme/ToggleTheme";

export const TodoList = () => {
  const todos = useStore((state) => state.todos);

  return (
    <section className="max-w-[900px] w-full m-auto relative mt-[-90px]">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl uppercase tracking-[.80rem] text-white">
          todo
        </h1>

        <ToggleTheme />
      </div>
    </section>
  );
};
