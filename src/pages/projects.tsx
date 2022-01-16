import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import { getTitle } from "../utils/general"

interface ProjectsProps {
  data: {
    allProjectsJson: {
      edges: {
        node: {
          title: string
          description: string
          status: string
          technologies: {
            languages: string[]
            libraries: string[]
          }
          links: {
            documentation: string
            repository: string
            site: string
          }
          duration: {
            start: string
          }
          fields: {
            slug: string
          }
        }
      }[]
    }
  }
}

// TODO: Hover to preview project if possible
const Projects = ({ data }: ProjectsProps) => {
  const projects = data.allProjectsJson.edges
  console.log(projects)

  return (
    <Layout pageTitle="My Projects" tabTitle="Projects">
      {projects.map(({ node: project }) => {
        const title = getTitle(project.fields.slug, project.title)

        return (
          <div className="flex flex-col gap-2 mb-2 last:mb-0">
            <div className="flex justify-between items-center">
              <h2 className="m-0 xs:mb-4">{title}</h2>
              <div className="flex gap-3">
                {Object
                  .entries(project.links)
                  .filter(([_type, link]) => link)
                  .map(([type, link]) => {
                    return (
                      <a target="_blank" href={link} className="capitalize">{type}</a>
                    )
                  })}
              </div>
            </div>
            <div className="flex gap-2">
              {project.technologies.languages.map(l =>
                <span className="rounded-sm py-1 px-2 bg-language">{l}</span>
              )}
              {project.technologies.libraries && project.technologies.libraries.map(t =>
                <span className="rounded-sm py-1 px-2 bg-language">{t}</span>
              )}
            </div>
            <p>{project.description}</p>
          </div>
        )
      })
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allProjectsJson(
      filter: {published: {eq: true}},
      sort: {fields: [duration___start], order: DESC}
    ) {
      edges {
        node {
          title
          description
          status
          technologies {
            languages
            libraries
          }
          links {
            documentation
            repository
            site
          }
          duration {
            start
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Projects