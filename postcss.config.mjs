const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      colors: {
        darkTheme: "#11001F",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow:{
      "black" :"4px 4px 0 #000",
      "white" :"4px 4px 0 #fff"
      },
      
    },
  },
  darkMode : 'class',
};

export default config;
