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
      <div className="w-full rounded bg-background">
        <ul>
          {todos.map((todo, id) => {
            return (
              <li className="relative" key={todo.id}>
                <TodoItem todo={todo} id={id} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="relative flex  items-center justify-center ">
        <div className="mx-auto max-w-md">
          <ul className="shadow-xl">
            <li className="relative flex w-80 items-center justify-center gap-2.5 border-b-2 bg-white px-3 py-3.5 hover:border-gray-400">
              <input
                style={{ "--image-url": `url(${checkIcon})` }}
                type="checkbox"
                id="checkbox1"
                className="peer relative h-5 w-5 shrink-0 appearance-none rounded-sm border after:absolute after:bg-[image:var(--image-url)] after:left-0 after:top-0 after:h-full after:w-full  after:bg-[length:10px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-gray-500 hover:ring hover:ring-gray-300 focus:outline-none"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
