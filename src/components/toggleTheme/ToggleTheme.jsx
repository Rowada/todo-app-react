// @ts-nocheck

import { ThemeContext } from "../../context/ThemeProvider";
import { useContext } from "react";
import sun from "../../assets/images/icon-sun.svg";
import moon from "../../assets/images/icon-moon.svg";

const ToggleTheme = () => {
  // Correction: supprimez "export const"
  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="w-20 h-20 bg-accent rounded-md border border-white p-2"
    >
      <img src={darkMode ? sun : moon} alt="toggle icon" />
    </button>
  );
};

export default ToggleTheme; // Ajoutez l'exportation par défaut
