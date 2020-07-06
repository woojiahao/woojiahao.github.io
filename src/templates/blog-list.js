import React from "react"
import Layout from "../components/layout"
import {graphql, Link} from "gatsby"
import blogStyles from "./blog-list.module.css"
import {getTitle} from "../utils/general"
import PostPagination from "../components/post-pagination"

export default ({data, pageContext}) => {
  const posts = data.allMarkdownRemark.edges
  const {
    currentPage,
    numPages
  } = pageContext
  return (
    <Layout pagination={{currentPage, numPages}} pageTitle="Blog Posts" tabTitle="Blog">

      {posts.map(({node: post}) => {
        const title = getTitle(post.fields.slug, post.frontmatter.title)

        const ttr = post.timeToRead
        const timeToReadText = post.timeToRead <= 1 ? `${ttr} minute` : `${ttr} minutes`

        return (
          <div className={blogStyles.blogCard}>
            <Link to={post.fields.slug}>
              <h2 className={blogStyles.blogTitle}>{title}</h2>
            </Link>
            <div className={blogStyles.subtitle}>
              <h3>{post.frontmatter.date}</h3>
              <h3 className={blogStyles.timeToRead}>{timeToReadText}</h3>
            </div>
            <p className={blogStyles.excerpt}>{post.excerpt}</p>
          </div>
        )
      })}
      <PostPagination currentPage={pageContext.currentPage} numPages={pageContext.numPages} redirect="blog"/>
    </Layout>
  )
}

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true }, type: { eq: null } } },
      sort: { fields: [frontmatter___date], order: DESC },
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          fields { slug }
        }
      }
    }
  }
`
