export const getTitle = (slug, title) => {
  const parts = slug.split("/")
  const defaultTitle = parts[parts.length - 2].replace("-", " ")
  return title || defaultTitle
}
