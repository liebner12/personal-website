function combineHsl(variable) {
  return `hsl(var(${variable}))`;
}

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    gridTemplateColumns: {
      auto3x: 'repeat(3, auto)',
      auto2x: 'repeat(2, auto)',
    },
    colors: {
      gradientBg: '#00000000',
      primary: combineHsl('--color-primary'),
      primaryLight: combineHsl('--color-primaryLight'),
      primaryDark: combineHsl('--color-primaryDark'),
      about: 'hsl(40, 95%, 50%)',
      projects: 'hsl(160, 95%, 50%)',
      contact: 'hsl(210, 95%, 50%)',
      black: '#000000',
      white: '#ffffff',
      grey: '#cccccc',
      darkGrey: '#aaaaaa',
      btnBg: '#064e3b50',
      blockBg: '#fffffF10',
      blockBgLight: '#fffffF20',
      blockDarkBg: '#00000010',
      darkImg: '#171717',
      projectBg: 'rgba(49, 49, 49, .80)',
      dark: 'rgba(31, 31, 31, 1)',
      transparent: 'rgba(0,0,0,0)',
    },
  },
};
