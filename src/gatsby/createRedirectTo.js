const createRedirectTo = (post, createRedirect) => {
  if (!post.frontmatter.redirect_from) return

  post.frontmatter.redirect_from
    .map(r => {
      return [
        {
          from: r,
          to: post.fields.slug
        },
        {
          from: encodeURI(r),
          to: post.fields.slug
        }
      ]
    })
    .flat()
    .forEach(({ from, to }) => {
      createRedirect({
        fromPath: from,
        toPath: to,
        isPermanent: true,
        redirectInBrowser: true
      })
    })
}

module.exports = createRedirectTo