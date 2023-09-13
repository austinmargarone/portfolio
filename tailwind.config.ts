/* eslint-disable */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#0252CD",
      blue1: "#428DFF",
      yellow: "#FFBE62",
      white: "#FFFFFF",
      white1: "#F3F8FF",
      slate: "#6F74A7",
      black: "#151E2C",
      black1: "#29374C",
      grey: "#778295",
      darkbg: "#192333",
      darkbg2: "#151E2C",
    },
    fontFamily: {
      jakarta: ["Poppins"],
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
export default config;
