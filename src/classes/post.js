import {getTitle} from "../utils/general"

export default class Post {
  constructor(edges, target) {
    const matching = edges.filter(({node}) => node.fields.slug === target)
    const node = matching.length !== 0 ? matching[0].node : undefined

    if (!node) {
      this.published = false
      return
    }
    this.slug = node.fields.slug
    this.title = getTitle(this.slug, node.frontmatter.title)
    this.published = node.frontmatter.published
  }
}
