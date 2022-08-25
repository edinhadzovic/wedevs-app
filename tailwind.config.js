const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'jet': {
          light: "#3F3F3B",
          DEFAULT: "#2D2D2A",
          dark: "#1F1F1E"
        },
        'cultured': {
          light: "#FFFFFF",
          DEFAULT: "#FAFAFA",
          dark: "#F5F5F5"
        },
        'sea-green': {
          light: "#5CFFD9",
          DEFAULT: "#44FFD2",
          dark: "#1FFFCB",
        },
        'bittersweet': {
          light: "#FF9999",
          DEFAULT: "#FF6B6B",
          dark: "#FF4747"
        }
      },
      fontFamily: {
        'poppins': ["Poppins", ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        'translate-down': {
          '0%': {
            opacity: 0.05,
            transform: 'translateY(-55px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)'
          }
        },
        'translate-up': {
          '0%': {
            opacity: 0.05,
            transform: 'translateY(55px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)'
          }
        }
      },
      animation: {
        "translate-down": "translate-down 1.2s ease-in-out infinite",
        "translate-up": "translate-up 1.2s ease-in-out infinite",
      }
    },
  },
  plugins: [],
}
