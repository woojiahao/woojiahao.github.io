import React from "react"
import style from "./layout.module.css"
import {graphql, Link, useStaticQuery} from "gatsby"
import {rhythm} from "../utils/typography"
import SEO from "./SEO"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/all"
import * as PropTypes from "prop-types"

const Layout = ({tabTitle, pageTitle, pagination, tags, home, children}) => {
  const {site} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata { 
          title
          repositoryUrl
        }
      }
    }
  `)

  const {
    title: siteTitle,
    repositoryUrl
  } = site.siteMetadata

  return (
    <div className={style.layout}>
      <SEO title={tabTitle}/>

      <header>
        <Link to="/">
          <h3>{siteTitle}</h3>
        </Link>
        <nav>
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Me</Link>
          <Link to="/recommendations">Recommendations</Link>
        </nav>
      </header>

      <div className={style.title}>
        <h1>{pageTitle}</h1>
        {pagination &&
        <p style={{marginTop: rhythm(2)}}>
          Page {pagination.currentPage}/{pagination.numPages}
        </p>
        }
      </div>

      <div style={{marginBottom: rhythm(1)}}>
        {children}
      </div>

      <footer>
        Copyright &copy; 2020. {siteTitle} is built with Gatsby.js. The repository can be found <a
        href={repositoryUrl}>here.</a>
      </footer>
    </div>
  )
}

export default Layout

Layout.propTypes = {
  tabTitle: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  pagination: PropTypes.object,
  tags: PropTypes.array,
  home: PropTypes.string,
}

Layout.defaultProps = {
  tabTitle: null,
  pageTitle: null,
  pagination: null,
  tags: [],
  home: null
}
