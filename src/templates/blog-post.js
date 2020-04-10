import React from "react"
import Layout from "../components/layout"
import {graphql, Link} from "gatsby"
import {getTitle} from "../utils/general"
import blogPostStyles from "./blog-post.module.css"

export default ({data, pageContext}) => {
  const post = data.markdownRemark
  const title = getTitle(post.fields.slug, post.frontmatter.title)

  const nextPost = new Post(data.allMarkdownRemark.edges.filter(({node}) => node.fields.slug === pageContext.next)[0].node)
  const prevPost = new Post(data.allMarkdownRemark.edges.filter(({node}) => node.fields.slug === pageContext.prev)[0].node)

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <h4 className={blogPostStyles.subtitle}>Published on: {post.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{__html: post.html}}/>
      </div>
      <div className={blogPostStyles.navigation}>
        {nextPost.published && <p><Link to={nextPost.slug}>Next: {nextPost.title}</Link></p>}
        {prevPost.published && <p><Link to={prevPost.slug}>Prev: {prevPost.title}</Link></p>}
      </div>
    </Layout>
  )
}

class Post {
  constructor(node) {
    this.slug = node.fields.slug
    this.title = getTitle(this.slug, node.frontmatter.title)
    this.published = node.frontmatter.published
  }
}

export const query = graphql`
  query ($slug: String!, $prev: String, $next: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
      }
      fields {
        slug
      }
    }
    allMarkdownRemark(filter: {fields: {slug: {in: [$next, $prev]}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            published
          }
        }
      }
    }
  }
`
