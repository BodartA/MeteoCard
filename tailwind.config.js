/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shironeri: "#FCFAF2",
        sumi: "#1C1C1C",
        dobunezumi: "#4F4F48",
        aonibi: "#535953"
      },
      fontFamily: {
        DM: ["DM Sans", "sans-serif"],
        NotoSansJP: ["Noto Sans JP", "sans-serif"],
      }
    },
  },
  plugins: [],
}

