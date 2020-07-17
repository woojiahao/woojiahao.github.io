import React from "react"
import style from "./layout.module.css"
import {graphql, Link, useStaticQuery} from "gatsby"
import SEO from "./SEO"
import * as PropTypes from "prop-types"
import BackToTop from "./back-to-top"
import ThemeToggle from "./theme-toggle"

const Layout = ({tabTitle, pageTitle, pagination, tags, home, children, description, backToTop}) => {
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
    <div>
      <div className={style.layout}>
        <ThemeToggle style={{position: `absolute`, right: 0, top: 0, margin: `15px`}}/>
        <SEO title={tabTitle} description={description} tags={tags}/>

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
          <p style={{marginTop: `2em`}}>
            Page {pagination.currentPage}/{pagination.numPages}
          </p>
          }
        </div>

        <div style={{marginBottom: `1em`}}>
          {children}
        </div>

        <footer>
          Copyright &copy; 2020. {siteTitle} is built with Gatsby.js. The repository can be found <a
          href={repositoryUrl}>here.</a>
        </footer>
      </div>

      {backToTop && <BackToTop/>}
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
  description: PropTypes.string,
  backToTop: PropTypes.bool,
}

Layout.defaultProps = {
  tabTitle: null,
  pageTitle: null,
  pagination: null,
  tags: [],
  home: null,
  description: null,
  backToTop: false,
}
