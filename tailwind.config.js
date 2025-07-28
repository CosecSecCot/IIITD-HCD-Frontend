/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        anybody: ['"Anybody"', "sans-serif"],
        helvetica_now_display: ['"Helvetica Now Display"', "sans-serif"],
      },
      colors: {
        brand: {
          accent1: "#69C2BD",
          accent2: {
            70: "#539693",  // 30% Lighter
            80: "#3a8783",
            90: "#227874",
            DEFAULT: "#096964",
            110: "#085f5a",
            120: "#075450",
            130: "#064a46",  // 30% Darker
          },
          gray1: "#939598",
          gray2: "#818285",
          gray3: "#6D6E71",
          gray4: "#58585A",

          blue: "#093B69",
          green: "#336909",
          red: "#69090B",
          voilet: "#4C1073",
        },
      },
    },
  },
  plugins: [],
};
