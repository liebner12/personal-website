function combineHsl(variable) {
  return `hsl(var(${variable}))`;
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'hover-hover': { raw: '(hover: hover)' },
      },
    },
    colors: {
      primary: combineHsl('--color-primary'),
      primaryLight: combineHsl('--color-primaryLight'),
      primaryDark: combineHsl('--color-primaryDark'),
      secondary: combineHsl('--color-secondary'),
      secondaryDark: combineHsl('--color-secondaryDark'),
      home: combineHsl('--color-home'),
      about: combineHsl('--color-about'),
      projects: combineHsl('--color-projects'),
      blog: combineHsl('--color-blog'),
      contact: combineHsl('--color-contact'),
      black: '#000000',
      white: 'rgb(255, 255, 255)',
      grey: '#d1d5db',
      blockBg: '#1f2028',
      darkBlockBg: '#393b47',
      blockBgLight: 'rgba(30, 30, 30, .95)',
      pillBg: 'rgba(30, 30, 30, .70)',
      projectBg: 'rgba(13, 17, 23, .80)',
      dark: 'rgba(30, 30, 30, .95)',
      transparent: 'rgba(0,0,0,0)',
      background: 'rgb(18, 24, 27)',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
