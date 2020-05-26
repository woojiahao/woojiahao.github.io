import React, {useState} from "react"
import {ThemeToggler} from "gatsby-plugin-dark-mode"
import {BsMoon, BsSun} from "react-icons/all"
import style from "./theme-toggle.module.css"

const ThemeToggle = ({style: styles}) => {
  const [t, setT] = useState(false)

  return (<ThemeToggler>
    {({theme, toggleTheme}) => {
      setT(theme === "dark")
      return (
        <label style={styles}>
          <input
            type="checkbox"
            onChange={e => {
              toggleTheme(e.target.checked ? 'dark' : 'light')
              setT(e.target.checked)
            }}
            checked={theme === 'dark'}
            hidden
          />{' '}
          {t ? <BsMoon size="1.25em" className={style.themeToggle}/> : <BsSun size="1.25em" className={style.themeToggle}/>}
        </label>
      )
    }}
  </ThemeToggler>)
}

export default ThemeToggle
