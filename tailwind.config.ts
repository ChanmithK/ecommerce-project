import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        primary: "#e52727",
        secondary: "#212529",
      },
      screens: {
        mobile: "320px",
        // => @media (min-width: 640px) { ... }
        xs: "480px",
        // mobile sm => @media (min-width: 480px) { ... }

        sm: "640px",
        //tablet => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        //laptop => @media (min-width: 1024px) { ... }

        xl: "1280px",
        //desktop  => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
