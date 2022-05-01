function combineHsl(variable) {
  return `hsl(var(${variable}))`;
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      gradientBg: '#00000000',
      primary: combineHsl('--color-primary'),
      primarySecondary: combineHsl('--color-primarySecondary'),
      primaryLight: combineHsl('--color-primaryLight'),
      primaryDark: combineHsl('--color-primaryDark'),
      about: 'hsl(40, 95%, 50%)',
      projects: 'hsl(160, 95%, 50%)',
      contact: 'hsl(210, 95%, 50%)',
      black: '#000000',
      white: 'rgb(255, 255, 255)',
      grey: '#cccccc',
      darkGrey: '#aaaaaa',
      btnBg: '#064e3b50',
      blockBg: '#fffffF10',
      blockBgLight: '#fffffF20',
      blockDarkBg: '#00000010',
      darkImg: '#171717',
      projectBg: 'rgba(49, 49, 49, .80)',
      dark: 'rgba(20, 20, 20, .95)',
      transparent: 'rgba(0,0,0,0)',
    },
  },
};
