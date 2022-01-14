module.exports = {
  content: ['./gatsby-browser.js', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
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
    backgroundSize: {
      'link-minimized-size': '4px 2px',
      'link-maximized-size': '4px 50px'
    },
    screens: {
      'xl': {
        'max': '1024px',
      },
      'lg': {
        'max': '950px',
      },
      'md': {
        'max': '768px',
      },
      'sm': {
        'max': '512px',
      },
      'xs': {
        'max': '420px'
      },
    },
    extend: {
      margin: {
        '5p': '5%'
      },
      padding: {
        '5p': '5%'
      },
      width: {
        '15p': '15%',
        '24p': '24%',
        '72p': '72%',
      },
      maxWidth: {
        'container-max': '1024px',
        'container-xl': '950px',
        'container-lg': '768px',
        'container-md': '500px',
        'container-sm': '400px',
        'container-xs': '300px'
      },
      fontSize: {
        base: 'var(--base-unit)',
        h1: '2rem',
        h2: '1.5rem',
        h3: '1.17rem',
        h4: '1rem',
        h5: '0.83rem',
        h6: '0.75rem',
        fixed: '24px'
      },
      borderRadius: {
        profile: '10px'
      },
      flexBasis: {
        left: '1',
        right: '2'
      }
    },
  },
  plugins: [],
}