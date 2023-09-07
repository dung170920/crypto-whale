/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        serif: "'Poppins', sans-serif",
      },
      fontSize: {
        "2xs": "10px",
      },
      colors: {
        primary: "#0CAF60",
        dark: "#161D26",
        black: "#12181F",
        secondary: "#A4A8AB",
        purple: {
          DEFAULT: "#674AFF",
        },
        orange: {
          DEFAULT: "#FB774A",
        },
        red: {
          DEFAULT: "#FF3E46",
        },
      },
    },
  },
  plugins: [],
};
