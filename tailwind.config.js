/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
        backgroundImage: {
          "gradient-custom":
            "linear-gradient(90deg, rgba(255,140,0,1) 0%, rgba(255,163,0,1) 100%)",
        },
      },
      fontFamily: {
        poppinsThin: ["Poppins_100Thin"],
        poppinsExtraLight: ["Poppins_200ExtraLight"],
        poppinsLight: ["Poppins_300Light"],
        poppinsRegular: ["Poppins_400Regular"],
        poppinsMedium: ["Poppins_500Medium"],
        poppinsSemiBold: ["Poppins_600SemiBold"],
        poppinsBold: ["Poppins_700Bold"],
        poppinsExtraBold: ["Poppins_800ExtraBold"],
        poppinsBlack: ["Poppins_900Black"],
      },
    },
  },
  plugins: [],
};
