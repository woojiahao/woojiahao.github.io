import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import PostListPagination from "../components/PostListPagination"
import { getTitle } from "../utils/general"

export default ({ data, pageContext }) => {
  const posts = data.allProjectsJson.edges
  const { currentPage, numPages } = pageContext

  return (
    <Layout pagination={{ currentPage, numPages }} pageTitle="My Projects" tabTitle="Projects">

      {posts.map(({ node: post }) => {
        const title = getTitle(post.fields.slug, post.title)
        let statusColor = "#ffaaa5"
        switch (post.status) {
          case "Completed":
            statusColor = "#a8e6cf"
            break
          case "In Progress":
            statusColor = "#ffd3b6"
            break
          case "Archived":
            statusColor = "#dcedc1"
            break
          default:
            throw new Error("Invalid status")
        }

        return (
          <div>
            <div className="flex justify-between items-center mb-4 xs:flex-col xs:items-start">
              <Link to={post.fields.slug}>
                <h2 className="m-0 xs:mb-4">{title}</h2>
              </Link>
              <div>
                {post.technologies.languages.map(l => <span className="rounded-sm p-1 bg-language mr-4">{l}</span>)}
                <span className={`bg-[${statusColor}] text-status-text rounded-sm p-1`}>{post.status}</span>
              </div>
            </div>

            <p className="mb-4">{post.description}</p>
          </div>
        )
      })}
      <PostListPagination currentPage={pageContext.currentPage} numPages={pageContext.numPages} redirect="projects" />
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
