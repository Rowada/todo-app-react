// @ts-nocheck

import { ThemeContext } from "../../context/ThemeProvider";
import { useContext } from "react";
import sun from "../../assets/images/icon-sun.svg";
import moon from "../../assets/images/icon-moon.svg";

const ToggleTheme = () => {
  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      <img
        className="w-4 h-4 md:w-6 md:h-6"
        src={darkMode ? sun : moon}
        alt="toggle icon"
      />
    </button>
  );
};

export default ToggleTheme;
