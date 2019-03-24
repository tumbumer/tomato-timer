'use strict';

module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: { ecmaVersion: 8 },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
