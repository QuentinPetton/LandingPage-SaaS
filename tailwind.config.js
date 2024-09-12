/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/*.{html,js}"],
  theme: {
    colors: {
      'white': '#ECECEC',
    },
    extend: {
        backgroundImage: {
        'hero': "url(/ressources/Hero_Stack.png)",
      },
    },
  },
  plugins: [],
};

