/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'facebook-blue': '#0866FF',
        'facebook-gray': '#F0F2F5',
        'color-a': '#1877F2',
        'criar-conta': '#42b72a'
      },

      spacing: {
        '580': '560px',
        '396': '396px',
      },

      boxShadow: {
        'form': '0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)',
      }

    },
  },
  plugins: [],
}

