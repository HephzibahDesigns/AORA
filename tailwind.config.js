/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
