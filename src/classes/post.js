import {getTitle} from "../utils/general"

export default class Post {
  constructor(edges, target, type) {
    const matching = edges.filter(({node}) => node.fields.slug === target)
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
        throw "Invalid node type"
    }

    this.title = getTitle(this.slug, attributes.title)
    this.published = attributes.published
  }
}
