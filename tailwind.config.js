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
            DEFAULT: "#096964",
            130: "#064a46",
          },
          gray1: "#939598", // Light Gray
          gray2: "#818285", // Medium Gray
          gray3: "#6D6E71", // Darker Gray
          gray4: "#58585A", // Dark Gray\
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
