import React from "react"
import Layout from "../../components/Layout/Layout"
import { graphql, Link } from "gatsby"
import * as style from "./BlogList.module.css"
import { getTitle } from "../../utils/general"
import PostListPagination from "../../components/PostListPagination"

export default ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const { currentPage, numPages } = pageContext
  return (
    <Layout pagination={{ currentPage, numPages }} pageTitle="My Blog" tabTitle="Blog">
      {posts.map(({ node: post }) => {
        const title = getTitle(post.fields.slug, post.frontmatter.title)

        const ttr = post.timeToRead
        const timeToReadText = post.timeToRead <= 1 ? `${ttr} minute` : `${ttr} minutes`

        return (
          <div className={style.blogCard}>
            <Link to={post.fields.slug}>
              <h2 className={style.blogTitle}>{title}</h2>
            </Link>
            <div className={style.subtitle}>
              <h3>{post.frontmatter.date}</h3>
              <h3 className={style.timeToRead}>{timeToReadText}</h3>
            </div>
            <p className={style.excerpt}>{post.excerpt}</p>
          </div>
        )
      })}
      <PostListPagination currentPage={pageContext.currentPage} numPages={pageContext.numPages} redirect="blog" />
    </Layout>
  )
}

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true }, type: { eq: null } } },
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, DESC] },
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
