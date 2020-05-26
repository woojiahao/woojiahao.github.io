import React from "react"
import Layout from "../components/layout"
import {graphql, Link} from "gatsby"
import projectStyles from "./project-list.module.css"
import {getTitle} from "../utils/general"
import PostPagination from "../components/post-pagination"

export default ({data, pageContext}) => {
  const posts = data.allProjectsJson.edges
  const {currentPage, numPages} = pageContext

  return (
    <Layout pagination={{currentPage, numPages}} pageTitle="My Projects" tabTitle="Projects">

      {posts.map(({node: post}) => {
        const title = getTitle(post.fields.slug, post.title)
        let statusColor = "#ffaaa5"
        switch (post.status) {
          case "Completed":
            statusColor = "a8e6cf"
            break
          case "In Progress":
            statusColor = "ffd3b6"
            break
          case "Archived":
            statusColor = "dcedc1"
            break
          default:
            throw new Error("Invalid status")
        }

        return (
          <div>
            <div className={projectStyles.projectTitle}>
              <Link to={post.fields.slug}>
                <h2>{title}</h2>
              </Link>
              <div>
                {post.technologies.languages.map(l => <span className={projectStyles.language}>{l}</span>)}
                <span style={{backgroundColor: `#${statusColor}`, color: `rgba(0, 0, 0, 0.8)`}}
                     className={projectStyles.status}>{post.status}</span>
              </div>
            </div>

            <p className={projectStyles.description}>{post.description}</p>
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
      filter: {published: {eq: true}},
      sort: {fields: [duration___start], order: DESC},
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          title
          fields { slug }
          technologies { languages }
          status
          description
          images
        }
      }
    }
  }
`
