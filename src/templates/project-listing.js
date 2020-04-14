import React from "react"
import Layout from "../components/layout"
import {getTitle} from "../utils/general"
import Post from "../classes/post"
import style from "./project-listing.module.css"
import ImageCarousel from "../components/image-carousel"
import BigButton from "../components/big-button"
import PostNavigation from "../components/post-navigation"
import {graphql} from "gatsby"

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

  const links = project.links
  const repository = links.repository
  const documentation = links.documentation
  const site = links.site

  return (
    <Layout title={title} hidePagination>
      <div className={style.listing}>
        {project.images && <ImageCarousel folder={project.images}/>}

        <div className={style.content}>
          <div className={style.mainContent}>
            <h2>Description</h2>
            <p>{project.description}</p>

            {project.features &&
            <div>
              <h2>Features</h2>
              <ul>
                {project.features.map(l => <li>{l}</li>)}
              </ul>
            </div>
            }
          </div>

          <div className={style.sidebar}>
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

            <div className={style.links}>
              {repository && <BigButton to={repository} bg="#6c567b" fg="white">Repository</BigButton>}
              {documentation && <BigButton to={documentation} bg="#00bcd4" fg="white">Documentation</BigButton>}
              {site && <BigButton to={site} bg="#f67280" fg="white">Site</BigButton>}
            </div>

          </div>
        </div>
      </div>

      <PostNavigation nextPost={nextPost} prevPost={prevPost} home="/projects"/>
    </Layout>
  )
}

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
      features
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
      links {
        documentation
        repository
        site
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
