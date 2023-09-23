import plugin from "tailwindcss/plugin";

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
      borderRadius: {
        primary: "20px",
        "4xl": "28px",
        "5xl": "32px",
        "6xl": "36px",
      },
      colors: {
        primary: "#0CAF60",
        gray: {
          100: "#C2C2C2",
          500: "#808195",
          600: "#303A46",
          700: "#161D26",
          800: "#12181F",
          900: "#0B0E13",
        },
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
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("not-first", "&:not(:first-child)");
    }),
  ],
};
