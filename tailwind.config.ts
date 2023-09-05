/* eslint-disable */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue1: "#0252CD",
        blue2: "#428DFF",
        yellow1: "#FFBE62",
        white1: "#FFFFFF",
        white2: "#F3F8FF",
        slate1: "#6F74A7",
        black1: "#151E2C",
        black2: "#29374C",
        grey1: "#778295",
      },
      fontFamily: {
        jakarta: ["Poppins"],
      },
    },
  },
  plugins: [],
};
export default config;
