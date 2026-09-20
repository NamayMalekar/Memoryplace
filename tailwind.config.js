/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF7F4",
        "warm-white": "#FFFDF9",
        champagne: "#E8D5B5",
        beige: "#F5EBE6",
        sage: "#8FA382",
        botanical: "#4F604F",
        brown: "#4A3B32",
        rose: "#D98880",
        gold: "#C5A059",
        babypink: "#FFD6E0",
        blush: "#FFE5EC",
        softpink: "#FDE2E4",
        pinkglow: "#FF85A1",
        lavender: "#E8D7F1",
        softpurple: "#D8B4E2",
        lilac: "#C8B6FF",
        plum: "#5C3D5E",
        deeprose: "#782845",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
        script: ["'Parisienne'", "cursive"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
}
