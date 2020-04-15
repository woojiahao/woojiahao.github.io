import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"

export default ({data, pageContext}) => (
  <Layout pageTitle={pageContext.title}>
    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) { html }
  }
`
