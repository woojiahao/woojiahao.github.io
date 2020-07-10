import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import {getTitle} from "../utils/general"
import style from "./blog-post.module.css"
import PostNavigation from "../components/post-navigation"
import Post from "../classes/post"
import {AiFillTag} from "react-icons/all"

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
        <h4 className={style.subtitle}>Published on: {post.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{__html: post.html}}/>
      </div>
      {post.frontmatter.tags && post.frontmatter.tags.length > 0 &&
      <div className={style.tags}>
        <h4 className={style.subtitle}><AiFillTag style={{color: `gray`}}/>Tags:</h4>
        {post.frontmatter.tags.map(t => <span>{t}</span>)}
      </div>
      }
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
        tags
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
