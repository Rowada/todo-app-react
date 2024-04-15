/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Josefin Sans", "sans-serif"],
      },

      colors: {
        primary: "hsl(220, 98%, 61%)",
        gradientValue1: "hsl(192, 100%, 67%)",
        gradientValue2: "hsl(280, 87%, 65%)",
        body: "var(--body)",
        background: "var(--background)",
        accent: "var(--accent)",
        secondary: "var(--secondary)",
        text: "var(--text)",
        other: "var(--other)",
        hover: "var(--hover)",
      },

      backgroundImage: {
        check: "url('/src/assets/images/icon-check.svg')",
      },

      spacing: {
        750: "750px",
        550: "650px",
      },

      margin: {
        headm: "-180px",
      },

      letterSpacing: {
        hightWidest: ".80rem",
      },
    },
  },
  plugins: [],
};
