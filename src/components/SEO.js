import {useLocation} from "@reach/router"
import {graphql, useStaticQuery} from "gatsby"
import * as PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import React from "react"

const SEO = ({title, tags, description}) => {
  const {pathname} = useLocation()
  const {site} = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    image
  } = site.siteMetadata

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname}`
  }

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description}/>
      <meta name="image" content={seo.image}/>
      {tags && tags.length > 0 && <meta property="keywords" content={tags.join(", ")}/> }

      {seo.url && <meta property="og:url" content={seo.url}/>}
      {seo.title && <meta property="og:title" content={seo.title}/>}
      {seo.description && <meta property="og:description" content={seo.description}/>}
      {seo.image && <meta property="og:image" content={seo.image}/>}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array,
  description: PropTypes.string
}

SEO.defaultProps = {
  title: null,
  tags: [],
  description: null
}

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
        image
      }
    }
  }
`
