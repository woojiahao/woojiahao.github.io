import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import {getTitle} from "../utils/general"
import Post from "../classes/post"
import PostNavigation from "../components/post-navigation"
import style from "./project-listing.module.css"

export default ({data, pageContext}) => {
  const project = data.projectsJson
  const title = getTitle(project.fields.slug, project.title)
  const languages = project.technologies.languages
  const libraries = project.technologies.libraries

  const type = "Project"
  const edges = data.allProjectsJson.edges
  const nextPost = new Post(edges, pageContext.next, type)
  const prevPost = new Post(edges, pageContext.prev, type)

  const languageLabel = languages && languages.length > 1 ? "Languages" : "Language"
  const libraryLabel = libraries && libraries.length > 1 ? "Libraries" : "Library"

  return (
    <Layout title={title} hidePagination>
      <div className={style.content}>
        <h2>Technologies</h2>
        {languages &&
        <div>
          <h3>{languageLabel}</h3>
          <ul>
            {languages.map(l => <li>{l}</li>)}
          </ul>
        </div>
        }
        {libraries &&
        <div>
          <h3>{libraryLabel}</h3>
          <ul>
            {libraries.map(l => <li>{l}</li>)}
          </ul>
        </div>
        }

        <h2>Description</h2>
        <p>{project.description}</p>

        <h2>Lessons</h2>
        <ul>
          {project.lessons.map(l => <li>{l}</li>)}
        </ul>
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
