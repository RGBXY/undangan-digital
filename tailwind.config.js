/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      oldenburg: ["Oldenburg"],
      script: ["Style Script"],
      volk: ["Vollkorn"],
      quin: ["Quintessential"],
    },
  },
  plugins: [],
};
