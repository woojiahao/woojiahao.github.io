/**
 * Creates a slug for either .md or .json files.
 * .md => Blog post
 * .json => Project listing
 *
 * We have to generate and take the last segment of the default file path as we need to create custom slugs
 * for each post to be under the specified file folders.
 */

const { createFilePath } = require('gatsby-source-filesystem')
const stripTitle = require('./strip-title')
const path = require('path')

module.exports = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  const nodeType = node.internal.type

  // TODO: Remove parsing for ProjectsJson
  if (!['MarkdownRemark', 'ProjectsJson'].includes(nodeType)) return

  const defaultFilePath = createFilePath({
    node,
    getNode,
    basePath: 'posts',
    trailingSlash: false
  })

  const filename = defaultFilePath.split('/').pop()
  const title = stripTitle(filename)
  if (title.startsWith('_')) return

  let filePath

  if (nodeType === 'MarkdownRemark') {
    filePath = title === 'about' ? '/about' : path.join('blog', 'posts', title)
  } else if (nodeType === 'ProjectsJson') {
    filePath = path.join('projects', 'posts', filename)
  }

  console.log(filePath)

  createNodeField({
    node,
    name: 'slug',
    value: filePath
  })
}

const stripTitle = title => title.replace(/\W/g, " ").trim().replace(/\s+/g, "-").toLowerCase()