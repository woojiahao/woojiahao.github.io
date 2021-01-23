const path = require('path')

function customRedirectFrom(post, createRedirect, createPage) {
  const redirectPageTemplate = path.resolve('./src/templates/redirect-page.js')

  const redirects = []
  if (post.frontmatter.redirect_from) {
    redirects.push({
      from: `${post.frontmatter.redirect_from}`,
      to: `${post.fields.slug}`
    })
  }

  redirects.forEach(redirect => {
    createRedirect({
      fromPath: redirect.from,
      toPath: redirect.to,
      isPermanent: true,
      redirectInBrowser: true
    })

    createPage({
      path: redirect.to,
      component: redirectPageTemplate,
      context: {
        redirect: redirect.to
      }
    })
  })
}

module.exports = customRedirectFrom