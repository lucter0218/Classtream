module.exports = {
  // purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      "Pretendard-Regular": ["Pretendard-Regular"],
      "Pretendard-SemiBold": ["Pretendard-SemiBold"],
      "Pretendard-ExtraBold": ["Pretendard-ExtraBold"],
      "Pretendard-Black": ["Pretendard-Black"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};