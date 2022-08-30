module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  themes: ["light", "halloween"],
  plugins: [require("daisyui")],
  theme: {
    screens: {
      s: { max: "300px" },
      sm: { max: "642px" },
    },
  },
};
