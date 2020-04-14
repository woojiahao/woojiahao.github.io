import React from "react"
import style from "./layout.module.css"
import {graphql, Link, useStaticQuery} from "gatsby"
import {rhythm} from "../utils/typography"

export default props => {
  const {site} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata { title }
      }
    }
  `)

  return (
    <div className={style.layout}>
      <header>
        <Link to="/">
          <h3>{site.siteMetadata.title}</h3>
        </Link>
        <nav>
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Me</Link>
          <Link to="/recommendations">Recommendations</Link>
        </nav>
      </header>

      <div className={style.title}>
        <h1>{props.title}</h1>
        {!props.hidePagination && <h3>Page {props.currentPage}/{props.numPages}</h3>}
      </div>

      <div style={{marginBottom: rhythm(1)}}>
        {props.children}
      </div>

      <footer>
        Copyright &copy; 2020. A Programmer's Perspective is built with Gatsby.js. The repository can be found <a
        href="https://github.com/woojiahao/woojiahao.github.io">here.</a>
      </footer>
    </div>
  )
}
