/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#edece8",
          medium: "#e0d5ca",
          normal: "#bd9477",
          dark: "#4e2a27",
        },
      },
      fontFamily: {
        bentham: "Bentham",
      },
    },
  },
  plugins: [],
};
