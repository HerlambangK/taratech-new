import AspectRatio from "@tailwindcss/aspect-ratio";
import animate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "animated-beam": {
          "100%": { offsetDistance: "100%" },
        },
        "background-pan": {
          from: { backgroundPosition: "0% center" },
          to: { backgroundPosition: "-200% center" },
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - 100px) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + 100px) 0",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 1rem))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - 1rem))" },
        },
        "color-cycle": {
          "0%, 100%": { backgroundColor: "rgb(168, 85, 247)" }, // bg-purple-500
          "25%": { backgroundColor: "rgb(96, 165, 250)" }, // bg-blue-400
          "50%": { backgroundColor: "rgb(34, 197, 94)" }, // bg-green-500
          "75%": { backgroundColor: "rgb(249, 115, 22)" }, // bg-orange-500
        },
      },
      animation: {
        "animated-beam": "animated-beam 10s linear infinite",
        "background-pan": "background-pan 3s linear infinite",
        shimmer: "shimmer 6s infinite",
        marquee: "marquee 20s linear infinite",
        "marquee-vertical": "marquee-vertical 20s linear infinite",
        "color-cycle": "color-cycle 8s linear infinite",
      },
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [animate, AspectRatio],
};
