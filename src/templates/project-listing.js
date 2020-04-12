import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import {getTitle} from "../utils/general"
import Post from "../classes/post"
import PostNavigation from "../components/post-navigation"

export default ({data, pageContext}) => {
  const project = data.projectsJson
  const title = getTitle(project.fields.slug, project.title)
  const edges = data.allProjectsJson.edges

  const type = "Project"
  const nextPost = new Post(edges, pageContext.next, type)
  const prevPost = new Post(edges, pageContext.prev, type)

  return (
    <Layout title={title} hidePagination>
      <div>
      </div>
      <PostNavigation nextPost={nextPost} prevPost={prevPost} home="/projects"/>
    </Layout>
  )
}

// TODO Add more fields in the future like end and libraries
export const query = graphql`
  query (
    $slug: String!,
    $prev: String,
    $next: String
  ) {
    projectsJson(
      fields: {slug: {eq: $slug}}
    ) {
      title
      images
      lessons
      description
      status
      duration {
        start
        end
      }
      technologies {
        languages
        libraries
      }
      fields { slug }
    }
    allProjectsJson(
      filter: {fields: {slug: {in: [$next, $prev]}}}
    ) {
      edges { 
        node {
          fields { slug } 
          published
          title
        }
      }
    }
  }
`
