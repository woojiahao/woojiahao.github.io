import React from "react"
import layoutStyles from "./layout.module.css"
import {Link} from "gatsby"

export default ({children}) => (
  <div className={layoutStyles.layout}>
    <header>
      <Link to="/">
        <h3>A Programmer's Perspective</h3>
      </Link>
      <nav>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About Me</Link>
        <Link to="/recommendations">Recommendations</Link>
      </nav>
    </header>
    {children}
    <footer>
      Copyright &copy; 2020. A Programmer's Perspective is built with Gatsby.js.
    </footer>
  </div>
)
