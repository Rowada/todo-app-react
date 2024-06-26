import React from "react";
import useStore from "./store";
import ThemeProvider from "./context/ThemeProvider";
import { Header } from "./components/Header";
import { TodoList } from "./components/todos/TodoList";
import { Footer } from "./components/Footer";

function App() {
  const theme = useStore((state) => state.theme);
  return (
    <ThemeProvider value={theme}>
      <main>
        <Header />
        <TodoList />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
