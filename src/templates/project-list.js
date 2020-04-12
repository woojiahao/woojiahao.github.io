import React from "react"
import Layout from "../components/layout"
import {graphql, Link} from "gatsby"
import projectStyles from "./project-list.module.css"
import {getTitle} from "../utils/general"
import PostPagination from "../components/post-pagination"

export default ({data, pageContext}) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      {posts.map(({node: post}) => {
        const title = getTitle(post.fields.slug, post.frontmatter.title)

        const ttr = post.timeToRead
        const timeToReadText = post.timeToRead <= 1 ? `${ttr} minute` : `${ttr} minutes`

        return (
          <div className={projectStyles.blogCard}>
            <Link to={post.fields.slug}>
              <h1 className={projectStyles.title}>{title}</h1>
            </Link>
            <div className={projectStyles.subtitle}>
              <h2>{post.frontmatter.date}</h2>
              <h2 className={projectStyles.timeToRead}>{timeToReadText}</h2>
            </div>
            <p className={projectStyles.excerpt}>{post.excerpt}</p>
          </div>
        )
      })}
      <PostPagination currentPage={pageContext.currentPage} numPages={pageContext.numPages}/>
    </Layout>
  )
}

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    allProjectsJson(
      filter: { frontmatter: { published: { eq: true } } },
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
