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
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },
    colors: {
      primary: {
        main: combineHsl('--color-primary'),
        light: combineHsl('--color-primary-light'),
        dark: combineHsl('--color-primary-dark'),
      },
      secondary: {
        main: combineHsl('--color-secondary'),
        dark: combineHsl('--color-secondary-dark'),
      },
      grey: {
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)',
      },
      white: 'var(--color-white)',
      black: 'var(--color-black)',
      transparent: 'var(--color-transparent)',
      background: 'var(--color-background)',
      backgroundOpacity: 'var(--color-background-opacity)',
      home: combineHsl('--color-home'),
      about: combineHsl('--color-about'),
      projects: combineHsl('--color-projects'),
      blog: combineHsl('--color-blog'),
      contact: combineHsl('--color-contact'),
      error: combineHsl('--color-error'),
      'home-light': 'var(--color-home-light)',
      'home-dark': 'var(--color-home-dark)',
      blured: 'var(--color-blured)',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
