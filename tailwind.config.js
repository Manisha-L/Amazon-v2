module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: {
        min: "400px",
      },
      xs: {
        min: "475px",
      },
      sm: {
        min: "640px",
      },
      md: {
        min: "768px",
      },
    },
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [require("@tailwindcss/line-clamp")],
};
