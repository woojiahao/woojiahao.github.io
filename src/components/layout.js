import React from "react"
import style from "./layout.module.css"
import { graphql, Link, useStaticQuery } from "gatsby"
import SEO from "./SEO"
import * as PropTypes from "prop-types"
import BackToTop from "./back-to-top"
import ThemeToggle from "./theme-toggle"
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from "react-icons/all"
import { SiDiscord } from "react-icons/si"

const Layout = ({ tabTitle, pageTitle, pagination, tags, home, children, description, backToTop }) => {
  const { site } = useStaticQuery(graphql`
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
        <ThemeToggle style={{ position: `absolute`, right: 0, top: 0, margin: `15px` }} />
        <SEO title={tabTitle} description={description} tags={tags} />

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
            <p style={{ marginTop: `2em` }}>
              Page {pagination.currentPage}/{pagination.numPages}
            </p>
          }
        </div>

        <div style={{ marginBottom: `2em` }}>
          {children}
        </div>

        <footer>
          <div>
            <div className={style.siteDescription}>
              <p className={style.footerTitle}>A Programmer's Perspective</p>

              <br />

              <p>
                Trekking down the path of programming and discussing my encounters with the unknown!
              </p>

              <hr />

              <p>
                Copyright &copy; 2020-2021. Code <a href={repositoryUrl}>here.</a>
              </p>
            </div>

            <div className={style.footerLinks}>
              <div className={style.pageNavigation}>
                <p className={style.footerTitle}>Navigation</p>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About Me</Link>
                <Link to="/recommendations">Recommendations</Link>
              </div>

              <div className={style.socialMedia}>
                <p className={style.footerTitle}>Connect with me!</p>
                <a target="_blank" href="https://github.com/woojiahao"><AiFillGithub /> woojiahao</a>
                <a target="_blank" href="https://discord.gg/programming"><SiDiscord /> Chill#4048</a>
                <a target="_blank" href="https://www.linkedin.com/in/woo-jia-hao-089346155/"><AiFillLinkedin /> Woo Jia Hao</a>
                <a target="_blank" href="https://twitter.com/woojiahao_"><AiFillTwitterSquare /> @woojiahao_</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      { backToTop && <BackToTop />}
    </div >
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
