import React from "react";
import useStore from "../../store";
import ToggleTheme from "../toggleTheme/ToggleTheme";
import { useState } from "react";
import { TodoItem } from "./TodoItem";
import TodoFilter from "./TodoFilter";
import emptyTodos from "../../assets/images/empty-todos.svg";
import { TodoClearButton } from "./TodoClearButton";

export const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const { todos, addTodo } = useStore((state) => state);

  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.isCompleted;
    } else if (filter === "completed") {
      return todo.isCompleted;
    }
    return true;
  });

  const activeTodosLength = filteredTodos.filter(
    (todo) => !todo.isCompleted
  ).length;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim() === "") {
      alert("Please input new todo.");

      return;
    }

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
      <div>
        {filteredTodos.length === 0 ? (
          <div className="w-full bg-background rounded-t flex flex-col items-center justify-center">
            <img
              className="w-96 py-5 h-auto"
              src={emptyTodos}
              alt="image empty todos"
            />

            <p className="text-2xl text-text pb-5">No todos yet</p>
          </div>
        ) : (
          <ul className="bg-background rounded-t">
            {filteredTodos.map((todo) => {
              return (
                <div
                  key={todo.id}
                  className="w-full gap-2.5 py-5 ps-4 border-b border-accent text-text flex items-center justify-between "
                >
                  <TodoItem todo={todo} id={todo.id} />
                </div>
              );
            })}
          </ul>
        )}
      </div>

      <div className="text-sm text-secondary font-semibold w-full flex items-center justify-between bg-background py-5 px-4 rounded-b">
        <span>{activeTodosLength} items left</span>
        <TodoFilter filter={filter} setFilter={setFilter} />
        <TodoClearButton />
      </div>
    </section>
  );
};
