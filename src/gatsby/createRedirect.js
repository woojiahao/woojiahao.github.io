const createRedirect = (post, createRedirect) => {
  if (!post.frontmatter.redirect_from) return

  post.frontmatter.redirect_from
    .map(r => ({
      from: r,
      to: post.fields.slug
    }))
    .forEach(({ from, to }) => {
      createRedirect({
        fromPath: from,
        toPath: to,
        isPermanent: true,
        redirectInBrowser: true
      })
    })
}

module.exports = createRedirect