import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import {getTitle} from "../utils/general"
import blogPostStyles from "./blog-post.module.css"
import PostNavigation from "../components/post-navigation"
import Post from "../classes/post"

export default ({data, pageContext}) => {
  const post = data.markdownRemark
  const title = getTitle(post.fields.slug, post.frontmatter.title)
  const edges = data.allMarkdownRemark.edges

  const type = "Post"
  const nextPost = new Post(edges, pageContext.next, type)
  const prevPost = new Post(edges, pageContext.prev, type)

  const description = post.frontmatter.description || title
  const descriptionFormat = `${post.frontmatter.date} - ${title} - ${description}`

  return (
    <Layout pageTitle={title} tabTitle={title} description={descriptionFormat} backToTop>
      <div>
        <h4 className={blogPostStyles.subtitle}>Published on: {post.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{__html: post.html}}/>
      </div>
      <PostNavigation nextPost={nextPost} prevPost={prevPost} home="/blog"/>
    </Layout>
  )
}

export const query = graphql`
  query (
    $slug: String!,
    $prev: String, 
    $next: String
   ) {
    markdownRemark(
      fields: {slug: {eq: $slug}}
    ) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
      }
      fields { slug }
    }
    allMarkdownRemark(
      filter: {fields: {slug: {in: [$next, $prev]}}}
    ) {
      edges {
        node {
          fields { slug }
          frontmatter {
            title
            published
          }
        }
      }
    }
  }
`
