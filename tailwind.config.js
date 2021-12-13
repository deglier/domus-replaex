const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: { max: "360px" },
      },
      fontFamily: {
        primary: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        contact: "#D8E3EC",
        brand: {
          primary: {
            pure: "#05548D",
            up: "#B4CBDC",
            down: "#3676A3",
            deep: "#044370",
          },
          complementary: {
            pure: "#37C2DA",
            up: "#C3ECF3",
            down: "#5ECEE1",
            deep: "#2C9BAE",
          },
        },
        neutral: {
          light: {
            pure: "#FFFFFF",
            up: "#F7F8FB",
            down: "#E5E7EE",
            deep: "#CDD2DC",
          },
          dark: {
            pure: "#101A3B",
            up: "#B8BAC3",
            down: "#707587",
            deep: "#414760",
          },
        },
        accent: {
          pure: "#EDB72B",
          up: "#F3C54E",
          deep: "#EDAB2B",
        },
        status: {
          error: "#FF3666",
          warning: "#FF9243",
          success: "#2DE160",
        },
      },
      objectPosition: {
        "hero-mobile": "50% 0",
      },
      boxShadow: {
        contact: "0px 24px 56px rgba(5, 84, 141, 0.16)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("./tailwind-plugins/padding-safe-area.js")(),
    require("./tailwind-plugins/margin-safe-area.js")(),
    require("./tailwind-plugins/not-placeholder-shown.js")(),
    require("./tailwind-plugins/interaction-variants.js"),
  ],
};
