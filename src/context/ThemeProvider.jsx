// @ts-nocheck
import { createContext, useEffect, useState } from "react";
import useStore from "../store"; // Chemin correct vers votre fichier zustand store

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useStore((state) => state.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);

  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
