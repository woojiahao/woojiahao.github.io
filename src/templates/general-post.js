import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"

export default ({data, pageContext}) => (
  <div>
    <Layout pageTitle={pageContext.title} tabTitle={pageContext.title} backToTop>
      <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
    </Layout>
  </div>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) { html }
  }
`
