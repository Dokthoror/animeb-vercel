module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        in: "inherit",
      }),
      minHeight: (theme) => ({
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "screen-1/4": "25vh",
        "screen-3/4": "75vh",
        in: "inherit",
      }),
      padding: (theme) => ({
        "2/3": "calc(2*100%/3)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
