// src/theme/colors.js
const { violet, slate, blue } = require('@radix-ui/colors');

module.exports = {
  // merge Radix scales under your own keys:
  ...violet,
  ...slate,
  ...blue,
  // your custom colors:
  brand: {
    50:  '#f5f9ff',
    100: '#e1edff',
    200: '#b8d4ff',
    300: '#8bb9ff',
    400: '#5b99ff',
    500: '#2b78ff',
    600: '#215ce0',
    700: '#1a47b4',
    800: '#13328a',
    900: '#0b1d60',
  },
};
