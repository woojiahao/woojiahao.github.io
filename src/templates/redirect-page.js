import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              siteUrl
            }
          }          
        }
      `}
      render={data => {
        return (
          <Helmet>
            <meta
              http-equiv="refresh"
              content={`0;url=${data.site.siteMetadata.siteUrl}${props.pageContext.redirect}`}/>
          </Helmet>
        )
      }}
    />
  )
}