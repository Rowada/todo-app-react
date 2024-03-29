import { create } from "zustand";

const useStore = create((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          text: todo,
          id: Date.now(),
          isCompleted: false,
        },
      ],
    })),
  toggleTodo: (index) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === index) {
          return {
            ...todo,
            isCompleted: true,
          };
        }

        return todo;
      }),
    })),

  removeTodo: (index) =>
    set((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
    })),

  theme: "dark",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    })),
}));

export default useStore;
