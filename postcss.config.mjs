const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow:{
      "black" :"4px 4px 0 #000",
      "white" :"4px 4px 0 #fff"
      }
    },
  }
};

export default config;
