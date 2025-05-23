/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{html,js}"];
export const darkMode = 'class';
export const theme = {
  extend: {
    colors: {
      // brand: "#1ED760",
      firstBgBrand: "#121212",
      secondBgBrand: "#272727",
    },
    fontFamily: {
      gotham: ['Gotham'],
      sakitu: ['Sakitu'],
    },
  },
  fontFamily: {
    sakitu: ['Sakitu'],
  },
};
export const plugins = [];

