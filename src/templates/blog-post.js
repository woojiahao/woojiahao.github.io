import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import {getTitle} from "../utils/general"
import blogPostStyles from "./blog-post.module.css"

export default ({data}) => {
  const post = data.markdownRemark
  const title = getTitle(post.fields.slug, post.frontmatter.title)
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <h4 className={blogPostStyles.subtitle}>Published on: {post.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{__html: post.html}}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
      }
      fields {
        slug
      }
    }
  }
`
