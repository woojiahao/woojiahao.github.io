const path = require('path')
const createRedirectTo = require('./createRedirectTo')

const templates = {
  'general': 'GeneralPost.tsx',
  'blogList': 'BlogList.tsx',
  'blogPost': 'BlogPost.tsx'
}

const postsPerPage = 10

module.exports = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  await generateGeneralPosts(createPage, graphql)
  await generateBlog(createPage, createRedirect, graphql)
}

/**
 * Only used to create About Me page
 */
const generateGeneralPosts = async (createPage, graphql) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {type: {ne: null}}}) {
        edges {
          node {
            frontmatter { type }
            fields { slug }
          }
        }
      }
    }
  `)

  const about = data.allMarkdownRemark.edges.find(e => e.node.frontmatter.type === 'About').node

  createPage({
    path: about.fields.slug,
    component: generateTemplatePath('general'),
    context: {
      slug: about.fields.slug,
      title: 'About Me'
    }
  })
}

const generateBlog = async (createPage, createRedirect, graphql) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark(
        sort: {fields: [frontmatter___date, frontmatter___title], order: [ASC, ASC]},
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
  const posts = data.allMarkdownRemark.edges
  generateBlogList(posts, createPage)
  generateBlogPosts(posts, createPage, createRedirect)
}

const generateBlogList = (posts, createPage) => {
  const numPages = Math.ceil(posts.length / postsPerPage)

  for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
    const slug = pageNumber === 1 ? '/blog/' : path.join('/blog', pageNumber.toString(), '/')
    createPage({
      path: slug,
      component: generateTemplatePath('blogList'),
      context: {
        currentPage: pageNumber,
        numPages,
        limit: postsPerPage,
        skip: (pageNumber - 1) * postsPerPage
      }
    })
  }
}

const generateBlogPosts = (posts, createPage, createRedirect) => {
  posts.forEach(({ node, next, previous }) => {
    const slug = node.fields.slug
    createPage({
      path: slug,
      component: generateTemplatePath('blogPost'),
      context: {
        slug,
        next: next !== null ? next.fields.slug : null,
        prev: previous !== null ? previous.fields.slug : null
      }
    })

    createRedirectTo(node, createRedirect)
  })
}

const generateTemplatePath = key => path.resolve(path.join('./src', 'templates', templates[key]))