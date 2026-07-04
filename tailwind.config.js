/** Tailwind config — используется только при пересборке assets/tailwind.css:
 *  npx tailwindcss@3.4.17 -c tailwind.config.js -i tailwind-input.css -o assets/tailwind.css --minify
 */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      }
    }
  }
};
