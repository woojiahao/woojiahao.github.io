const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

const postsPerPage = 10

/**
 * Creates a slug for either .md or .json files.
 * .md => Blog post
 * .json => Project listing
 *
 * We have to generate and take the last segment of the default file path as we need to create custom slugs
 * for each post to be under the specified file folders.
 */
exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions
  const nodeType = node.internal.type
  if ([`MarkdownRemark`, `ProjectsJson`].indexOf(nodeType) >= 0) {
    const defaultFilePath = createFilePath({node, getNode, basePath: `pages`})
    const parts = defaultFilePath.split("/")
    const filename = parts[parts.length - 2]
    // If the file is a .md file, it's a blog post
    // If the file is a .json file, it's a project listing
    const parent = nodeType === `MarkdownRemark` ? `blog` : `projects`
    const filePath = `/${parent}/posts/${filename}`

    // Adds a field to the GraphQL schema with fields { slug }
    createNodeField({
      node,
      name: `slug`,
      value: filePath
    })
  }
}

/**
 * Creates the pages from the respective slugs.
 */
// TODO Add page published condition checking to JSON files as well
exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const result = await graphql(`
    query {
      allProjectsJson(
        sort: {fields: duration___start, order: ASC},
        filter: {published: {eq: true}}
      ) {
        edges {
          node { fields { slug } }
          next { fields { slug } }
          previous { fields { slug } }
        }
      }
      allMarkdownRemark(
        sort: {fields: frontmatter___date, order: ASC}, 
        filter: {frontmatter: {published: {eq: true}}}
      ) {
        edges {
          node { fields { slug } }
          next { fields { slug } }
          previous { fields { slug } }
        }
      }
    }
  `)

  const projectListings = result.data.allProjectsJson.edges
  generatePages(projectListings, "project-list", "project-listing", "projects", createPage)

  const blogPosts = result.data.allMarkdownRemark.edges
  generatePages(blogPosts, "blog-list", "blog-post", "blog", createPage)
}

const generatePages = (edges, listTemplate, postTemplate, category, createPage) => {
  const numPages = Math.ceil(edges.length / postsPerPage)
  for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
    const slug = pageNumber === 1 ? `/${category}/` : `/${category}/${pageNumber}`
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/${listTemplate}.js`),
      context: {
        currentPage: pageNumber,
        numPages,
        limit: postsPerPage,
        skip: (pageNumber - 1) * postsPerPage
      }
    })
  }

  edges.forEach(({node, next, previous}) => {
    const slug = node.fields.slug
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/${postTemplate}.js`),
      context: {
        slug,
        next: processNodeSlug(next),
        prev: processNodeSlug(previous)
      }
    })
  })
}

const processNodeSlug = node => node !== null ? node.fields.slug : null
