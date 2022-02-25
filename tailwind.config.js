module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F97316",
          50: "#FEDFC9",
          100: "#FDD3B5",
          200: "#FCBB8D",
          300: "#FBA366",
          400: "#FA8B3E",
          500: "#F97316",
          600: "#D25905",
          700: "#9B4204",
          800: "#642B03",
          900: "#2D1301",
        },
      },
    },
    backgroundImage: (theme) => ({
      "content-bg": "url('https://www.kgteknoloji.com/images/img/hcg.png')",
      "modal-bg":"url('https://i.hizliresim.com/ejv8s0l.png')",
    }),
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
