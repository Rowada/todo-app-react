// @ts-nocheck
import React from "react";
import headerDark from "../../src/assets/images/bg-desktop-dark.jpg";
import headerLight from "../../src/assets/images/bg-desktop-light.jpg";

import useStore from "../store";

export const Header = () => {
  const theme = useStore((state) => state.theme);
  let content = "";

  if (theme === "dark")
    content = (
      <img
        className="w-full h-[30vh] object-cover"
        src={headerDark}
        alt="background dark"
      />
    );
  else
    content = (
      <img
        className="w-full h-[30vh] object-cover"
        src={headerLight}
        alt="background light"
      />
    );

  return <header>{content}</header>;
};
