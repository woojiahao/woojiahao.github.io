import { graphql, Link, useStaticQuery } from "gatsby"
import * as PropTypes from "prop-types"
import React from "react"
import BackToTop from "../BackToTop/BackToTop"
import SEO from "../SEO"
import ThemeToggle from "../ThemeToggle"
import Footer from "./Footer"

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
      <div className="my-12 mx-auto max-w-layout-max xl:max-w-layout-xl md:max-w-layout-md sm:max-w-layout-sm xs:max-w-layout-xs xxs:max-w-layout-xxs">
        <ThemeToggle />
        <SEO title={tabTitle} description={description} tags={tags} />

        <header className="flex items-center justify-items-center justify-between md:flex-col md:items-center md:justify-center">
          <Link to="/">
            <h3 className="m-0 p-0 text-text">{siteTitle}</h3>
          </Link>
          <nav className="self-end justify-self-end md:self-center md:justify-self-center mt-4">
            <Link to="/blog">Blog</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About Me</Link>
            <a href="https://www.notion.so/woojiahao/48b21a97d71c4cd2bc9a9051bd7423a3?v=e2c493015ceb47cfa275a03f20895cb1">Recommendations</a>
          </nav>
        </header>

        <div className="flex justify-between items-center">
          <h1>{pageTitle}</h1>
          {pagination &&
            <p className="mt-8">
              Page {pagination.currentPage}/{pagination.numPages}
            </p>
          }
        </div>

        <div className="mb-8">
          {children}
        </div>

        <Footer repositoryUrl={repositoryUrl} />
      </div>

      {backToTop && <BackToTop />}
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
