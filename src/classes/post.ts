import { getTitle } from "../utils/general"

export default class Post {
  title: string
  published: boolean
  slug: string

  constructor(edges: any, target: string, type: string) {
    const matching = edges.filter(({ node }) => node.fields.slug === target)
    const node = matching.length !== 0 ? matching[0].node : undefined

    if (!node) {
      this.published = false
      return
    }
    this.slug = node.fields.slug

    let attributes

    switch (type) {
      case "Project":
        attributes = node
        break
      case "Post":
        attributes = node.frontmatter
        break
      default:
        throw new Error("Invalid node type")
    }

    this.title = getTitle(this.slug, attributes.title)
    this.published = attributes.published
  }
}
