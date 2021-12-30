module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Lexend Deca', 'sans-serif'],
        lexen: ['Lexend Deca', 'sans-serif'],
      },
      colors: {
        dark: '#252525',
        lightest: '#FFFEF2',
        light: '#F6F5E8',
      },
      gridTemplateColumns: {
        hero1: '30% 70%',
        hero2: '56% 44%',
        hero3: '44% 56%',
        footer: '600px auto auto auto ',
        footer2: '600px auto auto auto  ',
      },
    },
  },
  plugins: [],
};
