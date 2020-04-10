import React from "react"
import Layout from "../components/layout"
import {graphql, Link} from "gatsby"
import blogStyles from "./blog.module.css"
import {getTitle} from "../utils/general"

export default ({data}) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      {posts.map(({node: post}) => {
        const title = getTitle(post.fields.slug, post.frontmatter.title)

        const ttr = post.timeToRead
        const timeToReadText = post.timeToRead <= 1 ? `${ttr} minute` : `${ttr} minutes`

        return (
          <div className={blogStyles.blogCard}>
            <Link to={post.fields.slug}>
              <h1 className={blogStyles.title}>{title}</h1>
            </Link>
            <div className={blogStyles.subtitle}>
              <h2>{post.frontmatter.date}</h2>
              <h2 className={blogStyles.timeToRead}>{timeToReadText}</h2>
            </div>
            <p className={blogStyles.excerpt}>{post.excerpt}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { published: { eq: true } } }, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
