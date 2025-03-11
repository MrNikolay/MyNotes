module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Пути к файлам
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1720px",
      },

      colors: {
        /* Цвета для карточек с заметками */
        beige: "#FACB89", // бежевый
        violet: "#E49FFF",
        blue: "#ACDFF9",
        red: "#F3ABAB",
        green: "#C6FFAB",

        /* Цвета для других элементов */
        softBlack: "#222222",
        darkBlue: "#1A1CC0",
        grayText: '#323232'
      },
      fontFamily: {
        // roboto: ["roboto", "sans-serif"]
      },
    },
  },
  plugins: [],
}
