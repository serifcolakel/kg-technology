module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: (theme) => ({
      "content-bg": "url('http://www.kgteknoloji.com/images/img/hcg.png')",
    }),
  },
  plugins: [],
};
