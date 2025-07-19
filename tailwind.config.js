/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anybody: ['"Anybody"', "sans-serif"],
        helvetica_now_display: ['"Helvetica Now Display"', "sans-serif"],
      },
      colors: {
        brand: {
          accent1: "#69C2BD", // Teal Light
          accent2: "#096964", // Primary Branding Green
          gray1: "#939598", // Light Gray
          gray2: "#818285", // Medium Gray
          gray3: "#6D6E71", // Darker Gray
          gray4: "#58585A", // Dark Gray
        },
      },
    },
  },
  plugins: [],
};
