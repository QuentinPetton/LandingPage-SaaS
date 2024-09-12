/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/*.{html,js}"],
  theme: {
    fontFamily: {
      'body': ['Montserrat', 'sans-serif'],
    },
    colors: {
      'white': '#ECECEC',
      'backgroundBlur': '#0B081C80',
      'colorBlack': '#0B081C',
      'borderColorWhite': '#F2F4F8',
      'LigtGreyColor': '#FFFFFF4D',
    },
    extend: {
        backgroundImage: {
        'hero': "url(/ressources/Hero_Stack.png)",
        'gradient-text': 'linear-gradient(-8deg, #ECECEC 0%, #868686 100%))',
      },
    },
  },
  plugins: [
    
  ],
};

