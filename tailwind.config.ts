/* eslint-disable */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'blue': "#0252CD",
      'blue1': "#428DFF",
      'yellow': "#FFBE62",
      'white': "#FFFFFF",
      'white1': "#F3F8FF",
      'slate': "#6F74A7",
      'black': "#151E2C",
      'black1': "#29374C",
      'grey': "#778295",
    },
    fontFamily: {
      jakarta: ["Poppins"],
    },
  },
  plugins: [],
};
export default config;
