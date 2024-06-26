/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulseScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        pulseScale: "pulseScale 1.5s infinite",
      },
      width: {
        "1/6":"20%",
        "5/13": "45%",
        "3/8": "63%",
        "5/7": "88%",
      },
      height: {
        "1/6": "30%",
        "5/7": "88%",
        "5/8": "90%",
        "1/7" : "15%",
      },
      maxHeight: {
        "97": "26rem",
      }
    },
  },
  plugins: [],
};
