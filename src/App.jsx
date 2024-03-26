import React from "react";
import useStore from "./store";
import ThemeProvider from "./context/ThemeProvider";
import ToggleTheme from "./components/toggleTheme/ToggleTheme";

function App() {
  const theme = useStore((state) => state.theme);
  return (
    <ThemeProvider value={theme}>
      <>
        <div>
          <h1 className="text-3xl font-bold underline p-10 bg-background">
            Hello World !!
          </h1>
        </div>

        <ToggleTheme />
      </>
    </ThemeProvider>
  );
}

export default App;
