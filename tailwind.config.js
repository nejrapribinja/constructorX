/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ed5521",
        textColor: "#151515",
        gray: "#7A7A7A",
        bgColor: "#F8F8F8",
        borderColor: "#dfdfdf",
        arrowColor: "#a7a7a7",
      },
    },
  },
  plugins: [],
};
