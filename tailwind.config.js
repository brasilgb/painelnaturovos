module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "solar-blue-100": "#57BAD9",
        "solar-blue-200": "#009DE0",
        "solar-blue-300": "#174193",
        "solar-yellow-100": "#FFEC01",
        "solar-yellow-200": "#F08801",
        "solar-yellow-300": "#E84E1C",
        "solar-red-100": "#E74C3C",
        "solar-red-200": "#EE2839",
        "solar-red-300": "#BD1522"
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
