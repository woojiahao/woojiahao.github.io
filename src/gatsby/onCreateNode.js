const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

module.exports = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  const nodeType = node.internal.type

  if (nodeType !== 'MarkdownRemark') return

  const defaultFilePath = createFilePath({
    node,
    getNode,
    basePath: 'posts',
    trailingSlash: false
  })

  const title = stripTitle(defaultFilePath.split('/').pop())

  if (title.startsWith('_')) return

  console.log(title)

  const filePath = title === 'about' ? '/about' : `/blog/posts/${title}`
  console.log(filePath)

  createNodeField({
    node,
    name: 'slug',
    value: filePath
  })
}

const stripTitle = title => title.replace(/\W/g, " ").trim().replace(/\s+/g, "-").toLowerCase()