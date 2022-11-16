module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'jsx-a11y', 'prettier', 'testing-library'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'require-jsdoc': 0,
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  globals: {
    React: true,
    JSX: true,
  },
};
