/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    screens: {
      'smartphone': '320px',
      'tablet': '640px',
      'nav-1': '940px',
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      'sm':	'640px',
      'md':	'768px',
      'lg':	'1024px',
      'xl':	'1280px',
      '2xl':	'1536px',
    },
  },
  plugins: [],
}

