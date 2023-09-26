/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "0px", max: "640px" }, // mobile view 
      smmd: { min: "641px", max: "767px" }, // small tablets
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" }, // ipad view 
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" }, // laptop
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1440px" }, //  desktop
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1441px", max: "1536px" }, // large desktop
      // => @media (min-width: 1536px) { ... }
      "3xl": "1537  px", // 4k screen 
    },
    boxShadow: {
      ctr: "12px 12px 12px 1px rgb(0 0 0 / 0.1)",
    },
    fontSize: {
      sm: "12px",
      tiny: "13px",
      base: "14px",
      title: "13.5px",
      h6: "16px",
      h5: "18px",
      h4: "20px",
      h3: "22px",
      h2: "24px",
      h1: "36px",
    },
    backgroundImage: {
      "instagram": "linear-gradient(hsl(37, 97%, 70%) , hsl(329, 70%, 58%))"
    },
    colors: {
      'lime-green': 'hsl(163, 72%, 41%)',
      'bright-red': 'hsl(356, 69%, 56%)',
      'very-dark-blue-top': 'hsl(230, 17%, 14%)',
      'very-dark-blue-bg': 'hsl(232, 19%, 15%)',
      "dark-desaturated-blue": "hsl(228, 28%, 20%)",
      "desaturated-blue": "hsl(228, 34%, 66%)",
      "white": "hsl(0, 0%, 100%)",
      'very-pale-blue': 'hsl(225, 100%, 98%)',
      'light-grayish-blue': 'hsl(227, 47%, 96%)',
      'dark-grayish-blue': 'hsl(228, 12%, 44%)',
      'dark-grayish-blue': 'hsl(228, 12%, 44%)',
      'facebook': 'hsl(208, 92%, 53%)',
      'twitter': 'hsl(203, 89%, 53%)',
      'youTube': 'hsl(348, 97%, 39%)',
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
    extend: {},
  },
  plugins: [],
};