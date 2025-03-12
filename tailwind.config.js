/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./public/js/*.js", "./public/js/**/*.js"],
  theme: {
    boxShadow: {
      "--tw-shadow": "0 1px 0 rgba(0, 0, 0, .14), 0 2px 0 rgba(0, 0, 0, .05)"
    },
    extend: {
      screens: {
        "desktop": "1024px",
        "mobile": "340px"
      },
      backgroundImage: {
        "blur-gradient": "linear-gradient(180deg, hsla(0, 0%, 100%, 0) 50%, #fff)"
      }
    },
  },
  plugins: [],
}

