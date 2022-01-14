import React from "react"
import Layout from "../components/Layout/Layout"
import { getTitle } from "../utils/general"
import Post from "../classes/post"
import ImageCarousel from "../components/ImageCarousel/ImageCarousel"
import BigButton from "../components/BigButton"
import PostNavigation from "../components/PostNavigation"
import { graphql } from "gatsby"

export default ({ data, pageContext }) => {
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
    <Layout pageTitle={title} tabTitle={title} description={`${title} - ${project.description}`}>
      <div>
        {project.images && <ImageCarousel folder={project.images} />}

        <div className="flex justify-between sm:flex-col">
          <div className="basis-3/5">
            <h2 className="mt-0">Description</h2>
            <p>{project.description}</p>

            {project.features &&
              <div>
                <h2 className="mt-0">Features</h2>
                <ul>
                  {project.features.map(l => <li>{l}</li>)}
                </ul>
              </div>
            }
          </div>

          <div className="basis-30p">
            <h2 className="mt-0">Technologies</h2>

            {languages &&
              <div>
                <h3 className="mt-0">{languageLabel}</h3>
                <ul>
                  {languages.map(l => <li>{l}</li>)}
                </ul>
              </div>
            }

            {libraries &&
              <div>
                <h3 className="mt-0">{libraryLabel}</h3>
                <ul>
                  {libraries.map(l => <li>{l}</li>)}
                </ul>
              </div>
            }

            <div className="flex flex-col mb-4">
              {repository && <BigButton to={repository} bg="#6c567b" fg="#ffffff">Repository</BigButton>}
              {documentation && <BigButton to={documentation} bg="#00bcd4" fg="#ffffff">Documentation</BigButton>}
              {site && <BigButton to={site} bg="#f67280" fg="#ffffff">Site</BigButton>}
            </div>

          </div>
        </div>
      </div>

      <PostNavigation nextPost={nextPost} prevPost={prevPost} home="/projects" />
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
