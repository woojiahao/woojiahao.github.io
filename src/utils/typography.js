import Typography from "typography"
import theme from "typography-theme-st-annes"

theme.baseFontSize = '18px'

theme.overrideThemeStyles = () => ({
  'a': {
    color: `#fb251b`
  },
  'a:hover': {
    color: `var(--textTitle)`
  },
  'a.anchor': {
    boxShadow: 'none'
  },
  'h1, h2, h3, h4, h5, h6, svg': {
    color: `var(--textTitle)`
  },
  'p, label, strong, em, ul, li, span, footer': {
    color: `var(--textNormal)`
  },
  'hr': {
    background: `var(--textNormal)`
  }
})

const typography = new Typography(theme)

export const {scale, rhythm, options} = typography
export default typography
