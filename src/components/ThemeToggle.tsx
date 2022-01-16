import React, { useState } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { BsMoon, BsSun } from "react-icons/all"

const ThemeToggle = () => {
  const [theme, setTheme] = useState(false)

  return (<ThemeToggler>
    {({ theme, toggleTheme }) => {
      setTheme(theme === "dark")
      return (
        <label className="fixed right-0 top-0 m-4">
          <input
            type="checkbox"
            onChange={e => {
              toggleTheme(e.target.checked ? 'dark' : 'light')
              setTheme(e.target.checked)
            }}
            checked={theme === 'dark'}
            hidden
          />{' '}
          {theme ? <BsSun size="1.25em" className="hover:cursor-pointer" /> : <BsMoon size="1.25em" className="hover:cursor-pointer" />}
        </label>
      )
    }}
  </ThemeToggler>)
}

export default ThemeToggle
