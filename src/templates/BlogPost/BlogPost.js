import React from "react"
import Layout from "../../components/Layout/Layout"
import { graphql } from "gatsby"
import { getTitle } from "../../utils/general"
import * as style from "./BlogPost.module.css"
import PostNavigation from "../../components/PostNavigation/PostNavigation"
import Post from "../../classes/post"
import { Link } from "gatsby"

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const title = getTitle(post.fields.slug, post.frontmatter.title)
  const edges = data.allMarkdownRemark.edges

  const type = "Post"
  const nextPost = new Post(edges, pageContext.next, type)
  const prevPost = new Post(edges, pageContext.prev, type)

  const description = post.frontmatter.description || title
  const descriptionFormat = `${post.frontmatter.date} - ${title} - ${description}`

  const tags = post.frontmatter.tags

  return (
    <Layout pageTitle={title} tabTitle={title} description={descriptionFormat} tags={tags} backToTop>
      <div>
        <h4 className={style.subtitle}>Published on: {post.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <p>
        <hr />
        <Link to="/rss.xml">Subscribe</Link> to the blog's RSS feed to get updates of the latest blog posts!
      </p>
      <PostNavigation nextPost={nextPost} prevPost={prevPost} home="/blog" />
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
        tags
      }
      fields { slug }
    }
    allMarkdownRemark(
      filter: {fields: {slug: {in: [$next, $prev]}}, frontmatter: {published: {eq: true}}}
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
