/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blush: '#FFE9F1',
        petal: '#FFD1E3',
        rose: '#DB6B8F',
        berry: '#4A1A33',
        lilac: '#E4D4FF',
        butter: '#FFF1B8',
        mint: '#CFF3E4',
        cream: '#FFFAFC',
      },
      fontFamily: {
        pixel: ['var(--font-pixel)', 'monospace'],
        term: ['var(--font-term)', 'monospace'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
