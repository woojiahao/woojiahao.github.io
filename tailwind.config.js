module.exports = {
  content: ['./gatsby-browser.js'],
  darkMode: 'class',
  theme: {
    screens: {
      'xsm': '420px',
      'sm': '512px',
    },
    colors: {
      'link': 'var(--link-color)',
      'bg': 'var(--bg-color)',
      'text': 'var(--fg-color)',
      'dark-text': '#141414',
      'link-gradient': 'linear-gradient(to bottom, var(--link-color) 0%, var(--link-color) 100%) repeat-x 0 100%',
      'gray': '#90A4AE',
      'pagination-background': 'var(--pagination-background)',
      'pagination-active-background': 'var(--pagination-active-background)',
    },
    fontFamily: {
      sans: ['Open Sans', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['Source Code Pro', 'monospace']
    },
    fontSize: {
      base: 'var(--base-unit)',
      '2xl': '2rem'
    },
    backgroundSize: {
      'link-minimized-size': '4px 2px',
      'link-maximized-size': '4px 50px'
    },
    extend: {
      margin: {
        '5p': '5%'
      },
      padding: {
        '5p': '5%'
      },
      width: {
        '15p': '15%'
      }
    },
  },
  plugins: [],
}