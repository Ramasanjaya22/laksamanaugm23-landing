/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "50%": { transform: "rotate(60deg)" },
        },
      },
      colors: {
        "primary-blue": "#021F4A",
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
        "primary-color": "#26223D",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        wiggle: "wiggle 1s infinite",
      },
    },
  },
  plugins: [],
};
