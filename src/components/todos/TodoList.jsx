import React from "react";
import useStore from "../../store";
import ToggleTheme from "../toggleTheme/ToggleTheme";
import { useState } from "react";
import { TodoItem } from "./TodoItem";

import checkIcon from "../../assets/images/icon-check.svg";

export const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const { todos, addTodo } = useStore((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <section className="max-w-[750px] w-full m-auto px-8 relative mt-[-180px]">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-4xl uppercase tracking-[.80rem] font-semibold text-white">
          todo
        </h1>

        <ToggleTheme />
      </div>

      <form onSubmit={handleSubmit} className="mt-10 mb-6">
        <div className="relative">
          <label htmlFor="todos"></label>

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-4">
              <span className="w-5 h-5 rounded-full border border-secondary"></span>
            </div>

            <input
              className="w-full py-5 rounded ps-12 bg-background text-text placeholder:text-secondary focus:outline-none caret-primary"
              type="text"
              id="todos"
              name="todos"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Create a new todo..."
            />
          </div>
        </div>
      </form>
      <div className="relative">
        <div>
          <ul>
            {todos.map((todo, id) => {
              return (
                <div
                  key={todo.id}
                  className="w-full gap-2.5 py-5 ps-4 border-b border-accent text-text flex items-center justify-between bg-background rounded-t"
                >
                  <TodoItem todo={todo} id={id} />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
