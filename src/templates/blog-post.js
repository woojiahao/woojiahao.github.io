import React from "react"
import Layout from "../components/layout"
import {graphql, Link} from "gatsby"
import {getTitle} from "../utils/general"
import blogPostStyles from "./blog-post.module.css"
import {FaArrowAltCircleLeft, FaArrowAltCircleRight, FaHome} from "react-icons/all"

export default ({data, pageContext}) => {
  const post = data.markdownRemark
  const title = getTitle(post.fields.slug, post.frontmatter.title)

  const nextPost = new Post(filterNode(data.allMarkdownRemark.edges, pageContext.next))
  const prevPost = new Post(filterNode(data.allMarkdownRemark.edges, pageContext.prev))

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <h4 className={blogPostStyles.subtitle}>Published on: {post.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{__html: post.html}}/>
      </div>

      <div className={blogPostStyles.navigation}>
        <hr/>
        <div className={blogPostStyles.buttons}>
          {nextPost.published ?
            <p>
              <Link to={nextPost.slug}>
                <FaArrowAltCircleLeft style={{"margin-right": `15px`}}/>{nextPost.title}
              </Link>
            </p> :
            <p>
              <Link to="/blog">
                <FaHome style={{"margin-right": `15px`}}/> Home</Link>
            </p>
          }
          {prevPost.published ?
            <p>
              <Link to={prevPost.slug}>
                {prevPost.title}<FaArrowAltCircleRight style={{"margin-left": `15px`}}/>
              </Link>
            </p> :
            <p>
              <Link to="/blog">
                <FaHome style={{"margin-right": `15px`}}/> Home
              </Link>
            </p>
          }
        </div>
      </div>
    </Layout>
  )
}

class Post {
  constructor(node) {
    if (!node) {
      this.published = false
      return
    }
    this.slug = node.fields.slug
    this.title = getTitle(this.slug, node.frontmatter.title)
    this.published = node.frontmatter.published
  }
}

const filterNode = (edges, target) => {
  const matching = edges.filter(({node}) => node.fields.slug === target)
  return matching.length !== 0 ? matching[0].node : undefined
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
