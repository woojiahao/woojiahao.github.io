const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const customRedirectFrom = require(`./src/utils/custom-redirect-from`)
const stripTitle = require(`./src/utils/strip-title`)

const postsPerPage = 10

/**
 * Creates a slug for either .md or .json files.
 * .md => Blog post
 * .json => Project listing
 *
 * We have to generate and take the last segment of the default file path as we need to create custom slugs
 * for each post to be under the specified file folders.
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  const nodeType = node.internal.type
  if ([`MarkdownRemark`, `ProjectsJson`].indexOf(nodeType) >= 0) {
    const defaultFilePath = createFilePath({ node, getNode, basePath: `pages` })
    const parts = defaultFilePath.split("/")
    const filename = parts[parts.length - 2]
    let filePath

    switch (nodeType) {
      case `MarkdownRemark`:
        switch (filename) {
          case `about`:
            filePath = `/about`
            break
          case `recommendations`:
            filePath = `/recommendations`
            break
          default:
            filePath = `/blog/posts/${stripTitle(filename)}`
        }
        break
      case `ProjectsJson`:
        filePath = `/projects/posts/${filename}`
        break
      default:
        throw new Error(`Invalid node type found`)
    }

    console.log(filePath)

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
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  await generatePosts(createPage, createRedirect, graphql)
  await generateGeneralPosts(createPage, graphql)
}

// Generates pages like about and recommendations
const generateGeneralPosts = async (createPage, graphql) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark(
        filter: {frontmatter: {type: {ne: null}}}
      ) {
        edges {
          node {
            frontmatter { type }
            fields { slug }
          }
        }
      }
    }
  `)

  const generalPosts = data.allMarkdownRemark.edges

  const aboutPage = generalPosts.filter(({ node }) => node.frontmatter.type === `About`)[0].node
  createPage({
    path: aboutPage.fields.slug,
    component: path.resolve(`./src/templates/general-post.js`),
    context: {
      slug: aboutPage.fields.slug,
      title: `About Me`
    }
  })
  const recommendationPage = generalPosts.filter(({ node }) => node.frontmatter.type === `Recommendations`)[0].node
  createPage({
    path: recommendationPage.fields.slug,
    component: path.resolve(`./src/templates/general-post.js`),
    context: {
      slug: recommendationPage.fields.slug,
      title: `My Recommendations`
    }
  })
}

// Generates blog posts and project listings
const generatePosts = async (createPage, createRedirect, graphql) => {
  const { data } = await graphql(`
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
        filter: {frontmatter: {published: {eq: true}, type: {eq: null}}}
      ) {
        edges {
          node { 
            fields { slug } 
            frontmatter { redirect_from }
          }
          next { fields { slug } }
          previous { fields { slug } }
        }
      }
    }
  `)

  const blogPosts = data.allMarkdownRemark.edges
  generatePages(blogPosts, "blog-list", "blog-post", "blog", createPage, createRedirect)

  const projectListings = data.allProjectsJson.edges
  generatePages(projectListings, "project-list", "project-listing", "projects", createPage, createRedirect)
}

const generatePages = (edges, listTemplate, postTemplate, category, createPage, createRedirect) => {
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

  edges.forEach(({ node, next, previous }) => {
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

    if (category === "blog") {
      customRedirectFrom(node, createRedirect, createPage)
    }
  })
}

const processNodeSlug = node => node !== null ? node.fields.slug : null
