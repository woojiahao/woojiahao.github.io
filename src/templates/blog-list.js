import React from "react"
import Layout from "../components/layout"
import {graphql, Link} from "gatsby"
import style from "./blog-list.module.css"
import {getTitle} from "../utils/general"
import PostListPagination from "../components/post-list-pagination"
import {AiFillTag} from "react-icons/all"

export default ({data, pageContext}) => {
  const posts = data.allMarkdownRemark.edges
  const {currentPage, numPages} = pageContext
  return (
    <Layout pagination={{currentPage, numPages}} pageTitle="Blog Posts" tabTitle="Blog">
      {posts.map(({node: post}) => {
        const title = getTitle(post.fields.slug, post.frontmatter.title)
        const tags = post.frontmatter.tags

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
            {tags && tags.length > 0 &&
            <div className={style.tags}>
              {tags.map(t => <div><AiFillTag style={{color: `#424242`}}/><span>{t}</span></div>)}
            </div>
            }
            <p className={style.excerpt}>{post.excerpt}</p>
          </div>
        )
      })}
      <PostListPagination currentPage={pageContext.currentPage} numPages={pageContext.numPages} redirect="blog"/>
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
            tags
          }
          fields { slug }
        }
      }
    }
  }
`
