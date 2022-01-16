import React from "react"
import Layout from "../components/Layout/Layout"
import {graphql} from "gatsby"

const GeneralPost = ({data, pageContext}) => (
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

export default GeneralPost