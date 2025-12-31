/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0f0e1a",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
        card: "#141420",
      },
      fontFamily: {
        primary: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        first: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-50px) translateX(50px)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        second: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(50px) translateX(-50px)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        third: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-30px) translateX(30px)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        fourth: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(30px) translateX(-30px)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        fifth: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-20px) translateX(20px)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        spotlight: {
          "0%": { opacity: 0, transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: 1, transform: "translate(-50%, -40%) scale(1)" },
        },
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" },
        },
      },
      animation: {
        first: "first 10s ease-in-out infinite",
        second: "second 10s ease-in-out infinite",
        third: "third 10s ease-in-out infinite",
        fourth: "fourth 10s ease-in-out infinite",
        fifth: "fifth 10s ease-in-out infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [],
}

