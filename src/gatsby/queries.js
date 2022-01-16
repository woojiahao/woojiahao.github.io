module.exports = {
  generalPostQuery: `
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
  `,
  blogPostsQuery: `
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
  `
}