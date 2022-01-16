import React from 'react'
import Helmet from 'react-helmet'

const RedirectPage = (props) => {
  const url = typeof window !== "undefined" ? window.location.origin : ""
  return (
    <Helmet>
      <meta http-equiv="refresh"
        content={`0;url=${url}${props.pageContext.redirect}`} />
    </Helmet>
  )
}

export default RedirectPage