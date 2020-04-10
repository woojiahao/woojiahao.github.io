import React from "react"
import Layout from "../components/layout"
import {graphql, Link} from "gatsby"
import blogStyles from "./blog.module.css"

export default ({data}) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      {posts.map(({node}) => (
        <div className={blogStyles.blogCard}>
          <Link to={node.fields.slug}>
            <h1 className={blogStyles.title}>{node.frontmatter.title}</h1>
          </Link>
          <div className={blogStyles.subtitle}>
            <h2>{node.frontmatter.date}</h2>
            <h2 className={blogStyles.timeToRead}>{node.timeToRead}</h2>
          </div>
          <p className={blogStyles.excerpt}>{node.excerpt}</p>
        </div>
      ))}
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
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
