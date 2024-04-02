import { create } from "zustand";
import { nanoid } from "nanoid";

const useStore = create((set) => {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const initialTheme = localStorage.getItem("theme") || "dark";

  return {
    todos: initialTodos,
    addTodo: (todo) =>
      set((state) => {
        const updatedTodos = [
          ...state.todos,
          {
            text: todo,
            id: nanoid(),
            isCompleted: false,
          },
        ];

        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        return { todos: updatedTodos };
      }),
    toggleTodo: (index) =>
      set((state) => {
        const updatedTodos = state.todos.map((todo) => {
          if (todo.id === index) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          }
          return todo;
        });

        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        return { todos: updatedTodos };
      }),

    removeTodo: (id) =>
      set((state) => {
        const updatedTodos = state.todos.filter((todo) => todo.id !== id);

        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        return { todos: updatedTodos };
      }),

    theme: initialTheme,
    toggleTheme: () =>
      set((state) => {
        const updatedTheme = state.theme === "dark" ? "light" : "dark";

        localStorage.setItem("theme", updatedTheme);
        return { theme: updatedTheme };
      }),
  };
});

export default useStore;
